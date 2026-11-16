#!/usr/bin/env python3
"""Gera os bancos de questões do 6º período no formato da aba "provas" do site.

Fonte: os JSON de MED/6_fase/_questoes (um por UC e matéria; formato em _questoes/FORMATO.md).
Saída:  medicina/conteudo/<uc>/<materia>/data.js  (window.UC = {banco, turmas, temas, selos})
        e as figuras das questões em .../img/.

Uso:  python3 medicina/bancos.py ~/Documents/MED/6_fase/_questoes
Só stdlib. Depois rode `python3 medicina/build.py` para conferir os caminhos.

Os JSON ficam fora do repositório (têm anotações de bastidor: de que arquivo saiu cada questão).
Para o site vai só o que serve para estudar: enunciado, alternativas, resposta, comentário e de
onde veio a resposta (selo).
"""
import collections
import html
import json
import re
import shutil
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "conteudo"

# arquivo de origem → (uc, matéria) = pasta em conteudo/ e endereço no site-data.js
BANCOS = {
    "UC16_Farmaco.json": ("uc16", "farmaco"),
    "UC16_Fisiopato.json": ("uc16", "fisiopato"),
    "UC16_Tutoria.json": ("uc16", "tutoria"),
    "UC17_Farmaco.json": ("uc17", "farmaco"),
    "UC17_Fisiopato.json": ("uc17", "fisiopato"),
    "UC17_Tutoria.json": ("uc17", "tutoria"),
    "UC17_Radio.json": ("uc17", "radio"),
    "UC18_Farmaco.json": ("uc18", "farmaco"),
    "UC18_Fisiopato.json": ("uc18", "fisiopato"),
    "UC18_Tutoria.json": ("uc18", "tutoria"),
    "HP_Hemato.json": ("hp6", "hemato"),
    "HP_EndoRodrigo.json": ("hp6", "endo-rodrigo"),
}

# nome do filtro de turma, quando o banco não é dividido por turma
ROTULO_FILTRO = {("hp6", "hemato"): "Origem"}

# de onde veio a resposta (etiqueta que aparece em cada questão)
SELOS = {
    "OF": {"l": "gabarito do professor", "c": "ok"},
    "VE": {"l": "resolução de veterano", "c": "warn"},
    "IN": {"l": "resposta inferida", "c": "warn"},
    "": {"l": "sem gabarito", "c": "err"},
}
PRIORIDADE = {"OF": 0, "VE": 1, "IN": 2, "": 3}
BASTIDOR = re.compile(r"F\d{4}|metadado|cat[áa]logo|nome do arquivo|c[óo]pia", re.I)
LETRAS = "ABCDEFGH"


def esc(s):
    return html.escape(s or "", quote=False).replace("\n", "<br>")


def limpo(s):
    """Tira referências aos arquivos de origem (F0123 p2) de um texto que vai para o site."""
    s = re.sub(r"\s*F\d{4}(?:\s*p\d+(?:[–-]\d+)?)?", "", s or "")
    return re.sub(r"\(\s*\)", "", s).strip()


def norm(s):
    s = unicodedata.normalize("NFKD", s.lower()).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]", "", s)


def rotulo_turma(q):
    """Etiqueta do filtro de turma: T10 · PM T10 · APF T10 · T9 atividades · Sem turma."""
    p = re.sub(r"\s*\([^)]*\)", "", q["prova"])
    p = re.sub(r"\s+Q[D]?\d*\w*$", "", p).strip(" ,")
    t = q["turma"]
    if q["aval"] == "PM":
        return "PM " + (t or "s/ turma")
    if q["aval"] == "APF":
        return "APF " + (t or "s/ turma")
    if "atividade" in p:
        return (t + " " if t else "") + "atividades"
    if "prática" in p:
        return (t + " " if t else "") + "prática"
    if t:
        return t
    if "compilado" in p:
        return "Compilado"
    if "quiz" in p.lower():
        return "Quiz"
    return ("Sem turma " + q["versao"]).strip()


def ordem_turma(t):
    n = int(re.search(r"\d+", t).group()) if re.search(r"\d+", t) else 99
    grupo = 1 if t.startswith("PM") else 2 if t.startswith("APF") else 3 if re.search(r"atividades|prática", t) \
        else 0 if re.match(r"T\d+$", t) else 4
    return (grupo, n, t)


def converte(q, img_rel):
    """Uma questão do JSON → entrada do banco do site."""
    obj = q["tipo"] != "discursiva" and len(q["opts"]) >= 2
    tem_resposta = q["ans"] is not None or bool(q["resp"])
    enun = esc(q["enun"])
    if q.get("img"):
        enun += '<br><img src="{}" alt="Figura da questão" loading="lazy" style="max-width:100%;border-radius:8px;margin-top:10px">'.format(
            img_rel + Path(q["img"]).name)
    itens = [esc(x) for x in q["itens"]]
    obs = q["duvida"] if (not tem_resposta or q["conf"] == "baixa") and q["duvida"] and not BASTIDOR.search(q["duvida"]) else ""
    com = esc(limpo(q["why"]))
    if obs:
        com += ("<br>" if com else "") + "<b>Observação:</b> " + esc(obs)
    e = {"id": q["id"], "sp": int(q["sp"][2:]) if re.match(r"SP\d+$", q["sp"]) else "", "tus": [rotulo_turma(q)],
         "prova": q["prova"], "selo": q["selo"] if tem_resposta else "", "tipo": q["tipo"], "tema": q["tema"], "enun": enun}
    if obj and q["ans"] is not None:
        e["itens"] = itens
        e["alts"] = [esc(o) for o in q["opts"]]
        e["gab"] = LETRAS[q["ans"]]
    else:
        # discursiva, associação com os pares em resp, ou objetiva sem gabarito:
        # as alternativas (se houver) entram no enunciado e a pessoa se corrige
        e["itens"] = itens + (["{}) {}".format(LETRAS[i], esc(o)) for i, o in enumerate(q["opts"])] if obj else [])
        e["gab"] = esc(limpo(q["resp"])) if q["resp"] else "Sem gabarito nas fontes."
    if com:
        e["com"] = com
    if q["conf"] == "baixa" and tem_resposta:
        e["incerta"] = True
    return e


def gera(src, uc, mat):
    qs = json.loads(src.read_text(encoding="utf-8"))
    pasta = OUT / uc / mat
    pasta.mkdir(parents=True, exist_ok=True)
    img_rel = "conteudo/{}/{}/img/".format(uc, mat)

    # 1) questões idênticas (mesmo texto, mesmas alternativas, mesma resposta) viram uma só, com todas as turmas
    grupos = collections.OrderedDict()
    for q in qs:
        k = (norm(q["enun"] + "|" + "|".join(q["itens"]) + "|" + "|".join(q["opts"])), q["ans"], q["tipo"] == "discursiva")
        grupos.setdefault(k, []).append(q)
    banco, raiz = [], {}
    for g in grupos.values():
        base = sorted(g, key=lambda q: PRIORIDADE[q["selo"]])[0]
        e = converte(base, img_rel)
        e["tus"] = list(collections.OrderedDict((rotulo_turma(q), 1) for q in g))
        e["prova"] = " · ".join(collections.OrderedDict((q["prova"], 1) for q in g))
        for q in g:
            raiz[q["id"]] = q["familia"] or q["id"]
            if q.get("img"):
                (pasta / "img").mkdir(exist_ok=True)
                shutil.copyfile(src.parent / q["img"], pasta / "img" / Path(q["img"]).name)
        e["_ids"] = [q["id"] for q in g]
        banco.append(e)

    # 2) variações da mesma questão em outras turmas (campo familia): conta para o "caiu N×"
    fam = collections.defaultdict(set)
    for e in banco:
        for i in e["_ids"]:
            fam[raiz[i]].update(e["tus"])
    for e in banco:
        n = max(len(fam[raiz[i]]) for i in e.pop("_ids"))
        if n > len(e["tus"]):
            e["rep"] = n

    turmas = sorted({t for e in banco for t in e["tus"]}, key=ordem_turma)
    temas = [t for t, _ in collections.Counter(e["tema"] for e in banco).most_common()]
    uc_obj = {"banco": banco, "turmas": turmas, "temas": temas, "selos": SELOS}
    if (uc, mat) in ROTULO_FILTRO:
        uc_obj["tuLabel"] = ROTULO_FILTRO[(uc, mat)]
    (pasta / "data.js").write_text(
        "/* {} · gerado por medicina/bancos.py a partir de {} — não editar à mão */\nwindow.UC={};\n".format(
            "{}/{}".format(uc, mat), src.name, json.dumps(uc_obj, ensure_ascii=False, separators=(",", ":"))),
        encoding="utf-8")
    c = collections.Counter(e["selo"] for e in banco)
    print("{:22} {:4} questões ({} na origem) · OF {} · VE {} · IN {} · sem gabarito {} · {} turmas".format(
        src.name, len(banco), len(qs), c["OF"], c["VE"], c["IN"], c[""], len(turmas)))
    return len(banco)


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    origem = Path(sys.argv[1]).expanduser()
    total = 0
    for nome, (uc, mat) in BANCOS.items():
        f = origem / nome
        if not f.is_file():
            print("  (sem {} — pulado)".format(nome))
            continue
        total += gera(f, uc, mat)
    print("Total: {} questões".format(total))


if __name__ == "__main__":
    main()
