#!/usr/bin/env python3
"""Confere o site de Medicina e regera o menu dos guias.

A fonte única é medicina/site-data.js (UC → matéria → abas → itens), editado à mão.
Este script NÃO mexe nele; só:
  1. confere se todo caminho citado no site-data.js existe (src, pdf, data, dir, extra, vídeos, miniaturas);
  2. lista os .html de 5-fase/ que ainda não estão em nenhuma aba (guia novo esperando lugar);
  3. regera medicina/nav.js (menu 📚 que aparece quando um guia é aberto sozinho, fora do site);
  4. injeta em cada guia de 5-fase/ a linha que carrega esse menu (idempotente).

Uso:  python3 medicina/build.py        (de qualquer diretório; só stdlib)
Sai com código 1 se houver caminho inexistente ou guia sem aba.
"""

import json
import re
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SITE_DATA = ROOT / "site-data.js"
GUIDES_DIR = ROOT / "5-fase"
NAV_PATH = ROOT / "nav.js"
NAV_MARK = "<!-- medicina-nav -->"

# HTMLs de 5-fase/ que ficam de propósito fora das abas: {"uc14/x/arquivo.html": "motivo"}
FORA = {
    "uc14/farmaco/uc14-farmaco-central-guia.html": "fora do menu desde a página única da PM (nov/2026)",
    "uc14/farmaco/uc14-farmaco-guia-completo.html": "fora do menu desde a página única da PM (nov/2026)",
    "uc14/farmaco/uc14-farmaco-questoes-abcd.html": "fora do menu desde a página única da PM (nov/2026)",
    "uc14/farmaco/uc14-farmaco-banco-vania.html": "fora do menu desde a página única da PM (nov/2026)",
    "uc14/farmaco/uc14-farmaco-tabelao-farmacos.html": "fora do menu desde a página única da PM (nov/2026)",
    "uc14/farmaco/uc14-farmaco-raio-x-vania-estrategia.html": "fora do menu desde a página única da PM (nov/2026)",
    "uc14/farmaco/uc14-sp1-diarreia-dii.html": "fora do menu desde a página única da PM (nov/2026)",
    "uc14/farmaco/uc14-sp2-constipacao.html": "fora do menu desde a página única da PM (nov/2026)",
    "uc14/farmaco/uc14-sp3-antiemeticos-hepato.html": "fora do menu desde a página única da PM (nov/2026)",
    "uc14/farmaco/uc14-sp4-dispepsia.html": "fora do menu desde a página única da PM (nov/2026)",
    "uc14/farmaco/uc14-farmaco-vias-metabolicas.html": "fora do menu desde a página única da PM (nov/2026)",
}

NFC = lambda s: unicodedata.normalize("NFC", s)


# ---------------------------------------------------------------------------
# site-data.js → dict (objeto JS simples: chaves sem aspas, comentários, vírgula final)
# ---------------------------------------------------------------------------
def js_object_to_json(src):
    out, i, n = [], 0, len(src)
    while i < n:
        c = src[i]
        if c in "\"'":                                   # string
            j, buf = i + 1, []
            while src[j] != c:
                if src[j] == "\\":
                    buf.append(src[j:j + 2]); j += 2; continue
                buf.append(src[j]); j += 1
            s = "".join(buf)
            if c == "'":
                s = s.replace("\\'", "'").replace('"', '\\"')
            out.append('"' + s + '"'); i = j + 1
        elif src.startswith("/*", i):
            i = src.index("*/", i) + 2
        elif src.startswith("//", i):
            i = src.find("\n", i); i = n if i < 0 else i
        elif c.isalpha() or c in "_$":                    # identificador
            j = i
            while j < n and (src[j].isalnum() or src[j] in "_$"):
                j += 1
            word = src[i:j]
            k = j
            while k < n and src[k] in " \t\r\n":
                k += 1
            out.append('"%s"' % word if k < n and src[k] == ":" and word not in ("true", "false", "null") else word)
            i = j
        else:
            out.append(c); i += 1
    txt = "".join(out)
    return re.sub(r",(\s*[}\]])", r"\1", txt)


def load_site():
    src = SITE_DATA.read_text(encoding="utf-8")
    body = src[src.index("{", src.index("window.SITE")):src.rindex("}") + 1]
    return json.loads(js_object_to_json(body))


def ucs_em_ordem(site):
    # mesma ordem da barra lateral: maior número primeiro (UC15, UC14, UC13), HP (ordem 0) por último
    return sorted(site["ucs"], key=lambda u: -(u.get("ordem", u.get("num", 0))))


# ---------------------------------------------------------------------------
# conferência
# ---------------------------------------------------------------------------
def caminho(site, rel):
    return ROOT / rel if rel.startswith(("conteudo/", "lib/")) else ROOT / site["base"] / rel


def conferir(site):
    faltando, usados = [], set()
    for u in site["ucs"]:
        for m in u["materias"]:
            for a in m["abas"]:
                for it in a["itens"]:
                    onde = "{}/{}/{}".format(u["id"], m["id"], a["id"])
                    refs = [it.get(k) for k in ("src", "pdf", "data", "extra")]
                    if it.get("dir"):
                        refs.append(it["dir"] + "data.js")
                    refs += [v.get("src") for v in it.get("videos", [])]
                    if it.get("thumbs"):
                        refs.append(it["thumbs"] + "01.jpg")
                    for r in filter(None, refs):
                        if not caminho(site, r).is_file():
                            faltando.append((onde, r))
                    if it.get("src") and not it["src"].startswith("conteudo/"):
                        usados.add(NFC(it["src"]))
    sem_aba = sorted(
        rel for rel in (NFC(p.relative_to(GUIDES_DIR).as_posix()) for p in GUIDES_DIR.rglob("*.html"))
        if rel not in usados and rel not in FORA)
    return faltando, sem_aba, usados


# ---------------------------------------------------------------------------
# menu 📚 dos guias abertos sozinhos (nav.js)
# ---------------------------------------------------------------------------
def render_nav(site):
    data = []
    for u in ucs_em_ordem(site):
        nome = " · ".join(x for x in (u.get("nome"), u.get("tema")) if x)
        ms = []
        for m in u["materias"]:
            fs = []
            for a in m["abas"]:
                for i, it in enumerate(a["itens"]):
                    t = a["titulo"] if len(a["itens"]) == 1 else "{} · {}".format(a["titulo"], it["label"])
                    fs.append({"t": t, "h": "{}/{}/{}/{}".format(u["id"], m["id"], a["id"], i),
                               "f": (site["base"] + it["src"]) if it.get("src") and not it["src"].startswith("conteudo/") else ""})
            ms.append({"m": m["nome"], "fs": fs})
        data.append({"u": nome, "ms": ms})
    return NAV_TEMPLATE.replace("__DATA__", json.dumps(data, ensure_ascii=False))


def inject_nav():
    feitos = []
    for p in sorted(GUIDES_DIR.rglob("*.html")):
        text = p.read_text(encoding="utf-8", errors="replace")
        if NAV_MARK in text:
            continue
        depth = len(p.relative_to(ROOT).parts) - 1
        tag = '{}<script defer src="{}nav.js"></script>'.format(NAV_MARK, "../" * depth)
        head, sep, tail = text.rpartition("</body>")
        text = head + tag + "\n" + sep + tail if sep else text + "\n" + tag + "\n"
        p.write_text(text, encoding="utf-8")
        feitos.append(p.relative_to(ROOT).as_posix())
    return feitos


NAV_TEMPLATE = """/* Gerado por medicina/build.py a partir do site-data.js — não editar à mão. */
(function () {
  if (window.self !== window.top) return; // dentro do site (iframe): sem menu flutuante duplicado
  var script = document.currentScript;
  if (!script || !script.src) return;
  var base;
  try { base = new URL('.', script.src); } catch (e) { return; }
  var DATA = __DATA__;
  var here = location.href.split('#')[0].split('?')[0];
  var host = document.createElement('div');
  host.id = 'medicina-nav';
  var root = host.attachShadow({mode: 'open'});
  var style = document.createElement('style');
  style.textContent = [
    ':host{all:initial}',
    '*{box-sizing:border-box; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}',
    '.tab{position:fixed; left:0; top:50%; transform:translateY(-50%); z-index:2147483000; width:38px; height:46px;',
    '  border:1px solid #2a3a4d; border-left:none; border-radius:0 10px 10px 0; background:rgba(22,31,43,.92);',
    '  color:#e8eef5; font-size:17px; cursor:pointer; box-shadow:0 4px 16px rgba(0,0,0,.35); padding:0}',
    '.tab:hover{border-color:#12d3b0}',
    '.backdrop{position:fixed; inset:0; background:rgba(0,0,0,.45); opacity:0; pointer-events:none; transition:opacity .15s; z-index:2147483001}',
    '.backdrop.on{opacity:1; pointer-events:auto}',
    '.drawer{position:fixed; top:0; bottom:0; left:0; width:300px; max-width:85vw; z-index:2147483002;',
    '  background:#0f1720; color:#e8eef5; border-right:1px solid #2a3a4d; box-shadow:8px 0 30px rgba(0,0,0,.5);',
    '  transform:translateX(-105%); transition:transform .18s ease; display:flex; flex-direction:column}',
    '.drawer.on{transform:translateX(0)}',
    '.hd{display:flex; align-items:center; justify-content:space-between; padding:14px 14px 10px;',
    '  color:#12d3b0; font-weight:700; font-size:13px; letter-spacing:.08em; text-transform:uppercase}',
    '.x{background:none; border:none; color:#9fb2c6; font-size:22px; cursor:pointer; line-height:1; padding:0 6px}',
    '.x:hover{color:#e8eef5}',
    '.idx{display:block; margin:0 14px 10px; padding:8px 10px; border:1px solid #2a3a4d; border-radius:10px;',
    '  color:#4c8dff; text-decoration:none; font-size:13px}',
    '.idx:hover{border-color:#4c8dff}',
    '.tree{overflow:auto; padding:0 10px 16px; flex:1}',
    'details{margin:2px 0}',
    'summary{cursor:pointer; color:#e8eef5; font-weight:600; padding:5px 6px; border-radius:8px; font-size:13px; list-style:none}',
    'summary::-webkit-details-marker{display:none}',
    "summary::before{content:'\\\\1F4C1  '}",
    "details[open]>summary::before{content:'\\\\1F4C2  '}",
    'summary:hover{color:#12d3b0; background:rgba(18,211,176,.08)}',
    'details details{margin-left:12px}',
    'details details summary{color:#9fb2c6; font-weight:500}',
    '.doc{display:block; color:#9fb2c6; text-decoration:none; padding:4px 8px 4px 24px; border-radius:8px; font-size:12.5px; line-height:1.35}',
    '.doc:hover{color:#12d3b0; background:rgba(18,211,176,.08)}',
    '.doc.atual{color:#12d3b0; font-weight:600}'
  ].join('\\n');
  root.appendChild(style);
  var tab = document.createElement('button');
  tab.className = 'tab'; tab.title = 'Medicina'; tab.setAttribute('aria-label', 'Abrir menu de Medicina');
  tab.textContent = '\\uD83D\\uDCDA';
  var backdrop = document.createElement('div'); backdrop.className = 'backdrop';
  var drawer = document.createElement('nav'); drawer.className = 'drawer';
  var hd = document.createElement('div'); hd.className = 'hd';
  var titulo = document.createElement('span'); titulo.textContent = 'Medicina';
  var x = document.createElement('button'); x.className = 'x'; x.textContent = '\\u00D7'; x.setAttribute('aria-label', 'Fechar');
  hd.appendChild(titulo); hd.appendChild(x); drawer.appendChild(hd);
  var atual = null;
  var tree = document.createElement('div'); tree.className = 'tree';
  DATA.forEach(function (uc) {
    var d1 = document.createElement('details');
    var s1 = document.createElement('summary'); s1.textContent = uc.u; d1.appendChild(s1);
    uc.ms.forEach(function (m) {
      var d2 = document.createElement('details');
      var s2 = document.createElement('summary'); s2.textContent = m.m; d2.appendChild(s2);
      m.fs.forEach(function (f) {
        var a = document.createElement('a');
        a.href = new URL('index.html#' + f.h, base).href; a.textContent = f.t; a.className = 'doc';
        if (f.f && new URL(f.f, base).href === here) { a.className = 'doc atual'; d1.open = true; d2.open = true; atual = atual || f.h; }
        d2.appendChild(a);
      });
      d1.appendChild(d2);
    });
    tree.appendChild(d1);
  });
  var idx = document.createElement('a'); idx.className = 'idx';
  idx.href = new URL('index.html' + (atual ? '#' + atual : ''), base).href;
  idx.textContent = atual ? '\\u2302  Abrir no site de Medicina' : '\\u2302  P\\u00E1gina Medicina';
  drawer.appendChild(idx);
  drawer.appendChild(tree);
  root.appendChild(tab); root.appendChild(backdrop); root.appendChild(drawer);
  function abre() { backdrop.classList.add('on'); drawer.classList.add('on'); }
  function fecha() { backdrop.classList.remove('on'); drawer.classList.remove('on'); }
  tab.addEventListener('click', abre);
  x.addEventListener('click', fecha);
  backdrop.addEventListener('click', fecha);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fecha(); });
  (document.body || document.documentElement).appendChild(host);
})();
"""


def main():
    site = load_site()
    faltando, sem_aba, usados = conferir(site)
    print("{} guias de 5-fase/ nas abas".format(len(usados)))
    print("Caminhos inexistentes: {}".format(len(faltando)))
    for onde, r in faltando:
        print("  ✗ {}  →  {}".format(onde, r))
    print("Guias de 5-fase/ sem aba no site-data.js: {}".format(len(sem_aba)))
    for r in sem_aba:
        print("  ? " + r)

    nav = render_nav(site)
    if NAV_PATH.exists() and NAV_PATH.read_text(encoding="utf-8") == nav:
        print("nav.js inalterado")
    else:
        NAV_PATH.write_text(nav, encoding="utf-8")
        print("nav.js gerado")
    feitos = inject_nav()
    if feitos:
        print("menu injetado em {} guia(s): {}".format(len(feitos), ", ".join(feitos)))
    sys.exit(1 if faltando or sem_aba else 0)


if __name__ == "__main__":
    main()
