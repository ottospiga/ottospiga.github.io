#!/usr/bin/env python3
"""Confere o catálogo (site-data.js) contra medicina/5-fase/<uc> no repositório.
- todo caminho do catálogo precisa existir;
- todo .html da UC no repo precisa estar no catálogo OU em FORA (com motivo).
Uso: python3 conferir.py            (todas as pastas de 5-fase)
     python3 conferir.py uc14 hp-otorrino
"""
import os, re, sys, unicodedata
N = lambda x: unicodedata.normalize("NFC", x)
AQUI = os.path.dirname(os.path.abspath(__file__))
PASTAS = sys.argv[1:]
FORA = {}  # "uc13/....html": "motivo"

txt = open(os.path.join(AQUI, "site-data.js"), encoding="utf-8").read()
base = re.search(r'base:\s*"([^"]+)"', txt).group(1)
srcs = re.findall(r'src:\s*"([^"]+)"', txt)
raiz = os.path.normpath(os.path.join(AQUI, base))
faltando = [s for s in srcs if not os.path.isfile(os.path.join(raiz, s))]
usados = {N(s) for s in srcs}
sobra = []
PASTAS = PASTAS or sorted(os.listdir(raiz))
for d, _, fs in (w for p in PASTAS for w in os.walk(os.path.join(raiz, p))):
    for f in fs:
        if f.lower().endswith(".html"):
            rel = N(os.path.relpath(os.path.join(d, f), raiz))
            if rel not in usados and rel not in FORA:
                sobra.append(rel)
print(f"{len(usados)} arquivos no catálogo")
print(f"Caminhos inexistentes: {len(faltando)}"); [print("  ✗", s) for s in faltando]
print(f"HTML de {', '.join(PASTAS)} fora do catálogo: {len(sobra)}"); [print("  ?", s) for s in sorted(sobra)]
sys.exit(1 if faltando or sobra else 0)
