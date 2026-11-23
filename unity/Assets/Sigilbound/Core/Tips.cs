// First-time tips (modes.js TIPS / checkTips / seedTips): each shows once per save, in order,
// when its condition first holds. Shown tips are stored in modes.tips (shared with the web save).
using System.Collections.Generic;
using System.Linq;

namespace Sigilbound.Core
{
    public sealed class Tip { public string Id, Title, Body; }

    public static class Tips
    {
        public static readonly Tip[] All =
        {
            new Tip { Id = "welcome", Title = "Welcome to Sigilbound", Body = "Press Continue Campaign to fight. Clearing stages earns gold, XP, gear and summon shards.\n\nClaim your Daily Login and finish Daily Quests on this screen every day. Everything is free — there is no shop." },
            new Tip { Id = "battle", Title = "How battles work", Body = "On your hero's turn, tap a skill, then tap a target. Skills that say \"ready in\" need a few turns to recharge.\n\nElements matter: Flame beats Gale, Gale beats Tide, Tide beats Flame, and Light and Shadow beat each other.\n\nTap Auto to let the heroes fight on their own, and the speed button to go up to 3x." },
            new Tip { Id = "gear", Title = "You found gear!", Body = "Open Heroes, pick a hero and tap a gear slot to equip it — or tap Auto-equip. Two pieces of the same set give a bonus.\n\nGear shows on the hero's 3D model, and better gear looks fancier." },
            new Tip { Id = "summon", Title = "Summon new heroes", Body = "You have summon shards. Open Summon to call new heroes — every shard is earned by playing." },
            new Tip { Id = "trials", Title = "Dungeons unlocked", Body = "Open Trials for daily Dungeons: gold, a big hero-XP boost, or gear of the set you choose. You get 3 winning runs per dungeon each day." },
            new Tip { Id = "arena", Title = "Arena unlocked", Body = "Fight rival teams in Trials → Arena to climb from Bronze to Sigil. Each Monday you get a reward for your rank." },
        };

        static bool When(Tip t, Game g, bool onHome, bool inBattle)
        {
            var S = g.S;
            switch (t.Id)
            {
                case "welcome": return S.started && onHome;
                case "battle": return inBattle;
                case "gear": return !inBattle && S.wins > 0 && S.gear.Count > 0;
                case "summon": return !inBattle && S.cleared >= 3 && S.shardCommon + S.shardMystic + S.shardRadiant > 0;
                case "trials": return !inBattle && g.DungeonsOpen;
                case "arena": return !inBattle && g.ArenaOpen;
                default: return false;
            }
        }

        // The next tip to show (and marks it shown), or null.
        public static Tip Next(Game g, bool onHome, bool inBattle)
        {
            if (!g.S.started) return null;
            var M = g.EnsureModes();
            foreach (var t in All)
            {
                if (M.tips.Contains(t.Id) || !When(t, g, onHome, inBattle)) continue;
                M.tips.Add(t.Id);
                return t;
            }
            return null;
        }

        // Existing players shouldn't see beginner tips for things they've clearly done (seedTips).
        public static void Seed(Game g)
        {
            if (!g.S.started) return;
            var M = g.EnsureModes();
            void Mark(string id) { if (!M.tips.Contains(id)) M.tips.Add(id); }
            if (g.S.wins > 0) { Mark("welcome"); Mark("battle"); }
            if (g.S.gear.Any(x => g.GearOwner(x) != null)) Mark("gear");
            if (g.S.summons > 0) Mark("summon");
        }
    }

    // Auto-replay run totals (ui.js AUTO / autoRecord / showAutoSummary).
    public sealed class AutoRun
    {
        public int Battles, Wins, Losses, Gold, Xp, Common, Mystic, Radiant, Gear;
        public readonly List<string> LevelUps = new List<string>();
        public void Record(bool win, Reward r, bool gotGear, IEnumerable<string> levelUps)
        {
            Battles++;
            if (!win) { Losses++; return; }
            Wins++;
            if (r != null) { Gold += r.Gold; Xp += r.Xp; Common += r.Common; Mystic += r.Mystic; Radiant += r.Radiant; }
            if (gotGear) Gear++;
            if (levelUps != null) LevelUps.AddRange(levelUps);
        }
        public string Summary()
        {
            var parts = new List<string> { $"{Battles} battle{(Battles == 1 ? "" : "s")} · {Wins} won · {Losses} lost", $"{Gold:N0} gold · {Xp:N0} XP each" };
            var shards = new List<string>();
            if (Common > 0) shards.Add($"{Common} worn"); if (Mystic > 0) shards.Add($"{Mystic} mystic"); if (Radiant > 0) shards.Add($"{Radiant} radiant");
            if (shards.Count > 0) parts.Add("Shards: " + string.Join(", ", shards));
            if (Gear > 0) parts.Add($"{Gear} gear piece{(Gear == 1 ? "" : "s")}");
            if (LevelUps.Count > 0) parts.Add("Level ups: " + string.Join(", ", LevelUps.Distinct().Take(6)));
            return string.Join("\n", parts);
        }
    }
}
