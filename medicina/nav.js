(function () {
  var script = document.currentScript;
  if (!script || !script.src) return;
  var base;
  try { base = new URL('.', script.src); } catch (e) { return; }
  var DATA = [{"u": "UC13", "ms": [{"m": "Tutoria", "fs": [{"t": "UC XIII · SP1 — Dor · Modo Inicial v2", "f": "5-fase/uc13/tutoria/uc13-sp1-dor-modo-inicial-v2.html"}, {"t": "UC XIII · SP1 Dor · Aprofundamento", "f": "5-fase/uc13/tutoria/uc13-sp1-dor-aprofundamento.html"}, {"t": "UC13 · SP2 — Dor Neuropática · Modo Inicial", "f": "5-fase/uc13/tutoria/uc13-sp2-dor-neuropatica-modo-inicial.html"}, {"t": "UC13 · SP2 — Dor Neuropática · Aprofundamento", "f": "5-fase/uc13/tutoria/uc13-sp2-dor-neuropatica-aprofundamento.html"}, {"t": "UC13 · SP3 — Dor Crônica: Fibromialgia & Miofascial · Modo Inicial", "f": "5-fase/uc13/tutoria/uc13-sp3-dor-cronica-modo-inicial.html"}, {"t": "UC13 · SP3 — Dor Crônica: FM & Miofascial · Aprofundamento", "f": "5-fase/uc13/tutoria/uc13-sp3-dor-cronica-aprofundamento.html"}, {"t": "UC13 · SP4 — Dor Visceral & Nefrolitíase · Guia de Estudo", "f": "5-fase/uc13/tutoria/uc13-sp4-dor-visceral.html"}, {"t": "UC13 · SP5 — Dor Neoplásica, Opioides & Cefaleias · Guia de Estudo", "f": "5-fase/uc13/tutoria/uc13-sp5-dor-neoplasica.html"}, {"t": "UC13 · Prova Final de Tutoria · Guia + Simulado", "f": "5-fase/uc13/tutoria/uc13-prova-final-tutoria-guia.html"}]}, {"m": "Anatomia + Fisiologia", "fs": [{"t": "Revisão-Relâmpago · A1 Anato Seccional + Fisio · 27/08", "f": "5-fase/uc13/anato-fisio/revisao-relampago-a1-anato-fisio.html"}]}, {"m": "Patologia", "fs": [{"t": "Pato A1 · Revisão Pré-Prova · 28/08 13h", "f": "5-fase/uc13/pato/uc13-pato-a1-revisao.html"}]}, {"m": "Farmacologia", "fs": [{"t": "Farmaco A1 · Estratégia de Guerra · 04/09", "f": "5-fase/uc13/farmaco/uc13-farmaco-a1-estrategia.html"}, {"t": "Banco Vânia · Farmaco UC13 · questões reais T5–T12", "f": "5-fase/uc13/farmaco/uc13-farmaco-banco-vania.html"}, {"t": "Flashcards Farmaco A1 · v3 atômico", "f": "5-fase/uc13/farmaco/uc13-farmaco-flashcards-posologia.html"}, {"t": "Simuladão Vânia · Farmaco UC13 · A1 04/09", "f": "5-fase/uc13/farmaco/uc13-farmaco-simuladao-vania.html"}, {"t": "Leitura Dirigida · Artigos da Vânia · UC13", "f": "5-fase/uc13/farmaco/uc13-farmaco-leitura-dirigida-artigos.html"}, {"t": "Farmaco UC13 · Roteiros do podcast (Ep. 1–4)", "f": "5-fase/uc13/farmaco/uc13-farmaco-podcast-roteiros.html"}, {"t": "Podcast Farmaco UC13 · 5 episódios", "f": "5-fase/uc13/farmaco/uc13-farmaco-podcast.html"}, {"t": "Simuladão PM · Farmaco UC13", "f": "5-fase/uc13/farmaco/uc13-farmaco-simuladao-pm.html"}, {"t": "Vias Metabólicas · Farmaco UC13", "f": "5-fase/uc13/farmaco/uc13-farmaco-vias-metabolicas.html"}]}, {"m": "Laboratório", "fs": [{"t": "UC13 · Laboratório (Práticas Funcionais) — Guia de estudo A1", "f": "5-fase/uc13/lab/uc13-lab-a1-guia.html"}]}]}, {"u": "UC14", "ms": [{"m": "Farmacologia", "fs": [{"t": "UC14 · Farmaco · Banco de questões da Vânia", "f": "5-fase/uc14/farmaco/uc14-farmaco-banco-vania.html"}, {"t": "UC14 · Farmaco · Raio-X da Vânia + Estratégia", "f": "5-fase/uc14/farmaco/uc14-farmaco-raio-x-vania-estrategia.html"}, {"t": "🎧 Transcrição · Farmaco UC14 · aula 04/09/2026", "f": "5-fase/uc14/farmaco/uc14-farmaco-transcricao-aula-04-09.html"}, {"t": "UC14 · Farmaco · Vias metabólicas", "f": "5-fase/uc14/farmaco/uc14-farmaco-vias-metabolicas.html"}, {"t": "UC14 · Farmaco · SP1 Diarreia + DII — Guia v2", "f": "5-fase/uc14/farmaco/uc14-sp1-diarreia-dii.html"}, {"t": "UC14 · Farmaco · SP2 Constipação — Guia v2", "f": "5-fase/uc14/farmaco/uc14-sp2-constipacao.html"}, {"t": "UC14 · Farmaco · SP3 Antieméticos + Hepato — Guia v2", "f": "5-fase/uc14/farmaco/uc14-sp3-antiemeticos-hepato.html"}, {"t": "UC14 · Farmaco · SP4 Dispepsia — pré-resumo", "f": "5-fase/uc14/farmaco/uc14-sp4-dispepsia.html"}, {"t": "UC14 · Farmaco · Guia Completo (SPs + Banco + Vias + Raio-X)", "f": "5-fase/uc14/farmaco/uc14-farmaco-guia-completo.html"}, {"t": "UC14 · Farmaco · Tabelão de fármacos", "f": "5-fase/uc14/farmaco/uc14-farmaco-tabelao-farmacos.html"}, {"t": "🎧 Transcrição · Farmaco UC14 · aula 19/09/2026", "f": "5-fase/uc14/farmaco/uc14-farmaco-transcricao-aula-19-09.html"}]}, {"m": "Tutoria", "fs": [{"t": "UC14 · Prova Final de Tutoria · Guia + Simuladão", "f": "5-fase/uc14/tutoria/uc14-prova-final-tutoria-guia-simulado.html"}, {"t": "UC14 · SP1 — Abdome Agudo · Guia + Simulado APF", "f": "5-fase/uc14/tutoria/uc14-sp1-abdome-agudo.html"}, {"t": "UC14 · SP2 — Diarreia e Parasitoses · Guia + Simulado APF", "f": "5-fase/uc14/tutoria/uc14-sp2-diarreia-parasitoses.html"}, {"t": "UC14 · SP3 — Icterícia, Vias Biliares e Pancreatite · Guia + Simulado APF", "f": "5-fase/uc14/tutoria/uc14-sp3-ictericia-biliar-pancreatite.html"}, {"t": "UC14 · SP4 — Dispepsia, DRGE, Úlcera e HDA · Guia + Simulado APF", "f": "5-fase/uc14/tutoria/uc14-sp4-dispepsia-drge-ulcera-hda.html"}]}, {"m": "Patologia", "fs": [{"t": "Patologia UC14", "f": "5-fase/uc14/pato/uc14-pato-guia.html"}]}]}, {"u": "HP Manifestações Abdominais", "ms": [{"m": "Procedimentos", "fs": [{"t": "HP · Prova do João (HPp) — Exame físico abdominal, abdome agudo, ascite, via biliar e endoscopia · Guia de estudo", "f": "5-fase/hp-abdomen/procedimentos/hp-joao-hpp-guia.html"}]}, {"m": "Clínica", "fs": [{"t": "HPc · Andrea — Hepatites, DHGNA, Cirrose e Ascite · Guia de estudo", "f": "5-fase/hp-abdomen/clinica/hp-andrea-hpc-guia.html"}]}]}];
  var here = location.href.split('#')[0].split('?')[0];
  var host = document.createElement('div');
  host.id = 'medicina-nav';
  var root = host.attachShadow({mode: 'open'});
  var style = document.createElement('style');
  style.textContent = [
    ':host{all:initial}',
    '*{box-sizing:border-box; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}',
    '.tab{position:fixed; left:0; top:50%; transform:translateY(-50%); z-index:2147483000; width:38px; height:46px;',
    '  border:1px solid #2a3a4d; border-left:none; border-radius:0 10px 10px 0; background:rgba(22,31,43,.92);',
    '  color:#e8eef5; font-size:17px; cursor:pointer; box-shadow:0 4px 16px rgba(0,0,0,.35); padding:0}',
    '.tab:hover{border-color:#12d3b0}',
    '.backdrop{position:fixed; inset:0; background:rgba(0,0,0,.45); opacity:0; pointer-events:none; transition:opacity .15s; z-index:2147483001}',
    '.backdrop.on{opacity:1; pointer-events:auto}',
    '.drawer{position:fixed; top:0; bottom:0; left:0; width:300px; max-width:85vw; z-index:2147483002;',
    '  background:#0f1720; color:#e8eef5; border-right:1px solid #2a3a4d; box-shadow:8px 0 30px rgba(0,0,0,.5);',
    '  transform:translateX(-105%); transition:transform .18s ease; display:flex; flex-direction:column}',
    '.drawer.on{transform:translateX(0)}',
    '.hd{display:flex; align-items:center; justify-content:space-between; padding:14px 14px 10px;',
    '  color:#12d3b0; font-weight:700; font-size:13px; letter-spacing:.08em; text-transform:uppercase}',
    '.x{background:none; border:none; color:#9fb2c6; font-size:22px; cursor:pointer; line-height:1; padding:0 6px}',
    '.x:hover{color:#e8eef5}',
    '.idx{display:block; margin:0 14px 10px; padding:8px 10px; border:1px solid #2a3a4d; border-radius:10px;',
    '  color:#4c8dff; text-decoration:none; font-size:13px}',
    '.idx:hover{border-color:#4c8dff}',
    '.tree{overflow:auto; padding:0 10px 16px; flex:1}',
    'details{margin:2px 0}',
    'summary{cursor:pointer; color:#e8eef5; font-weight:600; padding:5px 6px; border-radius:8px; font-size:13px; list-style:none}',
    'summary::-webkit-details-marker{display:none}',
    "summary::before{content:'\\1F4C1  '}",
    "details[open]>summary::before{content:'\\1F4C2  '}",
    'summary:hover{color:#12d3b0; background:rgba(18,211,176,.08)}',
    'details details{margin-left:12px}',
    'details details summary{color:#9fb2c6; font-weight:500}',
    '.doc{display:block; color:#9fb2c6; text-decoration:none; padding:4px 8px 4px 24px; border-radius:8px; font-size:12.5px; line-height:1.35}',
    '.doc:hover{color:#12d3b0; background:rgba(18,211,176,.08)}',
    '.doc.atual{color:#12d3b0; font-weight:600}'
  ].join('\n');
  root.appendChild(style);
  var tab = document.createElement('button');
  tab.className = 'tab'; tab.title = 'Guias de medicina'; tab.setAttribute('aria-label', 'Abrir menu de guias');
  tab.textContent = '\uD83D\uDCDA';
  var backdrop = document.createElement('div'); backdrop.className = 'backdrop';
  var drawer = document.createElement('nav'); drawer.className = 'drawer';
  var hd = document.createElement('div'); hd.className = 'hd';
  var titulo = document.createElement('span'); titulo.textContent = 'Medicina \u00B7 guias';
  var x = document.createElement('button'); x.className = 'x'; x.textContent = '\u00D7'; x.setAttribute('aria-label', 'Fechar');
  hd.appendChild(titulo); hd.appendChild(x); drawer.appendChild(hd);
  var idx = document.createElement('a'); idx.className = 'idx';
  idx.href = new URL('index.html', base).href; idx.textContent = '\u2302  P\u00E1gina Medicina';
  drawer.appendChild(idx);
  var tree = document.createElement('div'); tree.className = 'tree';
  DATA.forEach(function (uc) {
    var d1 = document.createElement('details');
    var s1 = document.createElement('summary'); s1.textContent = uc.u; d1.appendChild(s1);
    uc.ms.forEach(function (m) {
      var d2 = document.createElement('details');
      var s2 = document.createElement('summary'); s2.textContent = m.m; d2.appendChild(s2);
      m.fs.forEach(function (f) {
        var a = document.createElement('a');
        a.href = new URL(f.f, base).href; a.textContent = f.t; a.className = 'doc';
        if (a.href === here) { a.className = 'doc atual'; d1.open = true; d2.open = true; }
        d2.appendChild(a);
      });
      d1.appendChild(d2);
    });
    tree.appendChild(d1);
  });
  drawer.appendChild(tree);
  root.appendChild(tab); root.appendChild(backdrop); root.appendChild(drawer);
  function abre() { backdrop.classList.add('on'); drawer.classList.add('on'); }
  function fecha() { backdrop.classList.remove('on'); drawer.classList.remove('on'); }
  tab.addEventListener('click', abre);
  x.addEventListener('click', fecha);
  backdrop.addEventListener('click', fecha);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fecha(); });
  (document.body || document.documentElement).appendChild(host);
})();
