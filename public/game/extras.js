// Sigilbound — extra features: battle turn-order bar, Hard campaign, Achievements, Hero Codex.
// Loaded after modes.js. Plugs into SCREENS / ACTIONS / MODES and wraps renderBattle.

// ---------- turn-order bar ----------
// Predicts the next actors by simulating the turn meters (same rule as Battle.nextActor).
function predictTurns(b, n = 7) {
  const sim = b.living(b.units).map((u) => ({ u, tm: u.tm, spd: b.speed(u) }));
  const out = [];
  for (let guard = 0; out.length < n && guard < 5000; guard++) {
    const ready = sim.filter((s) => s.tm >= TM_FULL);
    if (ready.length) {
      ready.sort((a, c) => c.tm - a.tm || c.spd - a.spd);
      out.push(ready[0].u); ready[0].tm = 0; continue;
    }
    for (const s of sim) s.tm += s.spd * 0.7;
  }
  return out;
}
function turnBarHtml() {
  const b = B.battle;
  const list = predictTurns(b);
  return list.map((u, i) => {
    const img = window.W3D && W3D.face && !u.titan ? W3D.face(u.template.id, u.el, u.side === "B" && !u.rival) : null;
    return `<span class="tb ${u.side === "A" ? "ally" : "foe"} ${i === 0 && B.actor === u ? "now" : ""}" title="${u.name}">${img ? `<img src="${img}" alt="">` : `<i>${u.face || "?"}</i>`}</span>`;
  }).join("");
}
const _renderBattleBase = renderBattle;
renderBattle = function () {
  _renderBattleBase();
  if (!B || !B.battle || B.battle.over) return;
  const root = $app.querySelector(".battle");
  if (!root) return;
  let bar = root.querySelector(".turnbar");
  if (!bar) {
    bar = document.createElement("div"); bar.className = "turnbar";
    root.querySelector(".bhead").after(bar);
    setTimeout(() => window.dispatchEvent(new Event("resize")), 0); // let the 3D view re-fit the slightly shorter stage
  }
  bar.innerHTML = `<span class="tblabel">Next</span>${turnBarHtml()}`;
};

// ---------- Hard campaign ----------
// Every cleared Normal stage can be replayed on Hard: much tougher enemies, double gold,
// more XP and better gear. Hard stages unlock in order.
const HARD = { mul: 1.6, lvl: 10, gold: 2, xp: 1.5 };
const hardCleared = () => G.hardCleared || 0;
const hardOpen = (idx) => idx < G.cleared && idx <= hardCleared();
function hardWaves(idx) {
  return stageWaves(idx).map((w) => w.map((e) => ({ ...e, mul: e.mul * HARD.mul, shownLevel: e.shownLevel + HARD.lvl })));
}
function hardRewards(idx, first) {
  const base = stageRewards(idx, false);
  const r = { gold: Math.round(base.gold * HARD.gold), xp: Math.round(base.xp * HARD.xp) };
  if (first) { r.common = 1; if (isBossStage(idx)) r.mystic = 1; }
  return r;
}
function hardGear(idx) {
  const chapter = Math.floor(idx / STAGES_PER_CHAPTER);
  const rarity = Math.min(5, 2 + Math.floor(chapter / 2) + (isBossStage(idx) ? 1 : 0));
  return makeGear(rarity);
}
MODES.hard = {
  makeBattle(allies, cfg) { return new Battle(allies, hardWaves(cfg.idx).map((w) => w.map(unitFromEnemy))); },
  scene: (B) => ({ chapter: Math.floor(B.cfg.idx / STAGES_PER_CHAPTER), titan: false }),
  info: (B, b) => `💀 Hard ${stageLabel(B.cfg.idx)} · Wave ${b.wave + 1}/${b.waves.length}`,
  finish(B, b, team) {
    const idx = B.cfg.idx;
    if (b.result !== "victory") {
      SOUND.stopMusic(); SOUND.play("downed", { rate: 0.8, jitter: 0 });
      return modal(`<div class="result-title defeat">DEFEAT</div><p class="small dim" style="text-align:center">Hard stages hit much harder. Level up, upgrade gear and try again.</p>
        <div class="row"><button class="btn sec grow" data-act="hardGo" data-idx="${idx}">Retry</button>
        <button class="btn grow" data-act="resultBack" data-to="campaign">Map</button></div>`);
    }
    if (B.use3d && W3D.victory) W3D.victory("A");
    const first = idx === hardCleared();
    if (first) G.hardCleared = idx + 1;
    const r = hardRewards(idx, first);
    grant(r);
    const ups = [];
    for (const h of team) { if (giveXp(h, r.xp)) ups.push(`${HERO[h.id].face} ${HERO[h.id].name.split(/[ ,]/)[0]} → Lv ${h.level}`); }
    const gear = hardGear(idx);
    G.stats.wins++; bumpQuest("win"); save();
    NATIVE.haptic("success"); SOUND.stopMusic(); SOUND.play("victory", { jitter: 0 }); setTimeout(() => SOUND.play("coin"), 450);
    const next = idx + 1;
    modal(`<div class="result-title victory">HARD CLEARED</div>
      <p style="text-align:center">${rewardText(r)}<br><span class="small dim">+${fmt(r.xp)} XP each${first ? " · First Hard clear!" : ""}</span></p>
      ${ups.length ? `<div class="small" style="text-align:center;color:var(--good)">${ups.join("<br>")}</div>` : ""}
      <div style="margin:10px 0">${gearRow(gear)}</div>
      <div class="col">${hardOpen(next) ? `<button class="btn" data-act="hardGo" data-idx="${next}">Hard ${stageLabel(next)} ▶</button>` : ""}
        <div class="row"><button class="btn sec grow" data-act="hardGo" data-idx="${idx}">🔁 Replay</button>
        <button class="btn sec grow" data-act="resultBack" data-to="campaign">Map</button></div></div>`);
  },
};
// Campaign screen: a Normal / Hard switch. Hard shows the same chapters with Hard stage buttons.
const _campaignBase = SCREENS.campaign;
SCREENS.campaign = function () {
  const tabs = `<div class="row" style="gap:6px"><button class="chip ${UI.hard ? "" : "on"}" data-act="campMode" data-h="0">Normal</button>
    <button class="chip ${UI.hard ? "on" : ""} ${G.cleared ? "" : "off"}" data-act="campMode" data-h="1">💀 Hard</button>
    <span class="small dim" style="margin-left:auto">${UI.hard ? `Hard ${hardCleared()}/${G.cleared}` : ""}</span></div>`;
  if (!UI.hard) return tabs + _campaignBase();
  const open = UI.chapterOpen ?? Math.min(CHAPTERS.length - 1, Math.floor(hardCleared() / STAGES_PER_CHAPTER));
  return tabs + `<h2>Hard Campaign</h2><p class="small dim">Replay stages you've cleared on Normal. Enemies are about 60% stronger and 10 levels higher, but pay double gold, extra XP and better gear.</p>` +
    CHAPTERS.map((name, c) => {
      const first = c * STAGES_PER_CHAPTER;
      const locked = first >= G.cleared || first > hardCleared();
      const done = Math.max(0, Math.min(STAGES_PER_CHAPTER, hardCleared() - first));
      return `<div class="card chapter" style="background-image:linear-gradient(90deg,#1a0a0ae6 30%,#1a0a0a80),${sceneUrl(c)};${locked ? "opacity:.45" : ""}">
        <button class="row spread" style="background:none;width:100%;padding:0;text-align:left" data-act="toggleChapter" data-c="${c}">
          <div><h3>💀 ${c + 1}. ${name}</h3><div class="small dim">Lv ${stageLevel(first) + HARD.lvl}–${stageLevel(first + 5) + HARD.lvl} · ${done}/${STAGES_PER_CHAPTER}</div></div>
          <span>${locked ? "🔒" : open === c ? "▾" : "▸"}</span></button>
        ${open === c && !locked ? `<div class="stages">${Array.from({ length: STAGES_PER_CHAPTER }, (_, s) => {
          const idx = first + s;
          const cls = idx < hardCleared() ? "done" : hardOpen(idx) ? "next" : "lock";
          return `<button class="stage ${cls} ${isBossStage(idx) ? "boss" : ""}" data-act="${cls === "lock" ? "noop" : "hardGo"}" data-idx="${idx}">${isBossStage(idx) ? "💀" : stageLabel(idx)}</button>`;
        }).join("")}</div>` : ""}</div>`;
    }).join("");
};

// ---------- Achievements ----------
const ACHIEVEMENTS = [
  { id: "win10", name: "First Steps", desc: "Win 10 battles", goal: 10, get: () => G.stats.wins, reward: { gold: 3000 } },
  { id: "win100", name: "Seasoned", desc: "Win 100 battles", goal: 100, get: () => G.stats.wins, reward: { gold: 15000, common: 2 } },
  { id: "win500", name: "Warlord", desc: "Win 500 battles", goal: 500, get: () => G.stats.wins, reward: { mystic: 3 } },
  { id: "ch1", name: "Sigil Bearer", desc: "Clear chapter 1", goal: 6, get: () => G.cleared, reward: { common: 2 } },
  { id: "ch5", name: "Halfway There", desc: "Clear chapter 5", goal: 30, get: () => G.cleared, reward: { mystic: 2 } },
  { id: "ch10", name: "Sigil Restored", desc: "Clear the whole campaign", goal: 60, get: () => G.cleared, reward: { radiant: 2 } },
  { id: "hard6", name: "No Mercy", desc: "Clear Hard chapter 1", goal: 6, get: () => hardCleared(), reward: { mystic: 1 } },
  { id: "hard30", name: "Iron Will", desc: "Clear Hard chapter 5", goal: 30, get: () => hardCleared(), reward: { radiant: 1 } },
  { id: "heroes10", name: "Growing Banner", desc: "Own 10 heroes", goal: 10, get: () => G.heroes.length, reward: { common: 2 } },
  { id: "codex24", name: "Collector", desc: "Discover all 24 heroes", goal: 24, get: () => new Set(G.heroes.map((h) => h.id)).size, reward: { radiant: 2 } },
  { id: "summon50", name: "Shard Caller", desc: "Summon 50 times", goal: 50, get: () => G.stats.summons || 0, reward: { mystic: 2 } },
  { id: "star6", name: "Ascended", desc: "Raise a hero to 6★", goal: 1, get: () => G.heroes.some((h) => h.stars >= 6) ? 1 : 0, reward: { radiant: 1 } },
  { id: "lv60", name: "Paragon", desc: "Reach level 60 with a hero", goal: 60, get: () => Math.max(0, ...G.heroes.map((h) => h.level)), reward: { mystic: 2 } },
  { id: "gear10", name: "Master Smith", desc: "Upgrade a gear piece to +10", goal: 10, get: () => Math.max(0, ...G.gear.map((g) => g.level)), reward: { gold: 20000 } },
  { id: "titan", name: "Titan Slayer", desc: "Deal 1M damage to the Titan in one try", goal: 1e6, get: () => G.stats.titanBest || 0, reward: { mystic: 2 } },
  { id: "dungeon", name: "Delver", desc: "Clear floor 10 of any dungeon", goal: 10, get: () => G.modes ? Math.max(...Object.values(G.modes.dungeon || { a: 0 })) : 0, reward: { mystic: 2 } },
  { id: "arena", name: "Gladiator", desc: "Reach Gold rank in the Arena", goal: 1300, get: () => G.modes && G.modes.arena ? G.modes.arena.best : 1000, reward: { mystic: 2 } },
];
const achClaimed = () => (G.ach || (G.ach = {}));
const achReady = () => ACHIEVEMENTS.filter((a) => !achClaimed()[a.id] && a.get() >= a.goal).length;
SCREENS.achievements = function () {
  const done = ACHIEVEMENTS.filter((a) => achClaimed()[a.id]).length;
  return `<div class="row spread"><button class="btn sec sm" data-act="go" data-to="home">‹ Home</button><span class="small dim">${done}/${ACHIEVEMENTS.length} claimed</span></div>
    <h2>Achievements</h2>
    <div class="card">${ACHIEVEMENTS.map((a) => {
      const v = Math.min(a.goal, a.get()), ok = v >= a.goal, claimed = achClaimed()[a.id];
      return `<div class="quest"><div class="grow"><div class="small"><b>${a.name}</b> · <span class="dim">${a.desc}</span></div>
        <div class="bar" style="margin:4px 0"><i style="width:${(v / a.goal) * 100}%"></i></div>
        <div class="small dim">${a.goal >= 1e4 ? fmt(v) + "/" + fmt(a.goal) : v + "/" + a.goal} · ${rewardText(a.reward)}</div></div>
        <button class="btn sm ${ok && !claimed ? "" : "off"}" data-act="claimAch" data-id="${a.id}">${claimed ? "✓" : "Claim"}</button></div>`;
    }).join("")}</div>`;
};

// ---------- Hero Codex ----------
const _heroesBase = SCREENS.heroes;
SCREENS.heroes = function () {
  const owned = new Set(G.heroes.map((h) => h.id));
  if (UI.tab !== "codex") {
    // add the Codex chip to the existing tab row
    return _heroesBase().replace(`</button></div>`, `</button><button class="chip" data-act="tab" data-t="codex">Codex (${owned.size}/${HEROES.length})</button></div>`);
  }
  const order = RARITY_KEYS;
  return `<div class="tabs"><button class="chip" data-act="tab" data-t="roster">Heroes (${G.heroes.length})</button>
      <button class="chip" data-act="tab" data-t="bag">Gear (${G.gear.length})</button>
      <button class="chip on" data-act="tab" data-t="codex">Codex (${owned.size}/${HEROES.length})</button></div>
    <p class="small dim">Every hero in Sigilbound. Undiscovered heroes can be summoned with shards.</p>
    ${order.map((r) => {
      const list = HEROES.filter((t) => t.rarity === r);
      if (!list.length) return "";
      return `<h3 style="color:${RARITY[r].color}">${RARITY[r].name}</h3><div class="grid">${list.map((t) =>
        `<button class="hcell ${owned.has(t.id) ? "" : "unknown"}" data-act="codexHero" data-id="${t.id}">${portrait(t)}<div class="nm">${owned.has(t.id) ? t.name.split(/[ ,]/)[0] : "???"}</div></button>`).join("")}</div>`;
    }).join("")}`;
};

Object.assign(ACTIONS, {
  campMode(d) { UI.hard = d.h === "1" && G.cleared > 0; UI.chapterOpen = undefined; },
  hardGo(d) {
    closeModal();
    if (B) { FX.clear(); W3D.unmount(); B = null; }
    const idx = +d.idx;
    if (!hardOpen(idx)) return toast("Clear the previous Hard stage first.");
    startBattle({ mode: "hard", idx });
  },
  claimAch(d) {
    const a = ACHIEVEMENTS.find((x) => x.id === d.id);
    if (!a || achClaimed()[a.id] || a.get() < a.goal) return;
    achClaimed()[a.id] = 1; grant(a.reward); save();
    SOUND.play("coin"); toast(`${a.name}: ${rewardText(a.reward)}`);
  },
  codexHero(d) {
    const t = HERO[d.id], known = G.heroes.some((h) => h.id === t.id);
    modal(`<div class="row" style="gap:12px">${portrait(t, { big: true })}<div><h3>${known ? t.name : "Undiscovered hero"}</h3>
        <div class="small" style="color:${RARITY[t.rarity].color}">${RARITY[t.rarity].name}</div>
        <div class="small dim">${ELEMENTS[t.el].icon} ${ELEMENTS[t.el].name} · ${ROLES[t.role].icon} ${ROLES[t.role].name}</div></div></div>
      <div class="col" style="margin-top:10px">${t.skills.map((s, i) => `<div class="skillrow"><b>A${i + 1} · ${known ? s.name : "???"}</b><div class="small dim">${skillDesc(s)}</div></div>`).join("")}</div>
      <p class="small dim">${known ? "In your roster." : `Found through ${t.rarity === "legendary" || t.rarity === "epic" ? "Mystic or Radiant" : "any"} shard summons.`}</p>
      <button class="btn" style="width:100%" data-act="closeModal">Close</button>`);
  },
});

// Home: an Achievements card (with a ready count), right under Daily Quests.
const _homeBase = SCREENS.home;
SCREENS.home = function () {
  const html = _homeBase();
  const n = achReady();
  const card = `<button class="card row spread" style="width:100%;text-align:left" data-act="go" data-to="achievements">
    <div><h3>🏆 Achievements</h3><div class="small dim">${ACHIEVEMENTS.filter((a) => achClaimed()[a.id]).length}/${ACHIEVEMENTS.length} claimed · one-time rewards for milestones</div></div>
    ${n ? `<span class="chip on">${n} ready</span>` : "<span>▸</span>"}</button>`;
  const at = html.indexOf(`<div class="card"><div class="row spread"><h3>Your Team</h3>`);
  return at >= 0 ? html.slice(0, at) + card + html.slice(at) : html + card;
};
const _homeBadgeBase = homeBadge;
homeBadge = function () { return _homeBadgeBase() + achReady(); };
BACK_TO.achievements = "home";

if (!B) render();
