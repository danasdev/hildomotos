(() => {
  "use strict";

  const { lojas, estoque } = window.HILDO;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

  const CAT = { street: "Street", trail: "Trail", scooter: "Scooter", esportiva: "Esportiva" };
  const fmtInt = (n) => Number(n).toLocaleString("pt-BR");
  const nomeMoto = (m) => `${m.marca} ${m.modelo} ${m.ano}`;
  const specLine = (m) => `${m.ano} · ${m.km ? fmtInt(m.km) + " km" : "0km"} · ${m.cilindrada} cc`;
  const preco = (m) => (m.preco ? `R$ ${fmtInt(m.preco)}` : "Consulte");
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const icon = (id) => `<svg class="ico" aria-hidden="true"><use href="#${id}"/></svg>`;

  const wa = (lojaKey, msg) =>
    `https://wa.me/${lojas[lojaKey].whatsapp}?text=${encodeURIComponent(msg)}`;
  const msgMoto = (m) =>
    `Olá, Hildo Motos! Vi no site a ${nomeMoto(m)} (${m.condicao === "0km" ? "0km" : fmtInt(m.km) + " km"}) e quero saber mais.`;

  /* =======================================================
     Reeded glass: each flute shows a compressed slice of
     the image behind it, so the bike refracts in strips.
     ======================================================= */
  function Glass(el, host, opts = {}) {
    const k = opts.k || 0.72; // <1 magnifies the slice each flute shows
    const stripPx = opts.strip || 24;
    let src = opts.src || "";
    let strips = [];
    let W = 0, H = 0, gw = 0, sw = 0, x = 0;
    let disp = { w: 0, h: 0, ox: 0, oy: 0 };
    const pos = opts.objectPosition || [0.7, 0.5];

    function layout() {
      W = host.clientWidth; H = host.clientHeight;
      gw = el.getBoundingClientRect().width;
      const n = Math.max(8, Math.round(gw / stripPx));
      if (n !== strips.length) {
        el.innerHTML = "";
        strips = Array.from({ length: n }, () => el.appendChild(document.createElement("i")));
        setSrc(src);
      }
      sw = gw / n;
      const iw = 1536, ih = 864;
      const s = Math.max(W / iw, H / ih);
      disp.w = iw * s; disp.h = ih * s;
      disp.ox = (W - disp.w) * pos[0];
      disp.oy = (H - disp.h) * pos[1];
      for (const st of strips) st.style.backgroundSize = `${disp.w / k}px ${disp.h}px`;
      paint();
    }
    function paint() {
      el.style.transform = `translate3d(${x}px,0,0)`;
      for (let i = 0; i < strips.length; i++) {
        const c = x + i * sw + sw / 2;
        const px = (disp.ox - c) / k + sw / 2;
        strips[i].style.backgroundPosition = `${px}px ${disp.oy}px`;
      }
    }
    function setSrc(s) {
      src = s;
      for (const st of strips) st.style.backgroundImage = `url("${s}")`;
    }
    return {
      layout, setSrc,
      set x(v) { x = v; paint(); },
      get x() { return x; },
      get width() { return gw; },
      get stageW() { return W; },
    };
  }

  /* =======================================================
     HERO
     ======================================================= */
  const hero = $(".hero");
  const stage = $("[data-stage]");
  const base = $("[data-stage-base]");
  const next = $("[data-stage-next]");
  const glassEl = $("[data-glass]");
  const rail = $("[data-rail]");
  const modelBox = $("[data-hero-model]");
  const destaques = estoque.filter((m) => m.destaque).slice(0, 4);
  const RAIL_MS = 7000;
  let current = 0;
  let busy = false;

  // keep glass beneath the shade so the copy stays legible
  stage.insertBefore(glassEl, $(".stage__shade", stage));

  const glass = Glass(glassEl, stage, { src: destaques[0]?.foto || base.src });
  const restX = () => {
    const w = glass.stageW;
    return w < 700 ? w * 0.3 : w * 0.31;
  };

  rail.innerHTML = destaques
    .map(
      (m, i) => `
      <button class="rail__tab" role="tab" type="button" id="tab-${i}" aria-selected="${i === 0}" aria-controls="topo" data-i="${i}">
        <img src="${esc(m.foto)}" alt="" loading="lazy">
        <span><span class="rail__name">${esc(m.modelo)}</span><span class="rail__cat">${CAT[m.categoria] || ""}</span></span>
        <span class="rail__bar" aria-hidden="true"><span></span></span>
      </button>`
    )
    .join("");
  rail.style.setProperty("--rail-ms", RAIL_MS + "ms");

  function fillHero(m) {
    $("[data-hero-marca]").textContent = m.marca;
    $("[data-hero-modelo]").textContent = m.modelo;
    $("[data-hero-spec]").textContent = specLine(m);
    const cta = $("[data-hero-cta]");
    cta.href = wa(m.loja, msgMoto(m));
    cta.setAttribute("aria-label", `Quero esta moto: ${nomeMoto(m)}, falar no WhatsApp`);
    $("[data-hero-tag]").hidden = !m.ilustrativa;
  }

  const tween = (from, to, ms, ease, onStep) =>
    new Promise((res) => {
      const t0 = performance.now();
      const step = (t) => {
        const p = Math.min(1, (t - t0) / ms);
        onStep(from + (to - from) * ease(p));
        p < 1 ? requestAnimationFrame(step) : res();
      };
      requestAnimationFrame(step);
    });
  const easeInOut = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
  const easeOut = (p) => 1 - Math.pow(1 - p, 4);

  async function setModel(i, { user = false } = {}) {
    if (i === current || busy || !destaques[i]) return;
    busy = true;
    const m = destaques[i];
    current = i;
    $$(".rail__tab", rail).forEach((t, j) => t.setAttribute("aria-selected", String(j === i)));
    if (user) stopAuto();

    modelBox.classList.add("is-swapping");
    next.src = m.foto;
    try { await next.decode(); } catch (_) {}

    if (reduced) {
      base.src = m.foto;
      glass.setSrc(m.foto);
    } else {
      const W = glass.stageW;
      const gw = glass.width;
      glassEl.style.transition = "opacity 160ms ease-out";
      glassEl.style.opacity = "0";
      await new Promise((r) => setTimeout(r, 170));
      glass.setSrc(m.foto);
      glass.x = -gw;
      glassEl.style.opacity = "1";
      await tween(-gw, W, 1000, easeInOut, (v) => {
        glass.x = v;
        next.style.clipPath = `inset(0 ${Math.max(0, W - (v + gw))}px 0 0)`;
      });
      base.src = m.foto;
      next.style.clipPath = "";
      glass.x = -gw;
      await tween(-gw, restX(), 700, easeOut, (v) => (glass.x = v));
      followX = glass.x;
    }
    fillHero(m);
    requestAnimationFrame(() => modelBox.classList.remove("is-swapping"));
    busy = false;
    if (auto) schedule();
  }

  rail.addEventListener("click", (e) => {
    const t = e.target.closest(".rail__tab");
    if (t) setModel(+t.dataset.i, { user: true });
  });
  rail.addEventListener("keydown", (e) => {
    if (!["ArrowRight", "ArrowLeft"].includes(e.key)) return;
    const n = destaques.length;
    const i = (current + (e.key === "ArrowRight" ? 1 : n - 1)) % n;
    $$(".rail__tab", rail)[i].focus();
    setModel(i, { user: true });
  });

  // autoplay: pauses on hover/focus, stops once the visitor picks a bike
  let auto = !reduced && destaques.length > 1;
  let timer = 0, started = 0, remaining = RAIL_MS;
  function schedule(ms = RAIL_MS) {
    clearTimeout(timer);
    if (!auto) return;
    remaining = ms; started = performance.now();
    rail.classList.remove("is-paused");
    timer = setTimeout(() => setModel((current + 1) % destaques.length), ms);
  }
  function pause() {
    if (!auto) return;
    clearTimeout(timer);
    remaining -= performance.now() - started;
    rail.classList.add("is-paused");
  }
  function stopAuto() {
    auto = false; clearTimeout(timer);
    rail.classList.add("is-paused");
  }
  hero.addEventListener("pointerenter", pause);
  hero.addEventListener("pointerleave", () => auto && schedule(Math.max(1200, remaining)));
  hero.addEventListener("focusin", pause);
  document.addEventListener("visibilitychange", () => (document.hidden ? pause() : auto && schedule(Math.max(1200, remaining))));
  if (!auto) rail.classList.add("is-paused");

  // the glass follows the pointer across the bike
  let followX = 0, targetX = 0, rafId = 0;
  function settle() {
    followX += (targetX - followX) * 0.08;
    if (!busy) glass.x = followX;
    rafId = Math.abs(targetX - followX) > 0.4 ? requestAnimationFrame(settle) : 0;
  }
  if (finePointer && !reduced) {
    hero.addEventListener("pointermove", (e) => {
      if (busy) return;
      const r = stage.getBoundingClientRect();
      const w = r.width, gw = glass.width;
      targetX = Math.min(w - gw - 60, Math.max(w * 0.12, e.clientX - r.left - gw / 2));
      if (!rafId) rafId = requestAnimationFrame(settle);
    });
    hero.addEventListener("pointerleave", () => {
      targetX = restX();
      if (!rafId) rafId = requestAnimationFrame(settle);
    });
  }

  function heroLayout() {
    glass.layout();
    if (!busy) { followX = targetX = restX(); glass.x = followX; }
  }

  if (destaques.length) {
    base.src = destaques[0].foto;
    glass.setSrc(destaques[0].foto);
    fillHero(destaques[0]);
  }

  /* =======================================================
     ESTOQUE
     ======================================================= */
  const grid = $("[data-grid]");
  const empty = $("[data-empty]");
  const count = $("[data-count]");
  const filtro = { condicao: "todas", categoria: "todas" };

  function render() {
    const list = estoque.filter(
      (m) =>
        (filtro.condicao === "todas" || m.condicao === filtro.condicao) &&
        (filtro.categoria === "todas" || m.categoria === filtro.categoria)
    );
    const total = estoque.length;
    count.textContent =
      list.length === total
        ? `${total} ${total === 1 ? "moto disponível" : "motos disponíveis"}`
        : `${list.length} de ${total} motos`;
    empty.hidden = list.length > 0;
    grid.innerHTML = list
      .map(
        (m, i) => `
      <li class="bike" style="--i:${i}">
        <a class="bike__open" href="#moto=${encodeURIComponent(m.id)}" aria-label="Ver detalhes da ${esc(nomeMoto(m))}">
          <div class="bike__media">
            <img src="${esc(m.foto)}" alt="" loading="lazy" decoding="async">
            ${m.fotos && m.fotos.length ? `<img class="bike__alt" src="${esc(m.fotos[0])}" alt="" loading="lazy" decoding="async">
            <span class="bike__count">${icon("i-photos")} ${m.fotos.length + 1} fotos</span>` : ""}
            <span class="badge${m.condicao === "0km" ? " badge--new" : ""}">${m.condicao === "0km" ? "0km" : "Seminova"}</span>
            ${m.ilustrativa ? '<span class="stage__tag">Imagem ilustrativa</span>' : ""}
          </div>
          <div class="bike__body">
            <h3 class="bike__modelo"><span>${esc(m.marca)}</span> ${esc(m.modelo)}</h3>
            <dl class="bike__specs num">
              <div><dt>Ano</dt><dd>${m.ano}</dd></div>
              <div><dt>Km</dt><dd>${m.km ? fmtInt(m.km) : "0"}</dd></div>
              <div><dt>Motor</dt><dd>${m.cilindrada} cc</dd></div>
              <div><dt>Estilo</dt><dd>${CAT[m.categoria] || "-"}</dd></div>
            </dl>
          </div>
        </a>
        <div class="bike__foot">
          <p class="bike__price num">${preco(m)}${m.preco ? "" : "<small>valor pelo WhatsApp</small>"}</p>
          <a class="btn btn--solid" href="${wa(m.loja, msgMoto(m))}" target="_blank" rel="noopener" aria-label="Quero essa: ${esc(nomeMoto(m))}, falar no WhatsApp">${icon("i-wa")} Quero essa</a>
        </div>
      </li>`
      )
      .join("");
  }

  function setFilter(key, value) {
    filtro[key] = value;
    $$(`[data-seg="${key}"] button`).forEach((b) => b.setAttribute("aria-checked", String(b.dataset.value === value)));
    render();
  }
  $$("[data-seg]").forEach((seg) => {
    seg.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (b) setFilter(seg.dataset.seg, b.dataset.value);
    });
    seg.addEventListener("keydown", (e) => {
      if (!["ArrowRight", "ArrowLeft"].includes(e.key)) return;
      const bs = $$("button", seg);
      const i = bs.indexOf(document.activeElement);
      const n = bs[(i + (e.key === "ArrowRight" ? 1 : bs.length - 1)) % bs.length];
      n.focus(); n.click();
    });
  });
  $$("[data-filter-link]").forEach((a) =>
    a.addEventListener("click", () => setFilter("condicao", a.dataset.filterLink))
  );
  $("[data-reset]").addEventListener("click", () => {
    setFilter("condicao", "todas");
    setFilter("categoria", "todas");
  });

  /* =======================================================
     Loja pickers
     ======================================================= */
  function lojaPick(el, name, selected) {
    el.innerHTML = Object.entries(lojas)
      .map(
        ([key, l]) => `
        <label class="chip"><input type="radio" name="${name}" value="${key}" ${key === selected ? "checked" : ""}>
          <span>${esc(l.nome.replace("Unidade ", ""))}<small class="num">${esc(l.telefone)}</small></span>
        </label>`
      )
      .join("");
  }
  const firstLoja = Object.keys(lojas)[0];
  lojaPick($('[data-loja-pick="fin"]'), "loja", firstLoja);

  /* =======================================================
     Dialogs
     ======================================================= */
  function wireDialog(d) {
    d.addEventListener("click", (e) => {
      if (e.target === d || e.target.closest("[data-close]")) d.close();
    });
  }

  // loja chooser
  const sheet = $("[data-sheet]");
  wireDialog(sheet);
  const defaultMsg = "Olá, Hildo Motos! Vim pelo site e quero atendimento.";
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-open-lojas]");
    if (!t) return;
    const msg = t.dataset.msg || defaultMsg;
    $("[data-sheet-list]").innerHTML = Object.entries(lojas)
      .map(
        ([key, l]) => `
        <a class="sheet__opt" href="${wa(key, msg)}" target="_blank" rel="noopener">
          <div><strong>${esc(l.nome)}</strong><span class="num">${esc(l.bairro)} · ${esc(l.telefone)}</span></div>
          ${icon("i-wa")}
        </a>`
      )
      .join("");
    sheet.showModal();
  });
  sheet.addEventListener("click", (e) => { if (e.target.closest(".sheet__opt")) sheet.close(); });

  // bike drawer
  const drawer = $("[data-drawer]");
  wireDialog(drawer);
  let openMoto = null;

  function openDrawer(id) {
    const m = estoque.find((x) => x.id === id);
    if (!m) return;
    openMoto = m;
    fillGallery(m);
    $("[data-d-tag]").hidden = !m.ilustrativa;
    const cond = $("[data-d-cond]");
    cond.textContent = m.condicao === "0km" ? "0km" : "Seminova";
    cond.className = "badge" + (m.condicao === "0km" ? " badge--new" : "");
    $("[data-d-marca]").textContent = m.marca;
    $("[data-d-modelo]").textContent = m.modelo;
    $("[data-d-preco]").innerHTML = m.preco ? preco(m) : `Consulte <small>valor e condições pelo WhatsApp</small>`;
    $("[data-d-specs]").innerHTML = [
      ["Ano", m.ano],
      ["Km", m.km ? fmtInt(m.km) : "0km"],
      ["Motor", `${m.cilindrada} cc`],
      ["Cor", m.cor],
      ["Estilo", CAT[m.categoria] || "-"],
      ["Está na", lojas[m.loja].nome.replace("Unidade ", "")],
    ]
      .map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`)
      .join("");
    lojaPick($('[data-loja-pick="moto"]'), "loja", m.loja);
    $('[data-form="moto"]').reset();
    $('[data-form="moto"] input[value="' + m.loja + '"]').checked = true;
    $("[data-share-label]").textContent = "Compartilhar esta moto";
    if (!drawer.open) drawer.showModal();
    $(".drawer__inner").scrollTop = 0;
    $(".drawer__cta .btn").setAttribute("aria-label", `Chamar no WhatsApp sobre a ${nomeMoto(m)}`);
  }
  /* gallery: native scroll-snap track, arrows, thumbnails, keyboard */
  const track = $("[data-gal-track]");
  const thumbs = $("[data-gal-thumbs]");
  const galCount = $("[data-gal-count]");
  let galIdx = 0, galN = 1;

  function fillGallery(m) {
    const list = [m.foto, ...(m.fotos || [])];
    galN = list.length;
    track.innerHTML = list
      .map((f, i) => `<figure class="gal__slide"><img src="${esc(f)}" alt="${esc(nomeMoto(m))}, foto ${i + 1} de ${galN}" ${i ? 'loading="lazy"' : ""} decoding="async"></figure>`)
      .join("");
    thumbs.innerHTML = list
      .map((f, i) => `<button class="gal__thumb" type="button" data-i="${i}" aria-label="Ver foto ${i + 1}"><img src="${esc(f)}" alt=""></button>`)
      .join("");
    thumbs.hidden = galN < 2;
    $("[data-gal]").classList.toggle("is-single", galN < 2);
    track.scrollLeft = 0;
    galShow(0);
  }
  function galShow(i) {
    galIdx = i;
    galCount.textContent = `${i + 1} / ${galN}`;
    $$(".gal__thumb", thumbs).forEach((t, j) => t.setAttribute("aria-current", String(j === i)));
  }
  function galGo(i) {
    i = (i + galN) % galN;
    track.scrollTo({ left: i * track.clientWidth, behavior: reduced ? "auto" : "smooth" });
  }
  track.addEventListener("scroll", () => {
    const i = Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
    if (i !== galIdx) galShow(i);
  }, { passive: true });
  $("[data-gal-prev]").addEventListener("click", () => galGo(galIdx - 1));
  $("[data-gal-next]").addEventListener("click", () => galGo(galIdx + 1));
  thumbs.addEventListener("click", (e) => {
    const t = e.target.closest(".gal__thumb");
    if (t) galGo(+t.dataset.i);
  });
  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); galGo(galIdx + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); galGo(galIdx - 1); }
  });

  drawer.addEventListener("close", () => {
    openMoto = null;
    if (location.hash.startsWith("#moto=")) history.replaceState(null, "", location.pathname + location.search);
  });

  function fromHash() {
    const m = location.hash.match(/^#moto=(.+)$/);
    if (m) openDrawer(decodeURIComponent(m[1]));
  }
  addEventListener("hashchange", fromHash);

  $('[data-form="moto"]').addEventListener("submit", (e) => {
    e.preventDefault();
    if (!openMoto) return;
    const f = e.target;
    const loja = f.loja.value;
    let msg = msgMoto(openMoto);
    if (f.financiar.checked) msg += " Quero simular o financiamento.";
    if (f.troca.checked) msg += " Tenho uma moto para dar de entrada.";
    window.open(wa(loja, msg), "_blank", "noopener");
  });

  $("[data-share]").addEventListener("click", async () => {
    if (!openMoto) return;
    const url = `${location.origin}${location.pathname}#moto=${encodeURIComponent(openMoto.id)}`;
    const label = $("[data-share-label]");
    try {
      if (navigator.share) await navigator.share({ title: `${nomeMoto(openMoto)} · Hildo Motos`, url });
      else { await navigator.clipboard.writeText(url); label.textContent = "Link copiado"; }
    } catch (_) {
      /* share cancelled */
    }
  });

  /* =======================================================
     Forms → WhatsApp
     ======================================================= */
  $$("[data-money]").forEach((inp) =>
    inp.addEventListener("input", () => {
      const d = inp.value.replace(/\D/g, "").slice(0, 9);
      inp.value = d ? fmtInt(d) : "";
    })
  );

  function required(input) {
    const err = $("#" + input.id + "-err");
    const ok = input.value.trim().length > 1;
    input.setAttribute("aria-invalid", String(!ok));
    if (err) {
      err.hidden = ok;
      ok ? input.removeAttribute("aria-describedby") : input.setAttribute("aria-describedby", err.id);
    }
    return ok;
  }
  $$("input[required]").forEach((inp) => {
    inp.addEventListener("blur", () => inp.value && required(inp));
    inp.addEventListener("input", () => inp.getAttribute("aria-invalid") === "true" && required(inp));
  });

  const sel = $("[data-moto-select]");
  sel.innerHTML =
    `<option value="">Ainda estou escolhendo</option>` +
    estoque.map((m) => `<option value="${esc(m.id)}">${esc(nomeMoto(m))} · ${m.condicao === "0km" ? "0km" : "seminova"}</option>`).join("");

  $('[data-form="fin"]').addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target;
    if (!required(f.nome)) return f.nome.focus();
    const m = estoque.find((x) => x.id === f.moto.value);
    let msg = `Olá, Hildo Motos! Meu nome é ${f.nome.value.trim()}. Quero simular um financiamento`;
    msg += m ? ` da ${nomeMoto(m)}.` : ". Ainda estou escolhendo a moto.";
    if (f.entrada.value) msg += ` Tenho R$ ${f.entrada.value} de entrada.`;
    window.open(wa(f.loja.value, msg), "_blank", "noopener");
  });

  $('[data-form="sell"]').addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target;
    if (!required(f.modelo)) return f.modelo.focus();
    const acao = { vender: "vender", trocar: "dar na troca por outra moto", consignar: "deixar em consignação" }[f.tipo.value];
    let msg = `Olá, Hildo Motos! Quero ${acao} minha moto: ${f.modelo.value.trim()}`;
    if (f.ano.value) msg += `, ano ${f.ano.value}`;
    if (f.km.value) msg += `, ${f.km.value} km`;
    msg += ". Podem avaliar?";
    sheetFor(msg);
  });
  function sheetFor(msg) {
    const tmp = document.createElement("button");
    tmp.dataset.openLojas = ""; tmp.dataset.msg = msg; tmp.hidden = true;
    document.body.appendChild(tmp); tmp.click(); tmp.remove();
  }

  /* =======================================================
     Lojas
     ======================================================= */
  $("[data-lojas-list]").innerHTML = Object.entries(lojas)
    .map(
      ([key, l]) => `
      <article class="loja">
        <h3 class="loja__nome">${esc(l.nome)}</h3>
        <p class="loja__bairro">${esc(l.bairro)}</p>
        <p class="loja__tel num"><a href="tel:+${l.whatsapp}">${esc(l.telefone)}</a></p>
        <div class="loja__actions">
          <a class="btn btn--solid" href="${wa(key, defaultMsg)}" target="_blank" rel="noopener">${icon("i-wa")} WhatsApp</a>
          <a class="btn btn--ghost" href="${l.mapa}" target="_blank" rel="noopener">${icon("i-pin")} Como chegar</a>
        </div>
      </article>`
    )
    .join("");


  /* =======================================================
     Dock (mobile) shows once the hero is out of view
     ======================================================= */
  const dock = $("[data-dock]");
  new IntersectionObserver(([en]) => dock.classList.toggle("is-on", !en.isIntersecting), { threshold: 0 }).observe(hero);

  /* =======================================================
     Intro: the shop door rolls up, the glass sweeps the bike in
     ======================================================= */
  const root = document.documentElement;
  const intro = $("[data-intro]");

  function heroEntrance() {
    const W = glass.stageW, gw = glass.width;
    busy = true;
    glass.x = -gw;
    tween(-gw, restX(), 900, easeOut, (v) => (glass.x = v)).then(() => {
      followX = targetX = glass.x;
      busy = false;
      if (auto) schedule();
    });
    const ease = "cubic-bezier(0.16, 1, 0.3, 1)";
    const enter = (el, frames, delay, dur = 900) =>
      el && el.animate(frames, { duration: dur, delay, easing: ease, fill: "backwards" });
    enter($(".notch--rail"), [{ transform: "translateY(100%)" }, { transform: "none" }], 120, 800);
    enter($(".hero__lede"), [{ opacity: 0, transform: "translateY(18px)" }, { opacity: 1, transform: "none" }], 320, 700);
    enter($(".hero__model"), [{ opacity: 0, transform: "translateY(18px)" }, { opacity: 1, transform: "none" }], 400, 700);
    enter($(".hero__actions"), [{ opacity: 0, transform: "translateY(18px)" }, { opacity: 1, transform: "none" }], 480, 700);
    enter($(".hero__title"), [{ clipPath: "inset(0 0 100% 0)", transform: "translateY(30px)" }, { clipPath: "inset(0 0 -10% 0)", transform: "none" }], 180, 800);
    enter($(".hero__mark"), [{ opacity: 0 }, { opacity: 1 }], 120, 600);
    enter($(".notch--top"), [{ transform: "translateY(-100%)" }, { transform: "none" }], 700, 700);
    enter($(".notch--side"), [{ transform: "translate(100%, -50%)" }, { transform: "translate(0, -50%)" }], 760, 700);
  }

  function runIntro() {
    if (!root.classList.contains("intro-on") || !intro) return false;
    let done = false;
    const open = (skip) => {
      if (done) return;
      done = true;
      clearTimeout(t);
      ["pointerdown", "keydown", "wheel", "touchstart"].forEach((ev) => removeEventListener(ev, onSkip));
      intro.classList.toggle("is-skip", !!skip);
      intro.classList.add("is-open");
      heroEntrance();
      const finish = () => {
        root.classList.remove("intro-on");
        try { sessionStorage.setItem("hm-intro", "1"); } catch (_) {}
      };
      intro.addEventListener("transitionend", finish, { once: true });
      setTimeout(finish, 1400);
    };
    const onSkip = () => open(true);
    ["pointerdown", "keydown", "wheel", "touchstart"].forEach((ev) => addEventListener(ev, onSkip, { passive: true }));
    const t = setTimeout(() => open(false), 1700);
    return true;
  }

  /* =======================================================
     Scroll reveals (one material: wipe / door / list)
     ======================================================= */
  const revealEls = $$("[data-reveal]");
  if (root.classList.contains("motion") && "IntersectionObserver" in window) {
    // a fully clipped element never intersects, so watch its parent instead
    const watched = new Map();
    const io = new IntersectionObserver((entries) => {
      for (const en of entries) {
        if (!en.isIntersecting) continue;
        watched.get(en.target).forEach((el) => el.classList.add("is-in"));
        io.unobserve(en.target);
      }
    }, { threshold: 0, rootMargin: "0px 0px -14% 0px" });
    revealEls.forEach((el) => {
      // lists are never clipped, so they can be watched directly
      const host = el.dataset.reveal === "list" ? el : el.parentElement;
      if (!watched.has(host)) { watched.set(host, []); io.observe(host); }
      watched.get(host).push(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add("is-in"));
  }

  // as the visitor scrolls out of the showroom, the stage drifts and the copy recedes
  if (root.classList.contains("motion") && matchMedia("(min-width: 761px)").matches) {
    const copy = $(".hero__copy");
    let ticking = false;
    addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const y = scrollY, h = hero.offsetHeight;
        if (y > h) return;
        const p = y / h;
        stage.style.transform = `translate3d(0, ${y * 0.22}px, 0) scale(${1 + p * 0.05})`;
        copy.style.transform = `translate3d(0, ${-y * 0.12}px, 0)`;
        copy.style.opacity = String(Math.max(0, 1 - p * 1.4));
      });
    }, { passive: true });
  }

  /* =======================================================
     Boot
     ======================================================= */
  function layoutAll() {
    heroLayout();
  }
  let rz = 0;
  addEventListener("resize", () => { cancelAnimationFrame(rz); rz = requestAnimationFrame(layoutAll); });
  window.__hmReady = true;
  render();
  layoutAll();
  if (!runIntro() && auto) schedule();
  fromHash();
})();
