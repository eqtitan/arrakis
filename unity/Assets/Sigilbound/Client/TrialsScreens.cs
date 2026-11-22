// Trials tab (modes.js): the Titan, daily Dungeons and the Arena.
using System;
using System.Linq;
using UnityEngine;
using Sigilbound.Core;
using static Sigilbound.Core.GameData;

namespace Sigilbound.Client
{
    public sealed partial class App
    {
        DungeonKey _dungeonKey = DungeonKey.Vault;

        static string ElName(Element e) => e.ToString();

        void TrialCard(ref float y, string title, string sub, bool open, string lockText, string badge, Action go)
        {
            var r = Row(ref y, 78);
            Ui.Card(r, open && !string.IsNullOrEmpty(badge));
            var col = GUI.color; if (!open) GUI.color = new Color(1, 1, 1, 0.5f);
            Ui.Text(new Rect(r.x + 16, r.y + 10, r.width - 120, 26), title, 17, Palette.TrimHi, FontStyle.Bold, TextAnchor.MiddleLeft, false, true);
            Ui.Text(new Rect(r.x + 16, r.y + 36, r.width - 40, 36), open ? sub : lockText, 12, Palette.Dim, FontStyle.Normal, TextAnchor.UpperLeft, true);
            GUI.color = col;
            if (open && !string.IsNullOrEmpty(badge)) { var b = new Rect(r.xMax - 96, r.y + 12, 82, 24); Ui.Panel(b, Palette.Hex("#3d3020"), Palette.Gold, 12); Ui.Text(b, badge, 12, Palette.Gold, FontStyle.Bold, TextAnchor.MiddleCenter); }
            if (!open) Ui.Text(new Rect(r.xMax - 70, r.y + 12, 56, 24), "Locked", 12, Palette.Dim, FontStyle.Normal, TextAnchor.MiddleRight);
            if (open && Ui.Button(r, "", Ui.Kind.Ghost)) go();
        }

        void DrawTrials(Rect area)
        {
            var M = G.EnsureModes(); var A = M.arena; var tier = Trials.TierFor(A.points);
            _scroll = Scroller.Begin(area, _scroll, 420);
            float y = 8;
            Ui.Heading(new Rect(Pad, y, 300, 32), "Trials"); y += 42;
            var tel = TitanElement(DateTime.Now); var today = G.TodayElement;
            TrialCard(ref y, Titan.Name, $"Daily boss · {ElName(tel)} today · {G.S.daily.titanTries}/3 tries", true, "", G.S.daily.titanTries > 0 ? $"{G.S.daily.titanTries} left" : "", () => Go(ScreenId.Titan));
            int runs = Enum.GetValues(typeof(DungeonKey)).Cast<DungeonKey>().Sum(k => G.DungeonRunsLeft(k));
            TrialCard(ref y, "Dungeons", $"Gold, hero XP and the gear set you want · today's foes: {ElName(today)}", G.DungeonsOpen, "Unlocks after clearing stage 1-6", $"{runs} runs", () => Go(ScreenId.Dungeon));
            TrialCard(ref y, "Arena", $"{tier.Name} · {A.points} points · {G.S.daily.arenaTries}/{Trials.ArenaTries} fights today", G.ArenaOpen, "Unlocks after clearing stage 2-6", G.S.daily.arenaTries > 0 ? $"{G.S.daily.arenaTries} left" : "", () => Go(ScreenId.ArenaPvp));
            Ui.Text(Row(ref y, 36), "Everything resets daily. All rewards are earned by playing — there is nothing to buy.", 12, Palette.Dim, FontStyle.Normal, TextAnchor.MiddleCenter, true);
            Scroller.End();
        }

        void DrawDungeon(Rect area)
        {
            var key = _dungeonKey; var D = Trials.Dungeon(key);
            int best = G.DungeonFloorsCleared(key), runs = G.DungeonRunsLeft(key);
            float content = 330 + (key == DungeonKey.Forge ? 110 : 0) + Trials.DungeonFloors * 62;
            _scroll = Scroller.Begin(area, _scroll, content);
            float y = 8;
            if (Ui.Button(new Rect(Pad, y, 80, 32), "‹ Trials", Ui.Kind.Secondary, 13)) Go(ScreenId.Trials);
            Ui.Text(new Rect(Ui.W - 200, y, 184, 32), $"Power {Ui.Fmt(G.TeamPower)}", 13, Palette.Dim, FontStyle.Normal, TextAnchor.MiddleRight);
            y += 42;
            float tw = (Ui.W - Pad * 2 - 12) / 3;
            for (int i = 0; i < Trials.Dungeons.Length; i++)
            {
                var d = Trials.Dungeons[i];
                if (Ui.Button(new Rect(Pad + i * (tw + 6), y, tw, 34), d.Name, d.Key == key ? Ui.Kind.ChipOn : Ui.Kind.Chip, 12)) { _dungeonKey = d.Key; _scroll = Vector2.zero; }
            }
            y += 44;
            var el = G.TodayElement;
            var counters = Elements.Where(e => Strong(e) == el).Select(ElName);
            var r = Row(ref y, 150);
            Ui.Card(r);
            Ui.Text(new Rect(r.x + 16, r.y + 10, r.width - 32, 26), D.Name, 18, Palette.TrimHi, FontStyle.Bold, TextAnchor.MiddleLeft, false, true);
            Ui.Text(new Rect(r.x + 16, r.y + 36, r.width - 32, 40), D.Blurb, 12, Palette.Text, FontStyle.Normal, TextAnchor.UpperLeft, true);
            Ui.Text(new Rect(r.x + 16, r.y + 80, r.width - 32, 20), $"Reward: {D.Reward} · Runs today: {Ui.ColorTag($"{runs}/{Trials.DungeonRuns}", Palette.Gold)} (a loss doesn't use a run)", 12, Palette.Dim, FontStyle.Normal, TextAnchor.UpperLeft, true);
            Ui.Text(new Rect(r.x + 16, r.y + 112, r.width - 32, 34), $"Today's foes lean {ElName(el)} — bring {string.Join(", ", counters)}.", 12, Palette.Dim, FontStyle.Normal, TextAnchor.UpperLeft, true);
            if (key == DungeonKey.Forge)
            {
                r = Row(ref y, 100);
                Ui.Card(r);
                Ui.Text(new Rect(r.x + 16, r.y + 8, r.width - 32, 20), "Gear set to forge", 12, Palette.Dim);
                var sets = (GearSet[])Enum.GetValues(typeof(GearSet));
                float sw = (r.width - 32 - 8 * 2) / 3;
                for (int i = 0; i < sets.Length; i++)
                {
                    var b = new Rect(r.x + 16 + (i % 3) * (sw + 8), r.y + 30 + (i / 3) * 34, sw, 30);
                    if (Ui.Button(b, $"{sets[i]} <size=10>{SetBonus(sets[i]).desc}</size>", G.ForgeSet == sets[i] ? Ui.Kind.ChipOn : Ui.Kind.Chip, 11)) { G.ForgeSet = sets[i]; Save(); }
                }
            }
            for (int f = 0; f < Trials.DungeonFloors; f++)
            {
                bool locked = f > best, done = f < best;
                var rw = Trials.DungeonRewards(key, f, !done);
                var fr = Row(ref y, 54, 8);
                Ui.Card(fr, !locked && !done && runs > 0);
                var col = GUI.color; if (locked) GUI.color = new Color(1, 1, 1, 0.45f);
                int rar = Trials.ForgeRarity(f);
                string what = (key == DungeonKey.Forge ? $"{Ui.ColorTag(GearRarityNames[rar], Palette.GearRarity(rar))} {G.ForgeSet} gear · " : "") + rw + (rw.Xp > 0 ? $" · {Ui.Fmt(rw.Xp)} XP" : "");
                Ui.Text(new Rect(fr.x + 14, fr.y + 6, fr.width - 70, 22), $"{(Trials.IsBossFloor(f) ? "Boss · " : "")}Floor {f + 1}  {Ui.ColorTag($"Lv {Game.StageLevel(Trials.DungeonIdx(f))}", Palette.Dim)}", 14, Palette.Text, FontStyle.Bold, TextAnchor.MiddleLeft, false, true);
                Ui.Text(new Rect(fr.x + 14, fr.y + 28, fr.width - 70, 20), what, 11, Palette.Dim);
                Ui.Text(new Rect(fr.xMax - 60, fr.y, 48, fr.height), locked ? "Locked" : done ? "Done" : runs > 0 ? "Fight" : "Tomorrow", 11, done ? Palette.Good : Palette.Gold, FontStyle.Bold, TextAnchor.MiddleRight);
                GUI.color = col;
                if (!locked && runs > 0 && Ui.Button(fr, "", Ui.Kind.Ghost)) Battle.Begin(BattleSpec.ForDungeon(key, f));
            }
            Scroller.End();
        }

        void DrawArenaPvp(Rect area)
        {
            var M = G.EnsureModes(); var A = M.arena; var tier = Trials.TierFor(A.points);
            int ti = Array.IndexOf(Trials.Tiers, tier);
            var next = ti + 1 < Trials.Tiers.Length ? Trials.Tiers[ti + 1] : null;
            var rivals = G.CurrentRivals();
            bool pending = !string.IsNullOrEmpty(A.pendingTier);
            _scroll = Scroller.Begin(area, _scroll, 330 + (pending ? 80 : 0) + rivals.Count * 150);
            float y = 8;
            if (Ui.Button(new Rect(Pad, y, 80, 32), "‹ Trials", Ui.Kind.Secondary, 13)) Go(ScreenId.Trials);
            Ui.Text(new Rect(Ui.W - 200, y, 184, 32), $"Power {Ui.Fmt(G.TeamPower)}", 13, Palette.Dim, FontStyle.Normal, TextAnchor.MiddleRight);
            y += 42;
            if (pending)
            {
                var pr = Row(ref y, 70);
                Ui.Card(pr, true);
                Ui.Text(new Rect(pr.x + 16, pr.y + 8, pr.width - 130, 22), "Weekly reward", 15, Palette.TrimHi, FontStyle.Bold, TextAnchor.MiddleLeft, false, true);
                Ui.Text(new Rect(pr.x + 16, pr.y + 30, pr.width - 130, 36), $"You finished last week in {A.pendingTier}: {Trials.TierNamed(A.pendingTier).Week}", 11, Palette.Dim, FontStyle.Normal, TextAnchor.UpperLeft, true);
                if (Ui.Button(new Rect(pr.xMax - 100, pr.y + 16, 86, 38), "Claim", Ui.Kind.Primary, 14)) { var rw = G.ClaimArenaWeekly(); Save(); if (rw != null) Toast("Weekly reward: " + rw); }
            }
            var r = Row(ref y, 140);
            Ui.Card(r);
            Ui.Heading(new Rect(r.x, r.y + 10, r.width, 34), tier.Name, 26, TextAnchor.MiddleCenter);
            Ui.Text(new Rect(r.x, r.y + 46, r.width, 22), $"{Ui.ColorTag(A.points.ToString(), Palette.Gold)} points" + (next != null ? $" · {next.Min - A.points} to {next.Name}" : ""), 14, Palette.Text, FontStyle.Normal, TextAnchor.MiddleCenter);
            Ui.Text(new Rect(r.x, r.y + 70, r.width, 20), $"This week {A.wins}W–{A.losses}L · Best {A.best} · Fights today {G.S.daily.arenaTries}/{Trials.ArenaTries}", 12, Palette.Dim, FontStyle.Normal, TextAnchor.MiddleCenter);
            Ui.Text(new Rect(r.x + 10, r.y + 94, r.width - 20, 40), $"Weekly reward at your rank: {tier.Week}", 12, Palette.Dim, FontStyle.Normal, TextAnchor.UpperCenter, true);
            var hr = Row(ref y, 34);
            Ui.Text(new Rect(hr.x, hr.y, 200, 34), "Choose a rival", 17, Palette.TrimHi, FontStyle.Bold, TextAnchor.MiddleLeft, false, true);
            if (Ui.Button(new Rect(hr.xMax - 120, hr.y, 120, 34), "New rivals", Ui.Kind.Secondary, 13)) { G.RefreshRivals(); Save(); }
            foreach (var rv in rivals)
            {
                var cr = Row(ref y, 138);
                Ui.Card(cr);
                Ui.Text(new Rect(cr.x + 16, cr.y + 8, cr.width - 130, 22), rv.Name, 16, Palette.Text, FontStyle.Bold, TextAnchor.MiddleLeft, false, true);
                Ui.Text(new Rect(cr.x + 16, cr.y + 30, cr.width - 130, 20), $"{rv.Label} · Lv {rv.Level} · Power ~{Ui.Fmt(rv.Power)}", 12, Palette.Dim);
                Ui.Text(new Rect(cr.xMax - 110, cr.y + 8, 96, 40), $"Win {Ui.ColorTag("+" + rv.Gain, Palette.Good)}\nLoss {Ui.ColorTag(Trials.ArenaLoss.ToString(), Palette.Bad)}", 12, Palette.Text, FontStyle.Normal, TextAnchor.UpperRight);
                Ui.Text(new Rect(cr.x + 16, cr.y + 54, cr.width - 32, 26), string.Join("  ·  ", rv.Ids.Select(id => $"{Ui.ColorTag(Hero(id).ShortName, Palette.Rarity(Hero(id).Rarity))}")), 13, Palette.Text);
                if (Ui.Button(new Rect(cr.x + 16, cr.y + 86, cr.width - 32, 42), "Fight", Ui.Kind.Primary, 15, G.S.daily.arenaTries > 0)) Battle.Begin(BattleSpec.ForArena(rv));
            }
            Ui.Text(Row(ref y, 36), "Rivals are matched to your current team. Points soften toward 1000 each Monday.", 12, Palette.Dim, FontStyle.Normal, TextAnchor.MiddleCenter, true);
            Scroller.End();
        }
    }
}
