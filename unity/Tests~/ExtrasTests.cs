// Parity for the web's v0.20/0.21 features (extras.js, Skill Tomes): Hard waves and rewards,
// achievements, Skill Tome battle math, turn-order prediction, arena tiers, and the new save
// fields through SB1 codes. Fixtures come from the web code itself (fixtures/make-fixtures.cjs).
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Sigilbound.Core;
using static Sigilbound.Core.GameData;

static class ExtrasTests
{
    static Action<bool, string> Check;
    static double N(object o, string k) => Json.Num(o, k);
    static Element El(string k) => (Element)Array.IndexOf(new[] { "flame", "gale", "tide", "light", "shadow" }, k);

    // Math.random pinned to 0.5, as the fixture did: no crits (15% < 50), no damage variance (×1.0).
    sealed class Half : Random { protected override double Sample() => 0.5; public override double NextDouble() => 0.5; }

    static bool SameReward(Reward r, object w) =>
        r.Gold == N(w, "gold") && r.Xp == N(w, "xp") && r.Essence == N(w, "essence") && r.Common == N(w, "common") && r.Mystic == N(w, "mystic") && r.Radiant == N(w, "radiant") && r.Tome == N(w, "tome");

    public static void Run(Action<bool, string> check)
    {
        Check = check;
        var fx = (Dictionary<string, object>)Json.Parse(File.ReadAllText(Path.Combine(AppContext.BaseDirectory, "fixtures", "fixtures.json")));
        Console.WriteLine("\nWeb v0.21 features (extras.js, Skill Tomes):");

        // ---------- Hard campaign ----------
        int hardBad = 0, hardN = 0;
        foreach (var h in Json.Arr(fx, "hard"))
        {
            int idx = Json.Int(h, "idx"); hardN++;
            var waves = Game.HardWaves(idx); var tw = Json.Arr(h, "waves");
            if (waves.Count != tw.Count) { hardBad++; continue; }
            for (int w = 0; w < waves.Count; w++)
                for (int i = 0; i < waves[w].Count; i++)
                {
                    var e = waves[w][i]; var o = ((List<object>)tw[w])[i]; var u = Battle.FromEnemy(e);
                    if (e.Template.Id != Json.Str(o, "id") || e.El != El(Json.Str(o, "el")) || e.Boss != Json.Bool(o, "boss") || e.ShownLevel != N(o, "shownLevel") || u.MaxHp != N(o, "hp") || u.Atk != N(o, "atk") || u.Def != N(o, "def") || Math.Abs(u.Spd - N(o, "spd")) > 1e-9)
                    { hardBad++; Console.WriteLine($"   hard {idx} w{w} #{i}: {u.MaxHp}/{u.Atk}/{u.Def} vs {N(o, "hp")}/{N(o, "atk")}/{N(o, "def")}"); }
                }
            if (!SameReward(Game.HardRewards(idx, true), Json.Obj(h, "rewardsFirst")) || !SameReward(Game.HardRewards(idx, false), Json.Obj(h, "rewards"))) { hardBad++; Console.WriteLine($"   hard {idx} rewards differ"); }
        }
        Check(hardBad == 0, $"Hard waves (×1.6, +10 levels) and rewards (2× gold, 1.5× XP, boss tomes) match for {hardN} stages");

        var save = SaveCodec.FromCode(Json.Str(fx, "saveCode"));
        var g = new Game(save, 1) { Now = () => new DateTime(2026, 11, 23, 12, 0, 0, DateTimeKind.Utc) };
        var open = Json.Arr(fx, "hardOpen"); int[] openIdx = { 0, 4, 5, 6, 13, 14 };
        Check(openIdx.Select((idx, i) => g.HardOpen(idx) == (bool)open[i]).All(x => x), "Hard stages unlock in order, only behind cleared Normal stages");

        // ---------- new save fields ----------
        var h0 = save.heroes[0];
        Check(h0.skillLv.SequenceEqual(new[] { 1, 2 }) && save.tomes == 3 && save.ach.SequenceEqual(new[] { "win10" }) && save.hardCleared == 5
              && save.teams.Count == 3 && save.teams[1].uids.SequenceEqual(save.team.Take(3)) && save.gear.Count(x => x.locked) == 1,
              "web save code: skill levels, tomes, achievements, team presets, gear lock, Hard progress import");
        var back = SaveCodec.FromCode(SaveCodec.ToCode(save));
        Check(back.heroes[0].skillLv.SequenceEqual(h0.skillLv) && back.tomes == 3 && back.ach.SequenceEqual(save.ach) && back.hardCleared == 5 && back.teams[1].uids.SequenceEqual(save.teams[1].uids) && back.gear.Count(x => x.locked) == 1,
              "…and survive a Unity save code");
        var holes = SaveCodec.FromJson("{\"gold\":1,\"heroes\":[{\"uid\":1,\"id\":\"pell\",\"skillLv\":[null,null,2]}]}");
        Check(holes.heroes[0].skillLv.SequenceEqual(new[] { 0, 0, 2 }), "skillLv with holes (later skill upgraded first) reads as 0, 0, 2");
        var plain = SaveCodec.ToJson(new SaveData());
        Check(!plain.Contains("hardCleared") && !plain.Contains("tomes") && !plain.Contains("\"ach\"") && !plain.Contains("teams"), "fresh saves don't gain the new keys until they're used");

        // ---------- achievements ----------
        var wa = Json.Arr(fx, "achievements");
        bool achOk = wa.Count == Game.Achievements.Length;
        for (int i = 0; achOk && i < wa.Count; i++)
        {
            var a = Game.Achievements[i]; var o = wa[i];
            achOk = a.Id == Json.Str(o, "id") && a.Name == Json.Str(o, "name") && a.Desc == Json.Str(o, "desc") && a.Goal == N(o, "goal") && SameReward(a.Reward, Json.Obj(o, "reward")) && a.Get(g) == N(o, "value");
            if (!achOk) Console.WriteLine($"   achievement {a.Id}: value {a.Get(g)} vs {N(o, "value")}");
        }
        Check(achOk, $"{Game.Achievements.Length} achievements: same names, goals, rewards and progress on the fixture save");
        int tomes0 = g.S.tomes, ready0 = g.AchReadyCount;
        Check(g.ClaimAch("win10") == null && g.ClaimAch("ch1") != null && g.S.ach.Contains("ch1") && g.ClaimAch("ch1") == null && g.AchReadyCount == ready0 - 1, "achievements claim once, only when reached");
        g.S.cleared = 30; var r5 = g.ClaimAch("ch5");
        Check(r5 != null && g.S.tomes == tomes0 + 2, "achievement tome rewards go to the tome count");

        // ---------- arena tiers ----------
        var at = Json.Arr(fx, "arenaTiers");
        Check(at.Count == Trials.Tiers.Length && at.Select((o, i) => Trials.Tiers[i].Name == Json.Str(o, "name") && Trials.Tiers[i].Min == N(o, "min") && SameReward(Trials.Tiers[i].Week, Json.Obj(o, "week"))).All(x => x),
              "arena weekly rewards include tomes for Gold / Platinum / Sigil");

        // ---------- Skill Tome battle math ----------
        int sBad = 0, sN = 0;
        foreach (var c in Json.Arr(fx, "skillCases"))
        {
            var hs = new HeroSave { uid = 9001, id = Json.Str(c, "id"), level = Json.Int(c, "level"), stars = Json.Int(c, "stars"), skillLv = Json.Arr(c, "skillLv").Select(x => (int)(double)x).ToList() };
            var tg = new Game(new SaveData(), 1);
            tg.S.heroes.Add(hs);
            var ally = Battle.FromHero(tg, hs);
            var foe = Battle.FromEnemy(Game.StageWaves(Json.Int(c, "stage"))[0][0]);
            var b = new Battle(new List<Unit> { ally }, new List<List<Unit>> { new List<Unit> { foe } }, new Half());
            foreach (var act in Json.Arr(c, "acts"))
            {
                sN++;
                int i = Json.Int(act, "i");
                ally.Hp = 1; ally.Effects.Clear(); foe.Hp = foe.MaxHp; foe.Alive = true; foe.Effects.Clear(); for (int k = 0; k < ally.Cds.Length; k++) ally.Cds[k] = 0;
                var sk = ally.Template.Skills[i];
                var ev = b.Act(ally, i, sk.Target == Target.Ally ? ally : foe).Where(e => e.Type == EvType.Damage || e.Type == EvType.Heal).ToList();
                var wev = Json.Arr(act, "ev");
                bool ok = ally.Cds[i] == N(act, "cd") && ev.Count == wev.Count && ev.Select((e, k) => (e.Type == EvType.Damage ? "dmg" : "heal") == Json.Str(wev[k], "type") && e.Unit.Ally == Json.Bool(wev[k], "ally") && e.Amount == N(wev[k], "amount")).All(x => x);
                if (!ok) { sBad++; Console.WriteLine($"   {hs.id} [{string.Join(",", hs.skillLv)}] A{i + 1}: cd {ally.Cds[i]} {string.Join(",", ev.Select(e => e.Type + ":" + e.Amount))} vs cd {N(act, "cd")} {Json.Write(wev)}"); }
            }
        }
        Check(sBad == 0, $"Skill Tome levels: damage and healing +8%/level to 3, level 4 cooldown -1 — {sN - sBad}/{sN} skill uses match the web exactly");
        Check(Battle.SkillCooldown(new SkillDef { Cooldown = 1 }, 4) == 1 && Battle.SkillCooldown(new SkillDef { Cooldown = 3 }, 4) == 2 && Battle.SkillCooldown(new SkillDef { Cooldown = 3 }, 3) == 3, "level 4 only shortens cooldowns above 1");

        var up = new Game(new SaveData(), 1); var uh = up.AddHero("pell"); up.S.tomes = 10;
        bool u1 = up.SkillUp(uh, 1), u2 = up.SkillUp(uh, 1), u3 = up.SkillUp(uh, 1), u4 = up.SkillUp(uh, 1);
        Check(u1 && u2 && u3 && u4 && uh.skillLv.SequenceEqual(new[] { 0, 4 }) && up.S.tomes == 0 && !up.SkillUp(uh, 1) && !up.SkillUp(uh, 5), "skill upgrades cost 1, 2, 3, 4 tomes and stop at level 5");

        // ---------- turn-order prediction ----------
        int tBad = 0;
        foreach (var tc in Json.Arr(fx, "turnCases"))
        {
            int idx = Json.Int(tc, "idx");
            var allies = g.S.team.Select(u => Battle.FromHero(g, g.HeroByUid(u))).ToList();
            var b = new Battle(allies, new List<List<Unit>> { Game.StageWaves(idx)[0].Select(Battle.FromEnemy).ToList() }, new Half());
            var all = b.Units.ToList();
            var tms = Json.Arr(tc, "tms"); var dead = Json.Arr(tc, "dead");
            for (int i = 0; i < all.Count; i++) { all[i].Tm = (double)tms[i]; all[i].Alive = !(bool)dead[i]; }
            all[1].Effects.Add(new Effect { Type = FxType.SpdUp, Turns = 2 });
            all[all.Count - 1].Effects.Add(new Effect { Type = FxType.Slow, Turns = 2 });
            var mine = b.PredictTurns().Select(u => all.IndexOf(u)).ToList();
            var theirs = Json.Arr(tc, "order").Select(x => (int)(double)x).ToList();
            if (!mine.SequenceEqual(theirs)) { tBad++; Console.WriteLine($"   turns stage {idx}: {string.Join(",", mine)} vs {string.Join(",", theirs)}"); }
            // Predicting must not move the real meters, and the first prediction is the real next actor.
            double tm0 = all[0].Tm; var next = b.NextActor();
            if (all[0].Tm < tm0 || all.IndexOf(next) != theirs[0]) { tBad++; Console.WriteLine($"   turns stage {idx}: next actor {all.IndexOf(next)} vs predicted {theirs[0]}"); }
        }
        Check(tBad == 0, "turn-order bar: the next 7 actors match predictTurns() (with speed buffs, slows and a fallen unit), and the first is the real next actor");

        // ---------- teams, best team, auto-equip, gear lock ----------
        var tgm = new Game(SaveCodec.FromCode(Json.Str(fx, "saveCode")), 3);
        var team0 = tgm.S.team.ToList();
        tgm.TeamBest();
        var strongest = tgm.S.heroes.Select(h => tgm.Power(h)).OrderByDescending(p => p).Take(4).ToList();
        Check(tgm.S.team.Count == 4 && tgm.Team.Select(tgm.Power).SequenceEqual(strongest), "Best team picks the 4 strongest heroes");
        Check(tgm.TeamLoad(1) && tgm.S.team.SequenceEqual(team0.Take(3)) && !tgm.TeamLoad(2), "team presets load (an empty preset is refused)");
        tgm.TeamSave(2); Check(tgm.S.teams[2].uids.SequenceEqual(tgm.S.team), "team presets save the current team");
        tgm.AutoEquipTeam();
        Check(tgm.Team.All(h => Enum.GetValues(typeof(Slot)).Cast<Slot>().All(s => h.GetGear(s) == 0 || tgm.GearOwner(tgm.GearByUid(h.GetGear(s))) == h)), "auto-equip team leaves every piece on exactly one hero");
        var junk = tgm.MakeGear(1); var keep = tgm.MakeGear(2); keep.locked = true;
        tgm.SellJunk();
        Check(!tgm.S.gear.Contains(junk) && tgm.S.gear.Contains(keep), "sell junk skips locked gear");

        // ---------- Hard clear ----------
        var hg2 = new Game(new SaveData(), 5); hg2.StartWith("ysolde"); hg2.S.cleared = 12; hg2.S.hardCleared = 5;
        int t0 = hg2.S.tomes; var hc = hg2.CompleteHard(5);
        Check(hc.FirstClear && hg2.S.hardCleared == 6 && hg2.S.tomes == t0 + 1 && hc.Gear != null && hc.Gear.rarity == Game.HardGearRarity(5) && !hg2.HardOpen(7) && hg2.HardOpen(6), "Hard boss first clear: tome, mystic, better gear, next Hard stage opens");
    }
}
