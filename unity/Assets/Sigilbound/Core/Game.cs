// Progression rules: heroes, stats, gear, summoning, daily quests, campaign stages.
// Mirrors public/game/state.js. Pure C#; randomness and clock are injectable for tests.
using System;
using System.Collections.Generic;
using System.Linq;
using static Sigilbound.Core.GameData;

namespace Sigilbound.Core
{
    public sealed class Stats
    {
        public Element El; public int Hp, Atk, Def, Spd, Crit, Cdmg;
        public List<GearSet> Sets = new List<GearSet>();
        public int Power => Js.RoundInt(Hp / 10.0 + Atk * 2 + Def * 1.5 + Spd * 4 + Crit * 3 + Cdmg);
    }

    // Unrounded stats, as state.js baseStats returns them (enemy, Titan and rival stats are
    // rounded only after their multipliers, exactly like the web game).
    public sealed class RawStats
    {
        public Element El; public double Hp, Atk, Def, Spd, Crit = 15, Cdmg = 50;
        public int Power => Js.RoundInt(Hp / 10.0 + Atk * 2 + Def * 1.5 + Spd * 4 + Crit * 3 + Cdmg);
    }

    public sealed class EnemySpec
    {
        public HeroDef Template; public int Level; public double Stars; public double Mul; public int Spd; public int ShownLevel;
        public Element El; public bool Boss;
    }

    public sealed partial class Game
    {
        public SaveData S;
        public readonly Random Rng;
        public Func<DateTime> Now = () => DateTime.Now;

        public Game(SaveData save = null, int? seed = null)
        {
            S = save ?? new SaveData();
            Rng = seed.HasValue ? new Random(seed.Value) : new Random();
        }

        double R() => Rng.NextDouble();
        int RandInt(int a, int b) => a + Rng.Next(b - a + 1);
        T Pick<T>(IList<T> list) => list[Rng.Next(list.Count)];
        int Uid() => S.nextUid++;
        public HeroSave HeroByUid(int uid) => S.heroes.FirstOrDefault(h => h.uid == uid);
        public GearSave GearByUid(int uid) => uid == 0 ? null : S.gear.FirstOrDefault(g => g.uid == uid);
        public List<HeroSave> Team => S.team.Select(HeroByUid).Where(h => h != null).ToList();
        public string Today => Js.UtcDate(Now());

        // ---------- rewards / daily ----------
        public void Grant(Reward r)
        {
            S.gold += r.Gold; S.essence += r.Essence;
            S.shardCommon += r.Common; S.shardMystic += r.Mystic; S.shardRadiant += r.Radiant;
            S.tomes += r.Tome;
        }
        public void EnsureDaily()
        {
            if (S.daily == null || S.daily.date != Today) S.daily = new DailySave { date = Today };
        }
        public int QuestProgress(string id)
        {
            EnsureDaily(); var d = S.daily;
            return id switch
            {
                "win" => d.win, "summon" => d.summon, "upgrade" => d.upgrade, "titan" => d.titan,
                _ => (d.cWin ? 1 : 0) + (d.cSummon ? 1 : 0) + (d.cUpgrade ? 1 : 0) + (d.cTitan ? 1 : 0),
            };
        }
        public bool QuestClaimed(string id)
        {
            var d = S.daily;
            return id switch { "win" => d.cWin, "summon" => d.cSummon, "upgrade" => d.cUpgrade, "titan" => d.cTitan, _ => d.cAll };
        }
        public void BumpQuest(string id, int n = 1)
        {
            EnsureDaily();
            switch (id) { case "win": S.daily.win += n; break; case "summon": S.daily.summon += n; break; case "upgrade": S.daily.upgrade += n; break; case "titan": S.daily.titan += n; break; }
        }
        public Reward ClaimQuest(string id)
        {
            var q = DailyQuests.FirstOrDefault(x => x.Id == id);
            if (q == null || QuestClaimed(id) || QuestProgress(id) < q.Goal) return null;
            switch (id) { case "win": S.daily.cWin = true; break; case "summon": S.daily.cSummon = true; break; case "upgrade": S.daily.cUpgrade = true; break; case "titan": S.daily.cTitan = true; break; default: S.daily.cAll = true; break; }
            Grant(q.Reward);
            return q.Reward;
        }
        public bool LoginAvailable => S.loginLast != Today;
        public Reward ClaimLogin()
        {
            if (!LoginAvailable) return null;
            var r = LoginRewards[S.loginDay % LoginRewards.Length];
            S.loginDay++; S.loginLast = Today; Grant(r);
            return r;
        }

        // ---------- heroes ----------
        public HeroSave AddHero(string id)
        {
            var h = new HeroSave { uid = Uid(), id = id, stars = NaturalStars(Hero(id).Rarity) };
            S.heroes.Add(h);
            return h;
        }

        public static RawStats BaseStats(HeroDef t, double level, double stars, Element el, Rarity? rarityOverride = null)
        {
            var rar = rarityOverride ?? t.Rarity;
            var role = Mods(t.Role);
            int tier = (int)rar;
            double grow = (1 + (level - 1) * 0.05) * (1 + (stars - 1) * 0.15) * RarityMult(rar);
            return new RawStats
            {
                El = el, Hp = 1000 * role.Hp * grow, Atk = 100 * role.Atk * grow, Def = 90 * role.Def * grow,
                Spd = 95 + tier * 2 + role.Spd + (stars - 1), Crit = 15, Cdmg = 50,
            };
        }

        public Stats HeroStats(HeroSave h)
        {
            var t = Hero(h.id);
            var role = Mods(t.Role);
            double grow = (1 + (h.level - 1) * 0.05) * (1 + (h.stars - 1) * 0.15) * RarityMult(t.Rarity);
            double hp = 1000 * role.Hp * grow, atk = 100 * role.Atk * grow, def = 90 * role.Def * grow;
            double spd = 95 + (int)t.Rarity * 2 + role.Spd + (h.stars - 1);
            double fAtk = 0, fHp = 0, fDef = 0, fSpd = 0, crit = 15, cdmg = 50, pAtk = 0, pHp = 0, pDef = 0, pSpd = 0;
            var setCount = new Dictionary<GearSet, int>();
            void Add(Stat s, double v)
            {
                switch (s)
                {
                    case Stat.Atk: fAtk += v; break; case Stat.Hp: fHp += v; break; case Stat.Def: fDef += v; break; case Stat.Spd: fSpd += v; break;
                    case Stat.AtkPct: pAtk += v; break; case Stat.HpPct: pHp += v; break; case Stat.DefPct: pDef += v; break; case Stat.SpdPct: pSpd += v; break;
                    case Stat.Crit: crit += v; break; case Stat.Cdmg: cdmg += v; break;
                }
            }
            foreach (Slot slot in Enum.GetValues(typeof(Slot)))
            {
                var g = GearByUid(h.GetGear(slot));
                if (g == null) continue;
                Add(SlotMainStat(slot), GearMainValue(g));
                foreach (var sub in g.subs) Add((Stat)sub.stat, sub.val);
                setCount[g.Set] = setCount.TryGetValue(g.Set, out var n) ? n + 1 : 1;
            }
            var st = new Stats { El = t.Element };
            foreach (var kv in setCount)
                for (int i = 0; i < kv.Value / 2; i++) { var b = SetBonus(kv.Key); Add(b.stat, b.val); st.Sets.Add(kv.Key); }
            st.Hp = Js.RoundInt((hp + fHp) * (1 + pHp / 100));
            st.Atk = Js.RoundInt((atk + fAtk) * (1 + pAtk / 100));
            st.Def = Js.RoundInt((def + fDef) * (1 + pDef / 100));
            st.Spd = Js.RoundInt((spd + fSpd) * (1 + pSpd / 100));
            st.Crit = (int)Math.Min(100, crit); st.Cdmg = (int)cdmg;
            return st;
        }
        public int Power(HeroSave h) => HeroStats(h).Power;

        // Equipped gear as the 3D model shows it (art.js heroGearLook): rarity and set per slot.
        public GearLook GearLookOf(HeroSave h)
        {
            if (h == null) return null;
            GearLook.Item I(Slot s) { var g = GearByUid(h.GetGear(s)); return g == null ? null : new GearLook.Item { R = g.rarity, S = SaveCodec.SetKey(g.Set) }; }
            var look = new GearLook { Weapon = I(Slot.Weapon), Helm = I(Slot.Helm), Chest = I(Slot.Chest), Boots = I(Slot.Boots) };
            return look.Weapon == null && look.Helm == null && look.Chest == null && look.Boots == null ? null : look;
        }

        // Gear look for any battle unit: allies their equipped items, Hollow enemies plain gear by level, rivals by level.
        public GearLook GearLookOf(Unit u) => u.Titan ? null : u.Ally ? GearLookOf(HeroByUid(u.HeroUid)) : u.Rival ? GearLook.ForRival(u.Level) : GearLook.ForEnemy(u.Level, u.Boss);
        public int TeamPower => Team.Sum(Power);

        public int GiveXp(HeroSave h, int amount)
        {
            int cap = MaxLevelFor(h.stars), ups = 0;
            if (h.level >= cap) return 0;
            h.xp += amount;
            while (h.level < cap && h.xp >= XpToNext(h.level)) { h.xp -= XpToNext(h.level); h.level++; ups++; }
            if (h.level >= cap) h.xp = 0;
            return ups;
        }
        public int XpToCap(HeroSave h)
        {
            int need = 0;
            for (int l = h.level; l < MaxLevelFor(h.stars); l++) need += XpToNext(l);
            return Math.Max(0, need - h.xp);
        }
        public bool Train(HeroSave h, bool toCap)
        {
            int xp = toCap ? XpToCap(h) : XpToNext(h.level) - h.xp;
            int cost = (int)Math.Ceiling(xp / (double)TrainXpPerGold);
            if (xp <= 0 || S.gold < cost) return false;
            S.gold -= cost; GiveXp(h, xp);
            return true;
        }

        public List<HeroSave> RankUpFodder(HeroSave h) =>
            S.heroes.Where(o => o.uid != h.uid && o.stars == h.stars && !o.locked && !S.team.Contains(o.uid)).ToList();
        public bool CanRankUp(HeroSave h) =>
            h.stars < MaxStars && h.level >= MaxLevelFor(h.stars) && RankUpFodder(h).Count >= h.stars && S.gold >= RankUpGold(h.stars);
        public List<HeroSave> SuggestFodder(HeroSave h) =>
            RankUpFodder(h).OrderBy(f => f.level).ThenBy(f => (int)Hero(f.id).Rarity).Take(h.stars).ToList();
        public bool RankUp(HeroSave h, List<HeroSave> fodder)
        {
            if (!CanRankUp(h) || fodder.Count != h.stars || fodder.Any(f => !RankUpFodder(h).Contains(f))) return false;
            foreach (var f in fodder) Release(f, false);
            S.gold -= RankUpGold(h.stars);
            h.stars++;
            return true;
        }
        public int Release(HeroSave h, bool giveEssence = true)
        {
            S.heroes.Remove(h); S.team.Remove(h.uid);
            int ess = giveEssence ? EssenceValue(Hero(h.id).Rarity) * h.stars : 0;
            S.essence += ess;
            return ess;
        }

        // ---------- gear ----------
        public GearSave MakeGear(int rarity, Slot? slot = null)
        {
            var pool = SubStats.ToList();
            var g = new GearSave { uid = Uid(), slot = (int)(slot ?? (Slot)Rng.Next(4)), rarity = rarity, set = Rng.Next(5) };
            for (int i = 0; i < Math.Min(3, rarity - 1); i++)
            {
                var stat = pool[Rng.Next(pool.Count)]; pool.Remove(stat);
                var (a, b) = SubRoll(stat);
                g.subs.Add(new SubStatSave { stat = (int)stat, val = RandInt(a, b) });
            }
            S.gear.Add(g);
            return g;
        }
        public static int GearMainValue(GearSave g) => Js.RoundInt(SlotBase(g.Slot) * (1 + g.rarity * 0.25) * (1 + g.level * 0.15));
        public static int GearUpgradeCost(GearSave g) => 120 * (g.level + 1) * g.rarity;
        public static int GearSellValue(GearSave g) => 150 * g.rarity * (1 + g.level);
        public static double GearScore(GearSave g) => GearMainValue(g) / (double)SlotBase(g.Slot) * 10 + g.subs.Sum(x => x.val);
        public HeroSave GearOwner(GearSave g) => S.heroes.FirstOrDefault(h => h.GetGear(g.Slot) == g.uid);
        public bool UpgradeGear(GearSave g)
        {
            if (g.level >= GearMaxLevel || S.gold < GearUpgradeCost(g)) return false;
            S.gold -= GearUpgradeCost(g);
            g.level++;
            if (g.level % 3 == 0)
            {
                if (g.subs.Count < 4)
                {
                    var free = SubStats.Where(s => g.subs.All(x => x.stat != (int)s)).ToList();
                    var stat = Pick(free); var (a, b) = SubRoll(stat);
                    g.subs.Add(new SubStatSave { stat = (int)stat, val = RandInt(a, b) });
                }
                else { var sub = Pick(g.subs); var (a, b) = SubRoll((Stat)sub.stat); sub.val += RandInt(a, b); }
            }
            BumpQuest("upgrade");
            return true;
        }
        public void SellGear(GearSave g)
        {
            if (g == null || g.locked) return;
            GearOwner(g)?.SetGear(g.Slot, 0);
            S.gear.Remove(g);
            S.gold += GearSellValue(g);
        }
        public void Equip(HeroSave h, GearSave g)
        {
            GearOwner(g)?.SetGear(g.Slot, 0);
            h.SetGear(g.Slot, g.uid);
        }
        public void AutoEquip(HeroSave h)
        {
            foreach (Slot slot in Enum.GetValues(typeof(Slot)))
            {
                var best = S.gear.Where(g => g.Slot == slot && (GearOwner(g) == null || GearOwner(g) == h)).OrderByDescending(GearScore).FirstOrDefault();
                if (best != null) Equip(h, best);
            }
        }

        // ---------- summoning ----------
        Rarity RollRarity(Shard shard)
        {
            int pity = ShardPity(shard);
            int counter = shard == Shard.Mystic ? S.pityMystic : S.pityRadiant;
            if (pity > 0 && counter + 1 >= pity) return Rarity.Legendary;
            var rates = ShardRates(shard);
            double r = R() * 100;
            for (int i = 0; i < 4; i++) { r -= rates[i]; if (r < 0) return (Rarity)i; }
            return (Rarity)Array.FindIndex(rates, x => x > 0);
        }
        public int ShardCount(Shard s) => s switch { Shard.Common => S.shardCommon, Shard.Mystic => S.shardMystic, _ => S.shardRadiant };
        void AddShards(Shard s, int n) { switch (s) { case Shard.Common: S.shardCommon += n; break; case Shard.Mystic: S.shardMystic += n; break; default: S.shardRadiant += n; break; } }
        public int PityLeft(Shard s) => ShardPity(s) - (s == Shard.Mystic ? S.pityMystic : S.pityRadiant);
        public List<HeroSave> Summon(Shard shard, int count)
        {
            var results = new List<HeroSave>();
            if (ShardCount(shard) < count) return results;
            AddShards(shard, -count);
            for (int i = 0; i < count; i++)
            {
                var rarity = RollRarity(shard);
                if (shard == Shard.Mystic) S.pityMystic = rarity == Rarity.Legendary ? 0 : S.pityMystic + 1;
                if (shard == Shard.Radiant) S.pityRadiant = rarity == Rarity.Legendary ? 0 : S.pityRadiant + 1;
                results.Add(AddHero(Pick(Heroes.Where(x => x.Rarity == rarity).ToList()).Id));
            }
            S.summons += count;
            BumpQuest("summon", count);
            return results;
        }
        public bool Exchange(Shard shard)
        {
            int cost = ExchangeCost(shard);
            if (S.essence < cost) return false;
            S.essence -= cost; AddShards(shard, 1);
            return true;
        }

        // ---------- campaign ----------
        public static string StageLabel(int idx) => $"{idx / StagesPerChapter + 1}-{idx % StagesPerChapter + 1}";
        public static bool IsBossStage(int idx) => idx % StagesPerChapter == StagesPerChapter - 1;
        public static int StageLevel(int idx) => Math.Min(60, Js.RoundInt(2 + idx * 0.95));
        public static int ChapterOf(int idx) => idx / StagesPerChapter;
        public static Element ChapterElement(int chapter) => Elements[chapter % Elements.Length];

        public static EnemySpec Grade(int idx)
        {
            int level = Math.Min(50, StageLevel(idx));
            double stars = Math.Min(5, 1 + (level - 1) / 10.0);
            double t = idx / (double)(TotalStages - 1);
            double chAdj = ChapterOf(idx) < Curve.Chapter.Length ? Curve.Chapter[ChapterOf(idx)] : 1;
            double mul = chAdj * (Curve.Start + (Curve.End - Curve.Start) * Math.Pow(t, Curve.Shape));
            return new EnemySpec { Level = level, Stars = stars, Mul = mul, Spd = Js.RoundInt(idx * Curve.SpdPerStage), ShownLevel = StageLevel(idx) };
        }

        public static List<List<EnemySpec>> StageWaves(int idx)
        {
            var rng = new Seeded(idx + 7);
            var g = Grade(idx);
            var chapterEl = ChapterElement(ChapterOf(idx));
            var waves = new List<List<EnemySpec>>();
            int waveCount = IsBossStage(idx) ? 3 : 2;
            for (int w = 0; w < waveCount; w++)
            {
                var wave = new List<EnemySpec>();
                int n = idx < 2 ? 2 : 3;
                for (int i = 0; i < n; i++)
                {
                    var t = Heroes[(int)Math.Floor(rng.Next() * Heroes.Length)];
                    wave.Add(new EnemySpec { Template = t, Level = g.Level, Stars = g.Stars, Mul = g.Mul, Spd = g.Spd, ShownLevel = g.ShownLevel, El = rng.Next() < 0.5 ? chapterEl : t.Element });
                }
                if (IsBossStage(idx) && w == waveCount - 1)
                {
                    var t = Heroes[(int)Math.Floor(rng.Next() * Heroes.Length)];
                    wave[1] = new EnemySpec { Template = t, Level = g.Level, Stars = g.Stars, Mul = g.Mul, Spd = g.Spd, ShownLevel = g.ShownLevel + 2, El = chapterEl, Boss = true };
                }
                waves.Add(wave);
            }
            return waves;
        }

        public static Reward StageRewards(int idx, bool firstClear)
        {
            int level = StageLevel(idx);
            var r = new Reward { Gold = Js.RoundInt(200 + level * 60.0), Xp = Js.RoundInt(60 + level * level * 3.2) };
            if (firstClear)
            {
                r.Common = 1;
                if (IsBossStage(idx)) { r.Mystic = 1; r.Gold *= 3; }
                if (IsBossStage(idx) && (idx + 1) % (StagesPerChapter * 3) == 0) r.Radiant = 1;
            }
            return r;
        }
        public GearSave RollStageGear(int idx)
        {
            double chance = IsBossStage(idx) ? 0.9 : 0.45;
            if (R() > chance) return null;
            int chapter = ChapterOf(idx);
            int top = Math.Min(5, 1 + chapter / 2 + (IsBossStage(idx) ? 1 : 0));
            int rarity = Math.Max(1, top - (R() < 0.55 ? 1 : 0) - (R() < 0.2 ? 1 : 0));
            return MakeGear(rarity);
        }

        public sealed class VictoryResult { public Reward Reward; public bool FirstClear; public List<(HeroSave hero, int levels)> LevelUps = new List<(HeroSave, int)>(); public GearSave Gear; }
        public VictoryResult CompleteStage(int idx)
        {
            bool first = idx == S.cleared;
            var r = StageRewards(idx, first);
            Grant(r);
            var res = new VictoryResult { Reward = r, FirstClear = first };
            foreach (var h in Team) { int n = GiveXp(h, r.Xp); if (n > 0) res.LevelUps.Add((h, n)); }
            res.Gear = RollStageGear(idx);
            if (first) S.cleared++;
            S.wins++; BumpQuest("win");
            return res;
        }

        public Reward CompleteTitan(long damage)
        {
            EnsureDaily();
            var tier = TitanTiers[0];
            foreach (var t in TitanTiers) if (damage >= t.Dmg) tier = t;
            S.daily.titanTries = Math.Max(0, S.daily.titanTries - 1);
            S.daily.titanBest = Math.Max(S.daily.titanBest, damage);
            S.titanBestAllTime = Math.Max(S.titanBestAllTime, damage);
            Grant(tier.Reward); BumpQuest("titan");
            return tier.Reward;
        }

        public void StartWith(string starterId)
        {
            var a = AddHero(starterId); var b = AddHero("pell"); var c = AddHero("odo");
            S.team = new List<int> { a.uid, b.uid, c.uid };
            foreach (var h in new[] { a, b, c }) Equip(h, MakeGear(1, Slot.Weapon));
            S.started = true;
        }
    }
}
