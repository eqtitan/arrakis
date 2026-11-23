// Screens for the web's extras.js / v0.21 features: Hard campaign map, Achievements, Hero Codex,
// skill upgrades with Skill Tomes, team presets and gear lock.
using System.Linq;
using UnityEngine;
using Sigilbound.Core;
using static Sigilbound.Core.GameData;

namespace Sigilbound.Client
{
    public sealed partial class App
    {
        bool _hardTab, _prepHard, _codex;

        // ---------- campaign: Normal / Hard switch ----------
        // Returns the y below the switch.
        float CampaignTabs(float y)
        {
            if (Ui.Button(new Rect(Pad, y, 90, 32), "Normal", _hardTab ? Ui.Kind.Chip : Ui.Kind.ChipOn, 13)) { _hardTab = false; _chapterOpen = -1; }
            if (Ui.Button(new Rect(Pad + 96, y, 90, 32), "Hard", _hardTab ? Ui.Kind.ChipOn : Ui.Kind.Chip, 13, G.S.cleared > 0)) { _hardTab = true; _chapterOpen = -1; }
            if (_hardTab) Ui.Text(new Rect(Ui.W - 160, y, 144, 32), $"Hard {G.S.hardCleared}/{G.S.cleared}", 12, Palette.Dim, FontStyle.Normal, TextAnchor.MiddleRight);
            return y + 42;
        }

        void DrawHardCampaign(Rect area)
        {
            int hc = G.S.hardCleared;
            int open = _chapterOpen >= 0 ? _chapterOpen : Mathf.Min(Chapters.Length - 1, hc / StagesPerChapter);
            float content = 140 + Chapters.Length * 70 + 70;
            _scroll = Scroller.Begin(area, _scroll, content);
            float y = CampaignTabs(8);
            Ui.Heading(new Rect(Pad, y, 300, 32), "Hard Campaign"); y += 36;
            Ui.Text(new Rect(Pad, y, Ui.W - Pad * 2, 48), "Replay stages you've cleared on Normal. Enemies are about 60% stronger and 10 levels higher, but pay double gold, extra XP and better gear.", 12, Palette.Dim, FontStyle.Normal, TextAnchor.UpperLeft, true);
            y += 54;
            for (int c = 0; c < Chapters.Length; c++)
            {
                int first = c * StagesPerChapter;
                bool locked = first >= G.S.cleared || first > hc;
                bool isOpen = open == c && !locked;
                var r = Row(ref y, isOpen ? 124 : 60);
                Ui.Panel(r, Color.Lerp(Palette.Hex("#1a0a0a"), Palette.Panel, 0.4f) * new Color(1, 1, 1, locked ? 0.5f : 0.95f), Palette.Hex("#7a2a2a"));
                int done = Mathf.Clamp(hc - first, 0, StagesPerChapter);
                Ui.Text(new Rect(r.x + 14, r.y + 8, r.width - 60, 24), $"Hard {c + 1}. {Chapters[c]}", 16, locked ? Palette.Dim : Palette.Text, FontStyle.Bold);
                Ui.Text(new Rect(r.x + 14, r.y + 32, r.width - 60, 20), $"Lv {Game.StageLevel(first) + Game.HardLvl}–{Game.StageLevel(first + 5) + Game.HardLvl} · {done}/{StagesPerChapter}", 12, Palette.Dim);
                Ui.Text(new Rect(r.xMax - 64, r.y + 8, 54, 40), locked ? "Locked" : isOpen ? "–" : "+", 13, Palette.Dim);
                if (!locked && Ui.Button(new Rect(r.x, r.y, r.width, 60), "", Ui.Kind.Ghost)) _chapterOpen = isOpen ? 99 : c;
                if (!isOpen) continue;
                float sw = (r.width - 28 - 5 * 6) / 6f;
                for (int s = 0; s < StagesPerChapter; s++)
                {
                    int idx = first + s;
                    var b = new Rect(r.x + 14 + s * (sw + 6), r.y + 64, sw, 48);
                    bool can = G.HardOpen(idx);
                    var kind = idx < hc ? Ui.Kind.Secondary : can ? Ui.Kind.Red : Ui.Kind.Chip;
                    if (Ui.Button(b, Game.IsBossStage(idx) ? "Boss" : Game.StageLabel(idx), kind, 13, can)) OpenPrep(idx, false, ScreenId.Campaign, true);
                }
            }
            Scroller.End();
        }

        // ---------- prep: presets, best team, auto-equip team ----------
        float DrawPresets(float y)
        {
            var r = Row(ref y, 196);
            Ui.Card(r);
            Ui.Text(new Rect(r.x + 14, r.y + 8, 160, 24), "Team presets", 14, Palette.Text, FontStyle.Bold);
            if (Ui.Button(new Rect(r.xMax - 124, r.y + 6, 110, 30), "Best team", Ui.Kind.Secondary, 12)) { G.TeamBest(); Save(); Toast("Strongest 4 heroes selected"); }
            for (int i = 0; i < Game.TeamPresets; i++)
            {
                float ry = r.y + 42 + i * 40;
                var heroes = G.PresetHeroes(i);
                Ui.Text(new Rect(r.x + 14, ry, 60, 32), $"Team {i + 1}", 12, Palette.Text, FontStyle.Bold);
                Ui.Text(new Rect(r.x + 74, ry, r.width - 74 - 150, 32), heroes.Count == 0 ? "empty" : string.Join(", ", heroes.Select(h => Hero(h.id).ShortName)), 11, Palette.Dim, FontStyle.Normal, TextAnchor.MiddleLeft);
                int k = i;
                if (Ui.Button(new Rect(r.xMax - 146, ry, 64, 32), "Load", Ui.Kind.Secondary, 12)) { if (G.TeamLoad(k)) { Save(); Toast($"Team {k + 1} loaded"); } else Toast("That preset is empty. Build a team, then tap Save."); }
                if (Ui.Button(new Rect(r.xMax - 78, ry, 64, 32), "Save", Ui.Kind.Secondary, 12)) { G.TeamSave(k); Save(); Toast($"Saved as team {k + 1}"); }
            }
            if (Ui.Button(new Rect(r.x + 14, r.yMax - 38, r.width - 28, 30), "Auto-equip whole team", Ui.Kind.Secondary, 12)) { G.AutoEquipTeam(); Save(); Toast("Best gear equipped on your team"); }
            return y;
        }

        // ---------- hero: skills with Skill Tome upgrades ----------
        float DrawSkills(HeroSave h, HeroDef t, float y)
        {
            var r = Row(ref y, 52 + t.Skills.Length * 100);
            Ui.Card(r);
            Ui.Text(new Rect(r.x + 14, r.y + 6, 100, 24), "Skills", 15, Palette.Text, FontStyle.Bold);
            Ui.Text(new Rect(r.xMax - 174, r.y + 6, 160, 24), $"{G.S.tomes} Skill Tome{(G.S.tomes == 1 ? "" : "s")}", 12, Palette.Gold, FontStyle.Bold, TextAnchor.MiddleRight);
            for (int i = 0; i < t.Skills.Length; i++)
            {
                var s = t.Skills[i]; int lv = h.SkillLv(i), cd = Core.Battle.SkillCooldown(s, lv);
                float sy = r.y + 32 + i * 100;
                Ui.Text(new Rect(r.x + 14, sy, r.width - 28, 20), $"A{i + 1} · {s.Name}  {Ui.ColorTag($"Lv {lv + 1}/5", Palette.Gold)}   {Ui.ColorTag(s.Cooldown > 0 ? $"cooldown {cd}" : "basic", Palette.Dim)}", 13, Palette.Text, FontStyle.Bold);
                string bonus = lv > 0 ? Ui.ColorTag($"  +{Mathf.Min(lv, 3) * 8}% power{(lv >= 4 && s.Cooldown > 1 ? ", −1 cooldown" : "")}", Palette.Good) : "";
                Ui.Text(new Rect(r.x + 14, sy + 20, r.width - 28, 40), SkillText.Describe(s) + bonus, 12, Palette.Dim, FontStyle.Normal, TextAnchor.UpperLeft, true);
                if (lv < Game.SkillMaxLv)
                {
                    int cost = Game.SkillUpCost(lv); int k = i;
                    string next = lv + 1 < 4 ? "+8% power" : s.Cooldown > 1 ? "−1 cooldown" : "mastery";
                    if (Ui.Button(new Rect(r.x + 14, sy + 62, r.width - 28, 30), $"Upgrade ({cost} tome{(cost > 1 ? "s" : "")}) → {next}", Ui.Kind.Secondary, 12, G.CanSkillUp(h, i)))
                    { if (G.SkillUp(h, k)) { Save(); Sound.I?.Play("buff"); Toast($"{s.Name} → Lv {lv + 2}"); } }
                }
                else Ui.Text(new Rect(r.x + 14, sy + 62, r.width - 28, 30), "Mastered", 12, Palette.Gold, FontStyle.Bold);
            }
            Ui.Text(new Rect(r.x + 14, r.yMax - 22, r.width - 28, 18), "Skill Tomes: Hard bosses, dungeon floors 5 and 10, achievements, weekly Arena.", 10, Palette.Dim);
            return y;
        }

        // ---------- achievements ----------
        void DrawAchievements(Rect area)
        {
            var list = Game.Achievements;
            float content = 100 + list.Length * 64 + 20;
            _scroll = Scroller.Begin(area, _scroll, content);
            float y = 8;
            if (Ui.Button(new Rect(Pad, y, 90, 34), "‹ Home", Ui.Kind.Secondary, 13)) Go(ScreenId.Home);
            Ui.Text(new Rect(Ui.W - 200, y, 184, 34), $"{list.Count(G.AchClaimed)}/{list.Length} claimed", 12, Palette.Dim, FontStyle.Normal, TextAnchor.MiddleRight);
            y += 44;
            Ui.Heading(new Rect(Pad, y, 300, 32), "Achievements"); y += 40;
            foreach (var a in list)
            {
                var r = Row(ref y, 58, 6);
                Ui.Panel(r, Palette.Panel, G.AchClaimed(a) ? Palette.Gold : Palette.Line, 10);
                long v = G.AchProgress(a); bool claimed = G.AchClaimed(a), ready = G.AchReady(a);
                Ui.Text(new Rect(r.x + 12, r.y + 4, r.width - 110, 18), $"<b>{a.Name}</b> · {Ui.ColorTag(a.Desc, Palette.Dim)}", 12, Palette.Text);
                Ui.Bar(new Rect(r.x + 12, r.y + 25, r.width - 112, 5), v / (float)a.Goal, Palette.Gold);
                string prog = a.Goal >= 10000 ? $"{Ui.Fmt(v)}/{Ui.Fmt(a.Goal)}" : $"{v}/{a.Goal}";
                Ui.Text(new Rect(r.x + 12, r.y + 33, r.width - 110, 18), $"{prog} · {a.Reward}", 11, Palette.Dim);
                if (Ui.Button(new Rect(r.xMax - 86, r.y + 12, 74, 34), claimed ? "Done" : "Claim", Ui.Kind.Primary, 13, ready))
                {
                    var rw = G.ClaimAch(a.Id);
                    if (rw != null) { Save(); Sound.I?.Play("coin"); Toast($"{a.Name}: {rw}"); }
                }
            }
            Scroller.End();
        }

        // Home card (with a ready count), under Daily Quests.
        float AchievementsCard(float y)
        {
            var r = Row(ref y, 58);
            Ui.Card(r);
            int n = G.AchReadyCount;
            Ui.Text(new Rect(r.x + 14, r.y + 6, 220, 24), "Achievements", 16, Palette.TrimHi, FontStyle.Bold, TextAnchor.MiddleLeft, false, true);
            Ui.Text(new Rect(r.x + 14, r.y + 30, r.width - 120, 20), $"{Game.Achievements.Count(G.AchClaimed)}/{Game.Achievements.Length} claimed · rewards for milestones", 11, Palette.Dim);
            if (n > 0) { var b = new Rect(r.xMax - 96, r.y + 15, 82, 28); GUI.DrawTexture(b, Ui.RoundTex(Palette.Gold, null, 12)); Ui.Text(b, $"{n} ready", 12, Palette.Hex("#1a1208"), FontStyle.Bold, TextAnchor.MiddleCenter); }
            else Ui.Text(new Rect(r.xMax - 40, r.y, 30, r.height), "›", 18, Palette.Dim, FontStyle.Bold, TextAnchor.MiddleCenter);
            if (Ui.Button(r, "", Ui.Kind.Ghost)) Go(ScreenId.Achievements);
            return y;
        }

        // ---------- hero codex ----------
        void DrawCodex(Rect area)
        {
            var owned = new System.Collections.Generic.HashSet<string>(G.S.heroes.Select(h => h.id));
            var groups = System.Enum.GetValues(typeof(Rarity)).Cast<Rarity>().Reverse().Select(r => (r, list: Heroes.Where(t => t.Rarity == r).ToList())).Where(g => g.list.Count > 0).ToList();
            float cell = (Ui.W - Pad * 2 - 3 * 8) / 4;
            float content = 140 + groups.Sum(g => 34 + Mathf.Ceil(g.list.Count / 4f) * (cell + 8));
            _scroll = Scroller.Begin(area, _scroll, content);
            float y = 8;
            y = HeroTabs(y, owned.Count);
            Ui.Text(new Rect(Pad, y, Ui.W - Pad * 2, 36), "Every hero in Sigilbound. Undiscovered heroes can be summoned with shards.", 12, Palette.Dim, FontStyle.Normal, TextAnchor.UpperLeft, true);
            y += 40;
            foreach (var (rar, list) in groups)
            {
                Ui.Text(new Rect(Pad, y, 200, 26), rar.ToString(), 15, Palette.Rarity(rar), FontStyle.Bold); y += 30;
                for (int i = 0; i < list.Count; i++)
                {
                    var t = list[i]; bool known = owned.Contains(t.Id);
                    var r = new Rect(Pad + (i % 4) * (cell + 8), y + (i / 4) * (cell + 8), cell, cell);
                    Ui.Panel(r, known ? Palette.Panel2 : Palette.Hex("#0d0b10"), known ? Palette.Rarity(t.Rarity) : Palette.Line, 10);
                    if (known) GUI.DrawTexture(new Rect(r.x + 8, r.y + 8, 6, r.height - 34), Ui.RoundTex(Palette.Element(t.Element), null, 3));
                    // Undiscovered: a dark silhouette mark instead of the name.
                    Ui.Text(new Rect(r.x, r.y + 4, r.width, r.height - 28), known ? t.ShortName.Substring(0, 1) : "?", known ? 28 : 30, known ? Palette.Text : Palette.Hex("#3a3344"), FontStyle.Bold, TextAnchor.MiddleCenter);
                    Ui.Text(new Rect(r.x + 2, r.yMax - 24, r.width - 4, 20), known ? t.ShortName : "???", 11, known ? Palette.Text : Palette.Dim, FontStyle.Normal, TextAnchor.MiddleCenter);
                    if (Ui.Button(r, "", Ui.Kind.Ghost)) CodexPopup(t, known);
                }
                y += Mathf.Ceil(list.Count / 4f) * (cell + 8) + 4;
            }
            Scroller.End();
        }

        // Heroes / Codex tab chips; returns y below.
        float HeroTabs(float y, int discovered)
        {
            if (Ui.Button(new Rect(Pad, y, 120, 32), $"Heroes ({G.S.heroes.Count})", _codex ? Ui.Kind.Chip : Ui.Kind.ChipOn, 13)) { _codex = false; _scroll = Vector2.zero; }
            if (Ui.Button(new Rect(Pad + 126, y, 130, 32), $"Codex ({discovered}/{Heroes.Length})", _codex ? Ui.Kind.ChipOn : Ui.Kind.Chip, 13)) { _codex = true; _scroll = Vector2.zero; }
            return y + 42;
        }

        void CodexPopup(HeroDef t, bool known)
        {
            float h = 190 + t.Skills.Length * 64;
            Modal(known ? t.Name : "Undiscovered hero", Mathf.Min(Ui.Safe.height - 40, h), b =>
            {
                float y = b.y;
                Ui.Text(new Rect(b.x, y, b.width, 20), Tag(t), 13, Palette.Text, FontStyle.Normal, TextAnchor.MiddleCenter); y += 28;
                for (int i = 0; i < t.Skills.Length; i++)
                {
                    var s = t.Skills[i];
                    Ui.Text(new Rect(b.x, y, b.width, 20), $"A{i + 1} · {(known ? s.Name : "???")}   {Ui.ColorTag(s.Cooldown > 0 ? $"cooldown {s.Cooldown}" : "basic", Palette.Dim)}", 13, Palette.Text, FontStyle.Bold);
                    Ui.Text(new Rect(b.x, y + 20, b.width, 40), SkillText.Describe(s), 12, Palette.Dim, FontStyle.Normal, TextAnchor.UpperLeft, true);
                    y += 64;
                }
                Ui.Text(new Rect(b.x, y, b.width, 36), known ? "In your roster." : $"Found through {(t.Rarity >= Rarity.Epic ? "Mystic or Radiant" : "any")} shard summons.", 12, Palette.Dim, FontStyle.Normal, TextAnchor.UpperCenter, true);
                if (Ui.Button(new Rect(b.x, b.yMax - 46, b.width, 44), "Close")) CloseModal();
            });
        }
    }
}
