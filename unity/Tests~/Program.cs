// Core checks: content sanity, progression rules, battles, web parity (ParityTests.cs),
// Trials and promo rules, and a campaign win-rate sweep.
using System;
using System.Linq;
using Sigilbound.Core;
using static Sigilbound.Core.GameData;

static class Program
{
    static int failures;
    static void Check(bool ok, string what) { Console.WriteLine((ok ? "PASS " : "FAIL ") + what); if (!ok) failures++; }

    static int Main()
    {
        Check(Heroes.Length == 24 && Heroes.Select(h => h.Id).Distinct().Count() == 24, "24 unique heroes");
        Check(ElementMultiplier(Element.Flame, Element.Gale) == 1.3 && ElementMultiplier(Element.Gale, Element.Flame) == 0.8 && ElementMultiplier(Element.Light, Element.Shadow) == 1.3, "element triangle");
        Check(Game.StageLevel(0) == 2 && Game.StageLevel(59) == 58, $"stage levels match web ({Game.StageLevel(0)}, {Game.StageLevel(59)})");
        // Same deterministic enemy picks as the web version (stage 1: Velka + Kettle in the web build).
        var w0 = Game.StageWaves(0)[0].Select(e => e.Template.Id).ToArray();
        Check(w0.SequenceEqual(new[] { "velka", "kettle" }), $"stage 1-1 enemies match web build ({string.Join(",", w0)})");

        var g = new Game(seed: 42);
        g.StartWith("ysolde");
        Check(g.S.started && g.Team.Count == 3 && g.S.gear.Count == 3, "new game: 3 heroes, 3 weapons");
        var h = g.Team[0];
        int p0 = g.Power(h);
        g.S.gold = 1_000_000;
        Check(g.Train(h, true) && h.level == MaxLevelFor(h.stars), $"train to cap (level {h.level})");
        Check(g.Power(h) > p0, "training raises power");
        while (g.RankUpFodder(h).Count < h.stars) g.AddHero("ysolde").stars = h.stars;
        Check(g.CanRankUp(h) && g.RankUp(h, g.SuggestFodder(h)) && h.stars == 3, "rank up 2★ → 3★");
        var gear = g.MakeGear(4, Slot.Weapon); int before = Game.GearMainValue(gear);
        for (int i = 0; i < 10; i++) g.UpgradeGear(gear);
        Check(gear.level == 10 && Game.GearMainValue(gear) > before && gear.subs.Count == 4, "gear upgrades to +10 and gains a substat");
        g.S.shardMystic = 60; g.S.pityMystic = 0;
        var pulls = g.Summon(Shard.Mystic, 60);
        Check(pulls.Count == 60 && pulls.Any(x => Hero(x.id).Rarity == Rarity.Legendary), "mystic pity guarantees a legendary within 60");
        g.S.daily = new DailySave(); g.EnsureDaily();
        Check(g.ClaimLogin() != null && g.ClaimLogin() == null, "login reward claimable once per day");

        // Save round-trip sanity (field-only model)
        Check(typeof(SaveData).GetProperties().Length == 0, "SaveData has fields only (JsonUtility-safe)");

        // Battles: stage 1 with the starter team should be won; titan runs to its turn limit.
        var g2 = new Game(seed: 7); g2.StartWith("ysolde");
        var b = Battle.ForStage(g2, 0);
        Check(b.RunAuto() == BattleResult.Victory, "starter team wins stage 1-1 on auto");
        var t = Battle.ForTitan(g2);
        var tr = t.RunAuto();
        Check((tr == BattleResult.Timeout || tr == BattleResult.Defeat) && t.TitanDamage > 0 && t.BossTurns <= TitanTurns, $"weak team vs titan ends by wipe or turn limit ({tr}, dmg {t.TitanDamage:N0})");
        var g3 = new Game(seed: 9); g3.S.team = new[] { "seraphine", "ulfgar", "vaelith", "maelis" }.Select(id => { var x = g3.AddHero(id); x.stars = 5; x.level = 50; return x.uid; }).ToList();
        var t3 = Battle.ForTitan(g3); var tr3 = t3.RunAuto();
        Check(tr3 == BattleResult.Timeout && t3.BossTurns == TitanTurns, $"strong team survives all {TitanTurns} titan turns (dmg {t3.TitanDamage:N0})");

        ParityTests.Run(Check);
        RenderTests.Run(Check);
        KitTests.Run(Check);

        // Win-rate sweep like the web sim's fixed-team check (geared team at stage level).
        Console.WriteLine("\nStage win rates (fixed teams at stage level, 30 runs):");
        string[][] lineups = { new[] { "ysolde", "corvan", "hask", "kaito" }, new[] { "maelis", "oriel", "aurelia", "vaelith" } };
        for (int idx = 0; idx < TotalStages; idx += 6)
        {
            int lvl = Game.StageLevel(idx);
            var row = lineups.Select(ids =>
            {
                int wins = 0;
                for (int k = 0; k < 30; k++)
                {
                    var gg = new Game(seed: idx * 100 + k);
                    gg.S.team = ids.Select(id =>
                    {
                        var hh = gg.AddHero(id);
                        hh.stars = Math.Max(hh.stars, Math.Min(5, (int)Math.Ceiling(lvl / 10.0)));
                        hh.level = Math.Min(MaxLevelFor(hh.stars), lvl);
                        foreach (Slot s in Enum.GetValues(typeof(Slot))) { var gr = gg.MakeGear(Math.Min(5, 1 + idx / 12), s); gr.level = Math.Min(10, idx / 6 + 2); gg.Equip(hh, gr); }
                        return hh.uid;
                    }).ToList();
                    if (Battle.ForStage(gg, idx).RunAuto() == BattleResult.Victory) wins++;
                }
                return $"{wins * 100 / 30,3}%";
            });
            Console.WriteLine($"  stage {Game.StageLabel(idx),-5} lvl {lvl,2}: {string.Join("  ", row)}");
        }
        Console.WriteLine(failures == 0 ? "\nAll checks passed." : $"\n{failures} check(s) failed.");
        return failures == 0 ? 0 : 1;
    }
}
