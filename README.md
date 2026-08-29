# ottospiga.github.io
Resume

## Guias de medicina

- `index.html` — página inicial com duas portas: **Coisas** e **Medicina**.
- `coisas/` — página "Coisas"; por enquanto só o currículo, em `coisas/cv/` (página original, sem alterações).
- `medicina/` — guias de estudo do 5º período de Medicina (UNIFEBE, 2026.2), páginas HTML autocontidas em `medicina/5-fase/<uc>/<materia>/`.
- `medicina/catalog.json` — catálogo dos guias (UC, matéria, título, tipo, data, arquivo).
- `medicina/build.py` — gera `medicina/index.html` a partir do catálogo (Python 3, sem dependências).
- `.nojekyll` — Pages serve os arquivos como estão, sem Jekyll.

### Como adicionar um guia novo

1. Copie o HTML autocontido para `medicina/5-fase/<uc>/<materia>/nome-minusculo-com-hifens.html` (pasta nova de UC/matéria é reconhecida automaticamente; `ucN` vira "UCN" no site — outros nomes de exibição são editáveis no topo do `build.py`).
2. Rode `python3 medicina/build.py --scan` — adiciona o guia ao catálogo (título pelo `<title>`, tipo pelo nome do arquivo, data pela data do arquivo) e regenera o `medicina/index.html`. Se algum campo sair errado, corrija no `catalog.json` e rode `python3 medicina/build.py` de novo.
3. `git add medicina && git commit -m "novo guia" && git push` — usar `git add medicina` (e não `git add .`) evita commitar `.DS_Store` e afins no repo público.
