// Reads and writes saves in the web game's JSON layout (public/game/state.js and modes.js), and
// its "SB1." save codes: "SB1." + base64(UTF-8 JSON). Codes made by the web game load here, and
// codes made here load in the web game.
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using static Sigilbound.Core.GameData;

namespace Sigilbound.Core
{
    public static class SaveCodec
    {
        public const string Prefix = "SB1.";

        static readonly string[] SlotKeys = { "weapon", "helm", "chest", "boots" };          // GameData.Slot order
        static readonly string[] SetKeys = { "fury", "vigor", "bulwark", "haste", "keen" };   // GameData.GearSet order
        static readonly string[] QuestKeys = { "win", "summon", "upgrade", "titan", "all" };
        public static string SlotKey(Slot s) => SlotKeys[(int)s];
        public static string SetKey(GearSet s) => SetKeys[(int)s];
        public static int SetIndex(string key) { int i = Array.IndexOf(SetKeys, key); return i < 0 ? 0 : i; }

        static string StatKey(Stat s) => s switch
        {
            Stat.AtkPct => "atkPct", Stat.HpPct => "hpPct", Stat.DefPct => "defPct", Stat.SpdPct => "spdPct",
            Stat.Spd => "spd", Stat.Crit => "crit", Stat.Cdmg => "cdmg", Stat.Atk => "atk", Stat.Hp => "hp", _ => "def",
        };
        static Stat StatFrom(string k) => k switch
        {
            "atkPct" => Stat.AtkPct, "hpPct" => Stat.HpPct, "defPct" => Stat.DefPct, "spdPct" => Stat.SpdPct,
            "spd" => Stat.Spd, "crit" => Stat.Crit, "cdmg" => Stat.Cdmg, "atk" => Stat.Atk, "hp" => Stat.Hp, _ => Stat.Def,
        };

        // ---------- save codes ----------
        public static string ToCode(SaveData s) => Prefix + Convert.ToBase64String(Encoding.UTF8.GetBytes(ToJson(s)));

        // Same checks as importSave(): the "SB1." prefix, whitespace anywhere is ignored, and the JSON
        // must have a heroes array and a numeric gold. Returns null if the code isn't valid.
        public static SaveData FromCode(string code)
        {
            if (code == null) return null;
            code = code.Trim();
            if (!code.StartsWith(Prefix, StringComparison.Ordinal)) return null;
            try
            {
                var b64 = new string(code.Substring(Prefix.Length).Where(c => !char.IsWhiteSpace(c)).ToArray());
                var json = Encoding.UTF8.GetString(Convert.FromBase64String(b64));
                return FromJson(json);
            }
            catch (FormatException) { return null; }
            catch (ArgumentException) { return null; }
        }

        // ---------- JSON -> SaveData ----------
        public static SaveData FromJson(string json)
        {
            var root = Json.Parse(json) as Dictionary<string, object>;
            if (root == null || Json.Arr(root, "heroes") == null || !(root.TryGetValue("gold", out var gold) && gold is double)) return null;
            var s = new SaveData { sourceJson = json };
            s.v = Json.Int(root, "v", 1);
            s.started = Json.Bool(root, "started");
            s.nextUid = Json.Int(root, "nextUid", 1);
            s.gold = Json.Int(root, "gold", 5000);
            s.essence = Json.Int(root, "essence");
            var sh = Json.Obj(root, "shards");
            if (sh != null) { s.shardCommon = Json.Int(sh, "common"); s.shardMystic = Json.Int(sh, "mystic"); s.shardRadiant = Json.Int(sh, "radiant"); }

            foreach (var o in Json.Arr(root, "heroes"))
            {
                var id = Json.Str(o, "id");
                if (Hero(id) == null) continue; // unknown hero (newer web version): skip rather than crash
                var h = new HeroSave { uid = Json.Int(o, "uid"), id = id, level = Json.Int(o, "level", 1), xp = Json.Int(o, "xp"), stars = Json.Int(o, "stars", NaturalStars(Hero(id).Rarity)), locked = Json.Bool(o, "locked") };
                var g = Json.Obj(o, "gear");
                if (g != null) foreach (Slot sl in Enum.GetValues(typeof(Slot))) h.SetGear(sl, Json.Int(g, SlotKey(sl)));
                s.heroes.Add(h);
            }
            foreach (var o in Json.Arr(root, "gear") ?? new List<object>())
            {
                int slot = Array.IndexOf(SlotKeys, Json.Str(o, "slot"));
                if (slot < 0) continue;
                var g = new GearSave { uid = Json.Int(o, "uid"), slot = slot, rarity = Math.Max(1, Math.Min(5, Json.Int(o, "rarity", 1))), set = SetIndex(Json.Str(o, "set")), level = Json.Int(o, "level") };
                foreach (var sub in Json.Arr(o, "subs") ?? new List<object>())
                    g.subs.Add(new SubStatSave { stat = (int)StatFrom(Json.Str(sub, "stat")), val = Json.Int(sub, "val") });
                s.gear.Add(g);
            }
            // Drop links to gear that isn't in the bag (keeps stats consistent).
            var gearUids = new HashSet<int>(s.gear.Select(g => g.uid));
            foreach (var h in s.heroes) foreach (Slot sl in Enum.GetValues(typeof(Slot))) if (h.GetGear(sl) != 0 && !gearUids.Contains(h.GetGear(sl))) h.SetGear(sl, 0);
            var heroUids = new HashSet<int>(s.heroes.Select(h => h.uid));
            s.team = (Json.Arr(root, "team") ?? new List<object>()).OfType<double>().Select(d => (int)d).Where(heroUids.Contains).Distinct().Take(4).ToList();
            int maxUid = s.heroes.Select(h => h.uid).Concat(s.gear.Select(g => g.uid)).DefaultIfEmpty(0).Max();
            s.nextUid = Math.Max(s.nextUid, maxUid + 1);

            s.cleared = Math.Max(0, Math.Min(TotalStages, Json.Int(root, "cleared")));
            var pity = Json.Obj(root, "pity");
            s.pityMystic = Json.Int(pity, "mystic"); s.pityRadiant = Json.Int(pity, "radiant");
            var login = Json.Obj(root, "login");
            s.loginLast = Json.Str(login, "last"); s.loginDay = Json.Int(login, "day");

            var d = Json.Obj(root, "daily");
            if (d != null)
            {
                var prog = Json.Obj(d, "progress"); var cl = Json.Obj(d, "claimed"); var runs = Json.Obj(d, "dRuns");
                s.daily = new DailySave
                {
                    date = Json.Str(d, "date"),
                    win = Json.Int(prog, "win"), summon = Json.Int(prog, "summon"), upgrade = Json.Int(prog, "upgrade"), titan = Json.Int(prog, "titan"),
                    cWin = Json.Bool(cl, "win"), cSummon = Json.Bool(cl, "summon"), cUpgrade = Json.Bool(cl, "upgrade"), cTitan = Json.Bool(cl, "titan"), cAll = Json.Bool(cl, "all"),
                    titanTries = Json.Int(d, "titanTries", 3), titanBest = Json.Long(d, "titanBest"),
                    runsVault = runs == null ? Trials.DungeonRuns : Json.Int(runs, "vault"),
                    runsTrial = runs == null ? Trials.DungeonRuns : Json.Int(runs, "trial"),
                    runsForge = runs == null ? Trials.DungeonRuns : Json.Int(runs, "forge"),
                    arenaTries = Json.Has(d, "arenaTries") ? Json.Int(d, "arenaTries") : Trials.ArenaTries,
                };
            }
            else s.daily = new DailySave(); // date "" = a fresh day on the next EnsureDaily

            var st = Json.Obj(root, "settings");
            if (st != null)
            {
                s.settings.speed = Math.Max(1, Math.Min(3, Json.Int(st, "speed", 1)));
                s.settings.auto = Json.Bool(st, "auto"); s.settings.autoReplay = Json.Bool(st, "autoReplay");
                s.settings.cam = Json.Str(st, "cam", "angle");
                if (!Json.Bool(st, "camDefault2")) s.settings.cam = "angle"; // modes.js one-time switch to Three-quarter
                s.settings.fpsCap = Json.Int(st, "fpsCap", 60) == 30 ? 30 : 60;
                s.settings.quality = Json.Str(st, "quality", "auto");
            }

            var stats = Json.Obj(root, "stats");
            s.wins = Json.Int(stats, "wins"); s.summons = Json.Int(stats, "summons"); s.titanBestAllTime = Json.Long(stats, "titanBest");
            s.playerName = Json.Str(root, "playerName");
            s.gameVersion = Json.Str(root, "gameVersion");

            var m = Json.Obj(root, "modes");
            if (m != null)
            {
                var dg = Json.Obj(m, "dungeon");
                s.modes.floorsVault = Clamp(Json.Int(dg, "vault"), 0, Trials.DungeonFloors);
                s.modes.floorsTrial = Clamp(Json.Int(dg, "trial"), 0, Trials.DungeonFloors);
                s.modes.floorsForge = Clamp(Json.Int(dg, "forge"), 0, Trials.DungeonFloors);
                s.modes.forgeSet = SetIndex(Json.Str(m, "forgeSet", "fury"));
                var a = Json.Obj(m, "arena");
                if (a != null)
                {
                    s.modes.initialized = true;
                    s.modes.arena = new ArenaSave
                    {
                        points = Json.Int(a, "points", 1000), best = Json.Int(a, "best", 1000), wins = Json.Int(a, "wins"), losses = Json.Int(a, "losses"),
                        seed = Json.Int(a, "seed", 1), week = Json.Str(a, "week"), pendingTier = Json.Str(Json.Obj(a, "pending"), "tier"),
                    };
                }
                var tips = Json.Obj(m, "tips");
                if (tips != null) s.modes.tips = tips.Where(kv => Json.Bool(tips, kv.Key)).Select(kv => kv.Key).ToList();
                s.modes.codes = (Json.Arr(m, "codes") ?? new List<object>()).OfType<string>().ToList();
            }
            return s;
        }
        static int Clamp(int v, int lo, int hi) => Math.Max(lo, Math.Min(hi, v));

        // ---------- SaveData -> JSON ----------
        // Starts from the JSON the save came from (so web-only fields survive) and overwrites
        // everything the Unity app owns.
        public static string ToJson(SaveData s)
        {
            Dictionary<string, object> root = null;
            if (!string.IsNullOrEmpty(s.sourceJson)) { try { root = Json.Parse(s.sourceJson) as Dictionary<string, object>; } catch (FormatException) { } }
            root ??= new Dictionary<string, object>();

            root["v"] = s.v; root["started"] = s.started; root["nextUid"] = s.nextUid;
            root["gold"] = s.gold; root["essence"] = s.essence;
            root["shards"] = new Dictionary<string, object> { ["common"] = s.shardCommon, ["mystic"] = s.shardMystic, ["radiant"] = s.shardRadiant };
            root["heroes"] = s.heroes.Select(h =>
            {
                var gear = new Dictionary<string, object>();
                foreach (Slot sl in Enum.GetValues(typeof(Slot))) if (h.GetGear(sl) != 0) gear[SlotKey(sl)] = h.GetGear(sl);
                return (object)new Dictionary<string, object> { ["uid"] = h.uid, ["id"] = h.id, ["level"] = h.level, ["xp"] = h.xp, ["stars"] = h.stars, ["gear"] = gear, ["locked"] = h.locked };
            }).ToList();
            root["gear"] = s.gear.Select(g => (object)new Dictionary<string, object>
            {
                ["uid"] = g.uid, ["slot"] = SlotKey(g.Slot), ["rarity"] = g.rarity, ["set"] = SetKey(g.Set), ["level"] = g.level,
                ["subs"] = g.subs.Select(x => (object)new Dictionary<string, object> { ["stat"] = StatKey((Stat)x.stat), ["val"] = x.val }).ToList(),
            }).ToList();
            root["team"] = s.team.Select(u => (object)u).ToList();
            root["cleared"] = s.cleared;
            root["pity"] = new Dictionary<string, object> { ["mystic"] = s.pityMystic, ["radiant"] = s.pityRadiant };
            root["login"] = new Dictionary<string, object> { ["last"] = s.loginLast, ["day"] = s.loginDay };

            var d = s.daily;
            if (d == null || string.IsNullOrEmpty(d.date)) root["daily"] = null;
            else
            {
                var progress = new Dictionary<string, object>();
                if (d.win > 0) progress["win"] = d.win;
                if (d.summon > 0) progress["summon"] = d.summon;
                if (d.upgrade > 0) progress["upgrade"] = d.upgrade;
                if (d.titan > 0) progress["titan"] = d.titan;
                var claimed = new Dictionary<string, object>();
                bool[] flags = { d.cWin, d.cSummon, d.cUpgrade, d.cTitan, d.cAll };
                for (int i = 0; i < QuestKeys.Length; i++) if (flags[i]) claimed[QuestKeys[i]] = true;
                root["daily"] = new Dictionary<string, object>
                {
                    ["date"] = d.date, ["progress"] = progress, ["claimed"] = claimed, ["titanTries"] = d.titanTries, ["titanBest"] = d.titanBest,
                    ["dRuns"] = new Dictionary<string, object> { ["vault"] = d.runsVault, ["trial"] = d.runsTrial, ["forge"] = d.runsForge },
                    ["arenaTries"] = d.arenaTries,
                };
            }

            var st = Json.Obj(root, "settings") ?? new Dictionary<string, object>();
            st["speed"] = s.settings.speed; st["auto"] = s.settings.auto; st["autoReplay"] = s.settings.autoReplay;
            st["cam"] = s.settings.cam; st["camDefault2"] = 1; st["fpsCap"] = s.settings.fpsCap; st["quality"] = s.settings.quality;
            root["settings"] = st;
            var stats = Json.Obj(root, "stats") ?? new Dictionary<string, object>();
            stats["wins"] = s.wins; stats["summons"] = s.summons; stats["titanBest"] = s.titanBestAllTime;
            root["stats"] = stats;
            if (!string.IsNullOrEmpty(s.playerName)) root["playerName"] = s.playerName;
            if (!string.IsNullOrEmpty(s.gameVersion)) root["gameVersion"] = s.gameVersion;

            if (s.modes != null && s.modes.initialized)
            {
                var m = Json.Obj(root, "modes") ?? new Dictionary<string, object>();
                m["dungeon"] = new Dictionary<string, object> { ["vault"] = s.modes.floorsVault, ["trial"] = s.modes.floorsTrial, ["forge"] = s.modes.floorsForge };
                m["forgeSet"] = SetKey((GearSet)s.modes.forgeSet);
                var a = s.modes.arena;
                m["arena"] = new Dictionary<string, object>
                {
                    ["points"] = a.points, ["best"] = a.best, ["wins"] = a.wins, ["losses"] = a.losses, ["week"] = a.week, ["seed"] = a.seed,
                    ["pending"] = string.IsNullOrEmpty(a.pendingTier) ? null : new Dictionary<string, object> { ["tier"] = a.pendingTier },
                };
                var tips = Json.Obj(m, "tips") ?? new Dictionary<string, object>();
                foreach (var t in s.modes.tips) tips[t] = 1;
                m["tips"] = tips;
                m["codes"] = s.modes.codes.Select(c => (object)c).ToList();
                root["modes"] = m;
            }
            return Json.Write(root);
        }
    }
}
