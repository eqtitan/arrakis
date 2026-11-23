// Sigilbound core content: elements, heroes, skills, gear, summoning, campaign.
// Pure C# (no UnityEngine) so it compiles and is tested outside Unity.
// Mirrors public/game/data.js in the web version.
using System;
using System.Collections.Generic;
using System.Linq;

namespace Sigilbound.Core
{
    public enum Element { Flame, Gale, Tide, Light, Shadow }
    public enum Rarity { Common, Rare, Epic, Legendary }
    public enum Role { Attack, Defense, Hp, Support }
    public enum Target { Enemy, AllEnemies, Ally, AllAllies, Self }
    public enum Scale { Atk, Def, Hp }
    public enum FxType { AtkUp, DefUp, SpdUp, Regen, Shield, Taunt, AtkDown, DefDown, Slow, Poison, Stun, Heal, Tm, TmDrain, Cleanse, Strip }
    public enum FxTo { Target, Self, Allies, Enemies }

    public sealed class FxDef
    {
        public FxType Type; public int Turns = 1; public double Chance = -1; public double Pct; public double Val; public FxTo To = FxTo.Target;
        public bool IsStatus => Type <= FxType.Stun;
        public static bool IsBuff(FxType t) => t <= FxType.Taunt;
    }

    public sealed class SkillDef
    {
        public string Name; public Target Target; public double Mult; public int Cooldown; public int Hits = 1; public Scale Scale = Scale.Atk;
        public FxDef[] Fx = Array.Empty<FxDef>();
    }

    public sealed class HeroDef
    {
        public string Id, Name; public Rarity Rarity; public Element Element; public Role Role; public SkillDef[] Skills;
        public string ShortName => Name.Split(' ', ',')[0];
    }

    public static class GameData
    {
        public static readonly Element[] Elements = (Element[])Enum.GetValues(typeof(Element));

        public static double ElementMultiplier(Element att, Element def)
        {
            if (Strong(att) == def) return 1.3;
            if (Strong(def) == att) return 0.8;
            return 1;
        }
        public static Element Strong(Element e) => e switch
        {
            Element.Flame => Element.Gale, Element.Gale => Element.Tide, Element.Tide => Element.Flame,
            Element.Light => Element.Shadow, _ => Element.Light,
        };

        public static int NaturalStars(Rarity r) => (int)r + 1;
        public static double RarityMult(Rarity r) => r switch { Rarity.Common => 1.0, Rarity.Rare => 1.15, Rarity.Epic => 1.32, _ => 1.5 };
        public static int EssenceValue(Rarity r) => r switch { Rarity.Common => 5, Rarity.Rare => 20, Rarity.Epic => 80, _ => 300 };

        public struct RoleMods { public double Hp, Atk, Def; public int Spd; }
        public static RoleMods Mods(Role r) => r switch
        {
            Role.Attack => new RoleMods { Hp = 0.9, Atk = 1.25, Def = 0.9 },
            Role.Defense => new RoleMods { Hp = 1.05, Atk = 0.85, Def = 1.4 },
            Role.Hp => new RoleMods { Hp = 1.35, Atk = 0.9, Def = 1.0 },
            _ => new RoleMods { Hp = 1.0, Atk = 0.95, Def = 1.0, Spd = 6 },
        };

        // ---- skill helpers ----
        static SkillDef S(string name, Target t, double mult, int cd, params FxDef[] fx) => new SkillDef { Name = name, Target = t, Mult = mult, Cooldown = cd, Fx = fx };
        static SkillDef S(string name, Target t, double mult, int cd, int hits, Scale scale, params FxDef[] fx) => new SkillDef { Name = name, Target = t, Mult = mult, Cooldown = cd, Hits = hits, Scale = scale, Fx = fx };
        static FxDef F(FxType t, int turns = 1, double chance = -1, FxTo to = FxTo.Target) => new FxDef { Type = t, Turns = turns, Chance = chance, To = to };
        static FxDef Heal(double pct) => new FxDef { Type = FxType.Heal, Pct = pct };
        static FxDef Shield(double pct, FxTo to = FxTo.Target) => new FxDef { Type = FxType.Shield, Pct = pct, To = to };
        static FxDef TmUp(double v) => new FxDef { Type = FxType.Tm, Val = v };
        static FxDef Drain(double v, double chance = -1) => new FxDef { Type = FxType.TmDrain, Val = v, Chance = chance };
        static FxDef Cleanse() => new FxDef { Type = FxType.Cleanse };
        static FxDef Strip() => new FxDef { Type = FxType.Strip };
        static HeroDef H(string id, string name, Rarity r, Element e, Role role, params SkillDef[] sk) => new HeroDef { Id = id, Name = name, Rarity = r, Element = e, Role = role, Skills = sk };

        const Target E = Target.Enemy, AE = Target.AllEnemies, AA = Target.AllAllies, SELF = Target.Self;

        public static readonly HeroDef[] Heroes =
        {
            // Common
            H("brannoc", "Brannoc Spearhand", Rarity.Common, Element.Gale, Role.Attack, S("Spear Thrust", E, 1.0, 0), S("Whirling Haft", AE, 0.7, 3)),
            H("mira", "Mira Saltwhistle", Rarity.Common, Element.Tide, Role.Defense, S("Shell Bash", E, 0.9, 0, 1, Scale.Def), S("Saltwall", AA, 0, 4, F(FxType.DefUp, 2))),
            H("pell", "Pell Cinderbrook", Rarity.Common, Element.Flame, Role.Support, S("Ember Flick", E, 1.0, 0), S("Kindle", AA, 0, 4, Heal(0.15))),
            H("odo", "Odo Mudlark", Rarity.Common, Element.Gale, Role.Hp, S("Mud Slap", E, 0.08, 0, 1, Scale.Hp, F(FxType.Slow, 2, 0.3)), S("Thick Hide", SELF, 0, 4, Shield(0.25), F(FxType.Taunt, 2))),
            H("wren", "Sister Wren", Rarity.Common, Element.Light, Role.Support, S("Lantern Strike", E, 1.0, 0), S("Vesper Hymn", AA, 0, 4, Heal(0.18))),
            H("kettle", "Kettle Gravejaw", Rarity.Common, Element.Shadow, Role.Attack, S("Grave Hook", E, 1.0, 0, F(FxType.Poison, 2, 0.3)), S("Rattle Bones", E, 1.6, 3)),
            // Rare
            H("ysolde", "Ysolde Emberlash", Rarity.Rare, Element.Flame, Role.Attack, S("Lash", E, 0.55, 0, 2, Scale.Atk), S("Searing Coil", E, 1.9, 3, F(FxType.DefDown, 2, 0.6)), S("Wildfire", AE, 0.9, 4, F(FxType.Poison, 2, 0.4))),
            H("corvan", "Corvan Tidecaller", Rarity.Rare, Element.Tide, Role.Support, S("Undertow", E, 1.0, 0, Drain(0.15, 0.5)), S("Rising Tide", AA, 0, 3, Heal(0.2)), S("Tidal Hymn", AA, 0, 4, F(FxType.AtkUp, 2), TmUp(0.15))),
            H("hask", "Hask the Unbowed", Rarity.Rare, Element.Gale, Role.Defense, S("Shield Rush", E, 0.9, 0, 1, Scale.Def), S("Unbowed", SELF, 0, 4, F(FxType.Taunt, 2), F(FxType.DefUp, 2)), S("Gale Wall", AA, 0, 4, Shield(0.15))),
            H("lumen", "Lumen Varro", Rarity.Rare, Element.Light, Role.Attack, S("Radiant Edge", E, 1.0, 0), S("Judgment", E, 2.2, 3), S("Dawnbreak", AE, 1.0, 4, F(FxType.AtkDown, 2, 0.5))),
            H("nyx", "Nyx Hollowstep", Rarity.Rare, Element.Shadow, Role.Attack, S("Hollow Cut", E, 0.38, 0, 3, Scale.Atk), S("Vanish", E, 1.8, 3, Strip()), S("Night Toll", AE, 0.85, 4, Drain(0.2, 0.5))),
            H("tamsin", "Tamsin Reedvane", Rarity.Rare, Element.Gale, Role.Support, S("Reed Dart", E, 1.0, 0, F(FxType.Slow, 2, 0.4)), S("Tailwind", AA, 0, 4, F(FxType.SpdUp, 2)), S("Field Remedy", AA, 0, 4, Heal(0.15), Cleanse())),
            H("gorrum", "Gorrum Slagheart", Rarity.Rare, Element.Flame, Role.Defense, S("Slag Fist", E, 0.9, 0, 1, Scale.Def, F(FxType.DefDown, 2, 0.25)), S("Molten Hide", SELF, 0, 4, Shield(0.3), F(FxType.Taunt, 2)), S("Eruption", AE, 0.7, 5, 1, Scale.Def, F(FxType.Stun, 1, 0.2))),
            H("velka", "Velka Driftmourn", Rarity.Rare, Element.Tide, Role.Hp, S("Drift Strike", E, 0.08, 0, 1, Scale.Hp), S("Mournful Wave", AE, 0.06, 4, 1, Scale.Hp, F(FxType.Slow, 2, 0.4)), S("Deep Mending", AA, 0, 4, F(FxType.Regen, 2))),
            // Epic
            H("aurelia", "Aurelia Dawnwarden", Rarity.Epic, Element.Light, Role.Defense, S("Warden's Blow", E, 0.95, 0, 1, Scale.Def, F(FxType.AtkDown, 2, 0.3)), S("Aegis of Dawn", AA, 0, 4, Shield(0.2), F(FxType.DefUp, 2)), S("Sunfall", AE, 0.8, 5, 1, Scale.Def, F(FxType.Stun, 1, 0.25))),
            H("sable", "Sable Nightglass", Rarity.Epic, Element.Shadow, Role.Support, S("Glass Shard", E, 1.0, 0, F(FxType.DefDown, 2, 0.4)), S("Mirror Veil", AE, 0.6, 4, F(FxType.DefDown, 2, 0.75), F(FxType.AtkDown, 2, 0.75)), S("Night Grace", AA, 0, 5, Heal(0.25), TmUp(0.2))),
            H("kaito", "Kaito Stormrend", Rarity.Epic, Element.Gale, Role.Attack, S("Rending Gust", E, 0.6, 0, 2, Scale.Atk), S("Thousand Cuts", E, 0.55, 3, 4, Scale.Atk), S("Stormrend", AE, 1.3, 4, F(FxType.Slow, 2, 0.6))),
            H("maelis", "Maelis Deepcurrent", Rarity.Epic, Element.Tide, Role.Attack, S("Trident", E, 1.1, 0), S("Riptide", E, 2.4, 3, Drain(0.3)), S("Maelstrom", AE, 1.2, 4, F(FxType.DefDown, 2, 0.5))),
            H("thrain", "Thrain Ashforge", Rarity.Epic, Element.Flame, Role.Hp, S("Forge Hammer", E, 0.085, 0, 1, Scale.Hp, F(FxType.Stun, 1, 0.15)), S("Ashen Ward", AA, 0, 4, Shield(0.15), F(FxType.Taunt, 2, -1, FxTo.Self)), S("Bellows", AA, 0, 5, F(FxType.Regen, 2), F(FxType.AtkUp, 2))),
            H("oriel", "Oriel Sunveil", Rarity.Epic, Element.Light, Role.Support, S("Veil Light", E, 1.0, 0), S("Sunveil", AA, 0, 4, Heal(0.3), Cleanse()), S("Ascend", AA, 0, 5, F(FxType.AtkUp, 2), F(FxType.SpdUp, 2), TmUp(0.25))),
            // Legendary
            H("vaelith", "Vaelith, the Last Pyre", Rarity.Legendary, Element.Flame, Role.Attack, S("Pyre Brand", E, 1.2, 0, F(FxType.Poison, 2, 0.5)), S("Cinder Rain", AE, 0.7, 3, 2, Scale.Atk, F(FxType.DefDown, 2, 0.5)), S("Last Pyre", E, 3.2, 4, F(FxType.AtkUp, 2, -1, FxTo.Self))),
            H("morwenna", "Morwenna Abyss-Crowned", Rarity.Legendary, Element.Shadow, Role.Attack, S("Abyssal Touch", E, 1.1, 0, Drain(0.15)), S("Crown of Night", AE, 1.1, 4, F(FxType.Stun, 1, 0.35)), S("Drown in Dark", E, 2.8, 4, Strip(), F(FxType.AtkDown, 2))),
            H("seraphine", "Seraphine of the Seventh Bell", Rarity.Legendary, Element.Light, Role.Support, S("Bell Toll", E, 1.0, 0, F(FxType.AtkDown, 2, 0.4)), S("Seventh Bell", AA, 0, 4, Heal(0.35), Shield(0.15)), S("Requiem", AA, 0, 5, TmUp(0.35), F(FxType.AtkUp, 2), F(FxType.DefUp, 2), Cleanse())),
            H("ulfgar", "Ulfgar Stormwall", Rarity.Legendary, Element.Gale, Role.Defense, S("Stormwall Bash", E, 1.0, 0, 1, Scale.Def, F(FxType.Slow, 2, 0.5)), S("Hold the Line", AA, 0, 4, F(FxType.DefUp, 3), F(FxType.Taunt, 2, -1, FxTo.Self), Shield(0.25, FxTo.Self)), S("Avalanche", AE, 0.9, 5, 1, Scale.Def, F(FxType.Stun, 1, 0.3), F(FxType.DefDown, 2, 0.5))),
        };
        static readonly Dictionary<string, HeroDef> _byId = Heroes.ToDictionary(h => h.Id);
        public static HeroDef Hero(string id) => _byId.TryGetValue(id, out var h) ? h : null;
        public static readonly string[] Starters = { "ysolde", "hask", "corvan" };

        public static readonly HeroDef Titan = H("titan", "Kharvok the Ashen Titan", Rarity.Legendary, Element.Flame, Role.Defense,
            S("Crushing Palm", E, 1.3, 0), S("Quake", AE, 0.8, 3, F(FxType.Slow, 2, 0.5)), S("Cinder Breath", AE, 1.0, 4, F(FxType.Poison, 2, 0.5), F(FxType.DefDown, 2, 0.4)));
        public const int TitanTurns = 20;
        public sealed class TitanTier { public long Dmg; public Reward Reward; }
        public static readonly TitanTier[] TitanTiers =
        {
            new TitanTier { Dmg = 0, Reward = new Reward { Gold = 500, Common = 1 } },
            new TitanTier { Dmg = 20000, Reward = new Reward { Gold = 1500, Common = 2, Mystic = 1 } },
            new TitanTier { Dmg = 60000, Reward = new Reward { Gold = 3000, Common = 3, Mystic = 1 } },
            new TitanTier { Dmg = 150000, Reward = new Reward { Gold = 6000, Common = 3, Mystic = 2 } },
            new TitanTier { Dmg = 400000, Reward = new Reward { Gold = 10000, Common = 4, Mystic = 3, Radiant = 1 } },
            new TitanTier { Dmg = 1000000, Reward = new Reward { Gold = 20000, Common = 5, Mystic = 4, Radiant = 1 } },
        };
        public static Element TitanElement(DateTime date) => Elements[(int)date.DayOfWeek % Elements.Length];

        // ---- gear ----
        public enum Slot { Weapon, Helm, Chest, Boots }
        public enum Stat { Atk, Hp, Def, Spd, AtkPct, HpPct, DefPct, SpdPct, Crit, Cdmg }
        public static Stat SlotMainStat(Slot s) => s switch { Slot.Weapon => Stat.Atk, Slot.Helm => Stat.Hp, Slot.Chest => Stat.Def, _ => Stat.Spd };
        public static int SlotBase(Slot s) => s switch { Slot.Weapon => 20, Slot.Helm => 200, Slot.Chest => 18, _ => 4 };
        public static readonly string[] GearRarityNames = { "", "Worn", "Fine", "Superior", "Heroic", "Mythic" };
        public enum GearSet { Fury, Vigor, Bulwark, Haste, Keen }
        public static (Stat stat, int val, string desc) SetBonus(GearSet s) => s switch
        {
            GearSet.Fury => (Stat.AtkPct, 15, "+15% ATK"), GearSet.Vigor => (Stat.HpPct, 15, "+15% HP"),
            GearSet.Bulwark => (Stat.DefPct, 15, "+15% DEF"), GearSet.Haste => (Stat.SpdPct, 12, "+12% SPD"),
            _ => (Stat.Crit, 12, "+12% Crit Rate"),
        };
        public static readonly Stat[] SubStats = { Stat.AtkPct, Stat.HpPct, Stat.DefPct, Stat.Spd, Stat.Crit, Stat.Cdmg };
        public static (int min, int max) SubRoll(Stat s) => s switch { Stat.Spd => (2, 5), Stat.Crit => (3, 6), Stat.Cdmg => (4, 8), _ => (4, 7) };
        public const int GearMaxLevel = 10;

        // ---- summoning ----
        public enum Shard { Common, Mystic, Radiant }
        public static double[] ShardRates(Shard s) => s switch // common, rare, epic, legendary
        {
            Shard.Common => new[] { 70, 27, 3, 0.0 },
            Shard.Mystic => new[] { 0, 82.5, 15, 2.5 },
            _ => new[] { 0, 0, 85, 15.0 },
        };
        public static int ShardPity(Shard s) => s == Shard.Mystic ? 60 : s == Shard.Radiant ? 10 : 0;
        public static int ExchangeCost(Shard s) => s switch { Shard.Common => 15, Shard.Mystic => 120, _ => 1500 };

        // ---- campaign ----
        public static readonly string[] Chapters =
        {
            "Thornwick Road", "The Drowned Mill", "Ashgrave Pass", "Saltmarsh Reaches", "Bellspire Ruins",
            "The Glass Wastes", "Stormcrown Heights", "Hollow Deep", "Sunken Cathedral", "The Last Pyre",
        };
        public const int StagesPerChapter = 6;
        public static int TotalStages => Chapters.Length * StagesPerChapter;
        // Enemy stat multiplier curve, tuned with the progression sim (see tools/sigilbound-balance-sim.cjs).
        public static class Curve
        {
            public const double Start = 1.0, End = 1.75, Shape = 1.3, SpdPerStage = 0.3, BossStat = 1.1, BossHp = 2.2;
            public static readonly double[] Chapter = { 1, 1.14, 0.97, 1, 1.08, 0.94, 1, 0.98, 0.95, 1.04 };
        }

        // ---- progression ----
        public static int XpToNext(int level) => 50 + level * level * 12;
        public static int MaxLevelFor(int stars) => stars * 10;
        public const int MaxStars = 6;
        public static int RankUpGold(int stars) => 2000 * stars;
        public const int TrainXpPerGold = 2;
        public static readonly Reward[] LoginRewards =
        {
            new Reward { Gold = 2000 }, new Reward { Common = 3 }, new Reward { Gold = 4000 }, new Reward { Mystic = 1 },
            new Reward { Gold = 6000, Common = 3 }, new Reward { Mystic = 2 }, new Reward { Radiant = 1 },
        };
        public sealed class QuestDef { public string Id, Name; public int Goal; public Reward Reward; }
        public static readonly QuestDef[] DailyQuests =
        {
            new QuestDef { Id = "win", Name = "Win 5 battles", Goal = 5, Reward = new Reward { Gold = 2000 } },
            new QuestDef { Id = "summon", Name = "Summon 3 heroes", Goal = 3, Reward = new Reward { Common = 2 } },
            new QuestDef { Id = "upgrade", Name = "Upgrade gear 3 times", Goal = 3, Reward = new Reward { Gold = 1500 } },
            new QuestDef { Id = "titan", Name = "Challenge the Titan", Goal = 1, Reward = new Reward { Mystic = 1 } },
            new QuestDef { Id = "all", Name = "Finish all daily quests", Goal = 4, Reward = new Reward { Mystic = 1, Gold = 3000 } },
        };
    }

    public sealed class Reward
    {
        public int Gold, Essence, Common, Mystic, Radiant, Xp, Tome;
        public override string ToString()
        {
            var parts = new List<string>();
            if (Gold > 0) parts.Add($"{Gold:N0} gold");
            if (Essence > 0) parts.Add($"{Essence} essence");
            if (Common > 0) parts.Add($"{Common} worn shard{(Common > 1 ? "s" : "")}");
            if (Mystic > 0) parts.Add($"{Mystic} mystic shard{(Mystic > 1 ? "s" : "")}");
            if (Radiant > 0) parts.Add($"{Radiant} radiant shard{(Radiant > 1 ? "s" : "")}");
            if (Tome > 0) parts.Add($"{Tome} skill tome{(Tome > 1 ? "s" : "")}");
            return string.Join(", ", parts);
        }
    }
}
