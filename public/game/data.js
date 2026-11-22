// Sigilbound — static game data (heroes, elements, gear, campaign).
// All names, heroes and skills are original to this project.

const ELEMENTS = {
  flame:  { name: "Flame",  icon: "🔥", color: "#e8553a", strong: "gale" },
  gale:   { name: "Gale",   icon: "🌪️", color: "#3fb57a", strong: "tide" },
  tide:   { name: "Tide",   icon: "🌊", color: "#3a8ee8", strong: "flame" },
  light:  { name: "Light",  icon: "☀️", color: "#e8c23a", strong: "shadow" },
  shadow: { name: "Shadow", icon: "🌑", color: "#9a5ae8", strong: "light" },
};
const ELEMENT_KEYS = Object.keys(ELEMENTS);

function elemMult(att, def) {
  if (ELEMENTS[att].strong === def) return 1.3;
  if (ELEMENTS[def].strong === att) return 0.8;
  return 1;
}

const RARITY = {
  common:    { name: "Common",    stars: 1, mult: 1.0,  color: "#9aa3ad", essence: 5 },
  rare:      { name: "Rare",      stars: 2, mult: 1.15, color: "#4aa3ff", essence: 20 },
  epic:      { name: "Epic",      stars: 3, mult: 1.32, color: "#b46cff", essence: 80 },
  legendary: { name: "Legendary", stars: 4, mult: 1.5,  color: "#ffb02e", essence: 300 },
};
const RARITY_KEYS = Object.keys(RARITY);

const ROLES = {
  attack:  { name: "Attack",  icon: "⚔️", hp: 0.9,  atk: 1.25, def: 0.9,  spd: 0 },
  defense: { name: "Defense", icon: "🛡️", hp: 1.05, atk: 0.85, def: 1.4,  spd: 0 },
  hp:      { name: "HP",      icon: "❤️", hp: 1.35, atk: 0.9,  def: 1.0,  spd: 0 },
  support: { name: "Support", icon: "✚",  hp: 1.0,  atk: 0.95, def: 1.0,  spd: 6 },
};

const EFFECTS = {
  atkUp:   { name: "ATK Up",   icon: "⚔️", buff: true },
  defUp:   { name: "DEF Up",   icon: "🛡️", buff: true },
  spdUp:   { name: "SPD Up",   icon: "💨", buff: true },
  regen:   { name: "Regen",    icon: "💚", buff: true },
  shield:  { name: "Shield",   icon: "🔰", buff: true },
  taunt:   { name: "Taunt",    icon: "🎯", buff: true },
  atkDown: { name: "ATK Down", icon: "🔻", buff: false },
  defDown: { name: "DEF Down", icon: "💔", buff: false },
  slow:    { name: "Slow",     icon: "🐌", buff: false },
  poison:  { name: "Poison",   icon: "☠️", buff: false },
  stun:    { name: "Stun",     icon: "💫", buff: false },
};

// Skill schema:
//  target: enemy | allEnemies | ally | allAllies | self
//  mult/scale: damage = stat(scale) * mult per hit (mult 0 = no damage)
//  fx: [{ t, turns?, chance?, pct?, val?, to? }]
//    to: target (default) | self | allies | enemies
//    t: any EFFECTS key, or instant: heal(pct maxHP) | tm(val) | tmDrain(val) | cleanse | strip
const S = (name, target, mult, cd, fx = [], opts = {}) =>
  ({ name, target, mult, cd, fx, hits: opts.hits || 1, scale: opts.scale || "atk" });

const HEROES = [
  // ---------- Common ----------
  { id: "brannoc", name: "Brannoc Spearhand", rarity: "common", el: "gale", role: "attack", face: "🗡️",
    skills: [S("Spear Thrust", "enemy", 1.0, 0), S("Whirling Haft", "allEnemies", 0.7, 3)] },
  { id: "mira", name: "Mira Saltwhistle", rarity: "common", el: "tide", role: "defense", face: "🐚",
    skills: [S("Shell Bash", "enemy", 0.9, 0, [], { scale: "def" }),
             S("Saltwall", "allAllies", 0, 4, [{ t: "defUp", turns: 2 }])] },
  { id: "pell", name: "Pell Cinderbrook", rarity: "common", el: "flame", role: "support", face: "🕯️",
    skills: [S("Ember Flick", "enemy", 1.0, 0), S("Kindle", "allAllies", 0, 4, [{ t: "heal", pct: 0.15 }])] },
  { id: "odo", name: "Odo Mudlark", rarity: "common", el: "gale", role: "hp", face: "🪵",
    skills: [S("Mud Slap", "enemy", 0.08, 0, [{ t: "slow", turns: 2, chance: 0.3 }], { scale: "hp" }),
             S("Thick Hide", "self", 0, 4, [{ t: "shield", pct: 0.25 }, { t: "taunt", turns: 2 }])] },
  { id: "wren", name: "Sister Wren", rarity: "common", el: "light", role: "support", face: "🕊️",
    skills: [S("Lantern Strike", "enemy", 1.0, 0), S("Vesper Hymn", "allAllies", 0, 4, [{ t: "heal", pct: 0.18 }])] },
  { id: "kettle", name: "Kettle Gravejaw", rarity: "common", el: "shadow", role: "attack", face: "🦴",
    skills: [S("Grave Hook", "enemy", 1.0, 0, [{ t: "poison", turns: 2, chance: 0.3 }]),
             S("Rattle Bones", "enemy", 1.6, 3)] },

  // ---------- Rare ----------
  { id: "ysolde", name: "Ysolde Emberlash", rarity: "rare", el: "flame", role: "attack", face: "🔥",
    skills: [S("Lash", "enemy", 0.55, 0, [], { hits: 2 }),
             S("Searing Coil", "enemy", 1.9, 3, [{ t: "defDown", turns: 2, chance: 0.6 }]),
             S("Wildfire", "allEnemies", 0.9, 4, [{ t: "poison", turns: 2, chance: 0.4 }])] },
  { id: "corvan", name: "Corvan Tidecaller", rarity: "rare", el: "tide", role: "support", face: "🐋",
    skills: [S("Undertow", "enemy", 1.0, 0, [{ t: "tmDrain", val: 0.15, chance: 0.5 }]),
             S("Rising Tide", "allAllies", 0, 3, [{ t: "heal", pct: 0.2 }]),
             S("Tidal Hymn", "allAllies", 0, 4, [{ t: "atkUp", turns: 2 }, { t: "tm", val: 0.15 }])] },
  { id: "hask", name: "Hask the Unbowed", rarity: "rare", el: "gale", role: "defense", face: "🪨",
    skills: [S("Shield Rush", "enemy", 0.9, 0, [], { scale: "def" }),
             S("Unbowed", "self", 0, 4, [{ t: "taunt", turns: 2 }, { t: "defUp", turns: 2 }]),
             S("Gale Wall", "allAllies", 0, 4, [{ t: "shield", pct: 0.15 }])] },
  { id: "lumen", name: "Lumen Varro", rarity: "rare", el: "light", role: "attack", face: "✨",
    skills: [S("Radiant Edge", "enemy", 1.0, 0),
             S("Judgment", "enemy", 2.2, 3),
             S("Dawnbreak", "allEnemies", 1.0, 4, [{ t: "atkDown", turns: 2, chance: 0.5 }])] },
  { id: "nyx", name: "Nyx Hollowstep", rarity: "rare", el: "shadow", role: "attack", face: "🗝️",
    skills: [S("Hollow Cut", "enemy", 0.38, 0, [], { hits: 3 }),
             S("Vanish", "enemy", 1.8, 3, [{ t: "strip" }]),
             S("Night Toll", "allEnemies", 0.85, 4, [{ t: "tmDrain", val: 0.2, chance: 0.5 }])] },
  { id: "tamsin", name: "Tamsin Reedvane", rarity: "rare", el: "gale", role: "support", face: "🌾",
    skills: [S("Reed Dart", "enemy", 1.0, 0, [{ t: "slow", turns: 2, chance: 0.4 }]),
             S("Tailwind", "allAllies", 0, 4, [{ t: "spdUp", turns: 2 }]),
             S("Field Remedy", "allAllies", 0, 4, [{ t: "heal", pct: 0.15 }, { t: "cleanse" }])] },
  { id: "gorrum", name: "Gorrum Slagheart", rarity: "rare", el: "flame", role: "defense", face: "🌋",
    skills: [S("Slag Fist", "enemy", 0.9, 0, [{ t: "defDown", turns: 2, chance: 0.25 }], { scale: "def" }),
             S("Molten Hide", "self", 0, 4, [{ t: "shield", pct: 0.3 }, { t: "taunt", turns: 2 }]),
             S("Eruption", "allEnemies", 0.7, 5, [{ t: "stun", turns: 1, chance: 0.2 }], { scale: "def" })] },
  { id: "velka", name: "Velka Driftmourn", rarity: "rare", el: "tide", role: "hp", face: "🧊",
    skills: [S("Drift Strike", "enemy", 0.08, 0, [], { scale: "hp" }),
             S("Mournful Wave", "allEnemies", 0.06, 4, [{ t: "slow", turns: 2, chance: 0.4 }], { scale: "hp" }),
             S("Deep Mending", "allAllies", 0, 4, [{ t: "regen", turns: 2 }])] },

  // ---------- Epic ----------
  { id: "aurelia", name: "Aurelia Dawnwarden", rarity: "epic", el: "light", role: "defense", face: "🛡️",
    skills: [S("Warden's Blow", "enemy", 0.95, 0, [{ t: "atkDown", turns: 2, chance: 0.3 }], { scale: "def" }),
             S("Aegis of Dawn", "allAllies", 0, 4, [{ t: "shield", pct: 0.2 }, { t: "defUp", turns: 2 }]),
             S("Sunfall", "allEnemies", 0.8, 5, [{ t: "stun", turns: 1, chance: 0.25 }], { scale: "def" })] },
  { id: "sable", name: "Sable Nightglass", rarity: "epic", el: "shadow", role: "support", face: "🌘",
    skills: [S("Glass Shard", "enemy", 1.0, 0, [{ t: "defDown", turns: 2, chance: 0.4 }]),
             S("Mirror Veil", "allEnemies", 0.6, 4, [{ t: "defDown", turns: 2, chance: 0.75 }, { t: "atkDown", turns: 2, chance: 0.75 }]),
             S("Night Grace", "allAllies", 0, 5, [{ t: "heal", pct: 0.25 }, { t: "tm", val: 0.2 }])] },
  { id: "kaito", name: "Kaito Stormrend", rarity: "epic", el: "gale", role: "attack", face: "⚡",
    skills: [S("Rending Gust", "enemy", 0.6, 0, [], { hits: 2 }),
             S("Thousand Cuts", "enemy", 0.55, 3, [], { hits: 4 }),
             S("Stormrend", "allEnemies", 1.3, 4, [{ t: "slow", turns: 2, chance: 0.6 }])] },
  { id: "maelis", name: "Maelis Deepcurrent", rarity: "epic", el: "tide", role: "attack", face: "🔱",
    skills: [S("Trident", "enemy", 1.1, 0),
             S("Riptide", "enemy", 2.4, 3, [{ t: "tmDrain", val: 0.3 }]),
             S("Maelstrom", "allEnemies", 1.2, 4, [{ t: "defDown", turns: 2, chance: 0.5 }])] },
  { id: "thrain", name: "Thrain Ashforge", rarity: "epic", el: "flame", role: "hp", face: "🔨",
    skills: [S("Forge Hammer", "enemy", 0.085, 0, [{ t: "stun", turns: 1, chance: 0.15 }], { scale: "hp" }),
             S("Ashen Ward", "allAllies", 0, 4, [{ t: "shield", pct: 0.15 }, { t: "taunt", turns: 2, to: "self" }]),
             S("Bellows", "allAllies", 0, 5, [{ t: "regen", turns: 2 }, { t: "atkUp", turns: 2 }])] },
  { id: "oriel", name: "Oriel Sunveil", rarity: "epic", el: "light", role: "support", face: "🌟",
    skills: [S("Veil Light", "enemy", 1.0, 0),
             S("Sunveil", "allAllies", 0, 4, [{ t: "heal", pct: 0.3 }, { t: "cleanse" }]),
             S("Ascend", "allAllies", 0, 5, [{ t: "atkUp", turns: 2 }, { t: "spdUp", turns: 2 }, { t: "tm", val: 0.25 }])] },

  // ---------- Legendary ----------
  { id: "vaelith", name: "Vaelith, the Last Pyre", rarity: "legendary", el: "flame", role: "attack", face: "☄️",
    skills: [S("Pyre Brand", "enemy", 1.2, 0, [{ t: "poison", turns: 2, chance: 0.5 }]),
             S("Cinder Rain", "allEnemies", 0.7, 3, [{ t: "defDown", turns: 2, chance: 0.5 }], { hits: 2 }),
             S("Last Pyre", "enemy", 3.2, 4, [{ t: "atkUp", turns: 2, to: "self" }])] },
  { id: "morwenna", name: "Morwenna Abyss-Crowned", rarity: "legendary", el: "shadow", role: "attack", face: "👑",
    skills: [S("Abyssal Touch", "enemy", 1.1, 0, [{ t: "tmDrain", val: 0.15 }]),
             S("Crown of Night", "allEnemies", 1.1, 4, [{ t: "stun", turns: 1, chance: 0.35 }]),
             S("Drown in Dark", "enemy", 2.8, 4, [{ t: "strip" }, { t: "atkDown", turns: 2 }])] },
  { id: "seraphine", name: "Seraphine of the Seventh Bell", rarity: "legendary", el: "light", role: "support", face: "🔔",
    skills: [S("Bell Toll", "enemy", 1.0, 0, [{ t: "atkDown", turns: 2, chance: 0.4 }]),
             S("Seventh Bell", "allAllies", 0, 4, [{ t: "heal", pct: 0.35 }, { t: "shield", pct: 0.15 }]),
             S("Requiem", "allAllies", 0, 5, [{ t: "tm", val: 0.35 }, { t: "atkUp", turns: 2 }, { t: "defUp", turns: 2 }, { t: "cleanse" }])] },
  { id: "ulfgar", name: "Ulfgar Stormwall", rarity: "legendary", el: "gale", role: "defense", face: "🏔️",
    skills: [S("Stormwall Bash", "enemy", 1.0, 0, [{ t: "slow", turns: 2, chance: 0.5 }], { scale: "def" }),
             S("Hold the Line", "allAllies", 0, 4, [{ t: "defUp", turns: 3 }, { t: "taunt", turns: 2, to: "self" }, { t: "shield", pct: 0.25, to: "self" }]),
             S("Avalanche", "allEnemies", 0.9, 5, [{ t: "stun", turns: 1, chance: 0.3 }, { t: "defDown", turns: 2, chance: 0.5 }], { scale: "def" })] },
];
const HERO = Object.fromEntries(HEROES.map((h) => [h.id, h]));
const STARTERS = ["ysolde", "hask", "corvan"];

// ---------- Titan (daily boss) ----------
const TITAN = {
  id: "titan", name: "Kharvok the Ashen Titan", rarity: "legendary", role: "defense", face: "🗿",
  skills: [
    S("Crushing Palm", "enemy", 1.3, 0),
    S("Quake", "allEnemies", 0.8, 3, [{ t: "slow", turns: 2, chance: 0.5 }]),
    S("Cinder Breath", "allEnemies", 1.0, 4, [{ t: "poison", turns: 2, chance: 0.5 }, { t: "defDown", turns: 2, chance: 0.4 }]),
  ],
};
const TITAN_TURNS = 20; // boss turns per attempt
const TITAN_TIERS = [ // damage thresholds -> rewards
  { dmg: 0,       gold: 500,   common: 1, mystic: 0, radiant: 0 },
  { dmg: 20000,   gold: 1500,  common: 2, mystic: 1, radiant: 0 },
  { dmg: 60000,   gold: 3000,  common: 3, mystic: 1, radiant: 0 },
  { dmg: 150000,  gold: 6000,  common: 3, mystic: 2, radiant: 0 },
  { dmg: 400000,  gold: 10000, common: 4, mystic: 3, radiant: 1 },
  { dmg: 1000000, gold: 20000, common: 5, mystic: 4, radiant: 1 },
];
const titanElement = (date = new Date()) => ELEMENT_KEYS[date.getDay() % ELEMENT_KEYS.length];

// ---------- Gear ----------
const GEAR_SLOTS = {
  weapon: { name: "Weapon", icon: "🗡️", stat: "atk", base: 20 },
  helm:   { name: "Helm",   icon: "⛑️", stat: "hp",  base: 200 },
  chest:  { name: "Chest",  icon: "🥋", stat: "def", base: 18 },
  boots:  { name: "Boots",  icon: "👢", stat: "spd", base: 4 },
};
const GEAR_SLOT_KEYS = Object.keys(GEAR_SLOTS);
const GEAR_RARITY = ["", "Worn", "Fine", "Superior", "Heroic", "Mythic"];
const GEAR_RARITY_COLOR = ["", "#9aa3ad", "#5bc46a", "#4aa3ff", "#b46cff", "#ffb02e"];
const GEAR_SETS = {
  fury:    { name: "Fury",    icon: "🔥", stat: "atkPct", val: 15, desc: "+15% ATK" },
  vigor:   { name: "Vigor",   icon: "💚", stat: "hpPct",  val: 15, desc: "+15% HP" },
  bulwark: { name: "Bulwark", icon: "🧱", stat: "defPct", val: 15, desc: "+15% DEF" },
  haste:   { name: "Haste",   icon: "💨", stat: "spdPct", val: 12, desc: "+12% SPD" },
  keen:    { name: "Keen",    icon: "🎯", stat: "crit",   val: 12, desc: "+12% Crit Rate" },
};
const GEAR_SET_KEYS = Object.keys(GEAR_SETS);
const SUBSTATS = {
  atkPct: { name: "ATK%",      roll: [4, 7] },
  hpPct:  { name: "HP%",       roll: [4, 7] },
  defPct: { name: "DEF%",      roll: [4, 7] },
  spd:    { name: "SPD",       roll: [2, 5] },
  crit:   { name: "Crit Rate", roll: [3, 6] },
  cdmg:   { name: "Crit DMG",  roll: [4, 8] },
};
const GEAR_MAX_LEVEL = 10;

// ---------- Summoning ----------
const SHARDS = {
  common:  { name: "Worn Shard",    icon: "🟫", color: "#a98b6b",
             rates: { common: 70, rare: 27, epic: 3, legendary: 0 } },
  mystic:  { name: "Mystic Shard",  icon: "🔷", color: "#4aa3ff",
             rates: { common: 0, rare: 82.5, epic: 15, legendary: 2.5 }, pity: 60 },
  radiant: { name: "Radiant Shard", icon: "🌟", color: "#ffb02e",
             rates: { common: 0, rare: 0, epic: 85, legendary: 15 }, pity: 10 },
};
const EXCHANGE = [ // spend essence (from releasing heroes) on shards
  { shard: "common",  cost: 15 },
  { shard: "mystic",  cost: 120 },
  { shard: "radiant", cost: 1500 },
];

// ---------- Campaign ----------
const CHAPTERS = [
  "Thornwick Road", "The Drowned Mill", "Ashgrave Pass", "Saltmarsh Reaches", "Bellspire Ruins",
  "The Glass Wastes", "Stormcrown Heights", "Hollow Deep", "Sunken Cathedral", "The Last Pyre",
];
const STAGES_PER_CHAPTER = 6;
const TOTAL_STAGES = CHAPTERS.length * STAGES_PER_CHAPTER;

// ---------- Progression ----------
const xpToNext = (level) => 50 + level * level * 12;
const maxLevelFor = (stars) => stars * 10;
const MAX_STARS = 6;
const rankUpGold = (stars) => 2000 * stars;
const LOGIN_REWARDS = [
  { gold: 2000 }, { common: 3 }, { gold: 4000 }, { mystic: 1 },
  { gold: 6000, common: 3 }, { mystic: 2 }, { radiant: 1 },
];
const DAILY_QUESTS = [
  { id: "win",     name: "Win 5 battles",        goal: 5, reward: { gold: 2000 } },
  { id: "summon",  name: "Summon 3 heroes",      goal: 3, reward: { common: 2 } },
  { id: "upgrade", name: "Upgrade gear 3 times", goal: 3, reward: { gold: 1500 } },
  { id: "titan",   name: "Challenge the Titan",  goal: 1, reward: { mystic: 1 } },
  { id: "all",     name: "Finish all daily quests", goal: 4, reward: { mystic: 1, gold: 3000 } },
];
