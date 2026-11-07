# Site de Medicina: como adicionar um guia novo

O site é `medicina/index.html`, que lê o `site-data.js` (UC → matéria → abas → itens). Cada item abre embutido na aba.

1. **Copiar o arquivo.**
   - Guia HTML autocontido: vai para `medicina/5-fase/<uc>/<materia>/nome-minusculo-com-hifens.html` (`cp -p` para manter a data).
   - Material só do formato novo (PDF, vídeo, `data.js` de aba nativa): vai para `medicina/conteudo/<uc>/<materia>/`.
2. **Pôr no `site-data.js`.**
   - Na matéria certa, crie uma aba ou entre numa existente: `{ label: "Nome curto", src: "uc14/lab/arquivo.html" }`.
   - O `src` é relativo a `5-fase/`; `conteudo/...` é relativo a `medicina/`.
   - **O mais novo vai primeiro**, tanto na lista de abas quanto dentro da aba. A versão antiga pode ficar logo abaixo, com "(anterior)" no label.
3. **Rodar o build.**
   - `python3 medicina/build.py` confere os caminhos, avisa se algum HTML de `5-fase/` ficou sem aba, regera o `nav.js` e injeta a linha do menu no guia novo.
   - Precisa sair com `0` inexistentes e `0` sem aba. Se um arquivo deve ficar fora de propósito, ponha-o em `FORA` no topo do `build.py`.
4. **Testar e publicar.**
   - `python3 -m http.server 8000` na raiz e abra `http://localhost:8000/medicina/#<uc>/<materia>`.
   - Depois `git add medicina && git commit && git push`. **Nunca `git add .`**, para não subir `.DS_Store`.

**Endereços:** `#uc14/farmaco/central/0` = UC → matéria → id da aba → posição do item. Links antigos (`/medicina/v2/…` e as âncoras `#m-uc14-farmacologia` do índice antigo) redirecionam sozinhos. Os guias nunca mudam de lugar, então link de guia mandado para alguém não quebra.

**Repo público:** nada de cronograma, prova com nome ou PDF com nome/metadado de pessoa. Antes de subir um PDF, confira com `pdfinfo` e `pdftotext | grep`.
