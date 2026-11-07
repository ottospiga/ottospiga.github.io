# ottospiga.github.io
Resume

## Guias de medicina

- `index.html`: página inicial com duas portas, **Coisas** e **Medicina**.
- `coisas/`: página "Coisas"; por enquanto só o currículo, em `coisas/cv/` (página original, sem alterações).
- `medicina/index.html`: site de Medicina (barra lateral UC15 → UC14 → UC13 → HP, abas por matéria). Lê `medicina/site-data.js`, a fonte única do conteúdo; `nativo.js` desenha as abas "nativas" (PDF, vídeos, questões).
- `medicina/5-fase/<uc>/<materia>/`: guias HTML autocontidos, embutidos nas abas como estão. Cada guia recebe uma linha (`<!-- medicina-nav -->`) que carrega `medicina/nav.js`, o menu 📚 que só aparece quando o guia é aberto sozinho.
- `medicina/conteudo/`: arquivos que só existem no formato novo (PDFs, vídeos, dados da UC15).
- `medicina/build.py`: confere o `site-data.js`, regera o `nav.js` e injeta o menu (Python 3, só stdlib).
- `medicina/v2/index.html`: só redireciona para `/medicina/` (mantém o `#endereço`).
- `.nojekyll`: Pages serve os arquivos como estão, sem Jekyll.

Como adicionar um guia novo: ver [`medicina/LEIA.md`](medicina/LEIA.md).
