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

## Períodos

O `site-data.js` tem a lista `fases` (5º e 6º período). Cada UC diz o seu em `fase: "5"` ou `fase: "6"`. A barra lateral e o início mostram os períodos na ordem dessa lista; quando o semestre virar, troque a ordem ali. HP tem uma UC por período (`hp` e `hp6`).

## Banco de questões do 6º período

As questões das provas antigas ficam em `medicina/conteudo/<uc>/<materia>/data.js` e abrem na vista `provas` (a mesma da Farmaco UC14): filtros por SP, turma e tema, modo estudo ou prova, rodadas de 5, 10 ou 15.

- Os `data.js` são gerados: `python3 medicina/bancos.py ~/Documents/MED/6_fase/_questoes`, e depois `python3 medicina/build.py`. Não edite à mão; corrija o JSON de origem e gere de novo.
- Banco de matéria nova: acrescente o arquivo em `BANCOS`, no topo do `bancos.py`, e uma aba `{ nativo: "provas", data: "conteudo/<uc>/<materia>/data.js" }` no `site-data.js`.
- Cada questão mostra de onde veio a resposta: gabarito do professor, resolução de veterano, resposta inferida ou sem gabarito.
- Questão idêntica em várias turmas vira uma entrada só; variação da mesma questão conta para a etiqueta "caiu N×".
- O progresso fica no navegador, pelo `id` da questão. Não troque os ids no JSON de origem.

**Endereços:** `#uc14/farmaco/central/0` = UC → matéria → id da aba → posição do item. Links antigos (`/medicina/v2/…` e as âncoras `#m-uc14-farmacologia` do índice antigo) redirecionam sozinhos. Os guias nunca mudam de lugar, então link de guia mandado para alguém não quebra.

**Repo público:** nada de cronograma, prova com nome ou PDF com nome/metadado de pessoa. Antes de subir um PDF, confira com `pdfinfo` e `pdftotext | grep`.
