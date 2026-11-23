// Sigilbound — turn-meter battle engine (no DOM access; UI reads events).

const TM_FULL = 1000;

function makeUnit(side, template, stats, extra = {}) {
  return {
    key: `${side}${Battle._n++}`, side, template, name: template.name, face: template.face,
    el: stats.el, maxHp: stats.hp, hp: stats.hp, atk: stats.atk, def: stats.def, spd: stats.spd,
    crit: stats.crit, cdmg: stats.cdmg, tm: Math.random() * 100,
    cds: template.skills.map(() => 0), effects: [], alive: true, dmgDealt: 0, ...extra,
  };
}
function unitFromHero(h) {
  return makeUnit("A", HERO[h.id], heroStats(h), { heroUid: h.uid, level: h.level, stars: h.stars, skillLv: h.skillLv || [] });
}
function unitFromEnemy(e) {
  // Stats use a fixed baseline rarity; e.mul (the stage curve) sets the strength.
  const s = baseStats({ ...e.template, rarity: "common" }, e.level, e.stars, e.el);
  const mul = e.mul * (e.boss ? ENEMY_CURVE.bossStat : 1);
  return makeUnit("B", e.template, {
    el: s.el, hp: Math.round(s.hp * mul * (e.boss ? ENEMY_CURVE.bossHp : 1)), atk: Math.round(s.atk * mul),
    def: Math.round(s.def * mul), spd: s.spd + e.spd + (e.boss ? 4 : 0), crit: s.crit, cdmg: s.cdmg,
  }, { level: e.shownLevel, stars: e.stars, boss: !!e.boss, name: (e.boss ? "Warlord " : "Hollow ") + e.template.name.split(/[ ,]/)[0] });
}
function titanUnit(teamPower) {
  const el = titanElement();
  const lvl = Math.max(10, Math.min(60, Math.round(teamPower / 1200)));
  const s = baseStats(TITAN, lvl, 6, el);
  return makeUnit("B", TITAN, {
    el, hp: 99999999, atk: Math.round(s.atk * 1.1), def: Math.round(s.def * 0.8),
    spd: 110, crit: 15, cdmg: 50,
  }, { level: lvl, stars: 6, boss: true, titan: true, name: TITAN.name });
}

class Battle {
  constructor(allyUnits, waves, opts = {}) {
    this.allies = allyUnits;
    this.waves = waves;            // array of arrays of enemy units
    this.wave = 0;
    this.enemies = waves[0];
    this.opts = opts;              // { titan: bool, turnLimit }
    this.over = false; this.result = null;
    this.bossTurns = 0; this.turn = 0;
    this.log = [];
  }
  get units() { return [...this.allies, ...this.enemies]; }
  sideOf(u, own = true) { return (u.side === "A") === own ? this.allies : this.enemies; }
  living(list) { return list.filter((u) => u.alive); }

  // Advance turn meters until a unit is ready; return it.
  nextActor() {
    for (let guard = 0; guard < 10000; guard++) {
      const ready = this.living(this.units).filter((u) => u.tm >= TM_FULL);
      if (ready.length) {
        ready.sort((a, b) => b.tm - a.tm || this.speed(b) - this.speed(a));
        return ready[0];
      }
      for (const u of this.living(this.units)) u.tm += this.speed(u) * 0.07 * 10;
    }
    return null;
  }

  has(u, t) { return u.effects.some((e) => e.t === t); }
  speed(u) { return u.spd * (1 + (this.has(u, "spdUp") ? 0.3 : 0) - (this.has(u, "slow") ? 0.3 : 0)); }
  atkOf(u) { return u.atk * (1 + (this.has(u, "atkUp") ? 0.4 : 0) - (this.has(u, "atkDown") ? 0.4 : 0)); }
  defOf(u) { return u.def * (1 + (this.has(u, "defUp") ? 0.5 : 0) - (this.has(u, "defDown") ? 0.5 : 0)); }

  // Start-of-turn upkeep. Returns { events, skip } (skip = stunned).
  beginTurn(u) {
    const ev = [];
    this.turn++;
    u.tm = 0;
    u.cds = u.cds.map((c) => Math.max(0, c - 1));
    for (const e of u.effects) {
      if (e.t === "poison") {
        const d = Math.round(Math.min(u.maxHp * 0.04, u.titan ? this.atkOfStrongest() * 3 : Infinity));
        this.applyDamage(u, d, null, ev, { dot: true });
      } else if (e.t === "regen") {
        this.heal(u, u.maxHp * 0.08, ev);
      }
    }
    const skip = u.alive && this.has(u, "stun");
    if (skip) ev.push({ type: "text", key: u.key, text: "Stunned!" });
    return { events: ev, skip: skip || !u.alive };
  }
  atkOfStrongest() { return Math.max(...this.allies.map((a) => a.atk)); }

  endTurn(u) {
    for (const e of u.effects) { if (e.fresh) e.fresh = false; else e.turns--; }
    u.effects = u.effects.filter((e) => e.turns > 0 && !(e.t === "shield" && e.val <= 0));
    if (u.titan) this.bossTurns++;
    return this.checkEnd();
  }

  checkEnd() {
    if (!this.living(this.allies).length) { this.over = true; this.result = "defeat"; return "defeat"; }
    if (this.opts.titan && this.bossTurns >= this.opts.turnLimit) { this.over = true; this.result = "timeout"; return "timeout"; }
    if (!this.living(this.enemies).length) {
      if (this.wave < this.waves.length - 1) {
        this.wave++; this.enemies = this.waves[this.wave];
        for (const a of this.allies) a.tm = Math.min(a.tm, TM_FULL * 0.6);
        return "wave";
      }
      this.over = true; this.result = "victory"; return "victory";
    }
    return null;
  }

  usable(u) { return u.template.skills.map((s, i) => u.cds[i] === 0 ? i : -1).filter((i) => i >= 0); }

  validTargets(u, skillIdx) {
    const sk = u.template.skills[skillIdx];
    if (sk.target === "enemy") {
      const foes = this.living(this.sideOf(u, false));
      const taunters = foes.filter((f) => this.has(f, "taunt"));
      return taunters.length ? taunters : foes;
    }
    if (sk.target === "ally") return this.living(this.sideOf(u, true));
    return []; // AoE / self need no choice
  }

  // AI: pick strongest ready skill, sensible target.
  aiChoose(u) {
    const ready = this.usable(u);
    const allies = this.living(this.sideOf(u, true));
    const hurt = allies.filter((a) => a.hp / a.maxHp < 0.65).length;
    let best = 0, bestScore = -1;
    for (const i of ready) {
      const sk = u.template.skills[i];
      let score = sk.cd * 10 + i;
      const heals = sk.fx.some((f) => f.t === "heal" || f.t === "regen");
      if (heals && hurt === 0) score -= 100;
      if (sk.fx.some((f) => f.t === "taunt") && this.has(u, "taunt")) score -= 100;
      if (score > bestScore) { bestScore = score; best = i; }
    }
    const targets = this.validTargets(u, best);
    let target = null;
    if (targets.length) {
      if (u.template.skills[best].target === "enemy") {
        target = [...targets].sort((a, b) => {
          const ea = elemMult(u.el, a.el), eb = elemMult(u.el, b.el);
          return eb - ea || a.hp / a.maxHp - b.hp / b.maxHp;
        })[0];
      } else target = [...targets].sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0];
    }
    return { skill: best, target: target && target.key };
  }

  find(key) { return this.units.find((x) => x.key === key); }

  // Execute a skill. Returns events for the UI.
  act(u, skillIdx, targetKey) {
    const ev = [];
    const sk = u.template.skills[skillIdx];
    // Skill upgrades (Skill Tomes): +8% damage/healing per level up to 3; level 4 cuts the cooldown by 1.
    const slv = (u.skillLv && u.skillLv[skillIdx]) || 0;
    u.cds[skillIdx] = Math.max(0, sk.cd - (slv >= 4 && sk.cd > 1 ? 1 : 0));
    this.boost = 1 + 0.08 * Math.min(slv, 3);
    ev.push({ type: "skill", key: u.key, name: sk.name, side: u.side });
    const own = this.living(this.sideOf(u, true)), foes = this.living(this.sideOf(u, false));
    let targets;
    switch (sk.target) {
      case "enemy": {
        const valid = this.validTargets(u, skillIdx);
        targets = [valid.find((t) => t.key === targetKey) || valid[0]];
        break;
      }
      case "allEnemies": targets = foes; break;
      case "ally": targets = [own.find((t) => t.key === targetKey) || u]; break;
      case "allAllies": targets = own; break;
      default: targets = [u];
    }
    targets = targets.filter(Boolean);

    if (sk.mult > 0) {
      for (const t of targets) {
        for (let h = 0; h < sk.hits && t.alive; h++) this.hit(u, t, sk, ev);
      }
    }
    for (const f of sk.fx) {
      const recips = f.to === "self" ? [u] : f.to === "allies" ? this.living(own) : f.to === "enemies" ? this.living(foes) : targets.filter((t) => t.alive);
      for (const r of recips) this.applyFx(u, r, f, ev);
    }
    this.boost = 1;
    return ev;
  }

  hit(u, t, sk, ev) {
    const stat = sk.scale === "def" ? this.defOf(u) : sk.scale === "hp" ? u.maxHp : this.atkOf(u);
    let dmg = stat * sk.mult * (this.boost || 1);
    const em = elemMult(u.el, t.el);
    dmg *= em;
    dmg *= 650 / (650 + this.defOf(t));
    const crit = Math.random() * 100 < u.crit && em >= 1;
    if (crit) dmg *= 1 + u.cdmg / 100;
    dmg *= rand(0.95, 1.05);
    this.applyDamage(t, Math.max(1, Math.round(dmg)), u, ev, { crit, em });
  }

  applyDamage(t, dmg, src, ev, info = {}) {
    let remaining = dmg;
    const shield = t.effects.find((e) => e.t === "shield");
    if (shield && !info.dot) {
      const absorbed = Math.min(shield.val, remaining);
      shield.val -= absorbed; remaining -= absorbed;
      if (absorbed) ev.push({ type: "absorb", key: t.key, amount: absorbed });
      if (shield.val <= 0) t.effects = t.effects.filter((e) => e !== shield);
    }
    t.hp -= remaining;
    if (src) src.dmgDealt += dmg;
    if (this.opts.titan && t.titan) this.titanDamage = (this.titanDamage || 0) + dmg;
    ev.push({ type: "dmg", key: t.key, amount: remaining, crit: info.crit, em: info.em, dot: info.dot });
    if (t.hp <= 0) {
      t.hp = 0; t.alive = false; t.effects = [];
      ev.push({ type: "death", key: t.key });
    }
  }

  heal(t, amount, ev) {
    if (!t.alive) return;
    const amt = Math.round(Math.min(amount, t.maxHp - t.hp));
    t.hp += amt;
    if (amt > 0) ev.push({ type: "heal", key: t.key, amount: amt });
  }

  applyFx(u, r, f, ev) {
    if (f.chance !== undefined && Math.random() > f.chance) return;
    const meta = EFFECTS[f.t];
    if (r.titan && (f.t === "stun" || f.t === "tmDrain")) {
      ev.push({ type: "text", key: r.key, text: "Immune" });
      return;
    }
    switch (f.t) {
      case "heal": return this.heal(r, r.maxHp * f.pct * (this.boost || 1), ev);
      case "tm": r.tm += TM_FULL * f.val; ev.push({ type: "text", key: r.key, text: "⏩ Turn Meter" }); return;
      case "tmDrain": r.tm = Math.max(0, r.tm - TM_FULL * f.val); ev.push({ type: "text", key: r.key, text: "⏪ Turn Meter" }); return;
      case "cleanse": {
        const n = r.effects.length;
        r.effects = r.effects.filter((e) => EFFECTS[e.t].buff);
        if (r.effects.length < n) ev.push({ type: "text", key: r.key, text: "Cleansed" });
        return;
      }
      case "strip": {
        const n = r.effects.length;
        r.effects = r.effects.filter((e) => !EFFECTS[e.t].buff);
        if (r.effects.length < n) ev.push({ type: "text", key: r.key, text: "Buffs removed" });
        return;
      }
    }
    if (!meta) return;
    const self = r === u;
    const existing = r.effects.find((e) => e.t === f.t);
    if (f.t === "shield") {
      const val = Math.round(u.maxHp * f.pct);
      if (existing) existing.val = Math.max(existing.val, val), existing.turns = 2;
      else r.effects.push({ t: "shield", val, turns: 2, fresh: self });
    } else if (existing) {
      existing.turns = Math.max(existing.turns, f.turns);
      if (self) existing.fresh = true;
    } else {
      r.effects.push({ t: f.t, turns: f.turns || 1, fresh: self });
    }
    ev.push({ type: "fx", key: r.key, t: f.t });
  }
}
Battle._n = 0;
