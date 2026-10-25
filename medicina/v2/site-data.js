/* =====================================================================
   CATÁLOGO DO SITE — UC → matéria → abas → itens
   Regra: só entra o que JÁ ESTÁ no GitHub. Dentro de cada aba, o mais novo primeiro (medicina/5-fase/...). Nada novo é gerado.
   Cada item aponta para um HTML existente, que abre embutido na aba como está.
   src é relativo a `base`.
   ===================================================================== */
window.SITE = {
  fase: "5ª fase · 2026.2",
  base: "../5-fase/",
  ucs: [
    {
      id: "uc15", num: 15, nome: "UC15", tema: "Infecção", cor: "uc15", status: "",
      /* UC15 no formato novo (em avaliação, só na v2). Arquivos novos ficam em v2/conteudo/uc15/.
         Abas "nativas" são desenhadas pelo site a partir dos dados já existentes; nada foi reescrito. */
      materias: [
        { id: "lab", nome: "Laboratório", prof: "Tabata", abas: [
          { id: "resumo", titulo: "Resumo", itens: [ { label: "Resumo (roxo = caiu na T11)", nativo: "pdf", pdf: "conteudo/uc15/lab/Lab_UC15_Resumo.pdf", ns: "uc15/lab/resumo" } ] },
          { id: "videos", titulo: "Vídeos", itens: [ { label: "Vídeos por SP", nativo: "videos", data: "conteudo/uc15/lab/data.js", ns: "uc15/lab", videos: [
            { t: "SP1 · Bactérias", short: "SP1", d: "5:07", src: "conteudo/uc15/lab/videos/lab15_sp1.mp4", chap: "1" },
            { t: "SP2 · Antibiograma", short: "SP2", d: "4:55", src: "conteudo/uc15/lab/videos/lab15_sp2.mp4", chap: "2" },
            { t: "SP3 · Resistências", short: "SP3", d: "4:44", src: "conteudo/uc15/lab/videos/lab15_sp3.mp4", chap: "3" },
            { t: "SP4 · Sepse e gasometria", short: "SP4", d: "4:19", src: "conteudo/uc15/lab/videos/lab15_sp4.mp4", chap: "4" },
            { t: "SP5 · Hemocultura", short: "SP5", d: "4:20", src: "conteudo/uc15/lab/videos/lab15_sp5.mp4", chap: "5" } ] } ] },
          { id: "questoes", titulo: "Questões", itens: [ { label: "Questões (T11 + treino)", nativo: "labq", data: "conteudo/uc15/lab/data.js", ns: "uc15/lab" } ] },
          { id: "original", titulo: "Discursivas · página completa", itens: [ { label: "Página do Lab UC15 (com as discursivas interativas)", src: "conteudo/uc15/lab/Lab_UC15.html" } ] },
          { id: "veterana", titulo: "Resumo da veterana", itens: [ { label: "Laboratório UC15", nativo: "pdf", pdf: "conteudo/uc15/lab/resumo-veterana.pdf", ns: "uc15/lab/vet" } ] } ] },
        { id: "tutoria", nome: "Tutoria", abas: [
          { id: "sp1", titulo: "SP1 · Resumo", itens: [ { label: "SP1 · Todo cuidado é pouco", nativo: "pdf", pdf: "conteudo/uc15/tutoria/sp1-resumo.pdf", ns: "uc15/tut/sp1" } ] },
          { id: "sp1-video", titulo: "SP1 · Videoaula", itens: [ { label: "Videoaula SP1", nativo: "videos", ns: "uc15/tut", videos: [
            { t: "SP1 · Microbiota, antibioticoterapia e ITU", short: "SP1", d: "19:53", src: "conteudo/uc15/tutoria/videos/sp1.mp4" } ] } ] },
          { id: "veterana", titulo: "Resumo da veterana (T11)", itens: [ { label: "Tutoria · resumo T11", nativo: "pdf", pdf: "conteudo/uc15/tutoria/resumo-veterana-t11.pdf", ns: "uc15/tut/vet" } ] } ] },
        { id: "farmaco", nome: "Farmacologia", prof: "Vânia", abas: [
          { id: "raiox", titulo: "Raio-X", itens: [ { label: "Raio-X", nativo: "raiox", dir: "uc15/farmaco/central/" } ] },
          { id: "resumo", titulo: "Resumo", itens: [ { label: "Resumo grifado", nativo: "resumo", dir: "uc15/farmaco/central/" } ] },
          { id: "videos", titulo: "Videoaulas", itens: [ { label: "Videoaulas", nativo: "videos", ns: "uc15/farmaco", videos: [
            { t: "SP2–3 · Betalactâmicos", short: "SP2–3", d: "11:02", src: "conteudo/uc15/farmaco/videos/sp2-3-betalactamicos.mp4" },
            { t: "SP1 · Sulfas e quinolonas", short: "SP1", d: "14:24", src: "conteudo/uc15/farmaco/videos/sp1-sulfas-quinolonas.mp4" } ] } ] },
          { id: "tabela", titulo: "Tabela", itens: [ { label: "Tabela de fármacos", nativo: "tabela", dir: "uc15/farmaco/central/" } ] },
          { id: "provas", titulo: "Provas antigas", itens: [ { label: "Questões das provas", nativo: "provas", dir: "uc15/farmaco/central/" } ] },
          { id: "abcd", titulo: "Treino ABCD", itens: [ { label: "Treino ABCD", nativo: "abcd", dir: "uc15/farmaco/central/" } ] },
          { id: "pegadinhas", titulo: "Pegadinhas", itens: [ { label: "Pegadinhas", nativo: "pegadinhas", dir: "uc15/farmaco/central/" } ] },
          { id: "esquemas", titulo: "Esquemas", itens: [ { label: "Esquemas", nativo: "esquemas", dir: "uc15/farmaco/central/" } ] },
          { id: "aulas", titulo: "Frases da aula", itens: [ { label: "Frases da aula", nativo: "aulas", dir: "uc15/farmaco/central/" } ] },
          { id: "central", titulo: "Central (original)", itens: [
            { label: "Central da matéria", src: "uc15/farmaco/uc15-farmaco-central-guia.html" } ] } ] },
        { id: "pato", nome: "Patologia", prof: "Maria Verônica", abas: [
          { id: "resumo", titulo: "Resumo", itens: [ { label: "Resumo das aulas 1–3", nativo: "pdf", pdf: "conteudo/uc15/pato/resumo-aulas-1-3.pdf", ns: "uc15/pato/resumo" } ] },
          { id: "questoes", titulo: "Questões", itens: [ { label: "Questões", nativo: "patoq", data: "conteudo/uc15/pato/data.js", ns: "uc15/pato" } ] },
          { id: "veterana", titulo: "Resumo da veterana", itens: [ { label: "Patologia UC15", nativo: "pdf", pdf: "conteudo/uc15/pato/resumo-veterana.pdf", ns: "uc15/pato/vet" } ] } ] },
        { id: "fisio", nome: "Fisiologia", abas: [
          { id: "videos", titulo: "Videoaula", itens: [ { label: "Videoaula SP1", nativo: "videos", ns: "uc15/fisio", videos: [
            { t: "SP1 · Fisiologia renal e ITU", short: "SP1", d: "11:13", src: "conteudo/uc15/fisio/videos/sp1-renal-itu.mp4" } ] } ] },
          { id: "veterana", titulo: "Resumo da veterana", itens: [ { label: "Fisiologia UC15", nativo: "pdf", pdf: "conteudo/uc15/fisio/resumo-veterana.pdf", ns: "uc15/fisio/vet" } ] } ] }
      ]
    },
    {
      id: "uc14", num: 14, nome: "UC14", tema: "Abdome", cor: "uc14", status: "em curso",
      materias: [
        { id: "tutoria", nome: "Tutoria", abas: [
          { id: "prova-final", titulo: "Prova final", itens: [
            { label: "Prova final (resumo, questões e vídeos)", src: "uc14/tutoria/prova-final/uc14-tutoria-prova-final.html" },
            { label: "Guia + simuladão (anterior)", src: "uc14/tutoria/uc14-prova-final-tutoria-guia-simulado.html" } ] },
          { id: "sp1", titulo: "SP1 · Abdome agudo", itens: [
            { label: "Guia + simulado APF", src: "uc14/tutoria/uc14-sp1-abdome-agudo.html" } ] },
          { id: "sp2", titulo: "SP2 · Diarreia", itens: [
            { label: "Guia + simulado APF", src: "uc14/tutoria/uc14-sp2-diarreia-parasitoses.html" } ] },
          { id: "sp3", titulo: "SP3 · Icterícia", itens: [
            { label: "Guia + simulado APF", src: "uc14/tutoria/uc14-sp3-ictericia-biliar-pancreatite.html" } ] },
          { id: "sp4", titulo: "SP4 · Dispepsia", itens: [
            { label: "Leitura", src: "uc14/tutoria/uc14-sp4-tutoria-leitura.html" },
            { label: "Questões ABCD", src: "uc14/tutoria/uc14-sp4-tutoria-questoes-abcd.html" },
            { label: "Guia + simulado APF", src: "uc14/tutoria/uc14-sp4-dispepsia-drge-ulcera-hda.html" } ] } ] },
        { id: "farmaco", nome: "Farmacologia", prof: "Vânia", abas: [
          { id: "central", titulo: "Central", itens: [
            { label: "Central da matéria", src: "uc14/farmaco/uc14-farmaco-central-guia.html" } ] },
          { id: "questoes", titulo: "Questões", itens: [
            { label: "Questões ABCD", src: "uc14/farmaco/uc14-farmaco-questoes-abcd.html" },
            { label: "Banco Vânia (anterior)", src: "uc14/farmaco/uc14-farmaco-banco-vania.html" } ] },
          { id: "flashcards", titulo: "Flashcards", itens: [
            { label: "Mecanismos", src: "uc14/farmaco/uc14-farmaco-flashcards-mecanismo.html" } ] },
          { id: "guia-completo", titulo: "Guia completo", itens: [
            { label: "Guia completo", src: "uc14/farmaco/uc14-farmaco-guia-completo.html" } ] },
          { id: "tabela", titulo: "Tabelão", itens: [
            { label: "Tabelão de fármacos", src: "uc14/farmaco/uc14-farmaco-tabelao-farmacos.html" } ] },
          { id: "raiox", titulo: "Raio-X", itens: [
            { label: "Raio-X da Vânia + estratégia", src: "uc14/farmaco/uc14-farmaco-raio-x-vania-estrategia.html" } ] },
          { id: "sps", titulo: "SPs", itens: [
            { label: "SP1 · Diarreia + DII", src: "uc14/farmaco/uc14-sp1-diarreia-dii.html" },
            { label: "SP2 · Constipação", src: "uc14/farmaco/uc14-sp2-constipacao.html" },
            { label: "SP3 · Antieméticos + hepato", src: "uc14/farmaco/uc14-sp3-antiemeticos-hepato.html" },
            { label: "SP4 · Dispepsia", src: "uc14/farmaco/uc14-sp4-dispepsia.html" } ] },
          { id: "vias", titulo: "Vias metabólicas", itens: [
            { label: "Vias metabólicas", src: "uc14/farmaco/uc14-farmaco-vias-metabolicas.html" } ] },
          { id: "transcricoes", titulo: "Transcrições", itens: [
            { label: "Aula 19/09", src: "uc14/farmaco/uc14-farmaco-transcricao-aula-19-09.html" },
            { label: "Aula 04/09", src: "uc14/farmaco/uc14-farmaco-transcricao-aula-04-09.html" } ] } ] },
        { id: "lab", nome: "Laboratório", abas: [
          { id: "central", titulo: "Central", itens: [
            { label: "Resumo, vídeo, questões e raio-X", src: "uc14/lab/uc14-lab-central-guia.html" } ] } ] },
        { id: "fisio", nome: "Fisiologia", abas: [
          { id: "central", titulo: "Central", itens: [
            { label: "Central da matéria", src: "uc14/fisio/uc14-fisio-central-guia.html" } ] },
          { id: "videoaulas", titulo: "Videoaulas", itens: [
            { label: "Videoaulas SP2–SP4", src: "uc14/fisio/uc14-fisio-videoaulas.html" } ] } ] },
        { id: "anato", nome: "Anatomia seccional", abas: [
          { id: "laminas", titulo: "Lâminas", itens: [
            { label: "Lâminas UC14", src: "uc14/anato/uc14-anato-laminas.html" } ] } ] },
        { id: "pato", nome: "Patologia", abas: [
          { id: "guia", titulo: "Guia", itens: [
            { label: "Patologia UC14", src: "uc14/pato/uc14-pato-guia.html" } ] } ] }
      ]
    },
    {
      id: "uc13", num: 13, nome: "UC13", tema: "Dor", cor: "uc13", status: "concluída",
      materias: [
        {
          id: "tutoria", nome: "Tutoria",
          abas: [
            { id: "sp1", titulo: "SP1 · Dor", itens: [
              { label: "Modo inicial", src: "uc13/tutoria/uc13-sp1-dor-modo-inicial-v2.html" },
              { label: "Aprofundamento", src: "uc13/tutoria/uc13-sp1-dor-aprofundamento.html" } ] },
            { id: "sp2", titulo: "SP2 · Neuropática", itens: [
              { label: "Modo inicial", src: "uc13/tutoria/uc13-sp2-dor-neuropatica-modo-inicial.html" },
              { label: "Aprofundamento", src: "uc13/tutoria/uc13-sp2-dor-neuropatica-aprofundamento.html" } ] },
            { id: "sp3", titulo: "SP3 · Crônica", itens: [
              { label: "Modo inicial", src: "uc13/tutoria/uc13-sp3-dor-cronica-modo-inicial.html" },
              { label: "Aprofundamento", src: "uc13/tutoria/uc13-sp3-dor-cronica-aprofundamento.html" } ] },
            { id: "sp4", titulo: "SP4 · Visceral", itens: [
              { label: "Guia de estudo", src: "uc13/tutoria/uc13-sp4-dor-visceral.html" } ] },
            { id: "sp5", titulo: "SP5 · Neoplásica", itens: [
              { label: "Guia de estudo", src: "uc13/tutoria/uc13-sp5-dor-neoplasica.html" } ] },
            { id: "prova-final", titulo: "Prova final", itens: [
              { label: "Guia + simulado", src: "uc13/tutoria/uc13-prova-final-tutoria-guia.html" } ] }
          ]
        },
        {
          id: "farmaco", nome: "Farmacologia", prof: "Vânia",
          abas: [
            { id: "raiox", titulo: "Raio-X", itens: [
              { label: "Estratégia A1", src: "uc13/farmaco/uc13-farmaco-a1-estrategia.html" } ] },
            { id: "questoes", titulo: "Questões", itens: [
              { label: "Banco Vânia", src: "uc13/farmaco/uc13-farmaco-banco-vania.html" } ] },
            { id: "simulados", titulo: "Simulados", itens: [
              { label: "Simuladão Vânia", src: "uc13/farmaco/uc13-farmaco-simuladao-vania.html" },
              { label: "Simuladão PM", src: "uc13/farmaco/uc13-farmaco-simuladao-pm.html" } ] },
            { id: "flashcards", titulo: "Flashcards", itens: [
              { label: "Posologia", src: "uc13/farmaco/uc13-farmaco-flashcards-posologia.html" } ] },
            { id: "vias", titulo: "Vias metabólicas", itens: [
              { label: "Vias metabólicas", src: "uc13/farmaco/uc13-farmaco-vias-metabolicas.html" } ] },
            { id: "podcast", titulo: "Podcast", itens: [
              { label: "Episódios", src: "uc13/farmaco/uc13-farmaco-podcast.html" },
              { label: "Roteiros", src: "uc13/farmaco/uc13-farmaco-podcast-roteiros.html" } ] },
            { id: "artigos", titulo: "Artigos", itens: [
              { label: "Leitura dirigida", src: "uc13/farmaco/uc13-farmaco-leitura-dirigida-artigos.html" } ] }
          ]
        },
        {
          id: "pato", nome: "Patologia",
          abas: [
            { id: "revisao", titulo: "Revisão A1", itens: [
              { label: "Revisão pré-prova", src: "uc13/pato/uc13-pato-a1-revisao.html" } ] }
          ]
        },
        {
          id: "anato-fisio", nome: "Anato + Fisio",
          abas: [
            { id: "revisao", titulo: "Revisão A1", itens: [
              { label: "Revisão-relâmpago", src: "uc13/anato-fisio/revisao-relampago-a1-anato-fisio.html" } ] }
          ]
        },
        {
          id: "lab", nome: "Laboratório",
          abas: [
            { id: "guia", titulo: "Guia A1", itens: [
              { label: "Guia de estudo A1", src: "uc13/lab/uc13-lab-a1-guia.html" } ] }
          ]
        }
      ]
    },
    {
      id: "hp", sigla: "HP", ordem: 0, nome: "HP", tema: "Habilidades", cor: "hp", status: "",
      materias: [
        { id: "infeccoes", nome: "Infecções", abas: [
          { id: "central", titulo: "Resumo, questões e vídeo", itens: [
            { label: "HP Infecções", src: "hp-infeccoes/infectologia/hp-infeccoes-resumo-questoes-video.html" } ] } ] },
        { id: "otorrino", nome: "Otorrino", abas: [
          { id: "central", titulo: "Central", itens: [
            { label: "Otorrino · central", src: "hp-otorrino/otorrino/hp-otorrino-central.html" } ] } ] },
        { id: "abdome-clinica", nome: "Abdome · Clínica (Andrea)", abas: [
          { id: "guia", titulo: "Guia de estudo", itens: [
            { label: "Hepatites, DHGNA, cirrose e ascite", src: "hp-abdomen/clinica/hp-andrea-hpc-guia.html" } ] } ] },
        { id: "abdome-procedimentos", nome: "Abdome · Procedimentos (João)", abas: [
          { id: "guia", titulo: "Guia de estudo", itens: [
            { label: "Exame físico abdominal e abdome agudo", src: "hp-abdomen/procedimentos/hp-joao-hpp-guia.html" } ] } ] }
      ]
    },
  ]
};
