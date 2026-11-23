// Parity checks against fixtures generated from the web game's own code (fixtures/make-fixtures.cjs):
// save code import/export, hero stats, stage and dungeon enemies, rivals, Titan, promo fingerprints,
// plus the Trials and promo rules.
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Sigilbound.Core;
using static Sigilbound.Core.GameData;

static class ParityTests
{
    static Action<bool, string> Check;
    static readonly DateTime Now = new DateTime(2026, 11, 23, 12, 0, 0, DateTimeKind.Utc); // fixture clock (a Monday)

    static Element El(string k) => (Element)Array.IndexOf(new[] { "flame", "gale", "tide", "light", "shadow" }, k);
    static double N(object o, string k) => Json.Num(o, k);

    public static void Run(Action<bool, string> check)
    {
        Check = check;
        var path = Path.Combine(AppContext.BaseDirectory, "fixtures", "fixtures.json");
        var fx = (Dictionary<string, object>)Json.Parse(File.ReadAllText(path));
        Console.WriteLine("\nWeb parity (fixtures from public/game/*.js):");

        DataParity(Json.Obj(fx, "data"));

        // ---------- save code import ----------
        string code = Json.Str(fx, "saveCode");
        var save = SaveCodec.FromCode(code);
        Check(save != null, "web save code (SB1.) imports");
        if (save == null) return;
        var web = Json.Obj(fx, "save");
        Check(save.gold == Json.Int(web, "gold") && save.essence == 77 && save.cleared == 14 && save.nextUid == Json.Int(web, "nextUid"), "imported gold, essence, cleared, nextUid");
        Check(save.heroes.Count == Json.Arr(web, "heroes").Count && save.gear.Count == Json.Arr(web, "gear").Count, $"imported {save.heroes.Count} heroes and {save.gear.Count} gear");
        Check(save.team.SequenceEqual(Json.Arr(web, "team").Select(x => (int)(double)x)), "imported team order");
        Check(save.shardMystic == Json.Int(Json.Obj(web, "shards"), "mystic") && save.pityMystic == Json.Int(Json.Obj(web, "pity"), "mystic"), "imported shards and pity");
        Check(save.daily.date == "2026-11-23" && save.daily.win == 3 && save.daily.runsTrial == 1 && save.daily.arenaTries == 2 && save.loginDay == 1, "imported daily quests, dungeon runs, arena tries, login");
        Check(save.modes.initialized && save.modes.floorsVault == 3 && save.modes.forgeSet == (int)GearSet.Keen && save.modes.arena.points == 1320 && save.modes.codes.Contains("1qestrz-ml0zya"), "imported trials progress and used promo codes");
        Check(save.settings.fpsCap == 30 && save.settings.musicVol == 0 && save.settings.sfxVol == 0.8 && save.playerName == "Fixture Ünïcode ✓", "imported settings (music switched off on the web = volume 0) and a Unicode player name");
        var h0 = save.heroes[0];
        Check(h0.id == "ysolde" && h0.weapon != 0 && h0.helm != 0 && h0.chest != 0 && h0.boots != 0, "imported equipped gear links");

        // ---------- stats parity ----------
        var g = new Game(save, 1) { Now = () => Now };
        int statOk = 0, statN = 0;
        foreach (var o in Json.Arr(fx, "heroStats"))
        {
            statN++;
            var h = g.HeroByUid(Json.Int(o, "uid"));
            var st = g.HeroStats(h);
            if (st.Hp == N(o, "hp") && st.Atk == N(o, "atk") && st.Def == N(o, "def") && st.Spd == N(o, "spd") && st.Crit == N(o, "crit") && st.Cdmg == N(o, "cdmg") && st.Power == N(o, "power")) statOk++;
            else Console.WriteLine($"   {h.id}: unity {st.Hp}/{st.Atk}/{st.Def}/{st.Spd}/{st.Crit}/{st.Cdmg} p{st.Power} vs web {N(o, "hp")}/{N(o, "atk")}/{N(o, "def")}/{N(o, "spd")}/{N(o, "crit")}/{N(o, "cdmg")} p{N(o, "power")}");
        }
        Check(statOk == statN, $"hero stats and power match the web for {statOk}/{statN} heroes (with gear and set bonuses)");
        Check(g.TeamPower == Json.Int(fx, "teamPower"), $"team power matches ({g.TeamPower})");

        // ---------- export round trip ----------
        var json = SaveCodec.ToJson(save);
        var diffs = new List<string>();
        Diff(web, Json.Parse(json), "", diffs, new HashSet<string> { "settings.quality", "settings.sfxVol", "settings.musicVol" });
        Check(diffs.Count == 0, "exported JSON equals the web save field for field" + (diffs.Count > 0 ? ": " + string.Join("; ", diffs.Take(6)) : ""));
        var again = SaveCodec.FromCode(SaveCodec.ToCode(save));
        Check(again != null && SaveCodec.ToJson(again) == json, "Unity save code round-trips (export → import → same JSON)");
        var fresh = new SaveData();
        var freshBack = SaveCodec.FromCode(SaveCodec.ToCode(fresh));
        Check(freshBack != null && freshBack.gold == 5000 && freshBack.shardMystic == 3 && !freshBack.started, "a brand-new save round-trips");
        Check(SaveCodec.FromCode("SB1.@@@") == null && SaveCodec.FromCode("hello") == null && SaveCodec.FromCode("SB1." + Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes("{\"gold\":1}"))) == null, "invalid codes are rejected");
        var spaced = "  " + code.Substring(0, 40) + "\n " + code.Substring(40) + " ";
        Check(SaveCodec.FromCode(spaced) != null, "codes with line breaks and spaces still load");

        // ---------- stage enemies ----------
        int stageBad = 0;
        foreach (var st in Json.Arr(fx, "stages"))
        {
            int idx = Json.Int(st, "idx");
            var waves = Game.StageWaves(idx);
            stageBad += CompareWaves(waves, Json.Arr(st, "waves"), $"stage {Game.StageLabel(idx)}");
            var r = Game.StageRewards(idx, true); var wr = Json.Obj(st, "rewardsFirst");
            if (r.Gold != N(wr, "gold") || r.Xp != N(wr, "xp") || r.Mystic != N(wr, "mystic") || r.Radiant != N(wr, "radiant")) { stageBad++; Console.WriteLine($"   stage {idx} rewards differ"); }
        }
        Check(stageBad == 0, "stage enemies (templates, elements, bosses, HP/ATK/DEF/SPD) and rewards match");

        // ---------- dungeons ----------
        var today = Trials.TodayElement(Now);
        Check(today == El(Json.Str(fx, "todayElement")) && Js.WeekKey(Now) == Json.Str(fx, "weekKey"), $"today's dungeon element ({today}) and week key match");
        int dBad = 0;
        foreach (var d in Json.Arr(fx, "dungeons"))
        {
            var key = (DungeonKey)Array.IndexOf(new[] { "vault", "trial", "forge" }, Json.Str(d, "key"));
            int f = Json.Int(d, "floor");
            dBad += CompareWaves(Trials.DungeonWaves(key, f, today), Json.Arr(d, "waves"), $"{key} floor {f + 1}");
            foreach (var first in new[] { true, false })
            {
                var r = Trials.DungeonRewards(key, f, first); var wr = Json.Obj(d, first ? "rewardsFirst" : "rewards");
                if (r.Gold != N(wr, "gold") || r.Xp != N(wr, "xp") || r.Essence != N(wr, "essence") || r.Common != N(wr, "common") || r.Mystic != N(wr, "mystic")) { dBad++; Console.WriteLine($"   {key} {f} rewards differ"); }
            }
        }
        Check(dBad == 0, "dungeon floors (enemies, bosses, rewards) match for all three dungeons");

        // ---------- arena rivals ----------
        int rBad = 0;
        foreach (var rs in Json.Arr(fx, "rivals"))
        {
            var mine = Trials.RivalsFor(Json.Int(rs, "seed"), g.Team, g.TeamPower);
            var theirs = Json.Arr(rs, "list");
            for (int i = 0; i < 3; i++)
            {
                var a = mine[i]; var b = theirs[i];
                var ids = Json.Arr(b, "ids").Cast<string>().ToList();
                if (a.Name != Json.Str(b, "name") || !a.Ids.SequenceEqual(ids) || a.Level != N(b, "level") || a.Stars != N(b, "stars") || a.Power != N(b, "power") || a.Gain != N(b, "gain"))
                { rBad++; Console.WriteLine($"   rival {a.Name} {a.Level} {a.Power} vs {Json.Str(b, "name")} {N(b, "level")} {N(b, "power")}"); continue; }
                var units = Trials.RivalUnits(a); var wu = Json.Arr(b, "units");
                for (int k = 0; k < units.Count; k++)
                    if (units[k].MaxHp != N(wu[k], "hp") || units[k].Atk != N(wu[k], "atk") || units[k].Def != N(wu[k], "def") || units[k].Spd != N(wu[k], "spd")) { rBad++; Console.WriteLine($"   rival unit {units[k].Template.Id} differs"); }
            }
        }
        Check(rBad == 0, "arena rivals (names, heroes, levels, power, unit stats) match");

        // ---------- titan ----------
        int tBad = 0;
        foreach (var t in Json.Arr(fx, "titan"))
        {
            var u = Battle.TitanUnit(N(t, "tp"), El(Json.Str(t, "el")));
            if (u.Level != N(t, "level") || u.Atk != N(t, "atk") || u.Def != N(t, "def")) { tBad++; Console.WriteLine($"   titan tp {N(t, "tp")}: {u.Level}/{u.Atk}/{u.Def}"); }
        }
        Check(tBad == 0 && TitanElement(Now) == El(Json.Str(Json.Arr(fx, "titan")[0], "el")), "Titan level, ATK, DEF and daily element match");

        // ---------- promo ----------
        int pBad = 0;
        foreach (var p in Json.Arr(fx, "promo")) if (Promo.Hash(Json.Str(p, "code")) != Json.Str(p, "hash")) { pBad++; Console.WriteLine($"   promo '{Json.Str(p, "code")}': {Promo.Hash(Json.Str(p, "code"))} vs {Json.Str(p, "hash")}"); }
        Check(pBad == 0, "promo code fingerprints match promoHash()");

        TrialsRules();
    }

    static string Camel(string s) => char.ToLowerInvariant(s[0]) + s.Substring(1);

    static void DataParity(Dictionary<string, object> data)
    {
        var bad = new List<string>();
        void Same(bool ok, string what) { if (!ok) bad.Add(what); }
        void Skills(SkillDef[] mine, List<object> theirs, string who)
        {
            Same(mine.Length == theirs.Count, who + " skill count");
            for (int i = 0; i < Math.Min(mine.Length, theirs.Count); i++)
            {
                var a = mine[i]; var b = theirs[i]; string w = $"{who}.{Json.Str(b, "name")}";
                Same(a.Name == Json.Str(b, "name") && Camel(a.Target.ToString()) == Json.Str(b, "target") && a.Mult == N(b, "mult") && a.Cooldown == N(b, "cd")
                    && a.Hits == N(b, "hits") && Camel(a.Scale.ToString()) == Json.Str(b, "scale"), w);
                var fx = Json.Arr(b, "fx");
                Same(a.Fx.Length == fx.Count, w + " fx count");
                for (int k = 0; k < Math.Min(a.Fx.Length, fx.Count); k++)
                {
                    var f = a.Fx[k]; var o = fx[k];
                    Same(Camel(f.Type.ToString()) == Json.Str(o, "t") && f.Chance == Json.Num(o, "chance", -1) && f.Pct == N(o, "pct") && f.Val == N(o, "val")
                        && Camel(f.To.ToString()) == Json.Str(o, "to", "target") && (!Json.Has(o, "turns") || f.Turns == N(o, "turns")), $"{w} fx {k}");
                }
            }
        }
        var heroes = Json.Arr(data, "heroes");
        Same(heroes.Count == Heroes.Length, "hero count");
        foreach (var o in heroes)
        {
            var h = Hero(Json.Str(o, "id"));
            if (h == null) { bad.Add("missing hero " + Json.Str(o, "id")); continue; }
            Same(h.Name == Json.Str(o, "name") && Camel(h.Rarity.ToString()) == Json.Str(o, "rarity") && Camel(h.Element.ToString()) == Json.Str(o, "el") && Camel(h.Role.ToString()) == Json.Str(o, "role"), h.Id);
            Skills(h.Skills, Json.Arr(o, "skills"), h.Id);
        }
        Same(Titan.Name == Json.Str(Json.Obj(data, "titan"), "name"), "titan name");
        Skills(Titan.Skills, Json.Arr(Json.Obj(data, "titan"), "skills"), "titan");
        var tiers = Json.Arr(data, "titanTiers");
        for (int i = 0; i < tiers.Count; i++)
        {
            var t = TitanTiers[i]; var o = tiers[i];
            Same(t.Dmg == N(o, "dmg") && t.Reward.Gold == N(o, "gold") && t.Reward.Common == N(o, "common") && t.Reward.Mystic == N(o, "mystic") && t.Reward.Radiant == N(o, "radiant"), "titan tier " + i);
        }
        var login = Json.Arr(data, "login");
        for (int i = 0; i < login.Count; i++)
        {
            var r = LoginRewards[i]; var o = login[i];
            Same(r.Gold == N(o, "gold") && r.Common == N(o, "common") && r.Mystic == N(o, "mystic") && r.Radiant == N(o, "radiant"), "login day " + (i + 1));
        }
        var quests = Json.Arr(data, "quests");
        for (int i = 0; i < quests.Count; i++)
        {
            var q = DailyQuests[i]; var o = quests[i]; var rw = Json.Obj(o, "reward");
            Same(q.Id == Json.Str(o, "id") && q.Name == Json.Str(o, "name") && q.Goal == N(o, "goal") && q.Reward.Gold == N(rw, "gold") && q.Reward.Common == N(rw, "common") && q.Reward.Mystic == N(rw, "mystic"), "quest " + q.Id);
        }
        var sets = Json.Obj(data, "gearSets");
        foreach (GearSet gs in Enum.GetValues(typeof(GearSet)))
        {
            var o = Json.Obj(sets, Camel(gs.ToString())); var b = SetBonus(gs);
            Same(o != null && b.val == N(o, "val") && b.desc == Json.Str(o, "desc") && Camel(b.stat.ToString()) == Json.Str(o, "stat"), "set " + gs);
        }
        var subs = Json.Obj(data, "substats");
        foreach (var st in SubStats)
        {
            var roll = Json.Arr(Json.Obj(subs, Camel(st.ToString())), "roll"); var (mn, mx) = SubRoll(st);
            Same(roll != null && mn == (double)roll[0] && mx == (double)roll[1], "substat " + st);
        }
        var shards = Json.Obj(data, "shards");
        foreach (Shard sh in Enum.GetValues(typeof(Shard)))
        {
            var o = Json.Obj(shards, Camel(sh.ToString())); var rates = Json.Obj(o, "rates"); var mine = ShardRates(sh);
            Same(mine[0] == N(rates, "common") && mine[1] == N(rates, "rare") && mine[2] == N(rates, "epic") && mine[3] == N(rates, "legendary") && ShardPity(sh) == N(o, "pity"), "shard " + sh);
        }
        foreach (var o in Json.Arr(data, "exchange"))
        {
            var sh = (Shard)Array.IndexOf(new[] { "common", "mystic", "radiant" }, Json.Str(o, "shard"));
            Same(ExchangeCost(sh) == N(o, "cost"), "exchange " + sh);
        }
        var cv = Json.Obj(data, "curve");
        Same(Curve.Start == N(cv, "start") && Curve.End == N(cv, "end") && Curve.Shape == N(cv, "shape") && Curve.SpdPerStage == N(cv, "spdPerStage") && Curve.BossStat == N(cv, "bossStat") && Curve.BossHp == N(cv, "bossHp")
            && Curve.Chapter.SequenceEqual(Json.Arr(cv, "chapter").Cast<double>()), "enemy curve");
        Same(Chapters.SequenceEqual(Json.Arr(data, "chapters").Cast<string>()) && Starters.SequenceEqual(Json.Arr(data, "starters").Cast<string>()), "chapters and starters");
        var roles = Json.Obj(data, "roles");
        foreach (Role r in Enum.GetValues(typeof(Role)))
        {
            var o = Json.Obj(roles, Camel(r.ToString())); var m = Mods(r);
            Same(m.Hp == N(o, "hp") && m.Atk == N(o, "atk") && m.Def == N(o, "def") && m.Spd == N(o, "spd"), "role " + r);
        }
        var rar = Json.Obj(data, "rarity");
        foreach (Rarity r in Enum.GetValues(typeof(Rarity)))
        {
            var o = Json.Obj(rar, Camel(r.ToString()));
            Same(RarityMult(r) == N(o, "mult") && EssenceValue(r) == N(o, "essence") && NaturalStars(r) == N(o, "stars"), "rarity " + r);
        }
        Check(bad.Count == 0, $"data matches data.js: 24 heroes and every skill, Titan, tiers, login, quests, sets, substats, shards, curve" + (bad.Count > 0 ? " — differs: " + string.Join(", ", bad.Take(8)) : ""));
    }

    static int CompareWaves(List<List<EnemySpec>> mine, List<object> theirs, string label)
    {
        int bad = 0;
        if (mine.Count != theirs.Count) { Console.WriteLine($"   {label}: {mine.Count} waves vs {theirs.Count}"); return 1; }
        for (int w = 0; w < mine.Count; w++)
        {
            var tw = (List<object>)theirs[w];
            if (mine[w].Count != tw.Count) { bad++; continue; }
            for (int i = 0; i < tw.Count; i++)
            {
                var e = mine[w][i]; var o = tw[i]; var u = Battle.FromEnemy(e);
                if (e.Template.Id != Json.Str(o, "id") || e.El != El(Json.Str(o, "el")) || e.Boss != Json.Bool(o, "boss") || e.ShownLevel != N(o, "shownLevel")
                    || u.MaxHp != N(o, "hp") || u.Atk != N(o, "atk") || u.Def != N(o, "def") || Math.Abs(u.Spd - N(o, "spd")) > 1e-9)
                { bad++; Console.WriteLine($"   {label} w{w} #{i}: {e.Template.Id}/{e.El}/{u.MaxHp}/{u.Atk}/{u.Def}/{u.Spd} vs {Json.Str(o, "id")}/{Json.Str(o, "el")}/{N(o, "hp")}/{N(o, "atk")}/{N(o, "def")}/{N(o, "spd")}"); }
            }
        }
        return bad;
    }

    // Semantic JSON comparison (numbers by value, objects by key set).
    static void Diff(object a, object b, string path, List<string> diffs, HashSet<string> ignore)
    {
        if (ignore.Contains(path.TrimStart('.'))) return;
        if (a is Dictionary<string, object> da && b is Dictionary<string, object> db)
        {
            foreach (var k in da.Keys.Union(db.Keys))
            {
                var p = path + "." + k;
                if (ignore.Contains(p.TrimStart('.'))) continue;
                if (!da.ContainsKey(k)) { diffs.Add($"{p} only in Unity"); continue; }
                if (!db.ContainsKey(k)) { diffs.Add($"{p} missing in Unity"); continue; }
                Diff(da[k], db[k], p, diffs, ignore);
            }
            return;
        }
        if (a is List<object> la && b is List<object> lb)
        {
            if (la.Count != lb.Count) { diffs.Add($"{path} length {la.Count} vs {lb.Count}"); return; }
            for (int i = 0; i < la.Count; i++) Diff(la[i], lb[i], $"{path}[{i}]", diffs, ignore);
            return;
        }
        if (!Equals(a, b)) diffs.Add($"{path}: {Json.Write(a)} vs {Json.Write(b)}");
    }

    static void TrialsRules()
    {
        Console.WriteLine("\nTrials and promo rules:");
        var now = Now;
        var g = new Game(seed: 5) { Now = () => now };
        g.StartWith("ysolde");
        g.S.cleared = 5;
        Check(!g.DungeonsOpen && !g.ArenaOpen, "dungeons and arena are locked before stage 1-6 / 2-6");
        g.S.cleared = 12;
        Check(g.DungeonsOpen && g.ArenaOpen && g.CanEnterFloor(DungeonKey.Vault, 0) && !g.CanEnterFloor(DungeonKey.Vault, 1), "floor 1 open, floor 2 locked until floor 1 is cleared");
        int gold0 = g.S.gold;
        var res = g.CompleteDungeon(DungeonKey.Vault, 0);
        Check(res.First && g.DungeonFloorsCleared(DungeonKey.Vault) == 1 && res.RunsLeft == 2 && g.S.gold - gold0 == 1500 && res.Reward.Common == 1, "vault floor 1: first-clear bonus, 1,500 gold, one run used");
        g.CompleteDungeon(DungeonKey.Vault, 0); g.CompleteDungeon(DungeonKey.Vault, 0);
        Check(g.DungeonRunsLeft(DungeonKey.Vault) == 0 && !g.CanEnterFloor(DungeonKey.Vault, 0), "3 winning runs a day, then the dungeon closes");
        g.ForgeSet = GearSet.Haste;
        int gear0 = g.S.gear.Count;
        var fr = g.CompleteDungeon(DungeonKey.Forge, 0);
        Check(fr.Drops.Count >= 1 && fr.Drops.All(x => x.Set == GearSet.Haste && x.rarity >= 1) && g.S.gear.Count == gear0 + fr.Drops.Count, "Sigil Forge drops gear of the chosen set");
        var tr = g.CompleteDungeon(DungeonKey.Trial, 0);
        Check(tr.Reward.Xp > 0 && tr.Reward.Essence == 5, "Hall of Echoes gives team XP and essence");
        now = now.AddDays(1);
        Check(g.DungeonRunsLeft(DungeonKey.Vault) == 3 && g.S.daily.arenaTries == 5, "runs and arena fights reset the next day");

        var rivals = g.CurrentRivals();
        Check(rivals.Count == 3 && rivals.Select(r => r.Label).SequenceEqual(new[] { "Easy", "Even", "Hard" }) && rivals.All(r => r.Ids.Count == 3 && r.Ids.Distinct().Count() == 3), "3 rival teams (Easy / Even / Hard) of distinct heroes");
        int seed0 = g.S.modes.arena.seed;
        var ar = g.CompleteArena(rivals[2], true);
        Check(ar.Delta == 28 && ar.Points == 1028 && g.S.daily.arenaTries == 4 && g.S.modes.arena.seed == seed0 + 1 && ar.Reward.Gold == Trials.ArenaWinGold(rivals[2]), "arena win: +28 points, gold, new rivals, one fight used");
        var al = g.CompleteArena(rivals[0], false);
        Check(al.Delta == -8 && al.Points == 1020, "arena loss: -8 points");
        g.S.modes.arena.points = 1520;
        Check(Trials.TierFor(1520).Name == "Platinum" && Trials.TierFor(1149).Name == "Bronze" && Trials.TierFor(1700).Name == "Sigil", "tiers Bronze → Sigil by points");
        now = now.AddDays(7);
        g.EnsureModes();
        Check(g.S.modes.arena.pendingTier == "Platinum" && g.S.modes.arena.points == 1260 && g.S.modes.arena.wins == 0, "weekly reset: reward for the tier you finished in, points soften toward 1000");
        int mystic0 = g.S.shardMystic;
        var wk = g.ClaimArenaWeekly();
        Check(wk != null && g.S.shardMystic == mystic0 + 2 && g.ClaimArenaWeekly() == null, "weekly reward claimable once");

        int rad0 = g.S.shardRadiant;
        Check(Promo.Redeem(g, "", out _) == PromoResult.Empty && Promo.Redeem(g, "NOT-A-CODE", out _) == PromoResult.Invalid, "empty and unknown promo codes are refused");
        // The real code is secret; register a test fingerprint the same way a new code is added.
        Promo.Codes[Promo.Hash("unity-test")] = new Promo.Entry { Reward = new Reward { Radiant = 2 }, Label = "Test" };
        Check(Promo.Redeem(g, " Unity Test ", out var e) == PromoResult.Redeemed && g.S.shardRadiant == rad0 + 2 && e.Label == "Test", "a valid code grants its reward (case, spaces and dashes ignored)");
        Check(Promo.Redeem(g, "UNITYTEST", out _) == PromoResult.AlreadyUsed, "a code works once per save");
        Promo.Codes.Remove(Promo.Hash("unity-test"));
        // First-time tips and the auto-replay summary.
        var tg = new Game(seed: 2) { Now = () => now };
        tg.StartWith("hask");
        var t1 = Tips.Next(tg, true, false); var t2 = Tips.Next(tg, true, false); var t3 = Tips.Next(tg, false, true);
        Check(t1?.Id == "welcome" && t2 == null && t3?.Id == "battle" && tg.S.modes.tips.SequenceEqual(new[] { "welcome", "battle" }), "first-time tips show once each, in order, when their condition holds");
        var vet = new Game(seed: 3) { Now = () => now }; vet.StartWith("hask"); vet.S.wins = 4; vet.S.summons = 2; Tips.Seed(vet);
        Check(vet.S.modes.tips.Contains("welcome") && vet.S.modes.tips.Contains("battle") && vet.S.modes.tips.Contains("gear") && vet.S.modes.tips.Contains("summon"), "existing players skip beginner tips (seedTips)");
        var run = new AutoRun(); run.Record(true, new Reward { Gold = 500, Xp = 100, Common = 1 }, true, new[] { "Hask Lv 6" }); run.Record(false, null, false, null);
        Check(run.Battles == 2 && run.Wins == 1 && run.Losses == 1 && run.Summary().Contains("500 gold") && run.Summary().Contains("1 gear piece"), "auto-replay run summary totals");
        var back = SaveCodec.FromCode(SaveCodec.ToCode(g.S));
        Check(back.modes.codes.Count == 1 && back.modes.arena.points == 1260 && back.modes.floorsVault == 1, "trials progress and used codes survive a save code");
    }
}
