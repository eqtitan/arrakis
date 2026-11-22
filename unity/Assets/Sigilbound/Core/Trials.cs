// Trials: daily Dungeons (Gilded Vault, Hall of Echoes, Sigil Forge) and the Arena.
// Mirrors public/game/modes.js (v0.19.2): same floors, rewards, rival generation and tiers.
using System;
using System.Collections.Generic;
using System.Linq;
using static Sigilbound.Core.GameData;

namespace Sigilbound.Core
{
    public enum DungeonKey { Vault, Trial, Forge }

    public sealed class DungeonDef { public DungeonKey Key; public string Id, Name, Reward, Blurb; public int Chapter; }
    public sealed class ArenaTier { public string Name; public int Min; public Reward Week; }

    public sealed class Rival
    {
        public string Label, Name; public double Mul; public int Gain; public List<string> Ids = new List<string>();
        public int Level, Stars, Power;
    }

    public static class Trials
    {
        public const int DungeonFloors = 10;
        public const int DungeonRuns = 3;     // winning runs per dungeon per day (losses are free)
        public const int DungeonUnlock = 6;   // campaign stages cleared (end of chapter 1)
        public const int ArenaUnlock = 12;    // end of chapter 2
        public const int ArenaTries = 5;
        public const int ArenaLoss = -8;

        public static readonly DungeonDef[] Dungeons =
        {
            new DungeonDef { Key = DungeonKey.Vault, Id = "vault", Name = "Gilded Vault", Reward = "Gold", Chapter = 4,
                Blurb = "Hoard-guards defend the old treasury. Big gold payouts for upgrading gear and training heroes." },
            new DungeonDef { Key = DungeonKey.Trial, Id = "trial", Name = "Hall of Echoes", Reward = "Hero XP + Essence", Chapter = 2,
                Blurb = "Echoes of past champions. Every hero on your team earns a large amount of XP." },
            new DungeonDef { Key = DungeonKey.Forge, Id = "forge", Name = "Sigil Forge", Reward = "Gear of the set you choose", Chapter = 9,
                Blurb = "Pick a gear set before you fight. Higher floors drop rarer pieces." },
        };
        public static DungeonDef Dungeon(DungeonKey k) => Dungeons[(int)k];

        public static readonly ArenaTier[] Tiers =
        {
            new ArenaTier { Name = "Bronze", Min = 0, Week = new Reward { Gold = 5000, Common = 1 } },
            new ArenaTier { Name = "Silver", Min = 1150, Week = new Reward { Gold = 10000, Common = 2 } },
            new ArenaTier { Name = "Gold", Min = 1300, Week = new Reward { Gold = 18000, Common = 2, Mystic = 1 } },
            new ArenaTier { Name = "Platinum", Min = 1500, Week = new Reward { Gold = 30000, Common = 3, Mystic = 2 } },
            new ArenaTier { Name = "Sigil", Min = 1700, Week = new Reward { Gold = 50000, Mystic = 3, Radiant = 1 } },
        };
        public static ArenaTier TierFor(int points) => Tiers.LastOrDefault(t => points >= t.Min) ?? Tiers[0];
        public static ArenaTier TierNamed(string name) => Tiers.FirstOrDefault(t => t.Name == name) ?? Tiers[0];

        static readonly string[] RivalAdj = { "Ashen", "Gilded", "Hollowmoor", "Sunken", "Thorn", "Lantern", "Iron", "Moonlit", "Ember", "Silent", "Stormward", "Briar", "Duskwatch", "Saltmarsh", "Riven", "Copper" };
        static readonly string[] RivalNoun = { "Ravens", "Wardens", "Pilgrims", "Lanterns", "Oaths", "Foxes", "Covenant", "Bellringers", "Hounds", "Circle", "Vanguard", "Wayfarers", "Sigilborn", "Tide-callers", "Kestrels", "Banner" };

        // Today's dungeon foes' element: Math.floor(Date.now() / 864e5) % 5 (UTC days).
        public static Element TodayElement(DateTime now) => Elements[(int)(Js.UtcDays(now) % Elements.Length)];

        public static int DungeonIdx(int floor) => Math.Min(TotalStages - 1, Js.RoundInt(floor * 6.3));
        public static bool IsBossFloor(int floor) => floor == 4 || floor == 9;
        public static int ForgeRarity(int floor) => Math.Min(5, 1 + floor / 2);

        public static List<List<EnemySpec>> DungeonWaves(DungeonKey key, int floor, Element todayEl)
        {
            int idx = DungeonIdx(floor);
            var rng = new Seeded(1000 + (int)key * 97 + floor * 13);
            var g = Game.Grade(idx);
            var waves = new List<List<EnemySpec>>();
            int count = floor >= 5 ? 3 : 2;
            bool boss = IsBossFloor(floor);
            for (int w = 0; w < count; w++)
            {
                var wave = new List<EnemySpec>();
                for (int i = 0; i < 3; i++)
                {
                    var t = Heroes[(int)Math.Floor(rng.Next() * Heroes.Length)];
                    wave.Add(new EnemySpec { Template = t, Level = g.Level, Stars = g.Stars, Mul = g.Mul, Spd = g.Spd, ShownLevel = Game.StageLevel(idx), El = rng.Next() < 0.6 ? todayEl : t.Element });
                }
                if (boss && w == count - 1)
                {
                    var b = wave[1];
                    wave[1] = new EnemySpec { Template = b.Template, Level = b.Level, Stars = b.Stars, Mul = b.Mul, Spd = b.Spd, ShownLevel = Game.StageLevel(idx) + 2, El = todayEl, Boss = true };
                }
                waves.Add(wave);
            }
            return waves;
        }

        public static Reward DungeonRewards(DungeonKey key, int floor, bool first)
        {
            int idx = DungeonIdx(floor), lvl = Game.StageLevel(idx);
            var r = new Reward();
            if (key == DungeonKey.Vault) r.Gold = Js.RoundInt(1500 * Math.Pow(floor + 1, 1.5));
            if (key == DungeonKey.Trial) { r.Xp = Js.RoundInt(Game.StageRewards(idx, false).Xp * 3.0); r.Essence = 5 + floor * 3; }
            if (key == DungeonKey.Forge) r.Gold = Js.RoundInt(150 + lvl * 20.0);
            if (first) { r.Common = 1; if (IsBossFloor(floor)) r.Mystic = 1; }
            return r;
        }

        // Rival teams for the arena, matched to the player's current team (rivalsFor in modes.js).
        public static List<Rival> RivalsFor(int seed, IList<HeroSave> team, int teamPower)
        {
            var rng = new Seeded(seed * 31 + 7);
            int n = Math.Max(3, Math.Min(4, team.Count > 0 ? team.Count : 3));
            int avgLv = team.Count > 0 ? Js.RoundInt(team.Sum(h => (double)h.level) / team.Count) : 5;
            int avgSt = team.Count > 0 ? Js.RoundInt(team.Sum(h => (double)h.stars) / team.Count) : 2;
            int P = Math.Max(2000, teamPower);
            var specs = new (string label, double mul, int gain)[] { ("Easy", 0.8, 14), ("Even", 0.95, 20), ("Hard", 1.08, 28) };
            var list = new List<Rival>();
            foreach (var (label, mul, gain) in specs)
            {
                var ids = new List<string>();
                while (ids.Count < n) { var t = Heroes[(int)Math.Floor(rng.Next() * Heroes.Length)]; if (!ids.Contains(t.Id)) ids.Add(t.Id); }
                string name = $"{RivalAdj[(int)Math.Floor(rng.Next() * RivalAdj.Length)]} {RivalNoun[(int)Math.Floor(rng.Next() * RivalNoun.Length)]}";
                int lv = Math.Max(1, avgLv + Js.RoundInt((mul - 1) * 20)), st = Math.Max(1, Math.Min(6, avgSt + (mul > 1.05 ? 1 : 0)));
                int div = Math.Max(1, team.Count > 0 ? team.Count : n);
                list.Add(new Rival { Label = label, Mul = mul, Gain = gain, Name = name, Ids = ids, Level = lv, Stars = st, Power = Js.RoundInt(P * mul * n / div) });
            }
            return list;
        }

        // Battle units for a rival team: each unit scaled so the team's power matches the rival's.
        public static List<Unit> RivalUnits(Rival rv)
        {
            double perUnit = rv.Power / (double)rv.Ids.Count;
            return rv.Ids.Select(id =>
            {
                var t = Hero(id);
                var s = Game.BaseStats(t, rv.Level, rv.Stars, t.Element);
                double core = s.Hp / 10 + s.Atk * 2 + s.Def * 1.5, rest = s.Power - core;
                double k = Math.Max(0.5, Math.Min(3, (perUnit - rest) / core));
                var u = Battle.MakeUnit(false, t, new Stats { El = s.El, Hp = Js.RoundInt(s.Hp * k), Atk = Js.RoundInt(s.Atk * k), Def = Js.RoundInt(s.Def * k), Crit = (int)s.Crit, Cdmg = (int)s.Cdmg });
                u.Spd = s.Spd; u.Level = rv.Level; u.Stars = rv.Stars; u.Rival = true; u.Name = t.ShortName;
                return u;
            }).ToList();
        }

        public static int ArenaWinGold(Rival rv) => Js.RoundInt(400 + rv.Level * 40.0);
    }

    // Same deterministic generator as the web's seeded(), so stages, dungeons and rivals match.
    public sealed class Seeded
    {
        long _s;
        public Seeded(int seed) { _s = seed * 9301L + 49297; }
        public double Next() { _s = (_s * 9301 + 49297) % 233280; return _s / 233280.0; }
    }

    public sealed partial class Game
    {
        public bool DungeonsOpen => S.cleared >= Trials.DungeonUnlock;
        public bool ArenaOpen => S.cleared >= Trials.ArenaUnlock;
        public Element TodayElement => Trials.TodayElement(Now());

        // ensureModes(): daily counters, and the weekly arena reset (pays out the tier you finished
        // in, then softens points halfway toward 1000).
        public ModesSave EnsureModes()
        {
            EnsureDaily();
            var M = S.modes ??= new ModesSave();
            string wk = Js.WeekKey(Now());
            if (!M.initialized) { M.initialized = true; M.arena = new ArenaSave { week = wk }; }
            var A = M.arena;
            if (A.week != wk)
            {
                if (A.wins + A.losses > 0) A.pendingTier = Trials.TierFor(A.points).Name;
                A.points = Js.RoundInt(1000 + (A.points - 1000) * 0.5);
                A.wins = 0; A.losses = 0; A.week = wk;
            }
            return M;
        }

        public int DungeonFloorsCleared(DungeonKey k) { var M = EnsureModes(); return k == DungeonKey.Vault ? M.floorsVault : k == DungeonKey.Trial ? M.floorsTrial : M.floorsForge; }
        void SetFloorsCleared(DungeonKey k, int v) { var M = EnsureModes(); if (k == DungeonKey.Vault) M.floorsVault = v; else if (k == DungeonKey.Trial) M.floorsTrial = v; else M.floorsForge = v; }
        public int DungeonRunsLeft(DungeonKey k) { EnsureModes(); var d = S.daily; return k == DungeonKey.Vault ? d.runsVault : k == DungeonKey.Trial ? d.runsTrial : d.runsForge; }
        void SetRunsLeft(DungeonKey k, int v) { var d = S.daily; if (k == DungeonKey.Vault) d.runsVault = v; else if (k == DungeonKey.Trial) d.runsTrial = v; else d.runsForge = v; }
        public bool CanEnterFloor(DungeonKey k, int floor) => DungeonsOpen && floor >= 0 && floor < Trials.DungeonFloors && floor <= DungeonFloorsCleared(k) && DungeonRunsLeft(k) > 0;
        public GearSet ForgeSet { get => (GearSet)EnsureModes().forgeSet; set => EnsureModes().forgeSet = (int)value; }

        public sealed class DungeonResult { public Reward Reward; public bool First; public List<(HeroSave hero, int levels)> LevelUps = new List<(HeroSave, int)>(); public List<GearSave> Drops = new List<GearSave>(); public int RunsLeft; }

        // A won dungeon floor (a loss costs nothing, so there is no call for it).
        public DungeonResult CompleteDungeon(DungeonKey key, int floor)
        {
            EnsureModes();
            bool first = floor >= DungeonFloorsCleared(key);
            if (first) SetFloorsCleared(key, floor + 1);
            SetRunsLeft(key, Math.Max(0, DungeonRunsLeft(key) - 1));
            var r = Trials.DungeonRewards(key, floor, first);
            Grant(r);
            var res = new DungeonResult { Reward = r, First = first };
            if (r.Xp > 0) foreach (var h in Team) { int n = GiveXp(h, r.Xp); if (n > 0) res.LevelUps.Add((h, n)); }
            if (key == DungeonKey.Forge)
            {
                int rar = Trials.ForgeRarity(floor);
                var set = ForgeSet;
                var a = MakeGear(rar); a.set = (int)set; res.Drops.Add(a);
                if (R() < 0.35) { var b = MakeGear(Math.Max(1, rar - 1)); b.set = (int)set; res.Drops.Add(b); }
            }
            S.wins++; BumpQuest("win");
            res.RunsLeft = DungeonRunsLeft(key);
            return res;
        }

        // ---------- arena ----------
        public List<Rival> CurrentRivals() => Trials.RivalsFor(EnsureModes().arena.seed, Team, TeamPower);
        public void RefreshRivals() => EnsureModes().arena.seed++;

        public sealed class ArenaResult { public bool Win; public int Delta; public int Points; public ArenaTier Before, After; public Reward Reward = new Reward(); }

        public ArenaResult CompleteArena(Rival rv, bool win)
        {
            var A = EnsureModes().arena;
            S.daily.arenaTries = Math.Max(0, S.daily.arenaTries - 1);
            var res = new ArenaResult { Win = win, Before = Trials.TierFor(A.points), Delta = win ? rv.Gain : Trials.ArenaLoss };
            A.points = Math.Max(0, A.points + res.Delta); A.best = Math.Max(A.best, A.points);
            if (win) A.wins++; else A.losses++;
            A.seed++;
            if (win) { res.Reward = new Reward { Gold = Trials.ArenaWinGold(rv) }; Grant(res.Reward); S.wins++; BumpQuest("win"); }
            res.Points = A.points; res.After = Trials.TierFor(A.points);
            return res;
        }

        public Reward ClaimArenaWeekly()
        {
            var A = EnsureModes().arena;
            if (string.IsNullOrEmpty(A.pendingTier)) return null;
            var r = Trials.TierNamed(A.pendingTier).Week;
            Grant(r); A.pendingTier = "";
            return r;
        }

        // Badge count for the Trials tab (trialsBadge in modes.js).
        public int TrialsBadge()
        {
            EnsureModes();
            int n = S.daily.titanTries;
            if (DungeonsOpen) foreach (DungeonKey k in Enum.GetValues(typeof(DungeonKey))) if (DungeonRunsLeft(k) > 0) n++;
            if (ArenaOpen && S.daily.arenaTries > 0) n++;
            return n;
        }
    }
}
