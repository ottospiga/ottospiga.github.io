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
      id: "uc15", num: 15, nome: "UC15", tema: "", cor: "uc15", status: "",
      materias: [
        { id: "farmaco", nome: "Farmacologia", prof: "Vânia", abas: [
          { id: "central", titulo: "Central", itens: [
            { label: "Central da matéria", src: "uc15/farmaco/uc15-farmaco-central-guia.html" } ] } ] }
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
