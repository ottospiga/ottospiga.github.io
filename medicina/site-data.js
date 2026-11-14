/* =====================================================================
   CATÁLOGO DO SITE — UC → matéria → abas → itens
   Regra: só entra o que JÁ ESTÁ no GitHub. Dentro de cada aba, o mais novo primeiro (medicina/5-fase/...). Nada novo é gerado.
   Cada item aponta para um HTML existente, que abre embutido na aba como está.
   src é relativo a `base`.
   ===================================================================== */
window.SITE = {
  fase: "5º período · 2026.2",
  base: "5-fase/",
  ucs: [
    {
      id: "uc15", num: 15, nome: "UC15", tema: "Infecção", cor: "uc15", status: "",
      /* UC15 no formato novo. Arquivos próprios ficam em conteudo/uc15/.
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
        /* Tutoria UC15 no formato misto (Central + v2). APFs transcritas do PDF escaneado; resumo denso = versão enxuta do resumo SP1. */
        { id: "tutoria", nome: "Tutoria", prof: "Ana Elisa", abas: [
          { id: "raiox", titulo: "Raio-X das APFs", itens: [ { label: "Raio-X das APFs", nativo: "apfraiox", data: "conteudo/uc15/tutoria/apf.js", ns: "uc15/tut" } ] },
          { id: "sp4", titulo: "Resumo SP4", itens: [ { label: "Resumo SP4", nativo: "pdf", pdf: "conteudo/uc15/tutoria/sp4-resumo.pdf", thumbs: "conteudo/uc15/tutoria/thumbs-sp4/p-", data: "conteudo/uc15/tutoria/apf.js", apfKey: "sp4", ns: "uc15/tut/sp4",
            toc: [{"p": 1, "t": "A pele em andares"}, {"p": 2, "t": "Fatores predisponentes"}, {"p": 3, "t": "Lesões elementares"}, {"p": 3, "t": "Impetigo"}, {"p": 4, "t": "Pele escaldada (SSSS)"}, {"p": 6, "t": "Erisipela e celulite"}, {"p": 8, "t": "Furúnculo, carbúnculo e abscesso"}, {"p": 9, "t": "Fasceíte necrosante"}, {"p": 12, "t": "Tabela: como proceder"}, {"p": 12, "t": "Discursiva da APF"}, {"p": 13, "t": "Revisão relâmpago"}] } ] },
          { id: "sp3", titulo: "Resumo SP3", itens: [ { label: "Resumo SP3", nativo: "pdf", pdf: "conteudo/uc15/tutoria/sp3-resumo.pdf", thumbs: "conteudo/uc15/tutoria/thumbs-sp3/p-", data: "conteudo/uc15/tutoria/apf.js", apfKey: "sp3", ns: "uc15/tut/sp3",
            toc: [{"p": 1, "t": "Osteomielite: conceito e tipos"}, {"p": 2, "t": "Agentes"}, {"p": 3, "t": "Fisiopatologia"}, {"p": 5, "t": "Clínica e diagnóstico"}, {"p": 7, "t": "Tratamento"}, {"p": 8, "t": "Prevenção"}, {"p": 9, "t": "Complicações"}, {"p": 10, "t": "Endocardite: conceito e agentes"}, {"p": 11, "t": "Fisiopatologia e clínica"}, {"p": 12, "t": "Diagnóstico (Duke 2023)"}, {"p": 13, "t": "Tratamento"}, {"p": 15, "t": "Complicações e profilaxia"}, {"p": 17, "t": "Condutas atuais"}, {"p": 18, "t": "Divergências"}] } ] },
          { id: "sp2", titulo: "Resumo SP2", itens: [ { label: "Resumo SP2", nativo: "pdf", pdf: "conteudo/uc15/tutoria/sp2-resumo.pdf", thumbs: "conteudo/uc15/tutoria/thumbs-sp2/p-", data: "conteudo/uc15/tutoria/apf.js", apfKey: "sp2", ns: "uc15/tut/sp2",
            toc: [{"p": 1, "t": "O caso"}, {"p": 2, "t": "IVAS"}, {"p": 3, "t": "Faringoamigdalites e estreptococos"}, {"p": 5, "t": "Centor e tratamento da FAE"}, {"p": 7, "t": "Rinossinusite"}, {"p": 9, "t": "Otite média aguda"}, {"p": 11, "t": "Pneumonia: classificação"}, {"p": 12, "t": "Agentes por local"}, {"p": 13, "t": "Fisiopatologia e diagnóstico"}, {"p": 15, "t": "Complicações (imagem)"}, {"p": 16, "t": "CURB-65 e PSI"}, {"p": 17, "t": "Prescrição"}, {"p": 18, "t": "★ Discursiva (APF)"}, {"p": 19, "t": "Fechando o caso"}] } ] },
          { id: "sp1", titulo: "Resumo SP1", itens: [ { label: "Resumo SP1", nativo: "pdf", pdf: "conteudo/uc15/tutoria/sp1-resumo.pdf", thumbs: "conteudo/uc15/tutoria/thumbs-sp1/p-", data: "conteudo/uc15/tutoria/apf.js", apfKey: "sp1", ns: "uc15/tut/sp1",
            toc: [{"p": 1, "t": "Microbiota"}, {"p": 2, "t": "Definições"}, {"p": 4, "t": "Resistência"}, {"p": 5, "t": "Fases da infecção"}, {"p": 7, "t": "ITU"}, {"p": 9, "t": "Cistite na gestante (APF)"}, {"p": 11, "t": "★ Receita de alta (APF)"}] } ] },
          { id: "denso", titulo: "Resumo denso", itens: [ { label: "Resumo denso SP4", nativo: "pdf", pdf: "conteudo/uc15/tutoria/sp4-denso.pdf", ns: "uc15/tut/denso4" }, { label: "Resumo denso SP3", nativo: "pdf", pdf: "conteudo/uc15/tutoria/sp3-denso.pdf", ns: "uc15/tut/denso3" }, { label: "Resumo denso SP2", nativo: "denso", extra: "conteudo/uc15/tutoria/denso-sp2.js", global: "UC_DENSO_SP2", fullTab: "sp2", ns: "uc15/tut/denso2" }, { label: "Resumo denso SP1", nativo: "denso", extra: "conteudo/uc15/tutoria/denso-sp1.js", fullTab: "sp1", ns: "uc15/tut/denso" } ] },
          { id: "video", titulo: "Videoaula", itens: [ { label: "Videoaulas por SP", nativo: "videos", ns: "uc15/tut", videos: [
            { t: "SP4 · Versão rápida (pele e partes moles)", short: "SP4 rápida", d: "7:59", src: "conteudo/uc15/tutoria/videos/sp4-rapida.mp4", chapters: [{"t": 0, "title": "A pele em andares", "k": "SP4 · versão rápida", "star": false, "pega": false}, {"t": 30.1, "title": "Fatores predisponentes", "k": "Fatores predisponentes", "star": false, "pega": false}, {"t": 64.7, "title": "Impetigo: crosta cor de mel", "k": "Impetigo", "star": true, "pega": true}, {"t": 100.5, "title": "Complicações: rim sim, coração não", "k": "Impetigo", "star": false, "pega": true}, {"t": 125.6, "title": "Pele escaldada: Nikolsky e mucosas poupadas", "k": "Pele escaldada", "star": false, "pega": false}, {"t": 153.2, "title": "Tratamento da pele escaldada", "k": "Pele escaldada", "star": false, "pega": true}, {"t": 178.0, "title": "Erisipela: derme superficial e linfáticos", "k": "Erisipela e celulite", "star": true, "pega": true}, {"t": 204.8, "title": "Celulite: mais funda, borda borrada", "k": "Erisipela e celulite", "star": false, "pega": false}, {"t": 228.9, "title": "Tratamento: sem pus, mire o estreptococo", "k": "Erisipela e celulite", "star": false, "pega": false}, {"t": 258.5, "title": "Prevenção da recorrência", "k": "Erisipela e celulite", "star": false, "pega": false}, {"t": 279.1, "title": "Foliculite, furúnculo e carbúnculo", "k": "Furúnculo, carbúnculo e abscesso", "star": true, "pega": false}, {"t": 301.4, "title": "Tratamento: drenar é o principal", "k": "Furúnculo, carbúnculo e abscesso", "star": false, "pega": true}, {"t": 329.9, "title": "Fasceíte: os sinais que gritam", "k": "Fasceíte necrosante", "star": true, "pega": true}, {"t": 357.8, "title": "Tratamento: bisturi e antibiótico", "k": "Fasceíte necrosante", "star": false, "pega": true}, {"t": 386.2, "title": "A discursiva da APF: diagnóstico", "k": "Fechamento", "star": true, "pega": true}, {"t": 421.4, "title": "A discursiva da APF: conduta", "k": "Fechamento", "star": true, "pega": true}, {"t": 448.9, "title": "Revisão relâmpago", "k": "Fechamento", "star": false, "pega": false}] },
            { t: "SP4 · Infecções de pele e partes moles", short: "SP4", d: "20:34", src: "conteudo/uc15/tutoria/videos/sp4.mp4", chapters: [{"t": 0, "title": "A pele em andares", "k": "SP4 · Infecções de pele e partes moles", "star": false, "pega": false}, {"t": 38.7, "title": "Lesões elementares: o vocabulário", "k": "Impetigo", "star": false, "pega": false}, {"t": 64.9, "title": "Impetigo: a infecção mais superficial", "k": "Impetigo", "star": false, "pega": false}, {"t": 97.4, "title": "Dois agentes, duas formas", "k": "Impetigo", "star": false, "pega": false}, {"t": 131.5, "title": "Crosta cor de mel e ectima", "k": "Impetigo", "star": true, "pega": true}, {"t": 168.2, "title": "Diagnóstico e diferenciais", "k": "Impetigo", "star": false, "pega": false}, {"t": 196.7, "title": "Tratamento do impetigo", "k": "Impetigo", "star": false, "pega": false}, {"t": 242.9, "title": "Complicações: rim sim, coração não", "k": "Impetigo", "star": false, "pega": true}, {"t": 279.4, "title": "Pele escaldada: a toxina viaja", "k": "Pele escaldada", "star": false, "pega": false}, {"t": 313.7, "title": "Nikolsky e mucosas poupadas", "k": "Pele escaldada", "star": false, "pega": false}, {"t": 344.6, "title": "Pele escaldada × necrólise epidérmica tóxica", "k": "Pele escaldada", "star": false, "pega": true}, {"t": 384.5, "title": "Tratamento da pele escaldada", "k": "Pele escaldada", "star": false, "pega": true}, {"t": 421.2, "title": "Erisipela: derme superficial e linfáticos", "k": "Erisipela e celulite", "star": true, "pega": true}, {"t": 459.9, "title": "Quem tem erisipela", "k": "Erisipela e celulite", "star": false, "pega": false}, {"t": 494.1, "title": "Celulite: mais funda, borda borrada", "k": "Erisipela e celulite", "star": false, "pega": false}, {"t": 530.2, "title": "Pseudocelulite: o que parece e não é", "k": "Erisipela e celulite", "star": false, "pega": false}, {"t": 561.8, "title": "Diagnóstico: é clínico", "k": "Erisipela e celulite", "star": false, "pega": false}, {"t": 598.3, "title": "Tratamento da celulite não purulenta", "k": "Erisipela e celulite", "star": false, "pega": false}, {"t": 640.2, "title": "Recorrência e prevenção", "k": "Erisipela e celulite", "star": false, "pega": false}, {"t": 677.8, "title": "Foliculite, furúnculo e carbúnculo", "k": "Furúnculo, carbúnculo e abscesso", "star": true, "pega": false}, {"t": 716.2, "title": "Por que o estafilococo faz pus", "k": "Furúnculo, carbúnculo e abscesso", "star": false, "pega": false}, {"t": 751.8, "title": "Tratamento: drenar é o principal", "k": "Furúnculo, carbúnculo e abscesso", "star": false, "pega": false}, {"t": 794.5, "title": "Triângulo perigoso e descolonização", "k": "Furúnculo, carbúnculo e abscesso", "star": false, "pega": true}, {"t": 832.1, "title": "Fasceíte necrosante: a emergência", "k": "Fasceíte necrosante", "star": false, "pega": false}, {"t": 863.2, "title": "Tipo I e tipo II", "k": "Fasceíte necrosante", "star": false, "pega": false}, {"t": 902.5, "title": "Os sinais que gritam", "k": "Fasceíte necrosante", "star": true, "pega": true}, {"t": 942.9, "title": "Diagnóstico: quem decide é o cirurgião", "k": "Fasceíte necrosante", "star": false, "pega": false}, {"t": 978.2, "title": "Tratamento: bisturi e antibiótico", "k": "Fasceíte necrosante", "star": false, "pega": true}, {"t": 1020.2, "title": "Fournier e choque tóxico", "k": "Fasceíte necrosante", "star": false, "pega": false}, {"t": 1057.1, "title": "A discursiva da APF: o caso", "k": "Fechamento", "star": true, "pega": false}, {"t": 1098.1, "title": "A resposta: diagnóstico e gravidade", "k": "Fechamento", "star": true, "pega": true}, {"t": 1141.3, "title": "A resposta: conduta e complicações", "k": "Fechamento", "star": true, "pega": true}, {"t": 1188.7, "title": "Revisão relâmpago", "k": "Fechamento", "star": false, "pega": false}] },
            { t: "SP3 · Osteomielite e endocardite infecciosa", short: "SP3", d: "23:46", src: "conteudo/uc15/tutoria/videos/sp3.mp4", chapters: [{"t": 0, "title": "Osso e coração: infecções que se escondem", "k": "SP3 · Osteomielite e endocardite infecciosa", "star": false, "pega": false}, {"t": 34.9, "title": "Osteomielite: infecção do osso", "k": "Osteomielite", "star": false, "pega": false}, {"t": 66.7, "title": "Dois picos de idade", "k": "Osteomielite", "star": false, "pega": false}, {"t": 101.3, "title": "Os tipos pelo tempo", "k": "Osteomielite", "star": false, "pega": false}, {"t": 134.3, "title": "Os tipos pelo mecanismo e pela anatomia", "k": "Osteomielite", "star": false, "pega": false}, {"t": 174.2, "title": "Brodie, Pott e Garré", "k": "Osteomielite", "star": true, "pega": true}, {"t": 207.6, "title": "Staphylococcus aureus: o mais comum em todas as idades", "k": "Osteomielite", "star": true, "pega": true}, {"t": 239.7, "title": "Cada cenário, um agente", "k": "Osteomielite", "star": false, "pega": false}, {"t": 279.3, "title": "Por que a criança infecta a metáfise", "k": "Osteomielite", "star": false, "pega": false}, {"t": 316.1, "title": "Do abscesso à necrose", "k": "Osteomielite", "star": true, "pega": true}, {"t": 353.4, "title": "Sequestro, invólucro, cloaca e biofilme", "k": "Osteomielite", "star": true, "pega": false}, {"t": 386.8, "title": "Fatores predisponentes", "k": "Osteomielite", "star": false, "pega": false}, {"t": 430.9, "title": "Como a osteomielite aparece", "k": "Osteomielite", "star": false, "pega": false}, {"t": 468.7, "title": "Crônica: a fístula que drena pus", "k": "Osteomielite", "star": true, "pega": true}, {"t": 503.6, "title": "Laboratório: PCR, VHS e hemocultura", "k": "Osteomielite", "star": false, "pega": false}, {"t": 540.8, "title": "Imagem: RX primeiro, RM é a melhor", "k": "Osteomielite", "star": true, "pega": true}, {"t": 578.3, "title": "Padrão-ouro: a biópsia óssea", "k": "Osteomielite", "star": false, "pega": true}, {"t": 618.6, "title": "Os três pilares do tratamento", "k": "Osteomielite", "star": false, "pega": false}, {"t": 662.6, "title": "Antibiótico empírico por cenário", "k": "Osteomielite", "star": false, "pega": true}, {"t": 707.3, "title": "Quanto tempo e por qual via", "k": "Osteomielite", "star": false, "pega": true}, {"t": 746.4, "title": "Prevenção: antes, durante e depois", "k": "Osteomielite", "star": true, "pega": true}, {"t": 789.0, "title": "Fratura exposta e complicações", "k": "Osteomielite", "star": false, "pega": false}, {"t": 827.2, "title": "Endocardite infecciosa: a vegetação", "k": "Endocardite", "star": false, "pega": false}, {"t": 870.1, "title": "Quem tem e quem causa", "k": "Endocardite", "star": false, "pega": true}, {"t": 905.1, "title": "Os agentes e suas pistas", "k": "Endocardite", "star": false, "pega": false}, {"t": 945.6, "title": "Do jato à vegetação", "k": "Endocardite", "star": false, "pega": false}, {"t": 988.2, "title": "Febre, sopro e sinais periféricos", "k": "Endocardite", "star": false, "pega": true}, {"t": 1029.2, "title": "Hemocultura e ecocardiograma", "k": "Endocardite", "star": false, "pega": false}, {"t": 1072.1, "title": "Critérios de Duke (versão 2023)", "k": "Endocardite", "star": false, "pega": false}, {"t": 1118.3, "title": "Tratamento: princípios e empírico", "k": "Endocardite", "star": false, "pega": true}, {"t": 1161.4, "title": "Antibiótico dirigido e via oral", "k": "Endocardite", "star": false, "pega": false}, {"t": 1205.4, "title": "Quando operar", "k": "Endocardite", "star": false, "pega": false}, {"t": 1249.1, "title": "Complicações e profilaxia", "k": "Endocardite", "star": false, "pega": true}, {"t": 1293.3, "title": "A discursiva da APF: o caso", "k": "Fechamento", "star": true, "pega": false}, {"t": 1331.4, "title": "A discursiva da APF: a resposta", "k": "Fechamento", "star": true, "pega": true}, {"t": 1377.0, "title": "Revisão relâmpago", "k": "Fechamento", "star": false, "pega": false}] },
            { t: "SP2 · IVAS, otite, sinusite e pneumonia", short: "SP2", d: "22:52", src: "conteudo/uc15/tutoria/videos/sp2.mp4", chapters: [{"t": 0, "title": "Eu falei que iria piorar, Dr.", "k": "SP2 · Eu falei que iria piorar, Dr.", "star": false, "pega": false}, {"t": 33.4, "title": "IVAS: o andar de cima", "k": "IVAS", "star": false, "pega": false}, {"t": 67.2, "title": "Resfriado, gripe ou rinite?", "k": "IVAS", "star": false, "pega": false}, {"t": 106.3, "title": "Antibiótico não previne complicação", "k": "IVAS", "star": true, "pega": false}, {"t": 143.1, "title": "Faringoamigdalite: vírus ou bactéria?", "k": "IVAS", "star": false, "pega": false}, {"t": 177.7, "title": "A família dos estreptococos", "k": "IVAS · ênfase do objetivo", "star": false, "pega": false}, {"t": 215.5, "title": "As armas do Streptococcus pyogenes", "k": "IVAS", "star": false, "pega": false}, {"t": 248.2, "title": "Centor e McIsaac: quem testar", "k": "IVAS", "star": false, "pega": false}, {"t": 281.1, "title": "Tratamento da faringite estreptocócica", "k": "IVAS", "star": false, "pega": false}, {"t": 321.2, "title": "Complicações não supurativas", "k": "IVAS", "star": true, "pega": true}, {"t": 366.1, "title": "Complicações supurativas", "k": "IVAS", "star": false, "pega": false}, {"t": 403.8, "title": "Não infecciosas e mononucleose", "k": "IVAS", "star": false, "pega": false}, {"t": 441.7, "title": "Rinossinusite: o seio que não drena", "k": "Seios e ouvido", "star": true, "pega": false}, {"t": 476.8, "title": "Viral, pós-viral ou bacteriana?", "k": "Seios e ouvido", "star": false, "pega": false}, {"t": 513.4, "title": "Diagnóstico clínico e tratamento", "k": "Seios e ouvido", "star": true, "pega": true}, {"t": 555.8, "title": "Quando a sinusite vira emergência", "k": "Seios e ouvido", "star": false, "pega": false}, {"t": 588.7, "title": "Otite média aguda: a tuba da criança", "k": "Seios e ouvido", "star": false, "pega": false}, {"t": 625.1, "title": "O que você vê na otoscopia", "k": "Seios e ouvido", "star": false, "pega": false}, {"t": 661.4, "title": "Tratar ou observar?", "k": "Seios e ouvido", "star": false, "pega": false}, {"t": 704.8, "title": "Pneumonia: onde foi adquirida?", "k": "Pneumonia", "star": false, "pega": false}, {"t": 743.0, "title": "Típica ou atípica?", "k": "Pneumonia", "star": false, "pega": false}, {"t": 783.4, "title": "Quem causa, conforme o lugar", "k": "Pneumonia", "star": false, "pega": false}, {"t": 826.9, "title": "Como o alvéolo se enche", "k": "Pneumonia", "star": false, "pega": false}, {"t": 866.9, "title": "No exame físico: consolidação × derrame", "k": "Pneumonia", "star": false, "pega": true}, {"t": 903.1, "title": "O raio xis e o sinal da silhueta", "k": "Pneumonia", "star": false, "pega": false}, {"t": 943.6, "title": "Exames: o que pedir e quando", "k": "Pneumonia", "star": false, "pega": false}, {"t": 983.4, "title": "Derrame parapneumônico e empiema", "k": "Complicações", "star": false, "pega": false}, {"t": 1023.3, "title": "Pneumonia necrosante e abscesso", "k": "Complicações", "star": false, "pega": false}, {"t": 1062.1, "title": "CURB-65: onde tratar", "k": "Escores e Rx", "star": true, "pega": true}, {"t": 1103.3, "title": "PSI e critérios de UTI", "k": "Escores e Rx", "star": false, "pega": false}, {"t": 1151.2, "title": "Prescrição ambulatorial", "k": "Escores e Rx", "star": false, "pega": false}, {"t": 1199.4, "title": "Prescrição hospitalar e UTI", "k": "Escores e Rx", "star": false, "pega": true}, {"t": 1242.0, "title": "O desfecho de Jonathan", "k": "Fechamento", "star": false, "pega": false}, {"t": 1283.6, "title": "A discursiva da APF", "k": "Fechamento", "star": true, "pega": true}, {"t": 1329.6, "title": "Revisão relâmpago", "k": "Fechamento", "star": false, "pega": false}] },
            { t: "SP1 · Microbiota, antibioticoterapia e ITU", short: "SP1", d: "19:53", src: "conteudo/uc15/tutoria/videos/sp1.mp4", chapters: [{"t": 0, "title": "Uma gestante com ardência ao urinar", "k": "SP1 · Todo cuidado é pouco!", "star": false, "pega": false}, {"t": 31.3, "title": "O corpo é um condomínio", "k": "Microbiota", "star": false, "pega": false}, {"t": 64.2, "title": "Quem mora onde", "k": "Microbiota", "star": false, "pega": false}, {"t": 101.5, "title": "Cólon: o bairro mais lotado", "k": "Microbiota", "star": false, "pega": false}, {"t": 130.6, "title": "Vagina: lactobacilos de guarda", "k": "Microbiota", "star": false, "pega": false}, {"t": 163.5, "title": "Para que serve a microbiota?", "k": "Microbiota", "star": false, "pega": false}, {"t": 194.4, "title": "Colonizar não é infectar", "k": "Definições", "star": false, "pega": false}, {"t": 228.7, "title": "Profilática, empírica, dirigida", "k": "Definições", "star": true, "pega": false}, {"t": 259.7, "title": "Profilaxia na prática", "k": "Definições", "star": false, "pega": false}, {"t": 290.4, "title": "Empírica não é chute", "k": "Definições", "star": false, "pega": false}, {"t": 322.8, "title": "Bactericida × bacteriostático", "k": "Definições", "star": true, "pega": false}, {"t": 360.9, "title": "Oportunista e nosocomial", "k": "Definições", "star": false, "pega": false}, {"t": 399.1, "title": "O tamanho do problema", "k": "Resistência", "star": false, "pega": false}, {"t": 432.3, "title": "O antibiótico não cria: seleciona", "k": "Resistência", "star": true, "pega": false}, {"t": 466.4, "title": "Como a resistência se espalha", "k": "Resistência", "star": false, "pega": false}, {"t": 504.2, "title": "Os 4 mecanismos bioquímicos", "k": "Resistência", "star": false, "pega": false}, {"t": 543.6, "title": "O que alimenta a resistência", "k": "Resistência", "star": false, "pega": true}, {"t": 576.5, "title": "Como reduzir a resistência", "k": "Resistência", "star": false, "pega": false}, {"t": 613.9, "title": "As fases da infecção", "k": "Fases", "star": false, "pega": false}, {"t": 650.2, "title": "As fases na infecção urinária", "k": "Fases", "star": false, "pega": false}, {"t": 681.7, "title": "Infecção urinária: quem pega", "k": "ITU", "star": false, "pega": false}, {"t": 715.5, "title": "O pódio dos agentes", "k": "ITU", "star": true, "pega": false}, {"t": 747.4, "title": "A viagem da E. coli", "k": "ITU", "star": false, "pega": false}, {"t": 781.4, "title": "Defesas × fatores de risco", "k": "ITU", "star": false, "pega": false}, {"t": 821.5, "title": "Classificação — o que mudou", "k": "ITU", "star": false, "pega": false}, {"t": 862.2, "title": "Cistite × pielonefrite", "k": "ITU", "star": false, "pega": false}, {"t": 901.8, "title": "Diagnóstico: fita, EAS e cultura", "k": "ITU", "star": true, "pega": false}, {"t": 943.5, "title": "Imagem e diagnóstico diferencial", "k": "ITU", "star": false, "pega": false}, {"t": 980.0, "title": "Tratamento atualizado", "k": "ITU", "star": false, "pega": false}, {"t": 1027.5, "title": "Gestante, idoso, homem, sondado", "k": "ITU", "star": false, "pega": false}, {"t": 1074.0, "title": "Complicações e prevenção", "k": "ITU", "star": false, "pega": false}, {"t": 1114.6, "title": "A discursiva: receita de alta", "k": "Fechamento · APF", "star": true, "pega": true}, {"t": 1157.1, "title": "Revisão relâmpago", "k": "Fechamento", "star": false, "pega": false}] } ] } ] },
          { id: "apf", titulo: "APFs T11", itens: [ { label: "APFs T11", nativo: "apf", data: "conteudo/uc15/tutoria/apf.js", ns: "uc15/tut" } ] },
          { id: "veterana", titulo: "Resumo da veterana", itens: [ { label: "Tutoria · resumo T11", nativo: "pdf", pdf: "conteudo/uc15/tutoria/resumo-veterana-t11.pdf", thumbs: "conteudo/uc15/tutoria/thumbs-vet/p-", data: "conteudo/uc15/tutoria/apf.js", apfKey: "veterana", ns: "uc15/tut/vet",
            toc: [{"p": 1, "t": "SP1 · ITU"}, {"p": 9, "t": "SP2 · IVAS"}, {"p": 17, "t": "SP3 · Osteomielite"}, {"p": 23, "t": "SP4 · Infecções cutâneas"}, {"p": 29, "t": "SP5 · Sepse"}] } ] } ] },
        { id: "farmaco", nome: "Farmacologia", prof: "Vânia", abas: [
          { id: "diario", titulo: "Resumo diário", itens: [ { label: "Resumo diário SP1–3", nativo: "pdf", pdf: "conteudo/uc15/farmaco/resumo-diario-sp1-3.pdf", thumbs: "conteudo/uc15/farmaco/thumbs-diario/p-", ns: "uc15/farmaco/diario",
            toc: [{"p": 1, "t": "Como ela pensa"}, {"p": 2, "t": "SP1 · ITU e antissépticos"}, {"p": 3, "t": "SP2 · Sulfas e quinolonas"}, {"p": 4, "t": "SP3 · Mecanismo e penicilinas"}, {"p": 5, "t": "SP3 · Alergia e cefalosporinas"}, {"p": 7, "t": "Resistência (quadro da aula)"}, {"p": 8, "t": "Divergências · doses · 10 frases"}, {"p": 9, "t": "Fluxograma do quadro"}] } ] },
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
          { id: "vespera", titulo: "Véspera", itens: [ { label: "Véspera", nativo: "vespera", dir: "uc15/farmaco/central/", extra: "conteudo/uc15/farmaco/truques.js" } ] },
          { id: "aulas", titulo: "Frases da aula", itens: [ { label: "Frases da aula", nativo: "aulas", dir: "uc15/farmaco/central/" } ] },
          { id: "transcricoes", titulo: "Transcrições", itens: [
            { label: "Aula 13/11 · SP5", src: "uc15/farmaco/uc15-farmaco-transcricao-sp5.html" },
            { label: "Aula 06/11 · SP4", src: "uc15/farmaco/uc15-farmaco-transcricao-sp4.html" },
            { label: "Aula 30/10 · SP2–SP3", src: "uc15/farmaco/uc15-farmaco-transcricao-sp2-sp3.html" },
            { label: "Aula 22/10 · SP1", src: "uc15/farmaco/uc15-farmaco-transcricao-sp1.html" } ] },
          { id: "central", titulo: "Central (original)", itens: [
            { label: "Central da matéria", src: "uc15/farmaco/uc15-farmaco-central-guia.html" } ] } ] },
        { id: "pato", nome: "Patologia", prof: "Maria Verônica", abas: [
          { id: "resumo", titulo: "Resumo", itens: [ { label: "Resumo das aulas 1–5 (+ prova T10)", nativo: "pdf", pdf: "conteudo/uc15/pato/resumo-aulas-1-5.pdf", ns: "uc15/pato/resumo15", toc: [{"p": 1, "t": "SP1 · Patologias renais"}, {"p": 4, "t": "SP2 · Faringite e cardíacas"}, {"p": 6, "t": "SP3 · Infecções do SNC"}, {"p": 10, "t": "SP4 · Patologias infecciosas"}, {"p": 13, "t": "SP5 · Doenças da pele"}, {"p": 16, "t": "Prova T10 — o que caiu"}] },
            { label: "Resumo das aulas 1–3 (anterior)", nativo: "pdf", pdf: "conteudo/uc15/pato/resumo-aulas-1-3.pdf", ns: "uc15/pato/resumo" } ] },
          { id: "videos", titulo: "Videoaulas", itens: [ { label: "Videoaulas animadas por SP", nativo: "videos", ns: "uc15/pato", videos: [
            { t: "SP5 · Doenças inflamatórias da pele", short: "SP5", d: "9:27", src: "conteudo/uc15/pato/videos/sp5-pele.mp4", chapters: [{"t": 0, "title": "A pele em três andares", "k": "", "t11": false}, {"t": 26.5, "title": "Lesões elementares", "k": "", "t11": false}, {"t": 55.5, "title": "Como raciocinar", "k": "", "t11": false}, {"t": 78.1, "title": "Dermatite eczematosa aguda", "k": "", "t11": false}, {"t": 115.2, "title": "Dermatite eczematosa crônica", "k": "", "t11": true}, {"t": 154.3, "title": "Psoríase: a cascata", "k": "", "t11": true}, {"t": 191.1, "title": "Psoríase: clínica e sinais", "k": "", "t11": false}, {"t": 235.5, "title": "Líquen plano", "k": "", "t11": false}, {"t": 256.3, "title": "Bolhosas autoimunes: onde descola", "k": "", "t11": false}, {"t": 292.4, "title": "Pênfigo vulgar", "k": "", "t11": true}, {"t": 332.1, "title": "Penfigoide bolhoso", "k": "", "t11": false}, {"t": 362.6, "title": "Dermatite herpetiforme", "k": "", "t11": false}, {"t": 401.6, "title": "As três lado a lado", "k": "", "t11": false}, {"t": 442.6, "title": "Epidermólise bolhosa", "k": "", "t11": false}, {"t": 480.8, "title": "Exantemas virais da infância", "k": "", "t11": false}, {"t": 514.2, "title": "Resumão para a prova", "k": "", "t11": false}] },
            { t: "SP4 · Patologias infecciosas", short: "SP4", d: "9:36", src: "conteudo/uc15/pato/videos/sp4-infecciosas.mp4", chapters: [{"t": 0, "title": "Por que a infecção machuca", "k": "", "t11": false}, {"t": 37.7, "title": "Do menor ao maior", "k": "", "t11": false}, {"t": 59.3, "title": "Príon: a proteína que dobra errado", "k": "", "t11": true}, {"t": 96.9, "title": "Creutzfeldt-Jakob", "k": "", "t11": false}, {"t": 136.8, "title": "Vírus: parasita obrigatório", "k": "", "t11": true}, {"t": 172.5, "title": "Como o vírus lesa a célula", "k": "", "t11": true}, {"t": 209.6, "title": "Ebola", "k": "", "t11": false}, {"t": 242.0, "title": "Riquétsias e micoplasma", "k": "", "t11": false}, {"t": 274.3, "title": "Anatomia da bactéria", "k": "", "t11": false}, {"t": 299.6, "title": "Como a bactéria lesa", "k": "", "t11": false}, {"t": 341.3, "title": "Endotoxina e choque séptico", "k": "", "t11": false}, {"t": 376.3, "title": "Antraz: a toxina de três peças", "k": "", "t11": false}, {"t": 409.0, "title": "Resistência: 4 mecanismos", "k": "", "t11": false}, {"t": 452.6, "title": "Fungos", "k": "", "t11": false}, {"t": 479.5, "title": "Protozoários", "k": "", "t11": false}, {"t": 522.5, "title": "Resumão para a prova", "k": "", "t11": false}] },
            { t: "SP1 · Patologias renais", short: "SP1", d: "8:09", src: "conteudo/uc15/pato/videos/sp1-renal.mp4", chapters: [{"t": 0, "title": "Como o rim adoece: 4 padrões", "k": "", "t11": false}, {"t": 35.5, "title": "A barreira de filtração", "k": "", "t11": true}, {"t": 64.2, "title": "Síndrome nefrítica: a parede inflama", "k": "", "t11": false}, {"t": 99.2, "title": "Síndrome nefrótica: o podócito cede", "k": "", "t11": false}, {"t": 138.7, "title": "Nefrítica × nefrótica", "k": "", "t11": false}, {"t": 176.6, "title": "Glomerulonefrites: 3 mecanismos imunes", "k": "", "t11": false}, {"t": 215.2, "title": "Cada glomerulopatia na sua prateleira", "k": "", "t11": false}, {"t": 257.8, "title": "Diagnóstico das glomerulonefrites", "k": "", "t11": false}, {"t": 297.1, "title": "Nefrite túbulo-intersticial", "k": "", "t11": false}, {"t": 335.9, "title": "Doença renal crônica", "k": "", "t11": false}, {"t": 378.9, "title": "KDIGO: o estágio pela TFG", "k": "", "t11": false}, {"t": 412.8, "title": "Como estimar a TFG", "k": "", "t11": false}, {"t": 437.7, "title": "Resumão para a prova", "k": "", "t11": true}] },
            { t: "SP2 · Faringite e complicações cardíacas", short: "SP2", d: "6:27", src: "conteudo/uc15/pato/videos/sp2-faringite-cardio.mp4", chapters: [{"t": 0, "title": "Faringite estreptocócica", "k": "", "t11": false}, {"t": 36.7, "title": "Febre reumática: mimetismo molecular", "k": "", "t11": false}, {"t": 63.4, "title": "Critérios de Jones (2015)", "k": "", "t11": false}, {"t": 104.5, "title": "Endocardite reumática (valvulite)", "k": "", "t11": false}, {"t": 128.0, "title": "Miocardite reumática: Aschoff e Anitschkow", "k": "", "t11": false}, {"t": 154.1, "title": "Pericardite: “pão com manteiga”", "k": "", "t11": false}, {"t": 165.0, "title": "Da febre reumática à valvopatia crônica", "k": "", "t11": false}, {"t": 201.4, "title": "Endocardite infecciosa: quem causa", "k": "", "t11": false}, {"t": 233.1, "title": "Endocardite infecciosa: sinais e êmbolos", "k": "", "t11": false}, {"t": 268.7, "title": "Critérios de Duke (2023)", "k": "", "t11": false}, {"t": 301.9, "title": "Miocardite", "k": "", "t11": false}, {"t": 343.7, "title": "Resumão para a prova", "k": "", "t11": false}] },
            { t: "SP3 · Infecções do SNC", short: "SP3", d: "8:12", src: "conteudo/uc15/pato/videos/sp3-snc.mp4", chapters: [{"t": 0, "title": "Onde mora cada infecção", "k": "", "t11": false}, {"t": 31.9, "title": "Empiema subdural", "k": "", "t11": false}, {"t": 60.4, "title": "Meningite: quem causa", "k": "", "t11": false}, {"t": 90.6, "title": "Meningite: clínica", "k": "", "t11": false}, {"t": 119.8, "title": "Punção lombar: quando fazer TC antes", "k": "", "t11": false}, {"t": 146.4, "title": "Líquor: a tabela que mais cai", "k": "", "t11": false}, {"t": 179.4, "title": "Tratamento empírico", "k": "", "t11": false}, {"t": 204.7, "title": "Meningococo, endotélio e CIVD", "k": "", "t11": true}, {"t": 245.5, "title": "Meningococcemia fulminante", "k": "", "t11": false}, {"t": 270.2, "title": "Meningite tuberculosa", "k": "", "t11": true}, {"t": 303.6, "title": "Encefalite herpética", "k": "", "t11": false}, {"t": 333.7, "title": "Meningoencefalites", "k": "", "t11": false}, {"t": 356.6, "title": "Abscesso cerebral", "k": "", "t11": true}, {"t": 396.6, "title": "Neurocisticercose", "k": "", "t11": false}, {"t": 443.1, "title": "Resumão para a prova", "k": "", "t11": true}] } ] } ] },
          { id: "questoes", titulo: "Questões", itens: [ { label: "Questões (prova T10 + treino)", nativo: "patoq", data: "conteudo/uc15/pato/data.js", ns: "uc15/pato" } ] },
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
          /* Página única da PM (nov/2026): uma aba por função. O material antigo (Central, Guia completo, banco,
             tabelão, raio-X, guias por SP, vias) continua no ar pelos endereços de sempre, fora do menu. */
          { id: "resumo", titulo: "Resumo", itens: [
            /*RESUMOS-UC14-FARMACO*/{ label: "SP1 · Diarreia e DII", nativo: "pdf", rk: "sp1", pdf: "conteudo/uc14/farmaco/resumo-sp1.pdf", thumbs: "conteudo/uc14/farmaco/thumbs-sp1/p-", ns: "uc14/farmaco/sp1",
              toc: [{"p": 1, "t": "A balança que decide se existe diarreia"}, {"p": 1, "t": "Os quatro jeitos de quebrar a balança"}, {"p": 2, "t": "Onde cada fármaco entra na balança"}, {"p": 5, "t": "A microbiota como alvo"}, {"p": 5, "t": "Doença inflamatória intestinal"}, {"p": 7, "t": "Discursivas de diarreia e DII que já caíram"}, {"p": 8, "t": "Mapa mental"}] },
            { label: "SP2 · Constipação", nativo: "pdf", rk: "sp2", pdf: "conteudo/uc14/farmaco/resumo-sp2.pdf", thumbs: "conteudo/uc14/farmaco/thumbs-sp2/p-", ns: "uc14/farmaco/sp2",
              toc: [{"p": 1, "t": "O que é constipação"}, {"p": 2, "t": "Primária × secundária"}, {"p": 3, "t": "Água e fibra"}, {"p": 4, "t": "Os osmóticos"}, {"p": 5, "t": "Estimulantes"}, {"p": 6, "t": "Quando o osmótico não basta"}, {"p": 6, "t": "Os que agem no reto"}, {"p": 8, "t": "Discursivas de constipação que já caíram"}, {"p": 8, "t": "Mapa mental"}] },
            { label: "SP3 · Antieméticos e hepato", nativo: "pdf", rk: "sp3", pdf: "conteudo/uc14/farmaco/resumo-sp3.pdf", thumbs: "conteudo/uc14/farmaco/thumbs-sp3/p-", ns: "uc14/farmaco/sp3",
              toc: [{"p": 1, "t": "O vômito é um reflexo com dois comandos"}, {"p": 2, "t": "Serotonina acelera, dopamina freia"}, {"p": 3, "t": "Ondansetrona"}, {"p": 4, "t": "Metoclopramida e bromoprida"}, {"p": 5, "t": "Síndrome extrapiramidal"}, {"p": 5, "t": "Domperidona"}, {"p": 6, "t": "Anti-H1 e antimuscarínicos"}, {"p": 7, "t": "Quimioterapia"}, {"p": 7, "t": "Fígado e pâncreas"}, {"p": 8, "t": "Discursivas de antieméticos e hepato que já caíram"}, {"p": 9, "t": "Mapa mental"}] },
            { label: "SP4 · Dispepsia", nativo: "pdf", rk: "sp4", pdf: "conteudo/uc14/farmaco/resumo-sp4.pdf", thumbs: "conteudo/uc14/farmaco/thumbs-sp4/p-", ns: "uc14/farmaco/sp4",
              toc: [{"p": 1, "t": "Três estímulos, uma bomba"}, {"p": 3, "t": "A mucosa que resiste ao próprio ácido"}, {"p": 4, "t": "Anti-H2"}, {"p": 5, "t": "IBP"}, {"p": 7, "t": "O que o IBP crônico cobra"}, {"p": 8, "t": "As interações"}, {"p": 9, "t": "Vonoprazana"}, {"p": 10, "t": "Antiácidos"}, {"p": 11, "t": "Reforçar a defesa"}, {"p": 12, "t": "Fitoterapia e o que os artigos dela deixam cair"}, {"p": 13, "t": "Discursivas de dispepsia que já caíram"}, {"p": 14, "t": "Mapa mental"}] }/*FIM-RESUMOS*/ ] },
          /*DENSO-UC14*/{ id: "denso", titulo: "Resumo denso", itens: [ { label: "Resumo denso · SP1 a SP4", nativo: "pdf", pdf: "conteudo/uc14/farmaco/resumo-denso.pdf", thumbs: "conteudo/uc14/farmaco/thumbs-denso/p-", ns: "uc14/farmaco/denso",
              toc: [{"p": 1, "t": "Como é a PM"}, {"p": 1, "t": "SP4 · Dispepsia"}, {"p": 2, "t": "SP1 · Diarreia e DII"}, {"p": 3, "t": "SP2 · Constipação"}, {"p": 5, "t": "SP3 · Antieméticos e hepato"}, {"p": 6, "t": "Na hora da prova"}] } ] },/*FIM-DENSO*/
          { id: "tabela", titulo: "Fármacos", itens: [ { label: "Tabela de fármacos", nativo: "tabela", dir: "uc14/farmaco/pm/" } ] },
          { id: "provas", titulo: "Questões", itens: [ { label: "Provas antigas, T12 e PMs", nativo: "provas", dir: "uc14/farmaco/pm/" } ] },
          { id: "abcd", titulo: "Treino ABCD", itens: [ { label: "Treino ABCD", nativo: "abcd", dir: "uc14/farmaco/pm/" } ] },
          { id: "flashcards", titulo: "Flashcards", itens: [ { label: "Mecanismos", src: "uc14/farmaco/uc14-farmaco-flashcards-mecanismo.html" } ] },
          { id: "vespera", titulo: "Véspera", itens: [ { label: "Véspera", nativo: "vespera", dir: "uc14/farmaco/pm/", extra: "conteudo/uc14/farmaco/truques.js",
              hero: "Para a quarta de manhã: um simulado curto, o que mais cai com o link para a página do resumo, como ela engana, as doses que ela pede e a tabela numa tela.",
              sims: [ { l: "Simulado relâmpago · 15 que já caíram", view: "provas", f: { mode: "prova", n: 15 } },
                      { l: "Simulado PM inédito · 8 + 6", view: "provas", f: { tu: ["Simulado PM"], mode: "prova", n: 0 } },
                      { l: "Só as PMs antigas", view: "provas", f: { tu: ["PM T4", "PM T7", "PM conc."], mode: "prova", n: 0 } },
                      { l: "Rodada ABCD de 10", view: "abcd", f: { mode: "estudo", n: 10 } } ] } ] },
          { id: "raiox", titulo: "Raio-X", itens: [
            { label: "Raio-X da PM", nativo: "raiox", dir: "uc14/farmaco/pm/" },
            { label: "Frases das aulas", nativo: "aulas", dir: "uc14/farmaco/pm/" },
            { label: "Aula 04/09 (transcrição)", src: "uc14/farmaco/uc14-farmaco-transcricao-aula-04-09.html" },
            { label: "Aula 19/09 (transcrição)", src: "uc14/farmaco/uc14-farmaco-transcricao-aula-19-09.html" } ] },
          /*VIDEOS-UC14*//*FIM-VIDEOS*/
          /*PODCAST-UC14*/{ id: "podcast", titulo: "Podcast", itens: [ { label: "Podcast da PM · 32 min", src: "uc14/farmaco/uc14-farmaco-podcast.html" } ] },/*FIM-PODCAST*/
        ] },
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
