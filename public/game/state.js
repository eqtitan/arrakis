// Sigilbound — persistent game state and progression rules.

const SAVE_KEY = "sigilbound.save.v1";
const rand = (a, b) => a + Math.random() * (b - a);
const randInt = (a, b) => Math.floor(rand(a, b + 1));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const todayStr = (d = new Date()) => d.toISOString().slice(0, 10);

function newState() {
  return {
    v: 1, started: false, nextUid: 1,
    gold: 5000, essence: 0,
    shards: { common: 5, mystic: 3, radiant: 0 },
    heroes: [], gear: [], team: [],
    cleared: 0,                       // number of campaign stages cleared (linear)
    pity: { mystic: 0, radiant: 0 },
    login: { last: "", day: 0 },
    daily: null,
    settings: { speed: 1, auto: false, autoReplay: false },
    stats: { wins: 0, summons: 0, titanBest: 0 },
  };
}

let G = load();

function load() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) return Object.assign(newState(), JSON.parse(raw));
  } catch (_) { /* storage unavailable or corrupt: start fresh */ }
  return newState();
}
function save() {
  G.gameVersion = GAME_VERSION;
  const json = JSON.stringify(G);
  try { localStorage.setItem(SAVE_KEY, json); } catch (_) { /* ignore */ }
  if (typeof NATIVE !== "undefined") NATIVE.persist(SAVE_KEY, json);
}
function resetSave() { G = newState(); save(); }
const SBV = window.SB_VERSION || { version: "0.0.0", build: "dev", commit: "", date: "" };
const GAME_VERSION = SBV.version;
// "v0.6.0 · build 12 · abc1234" (app builds) or "v0.6.0 · dev" (local/web copies).
const VERSION_LABEL = `v${SBV.version} · ${SBV.build === "dev" ? "dev" : `build ${SBV.build}`}${SBV.commit ? ` · ${SBV.commit}` : ""}`;
function exportSave() {
  return "SB1." + btoa(unescape(encodeURIComponent(JSON.stringify(G))));
}
function importSave(code) {
  try {
    if (!code.startsWith("SB1.")) return false;
    const data = JSON.parse(decodeURIComponent(escape(atob(code.slice(4).replace(/\s/g, "")))));
    if (!data || !Array.isArray(data.heroes) || typeof data.gold !== "number") return false;
    G = Object.assign(newState(), data);
    save();
    return true;
  } catch (_) { return false; }
}

const uid = () => G.nextUid++;
const heroByUid = (u) => G.heroes.find((h) => h.uid === u);
const gearByUid = (u) => G.gear.find((g) => g.uid === u);

// ---------- Daily reset / login ----------
function ensureDaily() {
  const t = todayStr();
  if (!G.daily || G.daily.date !== t) {
    G.daily = { date: t, progress: {}, claimed: {}, titanTries: 3, titanBest: 0 };
  }
}
function questProgress(id) {
  if (id === "all") return DAILY_QUESTS.filter((q) => q.id !== "all" && G.daily.claimed[q.id]).length;
  return G.daily.progress[id] || 0;
}
function bumpQuest(id, n = 1) { ensureDaily(); G.daily.progress[id] = (G.daily.progress[id] || 0) + n; }
function loginAvailable() { return G.login.last !== todayStr(); }
function claimLogin() {
  if (!loginAvailable()) return null;
  const reward = LOGIN_REWARDS[G.login.day % LOGIN_REWARDS.length];
  G.login.day += 1; G.login.last = todayStr();
  grant(reward); save();
  return reward;
}

function grant(r) {
  if (r.gold) G.gold += r.gold;
  if (r.essence) G.essence += r.essence;
  for (const k of ["common", "mystic", "radiant"]) if (r[k]) G.shards[k] += r[k];
}
function rewardText(r) {
  const parts = [];
  if (r.gold) parts.push(`🪙 ${fmt(r.gold)}`);
  if (r.essence) parts.push(`💠 ${r.essence}`);
  for (const k of ["common", "mystic", "radiant"]) if (r[k]) parts.push(`${SHARDS[k].icon} ×${r[k]}`);
  return parts.join("  ");
}
const fmt = (n) => n >= 1e6 ? (n / 1e6).toFixed(2) + "M" : n >= 1e4 ? (n / 1e3).toFixed(1) + "K" : Math.round(n).toLocaleString();

// ---------- Heroes ----------
function addHero(id) {
  const t = HERO[id];
  const h = { uid: uid(), id, level: 1, xp: 0, stars: RARITY[t.rarity].stars, gear: {}, locked: false };
  G.heroes.push(h);
  return h;
}

function baseStats(template, level, stars, el) {
  const r = RARITY[template.rarity], role = ROLES[template.role];
  const tier = RARITY_KEYS.indexOf(template.rarity);
  const grow = (1 + (level - 1) * 0.05) * (1 + (stars - 1) * 0.15) * r.mult;
  return {
    hp: 1000 * role.hp * grow, atk: 100 * role.atk * grow, def: 90 * role.def * grow,
    spd: 95 + tier * 2 + role.spd + (stars - 1), crit: 15, cdmg: 50, el: el || template.el,
  };
}

function heroStats(h) {
  const s = baseStats(HERO[h.id], h.level, h.stars);
  const pct = { atkPct: 0, hpPct: 0, defPct: 0, spdPct: 0 };
  const flat = { atk: 0, hp: 0, def: 0, spd: 0, crit: 0, cdmg: 0 };
  const setCount = {};
  for (const slot of GEAR_SLOT_KEYS) {
    const g = h.gear[slot] && gearByUid(h.gear[slot]);
    if (!g) continue;
    flat[GEAR_SLOTS[slot].stat] += gearMainValue(g);
    for (const sub of g.subs) (sub.stat in pct ? pct : flat)[sub.stat] += sub.val;
    setCount[g.set] = (setCount[g.set] || 0) + 1;
  }
  const sets = [];
  for (const [set, n] of Object.entries(setCount)) {
    for (let i = 0; i < Math.floor(n / 2); i++) {
      const def = GEAR_SETS[set];
      (def.stat in pct ? pct : flat)[def.stat] += def.val;
      sets.push(set);
    }
  }
  return {
    el: s.el,
    hp: Math.round((s.hp + flat.hp) * (1 + pct.hpPct / 100)),
    atk: Math.round((s.atk + flat.atk) * (1 + pct.atkPct / 100)),
    def: Math.round((s.def + flat.def) * (1 + pct.defPct / 100)),
    spd: Math.round((s.spd + flat.spd) * (1 + pct.spdPct / 100)),
    crit: Math.min(100, s.crit + flat.crit), cdmg: s.cdmg + flat.cdmg, sets,
  };
}
const power = (st) => Math.round(st.hp / 10 + st.atk * 2 + st.def * 1.5 + st.spd * 4 + st.crit * 3 + st.cdmg);

function giveXp(h, amount) {
  const cap = maxLevelFor(h.stars);
  let ups = 0;
  if (h.level >= cap) return 0;
  h.xp += amount;
  while (h.level < cap && h.xp >= xpToNext(h.level)) { h.xp -= xpToNext(h.level); h.level++; ups++; }
  if (h.level >= cap) h.xp = 0;
  return ups;
}
function xpToCap(h) {
  let need = 0;
  for (let l = h.level; l < maxLevelFor(h.stars); l++) need += xpToNext(l);
  return Math.max(0, need - h.xp);
}
const TRAIN_XP_PER_GOLD = 2;

function rankUpFodder(h) {
  return G.heroes.filter((o) => o.uid !== h.uid && o.stars === h.stars && !o.locked && !G.team.includes(o.uid));
}
function canRankUp(h) {
  return h.stars < MAX_STARS && h.level >= maxLevelFor(h.stars) &&
    rankUpFodder(h).length >= h.stars && G.gold >= rankUpGold(h.stars);
}
function rankUp(h, fodderUids) {
  if (!canRankUp(h) || fodderUids.length !== h.stars) return false;
  for (const fu of fodderUids) releaseHero(fu, false);
  G.gold -= rankUpGold(h.stars);
  h.stars += 1;
  save();
  return true;
}
function releaseHero(u, giveEssence = true) {
  const h = heroByUid(u);
  if (!h) return 0;
  for (const slot of GEAR_SLOT_KEYS) delete h.gear[slot];
  G.heroes = G.heroes.filter((o) => o.uid !== u);
  G.team = G.team.filter((t) => t !== u);
  const ess = giveEssence ? RARITY[HERO[h.id].rarity].essence * h.stars : 0;
  G.essence += ess;
  return ess;
}

// ---------- Gear ----------
function makeGear(rarity, slot = pick(GEAR_SLOT_KEYS)) {
  const subsPool = Object.keys(SUBSTATS);
  const subs = [];
  for (let i = 0; i < Math.min(3, rarity - 1); i++) {
    const stat = subsPool.splice(randInt(0, subsPool.length - 1), 1)[0];
    const [a, b] = SUBSTATS[stat].roll;
    subs.push({ stat, val: randInt(a, b) });
  }
  const g = { uid: uid(), slot, rarity, set: pick(GEAR_SET_KEYS), level: 0, subs };
  G.gear.push(g);
  return g;
}
const gearMainValue = (g) => Math.round(GEAR_SLOTS[g.slot].base * (1 + g.rarity * 0.25) * (1 + g.level * 0.15));
const gearUpgradeCost = (g) => 120 * (g.level + 1) * g.rarity;
const gearSellValue = (g) => 150 * g.rarity * (1 + g.level);
const gearOwner = (g) => G.heroes.find((h) => h.gear[g.slot] === g.uid);
function upgradeGear(g) {
  if (g.level >= GEAR_MAX_LEVEL || G.gold < gearUpgradeCost(g)) return false;
  G.gold -= gearUpgradeCost(g);
  g.level++;
  // every 3 levels, boost a random substat (or add one if room)
  if (g.level % 3 === 0) {
    if (g.subs.length < 4) {
      const free = Object.keys(SUBSTATS).filter((s) => !g.subs.some((x) => x.stat === s));
      const stat = pick(free); const [a, b] = SUBSTATS[stat].roll;
      g.subs.push({ stat, val: randInt(a, b) });
    } else {
      const sub = pick(g.subs); const [a, b] = SUBSTATS[sub.stat].roll;
      sub.val += randInt(a, b);
    }
  }
  bumpQuest("upgrade"); save();
  return true;
}
function sellGear(g) {
  const owner = gearOwner(g);
  if (owner) delete owner.gear[g.slot];
  G.gear = G.gear.filter((x) => x.uid !== g.uid);
  G.gold += gearSellValue(g);
}
function equip(h, g) {
  const prev = gearOwner(g);
  if (prev) delete prev.gear[g.slot];
  h.gear[g.slot] = g.uid;
  save();
}
function autoEquip(h) {
  for (const slot of GEAR_SLOT_KEYS) {
    const options = G.gear.filter((g) => g.slot === slot && (!gearOwner(g) || gearOwner(g).uid === h.uid));
    options.sort((a, b) => gearScore(b) - gearScore(a));
    if (options[0]) equip(h, options[0]);
  }
}
const gearScore = (g) => gearMainValue(g) / GEAR_SLOTS[g.slot].base * 10 + g.subs.reduce((s, x) => s + x.val, 0);

// ---------- Summoning ----------
function rollRarity(shardKey) {
  const def = SHARDS[shardKey];
  if (def.pity && G.pity[shardKey] + 1 >= def.pity) return "legendary";
  let r = Math.random() * 100;
  for (const k of RARITY_KEYS) { if ((r -= def.rates[k]) < 0) return k; }
  return RARITY_KEYS.find((k) => def.rates[k] > 0);
}
function summon(shardKey, count) {
  if (G.shards[shardKey] < count) return [];
  G.shards[shardKey] -= count;
  const results = [];
  for (let i = 0; i < count; i++) {
    const rarity = rollRarity(shardKey);
    if (SHARDS[shardKey].pity) G.pity[shardKey] = rarity === "legendary" ? 0 : G.pity[shardKey] + 1;
    const h = addHero(pick(HEROES.filter((x) => x.rarity === rarity)).id);
    results.push(h);
  }
  G.stats.summons += count;
  bumpQuest("summon", count);
  save();
  return results;
}
function exchange(shardKey) {
  const ex = EXCHANGE.find((e) => e.shard === shardKey);
  if (!ex || G.essence < ex.cost) return false;
  G.essence -= ex.cost; G.shards[shardKey] += 1; save();
  return true;
}

// ---------- Campaign ----------
const stageLabel = (idx) => `${Math.floor(idx / STAGES_PER_CHAPTER) + 1}-${(idx % STAGES_PER_CHAPTER) + 1}`;
const isBossStage = (idx) => idx % STAGES_PER_CHAPTER === STAGES_PER_CHAPTER - 1;
const stageLevel = (idx) => Math.min(60, Math.round(2 + idx * 0.95));

// Deterministic per-stage enemy picks so a stage looks the same on replay.
function seeded(seed) {
  let s = seed * 9301 + 49297;
  return () => ((s = (s * 9301 + 49297) % 233280) / 233280);
}
// Enemy strength comes from one smooth curve per stage, not from the random
// template's rarity, so neighbouring stages feel consistent. Enemy stars and
// levels are capped at 5★ Lv 50 (what a dedicated player reaches by the end);
// late-game difficulty comes from the curve multiplier instead.
function enemyGrade(idx) {
  const level = Math.min(50, stageLevel(idx));
  // Fractional stars keep growth continuous (no +14% jump at each 10-level gate).
  const stars = Math.min(5, 1 + (level - 1) / 10);
  const t = idx / (TOTAL_STAGES - 1);
  const chAdj = ENEMY_CURVE.chapter[Math.floor(idx / STAGES_PER_CHAPTER)] || 1;
  const mul = chAdj * (ENEMY_CURVE.start + (ENEMY_CURVE.end - ENEMY_CURVE.start) * Math.pow(t, ENEMY_CURVE.shape));
  return { level, stars, mul, spd: Math.round(idx * ENEMY_CURVE.spdPerStage) };
}
function stageWaves(idx) {
  const rng = seeded(idx + 7);
  const g = enemyGrade(idx);
  const chapterEl = ELEMENT_KEYS[Math.floor(idx / STAGES_PER_CHAPTER) % ELEMENT_KEYS.length];
  const waves = [];
  const waveCount = isBossStage(idx) ? 3 : 2;
  for (let w = 0; w < waveCount; w++) {
    const wave = [];
    const n = idx < 2 ? 2 : 3;
    for (let i = 0; i < n; i++) {
      const t = HEROES[Math.floor(rng() * HEROES.length)];
      wave.push({ template: t, ...g, shownLevel: stageLevel(idx), el: rng() < 0.5 ? chapterEl : t.el });
    }
    if (isBossStage(idx) && w === waveCount - 1) {
      const t = HEROES[Math.floor(rng() * HEROES.length)];
      wave[1] = { template: t, ...g, shownLevel: stageLevel(idx) + 2, el: chapterEl, boss: true };
    }
    waves.push(wave);
  }
  return waves;
}
function stageRewards(idx, firstClear) {
  const level = stageLevel(idx);
  const r = { gold: Math.round(200 + level * 60), xp: Math.round(60 + level * level * 3.2) };
  if (firstClear) {
    r.common = 1;
    if (isBossStage(idx)) { r.mystic = 1; r.gold *= 3; }
    if (isBossStage(idx) && (idx + 1) % (STAGES_PER_CHAPTER * 3) === 0) r.radiant = 1;
  }
  return r;
}
function rollStageGear(idx) {
  const chance = isBossStage(idx) ? 0.9 : 0.45;
  if (Math.random() > chance) return null;
  const chapter = Math.floor(idx / STAGES_PER_CHAPTER);
  const top = Math.min(5, 1 + Math.floor(chapter / 2) + (isBossStage(idx) ? 1 : 0));
  const rarity = Math.max(1, top - (Math.random() < 0.55 ? 1 : 0) - (Math.random() < 0.2 ? 1 : 0));
  return makeGear(rarity);
}
