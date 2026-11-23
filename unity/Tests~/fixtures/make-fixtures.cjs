// Generates fixtures.json from the WEB game's own code (public/game/*.js), so the Unity core
// tests can check that the C# port computes the same numbers and reads real web save codes.
// Run from the repo root after changing game rules on the web side:
//   node unity/Tests~/fixtures/make-fixtures.cjs
// The clock is frozen and Math.random is seeded, so the output is reproducible.
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "../../..");
const game = (f) => fs.readFileSync(path.join(root, "public/game", f), "utf8");

const FIXED_NOW = Date.parse("2026-11-23T12:00:00Z"); // a Monday
class FixedDate extends Date {
  constructor(...a) { if (a.length) super(...a); else super(FIXED_NOW); }
  static now() { return FIXED_NOW; }
}
let seed = 12345;
const rnd = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
const math = Object.create(Math); math.random = rnd;

const store = {};
const ctx = {
  console, Date: FixedDate, Math: math, JSON, Object, Array, String, Number, Set, Map, Promise, Infinity, NaN, isFinite, parseInt, parseFloat,
  encodeURIComponent, decodeURIComponent, escape, unescape,
  btoa: (s) => Buffer.from(s, "binary").toString("base64"), atob: (s) => Buffer.from(s, "base64").toString("binary"),
  localStorage: { getItem: (k) => store[k] ?? null, setItem: (k, v) => { store[k] = v; } },
  setTimeout: () => 0, clearTimeout: () => {}, document: { getElementById: () => null },
};
ctx.window = ctx;
ctx.window.SB_VERSION = { version: "0.21.0", build: "fixture", commit: "", date: "" };
vm.createContext(ctx);
// ui.js is not loaded; modes.js and extras.js only need these names to exist at load time.
const prelude = `var SCREENS = { campaign() { return ""; }, heroes() { return ""; }, home() { return ""; }, prep() { return ""; } }, ACTIONS = {}, UI = {}, B = null, BACK_TO = {},
  $modal = { classList: { contains: () => true } }, SOUND = { play() {}, stopMusic() {} };
  function render() {} function startBattle() {} function toast() {} function modal() {} function closeModal() {}
  function renderBattle() {} function homeBadge() { return 0; }`;
const src = [prelude, game("data.js"), game("state.js"), game("battle.js"), game("modes.js"), game("extras.js"),
  // Expose the script-scoped bindings this generator needs.
  `globalThis.__sb = { get G() { return G; }, set G(v) { G = v; }, HEROES, HERO, addHero, makeGear, equip, heroStats, power, summon, giveXp,
     exportSave, importSave, stageWaves, enemyGrade, stageRewards, unitFromEnemy, titanUnit, dungeonWaves, dungeonRewards, rivalsFor, rivalUnits,
     promoHash, weekKey, todayElement, ensureModes, ensureDaily, claimLogin, bumpQuest, Battle, upgradeGear, TOTAL_STAGES,
     TITAN, TITAN_TIERS, GEAR_SETS, SUBSTATS, SHARDS, EXCHANGE, LOGIN_REWARDS, DAILY_QUESTS, ENEMY_CURVE, CHAPTERS, ROLES, RARITY, STARTERS,
     ACTIONS, UI, HARD, hardWaves, hardRewards, hardOpen, ACHIEVEMENTS, predictTurns, unitFromHero, rewardText, grant, ARENA_TIERS };`].join("\n;\n");
vm.runInContext(src, ctx, { filename: "web-game.js" });
const W = ctx.__sb;

// ---------- a realistic save (starter pick, summons, gear, quests, trials state) ----------
const G = W.G;
const a = W.addHero("ysolde"), b = W.addHero("pell"), c = W.addHero("odo");
G.team = [a.uid, b.uid, c.uid];
G.started = true;
for (const h of [a, b, c]) W.equip(h, W.makeGear(1, "weapon"));
G.shards.mystic = 12; G.shards.common = 8;
W.summon("mystic", 10); W.summon("common", 5);
for (let i = 0; i < 6; i++) W.equip(a, W.makeGear(3 + (i % 3), ["helm", "chest", "boots", "weapon"][i % 4]));
G.gold = 250000;
const up = G.gear[G.gear.length - 1]; for (let i = 0; i < 6; i++) W.upgradeGear(up);
W.giveXp(a, 4000); W.giveXp(b, 900);
G.cleared = 14; G.essence = 77; G.playerName = "Fixture Ünïcode ✓";
W.claimLogin(); W.bumpQuest("win", 3);
const M = W.ensureModes();
M.dungeon.vault = 3; M.forgeSet = "keen"; G.daily.dRuns.trial = 1; G.daily.arenaTries = 2;
M.arena.points = 1320; M.arena.wins = 4; M.arena.losses = 1; M.codes = ["1qestrz-ml0zya"];
G.settings.fpsCap = 30; G.settings.music = false; G.settings.flat = false;
// v0.20/0.21 fields, set through the web's own actions: Skill Tome upgrades, an achievement,
// a team preset, a locked gear piece, Hard progress.
G.tomes = 7; W.UI.heroUid = a.uid;
W.ACTIONS.skillUp({ i: "0" }); W.ACTIONS.skillUp({ i: "1" }); W.ACTIONS.skillUp({ i: "1" });
G.stats.wins = 12; W.ACTIONS.claimAch({ id: "win10" });
W.ACTIONS.teamSave({ i: "1" });
W.ACTIONS.lockGear({ uid: String(G.gear[2].uid) });
G.hardCleared = 5;
const team = G.team.map((u) => G.heroes.find((h) => h.uid === u));
G.team.push(G.heroes[5].uid);

const saveCode = W.exportSave();

// ---------- Skill Tome battle math (Math.random pinned to 0.5: no crits, no variance) ----------
const enemyUnit = (idx) => W.unitFromEnemy(W.stageWaves(idx)[0][0]);
const healer = W.HEROES.find((t) => t.skills.some((s) => (s.fx || []).some((f) => f.t === "heal")));
const multi = W.HEROES.find((t) => t.skills.some((s) => (s.hits || 1) > 1));
const skillCases = [];
const keepRandom = math.random; math.random = () => 0.5;
for (const id of [...new Set([healer.id, multi.id, "ysolde", "brannoc"])]) {
  for (const lvs of [[], [3, 4, 4], [1, 2, 4]]) {
    const h = { uid: 9001, id, level: 30, stars: 4, xp: 0, gear: {}, skillLv: lvs };
    const ally = W.unitFromHero(h), foe = enemyUnit(17);
    const b = new W.Battle([ally], [[foe]]);
    const acts = W.HERO[id].skills.map((sk, i) => {
      ally.hp = 1; ally.effects = []; foe.hp = foe.maxHp; foe.alive = true; foe.effects = []; ally.cds = ally.cds.map(() => 0);
      const target = sk.target === "ally" ? ally : foe;
      const ev = b.act(ally, i, target.key);
      return { i, cd: ally.cds[i], ev: ev.filter((e) => e.type === "dmg" || e.type === "heal").map((e) => ({ type: e.type, ally: e.key === ally.key, amount: e.amount })) };
    });
    skillCases.push({ id, level: 30, stars: 4, skillLv: lvs, stage: 17, acts });
  }
}

// ---------- turn-order prediction ----------
const turnCases = [];
for (const idx of [3, 23, 47]) {
  const allies = G.team.map((u) => W.unitFromHero(G.heroes.find((h) => h.uid === u)));
  const b = new W.Battle(allies, [W.stageWaves(idx)[0].map(W.unitFromEnemy)]);
  b.units.forEach((u, i) => { u.tm = (i * 373 + idx * 41) % 1000; });
  b.units[1].effects.push({ t: "spdUp", turns: 2 });
  b.units[b.units.length - 1].effects.push({ t: "slow", turns: 2 });
  if (idx === 47) b.units[2].alive = false;
  const all = b.units;
  turnCases.push({ idx, tms: all.map((u) => u.tm), dead: all.map((u) => !u.alive), order: W.predictTurns(b).map((u) => all.indexOf(u)) });
}
math.random = keepRandom;
const out = {
  note: "Generated by make-fixtures.cjs from public/game/*.js. Do not edit by hand.",
  now: new FixedDate().toISOString(),
  saveCode,
  save: JSON.parse(JSON.stringify(G)),
  heroStats: G.heroes.map((h) => ({ uid: h.uid, ...W.heroStats(h), power: W.power(W.heroStats(h)) })),
  stages: [0, 1, 5, 17, 23, 41, 59].map((idx) => ({
    idx, grade: W.enemyGrade(idx), rewardsFirst: W.stageRewards(idx, true), rewards: W.stageRewards(idx, false),
    waves: W.stageWaves(idx).map((w) => w.map((e) => { const u = W.unitFromEnemy(e); return { id: e.template.id, el: e.el, boss: !!e.boss, shownLevel: e.shownLevel, hp: u.maxHp, atk: u.atk, def: u.def, spd: u.spd }; })),
  })),
  todayElement: W.todayElement(),
  weekKey: W.weekKey(),
  dungeons: ["vault", "trial", "forge"].flatMap((key) => [0, 3, 4, 9].map((f) => ({
    key, floor: f, rewardsFirst: W.dungeonRewards(key, f, true), rewards: W.dungeonRewards(key, f, false),
    waves: W.dungeonWaves(key, f).map((w) => w.map((e) => { const u = W.unitFromEnemy(e); return { id: e.template.id, el: e.el, boss: !!e.boss, shownLevel: e.shownLevel, hp: u.maxHp, atk: u.atk, def: u.def, spd: u.spd }; })),
  }))),
  rivals: [1, 2, 7, 42].map((s) => ({
    seed: s,
    list: W.rivalsFor(s).map((rv) => ({ ...rv, units: W.rivalUnits(rv).map((u) => ({ id: u.template.id, hp: u.maxHp, atk: u.atk, def: u.def, spd: u.spd })) })),
  })),
  teamPower: G.team.map((u) => G.heroes.find((h) => h.uid === u)).reduce((s, h) => s + W.power(W.heroStats(h)), 0),
  titan: [0, 5000, 40000, 90000].map((tp) => { const u = W.titanUnit(tp); return { tp, level: u.level, el: u.el, atk: u.atk, def: u.def }; }),
  data: {
    heroes: W.HEROES.map((h) => ({ id: h.id, name: h.name, rarity: h.rarity, el: h.el, role: h.role, skills: h.skills })),
    titan: { name: W.TITAN.name, skills: W.TITAN.skills }, titanTiers: W.TITAN_TIERS, gearSets: W.GEAR_SETS, substats: W.SUBSTATS,
    shards: W.SHARDS, exchange: W.EXCHANGE, login: W.LOGIN_REWARDS, quests: W.DAILY_QUESTS, curve: W.ENEMY_CURVE, chapters: W.CHAPTERS,
    roles: W.ROLES, rarity: W.RARITY, starters: W.STARTERS,
  },
  hard: [0, 5, 17, 41, 59].map((idx) => ({
    idx, rewardsFirst: W.hardRewards(idx, true), rewards: W.hardRewards(idx, false),
    waves: W.hardWaves(idx).map((w) => w.map((e) => { const u = W.unitFromEnemy(e); return { id: e.template.id, el: e.el, boss: !!e.boss, shownLevel: e.shownLevel, hp: u.maxHp, atk: u.atk, def: u.def, spd: u.spd }; })),
  })),
  hardOpen: [0, 4, 5, 6, 13, 14].map((idx) => W.hardOpen(idx)),
  achievements: W.ACHIEVEMENTS.map((x) => ({ id: x.id, name: x.name, desc: x.desc, goal: x.goal, reward: x.reward, value: x.get() })),
  arenaTiers: W.ARENA_TIERS.map((t) => ({ name: t.name, min: t.min, week: t.week })),
  skillCases,
  turnCases,
  promo: ["WELCOME", "sigil-2026", "  abc 123 ", "", "Ünï-CODE"].map((code) => ({ code, hash: W.promoHash(code) })),
};
void team;
fs.writeFileSync(path.join(__dirname, "fixtures.json"), JSON.stringify(out, null, 1) + "\n");
console.log(`fixtures.json: ${G.heroes.length} heroes, ${G.gear.length} gear, save code ${saveCode.length} chars`);
