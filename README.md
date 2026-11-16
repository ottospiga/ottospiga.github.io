# ottospiga.github.io
Resume

## Guias de medicina

- `index.html`: página inicial com duas portas, **Coisas** e **Medicina**.
- `coisas/`: página "Coisas"; por enquanto só o currículo, em `coisas/cv/` (página original, sem alterações).
- `medicina/index.html`: site de Medicina (barra lateral por período: 5º com UC15 → UC14 → UC13 → HP, 6º com UC18 → UC17 → UC16 → HP; ao lado, um painel com as abas e itens da matéria aberta; as duas barras recolhem). Lê `medicina/site-data.js`, a fonte única do conteúdo; `nativo.js` desenha as abas "nativas" (PDF, vídeos, questões).
- `medicina/5-fase/<uc>/<materia>/`: guias HTML autocontidos, embutidos nas abas como estão. Cada guia recebe uma linha (`<!-- medicina-nav -->`) que carrega `medicina/nav.js`, o menu 📚 que só aparece quando o guia é aberto sozinho.
- `medicina/conteudo/`: arquivos que só existem no formato novo (PDFs, vídeos, dados da UC15 e os bancos de questões do 6º período).
- `medicina/bancos.py`: gera os bancos de questões do 6º período (`conteudo/uc16…uc18` e `conteudo/hp6`) a partir dos JSON das provas digitalizadas.
- `medicina/build.py`: confere o `site-data.js`, regera o `nav.js` e injeta o menu (Python 3, só stdlib).
- `medicina/v2/index.html`: só redireciona para `/medicina/` (mantém o `#endereço`).
- `ferramentas/roi-microbiologia/`: calculadora de retorno da automação em microbiologia (AutoBac). Página solta, sem link no site e com `noindex`.
- `.nojekyll`: Pages serve os arquivos como estão, sem Jekyll.

Como adicionar um guia novo: ver [`medicina/LEIA.md`](medicina/LEIA.md).
