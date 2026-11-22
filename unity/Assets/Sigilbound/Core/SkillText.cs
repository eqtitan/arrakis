// Human-readable skill and stat descriptions (generated from data, so always accurate).
using System.Collections.Generic;

namespace Sigilbound.Core
{
    public static class SkillText
    {
        public static string Describe(SkillDef sk)
        {
            string tgt = sk.Target switch { Target.Enemy => "one enemy", Target.AllEnemies => "all enemies", Target.Ally => "one ally", Target.AllAllies => "all allies", _ => "self" };
            var parts = new List<string>();
            if (sk.Mult > 0)
            {
                string scale = sk.Scale == Scale.Atk ? "ATK" : sk.Scale == Scale.Def ? "DEF" : "Max HP";
                parts.Add($"Hits {tgt}{(sk.Hits > 1 ? $" {sk.Hits}×" : "")} for {sk.Mult * 100:0}% {scale}");
            }
            else parts.Add($"Targets {tgt}");
            foreach (var f in sk.Fx) parts.Add(Fx(f));
            return string.Join(" · ", parts);
        }

        static string Fx(FxDef f)
        {
            string ch = f.Chance >= 0 ? $"{f.Chance * 100:0}% " : "";
            string who = f.To == FxTo.Self ? " on self" : "";
            return f.Type switch
            {
                FxType.Heal => $"heals {f.Pct * 100:0}% HP{who}",
                FxType.Tm => $"fills Turn Meter by {f.Val * 100:0}%",
                FxType.TmDrain => $"{ch}drains {f.Val * 100:0}% Turn Meter",
                FxType.Cleanse => "removes debuffs",
                FxType.Strip => "removes buffs",
                FxType.Shield => $"Shield = {f.Pct * 100:0}% of caster HP{who}",
                _ => $"{ch}{EffectName(f.Type)} ({f.Turns}t){who}",
            };
        }

        public static string EffectName(FxType t) => t switch
        {
            FxType.AtkUp => "ATK Up", FxType.DefUp => "DEF Up", FxType.SpdUp => "SPD Up", FxType.AtkDown => "ATK Down",
            FxType.DefDown => "DEF Down", FxType.Slow => "Slow", FxType.Poison => "Poison", FxType.Stun => "Stun",
            FxType.Regen => "Regen", FxType.Shield => "Shield", FxType.Taunt => "Taunt", _ => t.ToString(),
        };
        public static string EffectShort(FxType t) => t switch
        {
            FxType.AtkUp => "ATK+", FxType.DefUp => "DEF+", FxType.SpdUp => "SPD+", FxType.AtkDown => "ATK-",
            FxType.DefDown => "DEF-", FxType.Slow => "SLW", FxType.Poison => "PSN", FxType.Stun => "STN",
            FxType.Regen => "RGN", FxType.Shield => "SHD", FxType.Taunt => "TNT", _ => "",
        };

        public static string StatName(GameData.Stat s, int v) => s switch
        {
            GameData.Stat.AtkPct => $"ATK +{v}%", GameData.Stat.HpPct => $"HP +{v}%", GameData.Stat.DefPct => $"DEF +{v}%",
            GameData.Stat.SpdPct => $"SPD +{v}%", GameData.Stat.Crit => $"Crit +{v}%", GameData.Stat.Cdmg => $"Crit DMG +{v}%",
            _ => $"{s.ToString().ToUpper()} +{v}",
        };
    }
}
