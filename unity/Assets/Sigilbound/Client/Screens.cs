// Menu screens (immediate-mode GUI on the 390-point logical canvas).
using System.Linq;
using UnityEngine;
using Sigilbound.Core;
using static Sigilbound.Core.GameData;

namespace Sigilbound.Client
{
    public sealed partial class App
    {
        const float Pad = 16;
        static Rect Row(ref float y, float h, float gap = 10) { var r = new Rect(Pad, y, Ui.W - Pad * 2, h); y += h + gap; return r; }

        string HeroLine(HeroSave h)
        {
            var t = Hero(h.id);
            return $"{Ui.ColorTag(Ui.Stars(h.stars), Palette.Gold)}  {t.Name}  {Ui.ColorTag($"Lv {h.level}", Palette.Dim)}";
        }
        string Tag(HeroDef t) => $"{Ui.ColorTag(t.Rarity.ToString(), Palette.Rarity(t.Rarity))} · {Ui.ColorTag(t.Element.ToString(), Palette.Element(t.Element))} · {t.Role}";

        // ---------- intro ----------
        void DrawIntro(Rect area)
        {
            float y = area.y + 20;
            Ui.Text(new Rect(0, y, Ui.W, 44), "SIGILBOUND", 34, Palette.Gold, FontStyle.Bold, TextAnchor.MiddleCenter); y += 48;
            Ui.Text(new Rect(30, y, Ui.W - 60, 40), "The Sigil has shattered. Choose the first champion to answer your call.", 14, Palette.Dim, FontStyle.Normal, TextAnchor.MiddleCenter, true);
            y = area.yMax - 3 * 92 - 30;
            foreach (var id in Starters)
            {
                var t = Hero(id);
                var r = Row(ref y, 82);
                Ui.Panel(r, new Color(0.12f, 0.1f, 0.17f, 0.92f), Palette.Rarity(t.Rarity));
                Ui.Text(new Rect(r.x + 14, r.y + 8, r.width - 28, 24), t.Name, 18, Palette.Text, FontStyle.Bold);
                Ui.Text(new Rect(r.x + 14, r.y + 32, r.width - 28, 20), Tag(t), 13, Palette.Dim);
                Ui.Text(new Rect(r.x + 14, r.y + 52, r.width - 28, 20), string.Join(" · ", t.Skills.Select(s => s.Name)), 12, Palette.Text);
                if (Ui.Button(r, "", Ui.Kind.Ghost))
                {
                    G.StartWith(id); Save(); Go(ScreenId.Home);
                    Modal("Welcome!", 230, b =>
                    {
                        Ui.Text(new Rect(b.x, b.y, b.width, 90), $"{t.Name} answers your call, joined by Pell and Odo. Summon more heroes with your shards, then fight in the Campaign.", 15, Palette.Text, FontStyle.Normal, TextAnchor.UpperCenter, true);
                        if (Ui.Button(new Rect(b.x, b.yMax - 48, b.width, 46), "Let's go")) CloseModal();
                    });
                }
            }
        }

        // ---------- home ----------
        void DrawHome(Rect area)
        {
            float content = 640;
            _scroll = Scroller.Begin(area, _scroll, content);
            float y = 8;
            Ui.Text(new Rect(0, y, Ui.W, 40), "SIGILBOUND", 30, Palette.Gold, FontStyle.Bold, TextAnchor.MiddleCenter); y += 40;
            Ui.Text(new Rect(0, y, Ui.W, 20), $"Campaign {G.S.cleared}/{TotalStages} · {G.S.heroes.Count} heroes · {G.S.wins} wins", 13, Palette.Dim, FontStyle.Normal, TextAnchor.MiddleCenter); y += 30;
            y += 170; // space where the team stands in 3D

            var r = Row(ref y, 64);
            Ui.Panel(r, new Color(0.12f, 0.1f, 0.17f, 0.92f));
            bool login = G.LoginAvailable;
            Ui.Text(new Rect(r.x + 14, r.y + 8, 220, 24), $"Daily Login · Day {(G.S.loginDay - (login ? 0 : 1)) % 7 + 1}", 16, Palette.Text, FontStyle.Bold);
            Ui.Text(new Rect(r.x + 14, r.y + 32, 230, 22), login ? LoginRewards[G.S.loginDay % LoginRewards.Length].ToString() : "Come back tomorrow", 12, Palette.Dim);
            if (Ui.Button(new Rect(r.xMax - 100, r.y + 14, 86, 36), login ? "Claim" : "Claimed", Ui.Kind.Primary, 14, login))
            { var rw = G.ClaimLogin(); Save(); Toast("Login reward: " + rw); }

            float qh = 40 + DailyQuests.Length * 44;
            r = Row(ref y, qh);
            Ui.Panel(r, new Color(0.12f, 0.1f, 0.17f, 0.92f));
            Ui.Text(new Rect(r.x + 14, r.y + 8, 200, 24), "Daily Quests", 16, Palette.Text, FontStyle.Bold);
            float qy = r.y + 38;
            foreach (var q in DailyQuests)
            {
                int p = Mathf.Min(q.Goal, G.QuestProgress(q.Id)); bool claimed = G.QuestClaimed(q.Id), done = p >= q.Goal;
                Ui.Text(new Rect(r.x + 14, qy, 230, 18), q.Name, 13, Palette.Text);
                Ui.Bar(new Rect(r.x + 14, qy + 20, 220, 5), p / (float)q.Goal, Palette.Gold);
                Ui.Text(new Rect(r.x + 14, qy + 26, 240, 16), $"{p}/{q.Goal} · {q.Reward}", 11, Palette.Dim);
                if (Ui.Button(new Rect(r.xMax - 86, qy + 4, 72, 32), claimed ? "Done" : "Claim", Ui.Kind.Primary, 13, done && !claimed))
                { var rw = G.ClaimQuest(q.Id); if (rw != null) { Save(); Toast("Quest complete: " + rw); } }
                qy += 44;
            }
            int next = Mathf.Min(G.S.cleared, TotalStages - 1);
            r = Row(ref y, 52);
            if (Ui.Button(r, G.S.cleared < TotalStages ? $"Continue Campaign · {Game.StageLabel(next)}" : "Campaign complete! Replay stages", Ui.Kind.Primary, 17))
                OpenPrep(next, false, ScreenId.Home);
            r = Row(ref y, 40);
            if (Ui.Button(new Rect(r.x, r.y, r.width / 2 - 5, 40), "How to play", Ui.Kind.Chip, 13)) ShowHelp();
            if (Ui.Button(new Rect(r.x + r.width / 2 + 5, r.y, r.width / 2 - 5, 40), "Reset save", Ui.Kind.Chip, 13))
                Modal("Reset all progress?", 200, b =>
                {
                    Ui.Text(new Rect(b.x, b.y, b.width, 50), "This deletes your save on this device. It can't be undone.", 14, Palette.Dim, FontStyle.Normal, TextAnchor.UpperCenter, true);
                    if (Ui.Button(new Rect(b.x, b.yMax - 46, b.width / 2 - 5, 44), "Cancel", Ui.Kind.Secondary)) CloseModal();
                    if (Ui.Button(new Rect(b.x + b.width / 2 + 5, b.yMax - 46, b.width / 2 - 5, 44), "Reset", Ui.Kind.Red))
                    { G = new Game(new SaveData()); G.EnsureDaily(); Save(); ClearLineup(); CloseModal(); Go(ScreenId.Intro); }
                });
            Scroller.End();
        }

        void ShowHelp() => Modal("How to play", 420, b =>
            {
                Ui.Text(new Rect(b.x, b.y, b.width, 300),
                    "Battles: units act when their Turn Meter fills, so faster heroes act more often. On your hero's turn, pick a skill, then tap a highlighted target.\n\n" +
                    "Elements: Flame beats Gale, Gale beats Tide, Tide beats Flame. Light and Shadow beat each other.\n\n" +
                    "Grow: win battles for XP or train with gold. At max level, rank up by using heroes with the same star count.\n\n" +
                    "Titan: three tries a day. Everything is free.", 13, Palette.Text, FontStyle.Normal, TextAnchor.UpperLeft, true);
                if (Ui.Button(new Rect(b.x, b.yMax - 46, b.width, 44), "Got it")) CloseModal();
            });

        // ---------- campaign ----------
        void DrawCampaign(Rect area)
        {
            int open = _chapterOpen >= 0 ? _chapterOpen : Mathf.Min(Chapters.Length - 1, G.S.cleared / StagesPerChapter);
            float content = 50 + Chapters.Length * 70 + 70;
            _scroll = Scroller.Begin(area, _scroll, content);
            float y = 8;
            Ui.Text(new Rect(Pad, y, 300, 32), "Campaign", 22, Palette.Text, FontStyle.Bold); y += 40;
            for (int c = 0; c < Chapters.Length; c++)
            {
                int first = c * StagesPerChapter;
                bool locked = first > G.S.cleared;
                bool isOpen = open == c && !locked;
                var r = Row(ref y, isOpen ? 124 : 60);
                var sc = Palette.Scene(c);
                Ui.Panel(r, Color.Lerp(sc.top, Palette.Panel, 0.6f) * new Color(1, 1, 1, locked ? 0.5f : 0.95f), Palette.Line);
                int done = Mathf.Clamp(G.S.cleared - first, 0, StagesPerChapter);
                Ui.Text(new Rect(r.x + 14, r.y + 8, r.width - 60, 24), $"{c + 1}. {Chapters[c]}", 16, locked ? Palette.Dim : Palette.Text, FontStyle.Bold);
                Ui.Text(new Rect(r.x + 14, r.y + 32, r.width - 60, 20), $"{Game.ChapterElement(c)} · Lv {Game.StageLevel(first)}–{Game.StageLevel(first + 5)} · {done}/{StagesPerChapter}", 12, Palette.Dim);
                Ui.Text(new Rect(r.xMax - 64, r.y + 8, 54, 40), locked ? "Locked" : isOpen ? "–" : "+", 13, Palette.Dim);
                if (!locked && Ui.Button(new Rect(r.x, r.y, r.width, 60), "", Ui.Kind.Ghost)) _chapterOpen = isOpen ? 99 : c;
                if (isOpen)
                {
                    float sw = (r.width - 28 - 5 * 6) / 6f;
                    for (int s = 0; s < StagesPerChapter; s++)
                    {
                        int idx = first + s;
                        var b = new Rect(r.x + 14 + s * (sw + 6), r.y + 64, sw, 48);
                        var kind = idx < G.S.cleared ? Ui.Kind.Secondary : idx == G.S.cleared ? Ui.Kind.Primary : Ui.Kind.Chip;
                        if (Ui.Button(b, Game.IsBossStage(idx) ? "Boss" : Game.StageLabel(idx), kind, 13, idx <= G.S.cleared)) OpenPrep(idx, false, ScreenId.Campaign);
                    }
                }
            }
            Scroller.End();
        }

        // ---------- team prep ----------
        void OpenPrep(int stage, bool titan, ScreenId back) { _prepStage = stage; _prepTitan = titan; _prepBack = back; Go(ScreenId.Prep); }

        void DrawPrep(Rect area)
        {
            var heroes = SortedHeroes();
            float content = 230 + Mathf.Ceil(heroes.Count / 2f) * 58;
            _scroll = Scroller.Begin(area, _scroll, content);
            float y = 8;
            if (Ui.Button(new Rect(Pad, y, 80, 34), "‹ Back", Ui.Kind.Secondary, 13)) Go(_prepBack);
            Ui.Text(new Rect(Ui.W - 200, y, 184, 34), $"Power {Ui.Fmt(G.TeamPower)}", 13, Palette.Dim, FontStyle.Normal, TextAnchor.MiddleRight);
            y += 44;
            string title = _prepTitan ? "Titan Challenge" : $"Stage {Game.StageLabel(_prepStage)} · {Chapters[Game.ChapterOf(_prepStage)]}";
            string sub = _prepTitan ? $"{TitanElement(System.DateTime.Now)} Titan today · {G.S.daily.titanTries} tries left"
                : $"Enemy Lv {Game.StageLevel(_prepStage)} · {(Game.IsBossStage(_prepStage) ? "3 waves · Boss" : "2 waves")}";
            Ui.Text(new Rect(Pad, y, Ui.W - 32, 28), title, 19, Palette.Text, FontStyle.Bold); y += 28;
            Ui.Text(new Rect(Pad, y, Ui.W - 32, 20), sub, 13, Palette.Dim); y += 30;
            var team = G.Team;
            Ui.Text(new Rect(Pad, y, Ui.W - 32, 20), $"Team ({team.Count}/4): " + (team.Count == 0 ? "tap heroes below" : string.Join(", ", team.Select(h => Hero(h.id).ShortName))), 13, Palette.Text); y += 30;
            bool can = team.Count > 0 && (!_prepTitan || G.S.daily.titanTries > 0);
            if (Ui.Button(Row(ref y, 50), _prepTitan ? "Challenge the Titan" : "Battle!", Ui.Kind.Primary, 18, can))
                Battle.Begin(_prepTitan ? -1 : _prepStage);
            y += 4;
            float cw = (Ui.W - Pad * 2 - 8) / 2;
            for (int i = 0; i < heroes.Count; i++)
            {
                var h = heroes[i]; var t = Hero(h.id);
                var r = new Rect(Pad + (i % 2) * (cw + 8), y + (i / 2) * 58, cw, 50);
                bool inTeam = G.S.team.Contains(h.uid);
                Ui.Panel(r, inTeam ? Palette.Hex("#3a2f22") : Palette.Panel2, inTeam ? Palette.Gold : Palette.Rarity(t.Rarity), 10);
                Ui.Text(new Rect(r.x + 10, r.y + 4, r.width - 20, 22), t.ShortName + (inTeam ? $"  #{G.S.team.IndexOf(h.uid) + 1}" : ""), 14, Palette.Text, FontStyle.Bold);
                Ui.Text(new Rect(r.x + 10, r.y + 26, r.width - 20, 20), $"{Ui.ColorTag(Ui.Stars(h.stars), Palette.Gold)} Lv{h.level} · {Ui.ColorTag(t.Element.ToString(), Palette.Element(t.Element))}", 12, Palette.Dim);
                if (Ui.Button(r, "", Ui.Kind.Ghost))
                {
                    if (inTeam) G.S.team.Remove(h.uid);
                    else if (G.S.team.Count < 4) G.S.team.Add(h.uid);
                    else Toast("Team is full (4). Tap a team member to remove them.");
                    Save();
                }
            }
            Scroller.End();
        }

        // ---------- heroes ----------
        System.Collections.Generic.List<HeroSave> SortedHeroes()
        {
            var list = G.S.heroes.ToList();
            return _sort switch
            {
                "level" => list.OrderByDescending(h => h.stars).ThenByDescending(h => h.level).ToList(),
                "rarity" => list.OrderByDescending(h => Hero(h.id).Rarity).ThenByDescending(h => h.level).ToList(),
                _ => list.OrderByDescending(G.Power).ToList(),
            };
        }

        void DrawHeroes(Rect area)
        {
            var list = SortedHeroes();
            float content = 100 + list.Count * 62 + 40;
            _scroll = Scroller.Begin(area, _scroll, content);
            float y = 8;
            Ui.Text(new Rect(Pad, y, 300, 32), $"Heroes ({list.Count})", 22, Palette.Text, FontStyle.Bold); y += 40;
            string[] sorts = { "power", "level", "rarity" };
            for (int i = 0; i < sorts.Length; i++)
                if (Ui.Button(new Rect(Pad + i * 96, y, 88, 32), char.ToUpper(sorts[i][0]) + sorts[i].Substring(1), _sort == sorts[i] ? Ui.Kind.ChipOn : Ui.Kind.Chip, 13)) _sort = sorts[i];
            y += 44;
            foreach (var h in list)
            {
                var t = Hero(h.id);
                var r = Row(ref y, 54, 8);
                Ui.Panel(r, Palette.Panel, Palette.Rarity(t.Rarity), 12);
                GUI.DrawTexture(new Rect(r.x + 8, r.y + 10, 6, 34), Ui.RoundTex(Palette.Element(t.Element), null, 3));
                Ui.Text(new Rect(r.x + 22, r.y + 4, r.width - 120, 24), HeroLine(h), 14, Palette.Text, FontStyle.Bold);
                Ui.Text(new Rect(r.x + 22, r.y + 28, r.width - 120, 20), Tag(t), 12, Palette.Dim);
                int ti = G.S.team.IndexOf(h.uid);
                Ui.Text(new Rect(r.xMax - 100, r.y, 90, 54), $"{(ti >= 0 ? Ui.ColorTag($"Team {ti + 1}  ", Palette.Gold) : "")}{Ui.Fmt(G.Power(h))}", 13, Palette.Text, FontStyle.Bold, TextAnchor.MiddleRight);
                if (Ui.Button(r, "", Ui.Kind.Ghost)) { _heroUid = h.uid; Go(ScreenId.Hero); }
            }
            Scroller.End();
        }

        void DrawHero(Rect area)
        {
            var h = G.HeroByUid(_heroUid);
            if (h == null) { Go(ScreenId.Heroes); return; }
            var t = Hero(h.id); var st = G.HeroStats(h); int cap = MaxLevelFor(h.stars); bool atCap = h.level >= cap;
            float content = 300 + 150 + 120 + 130 + t.Skills.Length * 62 + 60;
            _scroll = Scroller.Begin(area, _scroll, content);
            float y = 8;
            if (Ui.Button(new Rect(Pad, y, 90, 34), "‹ Heroes", Ui.Kind.Secondary, 13)) Go(ScreenId.Heroes);
            if (Ui.Button(new Rect(Ui.W - Pad - 190, y, 90, 34), h.locked ? "Locked" : "Lock", Ui.Kind.Secondary, 13)) { h.locked = !h.locked; Save(); }
            if (Ui.Button(new Rect(Ui.W - Pad - 92, y, 92, 34), "Release", Ui.Kind.Secondary, 13)) AskRelease(h);
            y += 44;
            Ui.Text(new Rect(Pad, y, Ui.W - 32, 28), t.Name, 20, Palette.Text, FontStyle.Bold); y += 26;
            Ui.Text(new Rect(Pad, y, Ui.W - 32, 20), $"{Ui.ColorTag(Ui.Stars(h.stars), Palette.Gold)}{Ui.ColorTag(new string('☆', MaxStars - h.stars), Palette.Dim)}   {Tag(t)}   Power {Ui.ColorTag(Ui.Fmt(st.Power), Palette.Gold)}", 13, Palette.Text);
            y += 230; // the hero stands here in 3D

            var r = Row(ref y, atCap ? 110 : 96);
            Ui.Panel(r, new Color(0.12f, 0.1f, 0.17f, 0.94f));
            Ui.Text(new Rect(r.x + 14, r.y + 8, 200, 22), $"Level {h.level} / {cap}", 15, Palette.Text, FontStyle.Bold);
            Ui.Text(new Rect(r.xMax - 160, r.y + 8, 146, 22), atCap ? "MAX" : $"{h.xp} / {XpToNext(h.level)} XP", 12, Palette.Dim, FontStyle.Normal, TextAnchor.MiddleRight);
            Ui.Bar(new Rect(r.x + 14, r.y + 34, r.width - 28, 6), atCap ? 1 : h.xp / (float)XpToNext(h.level), Palette.Gold);
            if (atCap)
            {
                Ui.Text(new Rect(r.x + 14, r.y + 44, r.width - 28, 20), h.stars >= MaxStars ? "Fully ascended!" : $"Rank up: {h.stars} other {h.stars}★ heroes ({G.RankUpFodder(h).Count} available) + {Ui.Fmt(RankUpGold(h.stars))} gold", 12, Palette.Dim, FontStyle.Normal, TextAnchor.MiddleLeft, true);
                if (Ui.Button(new Rect(r.x + 14, r.y + 66, r.width - 28, 36), $"Rank Up to {h.stars + 1}★", Ui.Kind.Primary, 14, G.CanRankUp(h))) AskRankUp(h);
            }
            else
            {
                int lvlCost = Mathf.CeilToInt((XpToNext(h.level) - h.xp) / (float)TrainXpPerGold), maxCost = Mathf.CeilToInt(G.XpToCap(h) / (float)TrainXpPerGold);
                if (Ui.Button(new Rect(r.x + 14, r.y + 50, r.width / 2 - 19, 36), $"Train +1 · {Ui.Fmt(lvlCost)}", Ui.Kind.Secondary, 13, G.S.gold >= lvlCost)) { G.Train(h, false); Save(); }
                if (Ui.Button(new Rect(r.x + r.width / 2 + 5, r.y + 50, r.width / 2 - 19, 36), $"Train to {cap} · {Ui.Fmt(maxCost)}", Ui.Kind.Secondary, 13, G.S.gold >= maxCost)) { G.Train(h, true); Save(); }
            }

            r = Row(ref y, 110);
            Ui.Panel(r, new Color(0.12f, 0.1f, 0.17f, 0.94f));
            string[] stats = { $"HP  {Ui.Fmt(st.Hp)}", $"ATK  {st.Atk}", $"DEF  {st.Def}", $"SPD  {st.Spd}", $"Crit  {st.Crit}%", $"Crit DMG  {st.Cdmg}%" };
            for (int i = 0; i < stats.Length; i++) Ui.Text(new Rect(r.x + 14 + (i % 2) * (r.width / 2), r.y + 10 + (i / 2) * 26, r.width / 2 - 20, 24), stats[i], 14, Palette.Text);
            Ui.Text(new Rect(r.x + 14, r.y + 86, r.width - 28, 18), st.Sets.Count > 0 ? "Sets: " + string.Join(", ", st.Sets.Select(s => $"{s} ({SetBonus(s).desc})")) : "Equip 2 pieces of a set for a bonus.", 11, Palette.Dim);

            r = Row(ref y, 116);
            Ui.Panel(r, new Color(0.12f, 0.1f, 0.17f, 0.94f));
            Ui.Text(new Rect(r.x + 14, r.y + 8, 100, 24), "Gear", 15, Palette.Text, FontStyle.Bold);
            if (Ui.Button(new Rect(r.xMax - 114, r.y + 6, 100, 30), "Auto-equip", Ui.Kind.Secondary, 12)) { G.AutoEquip(h); Save(); Toast("Best available gear equipped"); }
            float gw = (r.width - 28 - 18) / 4;
            int si = 0;
            foreach (Slot slot in System.Enum.GetValues(typeof(Slot)))
            {
                var g = G.GearByUid(h.GetGear(slot));
                var b = new Rect(r.x + 14 + si * (gw + 6), r.y + 42, gw, 64);
                string label = g == null ? $"{slot}\n{Ui.ColorTag("empty", Palette.Dim)}" : $"{slot} +{g.level}\n{Ui.ColorTag(g.Set.ToString(), Palette.GearRarity(g.rarity))}";
                if (Ui.Button(b, label, Ui.Kind.Secondary, 12)) { _slot = slot; Go(ScreenId.Equip); }
                si++;
            }

            r = Row(ref y, 30 + t.Skills.Length * 62);
            Ui.Panel(r, new Color(0.12f, 0.1f, 0.17f, 0.94f));
            Ui.Text(new Rect(r.x + 14, r.y + 6, 100, 24), "Skills", 15, Palette.Text, FontStyle.Bold);
            for (int i = 0; i < t.Skills.Length; i++)
            {
                var s = t.Skills[i];
                Ui.Text(new Rect(r.x + 14, r.y + 32 + i * 62, r.width - 28, 20), $"A{i + 1} · {s.Name}   {Ui.ColorTag(s.Cooldown > 0 ? $"cooldown {s.Cooldown}" : "basic", Palette.Dim)}", 13, Palette.Text, FontStyle.Bold);
                Ui.Text(new Rect(r.x + 14, r.y + 52 + i * 62, r.width - 28, 38), SkillText.Describe(s), 12, Palette.Dim, FontStyle.Normal, TextAnchor.UpperLeft, true);
            }
            Scroller.End();
        }

        void AskRelease(HeroSave h)
        {
            if (h.locked) { Toast("Unlock this hero first."); return; }
            if (G.S.heroes.Count <= 1) { Toast("You can't release your last hero."); return; }
            int ess = EssenceValue(Hero(h.id).Rarity) * h.stars;
            Modal($"Release {Hero(h.id).ShortName}?", 210, b =>
            {
                Ui.Text(new Rect(b.x, b.y, b.width, 60), $"They leave your roster for good. Their gear returns to your bag. You get {ess} essence.", 14, Palette.Dim, FontStyle.Normal, TextAnchor.UpperCenter, true);
                if (Ui.Button(new Rect(b.x, b.yMax - 46, b.width / 2 - 5, 44), "Cancel", Ui.Kind.Secondary)) CloseModal();
                if (Ui.Button(new Rect(b.x + b.width / 2 + 5, b.yMax - 46, b.width / 2 - 5, 44), "Release", Ui.Kind.Red))
                {
                    foreach (Slot s in System.Enum.GetValues(typeof(Slot))) h.SetGear(s, 0);
                    G.Release(h); Save(); CloseModal(); Toast($"+{ess} essence"); Go(ScreenId.Heroes);
                }
            });
        }

        void AskRankUp(HeroSave h)
        {
            var fodder = G.SuggestFodder(h);
            Modal($"Rank up to {h.stars + 1}★?", 260, b =>
            {
                Ui.Text(new Rect(b.x, b.y, b.width, 90), "These heroes will be used up (locked heroes and team members never are):\n" + string.Join(", ", fodder.Select(f => $"{Hero(f.id).ShortName} Lv{f.level}")) + $"\n\nCost: {Ui.Fmt(RankUpGold(h.stars))} gold. Stats +15%, level cap {MaxLevelFor(h.stars + 1)}.", 13, Palette.Text, FontStyle.Normal, TextAnchor.UpperLeft, true);
                if (Ui.Button(new Rect(b.x, b.yMax - 46, b.width / 2 - 5, 44), "Cancel", Ui.Kind.Secondary)) CloseModal();
                if (Ui.Button(new Rect(b.x + b.width / 2 + 5, b.yMax - 46, b.width / 2 - 5, 44), "Rank Up"))
                {
                    if (G.RankUp(h, fodder)) { Save(); Toast($"{Hero(h.id).ShortName} is now {h.stars}★!"); Vfx.I.Burst(new Vector3(0, 1.5f, 0.4f), Palette.Gold, true); }
                    CloseModal();
                }
            });
        }

        void DrawEquip(Rect area)
        {
            var h = G.HeroByUid(_heroUid);
            if (h == null) { Go(ScreenId.Heroes); return; }
            var list = G.S.gear.Where(g => g.Slot == _slot).OrderByDescending(Game.GearScore).ToList();
            float content = 80 + list.Count * 92 + 40;
            _scroll = Scroller.Begin(area, _scroll, content);
            float y = 8;
            if (Ui.Button(new Rect(Pad, y, 110, 34), $"‹ {Hero(h.id).ShortName}", Ui.Kind.Secondary, 13)) Go(ScreenId.Hero);
            if (h.GetGear(_slot) != 0 && Ui.Button(new Rect(Ui.W - Pad - 100, y, 100, 34), "Unequip", Ui.Kind.Secondary, 13)) { h.SetGear(_slot, 0); Save(); Go(ScreenId.Hero); }
            y += 44;
            Ui.Text(new Rect(Pad, y, 300, 28), _slot.ToString(), 20, Palette.Text, FontStyle.Bold); y += 36;
            if (list.Count == 0) Ui.Text(Row(ref y, 40), "Nothing for this slot yet. Clear campaign stages to find gear.", 13, Palette.Dim, FontStyle.Normal, TextAnchor.MiddleLeft, true);
            foreach (var g in list)
            {
                var r = Row(ref y, 84, 8);
                var owner = G.GearOwner(g);
                Ui.Panel(r, Palette.Panel2, Palette.GearRarity(g.rarity), 12);
                Ui.Text(new Rect(r.x + 12, r.y + 6, r.width - 130, 20), $"{Ui.ColorTag(GearRarityNames[g.rarity], Palette.GearRarity(g.rarity))} {g.Set} {g.Slot} +{g.level}", 14, Palette.Text, FontStyle.Bold);
                Ui.Text(new Rect(r.x + 12, r.y + 26, r.width - 130, 18), $"{SlotMainStat(g.Slot).ToString().ToUpper()} +{Game.GearMainValue(g)}", 13, Palette.Text);
                Ui.Text(new Rect(r.x + 12, r.y + 44, r.width - 130, 36), string.Join(" · ", g.subs.Select(s => SkillText.StatName((Stat)s.stat, s.val))) + (owner != null ? $"\nOn {Hero(owner.id).ShortName}" : ""), 11, Palette.Dim, FontStyle.Normal, TextAnchor.UpperLeft, true);
                int cost = Game.GearUpgradeCost(g);
                if (g.level < GearMaxLevel && Ui.Button(new Rect(r.xMax - 110, r.y + 8, 100, 32), $"Up · {Ui.Fmt(cost)}", Ui.Kind.Secondary, 12, G.S.gold >= cost)) { if (G.UpgradeGear(g)) { Save(); Toast($"Upgraded to +{g.level}"); } }
                if (owner != h && Ui.Button(new Rect(r.xMax - 110, r.y + 44, 100, 32), "Equip", Ui.Kind.Primary, 13)) { G.Equip(h, g); Save(); Go(ScreenId.Hero); }
                else if (owner == h) Ui.Text(new Rect(r.xMax - 110, r.y + 44, 100, 32), "Equipped", 12, Palette.Good, FontStyle.Bold, TextAnchor.MiddleCenter);
            }
            Scroller.End();
        }

        // ---------- summon ----------
        void DrawSummon(Rect area)
        {
            float content = 60 + 3 * 160 + 130;
            _scroll = Scroller.Begin(area, _scroll, content);
            float y = 8;
            Ui.Text(new Rect(Pad, y, 300, 32), "Summon", 22, Palette.Text, FontStyle.Bold); y += 34;
            Ui.Text(Row(ref y, 34), "Shards drop from the campaign, quests, the Titan and daily logins.", 12, Palette.Dim, FontStyle.Normal, TextAnchor.UpperLeft, true);
            foreach (Shard s in System.Enum.GetValues(typeof(Shard)))
            {
                var r = Row(ref y, 148);
                var rates = ShardRates(s);
                Color c = s == Shard.Common ? Palette.Hex("#c9a37b") : s == Shard.Mystic ? Palette.Blue : Palette.Hex("#ffb02e");
                Ui.Panel(r, new Color(0.12f, 0.1f, 0.17f, 0.94f), c);
                string name = s == Shard.Common ? "Worn Shard" : s == Shard.Mystic ? "Mystic Shard" : "Radiant Shard";
                Ui.Text(new Rect(r.x + 14, r.y + 8, r.width - 28, 24), $"{name}  {Ui.ColorTag($"owned {G.ShardCount(s)}", Palette.Dim)}", 16, c, FontStyle.Bold);
                string rateText = string.Join(" · ", Enumerable.Range(0, 4).Where(i => rates[i] > 0).Select(i => Ui.ColorTag($"{(Rarity)i} {rates[i]}%", Palette.Rarity((Rarity)i))));
                Ui.Text(new Rect(r.x + 14, r.y + 34, r.width - 28, 20), rateText, 12, Palette.Text);
                if (ShardPity(s) > 0) Ui.Text(new Rect(r.x + 14, r.y + 54, r.width - 28, 20), $"Guaranteed Legendary in {G.PityLeft(s)} summons", 12, Palette.Gold);
                if (Ui.Button(new Rect(r.x + 14, r.y + 88, r.width / 2 - 19, 46), "Summon ×1", Ui.Kind.Primary, 15, G.ShardCount(s) >= 1)) DoSummon(s, 1);
                if (Ui.Button(new Rect(r.x + r.width / 2 + 5, r.y + 88, r.width / 2 - 19, 46), "Summon ×10", Ui.Kind.Blue, 15, G.ShardCount(s) >= 10)) DoSummon(s, 10);
            }
            var e = Row(ref y, 110);
            Ui.Panel(e, new Color(0.12f, 0.1f, 0.17f, 0.94f));
            Ui.Text(new Rect(e.x + 14, e.y + 8, e.width - 28, 22), $"Essence Exchange  {Ui.ColorTag($"you have {G.S.essence}", Palette.Dim)}", 15, Palette.Text, FontStyle.Bold);
            int k = 0;
            foreach (Shard s in System.Enum.GetValues(typeof(Shard)))
            {
                int cost = ExchangeCost(s);
                if (Ui.Button(new Rect(e.x + 14 + k * ((e.width - 40) / 3 + 6), e.y + 42, (e.width - 40) / 3, 54), $"{s}\n{cost} essence", Ui.Kind.Secondary, 12, G.S.essence >= cost))
                { if (G.Exchange(s)) { Save(); Toast($"+1 {s} shard"); } }
                k++;
            }
            Scroller.End();
        }

        void DoSummon(Shard s, int n)
        {
            var res = G.Summon(s, n);
            if (res.Count == 0) { Toast("Not enough shards."); return; }
            Save();
            var best = res.Max(h => Hero(h.id).Rarity);
            Vfx.I.Burst(new Vector3(0, 1.2f, 0.6f), Palette.Rarity(best), true);
            if (best >= Rarity.Epic) Vfx.I.Shake(0.15f);
            Modal(best == Rarity.Legendary ? "LEGENDARY!" : "Summoned!", 120 + res.Count * 26 + 60, b =>
            {
                for (int i = 0; i < res.Count; i++)
                {
                    var t = Hero(res[i].id);
                    Ui.Text(new Rect(b.x, b.y + i * 26, b.width, 24), $"{Ui.ColorTag(Ui.Stars(res[i].stars), Palette.Gold)}  {Ui.ColorTag(t.Name, Palette.Rarity(t.Rarity))}  {Ui.ColorTag(t.Element.ToString(), Palette.Element(t.Element))}", 14, Palette.Text, FontStyle.Bold, TextAnchor.MiddleCenter);
                }
                bool again = G.ShardCount(s) >= n;
                if (Ui.Button(new Rect(b.x, b.yMax - 46, again ? b.width / 2 - 5 : b.width, 44), "OK", Ui.Kind.Secondary)) CloseModal();
                if (again && Ui.Button(new Rect(b.x + b.width / 2 + 5, b.yMax - 46, b.width / 2 - 5, 44), $"Again ×{n}")) DoSummon(s, n);
            });
        }

        // ---------- titan ----------
        void DrawTitan(Rect area)
        {
            float content = 560;
            _scroll = Scroller.Begin(area, _scroll, content);
            float y = 8;
            var el = TitanElement(System.DateTime.Now);
            Ui.Text(new Rect(Pad, y, Ui.W - 32, 30), Titan.Name, 21, Palette.Text, FontStyle.Bold); y += 34;
            var r = Row(ref y, 168);
            Ui.Panel(r, new Color(0.12f, 0.1f, 0.17f, 0.94f), Palette.Element(el));
            var strong = Elements.Where(x => Strong(x) == el).ToList();
            Ui.Text(new Rect(r.x + 14, r.y + 10, r.width - 28, 22), $"Today's element: {Ui.ColorTag(el.ToString(), Palette.Element(el))}", 15, Palette.Text, FontStyle.Bold);
            Ui.Text(new Rect(r.x + 14, r.y + 34, r.width - 28, 60), $"Bring {string.Join(" or ", strong)} heroes. The Titan can't be killed: deal as much damage as you can in {TitanTurns} of its turns. It's immune to stun and turn meter drain.", 12, Palette.Dim, FontStyle.Normal, TextAnchor.UpperLeft, true);
            Ui.Text(new Rect(r.x + 14, r.y + 94, r.width - 28, 22), $"Tries left today: {Ui.ColorTag($"{G.S.daily.titanTries}/3", Palette.Gold)} · Best today: {Ui.Fmt(G.S.daily.titanBest)}", 13, Palette.Text);
            if (Ui.Button(new Rect(r.x + 14, r.y + 120, r.width - 28, 40), "Prepare Team", Ui.Kind.Primary, 15, G.S.daily.titanTries > 0)) OpenPrep(-1, true, ScreenId.Titan);
            r = Row(ref y, 40 + TitanTiers.Length * 30);
            Ui.Panel(r, new Color(0.12f, 0.1f, 0.17f, 0.94f));
            Ui.Text(new Rect(r.x + 14, r.y + 8, r.width - 28, 22), "Damage rewards (per try)", 15, Palette.Text, FontStyle.Bold);
            for (int i = 0; i < TitanTiers.Length; i++)
            {
                var t = TitanTiers[i];
                bool got = G.S.daily.titanBest > 0 && G.S.daily.titanBest >= t.Dmg;
                Ui.Text(new Rect(r.x + 14, r.y + 36 + i * 30, 120, 26), (got ? "✓ " : "") + (i == 0 ? "Any damage" : Ui.Fmt(t.Dmg) + "+"), 13, got ? Palette.Good : Palette.Text);
                Ui.Text(new Rect(r.x + 130, r.y + 36 + i * 30, r.width - 144, 26), t.Reward.ToString(), 11, Palette.Dim, FontStyle.Normal, TextAnchor.MiddleRight);
            }
            Ui.Text(Row(ref y, 24), $"All-time best: {Ui.Fmt(G.S.titanBestAllTime)}", 12, Palette.Dim);
            Scroller.End();
        }
    }
}
