// Sigilbound — extra game modes: the Trials hub (Titan, Dungeons, Arena) and first-time tips.
// Loaded after ui.js; extends SCREENS / ACTIONS and plugs into startBattle / finishBattle via MODES.
// Everything is earned by playing: daily runs reset each day, nothing is sold.

// ---------- tuning ----------
const DUNGEON_FLOORS = 10;
const DUNGEON_RUNS = 3;          // winning runs per dungeon per day (losses are free)
const DUNGEON_UNLOCK = 6;        // campaign stages cleared (end of chapter 1)
const ARENA_UNLOCK = 12;         // end of chapter 2
const ARENA_TRIES = 5;
const DUNGEONS = {
  vault: { name: "Gilded Vault", icon: "🪙", reward: "Gold", chapter: 4,
    blurb: "Hoard-guards defend the old treasury. Big gold payouts for upgrading gear and training heroes." },
  trial: { name: "Hall of Echoes", icon: "📜", reward: "Hero XP + Essence", chapter: 2,
    blurb: "Echoes of past champions. Every hero on your team earns a large amount of XP." },
  forge: { name: "Sigil Forge", icon: "⚒️", reward: "Gear of the set you choose", chapter: 9,
    blurb: "Pick a gear set before you fight. Higher floors drop rarer pieces." },
};
const DUNGEON_KEYS = Object.keys(DUNGEONS);
const ARENA_TIERS = [
  { name: "Bronze", icon: "🥉", min: 0, week: { gold: 5000, common: 1 } },
  { name: "Silver", icon: "🥈", min: 1150, week: { gold: 10000, common: 2 } },
  { name: "Gold", icon: "🥇", min: 1300, week: { gold: 18000, common: 2, mystic: 1, tome: 1 } },
  { name: "Platinum", icon: "💎", min: 1500, week: { gold: 30000, common: 3, mystic: 2, tome: 2 } },
  { name: "Sigil", icon: "🔱", min: 1700, week: { gold: 50000, mystic: 3, radiant: 1, tome: 3 } },
];
const RIVAL_ADJ = ["Ashen", "Gilded", "Hollowmoor", "Sunken", "Thorn", "Lantern", "Iron", "Moonlit", "Ember", "Silent", "Stormward", "Briar", "Duskwatch", "Saltmarsh", "Riven", "Copper"];
const RIVAL_NOUN = ["Ravens", "Wardens", "Pilgrims", "Lanterns", "Oaths", "Foxes", "Covenant", "Bellringers", "Hounds", "Circle", "Vanguard", "Wayfarers", "Sigilborn", "Tide-callers", "Kestrels", "Banner"];

// ---------- state ----------
function ensureModes() {
  ensureDaily();
  const M = G.modes || (G.modes = {});
  M.dungeon = M.dungeon || { vault: 0, trial: 0, forge: 0 };   // floors cleared
  M.forgeSet = M.forgeSet || GEAR_SET_KEYS[0];
  M.arena = M.arena || { points: 1000, best: 1000, wins: 0, losses: 0, week: weekKey(), seed: 1, pending: null };
  M.tips = M.tips || {};
  G.daily.dRuns = G.daily.dRuns || { vault: DUNGEON_RUNS, trial: DUNGEON_RUNS, forge: DUNGEON_RUNS };
  if (G.daily.arenaTries == null) G.daily.arenaTries = ARENA_TRIES;
  // Weekly arena reset: pay out the tier you finished in, then soften points toward 1000.
  const wk = weekKey();
  if (M.arena.week !== wk) {
    if (M.arena.wins + M.arena.losses > 0) M.arena.pending = { tier: arenaTier(M.arena.points).name };
    M.arena.points = Math.round(1000 + (M.arena.points - 1000) * 0.5);
    M.arena.wins = 0; M.arena.losses = 0; M.arena.week = wk;
  }
  return M;
}
function weekKey(d = new Date()) {
  const m = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() - ((d.getUTCDay() + 6) % 7)));
  return m.toISOString().slice(0, 10); // Monday of this week (UTC)
}
const arenaTier = (pts) => [...ARENA_TIERS].reverse().find((t) => pts >= t.min) || ARENA_TIERS[0];
const dungeonsOpen = () => G.cleared >= DUNGEON_UNLOCK;
const arenaOpen = () => G.cleared >= ARENA_UNLOCK;
const todayElement = () => ELEMENT_KEYS[Math.floor(Date.now() / 864e5) % ELEMENT_KEYS.length];
const teamHeroes = () => G.team.map(heroByUid).filter(Boolean);
const teamPower = () => teamHeroes().reduce((s, h) => s + power(heroStats(h)), 0);

// ---------- dungeons ----------
const dungeonIdx = (f) => Math.min(TOTAL_STAGES - 1, Math.round(f * 6.3));
function dungeonWaves(key, f) {
  const idx = dungeonIdx(f);
  const rng = seeded(1000 + DUNGEON_KEYS.indexOf(key) * 97 + f * 13);
  const g = enemyGrade(idx), el = todayElement();
  const waves = [], count = f >= 5 ? 3 : 2, boss = f === 4 || f === 9;
  for (let w = 0; w < count; w++) {
    const wave = [];
    for (let i = 0; i < 3; i++) {
      const t = HEROES[Math.floor(rng() * HEROES.length)];
      wave.push({ template: t, ...g, shownLevel: stageLevel(idx), el: rng() < 0.6 ? el : t.el });
    }
    if (boss && w === count - 1) wave[1] = { ...wave[1], boss: true, shownLevel: stageLevel(idx) + 2, el };
    waves.push(wave);
  }
  return waves;
}
function dungeonRewards(key, f, first) {
  const idx = dungeonIdx(f), lvl = stageLevel(idx), r = {};
  if (key === "vault") r.gold = Math.round(1500 * Math.pow(f + 1, 1.5));
  if (key === "trial") { r.xp = Math.round(stageRewards(idx, false).xp * 3); r.essence = 5 + f * 3; }
  if (key === "forge") r.gold = Math.round(150 + lvl * 20);
  if (first) { r.common = 1; if (f === 4 || f === 9) { r.mystic = 1; r.tome = 1; } }
  return r;
}
function forgeDrops(f) {
  const set = ensureModes().forgeSet;
  const r = Math.min(5, 1 + Math.floor(f / 2));
  const mk = (rar) => { const g = makeGear(rar); g.set = set; return g; };
  const out = [mk(r)];
  if (Math.random() < 0.35) out.push(mk(Math.max(1, r - 1)));
  return out;
}

// ---------- arena ----------
function rivalsFor(seed) {
  const rng = seeded(seed * 31 + 7);
  const team = teamHeroes();
  const n = Math.max(3, Math.min(4, team.length || 3));
  const avgLv = team.length ? Math.round(team.reduce((s, h) => s + h.level, 0) / team.length) : 5;
  const avgSt = team.length ? Math.round(team.reduce((s, h) => s + h.stars, 0) / team.length) : 2;
  const P = Math.max(2000, teamPower());
  return [["Easy", 0.8, 14], ["Even", 0.95, 20], ["Hard", 1.08, 28]].map(([label, mul, gain]) => {
    const ids = [];
    while (ids.length < n) { const t = HEROES[Math.floor(rng() * HEROES.length)]; if (!ids.includes(t.id)) ids.push(t.id); }
    const name = `${RIVAL_ADJ[Math.floor(rng() * RIVAL_ADJ.length)]} ${RIVAL_NOUN[Math.floor(rng() * RIVAL_NOUN.length)]}`;
    const lv = Math.max(1, avgLv + Math.round((mul - 1) * 20)), st = Math.max(1, Math.min(6, avgSt + (mul > 1.05 ? 1 : 0)));
    return { label, mul, gain, name, ids, level: lv, stars: st, power: Math.round(P * mul * n / Math.max(1, team.length || n)) };
  });
}
function rivalUnits(rv) {
  const perUnit = rv.power / rv.ids.length;
  const gr = Math.min(5, 1 + Math.floor(rv.level / 12));
  return rv.ids.map((id) => {
    const t = HERO[id], s = baseStats(t, rv.level, rv.stars, t.el);
    const core = s.hp / 10 + s.atk * 2 + s.def * 1.5, rest = power(s) - core;
    const k = Math.max(0.5, Math.min(3, (perUnit - rest) / core));
    return makeUnit("B", t, { el: s.el, hp: Math.round(s.hp * k), atk: Math.round(s.atk * k), def: Math.round(s.def * k), spd: s.spd, crit: s.crit, cdmg: s.cdmg },
      { level: rv.level, stars: rv.stars, rival: true, name: t.name.split(/[ ,]/)[0],
        gear: { helm: { r: gr, s: "" }, chest: { r: gr, s: "" }, boots: { r: gr, s: "" }, weapon: { r: gr, s: "" } } });
  });
}

// ---------- battle hooks (used by startBattle / finishBattle / renderBattle in ui.js) ----------
const MODES = {
  dungeon: {
    makeBattle(allies, cfg) { return new Battle(allies, dungeonWaves(cfg.key, cfg.floor).map((w) => w.map(unitFromEnemy))); },
    scene: (B) => ({ chapter: DUNGEONS[B.cfg.key].chapter, titan: false }),
    info: (B, b) => `${DUNGEONS[B.cfg.key].icon} ${DUNGEONS[B.cfg.key].name} · Floor ${B.cfg.floor + 1} · Wave ${b.wave + 1}/${b.waves.length}`,
    finish(B, b, team) {
      const M = ensureModes(), { key, floor } = B.cfg, D = DUNGEONS[key];
      if (b.result !== "victory") {
        SOUND.stopMusic(); SOUND.play("downed", { rate: 0.8, jitter: 0 });
        return modal(`<div class="result-title defeat">DEFEAT</div><p class="small dim" style="text-align:center">No run used. Strengthen your team and try again.</p>
          <div class="row"><button class="btn sec grow" data-act="dungeonGo" data-k="${key}" data-f="${floor}">Retry</button>
          <button class="btn grow" data-act="resultBack" data-to="dungeon">Back</button></div>`);
      }
      if (B.use3d && W3D.victory) W3D.victory("A");
      const first = floor >= M.dungeon[key];
      if (first) M.dungeon[key] = floor + 1;
      G.daily.dRuns[key] = Math.max(0, G.daily.dRuns[key] - 1);
      const r = dungeonRewards(key, floor, first);
      grant(r);
      const ups = [];
      if (r.xp) for (const h of team) { if (giveXp(h, r.xp)) ups.push(`${HERO[h.id].face} ${HERO[h.id].name.split(/[ ,]/)[0]} → Lv ${h.level}`); }
      const drops = key === "forge" ? forgeDrops(floor) : [];
      G.stats.wins++; bumpQuest("win"); save();
      NATIVE.haptic("success"); SOUND.stopMusic(); SOUND.play("victory", { jitter: 0 }); setTimeout(() => SOUND.play("coin"), 450);
      const left = G.daily.dRuns[key];
      modal(`<div class="result-title victory">FLOOR ${floor + 1} CLEARED</div>
        <p style="text-align:center">${rewardText(r)}${r.xp ? `<br><span class="small dim">+${fmt(r.xp)} XP each</span>` : ""}${first ? `<br><span class="small dim">First clear bonus!</span>` : ""}</p>
        ${ups.length ? `<div class="small" style="text-align:center;color:var(--good)">${ups.join("<br>")}</div>` : ""}
        ${drops.map((g) => `<div style="margin:8px 0">${gearRow(g)}</div>`).join("")}
        <p class="small dim" style="text-align:center">${D.name}: ${left} run${left === 1 ? "" : "s"} left today</p>
        <div class="col">${left && floor + 1 < DUNGEON_FLOORS ? `<button class="btn" data-act="dungeonGo" data-k="${key}" data-f="${floor + 1}">Floor ${floor + 2} ▶</button>` : ""}
          <div class="row">${left ? `<button class="btn sec grow" data-act="dungeonGo" data-k="${key}" data-f="${floor}">🔁 Again</button>` : ""}
          <button class="btn sec grow" data-act="resultBack" data-to="dungeon">Back</button></div></div>`);
    },
  },
  arena: {
    makeBattle(allies, cfg) { return new Battle(allies, [rivalUnits(cfg.rival)]); },
    scene: (B) => ({ chapter: 4 + (B.cfg.rival.ids.length % 5), titan: false }),
    info: (B) => `⚔️ Arena · vs ${B.cfg.rival.name}`,
    finish(B, b, team) {
      const M = ensureModes(), A = M.arena, rv = B.cfg.rival;
      G.daily.arenaTries = Math.max(0, G.daily.arenaTries - 1);
      const before = arenaTier(A.points);
      const win = b.result === "victory";
      const delta = win ? rv.gain : -8;
      A.points = Math.max(0, A.points + delta); A.best = Math.max(A.best, A.points);
      if (win) A.wins++; else A.losses++;
      A.seed++;
      const r = win ? { gold: Math.round(400 + rv.level * 40) } : {};
      if (win) { grant(r); G.stats.wins++; bumpQuest("win"); }
      save();
      const after = arenaTier(A.points);
      SOUND.stopMusic();
      if (win) { if (B.use3d && W3D.victory) W3D.victory("A"); SOUND.play("victory", { jitter: 0 }); NATIVE.haptic("success"); }
      else SOUND.play("downed", { rate: 0.8, jitter: 0 });
      modal(`<div class="result-title ${win ? "victory" : "defeat"}">${win ? "VICTORY" : "DEFEAT"}</div>
        <p style="text-align:center">vs ${rv.name}<br><b style="font-size:20px;color:${win ? "var(--good)" : "var(--bad)"}">${delta > 0 ? "+" : ""}${delta}</b> points → <b>${A.points}</b></p>
        ${after.name !== before.name ? `<p style="text-align:center;font-size:18px">${after.icon} <b>${after.name}</b> rank${win ? " reached!" : ""}</p>` : ""}
        ${win ? `<p style="text-align:center">${rewardText(r)}</p>` : ""}
        <p class="small dim" style="text-align:center">Fights left today: ${G.daily.arenaTries}</p>
        <button class="btn" style="width:100%" data-act="resultBack" data-to="arena">Continue</button>`);
    },
  },
};
// Current scene for a battle (used for the 3D arena and the 2D backdrop).
function battleScene(B) {
  if (MODES[B.mode] && MODES[B.mode].scene) return MODES[B.mode].scene(B);
  return { chapter: B.mode === "titan" ? 9 : Math.floor(B.idx / STAGES_PER_CHAPTER), titan: B.mode === "titan" };
}

// ---------- screens ----------
function trialsBadge() {
  if (!G.daily) return 0;
  ensureModes();
  let n = G.daily.titanTries || 0;
  if (dungeonsOpen()) n += DUNGEON_KEYS.reduce((s, k) => s + (G.daily.dRuns[k] ? 1 : 0), 0);
  if (arenaOpen() && G.daily.arenaTries) n += 1;
  return n;
}
Object.assign(SCREENS, {
  trials() {
    const M = ensureModes(), A = M.arena, tier = arenaTier(A.points);
    const card = (act, icon, title, sub, open, lockText, badge) => `<button class="card row" style="width:100%;text-align:left;gap:12px;${open ? "" : "opacity:.5"}" data-act="${open ? act : "noop"}">
      <div style="font-size:34px;width:46px;text-align:center">${icon}</div>
      <div class="grow"><h3>${title}</h3><div class="small dim">${open ? sub : lockText}</div></div>
      ${open && badge ? `<span class="chip on">${badge}</span>` : open ? "" : "🔒"}</button>`;
    return `<h2>Trials</h2>
      ${card("goTitan", "🗿", TITAN.name, `Daily boss · ${ELEMENTS[titanElement()].icon} today · ${G.daily.titanTries}/3 tries`, true, "", G.daily.titanTries ? `${G.daily.titanTries} left` : "")}
      ${card("goDungeon", "🏛️", "Dungeons", `Gold, hero XP and the gear set you want · today's foes: ${ELEMENTS[todayElement()].icon} ${ELEMENTS[todayElement()].name}`, dungeonsOpen(), `Unlocks after clearing stage 1-6`, DUNGEON_KEYS.reduce((s, k) => s + G.daily.dRuns[k], 0) + " runs")}
      ${card("goArena", "⚔️", "Arena", `${tier.icon} ${tier.name} · ${A.points} points · ${G.daily.arenaTries}/${ARENA_TRIES} fights today`, arenaOpen(), `Unlocks after clearing stage 2-6`, G.daily.arenaTries ? `${G.daily.arenaTries} left` : "")}
      <div class="small dim" style="text-align:center">Everything resets daily. All rewards are earned by playing — there is nothing to buy.</div>`;
  },
  dungeon() {
    const M = ensureModes();
    const key = UI.dungeonKey || "vault", D = DUNGEONS[key], best = M.dungeon[key], runs = G.daily.dRuns[key];
    const el = todayElement(), counters = ELEMENT_KEYS.filter((k) => ELEMENTS[k].strong === el);
    return `<div class="row spread"><button class="btn sec sm" data-act="go" data-to="trials">‹ Trials</button><span class="small dim">Power ${fmt(teamPower())}</span></div>
      <div class="row wrap">${DUNGEON_KEYS.map((k) => `<button class="chip ${k === key ? "on" : ""}" data-act="dungeonTab" data-k="${k}">${DUNGEONS[k].icon} ${DUNGEONS[k].name}</button>`).join("")}</div>
      <div class="card chapter" style="background-image:linear-gradient(90deg,#120e1ae6 35%,#120e1a80),${sceneUrl(D.chapter)}">
        <h3>${D.icon} ${D.name}</h3><div class="small">${D.blurb}</div>
        <div class="small dim" style="margin-top:6px">Reward: ${D.reward} · Runs today: <b class="gold">${runs}/${DUNGEON_RUNS}</b> (a loss doesn't use a run)</div>
        <div class="small dim">Today's foes lean ${ELEMENTS[el].icon} ${ELEMENTS[el].name} — bring ${counters.map((k) => ELEMENTS[k].icon + " " + ELEMENTS[k].name).join(", ")}.</div></div>
      ${key === "forge" ? `<div class="card"><div class="small dim" style="margin-bottom:6px">Gear set to forge</div><div class="row wrap">${GEAR_SET_KEYS.map((s) =>
        `<button class="chip ${M.forgeSet === s ? "on" : ""}" data-act="forgeSet" data-s="${s}">${GEAR_SETS[s].icon} ${GEAR_SETS[s].name} <span class="dim">${GEAR_SETS[s].desc}</span></button>`).join("")}</div></div>` : ""}
      <div class="col">${Array.from({ length: DUNGEON_FLOORS }, (_, f) => {
        const locked = f > best, done = f < best, r = dungeonRewards(key, f, !done);
        const rar = Math.min(5, 1 + Math.floor(f / 2));
        return `<button class="card row spread" style="width:100%;text-align:left;${locked ? "opacity:.45" : ""}" data-act="${locked || !runs ? "noop" : "dungeonGo"}" data-k="${key}" data-f="${f}">
          <div><b>${f === 4 || f === 9 ? "💀 " : ""}Floor ${f + 1}</b> <span class="small dim">· Lv ${stageLevel(dungeonIdx(f))}</span>
            <div class="small dim">${key === "forge" ? `<span style="color:${GEAR_RARITY_COLOR[rar]}">${GEAR_RARITY[rar]}</span> ${GEAR_SETS[M.forgeSet].icon} gear · ` : ""}${rewardText(r) || ""}${r.xp ? ` · ${fmt(r.xp)} XP` : ""}</div></div>
          <span>${locked ? "🔒" : done ? "✅" : runs ? "▶" : "⏳"}</span></button>`;
      }).join("")}</div>`;
  },
  arena() {
    const M = ensureModes(), A = M.arena, tier = arenaTier(A.points);
    const next = ARENA_TIERS[ARENA_TIERS.indexOf(tier) + 1];
    const rivals = rivalsFor(A.seed);
    return `<div class="row spread"><button class="btn sec sm" data-act="go" data-to="trials">‹ Trials</button><span class="small dim">Power ${fmt(teamPower())}</span></div>
      ${A.pending ? `<div class="card update-card row spread"><div><b>Weekly reward</b><div class="small dim">You finished last week in ${A.pending.tier}: ${rewardText((ARENA_TIERS.find((t) => t.name === A.pending.tier) || ARENA_TIERS[0]).week)}</div></div>
        <button class="btn sm" data-act="arenaClaim">Claim</button></div>` : ""}
      <div class="card col" style="align-items:center;text-align:center">
        <div style="font-size:44px">${tier.icon}</div><h2>${tier.name}</h2>
        <div><b class="gold">${A.points}</b> points${next ? ` · <span class="small dim">${next.min - A.points} to ${next.icon} ${next.name}</span>` : ""}</div>
        <div class="small dim">This week ${A.wins}W–${A.losses}L · Best ${A.best} · Fights today ${G.daily.arenaTries}/${ARENA_TRIES}</div>
        <div class="small dim">Weekly reward at your rank: ${rewardText(tier.week)}</div></div>
      <div class="row spread"><h3>Choose a rival</h3><button class="btn sec sm" data-act="arenaRefresh">↻ New rivals</button></div>
      ${rivals.map((rv, i) => `<div class="card col">
        <div class="row spread"><div><b>${rv.name}</b><div class="small dim">${rv.label} · Lv ${rv.level} · Power ~${fmt(rv.power)}</div></div>
          <div class="small" style="text-align:right">Win <b style="color:var(--good)">+${rv.gain}</b><br>Loss <b style="color:var(--bad)">−8</b></div></div>
        <div class="row" style="gap:8px">${rv.ids.map((id) => `<div class="hcell" style="padding:0">${portrait(HERO[id], { lv: "Lv" + rv.level })}</div>`).join("")}</div>
        <button class="btn ${G.daily.arenaTries ? "" : "off"}" data-act="arenaFight" data-i="${i}">⚔️ Fight</button></div>`).join("")}
      <div class="small dim" style="text-align:center">Rivals are matched to your current team. Points soften toward 1000 each Monday.</div>`;
  },
});
SCREENS.titanHub = SCREENS.trials;

Object.assign(ACTIONS, {
  goTitan() { UI.screen = "titan"; },
  goDungeon() { UI.screen = "dungeon"; },
  goArena() { UI.screen = "arena"; },
  dungeonTab(d) { UI.dungeonKey = d.k; },
  forgeSet(d) { ensureModes().forgeSet = d.s; save(); },
  dungeonGo(d) {
    closeModal();
    if (B) { FX.clear(); W3D.unmount(); B = null; }
    const key = d.k, floor = +d.f;
    if (!G.daily.dRuns[key]) return toast("No runs left today for this dungeon.");
    UI.dungeonKey = key;
    startBattle({ mode: "dungeon", key, floor });
  },
  arenaFight(d) {
    if (!G.daily.arenaTries) return toast("No arena fights left today.");
    const rv = rivalsFor(ensureModes().arena.seed)[+d.i];
    startBattle({ mode: "arena", rival: rv });
  },
  arenaRefresh() { ensureModes().arena.seed++; save(); },
  arenaClaim() {
    const A = ensureModes().arena; if (!A.pending) return;
    const t = ARENA_TIERS.find((x) => x.name === A.pending.tier) || ARENA_TIERS[0];
    grant(t.week); A.pending = null; save(); SOUND.play("coin"); toast(`Weekly reward: ${rewardText(t.week)}`);
  },
});

// ---------- promo codes ----------
// Codes are stored only as a short fingerprint, and each can be redeemed once per player (per save).
// To add one: put its fingerprint (promoHash("YOUR-CODE")) and reward here.
const PROMOS = {
  "1qestrz-ml0zya": { radiant: 5, label: "Welcome gift" },
};
function promoHash(code) {
  const s = String(code).trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
  let a = 0x811c9dc5, b = 0x01000193 >>> 0;
  for (const c of s) {
    a ^= c.charCodeAt(0); a = Math.imul(a, 16777619) >>> 0;
    b = Math.imul(b ^ c.charCodeAt(0), 2246822519) >>> 0; b = (b << 13 | b >>> 19) >>> 0;
  }
  return a.toString(36) + "-" + b.toString(36);
}
function promoRow() {
  return `<div class="setting"><div><b>Promo code</b><div class="small dim">Got a code? Enter it here for free rewards.</div></div>
    <div class="row" style="gap:8px"><input class="inp grow" id="promoInput" maxlength="32" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="Enter code">
    <button class="btn sm" data-act="redeemPromo">Redeem</button></div></div>`;
}
Object.assign(ACTIONS, {
  redeemPromo() {
    const inp = document.getElementById("promoInput");
    const code = inp ? inp.value : "";
    if (!code.trim()) return toast("Enter a code first.");
    const M = ensureModes(), key = promoHash(code), p = PROMOS[key];
    M.codes = M.codes || [];
    if (!p) { NATIVE.haptic("error"); return toast("That code isn't valid."); }
    if (M.codes.includes(key)) return toast("You've already used this code.");
    M.codes.push(key); grant(p); save();
    SOUND.play("legendary", { jitter: 0 }); NATIVE.haptic("success");
    if (inp) inp.value = "";
    toast(`${p.label}: ${rewardText(p)}`);
    ACTIONS.openSettings();
  },
});

// ---------- first-time tips ----------
const TIPS = [
  { id: "welcome", when: () => G.started && UI.screen === "home",
    html: `<h3>Welcome to Sigilbound</h3><p class="small">Press <b>Continue Campaign</b> to fight. Clearing stages earns gold, XP, gear and summon shards.</p>
      <p class="small">Claim your <b>Daily Login</b> and finish <b>Daily Quests</b> on this screen every day. Everything is free — there is no shop.</p>` },
  { id: "battle", when: () => !!B && !B.finished,
    html: `<h3>How battles work</h3><p class="small">On your hero's turn, tap a <b>skill</b>, then tap a <b>target</b>. Skills with ⏳ need a few turns to recharge.</p>
      <p class="small">Elements matter: 🔥 beats 🌪️, 🌪️ beats 🌊, 🌊 beats 🔥, and ☀️ and 🌑 beat each other.</p>
      <p class="small">Tap <b>🤖 Auto</b> to let the heroes fight on their own, and <b>⏩</b> to speed up to 3x.</p>` },
  { id: "gear", when: () => !B && G.stats.wins > 0 && G.gear.length > 0,
    html: `<h3>You found gear!</h3><p class="small">Open <b>Heroes</b>, pick a hero and tap a gear slot to equip it — or tap <b>Auto-equip</b>. Two pieces of the same set give a bonus.</p>
      <p class="small">Gear shows on the hero's 3D model, and better gear looks fancier.</p>` },
  { id: "summon", when: () => !B && G.cleared >= 3 && (G.shards.common + G.shards.mystic + G.shards.radiant) > 0,
    html: `<h3>Summon new heroes</h3><p class="small">You have summon shards. Open <b>Summon</b> to call new heroes — every shard is earned by playing.</p>` },
  { id: "trials", when: () => !B && dungeonsOpen(),
    html: `<h3>Dungeons unlocked</h3><p class="small">Open <b>Trials</b> for daily <b>Dungeons</b>: gold, a big hero-XP boost, or gear of the set you choose. You get ${DUNGEON_RUNS} winning runs per dungeon each day.</p>` },
  { id: "arena", when: () => !B && arenaOpen(),
    html: `<h3>Arena unlocked</h3><p class="small">Fight rival teams in <b>Trials → Arena</b> to climb from 🥉 Bronze to 🔱 Sigil. Each Monday you get a reward for your rank.</p>` },
];
function checkTips() {
  if (!G.started || !$modal.classList.contains("hidden")) return;
  const M = ensureModes();
  for (const t of TIPS) {
    if (M.tips[t.id] || !t.when()) continue;
    M.tips[t.id] = 1; save();
    modal(`${t.html}<button class="btn" style="width:100%;margin-top:6px" data-act="closeModal">Got it</button>`);
    return;
  }
}
// One-time switch to the new default camera (Three-quarter); later choices are kept.
if (!G.settings.camDefault2) { G.settings.cam = "angle"; G.settings.camDefault2 = 1; save(); }

// Existing players shouldn't see beginner tips for things they've clearly done.
(function seedTips() {
  if (!G.started) return;
  const M = ensureModes();
  if (G.stats.wins > 0) { M.tips.welcome = 1; M.tips.battle = 1; }
  if (G.gear.some((g) => gearOwner(g))) M.tips.gear = 1;
  if (G.stats.summons > 0) M.tips.summon = 1;
})();

// Wrap render so tips appear after a screen is drawn.
const _renderBase = render;
render = function () { _renderBase(); if (!B) setTimeout(checkTips, 350); };
const _startBattleBase = startBattle;
startBattle = function (cfg) { _startBattleBase(cfg); setTimeout(checkTips, 900); };

if (!B) render();
