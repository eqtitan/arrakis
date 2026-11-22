// Turn-meter battle engine. Produces BattleEvents that the Unity layer animates.
// Mirrors public/game/battle.js.
using System;
using System.Collections.Generic;
using System.Linq;
using static Sigilbound.Core.GameData;

namespace Sigilbound.Core
{
    public sealed class Effect { public FxType Type; public int Turns; public int Val; public bool Fresh; }

    public sealed class Unit
    {
        public string Key; public bool Ally; public HeroDef Template; public string Name;
        public Element El; public int MaxHp, Hp, Atk, Def, Crit, Cdmg; public double Spd; // enemy speed can be fractional, as on the web
        public bool Rival;
        public double Tm; public int[] Cds; public List<Effect> Effects = new List<Effect>();
        public bool Alive = true; public long DmgDealt; public int Level; public int Stars;
        public bool Boss, Titan; public int HeroUid;
        public bool Has(FxType t) => Effects.Any(e => e.Type == t);
        public Effect Shield => Effects.FirstOrDefault(e => e.Type == FxType.Shield);
    }

    public enum EvType { Skill, Damage, Heal, Absorb, Status, Text, Death }
    public sealed class BattleEvent
    {
        public EvType Type; public Unit Unit; public Unit Source; public int Amount; public bool Crit; public double Elem = 1;
        public bool Dot; public FxType Fx; public string Text; public SkillDef Skill;
    }

    public enum BattleResult { None, Victory, Defeat, Timeout }

    public sealed class Battle
    {
        public const double TmFull = 1000;
        static int _n;
        public readonly List<Unit> Allies;
        public readonly List<List<Unit>> Waves;
        public int Wave;
        public List<Unit> Enemies => Waves[Wave];
        public bool IsTitan; public int TurnLimit;
        public bool Over; public BattleResult Result;
        public int BossTurns; public long TitanDamage;
        readonly Random _rng;

        public Battle(List<Unit> allies, List<List<Unit>> waves, Random rng, bool titan = false, int turnLimit = 0)
        {
            Allies = allies; Waves = waves; _rng = rng; IsTitan = titan; TurnLimit = turnLimit;
            foreach (var u in Units) u.Tm = _rng.NextDouble() * 100;
            foreach (var w in waves.Skip(1)) foreach (var u in w) u.Tm = _rng.NextDouble() * 100;
        }

        // ---------- unit factories ----------
        public static Unit MakeUnit(bool ally, HeroDef t, Stats s) => Make(ally, t, s);
        static Unit Make(bool ally, HeroDef t, Stats s)
        {
            return new Unit
            {
                Key = (ally ? "A" : "B") + (_n++), Ally = ally, Template = t, Name = t.Name, El = s.El,
                MaxHp = s.Hp, Hp = s.Hp, Atk = s.Atk, Def = s.Def, Spd = s.Spd, Crit = s.Crit, Cdmg = s.Cdmg,
                Cds = new int[t.Skills.Length],
            };
        }
        public static Unit FromHero(Game g, HeroSave h)
        {
            var u = Make(true, Hero(h.id), g.HeroStats(h));
            u.HeroUid = h.uid; u.Level = h.level; u.Stars = h.stars;
            return u;
        }
        public static Unit FromEnemy(EnemySpec e)
        {
            var s = Game.BaseStats(e.Template, e.Level, e.Stars, e.El, Rarity.Common);
            double mul = e.Mul * (e.Boss ? Curve.BossStat : 1);
            var u = Make(false, e.Template, new Stats
            {
                El = e.El, Hp = Js.RoundInt(s.Hp * mul * (e.Boss ? Curve.BossHp : 1)), Atk = Js.RoundInt(s.Atk * mul),
                Def = Js.RoundInt(s.Def * mul), Crit = (int)s.Crit, Cdmg = (int)s.Cdmg,
            });
            u.Spd = s.Spd + e.Spd + (e.Boss ? 4 : 0);
            u.Level = e.ShownLevel; u.Boss = e.Boss; u.Stars = (int)Math.Floor(e.Stars);
            u.Name = (e.Boss ? "Warlord " : "Hollow ") + e.Template.ShortName;
            return u;
        }
        public static Unit TitanUnit(double teamPower, Element el)
        {
            int lvl = Math.Max(10, Math.Min(60, Js.RoundInt(teamPower / 1200)));
            var s = Game.BaseStats(Titan, lvl, 6, el);
            var u = Make(false, Titan, new Stats { El = el, Hp = 99999999, Atk = Js.RoundInt(s.Atk * 1.1), Def = Js.RoundInt(s.Def * 0.8), Spd = 110, Crit = 15, Cdmg = 50 });
            u.Level = lvl; u.Stars = 6; u.Boss = true; u.Titan = true;
            return u;
        }
        public static Battle ForStage(Game g, int idx) =>
            new Battle(g.Team.Select(h => FromHero(g, h)).ToList(), Game.StageWaves(idx).Select(w => w.Select(FromEnemy).ToList()).ToList(), g.Rng);
        public static Battle ForDungeon(Game g, DungeonKey key, int floor) =>
            new Battle(g.Team.Select(h => FromHero(g, h)).ToList(), Trials.DungeonWaves(key, floor, g.TodayElement).Select(w => w.Select(FromEnemy).ToList()).ToList(), g.Rng);
        public static Battle ForArena(Game g, Rival rv) =>
            new Battle(g.Team.Select(h => FromHero(g, h)).ToList(), new List<List<Unit>> { Trials.RivalUnits(rv) }, g.Rng);
        public static Battle ForTitan(Game g)
        {
            var team = g.Team;
            double tp = team.Count == 0 ? 0 : team.Average(h => (double)g.Power(h)) * 4;
            return new Battle(team.Select(h => FromHero(g, h)).ToList(), new List<List<Unit>> { new List<Unit> { TitanUnit(tp, TitanElement(g.Now())) } }, g.Rng, true, TitanTurns);
        }

        // ---------- queries ----------
        public IEnumerable<Unit> Units => Allies.Concat(Enemies);
        public static List<Unit> Living(IEnumerable<Unit> list) => list.Where(u => u.Alive).ToList();
        public List<Unit> Side(Unit u, bool own) => (u.Ally == own) ? Allies : Enemies;
        public double Speed(Unit u) => u.Spd * (1 + (u.Has(FxType.SpdUp) ? 0.3 : 0) - (u.Has(FxType.Slow) ? 0.3 : 0));
        double AtkOf(Unit u) => u.Atk * (1 + (u.Has(FxType.AtkUp) ? 0.4 : 0) - (u.Has(FxType.AtkDown) ? 0.4 : 0));
        double DefOf(Unit u) => u.Def * (1 + (u.Has(FxType.DefUp) ? 0.5 : 0) - (u.Has(FxType.DefDown) ? 0.5 : 0));
        public List<int> Usable(Unit u) => Enumerable.Range(0, u.Cds.Length).Where(i => u.Cds[i] == 0).ToList();

        public List<Unit> ValidTargets(Unit u, int skillIdx)
        {
            var sk = u.Template.Skills[skillIdx];
            if (sk.Target == Target.Enemy)
            {
                var foes = Living(Side(u, false));
                var taunters = foes.Where(f => f.Has(FxType.Taunt)).ToList();
                return taunters.Count > 0 ? taunters : foes;
            }
            if (sk.Target == Target.Ally) return Living(Side(u, true));
            return new List<Unit>();
        }
        // Units a skill will touch (used to highlight choices in the UI).
        public List<Unit> AffectedBy(Unit u, int skillIdx)
        {
            var sk = u.Template.Skills[skillIdx];
            switch (sk.Target)
            {
                case Target.Enemy: case Target.Ally: return ValidTargets(u, skillIdx);
                case Target.AllEnemies: return Living(Side(u, false));
                case Target.AllAllies: return Living(Side(u, true));
                default: return new List<Unit> { u };
            }
        }

        // ---------- turn flow ----------
        public Unit NextActor()
        {
            for (int guard = 0; guard < 10000; guard++)
            {
                var ready = Living(Units).Where(u => u.Tm >= TmFull).OrderByDescending(u => u.Tm).ThenByDescending(Speed).FirstOrDefault();
                if (ready != null) return ready;
                foreach (var u in Living(Units)) u.Tm += Speed(u) * 0.7;
            }
            return null;
        }

        public (List<BattleEvent> events, bool skip) BeginTurn(Unit u)
        {
            var ev = new List<BattleEvent>();
            u.Tm = 0;
            for (int i = 0; i < u.Cds.Length; i++) u.Cds[i] = Math.Max(0, u.Cds[i] - 1);
            foreach (var e in u.Effects.ToList())
            {
                if (e.Type == FxType.Poison)
                {
                    double d = u.MaxHp * 0.04;
                    if (u.Titan) d = Math.Min(d, Allies.Max(a => a.Atk) * 3);
                    ApplyDamage(u, Js.RoundInt(d), null, ev, false, 1, true);
                }
                else if (e.Type == FxType.Regen) HealUnit(u, u.MaxHp * 0.08, ev);
            }
            bool stunned = u.Alive && u.Has(FxType.Stun);
            if (stunned) ev.Add(new BattleEvent { Type = EvType.Text, Unit = u, Text = "Stunned!" });
            return (ev, stunned || !u.Alive);
        }

        public BattleResult EndTurn(Unit u, out bool newWave)
        {
            newWave = false;
            foreach (var e in u.Effects) { if (e.Fresh) e.Fresh = false; else e.Turns--; }
            u.Effects.RemoveAll(e => e.Turns <= 0 || (e.Type == FxType.Shield && e.Val <= 0));
            if (u.Titan) BossTurns++;
            return CheckEnd(out newWave);
        }

        BattleResult CheckEnd(out bool newWave)
        {
            newWave = false;
            if (Living(Allies).Count == 0) return Finish(BattleResult.Defeat);
            if (IsTitan && BossTurns >= TurnLimit) return Finish(BattleResult.Timeout);
            if (Living(Enemies).Count == 0)
            {
                if (Wave < Waves.Count - 1)
                {
                    Wave++; newWave = true;
                    foreach (var a in Allies) a.Tm = Math.Min(a.Tm, TmFull * 0.6);
                    return BattleResult.None;
                }
                return Finish(BattleResult.Victory);
            }
            return BattleResult.None;
        }
        BattleResult Finish(BattleResult r) { Over = true; Result = r; return r; }
        public void Retreat() { Finish(IsTitan ? BattleResult.Timeout : BattleResult.Defeat); }

        // AI: strongest ready skill, sensible target. Also used for auto battle.
        public (int skill, Unit target) AiChoose(Unit u)
        {
            var own = Living(Side(u, true));
            int hurt = own.Count(a => a.Hp / (double)a.MaxHp < 0.65);
            int best = 0; double bestScore = double.MinValue;
            foreach (var i in Usable(u))
            {
                var sk = u.Template.Skills[i];
                double score = sk.Cooldown * 10 + i;
                if (sk.Fx.Any(f => f.Type == FxType.Heal || f.Type == FxType.Regen) && hurt == 0) score -= 100;
                if (sk.Fx.Any(f => f.Type == FxType.Taunt) && u.Has(FxType.Taunt)) score -= 100;
                if (score > bestScore) { bestScore = score; best = i; }
            }
            var targets = ValidTargets(u, best);
            Unit target = null;
            if (targets.Count > 0)
            {
                target = u.Template.Skills[best].Target == Target.Enemy
                    ? targets.OrderByDescending(t => ElementMultiplier(u.El, t.El)).ThenBy(t => t.Hp / (double)t.MaxHp).First()
                    : targets.OrderBy(t => t.Hp / (double)t.MaxHp).First();
            }
            return (best, target);
        }

        public List<BattleEvent> Act(Unit u, int skillIdx, Unit chosen)
        {
            var ev = new List<BattleEvent>();
            var sk = u.Template.Skills[skillIdx];
            u.Cds[skillIdx] = sk.Cooldown;
            ev.Add(new BattleEvent { Type = EvType.Skill, Unit = u, Skill = sk });
            var own = Living(Side(u, true)); var foes = Living(Side(u, false));
            List<Unit> targets;
            switch (sk.Target)
            {
                case Target.Enemy:
                    var valid = ValidTargets(u, skillIdx);
                    targets = new List<Unit> { valid.Contains(chosen) ? chosen : valid.FirstOrDefault() };
                    break;
                case Target.AllEnemies: targets = foes; break;
                case Target.Ally: targets = new List<Unit> { own.Contains(chosen) ? chosen : u }; break;
                case Target.AllAllies: targets = own; break;
                default: targets = new List<Unit> { u }; break;
            }
            targets = targets.Where(t => t != null).ToList();
            if (sk.Mult > 0)
                foreach (var t in targets)
                    for (int h = 0; h < sk.Hits && t.Alive; h++) Hit(u, t, sk, ev);
            foreach (var f in sk.Fx)
            {
                var recips = f.To == FxTo.Self ? new List<Unit> { u } : f.To == FxTo.Allies ? Living(own) : f.To == FxTo.Enemies ? Living(foes) : targets.Where(t => t.Alive).ToList();
                foreach (var r in recips) ApplyFx(u, r, f, ev);
            }
            return ev;
        }

        void Hit(Unit u, Unit t, SkillDef sk, List<BattleEvent> ev)
        {
            double stat = sk.Scale == Scale.Def ? DefOf(u) : sk.Scale == Scale.Hp ? u.MaxHp : AtkOf(u);
            double em = ElementMultiplier(u.El, t.El);
            double dmg = stat * sk.Mult * em * (650 / (650 + DefOf(t)));
            bool crit = _rng.NextDouble() * 100 < u.Crit && em >= 1;
            if (crit) dmg *= 1 + u.Cdmg / 100.0;
            dmg *= 0.95 + _rng.NextDouble() * 0.1;
            ApplyDamage(t, Math.Max(1, Js.RoundInt(dmg)), u, ev, crit, em, false);
        }

        void ApplyDamage(Unit t, int dmg, Unit src, List<BattleEvent> ev, bool crit, double em, bool dot)
        {
            int remaining = dmg;
            var shield = t.Shield;
            if (shield != null && !dot)
            {
                int absorbed = Math.Min(shield.Val, remaining);
                shield.Val -= absorbed; remaining -= absorbed;
                if (absorbed > 0) ev.Add(new BattleEvent { Type = EvType.Absorb, Unit = t, Amount = absorbed });
                if (shield.Val <= 0) t.Effects.Remove(shield);
            }
            t.Hp -= remaining;
            if (src != null) src.DmgDealt += dmg;
            if (IsTitan && t.Titan) TitanDamage += dmg;
            ev.Add(new BattleEvent { Type = EvType.Damage, Unit = t, Source = src, Amount = remaining, Crit = crit, Elem = em, Dot = dot });
            if (t.Hp <= 0)
            {
                t.Hp = 0; t.Alive = false; t.Effects.Clear();
                ev.Add(new BattleEvent { Type = EvType.Death, Unit = t });
            }
        }

        void HealUnit(Unit t, double amount, List<BattleEvent> ev)
        {
            if (!t.Alive) return;
            int amt = Js.RoundInt(Math.Min(amount, t.MaxHp - t.Hp));
            t.Hp += amt;
            if (amt > 0) ev.Add(new BattleEvent { Type = EvType.Heal, Unit = t, Amount = amt });
        }

        void ApplyFx(Unit u, Unit r, FxDef f, List<BattleEvent> ev)
        {
            if (f.Chance >= 0 && _rng.NextDouble() > f.Chance) return;
            if (r.Titan && (f.Type == FxType.Stun || f.Type == FxType.TmDrain)) { ev.Add(new BattleEvent { Type = EvType.Text, Unit = r, Text = "Immune" }); return; }
            switch (f.Type)
            {
                case FxType.Heal: HealUnit(r, r.MaxHp * f.Pct, ev); return;
                case FxType.Tm: r.Tm += TmFull * f.Val; ev.Add(new BattleEvent { Type = EvType.Text, Unit = r, Text = "Turn Meter +" }); return;
                case FxType.TmDrain: r.Tm = Math.Max(0, r.Tm - TmFull * f.Val); ev.Add(new BattleEvent { Type = EvType.Text, Unit = r, Text = "Turn Meter -" }); return;
                case FxType.Cleanse:
                    if (r.Effects.RemoveAll(e => !FxDef.IsBuff(e.Type)) > 0) ev.Add(new BattleEvent { Type = EvType.Text, Unit = r, Text = "Cleansed" });
                    return;
                case FxType.Strip:
                    if (r.Effects.RemoveAll(e => FxDef.IsBuff(e.Type)) > 0) ev.Add(new BattleEvent { Type = EvType.Text, Unit = r, Text = "Buffs removed" });
                    return;
            }
            bool self = r == u;
            var existing = r.Effects.FirstOrDefault(e => e.Type == f.Type);
            if (f.Type == FxType.Shield)
            {
                int val = Js.RoundInt(u.MaxHp * f.Pct);
                if (existing != null) { existing.Val = Math.Max(existing.Val, val); existing.Turns = 2; }
                else r.Effects.Add(new Effect { Type = FxType.Shield, Val = val, Turns = 2, Fresh = self });
            }
            else if (existing != null) { existing.Turns = Math.Max(existing.Turns, f.Turns); if (self) existing.Fresh = true; }
            else r.Effects.Add(new Effect { Type = f.Type, Turns = Math.Max(1, f.Turns), Fresh = self });
            ev.Add(new BattleEvent { Type = EvType.Status, Unit = r, Fx = f.Type });
        }

        // Run to completion with AI on both sides (auto battle, tests, simulations).
        public BattleResult RunAuto(int maxTurns = 3000)
        {
            for (int n = 0; !Over && n < maxTurns; n++)
            {
                var u = NextActor();
                var (_, skip) = BeginTurn(u);
                if (!skip) { var c = AiChoose(u); Act(u, c.skill, c.target); }
                EndTurn(u, out _);
            }
            return Result;
        }
    }
}
