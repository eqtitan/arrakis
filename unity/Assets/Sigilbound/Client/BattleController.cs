// Runs a battle: spawns 3D units, drives the turn loop, animates events,
// takes player input (skill + target), and shows results.
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using Sigilbound.Core;
using static Sigilbound.Core.GameData;

namespace Sigilbound.Client
{
    public sealed class BattleController : MonoBehaviour
    {
        public App App;
        Battle _b; int _stage; bool _titan;
        readonly Dictionary<Unit, CharacterView> _views = new Dictionary<Unit, CharacterView>();
        Unit _actor; int _sel; bool _awaiting; string _banner = ""; bool _finished;
        Coroutine _loop;

        Game G => App.G;
        bool Auto => G.S.settings.auto;

        public void Begin(int stage)
        {
            if (G.Team.Count == 0) { App.Toast("Choose at least one hero."); return; }
            _titan = stage < 0; _stage = stage;
            App.ClearLineup();
            _b = _titan ? Battle.ForTitan(G) : Battle.ForStage(G, stage);
            App.Arena.Build(_titan ? 9 : Game.ChapterOf(stage), _titan);
            Clear();
            Spawn(_b.Allies, true); Spawn(_b.Enemies, false);
            _finished = false; _awaiting = false; _banner = ""; _actor = null;
            App.Go(ScreenId.Battle);
            Time.timeScale = Mathf.Clamp(G.S.settings.speed, 1, 3);
            _loop = StartCoroutine(Loop());
        }

        void Spawn(List<Unit> units, bool ally)
        {
            for (int i = 0; i < units.Count; i++)
            {
                var u = units[i];
                float scale = u.Titan ? 1.3f : u.Boss ? 1.35f : 1f;
                var pos = u.Titan ? new Vector3(0, 0, 3.6f) : Arena.Slot(ally, i, units.Count);
                _views[u] = CharacterView.Create(u, pos, ally, scale);
            }
        }
        void Clear()
        {
            foreach (var v in _views.Values) if (v) Destroy(v.gameObject);
            _views.Clear();
        }

        public void End(ScreenId to)
        {
            if (_loop != null) StopCoroutine(_loop);
            Time.timeScale = 1;
            Clear();
            App.CloseModal();
            App.Arena.Build(Mathf.Min(Chapters.Length - 1, G.S.cleared / StagesPerChapter), false);
            App.Go(to);
        }

        // ---------- turn loop ----------
        IEnumerator Loop()
        {
            yield return new WaitForSeconds(0.5f);
            while (!_b.Over)
            {
                var u = _b.NextActor();
                if (u == null) break;
                _actor = u; _banner = "";
                var (events, skip) = _b.BeginTurn(u);
                if (events.Count > 0) { yield return ShowEvents(events, Palette.Hex("#7dff7a")); yield return new WaitForSeconds(0.25f); }
                if (!skip)
                {
                    int skill; Unit target;
                    if (u.Ally && !Auto)
                    {
                        _sel = 0; _awaiting = true; _chosen = null;
                        while (_awaiting && !Auto) yield return null;
                        if (_awaiting) { _awaiting = false; (skill, target) = _b.AiChoose(u); } // switched to auto mid-turn
                        else { skill = _sel; target = _chosen; }
                    }
                    else (skill, target) = _b.AiChoose(u);
                    yield return DoAct(u, skill, target);
                }
                else yield return new WaitForSeconds(0.35f);
                var res = _b.EndTurn(u, out bool newWave);
                if (newWave)
                {
                    foreach (var dead in _views.Where(kv => !kv.Key.Ally).Select(kv => kv.Value).ToList()) if (dead) Destroy(dead.gameObject, 1.5f);
                    foreach (var k in _views.Keys.Where(k => !k.Ally).ToList()) _views.Remove(k);
                    _banner = $"Wave {_b.Wave + 1}!";
                    yield return new WaitForSeconds(0.6f);
                    Spawn(_b.Enemies, false);
                    yield return new WaitForSeconds(0.5f);
                }
            }
            _actor = null;
            Finish();
        }

        Unit _chosen;

        IEnumerator DoAct(Unit u, int skillIdx, Unit target)
        {
            var sk = u.Template.Skills[skillIdx];
            _banner = sk.Name;
            yield return new WaitForSeconds(0.2f);
            var events = _b.Act(u, skillIdx, target);
            var color = Palette.Element(u.El);
            var view = _views.TryGetValue(u, out var v) ? v : null;
            var hit = events.Where(e => e.Type == EvType.Damage && e.Unit != u).Select(e => e.Unit).Distinct().ToList();
            bool melee = sk.Mult > 0 && !Palette.IsCaster(u.Template.Id) && sk.Target == Target.Enemy;
            if (view != null)
            {
                Vector3 aim = hit.Count > 0 && _views.ContainsKey(hit[0]) ? _views[hit[0]].transform.position : view.transform.position + view.transform.forward * 2;
                yield return view.Attack(aim, melee);
                if (sk.Mult == 0) Vfx.I.Cast(view.transform.position + Vector3.up * 0.1f, color);
                if (!melee && hit.Count > 0)
                {
                    var from = view.Center + view.transform.forward * 0.4f;
                    var flights = hit.Where(_views.ContainsKey).Select(h => StartCoroutine(Vfx.I.Projectile(from, _views[h].Center, color))).ToList();
                    foreach (var f in flights) yield return f;
                }
                if (melee) foreach (var h in hit) if (_views.ContainsKey(h)) Vfx.I.Slash(_views[h].Center, color);
            }
            yield return ShowEvents(events, color);
            if (view != null) yield return view.Recover();
            yield return new WaitForSeconds(0.25f);
        }

        IEnumerator ShowEvents(List<BattleEvent> events, Color color)
        {
            foreach (var e in events)
            {
                if (e.Unit == null || !_views.TryGetValue(e.Unit, out var v) || v == null) continue;
                var c = v.Center;
                switch (e.Type)
                {
                    case EvType.Damage:
                        if (e.Dot) { Vfx.I.Number(c, Ui.Fmt(e.Amount), new Color(0.5f, 1f, 0.45f)); break; }
                        Vfx.I.Burst(c, color, e.Crit);
                        v.Hit();
                        Vfx.I.Number(c + Vector3.up * 0.3f, (e.Crit ? "CRIT " : "") + Ui.Fmt(e.Amount),
                            e.Crit ? new Color(1f, 0.85f, 0.2f) : e.Elem > 1 ? new Color(1f, 0.55f, 0.3f) : e.Elem < 1 ? new Color(0.7f, 0.7f, 0.8f) : Color.white, e.Crit ? 1.3f : 1f);
                        if (e.Crit) Vfx.I.Shake();
                        yield return new WaitForSeconds(0.12f);
                        break;
                    case EvType.Heal: Vfx.I.Heal(v.transform.position); Vfx.I.Number(c, "+" + Ui.Fmt(e.Amount), new Color(0.45f, 1f, 0.5f)); break;
                    case EvType.Absorb: Vfx.I.Number(c + Vector3.up * 0.5f, "Shield " + Ui.Fmt(e.Amount), new Color(0.6f, 0.85f, 1f), 0.7f); break;
                    case EvType.Status: Vfx.I.Buff(v.transform.position, FxDef.IsBuff(e.Fx)); Vfx.I.Number(c + Vector3.up * 0.6f, SkillText.EffectName(e.Fx), FxDef.IsBuff(e.Fx) ? new Color(1f, 0.85f, 0.4f) : new Color(0.8f, 0.55f, 1f), 0.7f); break;
                    case EvType.Text: Vfx.I.Number(c + Vector3.up * 0.6f, e.Text, new Color(0.8f, 0.9f, 1f), 0.7f); break;
                    case EvType.Death: v.Die(); Vfx.I.Dissolve(v.transform.position + Vector3.up * 0.8f); break;
                }
            }
            yield return new WaitForSeconds(0.2f);
        }

        // ---------- results ----------
        void Finish()
        {
            if (_finished) return;
            _finished = true;
            Time.timeScale = 1;
            if (_titan)
            {
                long dmg = _b.TitanDamage;
                var reward = G.CompleteTitan(dmg); App.Save();
                App.Modal("Titan Battle", 300, r =>
                {
                    Ui.Text(new Rect(r.x, r.y, r.width, 40), $"{Ui.Fmt(dmg)} damage", 26, Palette.Text, FontStyle.Bold, TextAnchor.MiddleCenter);
                    Ui.Text(new Rect(r.x, r.y + 44, r.width, 40), reward.ToString(), 14, Palette.Gold, FontStyle.Normal, TextAnchor.MiddleCenter, true);
                    Ui.Text(new Rect(r.x, r.y + 90, r.width, 70), string.Join("\n", _b.Allies.Select(a => $"{a.Template.ShortName}: {Ui.Fmt(a.DmgDealt)}")), 12, Palette.Dim, FontStyle.Normal, TextAnchor.UpperCenter, true);
                    if (Ui.Button(new Rect(r.x, r.yMax - 46, r.width, 44), "Continue")) End(ScreenId.Titan);
                });
                return;
            }
            if (_b.Result == BattleResult.Victory)
            {
                var res = G.CompleteStage(_stage); App.Save();
                string ups = string.Join("\n", res.LevelUps.Select(l => $"{Hero(l.hero.id).ShortName} → Lv {l.hero.level}"));
                string gear = res.Gear == null ? "" : $"\nFound: {GearRarityNames[res.Gear.rarity]} {res.Gear.Set} {res.Gear.Slot}";
                bool canNext = _stage + 1 < TotalStages && G.S.cleared > _stage;
                App.Modal("VICTORY", 330, r =>
                {
                    Ui.Text(new Rect(r.x, r.y, r.width, 60), res.Reward + $"\n+{Ui.Fmt(res.Reward.Xp)} XP each" + (res.FirstClear ? " · First clear bonus!" : ""), 14, Palette.Text, FontStyle.Normal, TextAnchor.UpperCenter, true);
                    Ui.Text(new Rect(r.x, r.y + 64, r.width, 90), ups + gear, 13, Palette.Good, FontStyle.Normal, TextAnchor.UpperCenter, true);
                    float y = r.yMax - 100;
                    if (canNext && Ui.Button(new Rect(r.x, y, r.width, 44), "Next Stage ▶")) { App.CloseModal(); Begin(Mathf.Min(G.S.cleared, TotalStages - 1)); }
                    if (Ui.Button(new Rect(r.x, r.yMax - 46, r.width / 2 - 5, 44), "Replay", Ui.Kind.Secondary)) { App.CloseModal(); Begin(_stage); }
                    if (Ui.Button(new Rect(r.x + r.width / 2 + 5, r.yMax - 46, r.width / 2 - 5, 44), "Map", Ui.Kind.Secondary)) End(ScreenId.Campaign);
                });
                if (G.S.settings.autoReplay) StartCoroutine(AutoReplay());
            }
            else
            {
                G.S.settings.autoReplay = false; App.Save();
                App.Modal("DEFEAT", 250, r =>
                {
                    Ui.Text(new Rect(r.x, r.y, r.width, 80), "Level heroes with training, equip and upgrade gear, bring elements that beat the enemy, and summon new heroes.", 13, Palette.Dim, FontStyle.Normal, TextAnchor.UpperCenter, true);
                    if (Ui.Button(new Rect(r.x, r.yMax - 46, r.width / 2 - 5, 44), "Retry", Ui.Kind.Secondary)) { App.CloseModal(); Begin(_stage); }
                    if (Ui.Button(new Rect(r.x + r.width / 2 + 5, r.yMax - 46, r.width / 2 - 5, 44), "Heroes")) End(ScreenId.Heroes);
                });
            }
        }
        IEnumerator AutoReplay()
        {
            yield return new WaitForSecondsRealtime(1.6f);
            if (G.S.settings.autoReplay && App.Screen == ScreenId.Battle && _finished) { App.CloseModal(); Begin(_stage); }
        }

        public void AskRetreat()
        {
            if (_finished) return;
            App.Modal("Retreat?", 200, r =>
            {
                Ui.Text(new Rect(r.x, r.y, r.width, 50), _titan ? "Damage so far still counts and uses this try." : "You get no rewards for this battle.", 14, Palette.Dim, FontStyle.Normal, TextAnchor.UpperCenter, true);
                if (Ui.Button(new Rect(r.x, r.yMax - 46, r.width / 2 - 5, 44), "Stay", Ui.Kind.Secondary)) App.CloseModal();
                if (Ui.Button(new Rect(r.x + r.width / 2 + 5, r.yMax - 46, r.width / 2 - 5, 44), "Retreat", Ui.Kind.Red))
                {
                    App.CloseModal();
                    if (_titan) { if (_loop != null) StopCoroutine(_loop); _b.Retreat(); Finish(); }
                    else { G.S.settings.autoReplay = false; End(ScreenId.Campaign); }
                }
            });
        }

        // ---------- HUD ----------
        public void DrawHud()
        {
            if (_b == null) return;
            var safe = Ui.Safe; var cam = App.Arena.Cam;
            float top = safe.y;
            // header
            if (Ui.Button(new Rect(10, top + 8, 40, 34), "X", Ui.Kind.Secondary, 14)) AskRetreat();
            string info = _titan ? $"Titan · Turn {Mathf.Min(_b.BossTurns + 1, TitanTurns)}/{TitanTurns} · {Ui.Fmt(_b.TitanDamage)} dmg" : $"Stage {Game.StageLabel(_stage)} · Wave {_b.Wave + 1}/{_b.Waves.Count}";
            Ui.Text(new Rect(58, top + 8, 160, 34), info, 13, Palette.Text, FontStyle.Bold);
            float bx = Ui.W - 10;
            bx -= 52; if (Ui.Button(new Rect(bx, top + 8, 48, 34), $"{G.S.settings.speed}x", Ui.Kind.Secondary, 13)) { G.S.settings.speed = G.S.settings.speed >= 3 ? 1 : G.S.settings.speed + 1; Time.timeScale = _finished ? 1 : G.S.settings.speed; App.Save(); }
            bx -= 62; if (Ui.Button(new Rect(bx, top + 8, 58, 34), "Auto", Auto ? Ui.Kind.Primary : Ui.Kind.Secondary, 13)) { G.S.settings.auto = !G.S.settings.auto; App.Save(); }
            if (!_titan) { bx -= 62; if (Ui.Button(new Rect(bx, top + 8, 58, 34), "Loop", G.S.settings.autoReplay ? Ui.Kind.Primary : Ui.Kind.Secondary, 12)) { G.S.settings.autoReplay = !G.S.settings.autoReplay; App.Save(); } }

            // unit bars + tap targets
            bool manual = _awaiting && _actor != null && _actor.Ally && !Auto;
            var targets = manual ? _b.AffectedBy(_actor, _sel) : new List<Unit>();
            foreach (var kv in _views)
            {
                var u = kv.Key; var v = kv.Value;
                if (v == null) continue;
                v.SetHighlight(manual && targets.Contains(u) ? (u.Ally ? new Color(0.36f, 0.82f, 0.48f, 0.8f) : new Color(1f, 0.35f, 0.35f, 0.85f)) : (u == _actor ? new Color(1f, 0.81f, 0.35f, 0.7f) : (Color?)null));
                if (!u.Alive) continue;
                Vector3 sp = cam.WorldToScreenPoint(v.HeadTop ? v.HeadTop.position + Vector3.up * 0.25f : v.transform.position + Vector3.up * 2.2f);
                if (sp.z < 0) continue;
                float x = sp.x / Ui.Scale, y = (Screen.height - sp.y) / Ui.Scale;
                float w = u.Titan ? 140 : 76;
                Ui.Text(new Rect(x - w / 2 - 10, y - 30, w + 20, 16), $"{Ui.ColorTag("●", Palette.Element(u.El))} {(u.Ally ? u.Template.ShortName : u.Name)}", 11, Palette.Text, FontStyle.Bold, TextAnchor.MiddleCenter);
                Ui.Bar(new Rect(x - w / 2, y - 13, w, 7), u.Titan ? 1 : u.Hp / (float)u.MaxHp, u.Ally ? Palette.Good : Palette.Bad);
                var sh = u.Shield; if (sh != null) GUI.DrawTexture(new Rect(x - w / 2, y - 13, w * Mathf.Clamp01(sh.Val / (float)u.MaxHp), 3), Ui.Solid(new Color(0.7f, 0.85f, 1f)));
                Ui.Bar(new Rect(x - w / 2, y - 4, w, 3), (float)(u.Tm / Battle.TmFull), Palette.Blue);
                if (u.Effects.Count > 0) Ui.Text(new Rect(x - 60, y + 1, 120, 14), string.Join(" ", u.Effects.Select(e => Ui.ColorTag(SkillText.EffectShort(e.Type), FxDef.IsBuff(e.Type) ? Palette.Gold : Palette.Hex("#c07aff")))), 9, Palette.Text, FontStyle.Bold, TextAnchor.MiddleCenter);
                if (manual && targets.Contains(u))
                {
                    Vector3 feet = cam.WorldToScreenPoint(v.transform.position);
                    float fy = (Screen.height - feet.y) / Ui.Scale;
                    var tap = new Rect(x - 45, y - 30, 90, Mathf.Max(60, fy - y + 40));
                    if (!App.ModalOpen && Ui.Button(tap, "", Ui.Kind.Ghost))
                    {
                        var sk = _actor.Template.Skills[_sel];
                        _chosen = sk.Target == Target.Enemy || sk.Target == Target.Ally ? u : null;
                        _awaiting = false;
                    }
                }
            }

            // banner + skill bar
            float barTop = safe.yMax - 92;
            string banner = !string.IsNullOrEmpty(_banner) ? _banner : manual ? $"{_actor.Template.ShortName}'s turn" : "";
            Ui.Text(new Rect(0, barTop - 64, Ui.W, 30), banner, 19, Palette.Gold, FontStyle.Bold, TextAnchor.MiddleCenter);
            if (manual) Ui.Text(new Rect(16, barTop - 36, Ui.W - 32, 32), SkillText.Describe(_actor.Template.Skills[_sel]), 11, Palette.Text, FontStyle.Normal, TextAnchor.UpperCenter, true);
            GUI.DrawTexture(new Rect(0, barTop, Ui.W, Ui.H - barTop), Ui.Solid(new Color(0, 0, 0, 0.6f)));
            if (manual)
            {
                var sks = _actor.Template.Skills;
                float w = (Ui.W - 20 - (sks.Length - 1) * 8) / sks.Length;
                for (int i = 0; i < sks.Length; i++)
                {
                    int cd = _actor.Cds[i];
                    string sub = sks[i].Target switch { Target.Enemy => "Single", Target.AllEnemies => "All foes", Target.Ally => "Ally", Target.AllAllies => "All allies", _ => "Self" };
                    string label = $"{sks[i].Name}\n{Ui.ColorTag(cd > 0 ? $"ready in {cd}" : sub, cd > 0 ? Palette.Bad : Palette.Dim)}";
                    if (Ui.Button(new Rect(10 + i * (w + 8), barTop + 10, w, 70), label, _sel == i ? Ui.Kind.ChipOn : Ui.Kind.Secondary, 13, cd == 0)) _sel = i;
                }
            }
            else Ui.Text(new Rect(0, barTop, Ui.W, 90), Auto ? "Auto battle" : _actor != null && !_actor.Ally ? "Enemy turn…" : "", 13, Palette.Dim, FontStyle.Normal, TextAnchor.MiddleCenter);
        }
    }
}
