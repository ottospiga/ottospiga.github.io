/* Resumo DENSO da SP1 (Tutoria UC15) — versão comprimida do "Tutoria UC15 - SP1 Resumo.pdf".
   Mesmo conteúdo, só enxugado. <mark class="apf"> = caiu na APF T11; <span class="pega"> = pegadinha;
   <span class="fix"> = erro do resumo da veterana. p = página no resumo normal. */
window.UC_DENSO = {
  titulo: "SP1 · Todo cuidado é pouco!",
  apf: "APF T11: 5 objetivas + 1 discursiva. Cobrou agente da ITU comunitária, cistite na gestante, uso inadequado de ATB, terapia empírica e bactericida × bacteriostático; discursiva = receita de alta da gestante. Peso real nos objetivos 2, 3 e 5.",
  secoes: [
    { id: "micro", t: "1 · Microbiota", p: 1, html: `
      <ul>
        <li><b>Residente</b> = moradora fixa (pele, boca, cólon, vagina). <b>Transitória</b> = fica horas a semanas; é a que a lavagem das mãos remove e a que mais transmite IRAS.</li>
        <li>Vírus, protozoários e helmintos não contam como microbiota.</li>
        <li>3 papéis: <b>resistência à colonização</b> (ocupa adesão, compete, lactobacilo → ácido lático, pH 3,8–4,5) · <b>nutrição</b> (vit. K e B no cólon) · <b>causa doença</b> fora do lugar (E. coli → bexiga).</li>
        <li>Regra: umidade + nutriente = muita bactéria; ácido/fluxo = pouca. Estômago quase estéril; cólon 10¹¹–10¹²/g, anaeróbios ≫ aeróbios (~1000:1).</li>
        <li><b>Estéreis:</b> sangue, LCR, vias aéreas inferiores, órgãos sólidos, serosas, bexiga/rim (só a uretra distal tem flora).</li>
      </ul>
      <table class="dt"><tr><th>Sítio</th><th>Quem mora</th></tr>
        <tr><td>Pele</td><td>S. epidermidis (o + comum), C. acnes, Malassezia</td></tr>
        <tr><td>Narinas</td><td>S. aureus (≈30% portadores)</td></tr>
        <tr><td>Boca</td><td>Strep. viridans (S. mutans), anaeróbios, Neisseria</td></tr>
        <tr><td>Cólon</td><td>Bacteroides fragilis, Clostridium; facultativos: <b>E. coli</b>, Enterococcus, Klebsiella, Proteus</td></tr>
        <tr><td>Vagina</td><td>Lactobacilo (Döderlein); ↓ estrogênio → some → Gram-negativos; GBS na gestante</td></tr></table>
      <p>ATB destrói a protetora → candidíase, C. difficile. Menopausa → ↓ lactobacilo → ITU recorrente.</p>` },
    { id: "def", t: "2 · Definições", p: 2, html: `
      <div class="tl"><div><b>Profilática</b><span>sem infecção ainda: cirurgia, ITU recorrente, PEP, imunossuprimido</span></div><div><b>Empírica</b><span>suspeita clínica, cultura colhida</span></div><div><b>Dirigida</b><span>cultura + antibiograma (48–72 h) → descalona</span></div></div>
      <ul>
        <li><mark class="apf">Empírica = prescrita com base na suspeita clínica, antes da confirmação microbiológica.</mark> Colher cultura antes.</li>
        <li><span class="pega">Pegadinhas da APF:</span> "após o antibiograma" (= dirigida) · "profilático em assintomático" (= profilaxia) · "só imunossuprimido" / "evitar na gestação" (falsos).</li>
        <li><mark class="apf">Bactericida mata mesmo sem o sistema imune</mark>; bacteriostático inibe e depende da imunidade. Grave/imunidade ruim (endocardite, meningite, neutropenia) → bactericida. CBM ≤ ~4× CIM = bactericida.</li>
      </ul>
      <table class="dt"><tr><th>Bactericidas</th><th>Bacteriostáticos</th></tr>
        <tr><td>β-lactâmicos, vanco, aminoglicosídeos, quinolonas, metronidazol, nitrofurantoína, fosfomicina, SMX-TMP (associação)</td><td>macrolídeos, tetraciclinas, clindamicina, linezolida, cloranfenicol, sulfa ou TMP isolados</td></tr></table>
      <p><span class="pega">APF:</span> "bacteriostático causa lise irreversível" ✗ · "bactericida só impede replicação" ✗ · "irrelevante na cistite" ✗ · "bacteriostático sempre evitado na gestante" ✗. A classificação depende da bactéria e da dose.</p>
      <ul>
        <li><b>Oportunista:</b> agente de baixa virulência que aproveita a imunidade baixa (Pneumocystis, Candida invasiva, CMV no HIV).</li>
        <li><b>Nosocomial (IRAS):</b> após 48–72 h de internação ou ligada a procedimento; sítio cirúrgico até 30 d (90 d com implante).</li>
        <li><b>Portador:</b> abriga o germe sem doença e transmite (assintomático, incubação, convalescente, crônico). Colonização ≠ infecção → não tratar bacteriúria assintomática.</li>
      </ul>` },
    { id: "res", t: "3 · Resistência", p: 4, html: `
      <ul>
        <li><b>Intrínseca</b> (Gram− × vanco; Mycoplasma × β-lact.; Enterococcus × cefalosporina) × <b>adquirida</b>: mutação (vertical) ou genes (horizontal: plasmídeo, transposon) por <b>conjugação</b> (+ importante), transformação, transdução.</li>
        <li><mark class="apf">ATB não cria resistência, seleciona: uso incorreto seleciona cepas resistentes e dificulta futuras infecções.</mark></li>
        <li>4 mecanismos — <b>QUEBRA · MUDA · FECHA · EXPULSA</b>: enzima (β-lactamase, ESBL, KPC) · alvo alterado (PBP2a/MRSA, DNA-girase) · ↓ porina (Gram−) · efluxo. + biofilme em sonda.</li>
        <li>Reduzir: prescrição racional (dose, intervalo, menor tempo eficaz), cultura e descalonamento, stewardship/CCIH, higiene das mãos, vacinação, educar o paciente, One Health.</li>
      </ul>
      <p><span class="pega">APF:</span> "abandono precoce não afeta se melhorou" ✗ · "tempo prolongado reduz resistência" ✗ · "só em imunossuprimido" ✗ · "ITU não complicada nunca agrava" ✗ (vira pielo).</p>` },
    { id: "fases", t: "4 · Fases da infecção", p: 5, html: `
      <div class="tl"><div><b>Entrada / incubação</b><span>adere e multiplica; sem sintoma, já transmite</span></div><div><b>Prodrômico</b><span>inespecífico (citocinas)</span></div><div><b>Doença</b><span>quadro típico; maior carga</span></div><div><b>Desfecho</b><span>cura, portador, complicação, óbito; convalescença</span></div></div>
      <p><span class="fix">Veterana errou:</span> o pico de carga e lesão é na fase de doença, não no prodrômico ("virulência" é do agente).</p>` },
    { id: "itu", t: "5 · ITU", p: 7, html: `
      <ul>
        <li><b>Baixa</b> (cistite, uretrite) × <b>alta</b> (pielonefrite). <b>Não complicada</b> = mulher jovem, não gestante, sem alteração/comorbidade; resto é complicada (homem, <b>gestante</b>, DM, sonda, cálculo…).</li>
        <li>Recorrente: ≥ 2 em 6 meses ou ≥ 3 em 1 ano. <b>Bacteriúria assintomática:</b> tratar só na gestante e antes de procedimento urológico.</li>
        <li><mark class="apf">Agente da ITU comunitária: E. coli</mark> (75–90%); 2º na mulher jovem: S. saprophyticus. Hospitalar: ESBL, Pseudomonas, Enterococcus, Candida.</li>
        <li>Via ascendente (~95%): fímbria tipo 1/FimH → bexiga; fímbria P → rim. Hematogênica rara (S. aureus, Candida). Proteus: urease → estruvita.</li>
        <li>Cistite: disúria, polaciúria, suprapúbica, sem febre. <b>Pielo: febre + dor lombar + Giordano</b>, pode ir a sepse. Idoso: confusão, queda.</li>
      </ul>
      <table class="dt"><tr><th>Exame</th><th>O que importa</th></tr>
        <tr><td>EAS</td><td>leucocitúria > 10/campo ou > 10.000/mL; nitrito + (enterobactérias; Enterococcus/saprophyticus não); cilindro leucocitário = rim</td></tr>
        <tr><td>Urocultura + TSA</td><td>padrão-ouro; ≥ 10⁵ UFC/mL (sintomática ≥ 10²–10³); jato médio, sondagem não obrigatória</td></tr>
        <tr><td>Imagem</td><td>não é rotina; obstrução, abscesso, sepse ou sem melhora em 48–72 h (gestante: USG)</td></tr></table>
      <p><mark class="apf">Gestante: leucocitúria + bacteriúria no EAS já bastam para iniciar empírico</mark> (colher cultura antes). <span class="pega">✗</span> "obrigatório > 100.000" · "aguardar cultura" · "cintilografia" · "sondagem obrigatória".</p>
      <table class="dt"><tr><th>Situação</th><th>Esquema adulto</th></tr>
        <tr><td>Cistite não complicada</td><td>Nitrofurantoína 100 mg 6/6 h 5 d · fosfomicina 3 g dose única · SMX-TMP 800/160 12/12 h 3 d (resistência &lt; 20%)</td></tr>
        <tr><td>Complicada / homem</td><td>cultura antes; 7 d (homem 7–14); tratar a causa</td></tr>
        <tr><td>Pielo ambulatorial</td><td>cipro 500 12/12 h 7 d ou levo 750 1×/d 5 d (± 1ª dose ceftriaxona)</td></tr>
        <tr><td>Pielo internada</td><td>ceftriaxona 1–2 g IV 1×/d → VO após 48 h afebril; total 10–14 d</td></tr>
        <tr><td><b>Gestante cistite/BA</b></td><td><b>cefalexina 500 mg 6/6 h 7 d</b> (ou amoxi-clav, fosfomicina, nitro fora do termo); urocultura de controle 1–2 sem</td></tr>
        <tr><td>Gestante pielo</td><td>sempre internar, ceftriaxona IV</td></tr></table>
      <p><b>Gestante não usa:</b> quinolona, tetraciclina; SMX-TMP no 1º tri e termo; nitrofurantoína no termo. <span class="fix">Veterana errou:</span> norfloxacino não serve para pielo.</p>
      <p><b>Prevenção:</b> água, não segurar urina, urinar após relação, <b>higiene de frente para trás</b>, evitar espermicida/ducha, estrogênio vaginal na pós-menopausa.</p>` },
    { id: "receita", t: "★ Discursiva: receita de alta", p: 11, html: `
      <div class="rx"><b>USO ORAL</b><br>1. Cefalexina 500 mg — 28 cápsulas. Tomar 1 cápsula VO de 6/6 h por 7 dias.<br>2. Paracetamol 500 mg — 1 caixa. 1 comprimido VO de 6/6 h se dor ou febre.</div>
      <ul><li>Tomar até o fim, não guardar sobras · água, não segurar urina, urinar após relação · <b>higiene de frente para trás</b> · evitar duchas · urocultura de controle 1–2 sem · voltar se febre, dor lombar, vômitos, contrações, sangramento ou perda de líquido.</li></ul>
      <p>A tutora corrigiu acrescentando "1 cp": ela quer receita formal (nome, concentração, via, quantidade, intervalo, duração).</p>` }
  ]
};
