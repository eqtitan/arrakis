// Features from the web's extras.js and v0.21 additions: Hard campaign, Achievements, Skill Tome
// upgrades, team presets, Best team, Auto-equip team and gear lock. (The turn-order prediction is
// Battle.PredictTurns; the Codex is a client screen over GameData.Heroes.)
using System;
using System.Collections.Generic;
using System.Linq;
using static Sigilbound.Core.GameData;

namespace Sigilbound.Core
{
    public sealed class Achievement
    {
        public string Id, Name, Desc; public long Goal; public Func<Game, long> Get; public Reward Reward;
    }

    public sealed partial class Game
    {
        // ---------- Hard campaign ----------
        // Every Normal stage you've cleared can be replayed on Hard (in order): enemies ×1.6 and
        // shown 10 levels higher, double gold, 1.5× XP and a guaranteed better gear drop.
        public const double HardMul = 1.6; public const int HardLvl = 10; public const double HardGold = 2, HardXp = 1.5;
        public bool HardOpen(int idx) => idx >= 0 && idx < S.cleared && idx <= S.hardCleared;

        public static List<List<EnemySpec>> HardWaves(int idx) =>
            StageWaves(idx).Select(w => w.Select(e => new EnemySpec
            {
                Template = e.Template, Level = e.Level, Stars = e.Stars, Mul = e.Mul * HardMul, Spd = e.Spd, ShownLevel = e.ShownLevel + HardLvl, El = e.El, Boss = e.Boss,
            }).ToList()).ToList();

        public static Reward HardRewards(int idx, bool first)
        {
            var b = StageRewards(idx, false);
            var r = new Reward { Gold = Js.RoundInt(b.Gold * HardGold), Xp = Js.RoundInt(b.Xp * HardXp) };
            if (first) { r.Common = 1; if (IsBossStage(idx)) { r.Mystic = 1; r.Tome = 1; } }
            return r;
        }
        public static int HardGearRarity(int idx) => Math.Min(5, 2 + ChapterOf(idx) / 2 + (IsBossStage(idx) ? 1 : 0));

        public VictoryResult CompleteHard(int idx)
        {
            bool first = idx == S.hardCleared;
            if (first) S.hardCleared = idx + 1;
            var r = HardRewards(idx, first);
            Grant(r);
            var res = new VictoryResult { Reward = r, FirstClear = first };
            foreach (var h in Team) { int n = GiveXp(h, r.Xp); if (n > 0) res.LevelUps.Add((h, n)); }
            res.Gear = MakeGear(HardGearRarity(idx));
            S.wins++; BumpQuest("win");
            return res;
        }

        // ---------- achievements ----------
        public static readonly Achievement[] Achievements =
        {
            new Achievement { Id = "win10", Name = "First Steps", Desc = "Win 10 battles", Goal = 10, Get = g => g.S.wins, Reward = new Reward { Gold = 3000 } },
            new Achievement { Id = "win100", Name = "Seasoned", Desc = "Win 100 battles", Goal = 100, Get = g => g.S.wins, Reward = new Reward { Gold = 15000, Common = 2, Tome = 1 } },
            new Achievement { Id = "win500", Name = "Warlord", Desc = "Win 500 battles", Goal = 500, Get = g => g.S.wins, Reward = new Reward { Mystic = 3 } },
            new Achievement { Id = "ch1", Name = "Sigil Bearer", Desc = "Clear chapter 1", Goal = 6, Get = g => g.S.cleared, Reward = new Reward { Common = 2 } },
            new Achievement { Id = "ch5", Name = "Halfway There", Desc = "Clear chapter 5", Goal = 30, Get = g => g.S.cleared, Reward = new Reward { Mystic = 2, Tome = 2 } },
            new Achievement { Id = "ch10", Name = "Sigil Restored", Desc = "Clear the whole campaign", Goal = 60, Get = g => g.S.cleared, Reward = new Reward { Radiant = 2 } },
            new Achievement { Id = "hard6", Name = "No Mercy", Desc = "Clear Hard chapter 1", Goal = 6, Get = g => g.S.hardCleared, Reward = new Reward { Mystic = 1, Tome = 2 } },
            new Achievement { Id = "hard30", Name = "Iron Will", Desc = "Clear Hard chapter 5", Goal = 30, Get = g => g.S.hardCleared, Reward = new Reward { Radiant = 1 } },
            new Achievement { Id = "heroes10", Name = "Growing Banner", Desc = "Own 10 heroes", Goal = 10, Get = g => g.S.heroes.Count, Reward = new Reward { Common = 2 } },
            new Achievement { Id = "codex24", Name = "Collector", Desc = "Discover all 24 heroes", Goal = 24, Get = g => g.S.heroes.Select(h => h.id).Distinct().Count(), Reward = new Reward { Radiant = 2 } },
            new Achievement { Id = "summon50", Name = "Shard Caller", Desc = "Summon 50 times", Goal = 50, Get = g => g.S.summons, Reward = new Reward { Mystic = 2 } },
            new Achievement { Id = "star6", Name = "Ascended", Desc = "Raise a hero to 6★", Goal = 1, Get = g => g.S.heroes.Any(h => h.stars >= 6) ? 1 : 0, Reward = new Reward { Radiant = 1 } },
            new Achievement { Id = "lv60", Name = "Paragon", Desc = "Reach level 60 with a hero", Goal = 60, Get = g => g.S.heroes.Select(h => h.level).DefaultIfEmpty(0).Max(), Reward = new Reward { Mystic = 2 } },
            new Achievement { Id = "gear10", Name = "Master Smith", Desc = "Upgrade a gear piece to +10", Goal = 10, Get = g => g.S.gear.Select(x => x.level).DefaultIfEmpty(0).Max(), Reward = new Reward { Gold = 20000 } },
            new Achievement { Id = "titan", Name = "Titan Slayer", Desc = "Deal 1M damage to the Titan in one try", Goal = 1000000, Get = g => g.S.titanBestAllTime, Reward = new Reward { Mystic = 2 } },
            new Achievement { Id = "dungeon", Name = "Delver", Desc = "Clear floor 10 of any dungeon", Goal = 10, Get = g => g.S.modes == null ? 0 : Math.Max(g.S.modes.floorsVault, Math.Max(g.S.modes.floorsTrial, g.S.modes.floorsForge)), Reward = new Reward { Mystic = 2 } },
            new Achievement { Id = "arena", Name = "Gladiator", Desc = "Reach Gold rank in the Arena", Goal = 1300, Get = g => g.S.modes?.arena?.best ?? 1000, Reward = new Reward { Mystic = 2 } },
        };
        public long AchProgress(Achievement a) => Math.Min(a.Goal, a.Get(this));
        public bool AchClaimed(Achievement a) => S.ach.Contains(a.Id);
        public bool AchReady(Achievement a) => !AchClaimed(a) && a.Get(this) >= a.Goal;
        public int AchReadyCount => Achievements.Count(AchReady);
        public Reward ClaimAch(string id)
        {
            var a = Achievements.FirstOrDefault(x => x.Id == id);
            if (a == null || !AchReady(a)) return null;
            S.ach.Add(a.Id); Grant(a.Reward);
            return a.Reward;
        }

        // ---------- skill upgrades (Skill Tomes) ----------
        public const int SkillMaxLv = 4; // shown as Lv 1..5
        public static int SkillUpCost(int lv) => lv + 1;
        public bool CanSkillUp(HeroSave h, int i) => h != null && i >= 0 && i < Hero(h.id).Skills.Length && h.SkillLv(i) < SkillMaxLv && S.tomes >= SkillUpCost(h.SkillLv(i));
        public bool SkillUp(HeroSave h, int i)
        {
            if (!CanSkillUp(h, i)) return false;
            int lv = h.SkillLv(i);
            S.tomes -= SkillUpCost(lv);
            while (h.skillLv.Count <= i) h.skillLv.Add(0);
            h.skillLv[i] = lv + 1;
            return true;
        }

        // ---------- teams ----------
        public const int TeamPresets = 3;
        List<int> Preset(int i) { while (S.teams.Count < TeamPresets) S.teams.Add(new TeamPreset()); return S.teams[i].uids; }
        public List<HeroSave> PresetHeroes(int i) => i < S.teams.Count ? S.teams[i].uids.Select(HeroByUid).Where(h => h != null).ToList() : new List<HeroSave>();
        public void TeamSave(int i) { var p = Preset(i); p.Clear(); p.AddRange(S.team); }
        public bool TeamLoad(int i)
        {
            var valid = (i < S.teams.Count ? S.teams[i].uids : new List<int>()).Where(u => HeroByUid(u) != null).ToList();
            if (valid.Count == 0) return false;
            S.team = valid;
            return true;
        }
        // Strongest 4 heroes by power (stable, as Array.sort).
        public void TeamBest() => S.team = S.heroes.OrderByDescending(Power).Take(4).Select(h => h.uid).ToList();
        // Best gear on the whole team, strongest hero first.
        public void AutoEquipTeam() { foreach (var h in Team.OrderByDescending(Power).ToList()) AutoEquip(h); }

        // ---------- gear lock / sell junk ----------
        public int SellJunk()
        {
            int total = 0;
            foreach (var g in S.gear.Where(x => GearOwner(x) == null && x.rarity <= 2 && !x.locked).ToList()) { total += GearSellValue(g); SellGear(g); }
            return total;
        }
    }
}
