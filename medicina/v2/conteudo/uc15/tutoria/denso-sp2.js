/* Resumo DENSO da SP2 (Tutoria UC15) — versão comprimida do "sp2-resumo.pdf".
   Mesmo conteúdo, só enxugado. <mark class="apf"> = caiu na APF T11; <span class="pega"> = pegadinha;
   <span class="fix"> = erro do resumo da veterana. p = página no resumo normal. */
window.UC_DENSO_SP2 = {
  titulo: "SP2 · Eu falei que iria piorar, Dr.",
  apf: "APF T11 (13/05/2026): 3 objetivas + 1 discursiva. Cobrou faringite viral × FAE (FR e GNDA), sinusite + OMA no mesmo caso (IVAS predispõe; TC não confirma; amoxicilina não é 3 dias), criança com resfriado (só sintomáticos); discursiva = pneumonia grave em idoso: exames e regime/ATB.",
  secoes: [
    { id: "caso", t: "1 · O caso", p: 1, html: `
      <ul>
        <li>Jonathan, 68 a, ILPI. <b>1º dia</b>: odinofagia, rinorreia, obstrução, mialgia, faringe hiperemiada <b>sem exsudato</b> → IVAS viral → sintomáticos, sem ATB: <b>conduta certa</b>.</li>
        <li><b>4 dias depois</b>: febre 38,5, tosse amarelada, dor pleurítica D, FR 25, crepitantes + ↓MV + macicez no terço médio D; leucocitose com desvio; RX: consolidação lobar com <b>broncograma aéreo</b> e <b>borramento da silhueta cardíaca</b> → <b>PAC do lobo médio D</b>, provável pneumococo, superinfecção pós-viral.</li>
      </ul>` },
    { id: "ivas", t: "2 · IVAS", p: 2, html: `
      <ul>
        <li>Do <b>nariz até a laringe</b>: resfriado, faringoamigdalite, rinossinusite, OMA, laringite. <span class="pega">Traqueíte já é via aérea inferior</span>.</li>
        <li><mark class="apf">Adulto 2–5 episódios/ano; criança escolar 7–10.</mark> ~90% virais (rinovírus nº 1; corona, influenza, parainfluenza, adeno, VSR). Autolimitada 7–10 d; tosse pode durar 2–3 sem.</li>
        <li><b>ATB não previne</b> sinusite, otite nem pneumonia; só efeito adverso e resistência.</li>
        <li><mark class="apf">Criança de 4 a com coriza, febre baixa e tosse, bom estado → alta com sintomáticos</mark> (sem exames, sem ATB).</li>
      </ul>
      <table class="dt"><tr><th>Quadro</th><th>Pista</th><th>Conduta</th></tr>
        <tr><td>Resfriado</td><td>gradual, coriza, febre baixa</td><td>sintomáticos, soro nasal</td></tr>
        <tr><td>Gripe</td><td>súbita, febre alta, mialgia, prostração</td><td>oseltamivir 75 mg 12/12 h 5 d no grupo de risco (≥ 60 a, gestante, &lt; 5 a, crônicos)</td></tr>
        <tr><td>Rinite alérgica</td><td>espirros, prurido, sem febre</td><td>corticoide nasal, anti-H1</td></tr>
        <tr><td>Bronquite aguda</td><td>tosse até 3 sem, RX normal</td><td>sem ATB</td></tr>
        <tr><td>SRAG</td><td>dispneia ou SpO₂ &lt; 95%</td><td>internar, notificar, oseltamivir</td></tr></table>` },
    { id: "faringe", t: "3 · Faringoamigdalites", p: 3, html: `
      <ul>
        <li><mark class="apf">Maioria viral (adenovírus) e autolimitada (5–7 d): só suporte.</mark> Bacteriana = <b>S. pyogenes (EBHGA)</b>: 20–30% em 5–15 a; 5–15% no adulto.</li>
        <li><b>Estreptococos</b> (cocos G+ em cadeia, catalase −): <b>β (total)</b> — grupo A pyogenes (faringe, pele, FR, GNPE), grupo B agalactiae (neonato); <b>α (verde)</b> — <b>pneumococo</b> (PAC, OMA, sinusite; optoquina S) e viridans (cárie, endocardite); <b>γ</b> — enterococo.</li>
        <li>Pyogenes: <b>proteína M</b> (antifagocitose + mimetismo → FR), <b>estreptolisina O</b> (ASLO), <b>exotoxinas pirogênicas</b> → escarlatina e SST. <span class="fix">Veterana:</span> “endotoxinas” na escarlatina → são <b>exotoxinas</b>.</li>
        <li>Viral: coriza, tosse, rouquidão, conjuntivite, aftas. Bacteriana: súbita, febre &gt; 38,5, exsudato, <b>petéquias no palato</b>, íngua cervical anterior dolorosa, <b>sem tosse/coriza</b>. Não infecciosa: refluxo, alergia, cigarro, ar seco.</li>
        <li><b>Centor/McIsaac</b> (+1 febre, exsudato, íngua anterior, sem tosse; +1 se 3–14 a; −1 se ≥ 45): 0–1 nada · 2–3 teste rápido/cultura · ≥ 4 testar ou ATB empírico. <span class="fix">Veterana se contradiz</span> (“&gt;3 trata” e “&gt;4 não trata empírico”).</li>
        <li>Cultura de orofaringe = <b>padrão-ouro</b>; teste rápido + → trata; − na criança → cultura. ASLO não diagnostica faringite aguda.</li>
      </ul>
      <table class="dt"><tr><th>Tratamento FAE</th><th></th></tr>
        <tr><td>Penicilina G benzatina IM DU</td><td>600.000 UI &lt; 20 kg · 1.200.000 UI ≥ 20 kg</td></tr>
        <tr><td>Amoxicilina VO <b>10 dias</b></td><td>50 mg/kg/d (máx 1 g) · adulto 500 mg 8/8 h</td></tr>
        <tr><td>Alergia</td><td>não imediata: cefalexina 10 d · imediata: azitromicina 5 d / clinda</td></tr>
        <tr><td>Amox-clav</td><td><b>não</b> é 1ª escolha (EBHGA não faz β-lactamase)</td></tr></table>
      <ul>
        <li>ATB até <b>9 dias</b> previne <b>FR</b>; <b>não previne GNPE</b>.</li>
        <li><mark class="apf">FAE causa FR e GNDA</mark> — são <b>não supurativas</b>. <span class="pega">APF: “FAE não pode desencadear reações supurativas tardias como FR e GNDA” → falso.</span></li>
        <li>FR: 2–4 sem, 5–15 a, cardite mitral, poliartrite migratória, coreia, nódulos, eritema marginado (Jones: 2 maiores ou 1 + 2 menores + estreptococcia). GNPE: 1–3 sem, hematúria, edema, HAS, C3 ↓. Escarlatina: lixa, Pastia, Filatov, língua em framboesa.</li>
        <li>Supurativas: <b>abscesso periamigdaliano</b> (unilateral, trismo, voz de batata quente, úvula desviada p/ o lado oposto → <b>drenar</b> + amox-clav/clinda), retrofaríngeo (criança, rigidez cervical), parafaríngeo, Lemierre.</li>
        <li><b>Mononucleose</b> (EBV): adolescente, faringite exsudativa sem resposta a ATB, íngua posterior, esplenomegalia, &gt; 10% linfócitos atípicos; monoteste (pode ser − na 1ª semana — <span class="fix">veterana:</span> “pouco útil” está errado); amoxicilina → exantema.</li>
      </ul>` },
    { id: "sinus", t: "4 · Rinossinusite", p: 7, html: `
      <ul>
        <li>IVAS (80%) ou alergia → edema fecha o <b>óstio</b> → muco parado → bactéria. <b>Maxilar</b> é o mais acometido: óstio no alto. Só 0,5–2% das virais viram bacterianas.</li>
        <li>Agentes: <b>pneumococo, H. influenzae, Moraxella</b> (mesmo trio da OMA). Fúngica no imunossuprimido/DM descompensado.</li>
        <li>Duração: aguda &lt; 4 sem · subaguda 4–12 · crônica &gt; 12 · recorrente ≥ 4/ano. (EPOS: aguda &lt; 12 sem: viral / pós-viral / bacteriana.)</li>
        <li>Cor amarelo-esverdeada <b>não</b> prova bactéria. <b>Bacteriana</b>: &gt; 10 d sem melhora, ou febre ≥ 39 + pus 3–4 d, ou <b>dupla piora</b> após o 5º dia.</li>
        <li><mark class="apf">IVAS é um dos maiores fatores predisponentes de sinusite e OMA.</mark></li>
        <li>Diagnóstico <b>clínico</b>. <span class="pega">APF: “TC de seios para confirmar” → errado.</span> RX de seios não; TC só se complicação, falha, crônica ou cirurgia.</li>
        <li>Tratamento: soro nasal, <b>corticoide nasal</b>, analgésico, descongestionante ≤ 3–5 d. Bacteriana: <b>amoxicilina 500 mg 8/8 h 5–7 d (adulto)</b> / 10–14 d (criança); amox-clav se ATB recente, grave, idoso; alergia: cefuroxima / doxiciclina / levofloxacino. <span class="pega">APF: “amoxicilina por 3 dias” → errado.</span> Veterana: 10–14 d (diverge da IDSA no adulto).</li>
        <li>Complicações: <b>orbitárias</b> (Chandler: pré-septal → orbitária → subperiosteal → abscesso → seio cavernoso), intracranianas (meningite, abscessos, trombose), Pott. Alarme → TC com contraste + ATB EV.</li>
      </ul>` },
    { id: "oma", t: "5 · Otite média aguda", p: 9, html: `
      <ul>
        <li>Efusão purulenta sob pressão + início abrupto; pico 6–24 meses. Tuba da criança <b>curta, horizontal, flácida</b>; IVAS → tuba fecha → secreção acumula.</li>
        <li>FR: IVAS, creche, fumo passivo, chupeta, mamadeira deitado, sem aleitamento, idade, anomalia craniofacial.</li>
        <li>Agentes: <b>pneumococo, H. influenzae</b> (OMA + conjuntivite), <b>Moraxella</b>; VSR, influenza, adeno.</li>
        <li>Otoscopia: <b>membrana abaulada</b> (sinal mais específico), opaca, sem triângulo luminoso, pouco móvel; ou otorreia nova. <b>Hiperemia isolada não basta.</b> Grave = otalgia intensa/&gt; 48 h ou febre ≥ 39.</li>
      </ul>
      <table class="dt"><tr><th>Idade</th><th>Conduta (AAP)</th></tr>
        <tr><td>&lt; 6 meses</td><td>ATB sempre</td></tr>
        <tr><td>6–23 m</td><td>ATB se grave, otorreia ou bilateral; unilateral leve → ATB ou observar 48–72 h</td></tr>
        <tr><td>≥ 2 anos</td><td>ATB se grave/otorreia; senão, observar 48–72 h</td></tr></table>
      <ul>
        <li><b>Amoxicilina</b> 80–90 mg/kg/d ÷ 12/12 h (SBP: 50 nos simples) · adulto 500 mg 8/8 h. Amox-clav se amoxicilina &lt; 30 d ou conjuntivite. Falha → amox-clav → <b>ceftriaxona 50 mg/kg 1–3 d</b>. Duração &lt; 2 a 10 d; 2–5 a 7 d; ≥ 6 a/adulto 5–7 d. Sempre analgesia.</li>
        <li>Recorrente (≥ 3/6 m ou ≥ 4/12 m) → <b>tubo de ventilação</b>. Complicações: perfuração, efusão persistente, <b>mastoidite</b> (pavilhão deslocado), paralisia facial, labirintite; meningite, abscesso, trombose do seio sigmoide.</li>
      </ul>` },
    { id: "pnm", t: "6 · Pneumonia: classificação", p: 11, html: `
      <ul>
        <li><b>PAC</b>: fora do hospital ou &lt; 48 h da admissão. <b>Hospitalar</b>: ≥ 48 h internado. <b>PAV</b>: ≥ 48 h de IOT. <b>“Associada a cuidados de saúde”</b> (ILPI, diálise, ATB EV recente): <b>abandonada em 2019</b> → tratar como PAC; cobrir MRSA/Pseudomonas só se isolamento prévio ou internação com ATB EV nos 90 d.</li>
        <li>Lobar (pneumococo) · broncopneumonia (S. aureus, G−) · intersticial (vírus, atípicos).</li>
      </ul>
      <table class="dt"><tr><th>Típica</th><th>Atípica</th></tr>
        <tr><td><b>Pneumococo</b>, H. influenzae, Moraxella; súbita, febre alta, calafrio, escarro purulento/ferruginoso, dor pleurítica, consolidação lobar, leucocitose</td><td><b>Mycoplasma</b> (jovens, surtos), Chlamydophila, <b>Legionella</b> (água/ar-condicionado, diarreia, ↓Na); arrastada, tosse seca, infiltrado intersticial, Gram/cultura sem agente; <b>β-lactâmico não pega</b> → macrolídeo, doxi, quinolona</td></tr></table>` },
    { id: "agentes", t: "7 · Agentes por local", p: 12, html: `
      <table class="dt"><tr><th>Local</th><th>Agentes</th></tr>
        <tr><td>Ambulatório</td><td><b>pneumococo</b>, Mycoplasma, H. influenzae, Chlamydophila, vírus</td></tr>
        <tr><td>Enfermaria</td><td>os mesmos + <b>Legionella</b>, aspiração</td></tr>
        <tr><td>UTI</td><td>pneumococo, <b>S. aureus</b>, Legionella, <b>bacilos G−</b>, H. influenzae</td></tr>
        <tr><td>Hospitalar/PAV</td><td><b>Pseudomonas, MRSA</b>, Klebsiella/ESBL/KPC, Acinetobacter</td></tr></table>
      <p>Pneumococo = nº 1 em toda PAC. Etilista → Klebsiella/anaeróbios · DPOC → H. influenzae/Moraxella · pós-gripe → S. aureus · bronquiectasia → Pseudomonas · aspiração → anaeróbios · drogas EV → S. aureus.</p>` },
    { id: "fisio", t: "8 · Fisiopatologia", p: 13, html: `
      <div class="tl"><div><b>Chegada</b><span>microaspiração (+ comum), aerossol, sangue</span></div><div><b>Multiplicação</b><span>defesas vencidas (inóculo, virulência, imunidade)</span></div><div><b>Citocinas</b><span>IL-1/TNF → febre; IL-8 → neutrófilos</span></div><div><b>Exsudato</b><span>alvéolo cheio → shunt, hipoxemia, consolidação</span></div></div>
      <p>Lobar: congestão → hepatização vermelha → hepatização cinzenta → resolução. FR: idade, comorbidades, IVAS prévia, disfagia/rebaixamento, cigarro, álcool.</p>` },
    { id: "dx", t: "9 · Clínica e diagnóstico", p: 13, html: `
      <ul>
        <li>Tosse, dispneia, dor pleurítica, febre, calafrio; <b>idoso: confusão, queda, prostração</b>, às vezes sem febre (taquipneia = sinal mais sensível).</li>
        <li>Consolidação: macicez, crepitantes, sopro tubário, <b>frêmito AUMENTADO</b>. Derrame: <b>frêmito diminuído</b>, MV abolido. <span class="fix">Veterana:</span> “frêmito reduzido” na pneumonia → errado.</li>
        <li><b>Padrão-ouro: infiltrado novo na imagem</b> (RX PA + perfil). Broncograma aéreo = processo alveolar. <b>Sinal da silhueta</b>: borda cardíaca D apagada = lobo médio (Jonathan); E = língula; diafragma = lobo inferior. USG pulmonar = alternativa (ATS 2025). TC: RX normal com suspeita, derrame loculado, cavitação, imunossuprimido.</li>
        <li>Jovem ambulatorial: só RX + SpO₂. Internado: hemograma, ureia/creatinina, eletrólitos, PCR, gasometria se SpO₂ &lt; 92%, lactato se sepse. Grave: <b>2 hemoculturas + escarro ANTES do ATB</b>, antígenos urinários.</li>
        <li>DD: TEP, ICC, TB, neoplasia, DPOC/asma, atelectasia.</li>
      </ul>` },
    { id: "compl", t: "10 · Complicações (imagem)", p: 15, html: `
      <table class="dt"><tr><th>Complicação</th><th>Imagem</th><th>Conduta</th></tr>
        <tr><td><b>Derrame parapneumônico</b></td><td>seio costofrênico apagado, <b>curva de Damoiseau (menisco)</b>; Laurell: escorre</td><td>≥ 1 cm no decúbito → puncionar; simples = só ATB</td></tr>
        <tr><td><b>Complicado / empiema</b></td><td>loculado, lenticular, não escorre; TC: <b>pleura dividida</b>; USG: septos</td><td><b>pus, Gram/cultura +, pH &lt; 7,2, glicose &lt; 60, LDH &gt; 1000 → dreno</b>; fibrinolítico/VATS se septado</td></tr>
        <tr><td><b>Necrosante</b></td><td><b>várias cavidades pequenas</b> no consolidado</td><td>S. aureus pós-gripe, Klebsiella; ATB EV prolongado</td></tr>
        <tr><td><b>Abscesso</b></td><td>cavidade &gt; 2 cm, parede espessa, <b>nível hidroaéreo</b></td><td>aspiração → anaeróbios; segmentos posteriores, à D; escarro fétido; <b>clinda ou amox-clav 3–6 sem</b></td></tr></table>
      <p>Outras: insuficiência respiratória/SDRA, sepse/choque, bacteremia (meningite, endocardite), descompensação cardíaca.</p>` },
    { id: "escores", t: "11 · CURB-65 e PSI", p: 16, html: `
      <ul>
        <li><mark class="apf">CURB-65</mark>: <b>C</b>onfusão · <b>U</b>reia &gt; 50 · <b>R</b> FR ≥ 30 · <b>B</b> PAS &lt; 90 ou <b>PAD ≤ 60</b> · <b>65</b> anos. <span class="fix">Veterana:</span> “PAD &lt; 65” → errado.</li>
        <li><b>0–1 ambulatorial · 2 internar · 3–5 internar, 4–5 pensar em UTI.</b> CRB-65 na APS (sem ureia).</li>
        <li><b>PSI</b>: 20 variáveis; I–II casa, III observação, IV–V internar; melhor para achar baixo risco.</li>
        <li><b>UTI</b>: 1 maior (VM ou vasopressor) ou ≥ 3 menores (FR ≥ 30, P/F ≤ 250, multilobar, confusão, ureia alta, leuco &lt; 4.000, plaq &lt; 100.000, T &lt; 36, hipotensão com volume).</li>
        <li>Internar também: SpO₂ &lt; 92%, sem VO, derrame/complicação, comorbidade descompensada, social.</li>
        <li><b>Jonathan: CURB-65 = 1</b> (só idade) → ambulatorial possível, mas ILPI + prostrado + macicez → medir SpO₂ e investigar derrame antes.</li>
      </ul>` },
    { id: "rx", t: "12 · Prescrição", p: 17, html: `
      <table class="dt"><tr><th>Cenário</th><th>Esquema</th></tr>
        <tr><td>Ambulatorial sem comorbidade</td><td><b>amoxicilina 500 mg 8/8 h</b> ou <b>azitromicina 500 mg/dia</b> (3 d) ou doxiciclina</td></tr>
        <tr><td>Ambulatorial com comorbidade/ATB recente</td><td><b>amox-clav 875/125 12/12 h</b> (ou cefuroxima) <b>+ azitro</b> · ou <b>levofloxacino 750 mg/dia</b></td></tr>
        <tr><td>Enfermaria</td><td><b>ceftriaxona 1–2 g EV 1×/d + azitromicina 500 mg</b> · ou levofloxacino 750 mg EV</td></tr>
        <tr><td>UTI</td><td>β-lactâmico + macrolídeo (ou + quinolona); hidrocortisona na PAC grave</td></tr>
        <tr><td>Risco MRSA / Pseudomonas</td><td>+ vanco ou linezolida / pipe-tazo, cefepime ou meropenem</td></tr>
        <tr><td>Hospitalar/PAV</td><td>antipseudomonas sempre ± anti-MRSA</td></tr></table>
      <ul>
        <li><span class="fix">Veterana:</span> ertapenem na PAH → <b>não cobre Pseudomonas</b>; anaeróbio na aspiração só se abscesso/empiema.</li>
        <li>Duração ≥ 5 d (2019); ATS 2025: 3–5 d se não grave e estável; ≥ 5 d se grave. Reavaliar 48–72 h; EV → VO quando estável (T ≤ 37,8, FC ≤ 100, FR ≤ 24, PAS ≥ 90, SpO₂ ≥ 90%, mental normal, aceita VO).</li>
        <li>Prevenção: vacina influenza e pneumocócica (VPP23 no SUS p/ idoso institucionalizado).</li>
      </ul>
      <div class="rx"><b>USO ORAL</b> (idoso, CURB-65 1)<br>1. Amoxicilina + clavulanato 875/125 mg — 14 cp. 1 cp VO 12/12 h por 7 dias.<br>2. Azitromicina 500 mg — 3 cp. 1 cp VO 1×/dia por 3 dias.<br>3. Dipirona 500 mg — 1 cp VO 6/6 h se dor/febre.<br>Reavaliar em 48–72 h; voltar se falta de ar, confusão, febre persistente.</div>` },
    { id: "disc", t: "★ Discursiva da APF", p: 18, html: `
      <p>70 a, tosse produtiva há 6 d, febre, <b>desorientado</b>, FC 118, FR 25, <b>PA 80×50</b>, crepitações em base D.</p>
      <ul>
        <li><mark class="apf">CURB-65 ≥ 3</mark> (C + B + 65) + hipotensão = sepse → <mark class="apf">hospitalar, UTI</mark>.</li>
        <li>(a) <mark class="apf">RX de tórax</mark>, hemograma, ureia, creatinina, eletrólitos, gasometria, <b>lactato</b>, 2 hemoculturas + escarro antes do ATB, antígenos urinários.</li>
        <li>(b) <mark class="apf">ATB EV</mark>: <b>ceftriaxona 1–2 g EV 1×/d + azitromicina 500 mg EV 1×/d</b>; cristaloide 30 mL/kg, O₂, noradrenalina se PAM &lt; 65.</li>
      </ul>
      <p><span class="pega">Aluna da T11:</span> esqueceu o RX e prescreveu <b>amox-clav VO</b> → tutora: “+ RX de tórax” e “pensar em ATB EV”.</p>` }
  ]
};
