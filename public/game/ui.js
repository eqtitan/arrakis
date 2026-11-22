// Sigilbound — screens, input and battle presentation.

const $app = document.getElementById("app");
const $modal = document.getElementById("modal");
const $toast = document.getElementById("toast");
const UI = { screen: "home", tab: "roster", heroUid: null, slot: null, bagSlot: "all", sort: "power", prep: null, chapterOpen: null };
let B = null; // active battle controller
// Auto-replay session: running totals across every battle in one 🔁 run, shown when it ends.
let AUTO = null;
const AUTO_DELAY_MS = 3000;
function autoStart(idx) {
  AUTO = { idx, started: Date.now(), battles: 0, wins: 0, losses: 0, gold: 0, xp: 0, common: 0, mystic: 0, radiant: 0,
    gear: [], levels: Object.fromEntries(G.team.map((u) => [u, (heroByUid(u) || {}).level || 0])) };
}
function autoRecord(win, r, gear) {
  if (!AUTO) return;
  AUTO.battles++; if (win) AUTO.wins++; else AUTO.losses++;
  if (r) { AUTO.gold += r.gold || 0; AUTO.xp += r.xp || 0; AUTO.common += r.common || 0; AUTO.mystic += r.mystic || 0; AUTO.radiant += r.radiant || 0; }
  if (gear) AUTO.gear.push(gear.uid);
}
function autoSummaryHtml(reason) {
  const a = AUTO;
  const secs = Math.round((Date.now() - a.started) / 1000);
  const time = `${Math.floor(secs / 60)}m ${String(secs % 60).padStart(2, "0")}s`;
  const shards = [["common", "Worn"], ["mystic", "Mystic"], ["radiant", "Radiant"]].filter(([k]) => a[k]).map(([k, n]) => `${SHARDS[k].icon} ${a[k]} ${n}`).join(" · ");
  const found = a.gear.map(gearByUid).filter(Boolean);
  const byRarity = {};
  for (const g of found) byRarity[g.rarity] = (byRarity[g.rarity] || 0) + 1;
  const gearLine = Object.keys(byRarity).sort((x, y) => y - x).map((r) => `<span style="color:${GEAR_RARITY_COLOR[r]}">${byRarity[r]} ${GEAR_RARITY[r]}</span>`).join(" · ");
  const ups = Object.entries(a.levels).map(([u, lv]) => { const h = heroByUid(+u); return h && h.level > lv ? `${HERO[h.id].name.split(/[ ,]/)[0]} Lv ${lv} → ${h.level}` : null; }).filter(Boolean);
  return `<div class="result-title victory" style="font-size:24px">AUTO-BATTLE SUMMARY</div>
    <p class="small dim" style="text-align:center">Stage ${stageLabel(a.idx)} · ${time}${reason ? ` · ${reason}` : ""}</p>
    <div class="summary-grid">
      <div><b>${a.battles}</b><span>Battles</span></div>
      <div><b style="color:var(--good)">${a.wins}</b><span>Wins</span></div>
      <div><b style="color:${a.losses ? "var(--bad)" : "var(--dim)"}">${a.losses}</b><span>Losses</span></div>
    </div>
    <div class="col small" style="gap:6px;margin:10px 0">
      <div class="row spread"><span>Gold</span><b class="gold">🪙 ${fmt(a.gold)}</b></div>
      <div class="row spread"><span>XP (each hero)</span><b>${fmt(a.xp)}</b></div>
      ${shards ? `<div class="row spread"><span>Shards</span><b>${shards}</b></div>` : ""}
      <div class="row spread"><span>Gear found</span><b>${found.length ? `${found.length} · ${gearLine}` : "none"}</b></div>
      ${ups.length ? `<div><span>Level ups</span><div style="color:var(--good);margin-top:2px">${ups.join("<br>")}</div></div>` : ""}
    </div>`;
}
function showAutoSummary(reason, buttons) {
  if (!AUTO) return false;
  const html = autoSummaryHtml(reason);
  AUTO = null;
  modal(html + (buttons || `<div class="row"><button class="btn sec grow" data-act="resultBack" data-to="heroes">Heroes</button>
    <button class="btn grow" data-act="resultBack">Map</button></div>`));
  return true;
}
let battleSeq = 0;

// ---------- helpers ----------
const starStr = (n) => "★".repeat(n);
function portrait(t, opts = {}) {
  const el = opts.el || t.el;
  const rc = opts.hollow ? "#8a2a2a" : RARITY[t.rarity].color, ec = ELEMENTS[el].color;
  return `<div class="por ${opts.big ? "big" : ""}" style="--rc:${rc};--ec:${ec}">
    <div class="pa">${heroArt(t.id, el, { hollow: opts.hollow })}</div>
    <span class="el">${ELEMENTS[el].icon}</span>
    ${opts.lv ? `<span class="lv">${opts.lv}</span>` : ""}</div>`;
}
function heroCell(h, opts = {}) {
  const t = HERO[h.id];
  const inTeam = G.team.indexOf(h.uid);
  return `<button class="hcell ${opts.sel ? "sel" : ""}" data-act="${opts.act || "openHero"}" data-uid="${h.uid}">
    ${portrait(t, { lv: "Lv" + h.level })}
    <span class="stars">${starStr(h.stars)}</span>
    <span class="nm">${t.name.split(/[ ,]/)[0]}</span>
    ${inTeam >= 0 && !opts.noTag ? `<span class="tag">${inTeam + 1}</span>` : ""}
    ${h.locked ? `<span class="tag" style="left:4px;right:auto;background:#888">🔒</span>` : ""}
  </button>`;
}
function toast(msg) {
  const d = document.createElement("div");
  d.innerHTML = msg; $toast.appendChild(d);
  setTimeout(() => d.remove(), 2200);
}
function modal(html) { $modal.innerHTML = `<div class="mbox">${html}</div>`; $modal.classList.remove("hidden"); }
function closeModal() { $modal.classList.add("hidden"); $modal.innerHTML = ""; }
const sleep = (ms) => new Promise((r) => setTimeout(r, ms / (G.settings.speed || 1)));

function fxText(f) {
  const turns = f.turns ? ` (${f.turns}t)` : "";
  const ch = f.chance !== undefined ? `${Math.round(f.chance * 100)}% ` : "";
  const who = f.to === "self" ? " on self" : "";
  switch (f.t) {
    case "heal": return `heals ${Math.round(f.pct * 100)}% HP${who}`;
    case "tm": return `fills Turn Meter by ${Math.round(f.val * 100)}%`;
    case "tmDrain": return `${ch}drains ${Math.round(f.val * 100)}% Turn Meter`;
    case "cleanse": return "removes debuffs";
    case "strip": return "removes buffs";
    case "shield": return `Shield = ${Math.round(f.pct * 100)}% of caster HP${who}`;
    default: return `${ch}${EFFECTS[f.t].name}${turns}${who}`;
  }
}
function skillDesc(sk) {
  const tgt = { enemy: "one enemy", allEnemies: "all enemies", ally: "one ally", allAllies: "all allies", self: "self" }[sk.target];
  const parts = [];
  if (sk.mult > 0) {
    const scale = sk.scale === "atk" ? "ATK" : sk.scale === "def" ? "DEF" : "Max HP";
    const pct = Math.round(sk.mult * 100);
    parts.push(`Hits ${tgt}${sk.hits > 1 ? ` ${sk.hits}×` : ""} for ${pct}% ${scale}`);
  } else parts.push(`Targets ${tgt}`);
  for (const f of sk.fx) parts.push(fxText(f));
  return parts.join(" · ");
}

// ---------- chrome ----------
function topbar() {
  return `<div class="topbar">
    <span class="cur gold">🪙 ${fmt(G.gold)}</span>
    <span class="cur">${SHARDS.common.icon} ${G.shards.common}</span>
    <span class="cur">${SHARDS.mystic.icon} ${G.shards.mystic}</span>
    <span class="cur">${SHARDS.radiant.icon} ${G.shards.radiant}</span>
    <span class="cur">💠 ${G.essence}</span>
    <button class="cur gear" data-act="openSettings" aria-label="Settings">⚙️</button>
  </div>`;
}
function homeBadge() {
  ensureDaily();
  let n = loginAvailable() ? 1 : 0;
  for (const q of DAILY_QUESTS) if (!G.daily.claimed[q.id] && questProgress(q.id) >= q.goal) n++;
  return n;
}
function nav() {
  const items = [["home", "🏰", "Home"], ["campaign", "⚔️", "Campaign"], ["heroes", "🧙", "Heroes"], ["summon", "🔮", "Summon"], ["titan", "🗿", "Titan"], ["friends", "👥", "Friends"]];
  const badge = homeBadge();
  return `<nav class="nav"><div class="nav-inner">${items.map(([k, ic, name]) =>
    `<button class="${UI.screen === k || (k === "heroes" && ["hero", "equip"].includes(UI.screen)) || (k === "friends" && ["friend", "chat"].includes(UI.screen)) ? "on" : ""}" data-act="go" data-to="${k}">
      <span class="ic">${ic}</span>${name}${k === "home" && badge ? `<span class="badge">${badge}</span>` : ""}
      ${k === "titan" && G.daily && G.daily.titanTries ? `<span class="badge" style="background:var(--blue)">${G.daily.titanTries}</span>` : ""}
      ${k === "friends" && typeof ON !== "undefined" && onlineBadgeCount() ? `<span class="badge">${onlineBadgeCount()}</span>` : ""}
    </button>`).join("")}</div></nav>`;
}

function render() {
  ensureDaily();
  if (!G.started) { $app.innerHTML = introScreen(); return; }
  const fn = SCREENS[UI.screen] || SCREENS.home;
  $app.innerHTML = topbar() + `<main class="pad col" style="gap:12px">${fn()}</main>` + nav();
  syncShowcase();
}

// Hero detail page: swap the drawn figure for the live 3D hero when 3D is available.
function syncShowcase() {
  if (!window.W3D || !W3D.showcase) return;
  const host = document.querySelector(".show-sprite[data-hero]");
  if (!host) { W3D.showcaseStop(".show-sprite"); return; }
  const gear = typeof heroGearLook === "function" ? heroGearLook(heroByUid(UI.heroUid)) : null; // equipped gear shows on the model
  if (!W3D.showcase(host, host.dataset.hero, host.dataset.el, gear) && W3D.supported() && !W3D.modelsReady)
    W3D.whenReady().then(() => { if (host.isConnected) W3D.showcase(host, host.dataset.hero, host.dataset.el, gear); });
}

// ---------- screens ----------
function introScreen() {
  return `<div class="hero-banner"><div class="logo">SIGILBOUND</div>
    <p class="dim">The Sigil has shattered. Its shards call heroes to your banner.<br>Choose the first champion to answer.</p></div>
    <div class="pad col">${STARTERS.map((id) => {
      const t = HERO[id];
      return `<button class="card row" data-act="pickStarter" data-id="${id}" style="text-align:left">
        ${portrait(t)}<div class="grow"><h3>${t.name}</h3>
        <div class="small dim">${RARITY[t.rarity].name} · ${ELEMENTS[t.el].name} · ${ROLES[t.role].icon} ${ROLES[t.role].name}</div>
        <div class="small">${t.skills.map((s) => s.name).join(" · ")}</div></div></button>`;
    }).join("")}
    <p class="small dim" style="text-align:center">100% free. No shop, no paid currency. Everything is earned by playing.</p></div>`;
}

const SCREENS = {
  home() {
    const team = G.team.map(heroByUid).filter(Boolean);
    const login = loginAvailable();
    const next = LOGIN_REWARDS[G.login.day % LOGIN_REWARDS.length];
    return `${typeof updateBanner === "function" ? updateBanner() : ""}<div class="hero-banner" style="padding:8px 0 0"><div class="logo">SIGILBOUND</div>
      <div class="small dim">Campaign ${G.cleared}/${TOTAL_STAGES} · ${G.heroes.length} heroes · ${G.stats.wins} wins</div></div>
      <div class="card row spread">
        <div><h3>Daily Login · Day ${((G.login.day - (login ? 0 : 1)) % 7) + 1}</h3><div class="small dim">${login ? rewardText(next) : "Come back tomorrow"}</div></div>
        <button class="btn sm ${login ? "" : "off"}" data-act="claimLogin">${login ? "Claim" : "Claimed"}</button>
      </div>
      <div class="card"><h3>Daily Quests</h3>${DAILY_QUESTS.map((q) => {
        const p = Math.min(q.goal, questProgress(q.id)), done = p >= q.goal, claimed = G.daily.claimed[q.id];
        return `<div class="quest"><div class="grow"><div class="small">${q.name}</div>
          <div class="bar" style="margin:4px 0"><i style="width:${(p / q.goal) * 100}%"></i></div>
          <div class="small dim">${p}/${q.goal} · ${rewardText(q.reward)}</div></div>
          <button class="btn sm ${done && !claimed ? "" : "off"}" data-act="claimQuest" data-id="${q.id}">${claimed ? "✓" : "Claim"}</button></div>`;
      }).join("")}</div>
      <div class="card"><div class="row spread"><h3>Your Team</h3><button class="btn sec sm" data-act="go" data-to="prepEdit">Edit</button></div>
        <div class="row" style="margin-top:10px;gap:10px">${team.map((h) => heroCell(h, { noTag: true })).join("") || `<span class="dim small">No team set</span>`}</div>
        <div class="small dim" style="margin-top:6px">Team power: ${fmt(team.reduce((s, h) => s + power(heroStats(h)), 0))}</div></div>
      <button class="btn" data-act="playNext">${G.cleared < TOTAL_STAGES ? `▶ Continue Campaign · ${stageLabel(G.cleared)}` : "▶ Campaign complete! Replay stages"}</button>
      <div class="row" style="justify-content:center;gap:12px;margin-top:6px">
        <button class="chip" data-act="openSettings">⚙️ Settings</button>
        <button class="chip" data-act="showHelp">How to play</button></div>
      <div class="small dim" style="text-align:center">Sigilbound ${VERSION_LABEL}${SBV.date ? ` · ${SBV.date}` : ""}</div>`;
  },

  campaign() {
    const open = UI.chapterOpen ?? Math.min(CHAPTERS.length - 1, Math.floor(G.cleared / STAGES_PER_CHAPTER));
    return `<h2>Campaign</h2>` + CHAPTERS.map((name, c) => {
      const first = c * STAGES_PER_CHAPTER;
      const locked = first > G.cleared;
      const doneCount = Math.max(0, Math.min(STAGES_PER_CHAPTER, G.cleared - first));
      return `<div class="card chapter" style="background-image:linear-gradient(90deg,#120e1ae6 30%,#120e1a80),${sceneUrl(c)};${locked ? "opacity:.45" : ""}">
        <button class="row spread" style="background:none;width:100%;padding:0;text-align:left" data-act="toggleChapter" data-c="${c}">
          <div><h3>${c + 1}. ${name}</h3><div class="small dim">${ELEMENTS[ELEMENT_KEYS[c % 5]].icon} Lv ${stageLevel(first)}–${stageLevel(first + 5)} · ${doneCount}/${STAGES_PER_CHAPTER}</div></div>
          <span>${locked ? "🔒" : open === c ? "▾" : "▸"}</span></button>
        ${open === c && !locked ? `<div class="stages">${Array.from({ length: STAGES_PER_CHAPTER }, (_, s) => {
          const idx = first + s;
          const cls = idx < G.cleared ? "done" : idx === G.cleared ? "next" : "lock";
          return `<button class="stage ${cls} ${isBossStage(idx) ? "boss" : ""}" data-act="prepStage" data-idx="${idx}">${isBossStage(idx) ? "💀" : stageLabel(idx)}</button>`;
        }).join("")}</div>` : ""}
      </div>`;
    }).join("");
  },

  prep() {
    const p = UI.prep;
    const sel = G.team.map(heroByUid).filter(Boolean);
    const teamPower = sel.reduce((s, h) => s + power(heroStats(h)), 0);
    let title = "Edit Team", sub = "", startBtn = "";
    if (p.mode === "stage") {
      const waves = stageWaves(p.idx);
      const els = [...new Set(waves.flat().map((e) => e.el))].map((e) => ELEMENTS[e].icon).join(" ");
      title = `Stage ${stageLabel(p.idx)} · ${CHAPTERS[Math.floor(p.idx / STAGES_PER_CHAPTER)]}`;
      sub = `Enemy Lv ${stageLevel(p.idx)} · ${waves.length} waves · Elements ${els}${isBossStage(p.idx) ? " · 💀 Boss" : ""}`;
      startBtn = `<button class="btn ${sel.length ? "" : "off"}" data-act="startStage">⚔️ Battle</button>`;
    } else if (p.mode === "titan") {
      title = "Titan Challenge"; sub = `${ELEMENTS[titanElement()].icon} ${ELEMENTS[titanElement()].name} Titan today · ${G.daily.titanTries} tries left`;
      startBtn = `<button class="btn ${sel.length && G.daily.titanTries ? "" : "off"}" data-act="startTitan">🗿 Challenge</button>`;
    }
    const roster = sortedHeroes();
    return `<div class="row spread"><button class="btn sec sm" data-act="go" data-to="${p.back || "home"}">‹ Back</button><span class="small dim">Power ${fmt(teamPower)}</span></div>
      <div class="banner" style="background-image:linear-gradient(0deg,#120e1ae6,#120e1a40),${p.mode === "titan" ? titanSceneUrl() : p.mode === "stage" ? sceneUrl(Math.floor(p.idx / STAGES_PER_CHAPTER)) : sceneUrl(0)}"><h2>${title}</h2><div class="small dim">${sub}</div></div>
      <div class="card"><div class="small dim" style="margin-bottom:8px">Team (tap to remove) — up to 4</div>
        <div class="row" style="gap:10px;min-height:96px">${sel.map((h) => heroCell(h, { act: "teamToggle", noTag: true })).join("")}
        ${Array.from({ length: 4 - sel.length }, () => `<div class="por" style="--rc:#3a3150;--ec:#1f1a2b;opacity:.5">+</div>`).join("")}</div></div>
      ${startBtn}
      <div class="small dim">Tap a hero to add them</div>
      <div class="grid">${roster.map((h) => heroCell(h, { act: "teamToggle", sel: G.team.includes(h.uid) })).join("")}</div>`;
  },

  heroes() {
    const tabs = `<div class="tabs"><button class="chip ${UI.tab === "roster" ? "on" : ""}" data-act="tab" data-t="roster">Heroes (${G.heroes.length})</button>
      <button class="chip ${UI.tab === "bag" ? "on" : ""}" data-act="tab" data-t="bag">Gear (${G.gear.length})</button></div>`;
    if (UI.tab === "bag") return tabs + bagView();
    const sorts = [["power", "Power"], ["level", "Level"], ["rarity", "Rarity"], ["element", "Element"]];
    return tabs + `<div class="row wrap">${sorts.map(([k, n]) => `<button class="chip ${UI.sort === k ? "on" : ""}" data-act="sort" data-s="${k}">${n}</button>`).join("")}</div>
      <div class="grid">${sortedHeroes().map((h) => heroCell(h)).join("")}</div>`;
  },

  hero() {
    const h = heroByUid(UI.heroUid);
    if (!h) { UI.screen = "heroes"; return SCREENS.heroes(); }
    const t = HERO[h.id], st = heroStats(h), cap = maxLevelFor(h.stars);
    const atCap = h.level >= cap;
    const lvlCost = Math.ceil((xpToNext(h.level) - h.xp) / TRAIN_XP_PER_GOLD);
    const maxCost = Math.ceil(xpToCap(h) / TRAIN_XP_PER_GOLD);
    const fodder = rankUpFodder(h).length;
    return `<div class="row spread"><button class="btn sec sm" data-act="go" data-to="heroes">‹ Heroes</button>
        <div class="row"><button class="btn sec sm" data-act="toggleLock">${h.locked ? "🔒 Locked" : "🔓 Lock"}</button>
        <button class="btn sec sm" data-act="askRelease">Release</button></div></div>
      <div class="card row showcase" style="gap:14px;background-image:linear-gradient(90deg,#120e1a33,#120e1aee 55%),${sceneUrl(ELEMENT_KEYS.indexOf(t.el))}">
        <div class="show-sprite" data-hero="${t.id}" data-el="${t.el}">${heroSprite(t.id, t.el)}</div>
        <div class="grow"><h2 style="font-size:18px">${t.name}</h2>
          <div class="stars" style="font-size:15px">${starStr(h.stars)}<span class="dim">${"☆".repeat(MAX_STARS - h.stars)}</span></div>
          <div class="small" style="color:${RARITY[t.rarity].color}">${RARITY[t.rarity].name}</div>
          <div class="small dim">${ELEMENTS[t.el].icon} ${ELEMENTS[t.el].name} · ${ROLES[t.role].icon} ${ROLES[t.role].name}</div>
          <div class="small">Power <b class="gold">${fmt(power(st))}</b></div></div></div>
      <div class="card col">
        <div class="row spread"><b>Level ${h.level} / ${cap}</b><span class="small dim">${atCap ? "MAX" : `${h.xp} / ${xpToNext(h.level)} XP`}</span></div>
        <div class="bar"><i style="width:${atCap ? 100 : (h.xp / xpToNext(h.level)) * 100}%"></i></div>
        ${atCap ? `<div class="small dim">${h.stars >= MAX_STARS ? "Fully ascended!" : `Rank up needs ${h.stars} other ${h.stars}★ heroes (you have ${fodder}) + 🪙 ${fmt(rankUpGold(h.stars))}`}</div>
          <button class="btn ${canRankUp(h) ? "" : "off"}" data-act="rankUp">⭐ Rank Up to ${h.stars + 1}★</button>`
        : `<div class="row"><button class="btn sec sm grow ${G.gold >= lvlCost ? "" : "off"}" data-act="train" data-max="0">Train +1 Lv · 🪙 ${fmt(lvlCost)}</button>
          <button class="btn sec sm grow ${G.gold >= maxCost ? "" : "off"}" data-act="train" data-max="1">Train to ${cap} · 🪙 ${fmt(maxCost)}</button></div>`}
      </div>
      <div class="card"><h3 style="margin-bottom:6px">Stats</h3><div class="stat-grid">
        <div><span>❤️ HP</span><b>${fmt(st.hp)}</b></div><div><span>⚔️ ATK</span><b>${st.atk}</b></div>
        <div><span>🛡️ DEF</span><b>${st.def}</b></div><div><span>💨 SPD</span><b>${st.spd}</b></div>
        <div><span>🎯 Crit</span><b>${st.crit}%</b></div><div><span>💥 Crit DMG</span><b>${st.cdmg}%</b></div></div>
        ${st.sets.length ? `<div class="small" style="margin-top:6px">Sets: ${st.sets.map((s) => `${GEAR_SETS[s].icon} ${GEAR_SETS[s].name} (${GEAR_SETS[s].desc})`).join(", ")}</div>` : ""}</div>
      <div class="card"><div class="row spread" style="margin-bottom:8px"><h3>Gear</h3><button class="btn sec sm" data-act="autoEquip">Auto-equip</button></div>
        <div class="slots">${GEAR_SLOT_KEYS.map((slot) => {
          const g = h.gear[slot] && gearByUid(h.gear[slot]);
          return `<button class="slot" data-act="openSlot" data-slot="${slot}" style="${g ? `border-color:${GEAR_RARITY_COLOR[g.rarity]}` : ""}">
            ${g ? GEAR_SLOTS[slot].icon : `<span style="opacity:.3">${GEAR_SLOTS[slot].icon}</span>`}
            <small>${g ? GEAR_SETS[g.set].icon + " " + GEAR_SETS[g.set].name : GEAR_SLOTS[slot].name}</small>
            ${g ? `<span class="glv">+${g.level}</span>` : ""}</button>`;
        }).join("")}</div><div class="small dim" style="margin-top:6px">2 pieces of the same set grant its bonus.</div></div>
      <div class="card"><h3>Skills</h3>${t.skills.map((s, i) => `<div class="skillrow"><div class="row spread"><b>${["A1", "A2", "A3"][i]} · ${s.name}</b>
        <span class="small dim">${s.cd ? `⏳ ${s.cd} turns` : "Basic"}</span></div><div class="small dim">${skillDesc(s)}</div></div>`).join("")}</div>`;
  },

  equip() {
    const h = heroByUid(UI.heroUid), slot = UI.slot;
    const cur = h.gear[slot] && gearByUid(h.gear[slot]);
    const list = G.gear.filter((g) => g.slot === slot).sort((a, b) => gearScore(b) - gearScore(a));
    return `<div class="row spread"><button class="btn sec sm" data-act="go" data-to="hero">‹ ${HERO[h.id].name.split(/[ ,]/)[0]}</button>
      ${cur ? `<button class="btn sec sm" data-act="unequip">Unequip</button>` : ""}</div>
      <h2>${GEAR_SLOTS[slot].icon} ${GEAR_SLOTS[slot].name}</h2>
      ${list.length ? list.map((g) => gearRow(g, { equipFor: h })).join("") : `<div class="card dim">No ${GEAR_SLOTS[slot].name.toLowerCase()} yet. Clear campaign stages to find gear.</div>`}`;
  },

  summon() {
    return `<h2>Summon</h2><div class="small dim">Shards drop from the campaign, quests, the Titan and daily logins. Release spare heroes for 💠 Essence and trade it below.</div>
      ${Object.entries(SHARDS).map(([k, s]) => {
        const rates = RARITY_KEYS.filter((r) => s.rates[r] > 0).map((r) => `<span style="color:${RARITY[r].color}">${RARITY[r].name} ${s.rates[r]}%</span>`).join(" · ");
        const have = G.shards[k];
        return `<div class="card col"><div class="portal"><div class="orb" style="--oc:${s.color}">${s.icon}</div>
          <div class="grow"><h3>${s.name}</h3><div class="small">Owned: <b>${have}</b></div><div class="rates">${rates}</div>
          ${s.pity ? `<div class="rates">Guaranteed Legendary in <b class="gold">${s.pity - G.pity[k]}</b> summons</div>` : ""}</div></div>
          <div class="row"><button class="btn grow ${have >= 1 ? "" : "off"}" data-act="summon" data-k="${k}" data-n="1">Summon ×1</button>
          <button class="btn blue grow ${have >= 10 ? "" : "off"}" data-act="summon" data-k="${k}" data-n="10">Summon ×10</button></div></div>`;
      }).join("")}
      <div class="card"><h3>Essence Exchange</h3><div class="small dim" style="margin-bottom:8px">You have 💠 ${G.essence}</div>
        <div class="row">${EXCHANGE.map((e) => `<button class="btn sec sm grow ${G.essence >= e.cost ? "" : "off"}" data-act="exchange" data-k="${e.shard}">${SHARDS[e.shard].icon}<br>💠 ${e.cost}</button>`).join("")}</div></div>`;
  },

  titan() {
    const el = titanElement();
    const best = G.daily.titanBest;
    return `<h2>🗿 ${TITAN.name}</h2>
      <div class="card col" style="align-items:center;text-align:center">
        ${portrait({ ...TITAN, el }, { big: true, el })}
        <div>Today's element: <b style="color:${ELEMENTS[el].color}">${ELEMENTS[el].icon} ${ELEMENTS[el].name}</b></div>
        <div class="small dim">Bring heroes strong against ${ELEMENTS[el].name}: ${ELEMENT_KEYS.filter((k) => ELEMENTS[k].strong === el).map((k) => ELEMENTS[k].icon + " " + ELEMENTS[k].name).join(", ")}.
          The Titan can't be killed. Deal as much damage as you can in ${TITAN_TURNS} of its turns. Immune to Stun and Turn Meter drain.</div>
        <div>Tries left today: <b class="gold">${G.daily.titanTries}/3</b> · Best today: <b>${fmt(best)}</b></div>
        <button class="btn ${G.daily.titanTries ? "" : "off"}" style="width:100%" data-act="prepTitan">Prepare Team</button></div>
      <div class="card"><h3>Damage Rewards (best attempt)</h3>${TITAN_TIERS.map((t, i) => `<div class="quest">
        <span style="width:22px">${best >= t.dmg && G.daily.titanBest > 0 ? "✅" : "🎁"}</span>
        <div class="grow small">${i === 0 ? "Any damage" : fmt(t.dmg) + "+ damage"}</div>
        <div class="small">${rewardText(t)}</div></div>`).join("")}
        <div class="small dim" style="margin-top:6px">Each try pays the reward for the tier it reaches.</div></div>
      <div class="small dim">All-time best: ${fmt(G.stats.titanBest)}</div>`;
  },
};

function bagView() {
  const slots = ["all", ...GEAR_SLOT_KEYS];
  const list = G.gear.filter((g) => UI.bagSlot === "all" || g.slot === UI.bagSlot).sort((a, b) => gearScore(b) - gearScore(a));
  return `<div class="row wrap">${slots.map((s) => `<button class="chip ${UI.bagSlot === s ? "on" : ""}" data-act="bagSlot" data-s="${s}">${s === "all" ? "All" : GEAR_SLOTS[s].icon + " " + GEAR_SLOTS[s].name}</button>`).join("")}</div>
    <div class="col">${list.length ? list.map((g) => gearRow(g, { sell: true })).join("") : `<div class="card dim">No gear yet. Clear campaign stages to find gear.</div>`}</div>
    ${G.gear.some((g) => !gearOwner(g) && g.rarity <= 2) ? `<button class="btn sec" data-act="sellJunk">Sell all unequipped Worn/Fine gear</button>` : ""}`;
}
function gearRow(g, opts = {}) {
  const owner = gearOwner(g);
  const mainStat = GEAR_SLOTS[g.slot].stat.toUpperCase();
  const cost = gearUpgradeCost(g);
  return `<div class="gearrow">
    <div class="gi" style="border-color:${GEAR_RARITY_COLOR[g.rarity]}">${GEAR_SLOTS[g.slot].icon}<span class="glv">+${g.level}</span></div>
    <div class="grow"><div class="small"><b style="color:${GEAR_RARITY_COLOR[g.rarity]}">${GEAR_RARITY[g.rarity]}</b> ${GEAR_SETS[g.set].icon} ${GEAR_SETS[g.set].name} ${GEAR_SLOTS[g.slot].name}</div>
      <div class="small">${mainStat} +${gearMainValue(g)}</div>
      <div class="subs">${g.subs.map((s) => `${SUBSTATS[s.stat].name} +${s.val}${s.stat.endsWith("Pct") || s.stat === "crit" || s.stat === "cdmg" ? "%" : ""}`).join(" · ")}</div>
      ${owner ? `<div class="subs">On ${HERO[owner.id].face} ${HERO[owner.id].name.split(/[ ,]/)[0]}</div>` : ""}</div>
    <div class="col" style="gap:4px">
      ${g.level < GEAR_MAX_LEVEL ? `<button class="btn sec sm ${G.gold >= cost ? "" : "off"}" data-act="upgrade" data-uid="${g.uid}">⬆ 🪙${fmt(cost)}</button>` : `<span class="small gold">MAX</span>`}
      ${opts.equipFor ? (owner && owner.uid === opts.equipFor.uid ? `<span class="small" style="color:var(--good)">Equipped</span>` : `<button class="btn sm" data-act="equip" data-uid="${g.uid}">Equip</button>`) : ""}
      ${opts.sell ? `<button class="btn red sm" data-act="sell" data-uid="${g.uid}">Sell 🪙${fmt(gearSellValue(g))}</button>` : ""}
    </div></div>`;
}

function sortedHeroes() {
  const arr = [...G.heroes];
  const by = {
    power: (a, b) => power(heroStats(b)) - power(heroStats(a)),
    level: (a, b) => b.stars - a.stars || b.level - a.level,
    rarity: (a, b) => RARITY_KEYS.indexOf(HERO[b.id].rarity) - RARITY_KEYS.indexOf(HERO[a.id].rarity) || b.level - a.level,
    element: (a, b) => ELEMENT_KEYS.indexOf(HERO[a.id].el) - ELEMENT_KEYS.indexOf(HERO[b.id].el),
  };
  return arr.sort(by[UI.sort] || by.power);
}

// ---------- actions ----------
const ACTIONS = {
  go(d) {
    if (d.to === "prepEdit") { UI.prep = { mode: "edit", back: "home" }; UI.screen = "prep"; }
    else UI.screen = d.to;
    window.scrollTo(0, 0);
  },
  pickStarter(d) {
    const a = addHero(d.id), b = addHero("pell"), c = addHero("odo");
    G.team = [a.uid, b.uid, c.uid];
    G.started = true;
    for (const h of [a, b, c]) { const g = makeGear(1, "weapon"); equip(h, g); }
    save();
    modal(`<div class="result-title victory">Welcome!</div>
      <p style="text-align:center">${HERO[d.id].name} answers your call, joined by Pell and Odo.</p>
      <p class="small dim" style="text-align:center">You also have ${G.shards.mystic} Mystic and ${G.shards.common} Worn shards. Head to <b>Summon</b> to grow your roster, then fight in the <b>Campaign</b>.</p>
      <button class="btn" style="width:100%" data-act="closeModal">Let's go</button>`);
  },
  closeModal() { closeModal(); },
  claimLogin() { const r = claimLogin(); if (r) { SOUND.play("coin"); toast(`Login reward: ${rewardText(r)}`); } },
  claimQuest(d) {
    const q = DAILY_QUESTS.find((x) => x.id === d.id);
    if (!q || G.daily.claimed[q.id] || questProgress(q.id) < q.goal) return;
    G.daily.claimed[q.id] = true; grant(q.reward); save(); SOUND.play("coin");
    toast(`Quest complete: ${rewardText(q.reward)}`);
  },
  playNext() { ACTIONS.prepStage({ idx: Math.min(G.cleared, TOTAL_STAGES - 1) }); },
  toggleChapter(d) { const c = +d.c; UI.chapterOpen = UI.chapterOpen === c ? -1 : c; },
  prepStage(d) { UI.prep = { mode: "stage", idx: +d.idx, back: "campaign" }; UI.screen = "prep"; window.scrollTo(0, 0); },
  prepTitan() { UI.prep = { mode: "titan", back: "titan" }; UI.screen = "prep"; window.scrollTo(0, 0); },
  teamToggle(d) {
    const u = +d.uid;
    if (G.team.includes(u)) G.team = G.team.filter((x) => x !== u);
    else if (G.team.length < 4) G.team.push(u);
    else toast("Team is full (4). Tap a team member to remove them.");
    save();
  },
  startStage() { startBattle({ mode: "stage", idx: UI.prep.idx }); },
  startTitan() { if (G.daily.titanTries > 0) startBattle({ mode: "titan" }); },
  tab(d) { UI.tab = d.t; },
  sort(d) { UI.sort = d.s; },
  bagSlot(d) { UI.bagSlot = d.s; },
  openHero(d) { UI.heroUid = +d.uid; UI.screen = "hero"; window.scrollTo(0, 0); },
  toggleLock() { const h = heroByUid(UI.heroUid); h.locked = !h.locked; save(); },
  askRelease() {
    const h = heroByUid(UI.heroUid);
    if (h.locked) return toast("Unlock this hero first.");
    if (G.heroes.length <= 1) return toast("You can't release your last hero.");
    const ess = RARITY[HERO[h.id].rarity].essence * h.stars;
    modal(`<h3>Release ${HERO[h.id].name}?</h3><p class="dim small">They leave your roster for good and their gear goes back to your bag. You get 💠 ${ess} Essence.</p>
      <div class="row"><button class="btn sec grow" data-act="closeModal">Cancel</button><button class="btn red grow" data-act="release">Release</button></div>`);
  },
  release() {
    const ess = releaseHero(UI.heroUid); save(); closeModal();
    toast(`+💠 ${ess} Essence`); UI.screen = "heroes";
  },
  train(d) {
    const h = heroByUid(UI.heroUid);
    const xp = d.max === "1" ? xpToCap(h) : xpToNext(h.level) - h.xp;
    const cost = Math.ceil(xp / TRAIN_XP_PER_GOLD);
    if (G.gold < cost) return toast("Not enough gold.");
    G.gold -= cost; giveXp(h, xp); save();
    toast(`${HERO[h.id].name.split(/[ ,]/)[0]} reached Lv ${h.level}`);
  },
  rankUp() {
    const h = heroByUid(UI.heroUid);
    const fodder = rankUpFodder(h).sort((a, b) => a.level - b.level || RARITY_KEYS.indexOf(HERO[a.id].rarity) - RARITY_KEYS.indexOf(HERO[b.id].rarity)).slice(0, h.stars);
    modal(`<h3>Rank up to ${h.stars + 1}★?</h3><p class="small dim">These heroes will be consumed (locked heroes and team members are never used):</p>
      <div class="row wrap" style="gap:10px;margin:10px 0">${fodder.map((f) => heroCell(f, { act: "noop", noTag: true })).join("")}</div>
      <p class="small">Cost: 🪙 ${fmt(rankUpGold(h.stars))}. Stats +15%, level cap ${maxLevelFor(h.stars + 1)}.</p>
      <div class="row"><button class="btn sec grow" data-act="closeModal">Cancel</button><button class="btn grow" data-act="confirmRankUp" data-f="${fodder.map((f) => f.uid).join(",")}">Rank Up</button></div>`);
  },
  confirmRankUp(d) {
    const h = heroByUid(UI.heroUid);
    if (rankUp(h, d.f.split(",").map(Number))) toast(`⭐ ${HERO[h.id].name} is now ${h.stars}★!`);
    closeModal();
  },
  noop() {},
  autoEquip() { autoEquip(heroByUid(UI.heroUid)); toast("Best available gear equipped"); },
  openSlot(d) { UI.slot = d.slot; UI.screen = "equip"; window.scrollTo(0, 0); },
  equip(d) { equip(heroByUid(UI.heroUid), gearByUid(+d.uid)); UI.screen = "hero"; },
  unequip() { const h = heroByUid(UI.heroUid); delete h.gear[UI.slot]; save(); UI.screen = "hero"; },
  upgrade(d) { const g = gearByUid(+d.uid); if (upgradeGear(g)) toast(`Upgraded to +${g.level}`); },
  sell(d) { const g = gearByUid(+d.uid); const v = gearSellValue(g); sellGear(g); save(); toast(`Sold for 🪙 ${fmt(v)}`); },
  sellJunk() {
    let total = 0;
    for (const g of G.gear.filter((x) => !gearOwner(x) && x.rarity <= 2)) { total += gearSellValue(g); sellGear(g); }
    save(); toast(`Sold for 🪙 ${fmt(total)}`);
  },
  summon(d) {
    const res = summon(d.k, +d.n);
    if (!res.length) return toast("Not enough shards.");
    const best = res.reduce((m, h) => Math.max(m, RARITY_KEYS.indexOf(HERO[h.id].rarity)), 0);
    closeModal();
    const color = RARITY[RARITY_KEYS[best]].color;
    FX.portal(innerWidth / 2, innerHeight / 2, color, 1100);
    SOUND.play("cast", { volume: 0.5, rate: 0.6, jitter: 0 });
    if (best >= 2) setTimeout(() => { FX.flash(color); NATIVE.haptic("heavy"); }, 950);
    setTimeout(() => SOUND.play(best >= 3 ? "legendary" : best >= 2 ? "victory" : "confirm", { jitter: 0 }), 950);
    setTimeout(() => showSummonResult(d, res, best), 1000);
  },
};
function showSummonResult(d, res, best) {
    modal(`<div class="result-title" style="color:${RARITY[RARITY_KEYS[best]].color}">${RARITY_KEYS[best] === "legendary" ? "LEGENDARY!" : "Summoned!"}</div>
      <div class="reveal" style="${res.length === 1 ? "grid-template-columns:1fr" : ""}">${res.map((h, i) => `<div class="glow-${HERO[h.id].rarity}" style="animation-delay:${i * 0.08}s">${heroCell(h, { act: "noop", noTag: true })}</div>`).join("")}</div>
      ${res.length === 1 ? `<p style="text-align:center"><b>${HERO[res[0].id].name}</b><br><span class="small" style="color:${RARITY[HERO[res[0].id].rarity].color}">${RARITY[HERO[res[0].id].rarity].name}</span></p>` : ""}
      <div class="row"><button class="btn sec grow" data-act="closeModal">OK</button>
      ${G.shards[d.k] >= +d.n ? `<button class="btn grow" data-act="summon" data-k="${d.k}" data-n="${d.n}">Again ×${d.n}</button>` : ""}</div>`);
    render();
}
Object.assign(ACTIONS, {
  exchange(d) { if (exchange(d.k)) toast(`+1 ${SHARDS[d.k].name}`); },
  showHelp() {
    modal(`<h3>How to play</h3><div class="small col" style="margin-top:8px">
      <div>⚔️ <b>Battles</b>: Units act when their Turn Meter fills, so faster heroes act more often. On your hero's turn, pick a skill, then tap a target. Skills with ⏳ need a few turns to recharge.</div>
      <div>🔥➜🌪️➜🌊➜🔥 <b>Elements</b>: Flame beats Gale, Gale beats Tide, Tide beats Flame. Light and Shadow beat each other. Strong hits do +30% and weak hits do −20% (and can't crit).</div>
      <div>🤖 <b>Auto</b> lets the AI play for you. ⏩ speeds up battles. 🔁 Auto-replay farms a stage again after each win.</div>
      <div>📈 <b>Grow</b>: Win battles for XP, or Train with gold. At max level, Rank Up by consuming heroes with the same star count.</div>
      <div>🛡️ <b>Gear</b>: Equip and upgrade gear. Two pieces of a set give a bonus.</div>
      <div>🗿 <b>Titan</b>: 3 tries a day for shards and gold.</div>
      <div>💸 <b>Free</b>: There's no shop. Every shard is earned by playing.</div></div>
      <button class="btn" style="width:100%;margin-top:12px" data-act="closeModal">Got it</button>`);
  },
  openSettings() {
    const pct = (v) => Math.round(v * 100);
    const m = pct(SOUND.musicVol()), s = pct(SOUND.sfxVol());
    modal(`<h3>Settings</h3>
      <div class="setting"><div class="row spread"><label for="musicVol"><b>Music</b></label><span class="small dim" id="musicVolLabel">${m ? m + "%" : "Off"}</span></div>
        <input type="range" id="musicVol" class="slider" min="0" max="100" step="5" value="${m}"></div>
      <div class="setting"><div class="row spread"><label for="sfxVol"><b>Sound effects</b></label><span class="small dim" id="sfxVolLabel">${s ? s + "%" : "Off"}</span></div>
        <input type="range" id="sfxVol" class="slider" min="0" max="100" step="5" value="${s}"></div>
      <div class="setting row spread"><div><b>Battle graphics</b><div class="small dim">2D is lighter on older phones</div></div>
        <button class="btn sec sm" data-act="toggleGfx">${G.settings.flat ? "2D" : "3D"}</button></div>
      ${B ? "" : `<div class="row" style="gap:8px;margin-top:10px">
        <button class="btn sec sm grow" data-act="saveCode">Save code</button>
        <button class="btn sec sm grow" data-act="showHelp">How to play</button>
        <button class="btn red sm grow" data-act="askReset">Reset save</button></div>`}
      <p class="small dim" style="text-align:center;margin:12px 0 8px">Sigilbound ${VERSION_LABEL}</p>
      <button class="btn" style="width:100%" data-act="closeModal">Done</button>`);
  },
  toggleGfx() {
    G.settings.flat = !G.settings.flat; save();
    toast(G.settings.flat ? "Battles will use 2D art (from the next battle)" : "Battles will use 3D (from the next battle)");
    ACTIONS.openSettings();
  },
  saveCode() {
    const code = exportSave();
    modal(`<h3>Save code</h3>
      <p class="small dim">Copy this to back up your progress, move it to another device, or send it with a bug report. Paste a code below to load it. Loading replaces the progress on this device.</p>
      <textarea id="savecode" class="code" readonly>${code}</textarea>
      <button class="btn sec" style="width:100%;margin:8px 0" data-act="copySave">Copy my save code</button>
      <textarea id="loadcode" class="code" placeholder="Paste a save code here"></textarea>
      <div class="row" style="margin-top:8px"><button class="btn sec grow" data-act="closeModal">Close</button><button class="btn grow" data-act="loadSave">Load code</button></div>
      <p class="small dim" style="text-align:center;margin-top:8px">Sigilbound ${VERSION_LABEL}</p>`);
  },
  copySave() {
    const ta = document.getElementById("savecode");
    const done = () => toast("Save code copied");
    try { navigator.clipboard.writeText(ta.value).then(done, () => { ta.select(); toast("Selected. Copy it with your device's copy command."); }); }
    catch (_) { ta.select(); toast("Selected. Copy it with your device's copy command."); }
  },
  loadSave() {
    const v = document.getElementById("loadcode").value.trim();
    if (!v) return toast("Paste a save code first.");
    if (importSave(v)) { closeModal(); UI.screen = "home"; toast("Save loaded"); }
    else toast("That code didn't work. Check that you copied all of it.");
  },
  askReset() {
    modal(`<h3>Reset all progress?</h3><p class="small dim">This deletes your save on this device. It can't be undone.</p>
      <div class="row"><button class="btn sec grow" data-act="closeModal">Cancel</button><button class="btn red grow" data-act="doReset">Reset</button></div>`);
  },
  doReset() { resetSave(); closeModal(); UI.screen = "home"; },

  // battle controls
  bSkill(d) { if (!B || !B.awaiting) return; B.sel = +d.i; renderBattle(); },
  bTarget(d) {
    if (!B || !B.awaiting) return;
    const sk = B.actor.template.skills[B.sel];
    const valid = battleTargetsFor(B.actor, B.sel).map((u) => u.key);
    if (!valid.includes(d.key)) return;
    B.awaiting = false;
    playerAct(B.actor, B.sel, sk.target === "enemy" || sk.target === "ally" ? d.key : null);
  },
  bAuto() { G.settings.auto = !G.settings.auto; save(); renderBattle(); if (G.settings.auto && B && B.awaiting) { B.awaiting = false; aiTurn(B.actor); } },
  bSpeed() { G.settings.speed = G.settings.speed >= 3 ? 1 : G.settings.speed + 1; save(); renderBattle(); },
  bReplayToggle() {
    G.settings.autoReplay = !G.settings.autoReplay; save();
    if (G.settings.autoReplay && !AUTO && B) autoStart(B.idx);
    toast(G.settings.autoReplay ? "Auto-replay on: this stage repeats after each win" : "Auto-replay off after this battle");
    renderBattle();
  },
  bFlee() {
    modal(`<h3>Retreat?</h3><p class="small dim">${B && B.mode === "titan" ? "Damage dealt so far still counts and uses up this try." : "You'll get no rewards for this battle."}</p>
      <div class="row"><button class="btn sec grow" data-act="closeModal">Stay</button><button class="btn red grow" data-act="bFleeYes">Retreat</button></div>`);
  },
  bFleeYes() {
    closeModal();
    if (!B) return;
    if (B.mode === "titan") { B.battle.over = true; B.battle.result = "timeout"; finishBattle(); }
    else {
      B.token = null; B = null; FX.clear(); W3D.unmount(); SOUND.stopMusic(); G.settings.autoReplay = false; render();
      if (AUTO && AUTO.battles) showAutoSummary("stopped by retreat"); else AUTO = null;
    }
  },
  resultNext() { closeModal(); const idx = Math.min(G.cleared, TOTAL_STAGES - 1); startBattle({ mode: "stage", idx }); },
  resultReplay(d) { closeModal(); startBattle({ mode: "stage", idx: +d.idx }); },
  resultBack(d) { closeModal(); FX.clear(); W3D.unmount(); SOUND.stopMusic(); B = null; UI.screen = d.to || "campaign"; render(); },
  resultStopReplay() {
    G.settings.autoReplay = false; save();
    if (B) { clearTimeout(B.replayTimer); clearInterval(B.replayTick); }
    const idx = B ? B.idx : 0;
    showAutoSummary("stopped", `<div class="row"><button class="btn sec grow" data-act="resultReplay" data-idx="${idx}">🔁 Replay</button>
      <button class="btn grow" data-act="resultBack">Map</button></div>`);
  },
});

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-act]");
  if (!el) return;
  const act = el.dataset.act;
  const fn = ACTIONS[act];
  if (!fn) return;
  if (act !== "bTarget") SOUND.play("tap", { volume: 0.45, jitter: 0 });
  fn({ ...el.dataset });
  if ((!act.startsWith("b") || act === "bagSlot") && !B) render();
});

// ---------- battle presentation ----------
function startBattle(cfg) {
  if (window.W3D && W3D.showcaseStop) W3D.showcaseStop(); // free the hero viewer before the battle scene
  const team = G.team.map(heroByUid).filter(Boolean);
  if (!team.length) return toast("Choose at least one hero.");
  // First 3D battle: give the hero models a moment to finish loading.
  if (!G.settings.flat && typeof W3D !== "undefined" && W3D.supported() && !W3D.modelsReady) {
    toast("Loading 3D heroes…");
    W3D.whenReady().then(() => startBattle(cfg));
    return;
  }
  const allies = team.map(unitFromHero);
  let battle;
  if (cfg.mode === "titan") {
    const tp = team.reduce((s, h) => s + power(heroStats(h)), 0) / team.length * 4;
    battle = new Battle(allies, [[titanUnit(tp)]], { titan: true, turnLimit: TITAN_TURNS });
  } else {
    battle = new Battle(allies, stageWaves(cfg.idx).map((w) => w.map(unitFromEnemy)));
  }
  SOUND.startMusic();
  B = { id: ++battleSeq, battle, mode: cfg.mode, idx: cfg.idx, token: {}, actor: null, sel: 0, awaiting: false, skillName: "",
    use3d: !G.settings.flat && typeof W3D !== "undefined" && W3D.supported() };
  renderBattle();
  setTimeout(() => loop(B.token), 400);
}

function battleTargetsFor(u, i) {
  const b = B.battle, sk = u.template.skills[i];
  if (sk.target === "enemy" || sk.target === "ally") return b.validTargets(u, i);
  if (sk.target === "allEnemies") return b.living(b.enemies);
  if (sk.target === "allAllies") return b.living(b.allies);
  return [u];
}

function unitClass(u, targets) {
  return `unit ${B && B.use3d ? "ov3d" : ""} ${u.side} ${u.boss ? "boss" : ""} ${u.titan ? "titan" : ""} ${!u.alive ? "dead" : ""} ${B.actor === u ? "active" : ""} ${targets.includes(u.key) ? "target" + (u.side === "A" ? " ally" : "") : ""}`;
}
function unitHtml(u) {
  const t = { ...u.template, el: u.el };
  if (B.use3d) {
    return `<div class="unit ov3d ${u.side}" data-key="${u.key}">
      <div class="uname"><span class="uel">${ELEMENTS[u.el].icon}</span>${u.titan ? "" : `<span class="ulv">${u.level}</span>`}<span class="unm">${u.titan ? u.name : u.side === "A" ? u.name.split(/[ ,]/)[0] : u.name.replace("Hollow ", "")}</span></div>
      <div class="hp"><b></b><i></i></div><div class="tmb"><i></i></div><div class="fx"></div></div>`;
  }
  return `<div class="unit ${u.side}" data-key="${u.key}">
    <div class="stand" style="animation-delay:${(-Math.random() * 3).toFixed(2)}s">${u.titan
      ? portrait(t, { el: u.el })
      : heroSprite(u.template.id, u.el, { hollow: u.side === "B" })}</div>
    <div class="uname"><span class="uel">${ELEMENTS[u.el].icon}</span>${u.titan ? "" : `<span class="ulv">${u.level}</span>`}<span class="unm">${u.titan ? u.name : u.side === "A" ? u.name.split(/[ ,]/)[0] : u.name.replace("Hollow ", "")}</span></div>
    <div class="hp"><b></b><i></i></div>
    <div class="tmb"><i></i></div>
    <div class="fx"></div>
  </div>`;
}
function updateUnit(el, u, targets) {
  el.className = unitClass(u, targets);
  if (targets.includes(u.key)) el.dataset.act = "bTarget"; else delete el.dataset.act;
  const shield = u.effects.find((e) => e.t === "shield");
  el.querySelector(".hp i").style.width = (u.titan ? 100 : (u.hp / u.maxHp) * 100) + "%";
  el.querySelector(".hp b").style.width = (shield ? Math.min(100, (shield.val / u.maxHp) * 100) : 0) + "%";
  el.querySelector(".tmb i").style.width = Math.min(100, (u.tm / TM_FULL) * 100) + "%";
  const fx = u.effects.map((e) => `<span title="${EFFECTS[e.t].name}">${EFFECTS[e.t].icon}</span>`).join("");
  const fxEl = el.querySelector(".fx");
  if (fxEl.innerHTML !== fx) fxEl.innerHTML = fx;
  if (B.use3d) W3D.setHighlight(u.key, targets.includes(u.key) ? (u.side === "A" ? "#5bd17a" : "#ff5a5a") : B.actor === u ? "#ffcf5a" : null);
}

// 3D: keep each unit's HUD (name, bars, tap area) pinned above its figure.
function placeOverlays() {
  if (!B || !B.use3d) return;
  // Tags sit above each model's head and headgear; nearer units (lower on screen) keep their
  // spot and farther tags that would overlap them move up.
  const tags = [];
  for (const el of $app.querySelectorAll(".ov .unit")) {
    const head = W3D.screen(el.dataset.key, "head"), feet = W3D.screen(el.dataset.key, "feet");
    if (head && feet) tags.push({ el, x: head.x, y: head.y - 34, feet: feet.y, hy: head.y });
  }
  tags.sort((a, b) => b.feet - a.feet);
  tags.forEach((t, i) => {
    for (let j = 0; j < i; j++) { const o = tags[j]; if (Math.abs(o.x - t.x) < 78 && t.y > o.y - 30 && t.y < o.y + 30) t.y = o.y - 30; }
    t.el.style.transform = `translate(${t.x}px, ${t.y}px) translateX(-50%)`;
    t.el.style.height = Math.max(70, t.feet - t.y + 10) + "px";
  });
}
function addEnemies3d(root) {
  const b = B.battle;
  root.querySelectorAll(".ov .unit.B").forEach((el) => el.remove());
  W3D.removeSide("B");
  b.enemies.forEach((u, i) => W3D.addUnit(u, i, b.enemies.length));
  root.querySelector(".ov").insertAdjacentHTML("beforeend", b.enemies.map(unitHtml).join(""));
}
const unitEl = (key) => $app.querySelector(`.unit[data-key="${key}"]`);

function renderBattle() {
  if (!B) return;
  const b = B.battle, a = B.actor;
  let root = $app.querySelector(".battle");
  if (B.use3d && (!root || root.dataset.bid !== String(B.id))) {
    $app.innerHTML = `<div class="battle b3d" data-bid="${B.id}">
      <div class="bhead"></div>
      <div class="stage3d"><div class="ov">${b.allies.map(unitHtml).join("")}</div>
        <div class="skillname"></div><div class="bdesc small"></div></div>
      <div class="skillbar"></div></div>`;
    root = $app.querySelector(".battle");
    W3D.mount(root.querySelector(".stage3d"), { chapter: B.mode === "titan" ? 9 : Math.floor(B.idx / STAGES_PER_CHAPTER), titan: B.mode === "titan" });
    b.allies.forEach((u, i) => W3D.addUnit(u, i, b.allies.length));
    W3D.onFrame(placeOverlays);
    B.domWave = -1;
  }
  if (!B.use3d && (!root || root.dataset.bid !== String(B.id))) {
    const scene = B.mode === "titan" ? titanSceneUrl() : sceneUrl(Math.floor(B.idx / STAGES_PER_CHAPTER));
    $app.innerHTML = `<div class="battle" data-bid="${B.id}" style="background-image:linear-gradient(180deg,#0006,#0000 35%,#0000 60%,#000c),${scene}">
      <div class="bhead"></div><div class="side enemies"></div>
      <div class="skillname"></div><div class="bdesc small"></div>
      <div class="side allies">${b.allies.map(unitHtml).join("")}</div>
      <div class="skillbar"></div></div>`;
    root = $app.querySelector(".battle");
    B.domWave = -1;
  }
  if (B.domWave !== b.wave) {
    if (B.use3d) addEnemies3d(root);
    else root.querySelector(".enemies").innerHTML = b.enemies.map(unitHtml).join("");
    B.domWave = b.wave;
  }
  const manual = B.awaiting && a && a.side === "A";
  const targets = manual ? battleTargetsFor(a, B.sel).map((u) => u.key) : [];
  const info = B.mode === "titan"
    ? `🗿 Titan · Turn ${Math.min(b.bossTurns + 1, TITAN_TURNS)}/${TITAN_TURNS} · 💥 ${fmt(b.titanDamage || 0)}`
    : `Stage ${stageLabel(B.idx)} · Wave ${b.wave + 1}/${b.waves.length}`;
  root.querySelector(".bhead").innerHTML = `<button class="btn sec sm" data-act="bFlee">✕</button><div class="info">${info}</div>
      <button class="btn sec sm" data-act="openSettings" aria-label="Settings">⚙️</button>
      ${B.mode === "stage" ? `<button class="btn sec sm tgl ${G.settings.autoReplay ? "on" : ""}" data-act="bReplayToggle">🔁</button>` : ""}
      <button class="btn sec sm tgl ${G.settings.auto ? "on" : ""}" data-act="bAuto">🤖 Auto</button>
      <button class="btn sec sm" data-act="bSpeed">⏩${G.settings.speed}x</button>`;
  for (const u of b.units) { const el = unitEl(u.key); if (el) updateUnit(el, u, targets); }
  root.querySelector(".skillname").textContent = B.skillName || (manual ? `${a.name}'s turn` : "");
  root.querySelector(".bdesc").textContent = manual ? skillDesc(a.template.skills[B.sel]) : "";
  root.querySelector(".skillbar").innerHTML = manual
    ? a.template.skills.map((s, i) => `<button class="skill ${B.sel === i ? "sel" : ""} ${a.cds[i] ? "cd" : ""}" data-act="bSkill" data-i="${i}">
      ${a.cds[i] ? `<span class="cdn">${a.cds[i]}</span>` : ""}<b>${s.name}</b><span class="dim">${{ enemy: "Single", allEnemies: "All foes", ally: "Ally", allAllies: "All allies", self: "Self" }[s.target]}${s.cd ? ` · ⏳${s.cd}` : ""}</span></button>`).join("")
    : `<div class="hint">${G.settings.auto ? "🤖 Auto battle" : a && a.side === "B" ? "Enemy turn…" : "…"}</div>`;
}

// Floating numbers rise from above the name tag. Several hits on the same unit stack
// upward (and alternate slightly left/right) instead of drawing on top of each other.
function floatAt(key, text, cls) {
  const el = unitEl(key);
  if (!el) return;
  // Newest number starts at the bottom; earlier ones are pushed up a row.
  const live = [...el.querySelectorAll(".float")];
  for (const o of live) o.style.setProperty("--fy", `${(parseFloat(o.style.getPropertyValue("--fy")) || 0) - 30}px`);
  const f = document.createElement("div");
  f.className = "float " + cls; f.textContent = text;
  f.style.setProperty("--fy", "0px");
  f.style.setProperty("--fx", `${live.length % 2 ? 16 : live.length ? -16 : 0}px`);
  el.appendChild(f);
  setTimeout(() => f.remove(), 1100);
}
function animateSprite(unitElement, kind) {
  const armF = unitElement.querySelector(".sp-armf"), armB = unitElement.querySelector(".sp-armb");
  const dur = 420 / G.settings.speed;
  if (!armF) return;
  if (kind === "melee") {
    armF.animate([{ transform: "rotate(0deg)" }, { transform: "rotate(-130deg)", offset: 0.35 }, { transform: "rotate(55deg)", offset: 0.6 }, { transform: "rotate(0deg)" }], { duration: dur, easing: "ease-in-out" });
    armB.animate([{ transform: "rotate(0deg)" }, { transform: "rotate(25deg)", offset: 0.4 }, { transform: "rotate(0deg)" }], { duration: dur });
  } else {
    armF.animate([{ transform: "rotate(0deg)" }, { transform: "rotate(-150deg)", offset: 0.4 }, { transform: "rotate(-150deg)", offset: 0.7 }, { transform: "rotate(0deg)" }], { duration: dur * 1.3, easing: "ease-in-out" });
    armB.animate([{ transform: "rotate(0deg)" }, { transform: "rotate(150deg)", offset: 0.4 }, { transform: "rotate(150deg)", offset: 0.7 }, { transform: "rotate(0deg)" }], { duration: dur * 1.3, easing: "ease-in-out" });
    const aura = unitElement.querySelector(".sp-aura");
    if (aura) aura.animate([{ opacity: 1, transform: "scale(1)" }, { opacity: 1, transform: "scale(1.6)", offset: 0.5 }, { opacity: 1, transform: "scale(1)" }], { duration: dur * 1.3 });
  }
}
function hitShake(key) {
  const el = unitEl(key);
  if (el) el.querySelector(".stand").animate([{ transform: "translateX(0)", filter: "brightness(2.2)" }, { transform: "translateX(-5px)" }, { transform: "translateX(5px)" }, { transform: "translateX(0)", filter: "brightness(1)" }], { duration: 260 });
}

async function showEvents(events, color = "#7dff7a") {
  renderBattle();
  const groups = {};
  for (const e of events) {
    let text = null, cls = "";
    const el = unitEl(e.key);
    const c = el && FX.center(el);
    if (e.type === "dmg") {
      text = (e.crit ? "CRIT " : "") + fmt(e.amount); cls = e.crit ? "crit" : e.em > 1 ? "strong" : e.em < 1 ? "weak" : "";
      if (e.dot) { cls = "text"; text = "☠️ " + fmt(e.amount); }
    } else if (e.type === "heal") { text = "+" + fmt(e.amount); cls = "heal"; }
    else if (e.type === "absorb") { text = "🔰 " + fmt(e.amount); cls = "text"; }
    else if (e.type === "fx") { text = EFFECTS[e.t].icon + " " + EFFECTS[e.t].name; cls = "text"; }
    else if (e.type === "text") { text = e.text; cls = "text"; }
    if (text || e.type === "death") (groups[e.key] = groups[e.key] || []).push({ text, cls, e, c });
  }
  const maxLen = Math.max(0, ...Object.values(groups).map((g) => g.length));
  for (let i = 0; i < maxLen; i++) {
    for (const [key, list] of Object.entries(groups)) {
      const it = list[i];
      if (!it) continue;
      const { e, c } = it;
      if (it.text) floatAt(key, it.text, it.cls);
      if (e.type === "dmg" && !e.dot) SOUND.play(e.crit ? "crit" : "hit", { volume: e.crit ? 1 : 0.8 });
      else if (e.type === "heal") SOUND.play("heal", { volume: 0.5 });
      else if (e.type === "fx") SOUND.play("buff", { volume: 0.35 });
      else if (e.type === "death") SOUND.play(key.startsWith("A") ? "downed" : "kill", { volume: 0.9 });
      if (B && B.use3d) {
        if (e.type === "dmg") {
          W3D.burst(key, e.dot ? "#7dff7a" : color, e.crit); W3D.hit(key, e);
          if (e.crit) { W3D.shake(); NATIVE.haptic("medium"); }
        } else if (e.type === "heal") W3D.heal(key);
        else if (e.type === "fx") W3D.buff(key, EFFECTS[e.t].buff);
        else if (e.type === "death") W3D.die(key);
        continue;
      }
      if (!c) continue;
      if (e.type === "dmg") {
        FX.burst(c.x, c.y, e.dot ? "#7dff7a" : color, e.crit ? 30 : 16, e.crit ? 1.4 : 1);
        hitShake(key);
        if (e.crit) { FX.shake(7); FX.flash(color); NATIVE.haptic("medium"); }
      } else if (e.type === "heal") FX.rise(c.x, c.y, "#7dff7a", 14);
      else if (e.type === "fx") {
        if (e.t === "shield") FX.burst(c.x, c.y, "#7fc8ff", 10, 0.5);
        else FX.rise(c.x, c.y, EFFECTS[e.t].buff ? "#ffd56a" : "#c07aff", 5, EFFECTS[e.t].buff ? "▲" : "▼");
      } else if (e.type === "death") {
        FX.dissolve(c.x, c.y);
      }
    }
    await sleep(170);
  }
}

async function loop(token) {
  while (B && B.token === token) {
    const b = B.battle;
    if (b.over) return finishBattle();
    const u = b.nextActor();
    if (!u) return;
    B.actor = u; B.skillName = "";
    const { events, skip } = b.beginTurn(u);
    if (events.length) { await showEvents(events); await sleep(250); }
    if (B?.token !== token) return;
    if (skip) {
      renderBattle(); await sleep(400);
      if (await endTurnAndCheck(u, token)) return;
      continue;
    }
    if (u.side === "A" && !G.settings.auto) {
      B.sel = 0; B.awaiting = true; B.waitToken = token;
      renderBattle();
      return; // resumes via playerAct
    }
    await doAct(u, b.aiChoose(u), token);
    if (B?.token !== token) return;
    if (await endTurnAndCheck(u, token)) return;
  }
}
async function doAct(u, choice, token) {
  const sk = u.template.skills[choice.skill];
  B.skillName = sk.name;
  renderBattle();
  await sleep(250);
  if (B?.token !== token) return;
  const color = ELEMENTS[u.el].color;
  const events = B.battle.act(u, choice.skill, choice.target);
  const actorEl = unitEl(u.key);
  const hitKeys = [...new Set(events.filter((e) => e.type === "dmg" && e.key !== u.key).map((e) => e.key))];
  if (B.use3d) {
    const melee = sk.mult > 0 && sk.target === "enemy" && spriteKind(u.template.id) === "melee";
    SOUND.play(melee ? "swing" : "cast", { volume: 0.6 });
    await W3D.attack(u.key, hitKeys[0], melee, { ult: choice.skill === 2 || sk.target === "allEnemies", support: sk.mult === 0 });
    if (sk.mult === 0) W3D.cast(u.key, color);
    if (melee) hitKeys.forEach((k) => W3D.slash(k, color));
    else if (hitKeys.length) await Promise.all(hitKeys.map((k) => W3D.projectile(u.key, k, color)));
    if (B?.token !== token) return;
    await showEvents(events, color);
    await W3D.recover(u.key);
    await sleep(250);
    return;
  }
  if (actorEl) {
    const dir = u.side === "A" ? -1 : 1;
    const lunge = sk.mult > 0 && spriteKind(u.template.id) === "melee" ? 26 : 8;
    animateSprite(actorEl, sk.mult > 0 && spriteKind(u.template.id) === "melee" ? "melee" : "cast");
    actorEl.querySelector(".stand").animate([{ transform: "translateY(0) scale(1)" }, { transform: `translateY(${dir * lunge}px) scale(1.08)` }, { transform: "translateY(0) scale(1)" }],
      { duration: 380 / G.settings.speed, easing: "ease-out" });
    if (sk.mult === 0) FX.rise(FX.center(actorEl).x, FX.center(actorEl).y, color, 10);
  }
  if (actorEl && hitKeys.length) {
    const from = FX.center(actorEl);
    const melee = sk.target === "enemy" && u.template.role !== "support";
    if (melee) {
      await sleep(150);
      for (const k of hitKeys) { const el = unitEl(k); if (el) { const c = FX.center(el); FX.slash(c.x, c.y, color); } }
    } else {
      await Promise.all(hitKeys.map((k) => { const el = unitEl(k); return el ? FX.projectile(from, FX.center(el), color) : null; }));
    }
  }
  if (B?.token !== token) return;
  await showEvents(events, color);
  await sleep(380);
}
async function endTurnAndCheck(u, token) {
  const r = B.battle.endTurn(u);
  if (r === "wave") {
    B.skillName = `Wave ${B.battle.wave + 1}!`; renderBattle(); await sleep(700);
  }
  if (B?.token !== token) return true;
  if (B.battle.over) { finishBattle(); return true; }
  return false;
}
async function playerAct(u, skill, target) {
  const token = B.token;
  await doAct(u, { skill, target }, token);
  if (B?.token !== token) return;
  if (await endTurnAndCheck(u, token)) return;
  loop(token);
}
async function aiTurn(u) {
  const token = B.token;
  await doAct(u, B.battle.aiChoose(u), token);
  if (B?.token !== token) return;
  if (await endTurnAndCheck(u, token)) return;
  loop(token);
}

function finishBattle() {
  if (!B || B.finished) return;
  B.finished = true;
  const b = B.battle;
  const team = G.team.map(heroByUid).filter(Boolean);
  if (B.mode === "titan") {
    const dmg = Math.round(b.titanDamage || 0);
    let tier = TITAN_TIERS[0];
    for (const t of TITAN_TIERS) if (dmg >= t.dmg) tier = t;
    G.daily.titanTries = Math.max(0, G.daily.titanTries - 1);
    G.daily.titanBest = Math.max(G.daily.titanBest, dmg);
    G.stats.titanBest = Math.max(G.stats.titanBest, dmg);
    grant(tier); bumpQuest("titan"); save();
    SOUND.stopMusic(); SOUND.play("bigKill"); setTimeout(() => SOUND.play("coin"), 600);
    modal(`<div class="result-title victory">Titan Battle</div>
      <p style="text-align:center;font-size:26px;font-weight:900">💥 ${fmt(dmg)}</p>
      <p style="text-align:center">${rewardText(tier)}</p>
      <div class="col small">${b.allies.map((u) => `<div class="row spread"><span>${u.face} ${u.name}</span><b>${fmt(u.dmgDealt)}</b></div>`).join("")}</div>
      <p class="small dim" style="text-align:center">Tries left today: ${G.daily.titanTries}</p>
      <button class="btn" style="width:100%" data-act="resultBack" data-to="titan">Continue</button>`);
    return;
  }
  const idx = B.idx;
  if (b.result === "victory") {
    if (B.use3d && W3D.victory) W3D.victory("A");
    const first = idx === G.cleared;
    const r = stageRewards(idx, first);
    grant(r);
    const ups = [];
    for (const h of team) { const n = giveXp(h, r.xp); if (n) ups.push(`${HERO[h.id].face} ${HERO[h.id].name.split(/[ ,]/)[0]} → Lv ${h.level}`); }
    const gear = rollStageGear(idx);
    if (first) G.cleared++;
    G.stats.wins++; bumpQuest("win"); save();
    NATIVE.haptic("success");
    SOUND.stopMusic(); SOUND.play("victory", { jitter: 0 }); setTimeout(() => SOUND.play("coin"), 450);
    if (typeof pushProfile === "function") pushProfile();
    const canReplay = G.settings.autoReplay;
    if (canReplay && !AUTO) autoStart(idx);
    autoRecord(true, r, gear);
    if (!canReplay && AUTO) {
      showAutoSummary("auto-replay switched off", `<div class="row"><button class="btn sec grow" data-act="resultReplay" data-idx="${idx}">🔁 Replay</button>
        <button class="btn grow" data-act="resultBack">Map</button></div>`);
      return;
    }
    modal(`<div class="result-title victory">VICTORY</div>
      <p style="text-align:center">${rewardText(r)}<br><span class="small dim">+${fmt(r.xp)} XP each${first ? " · First clear bonus!" : ""}</span></p>
      ${ups.length ? `<div class="small" style="text-align:center;color:var(--good)">${ups.join("<br>")}</div>` : ""}
      ${gear ? `<div style="margin:10px 0">${gearRow(gear)}</div>` : ""}
      ${canReplay ? `<p class="small" style="text-align:center">🔁 Next battle in <b id="replayCount">${AUTO_DELAY_MS / 1000}</b>…</p>
        <p class="small dim" style="text-align:center">This run: ${AUTO.wins} win${AUTO.wins === 1 ? "" : "s"} · 🪙 ${fmt(AUTO.gold)}${AUTO.gear.length ? ` · ${AUTO.gear.length} gear` : ""}</p>
        <button class="btn red" style="width:100%" data-act="resultStopReplay">Stop auto-replay</button>` :
      `<div class="col">${idx + 1 < TOTAL_STAGES && G.cleared > idx ? `<button class="btn" data-act="resultNext">Next Stage ▶</button>` : ""}
        <div class="row"><button class="btn sec grow" data-act="resultReplay" data-idx="${idx}">🔁 Replay</button>
        <button class="btn sec grow" data-act="resultBack">Map</button></div></div>`}`);
    if (canReplay) {
      const token = B.token;
      // Fixed 3-second pause (not sped up by 2x/3x) so the results can be read.
      let left = AUTO_DELAY_MS / 1000;
      B.replayTick = setInterval(() => { left--; const el = document.getElementById("replayCount"); if (el && left > 0) el.textContent = left; }, 1000);
      B.replayTimer = setTimeout(() => { clearInterval(B && B.replayTick); if (B && B.token === token && G.settings.autoReplay) { closeModal(); startBattle({ mode: "stage", idx }); } }, AUTO_DELAY_MS);
    }
  } else {
    G.settings.autoReplay = false; save();
    SOUND.stopMusic(); SOUND.play("downed", { rate: 0.8, jitter: 0 });
    autoRecord(false, null, null);
    if (showAutoSummary("ended by a defeat", `<div class="row"><button class="btn sec grow" data-act="resultReplay" data-idx="${idx}">Retry</button>
      <button class="btn grow" data-act="resultBack" data-to="heroes">Heroes</button></div>`)) return;
    modal(`<div class="result-title defeat">DEFEAT</div>
      <p class="small" style="text-align:center">Tips: level heroes with gold training, equip and upgrade gear, bring elements that beat the enemy, and summon new heroes.</p>
      <div class="row"><button class="btn sec grow" data-act="resultReplay" data-idx="${idx}">Retry</button>
      <button class="btn grow" data-act="resultBack" data-to="heroes">Heroes</button></div>`);
  }
}

// Android hardware back button: close dialogs, leave battles, step back, then exit.
const BACK_TO = { hero: "heroes", equip: "hero", friend: "friends", chat: "friend" };
NATIVE.onBack(() => {
  if (!$modal.classList.contains("hidden")) { closeModal(); return; }
  if (B) { if (!B.finished) ACTIONS.bFlee(); return; }
  if (UI.screen === "chat" && typeof stopChat === "function") stopChat();
  if (UI.screen === "prep") UI.screen = (UI.prep && UI.prep.back) || "home";
  else if (BACK_TO[UI.screen]) UI.screen = BACK_TO[UI.screen];
  else if (UI.screen !== "home") UI.screen = "home";
  else return NATIVE.exit();
  render();
});

// Volume sliders in Settings: apply live, preview the effects level, save when released.
document.addEventListener("input", (e) => {
  const id = e.target.id;
  if (id !== "musicVol" && id !== "sfxVol") return;
  const v = Number(e.target.value) / 100;
  G.settings[id] = v;
  if (id === "musicVol") { G.settings.music = v > 0; } else { G.settings.sound = v > 0; }
  const label = document.getElementById(id + "Label");
  if (label) label.textContent = v ? Math.round(v * 100) + "%" : "Off";
  SOUND.applyVolumes();
});
document.addEventListener("change", (e) => {
  if (e.target.id !== "musicVol" && e.target.id !== "sfxVol") return;
  save();
  if (e.target.id === "sfxVol") SOUND.play("confirm", { jitter: 0 });
  if (e.target.id === "musicVol" && Number(e.target.value) > 0 && !B) SOUND.play("tap", { jitter: 0 });
});

render();

// Card faces: shoot every hero's 3D face in the background, then refresh the screen.
if (window.W3D && W3D.face) {
  W3D.onFaces(() => { if (!B) render(); });
  HEROES.forEach((h) => W3D.face(h.id, h.el));
}
