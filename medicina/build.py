#!/usr/bin/env python3
"""Gera medicina/index.html a partir do catalog.json.

Uso:
  python3 medicina/build.py           # regenera o index a partir do catálogo
  python3 medicina/build.py --scan    # + varre 5-fase/**/*.html: adiciona guias
                                      #   novos ao catálogo, remove entradas cujo
                                      #   arquivo sumiu e regenera o index

Sem dependências fora da stdlib. Pode ser rodado de qualquer diretório.
"""

import argparse
import html
import json
import re
import unicodedata
from datetime import date, datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent
CATALOG_PATH = ROOT / "catalog.json"
GUIDES_DIR = ROOT / "5-fase"
INDEX_PATH = ROOT / "index.html"

# ---------------------------------------------------------------------------
# Tabelas editáveis — nomes de exibição para os slugs das pastas.
# Pasta nova sem entrada aqui: "ucN" vira "UCN" sozinho; o resto vira
# Title Case do slug ("nefro-uro" -> "Nefro Uro"). Edite à vontade.
# ---------------------------------------------------------------------------
UC_ORDER = ["UC13", "HP Manifestações Abdominais"]  # seções fixas, nesta ordem
UC_NAMES = {
    "uc13": "UC13",
    "hp-abdomen": "HP Manifestações Abdominais",
}
MATERIA_NAMES = {
    "tutoria": "Tutoria",
    "anato-fisio": "Anatomia + Fisiologia",
    "pato": "Patologia",
    "farmaco": "Farmacologia",
    "lab": "Laboratório",
    "procedimentos": "Procedimentos",
    "clinica": "Clínica",
}
TIPO_LABELS = {
    "guia-sp": "guia de SP",
    "guia-prova": "guia de prova",
    "flashcards": "flashcards",
    "banco": "banco de questões",
    "simulado": "simulado",
}


def display_name(slug, table):
    if slug in table:
        return table[slug]
    m = re.fullmatch(r"uc(\d+)", slug)
    if m:
        return "UC" + m.group(1)
    return slug.replace("-", " ").title()


def infer_tipo(filename):
    """Tipo a partir dos tokens do nome do arquivo; None se nada casar."""
    stem = filename.lower()
    if stem.endswith(".html"):
        stem = stem[: -len(".html")]
    tokens = stem.split("-")
    if "flashcards" in tokens or "flashcard" in tokens:
        return "flashcards"
    if "banco" in tokens:
        return "banco"
    if any(t.startswith("simulad") for t in tokens):
        return "simulado"
    if any(re.fullmatch(r"sp\d+", t) for t in tokens) or "inicial" in tokens or "aprofundamento" in tokens:
        return "guia-sp"
    if any(re.fullmatch(r"[ab]\d", t) for t in tokens) or "revisao" in tokens or "guia" in tokens:
        return "guia-prova"
    return None


def extract_title(path):
    text = Path(path).read_text(encoding="utf-8", errors="replace")
    m = re.search(r"<title>(.*?)</title>", text, re.I | re.S)
    if not m:
        return Path(path).stem
    return re.sub(r"\s+", " ", html.unescape(m.group(1))).strip()


def load_catalog():
    if not CATALOG_PATH.exists():
        return []
    return json.loads(CATALOG_PATH.read_text(encoding="utf-8"))


def save_catalog(entries):
    CATALOG_PATH.write_text(
        json.dumps(entries, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )


def scan(entries):
    """Remove entradas sem arquivo e adiciona arquivos sem entrada."""
    changed = False
    kept = []
    for e in entries:
        if (ROOT / e["arquivo"]).is_file():
            kept.append(e)
        else:
            print("- removido do catálogo (arquivo sumiu): " + e["arquivo"])
            changed = True
    entries = kept

    known = {e["arquivo"] for e in entries}
    for p in sorted(GUIDES_DIR.rglob("*.html")):
        rel = p.relative_to(ROOT).as_posix()
        if rel in known:
            continue
        parts = p.relative_to(GUIDES_DIR).parts
        if len(parts) < 2:
            print("! ignorado (esperado 5-fase/<uc>/<materia>/arquivo.html): " + rel)
            continue
        uc = display_name(parts[0], UC_NAMES)
        materia = display_name(parts[1], MATERIA_NAMES) if len(parts) >= 3 else "Geral"
        tipo = infer_tipo(p.name)
        aviso = ""
        if tipo is None:
            tipo = "guia-prova"
            aviso = "  (tipo por fallback — confira no catalog.json)"
        entry = {
            "uc": uc,
            "materia": materia,
            "titulo": extract_title(p),
            "tipo": tipo,
            "data": datetime.fromtimestamp(p.stat().st_mtime).strftime("%Y-%m-%d"),
            "arquivo": rel,
            "origem": "",
        }
        entries.append(entry)
        known.add(rel)
        changed = True
        print("+ adicionado: {} [{}] {}{}".format(rel, tipo, entry["titulo"], aviso))
    return entries, changed


def fmt_date(iso):
    return "{}/{}/{}".format(iso[8:10], iso[5:7], iso[:4])


def strip_accents(s):
    return "".join(c for c in unicodedata.normalize("NFD", s) if not unicodedata.combining(c))


def esc(s):
    return html.escape(str(s), quote=True)


PAGE_TOP = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Medicina · UNIFEBE · 5º período</title>
  <style>
    :root{
      --bg:#0f1720; --card:#161f2b; --card2:#1c2836; --line:#2a3a4d;
      --ink:#e8eef5; --mut:#9fb2c6; --tealo:#12d3b0; --blue:#4c8dff;
      --amber:#ffb454; --green:#38d39f; --purple:#c6b3ff;
      --shadow:0 6px 24px rgba(0,0,0,.35);
    }
    *{box-sizing:border-box;margin:0;padding:0}
    [hidden]{display:none!important}
    body{
      background:var(--bg); color:var(--ink);
      font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
      padding:24px 16px 40px; display:flex; justify-content:center;
    }
    main{width:100%; max-width:860px}
    .topnav{display:flex; gap:18px; margin-bottom:20px; font-size:14px}
    .topnav a{color:var(--blue); text-decoration:none}
    .topnav a:hover{text-decoration:underline}
    .kicker{color:var(--tealo); font-size:13px; font-weight:700; letter-spacing:.14em; text-transform:uppercase}
    h1{font-size:clamp(26px,6vw,36px); margin:6px 0 2px}
    .sub{color:var(--mut); font-size:15px; margin-bottom:18px}
    #busca{
      width:100%; padding:12px 14px; margin-bottom:8px;
      background:var(--card); color:var(--ink);
      border:1px solid var(--line); border-radius:12px; font-size:15px; outline:none;
    }
    #busca:focus{border-color:var(--tealo)}
    #busca::placeholder{color:var(--mut)}
    #vazio{color:var(--mut); margin:18px 2px}
    section.uc{margin-top:26px}
    section.uc>h2{
      font-size:20px; color:var(--tealo); padding-bottom:8px;
      border-bottom:1px solid var(--line); margin-bottom:6px;
    }
    .materia{margin-top:14px}
    .materia>h3{font-size:14px; color:var(--mut); text-transform:uppercase; letter-spacing:.08em; margin-bottom:10px}
    .cards{display:grid; gap:12px}
    @media(min-width:700px){.cards{grid-template-columns:1fr 1fr}}
    .card{
      display:flex; flex-direction:column; gap:10px;
      background:var(--card); border:1px solid var(--line); border-radius:14px;
      padding:16px 18px; text-decoration:none; color:var(--ink); box-shadow:var(--shadow);
      transition:transform .12s ease, border-color .12s ease;
    }
    .card:hover{transform:translateY(-2px); border-color:var(--mut)}
    .titulo{font-weight:600; font-size:15px; line-height:1.45}
    .meta{display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-top:auto}
    .badge{font-size:12px; font-weight:600; padding:3px 9px; border-radius:999px; white-space:nowrap}
    .b-guia-sp{color:var(--tealo); background:rgba(18,211,176,.12); border:1px solid rgba(18,211,176,.35)}
    .b-guia-prova{color:var(--blue); background:rgba(76,141,255,.12); border:1px solid rgba(76,141,255,.35)}
    .b-flashcards{color:var(--purple); background:rgba(198,179,255,.12); border:1px solid rgba(198,179,255,.35)}
    .b-banco{color:var(--amber); background:rgba(255,180,84,.12); border:1px solid rgba(255,180,84,.35)}
    .b-simulado{color:var(--green); background:rgba(56,211,159,.12); border:1px solid rgba(56,211,159,.35)}
    .data{color:var(--mut); font-size:13px}
    .abrir{color:var(--tealo); font-weight:600; font-size:13px; margin-left:auto; white-space:nowrap}
    footer{margin-top:34px; color:var(--mut); font-size:13px}
  </style>
</head>
<body>
<main>
  <nav class="topnav"><a href="../index.html">← Início</a><a href="../coisas/cv/index.html">CV</a></nav>
  <p class="kicker">Medicina · UNIFEBE · 5º período</p>
  <h1>Medicina</h1>
  <p class="sub">Guias de estudo por UC e matéria. Clique num card para abrir.</p>
  <input id="busca" type="search" placeholder="buscar guia… (título, matéria, tipo)" autocomplete="off">
  <p id="vazio" hidden>Nenhum guia encontrado.</p>
"""

PAGE_BOTTOM = """  <footer>atualizado em {updated} · {n} guias</footer>
</main>
<script>
  var busca = document.getElementById('busca');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.card'));
  function norm(s){{
    return s.toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g, '');
  }}
  busca.addEventListener('input', function(){{
    var q = norm(busca.value.trim());
    cards.forEach(function(c){{ c.hidden = q !== '' && c.getAttribute('data-q').indexOf(q) === -1; }});
    document.querySelectorAll('.materia').forEach(function(m){{
      m.hidden = !m.querySelector('.card:not([hidden])');
    }});
    document.querySelectorAll('section.uc').forEach(function(s){{
      s.hidden = !s.querySelector('.materia:not([hidden])');
    }});
    document.getElementById('vazio').hidden = cards.some(function(c){{ return !c.hidden; }});
  }});
</script>
</body>
</html>
"""


def render_index(entries):
    ucs = {}
    for e in entries:
        ucs.setdefault(e["uc"], {}).setdefault(e["materia"], []).append(e)
    uc_order = [u for u in UC_ORDER if u in ucs] + [u for u in ucs if u not in UC_ORDER]

    out = [PAGE_TOP]
    for uc in uc_order:
        out.append('  <section class="uc">\n    <h2>{}</h2>\n'.format(esc(uc)))
        for materia, items in ucs[uc].items():
            out.append('    <div class="materia">\n      <h3>{}</h3>\n      <div class="cards">\n'.format(esc(materia)))
            for e in items:
                tipo = e["tipo"]
                label = TIPO_LABELS.get(tipo, tipo)
                busca = strip_accents(" ".join(
                    [e["titulo"], e["materia"], e["uc"], tipo, label, fmt_date(e["data"])]
                )).lower()
                out.append(
                    '        <a class="card" href="{href}" data-q="{q}">\n'
                    '          <span class="titulo">{titulo}</span>\n'
                    '          <span class="meta">\n'
                    '            <span class="badge b-{tipo}">{label}</span>\n'
                    '            <span class="data">{data}</span>\n'
                    '            <span class="abrir">abrir →</span>\n'
                    '          </span>\n'
                    '        </a>\n'.format(
                        href=esc(e["arquivo"]), q=esc(busca), titulo=esc(e["titulo"]),
                        tipo=esc(tipo), label=esc(label), data=esc(fmt_date(e["data"])),
                    )
                )
            out.append('      </div>\n    </div>\n')
        out.append('  </section>\n')
    out.append(PAGE_BOTTOM.format(updated=date.today().strftime("%d/%m/%Y"), n=len(entries)))
    return "".join(out)


def main():
    ap = argparse.ArgumentParser(description="Gera medicina/index.html a partir do catalog.json")
    ap.add_argument("--scan", action="store_true",
                    help="varre 5-fase/**/*.html e atualiza o catálogo antes de gerar")
    args = ap.parse_args()

    entries = load_catalog()
    if args.scan:
        entries, changed = scan(entries)
        if changed:
            save_catalog(entries)
            print("catalog.json atualizado ({} guias)".format(len(entries)))
        else:
            print("catalog.json inalterado ({} guias)".format(len(entries)))

    out = render_index(entries)
    if INDEX_PATH.exists() and INDEX_PATH.read_text(encoding="utf-8") == out:
        print("index.html inalterado")
    else:
        INDEX_PATH.write_text(out, encoding="utf-8")
        print("index.html gerado ({} guias)".format(len(entries)))


if __name__ == "__main__":
    main()
