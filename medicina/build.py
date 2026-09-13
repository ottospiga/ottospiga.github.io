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
NAV_PATH = ROOT / "nav.js"
NAV_MARK = "<!-- medicina-nav -->"

# ---------------------------------------------------------------------------
# Tabelas editáveis — nomes de exibição para os slugs das pastas.
# Pasta nova sem entrada aqui: "ucN" vira "UCN" sozinho; o resto vira
# Title Case do slug ("nefro-uro" -> "Nefro Uro"). Edite à vontade.
# ---------------------------------------------------------------------------
UC_ORDER = ["UC13", "UC14", "HP Manifestações Abdominais"]  # seções fixas, nesta ordem
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
    "material": "material de apoio",
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
    if any(t in ("podcast", "roteiro", "roteiros", "transcricao", "transcricoes", "leitura", "material") for t in tokens):
        return "material"
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


def slugify(s):
    s = re.sub(r"[^a-z0-9]+", "-", strip_accents(s).lower()).strip("-")
    return s or "x"


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
    .b-material{color:var(--mut); background:rgba(159,178,198,.12); border:1px solid rgba(159,178,198,.35)}
    .data{color:var(--mut); font-size:13px}
    .abrir{color:var(--tealo); font-weight:600; font-size:13px; margin-left:auto; white-space:nowrap}
    footer{margin-top:34px; color:var(--mut); font-size:13px}
    html{scroll-behavior:smooth}
    section.uc, .materia{scroll-margin-top:12px}
    .sidenav .tree{background:var(--card); border:1px solid var(--line); border-radius:12px; padding:12px 14px; margin-bottom:18px}
    .sidenav summary{cursor:pointer; color:var(--tealo); font-weight:600; font-size:14px}
    .sidenav ul{list-style:none; margin-top:6px}
    .sidenav li{margin:2px 0}
    .sidenav a{display:block; text-decoration:none; color:var(--ink); font-size:14px; font-weight:600; padding:4px 8px; border-radius:8px}
    .sidenav ul ul a{color:var(--mut); font-weight:400; font-size:13px; padding-left:20px}
    .sidenav a:hover{color:var(--tealo); background:rgba(18,211,176,.08)}
    @media(min-width:980px){
      main{max-width:1120px}
      .layout{display:grid; grid-template-columns:220px minmax(0,1fr); gap:28px; align-items:start}
      .sidenav{position:sticky; top:16px; max-height:calc(100vh - 32px); overflow:auto}
      .sidenav .tree{margin-bottom:0}
      .sidenav summary{display:none}
    }
  </style>
</head>
<body>
<main>
  <nav class="topnav"><a href="../index.html">← Início</a><a href="../coisas/index.html">Coisas</a></nav>
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
  var tree = document.querySelector('.tree');
  if (tree && window.innerWidth < 980) tree.removeAttribute('open');
  window.addEventListener('resize', function(){{
    if (tree && window.innerWidth >= 980) tree.setAttribute('open', '');
  }});
  document.querySelectorAll('.sidenav a').forEach(function(a){{
    a.addEventListener('click', function(){{
      if (busca.value) {{ busca.value = ''; busca.dispatchEvent(new Event('input')); }}
      if (tree && window.innerWidth < 980) tree.removeAttribute('open');
      var alvo = document.querySelector(a.getAttribute('href'));
      if (alvo) alvo.scrollIntoView({{behavior: 'smooth', block: 'start'}});
    }});
  }});
</script>
</body>
</html>
"""


# Menu lateral flutuante injetado nos guias: nav.js é gerado do catálogo e
# cada guia recebe UMA linha <script> antes do </body> (ver inject_nav).
NAV_TEMPLATE = """(function () {
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
  tab.className = 'tab'; tab.title = 'Guias de medicina'; tab.setAttribute('aria-label', 'Abrir menu de guias');
  tab.textContent = '\\uD83D\\uDCDA';
  var backdrop = document.createElement('div'); backdrop.className = 'backdrop';
  var drawer = document.createElement('nav'); drawer.className = 'drawer';
  var hd = document.createElement('div'); hd.className = 'hd';
  var titulo = document.createElement('span'); titulo.textContent = 'Medicina \\u00B7 guias';
  var x = document.createElement('button'); x.className = 'x'; x.textContent = '\\u00D7'; x.setAttribute('aria-label', 'Fechar');
  hd.appendChild(titulo); hd.appendChild(x); drawer.appendChild(hd);
  var idx = document.createElement('a'); idx.className = 'idx';
  idx.href = new URL('index.html', base).href; idx.textContent = '\\u2302  P\\u00E1gina Medicina';
  drawer.appendChild(idx);
  var tree = document.createElement('div'); tree.className = 'tree';
  DATA.forEach(function (uc) {
    var d1 = document.createElement('details');
    var s1 = document.createElement('summary'); s1.textContent = uc.u; d1.appendChild(s1);
    uc.ms.forEach(function (m) {
      var d2 = document.createElement('details');
      var s2 = document.createElement('summary'); s2.textContent = m.m; d2.appendChild(s2);
      m.fs.forEach(function (f) {
        var a = document.createElement('a');
        a.href = new URL(f.f, base).href; a.textContent = f.t; a.className = 'doc';
        if (a.href === here) { a.className = 'doc atual'; d1.open = true; d2.open = true; }
        d2.appendChild(a);
      });
      d1.appendChild(d2);
    });
    tree.appendChild(d1);
  });
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


def render_nav(entries):
    ucs = {}
    for e in entries:
        ucs.setdefault(e["uc"], {}).setdefault(e["materia"], []).append(e)
    uc_order = [u for u in UC_ORDER if u in ucs] + [u for u in ucs if u not in UC_ORDER]
    data = [{"u": uc,
             "ms": [{"m": m, "fs": [{"t": x["titulo"], "f": x["arquivo"]} for x in items]}
                    for m, items in ucs[uc].items()]}
            for uc in uc_order]
    return NAV_TEMPLATE.replace("__DATA__", json.dumps(data, ensure_ascii=False))


def inject_nav(entries):
    """Garante em cada guia do catálogo a linha que carrega o menu (idempotente)."""
    feitos = []
    for e in entries:
        p = ROOT / e["arquivo"]
        if not p.is_file():
            continue
        text = p.read_text(encoding="utf-8", errors="replace")
        if NAV_MARK in text:
            continue
        depth = len(Path(e["arquivo"]).parts) - 1
        tag = '{}<script defer src="{}nav.js"></script>'.format(NAV_MARK, "../" * depth)
        head, sep, tail = text.rpartition("</body>")
        if sep:
            text = head + tag + "\n" + sep + tail
        else:
            text = text + "\n" + tag + "\n"
        p.write_text(text, encoding="utf-8")
        feitos.append(e["arquivo"])
    return feitos


def render_index(entries):
    ucs = {}
    for e in entries:
        ucs.setdefault(e["uc"], {}).setdefault(e["materia"], []).append(e)
    uc_order = [u for u in UC_ORDER if u in ucs] + [u for u in ucs if u not in UC_ORDER]

    out = [PAGE_TOP]
    out.append('  <div class="layout">\n    <aside class="sidenav">\n      <details class="tree" open>\n'
               '        <summary>Navegar por UC e matéria</summary>\n        <ul>\n')
    for uc in uc_order:
        us = slugify(uc)
        out.append('          <li><a href="#uc-{}">{}</a>\n            <ul>\n'.format(us, esc(uc)))
        for materia in ucs[uc]:
            out.append('              <li><a href="#m-{}-{}">{}</a></li>\n'.format(us, slugify(materia), esc(materia)))
        out.append('            </ul>\n          </li>\n')
    out.append('        </ul>\n      </details>\n    </aside>\n    <div class="conteudo">\n')
    for uc in uc_order:
        us = slugify(uc)
        out.append('  <section class="uc" id="uc-{}">\n    <h2>{}</h2>\n'.format(us, esc(uc)))
        for materia, items in ucs[uc].items():
            out.append('    <div class="materia" id="m-{}-{}">\n      <h3>{}</h3>\n      <div class="cards">\n'.format(us, slugify(materia), esc(materia)))
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
    out.append('    </div>\n  </div>\n')
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

    nav = render_nav(entries)
    if NAV_PATH.exists() and NAV_PATH.read_text(encoding="utf-8") == nav:
        print("nav.js inalterado")
    else:
        NAV_PATH.write_text(nav, encoding="utf-8")
        print("nav.js gerado ({} guias)".format(len(entries)))
    feitos = inject_nav(entries)
    if feitos:
        print("menu lateral injetado em {} guia(s)".format(len(feitos)))


if __name__ == "__main__":
    main()
