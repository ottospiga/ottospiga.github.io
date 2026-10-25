/* =====================================================================
   VISTAS NATIVAS (formato novo) — renderizam abas a partir do data.js
   que as páginas "Central" já publicam (window.UC). Nenhum conteúdo novo:
   só uma forma nova de mostrar os mesmos dados.
   Vistas: raiox · resumo · tabela · provas · abcd · pegadinhas · esquemas · aulas
   ===================================================================== */
(function () {
  const esc = t => String(t ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const strip = h => String(h ?? "").replace(/<[^>]+>/g, "");
  const norm = s => strip(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const spNum = s => String(s).replace(/\D/g, "") || String(s);
  const LET = "ABCDEFGH";

  /* ---------- carregar data.js uma vez por arquivo ---------- */
  const cache = {}, loading = {};
  function loadScript(src) {
    return new Promise((ok, bad) => { const s = document.createElement("script"); s.src = src; s.onload = ok; s.onerror = () => bad(new Error("não carregou " + src)); document.head.appendChild(s); });
  }
  function loadData(src) {
    if (cache[src]) return Promise.resolve(cache[src]);
    if (loading[src]) return loading[src];
    const prev = window.UC;
    loading[src] = loadScript(src).then(() => { cache[src] = window.UC; window.UC = prev; return cache[src]; });
    return loading[src];
  }

  /* ---------- progresso (vem do shell) ---------- */
  let ST = null, SAVE = () => {};
  function prog(ns) { ST.nat = ST.nat || {}; return (ST.nat[ns] = ST.nat[ns] || { r: {}, mark: {}, f: {} }); }

  /* ---------- componentes ---------- */
  const chipRow = (label, opts, sel, key, multi) => `
    <div class="nv-frow"><span class="nv-flabel">${esc(label)}</span>
      ${opts.map(o => `<button class="chip sm" data-f="${key}" data-v="${esc(o.v)}" aria-pressed="${multi ? sel.includes(String(o.v)) : String(sel) === String(o.v)}">${esc(o.l)}${o.n != null ? `<span class="kind">${o.n}</span>` : ""}</button>`).join("")}
    </div>`;
  const spOpts = (arr, get) => [...new Set(arr.map(get))].filter(v => v !== "" && v != null).sort((a, b) => (+spNum(a) || 99) - (+spNum(b) || 99)).map(v => ({ v: String(v), l: /^\d+$/.test(String(v)) ? "SP" + v : String(v), n: arr.filter(x => String(get(x)) === String(v)).length }));

  /* =====================================================================
     QUIZ (provas antigas e ABCD) — uma por vez, estudo/prova, rodadas
     ===================================================================== */
  function quiz(el, ctx, cfg) {
    const P = prog(cfg.ns);
    const F = P.f = Object.assign({ sp: [], tu: [], tema: "", tipo: "", sit: "todas", rep: false, mode: "estudo", n: 10 }, P.f);
    let round = null; // {list, i, ans:{id:{pick, ok}}, revealed}

    function pool() {
      return cfg.items.filter(q =>
        (!F.sp.length || F.sp.includes(String(q.sp))) &&
        (!F.tu.length || (q.tus || []).some(t => F.tu.includes(t))) &&
        (!F.tema || q.tema === F.tema) &&
        (!F.tipo || q.grupo === F.tipo) &&
        (!F.rep || (q.tus || []).length > 1) &&
        (F.sit === "todas" || (F.sit === "nao" && !P.r[q.id]) || (F.sit === "errei" && P.r[q.id] === "err") || (F.sit === "marcadas" && P.mark[q.id])));
    }

    function drawSetup() {
      const pl = pool();
      const done = cfg.items.filter(q => P.r[q.id]).length, ok = cfg.items.filter(q => P.r[q.id] === "ok").length;
      el.innerHTML = `<div class="nv-wrap">
        <div class="nv-stats">
          <div><b>${cfg.items.length}</b><span>questões</span></div>
          <div><b>${done}</b><span>feitas</span></div>
          <div><b>${done ? Math.round(ok / done * 100) + "%" : "–"}</b><span>acertos</span></div>
          <div><b>${Object.keys(P.mark).length}</b><span>marcadas</span></div>
        </div>
        <section class="nv-card nv-filters">
          ${chipRow(cfg.spLabel || "SP", spOpts(cfg.items, q => q.sp), F.sp, "sp", true)}
          ${cfg.turmas ? chipRow(cfg.tuLabel || "Turma", cfg.turmas.map(t => ({ v: t, l: t, n: cfg.items.filter(q => (q.tus || []).includes(t)).length })), F.tu, "tu", true) : ""}
          ${cfg.temas ? `<div class="nv-frow"><span class="nv-flabel">Tema</span><select id="nvTema"><option value="">Todos os temas</option>${cfg.temas.map(t => `<option ${F.tema === t ? "selected" : ""}>${esc(t)}</option>`).join("")}</select>
            ${cfg.grupos ? `<select id="nvTipo"><option value="">Objetivas e discursivas</option>${cfg.grupos.map(t => `<option ${F.tipo === t ? "selected" : ""}>${esc(t)}</option>`).join("")}</select>` : ""}</div>` : ""}
          ${chipRow("Situação", [{ v: "todas", l: "Todas" }, { v: "nao", l: "Não feitas" }, { v: "errei", l: "Errei" }, { v: "marcadas", l: "Marcadas" }], F.sit, "sit", false)}
          ${cfg.turmas && !cfg.noRep ? `<label class="nv-toggle"><input type="checkbox" id="nvRep" ${F.rep ? "checked" : ""}> Só as que caíram em mais de uma turma</label>` : ""}
        </section>
        <section class="nv-card nv-start">
          <div class="nv-frow">
            <span class="nv-flabel">Modo</span>
            <button class="chip sm" data-m="estudo" aria-pressed="${F.mode === "estudo"}">Estudo · vê a resposta na hora</button>
            <button class="chip sm" data-m="prova" aria-pressed="${F.mode === "prova"}">Prova · correção no fim</button>
          </div>
          <div class="nv-frow"><span class="nv-flabel">Rodada</span>
            ${[5, 10, 15, 0].map(n => `<button class="chip sm" data-n="${n}" aria-pressed="${F.n === n}">${n || "Todas"}</button>`).join("")}
          </div>
          <div class="nv-frow" style="justify-content:space-between">
            <span><b>${pl.length}</b> questões com esses filtros</span>
            <button class="btn-pri" id="nvGo" ${pl.length ? "" : "disabled"}>Começar ${Math.min(pl.length, F.n || pl.length)} questões</button>
          </div>
        </section>
      </div>`;
      el.querySelectorAll("[data-f]").forEach(b => b.onclick = () => {
        const k = b.dataset.f, v = b.dataset.v;
        if (Array.isArray(F[k])) F[k] = F[k].includes(v) ? F[k].filter(x => x !== v) : F[k].concat(v); else F[k] = v;
        SAVE(); drawSetup();
      });
      el.querySelectorAll("[data-m]").forEach(b => b.onclick = () => { F.mode = b.dataset.m; SAVE(); drawSetup(); });
      el.querySelectorAll("[data-n]").forEach(b => b.onclick = () => { F.n = +b.dataset.n; SAVE(); drawSetup(); });
      const t = el.querySelector("#nvTema"); if (t) t.onchange = () => { F.tema = t.value; SAVE(); drawSetup(); };
      const g = el.querySelector("#nvTipo"); if (g) g.onchange = () => { F.tipo = g.value; SAVE(); drawSetup(); };
      const r = el.querySelector("#nvRep"); if (r) r.onchange = () => { F.rep = r.checked; SAVE(); drawSetup(); };
      el.querySelector("#nvGo").onclick = () => {
        const list = shuffle(pl).slice(0, F.n || pl.length).map(q => cfg.prep ? cfg.prep(q) : q);
        round = { list, i: 0, ans: {}, mode: F.mode };
        drawQ();
      };
    }

    function record(q, ok) {
      P.r[q.id] = ok ? "ok" : "err"; SAVE();
    }

    function drawQ() {
      const q = round.list[round.i], a = round.ans[q.id], study = round.mode === "estudo";
      const show = a && study;
      const bar = round.list.map((x, i) => { const r = round.ans[x.id]; return `<i class="${i === round.i ? "cur" : r ? (study ? (r.ok ? "ok" : "err") : "done") : ""}"></i>`; }).join("");
      const opts = q.opts.length ? q.opts.map((o, i) => {
        let cls = "";
        if (show) { if (o.ok) cls = "ok"; else if (a.pick === i) cls = "err"; }
        else if (a && !study && a.pick === i) cls = "picked";
        return `<button class="nv-opt ${cls}" data-o="${i}" ${a && study ? "disabled" : ""}><b>${LET[i]}</b><span>${o.html}${show && o.why ? `<small class="why">${o.why}</small>` : ""}</span></button>`;
      }).join("") : "";
      el.innerHTML = `<div class="nv-wrap">
        <div class="nv-qtop"><button class="link" id="nvBack">← Filtros</button><span>${round.i + 1} de ${round.list.length} · modo ${round.mode}</span></div>
        <div class="nv-bar">${bar}</div>
        <article class="nv-card nv-q">
          <div class="nv-tags">${q.tags.map(t => `<span class="tag ${t.c || ""}">${esc(t.l)}</span>`).join("")}</div>
          <div class="nv-enun">${q.enun}</div>
          ${q.itens && q.itens.length ? `<ol class="nv-itens">${q.itens.map(x => `<li>${x}</li>`).join("")}</ol>` : ""}
          ${q.opts.length ? `<div class="nv-opts">${opts}</div>` : `
            <textarea class="nv-disc" id="nvDisc" placeholder="Escreva sua resposta (opcional) e depois veja o gabarito" ${a ? "disabled" : ""}>${esc(a?.txt || "")}</textarea>
            ${!a ? `<button class="btn" id="nvGab">Ver gabarito</button>` : ""}
            ${round.reveal === q.id && !a ? `<div class="nv-expl"><b>Gabarito:</b> ${q.gab}${q.com ? `<p>${q.com}</p>` : ""}</div>
              <div class="nv-frow"><span>Como foi?</span><button class="btn ok" data-self="1">Acertei</button><button class="btn err" data-self="0">Errei</button></div>` : ""}`}
          ${show ? `<div class="nv-expl ${a.ok ? "ok" : "err"}"><b>${a.ok ? "Certo." : "Errado."}</b> ${q.opts.length ? "Gabarito: " + q.gabLabel + "." : ""} ${q.opts.length && q.com ? `<p>${q.com}</p>` : !q.opts.length ? `<p>Gabarito: ${q.gab}</p>${q.com ? `<p>${q.com}</p>` : ""}` : ""}
            ${q.pg && q.pg.length && cfg.resumoTab ? `<div class="nv-links">${q.pg.map(p => `<button class="link" data-pg="${p}">Resumo p.${p} →</button>`).join("")}</div>` : ""}</div>` : ""}
          <div class="nv-frow nv-actions">
            <button class="btn" id="nvMark" aria-pressed="${!!P.mark[q.id]}">${P.mark[q.id] ? "Marcada para revisar" : "Marcar para revisar"}</button>
            ${a || (!q.opts.length && round.reveal === q.id && a) ? "" : ""}
            ${a ? `<button class="btn-pri" id="nvNext">${round.i + 1 < round.list.length ? "Próxima →" : "Ver resultado"}</button>` : ""}
          </div>
        </article>
      </div>`;
      el.querySelector("#nvBack").onclick = () => { round = null; drawSetup(); };
      el.querySelector("#nvMark").onclick = () => { if (P.mark[q.id]) delete P.mark[q.id]; else P.mark[q.id] = 1; SAVE(); drawQ(); };
      el.querySelectorAll("[data-o]").forEach(b => b.onclick = () => {
        if (a && study) return;
        const i = +b.dataset.o, ok = !!q.opts[i].ok;
        round.ans[q.id] = { pick: i, ok }; record(q, ok);
        if (!study) { next(); return; }
        drawQ();
      });
      const g = el.querySelector("#nvGab"); if (g) g.onclick = () => { round.reveal = q.id; round.txt = el.querySelector("#nvDisc").value; drawQ(); };
      el.querySelectorAll("[data-self]").forEach(b => b.onclick = () => {
        const ok = b.dataset.self === "1"; round.ans[q.id] = { ok, txt: round.txt }; record(q, ok); drawQ();
      });
      el.querySelectorAll("[data-pg]").forEach(b => b.onclick = () => ctx.openResumo(+b.dataset.pg));
      const n = el.querySelector("#nvNext"); if (n) n.onclick = next;
      el.scrollTop = 0; el.closest(".viewer")?.scrollTo?.(0, 0);
    }
    function next() { if (round.i + 1 < round.list.length) { round.i++; drawQ(); } else drawEnd(); }

    function drawEnd() {
      const tot = round.list.length, ok = round.list.filter(q => round.ans[q.id]?.ok).length;
      el.innerHTML = `<div class="nv-wrap">
        <section class="nv-card nv-end"><div class="nv-big">${ok}<small>/${tot}</small></div><p>${Math.round(ok / tot * 100)}% de acertos nesta rodada.</p>
          <div class="nv-frow"><button class="btn-pri" id="nvAgain">Nova rodada</button><button class="btn" id="nvBack">Voltar aos filtros</button></div></section>
        <section class="nv-card"><h3>Revisar a rodada</h3>
          ${round.list.map((q, i) => { const r = round.ans[q.id]; return `<button class="nv-revrow" data-i="${i}"><span class="dot ${r?.ok ? "ok" : "err"}"></span><span>${esc(q.tags[0]?.l || "")}</span><span class="txt">${esc(strip(q.enun).slice(0, 110))}</span></button>`; }).join("")}
        </section></div>`;
      el.querySelector("#nvAgain").onclick = () => { round = null; drawSetup(); el.querySelector("#nvGo")?.click(); };
      el.querySelector("#nvBack").onclick = () => { round = null; drawSetup(); };
      el.querySelectorAll("[data-i]").forEach(b => b.onclick = () => { round.mode = "estudo"; round.i = +b.dataset.i; drawQ(); });
    }
    drawSetup();
  }

  /* ---------- montar questões no formato do quiz ---------- */
  function prepBanco(q) {
    const set = String(q.gab || "").replace(/[^A-H]/g, "").split("");
    const objective = q.alts && q.alts.length;
    return {
      id: q.id, sp: q.sp, tus: q.tus, tema: q.tema,
      tags: [{ l: q.prova }, { l: q.tema }, { l: q.tipo }].concat(q.selo === "OF" ? [{ l: "gabarito oficial", c: "ok" }] : q.selo === "IN" ? [{ l: "gabarito inferido", c: "warn" }] : q.selo === "AB" ? [{ l: "anulada/aberta", c: "warn" }] : []).concat((q.tus || []).length > 1 ? [{ l: "caiu " + q.tus.length + "×", c: "hot" }] : []),
      enun: q.enun, itens: q.itens,
      opts: objective ? q.alts.map((h, i) => ({ html: h, ok: set.includes(LET[i]), why: (q.tr || {})[LET[i]] || "" })) : [],
      gab: q.gab, gabLabel: set.join(" ou "), com: q.com, pg: q.pg
    };
  }
  function prepAbcd(q) {
    const o = shuffle(q.o);
    const ci = o.findIndex(x => x[1]);
    return {
      id: q.id, sp: q.sp,
      tags: [{ l: "SP" + q.sp }, q.tag === "caiu" ? { l: "já caiu", c: "hot" } : { l: "da aula" }].concat(q.ref ? [{ l: q.ref }] : []),
      enun: q.q, itens: [],
      opts: o.map(x => ({ html: x[0], ok: !!x[1], why: x[2] })),
      gabLabel: LET[ci], com: "", pg: q.pg
    };
  }

  /* =====================================================================
     VISTAS
     ===================================================================== */
  const V = {};

  V.provas = (el, U, ctx) => {
    const order = t => t === "PM" ? 99 : +t.replace(/\D/g, "");
    const turmas = [...new Set(U.banco.flatMap(q => q.tus || []))].sort((a, b) => order(a) - order(b));
    const items = U.banco.map(q => Object.assign({}, q, { grupo: q.alts && q.alts.length ? "Só objetivas" : "Só discursivas" }));
    quiz(el, ctx, { ns: ctx.ns + ":provas", items, turmas, temas: [...new Set(U.banco.map(q => q.tema))], grupos: ["Só objetivas", "Só discursivas"], prep: prepBanco, resumoTab: true });
  };

  V.abcd = (el, U, ctx) => {
    const items = U.abcd.map(q => Object.assign({}, q));
    quiz(el, ctx, { ns: ctx.ns + ":abcd", items, prep: prepAbcd, resumoTab: true });
  };

  V.tabela = (el, U, ctx) => {
    const P = prog(ctx.ns + ":tabela");
    const F = P.f = Object.assign({ sp: "", g: "", q: "", hot: false, compact: false }, P.f);
    const grupos = [...new Set(U.drugs.map(d => d.g))];
    function draw() {
      const list = U.drugs.filter(d => (!F.sp || d.sp === F.sp) && (!F.g || d.g === F.g) && (!F.hot || d.nb > 0) && (!F.q || norm(d.n + " " + d.g + " " + d.mec + " " + d.ind).includes(norm(F.q))));
      el.innerHTML = `<div class="nv-wrap wide">
        <section class="nv-card nv-filters">
          <div class="nv-frow">
            <input type="search" id="tq" placeholder="Buscar fármaco, classe, indicação…" value="${esc(F.q)}" aria-label="Buscar">
            <select id="tg"><option value="">Todas as classes</option>${grupos.map(g => `<option ${F.g === g ? "selected" : ""}>${esc(g)}</option>`).join("")}</select>
            <button class="chip sm" id="th" aria-pressed="${F.hot}">Só os que caíram</button>
            <span class="nv-seg"><button class="chip sm" data-c="0" aria-pressed="${!F.compact}">Completa</button><button class="chip sm" data-c="1" aria-pressed="${F.compact}">Compacta</button></span>
          </div>
          ${chipRow("SP", [{ v: "", l: "Todas" }].concat(spOpts(U.drugs, d => d.sp)), F.sp, "sp", false)}
        </section>
        <div class="nv-count">${list.length} fármacos</div>
        ${F.compact ? `<div class="nv-compact">${list.map(d => `<div class="nv-cd"><b>${esc(d.n)}</b><span class="g">${esc(d.g)} · ${esc(d.sp)}</span><span>${d.ds}</span>${d.nb ? `<span class="tag hot">caiu ${d.nb}×</span>` : ""}</div>`).join("")}</div>` : `
        <div class="nv-tablebox"><table class="nv-table">
          <thead><tr><th>Fármaco</th><th>Mecanismo</th><th>Dose</th><th>Indicação</th><th>Atenção</th><th>SUS</th></tr></thead>
          <tbody>${list.map(d => `<tr><td><b>${esc(d.n)}</b><div class="g">${esc(d.g)} · ${esc(d.sp)}</div>${d.nb ? `<span class="tag hot">caiu ${d.nb}×</span>` : ""}</td><td>${d.mec}</td><td>${d.ds}</td><td>${d.ind}</td><td>${d.ea}</td><td>${esc(d.sus || "")}</td></tr>`).join("")}</tbody>
        </table></div>`}
      </div>`;
      const tq = el.querySelector("#tq"); tq.oninput = () => { F.q = tq.value; SAVE(); const pos = tq.selectionStart; draw(); const n = el.querySelector("#tq"); n.focus(); n.setSelectionRange(pos, pos); };
      el.querySelector("#tg").onchange = e => { F.g = e.target.value; SAVE(); draw(); };
      el.querySelector("#th").onclick = () => { F.hot = !F.hot; SAVE(); draw(); };
      el.querySelectorAll("[data-c]").forEach(b => b.onclick = () => { F.compact = b.dataset.c === "1"; SAVE(); draw(); });
      el.querySelectorAll("[data-f=sp]").forEach(b => b.onclick = () => { F.sp = b.dataset.v; SAVE(); draw(); });
    }
    draw();
  };

  V.pegadinhas = (el, U, ctx) => {
    const P = prog(ctx.ns + ":peg");
    const F = P.f = Object.assign({ sp: "", all: false }, P.f);
    let open = {};
    function draw() {
      const list = U.peg.filter(p => !F.sp || p.sp === F.sp);
      el.innerHTML = `<div class="nv-wrap">
        <section class="nv-card nv-filters">
          ${chipRow("SP", [{ v: "", l: "Todas" }].concat(spOpts(U.peg, p => p.sp)), F.sp, "sp", false)}
          <label class="nv-toggle"><input type="checkbox" id="pa" ${F.all ? "checked" : ""}> Mostrar todas as correções</label>
        </section>
        <p class="nv-hint">Cada cartão traz uma frase <b>falsa</b> que já apareceu em prova. Pense no erro antes de abrir.</p>
        <div class="nv-pegs">${list.map((p, i) => `<article class="nv-peg">
          <div class="f"><span class="tag err">frase falsa</span> ${p.p}</div>
          ${F.all || open[i] ? `<div class="v"><span class="tag ok">o certo</span> ${p.v}</div><div class="e">${esc(p.e)} · ${esc(p.sp)}</div>` : `<button class="btn" data-i="${i}">Ver correção</button>`}
        </article>`).join("")}</div></div>`;
      el.querySelectorAll("[data-f=sp]").forEach(b => b.onclick = () => { F.sp = b.dataset.v; open = {}; SAVE(); draw(); });
      el.querySelector("#pa").onchange = e => { F.all = e.target.checked; SAVE(); draw(); };
      el.querySelectorAll("[data-i]").forEach(b => b.onclick = () => { open[b.dataset.i] = 1; draw(); });
    }
    draw();
  };

  V.pdf = (el, U, ctx, item) => V.resumo(el, null, ctx, item);

  V.esquemas = (el, U) => {
    el.innerHTML = `<div class="nv-wrap wide"><div class="nv-figs">${U.expl.map(f => `<figure class="fig"><div class="pl">${f.svg}</div><figcaption><span class="tag">${/^\d+$/.test(String(f.sp)) ? "SP" + f.sp : esc(f.sp)}</span> ${esc(f.cap || "")}</figcaption></figure>`).join("")}</div></div>`;
  };

  V.aulas = (el, U, ctx) => {
    let q = "";
    function draw() {
      const list = U.aulas.filter(a => !q || norm(a.x + " " + a.g).includes(norm(q)));
      const groups = [...new Set(list.map(a => a.g))];
      el.innerHTML = `<div class="nv-wrap">
        <section class="nv-card nv-filters"><div class="nv-frow"><input type="search" id="aq" placeholder="Buscar nas frases das aulas" value="${esc(q)}" aria-label="Buscar"><span class="nv-count" style="margin:0">${list.length} frases</span></div></section>
        ${groups.map(g => `<section class="nv-card"><h3>${esc(g)}</h3><ul class="nv-aulas">${list.filter(a => a.g === g).map(a => `<li>${a.x}</li>`).join("")}</ul></section>`).join("")}
      </div>`;
      const i = el.querySelector("#aq"); i.oninput = () => { q = i.value; const p = i.selectionStart; draw(); const n = el.querySelector("#aq"); n.focus(); n.setSelectionRange(p, p); };
    }
    draw();
  };

  V.raiox = (el, U, ctx) => {
    const R = U.rx || {}, top = (U.res && U.res.top) || [];
    const maxP = Math.max(1, ...(R.pesos || []).map(p => p.all));
    el.innerHTML = `<div class="nv-wrap">
      ${R.veredito ? `<section class="nv-card nv-lead"><h3>Como ela cobra</h3>${R.veredito.map(p => `<p>${p}</p>`).join("")}</section>` : ""}
      ${top.length ? `<section class="nv-card"><h3>O que mais cai</h3><div class="nv-top">${top.map(t => `<button class="nv-toprow" data-pg="${t.p}"><span class="n">${t.n}×</span><span class="t">${esc(t.t)}${t.star ? " ★" : ""}<small>${esc(t.pv)}</small></span><span class="p">p.${t.p} →</span></button>`).join("")}</div></section>` : ""}
      ${R.pesos ? `<section class="nv-card"><h3>Peso de cada SP nas provas</h3><div class="nv-pesos">${R.pesos.map(p => `<div class="row"><span>SP${p.sp}</span><i><b style="width:${p.all / maxP * 100}%"></b><em style="width:${p.novo / maxP * 100}%"></em></i><span class="mono">${p.all} · ${p.novo} recentes</span></div>`).join("")}</div><p class="nv-hint">Barra clara: total de questões já cobradas. Barra escura: das provas mais recentes.</p></section>` : ""}
      ${R.algoritmo ? `<section class="nv-card"><h3>Raciocínio para escolher o antibiótico</h3><ol class="nv-steps">${R.algoritmo.map(a => `<li><b>${esc(a.t.replace(/^\d+\.\s*/, ""))}</b><p>${a.x}</p></li>`).join("")}</ol></section>` : ""}
      ${R.pares ? `<section class="nv-card"><h3>Mesma frase, uma palavra trocada</h3><div class="nv-tablebox"><table class="nv-table"><thead><tr><th>Tema</th><th>Verdadeira</th><th>Falsa</th></tr></thead><tbody>${R.pares.map(p => `<tr><td>${p.base}</td><td class="okc">${p.v}</td><td class="errc">${p.f}</td></tr>`).join("")}</tbody></table></div></section>` : ""}
      ${R.diverg ? `<section class="nv-card"><h3>Onde as provas se contradizem</h3>${R.diverg.map(d => `<div class="nv-div"><b>${d.onde}</b><p>${d.prob}</p><p class="como">${d.como}</p></div>`).join("")}</section>` : ""}
      ${R.confirmar ? `<section class="nv-card"><h3>Gabaritos a confirmar</h3><ul class="nv-aulas">${R.confirmar.map(c => `<li><b>${esc(c.q)}</b> · ${c.x}</li>`).join("")}</ul></section>` : ""}
      ${R.doses ? `<section class="nv-card"><h3>Doses que ela cobra</h3><div class="nv-tablebox"><table class="nv-table"><thead><tr><th>Fármaco</th><th>Dose</th><th>Fonte</th></tr></thead><tbody>${R.doses.map(d => `<tr><td><b>${d[0]}</b></td><td>${d[1]}</td><td class="g">${d[2]}</td></tr>`).join("")}</tbody></table></div></section>` : ""}
    </div>`;
    el.querySelectorAll("[data-pg]").forEach(b => b.onclick = () => ctx.openResumo(+b.dataset.pg));
  };

  /* ---------- resumo: leitor pdf.js + índice dos grifos ---------- */
  V.resumo = async (el, U, ctx, item) => {
    const base = item.dir || "", pdf = item.pdf || base + "resumo.pdf", lib = item.lib || base;
    const res = (U && U.res) || { idx: [] };
    let spF = "";
    const hasIdx = res.idx && res.idx.length;
    el.innerHTML = `<div class="nv-reader">
      <aside class="nv-idx" ${hasIdx ? "" : "hidden"}>
        <div class="nv-frow"><button class="chip sm" data-s="" aria-pressed="true">Tudo</button>${Object.keys(res.sp || {}).filter(k => /^SP/.test(k)).map(k => `<button class="chip sm" data-s="${k}">${k}</button>`).join("")}</div>
        <div class="nv-idxlist" id="ri"></div>
      </aside>
      <div class="nv-pdf">
        <div class="nv-ptools"><button class="btn" data-nav="-1" aria-label="Página anterior">‹</button><label>p. <input id="pgin" type="number" min="1" value="1" style="width:56px"></label><span id="pgt"></span><button class="btn" data-nav="1" aria-label="Próxima página">›</button>
          <a class="btn" href="${pdf}" target="_blank" rel="noopener" style="margin-left:auto">Abrir PDF ↗</a><a class="btn" href="${pdf}" download>Baixar</a></div>
        <div class="nv-pscroll" id="ps"><div class="nv-msg">Carregando o resumo…</div></div>
      </div></div>`;
    const ri = el.querySelector("#ri");
    function drawIdx() {
      const list = res.idx.filter(x => !spF || ("SP" + x.sp) === spF);
      ri.innerHTML = list.map(x => `<button class="nv-ix" data-p="${x.p}"><span class="p">p.${x.p}</span><span><b>${esc(x.t)}${x.star ? " ★" : ""}</b><small>${esc(x.lb ? x.lb.join(" · ") : x.pv)}</small>${x.peg ? `<small class="peg">${esc(x.peg)}</small>` : ""}</span></button>`).join("");
      ri.querySelectorAll("[data-p]").forEach(b => b.onclick = () => R.go(+b.dataset.p));
    }
    el.querySelectorAll("[data-s]").forEach(b => b.onclick = () => { spF = b.dataset.s; el.querySelectorAll("[data-s]").forEach(x => x.setAttribute("aria-pressed", x === b)); drawIdx(); });
    drawIdx();
    const ps = el.querySelector("#ps");
    const R = { doc: null, pages: [], cur: 1, pending: ctx.page || 0,
      go(p) { if (!this.doc) { this.pending = p; return; } p = Math.max(1, Math.min(this.doc.numPages, p)); const d = this.pages[p - 1]; ps.scrollTop = d.offsetTop - ps.offsetTop - 8; this.draw(p); } ,
      async draw(i) { const d = this.pages[i - 1]; if (!d) return; const w = ps.clientWidth - 24; if (d.dataset.w == w) return; d.dataset.w = w;
        const page = await this.doc.getPage(i); const v1 = page.getViewport({ scale: 1 }); const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const vp = page.getViewport({ scale: w / v1.width * dpr }); const c = d.querySelector("canvas"); c.width = vp.width; c.height = vp.height; c.style.width = w + "px"; c.style.height = (vp.height / dpr) + "px";
        await page.render({ canvasContext: c.getContext("2d"), viewport: vp }).promise; }
    };
    try {
      if (!window.pdfjsLib) await loadScript(lib + "pdf.min.js");
      pdfjsLib.GlobalWorkerOptions.workerSrc = lib + "pdf.worker.min.js";
      R.doc = await pdfjsLib.getDocument(pdf).promise;
    } catch (e) { ps.innerHTML = `<div class="nv-msg">O leitor não carregou aqui. Use "Abrir PDF".</div>`; return; }
    const p1 = await R.doc.getPage(1), v = p1.getViewport({ scale: 1 }), ratio = v.height / v.width;
    ps.innerHTML = ""; el.querySelector("#pgt").textContent = "de " + R.doc.numPages;
    for (let i = 1; i <= R.doc.numPages; i++) { const d = document.createElement("div"); d.className = "nv-page"; d.dataset.p = i; d.innerHTML = `<canvas></canvas><span>p.${i}</span>`; d.style.height = ((ps.clientWidth - 24) * ratio) + "px"; ps.appendChild(d); R.pages.push(d); }
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) R.draw(+en.target.dataset.p); }), { root: ps, rootMargin: "800px 0px" });
    R.pages.forEach(d => io.observe(d));
    ps.addEventListener("scroll", () => { const top = ps.scrollTop + ps.clientHeight * .3; let c = 1; for (const d of R.pages) if (d.offsetTop - ps.offsetTop <= top) c = +d.dataset.p; R.cur = c; el.querySelector("#pgin").value = c; }, { passive: true });
    el.querySelector("#pgin").onchange = e => R.go(+e.target.value);
    el.querySelectorAll("[data-nav]").forEach(b => b.onclick = () => R.go(R.cur + +b.dataset.nav));
    if (R.pending) R.go(R.pending);
  };


  /* ---------- Lab UC15 (dados extraídos do Lab_UC15.html) ---------- */
  function prepLab(q) {
    return {
      id: q.id, sp: q.sp,
      tags: [{ l: "SP" + q.sp }, q.src === "T11" ? { l: "caiu na T11" + (q.n ? " · Q" + q.n : ""), c: "hot" } : { l: "treino" }],
      enun: q.enun, itens: [],
      opts: q.alts.map((h, i) => ({ html: h, ok: i === q.gab, why: "" })),
      gabLabel: LET[q.gab], com: (q.com || "") + (q.pega ? `<p><span class="tag warn">pegadinha</span> ${q.pega}</p>` : ""), pg: []
    };
  }
  V.labq = (el, U, ctx) => {
    const items = U.qobj.map(q => Object.assign({}, q, { tus: [q.src === "T11" ? "T11" : "treino"] }));
    quiz(el, ctx, { ns: ctx.ns + ":labq", items, turmas: ["T11", "treino"], tuLabel: "Origem", noRep: true, prep: prepLab });
  };

  /* ---------- Pato UC15 (dados extraídos do Pato_UC15_Questoes.html) ---------- */
  const AULA = a => a ? "Aula " + a : "Prova T11";
  function prepPato(q) {
    return {
      id: q.id, sp: q.sp,
      tags: [{ l: AULA(q.a) }].concat(q.r ? [{ l: q.r }] : []).concat(q.p ? [{ l: "caiu em prova", c: "hot" }] : []).concat(q.d ? [{ l: "discursiva" }] : []),
      enun: esc(q.e).replace(/\n/g, "<br>"), itens: (q.it || []).map((x, i) => ["I", "II", "III", "IV", "V", "VI"][i] + ". " + x),
      opts: q.d ? [] : (q.o || []).map((h, i) => ({ html: h, ok: i === q.c, why: "" })),
      gab: esc(q.ans || "").replace(/\n/g, "<br>"), gabLabel: LET[q.c], com: q.d ? "" : (q.x || ""), pg: []
    };
  }
  V.patoq = (el, U, ctx) => {
    const items = U.q.map((q, i) => Object.assign({}, q, { id: "p" + i, sp: AULA(q.a), tus: q.p ? ["caiu em prova"] : [], grupo: q.d ? "Só discursivas" : "Só objetivas" }));
    quiz(el, ctx, { ns: ctx.ns + ":patoq", items, spLabel: "Aula", turmas: ["caiu em prova"], tuLabel: "Origem", noRep: true, temas: null, prep: prepPato });
  };

  /* ---------- vídeos (com capítulos quando existem) ---------- */
  V.videos = (el, U, ctx, item) => {
    const P = prog(ctx.ns + ":videos");
    P.pos = P.pos || {};
    let cur = Math.min(P.cur || 0, item.videos.length - 1);
    function fmt(t) { t = Math.floor(t); return Math.floor(t / 60) + ":" + String(t % 60).padStart(2, "0"); }
    function draw() {
      const v = item.videos[cur];
      const chap = v.chap && U && U.chap ? U.chap[v.chap] || [] : [];
      el.innerHTML = `<div class="nv-wrap wide"><div class="nv-vid">
        <div class="nv-player"><video id="vv" controls preload="metadata" playsinline src="${v.src}"></video>
          <div class="nv-vtitle"><b>${esc(v.t)}</b>${v.d ? `<span class="mono">${esc(v.d)}</span>` : ""}</div></div>
        <aside class="nv-vlist">
          ${item.videos.length > 1 ? `<div class="nv-vtabs">${item.videos.map((x, i) => `<button class="chip sm" data-v="${i}" aria-pressed="${i === cur}">${esc(x.short || x.t)}</button>`).join("")}</div>` : ""}
          ${chap.length ? `<h4>Capítulos</h4>${chap.map(c => `<button class="nv-chap" data-t="${c.t}"><span class="mono">${fmt(c.t)}</span><span>${esc(c.title)}</span>${c.t11 ? `<span class="tag hot">caiu</span>` : ""}</button>`).join("")}` : `<p class="nv-hint">Continua de onde você parou, neste navegador.</p>`}
        </aside></div></div>`;
      const vv = el.querySelector("#vv");
      const key = v.src;
      vv.addEventListener("loadedmetadata", () => { if (P.pos[key] && P.pos[key] < vv.duration - 5) vv.currentTime = P.pos[key]; }, { once: true });
      let last = 0;
      vv.addEventListener("timeupdate", () => { if (Math.abs(vv.currentTime - last) > 5) { last = vv.currentTime; P.pos[key] = Math.floor(vv.currentTime); SAVE(); } });
      el.querySelectorAll("[data-v]").forEach(b => b.onclick = () => { cur = +b.dataset.v; P.cur = cur; SAVE(); draw(); });
      el.querySelectorAll("[data-t]").forEach(b => b.onclick = () => { vv.currentTime = +b.dataset.t; vv.play().catch(() => {}); });
    }
    draw();
  };

  /* ---------- API para o shell ---------- */
  window.NATIVO = {
    render(el, item, ctx) {
      ST = ctx.store; SAVE = ctx.save;
      el.innerHTML = `<div class="nv-msg">Carregando…</div>`;
      const dataSrc = item.data || (item.dir ? item.dir + "data.js" : null);
      (dataSrc ? loadData(dataSrc) : Promise.resolve(null)).then(U => {
        const fn = V[item.view];
        if (!fn) { el.innerHTML = `<div class="nv-msg">Vista "${esc(item.view)}" não existe.</div>`; return; }
        fn(el, U, Object.assign({ ns: item.ns || item.dir || item.data || item.pdf || "x" }, ctx), item);
      }).catch(e => { el.innerHTML = `<div class="nv-msg">Não consegui carregar os dados (${esc(e.message)}).</div>`; });
    }
  };
})();
