/* =====================================================================
   CATÁLOGO DO SITE — UC → matéria → abas → itens
   Regra: só entra o que JÁ ESTÁ no GitHub (medicina/5-fase/...). Nada novo é gerado.
   Cada item aponta para um HTML existente, que abre embutido na aba como está.
   src é relativo a `base`.
   ===================================================================== */
window.SITE = {
  fase: "5ª fase · 2026.2",
  base: "../5-fase/",
  ucs: [
    { id: "uc15", num: 15, nome: "UC15", tema: "", cor: "uc15", status: "em breve", materias: [] },
    { id: "uc14", num: 14, nome: "UC14", tema: "Abdome", cor: "uc14", status: "em breve", materias: [] },
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
    }
  ]
};
