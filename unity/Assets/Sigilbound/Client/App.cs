// App shell: starts itself when you press Play in any scene, owns the save,
// routes between screens, and shows your heroes standing in the 3D arena behind the menus.
using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using Sigilbound.Core;

namespace Sigilbound.Client
{
    public static class Bootstrap
    {
        // Runs automatically after the first scene loads; no scene setup required.
        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterSceneLoad)]
        static void Start()
        {
            if (UnityEngine.Object.FindAnyObjectByType<App>() != null) return;
            foreach (var cam in UnityEngine.Object.FindObjectsByType<Camera>(FindObjectsSortMode.None)) cam.gameObject.SetActive(false);
            var go = new GameObject("Sigilbound");
            UnityEngine.Object.DontDestroyOnLoad(go);
            go.AddComponent<App>();
        }
    }

    public enum ScreenId { Intro, Home, Campaign, Prep, Heroes, Hero, Equip, Summon, Titan, Battle, Friends, FriendProfile, Chat, Blocked }

    public sealed partial class App : MonoBehaviour
    {
        public const string SaveKey = "sigilbound.save.v1";
        public Game G;
        public Arena Arena;
        public ScreenId Screen = ScreenId.Home;
        public BattleController Battle;

        // screen state
        int _heroUid; GameData.Slot _slot; int _chapterOpen = -1; int _prepStage = -1; bool _prepTitan; ScreenId _prepBack;
        Vector2 _scroll; string _sort = "power";
        readonly List<CharacterView> _lineup = new List<CharacterView>();
        string _lineupKey = "";

        // modal + toasts
        string _modalTitle; Action<Rect> _modalBody; float _modalHeight = 260;
        readonly List<(string text, float until)> _toasts = new List<(string, float)>();

        void Awake()
        {
            Application.targetFrameRate = 60;
            UnityEngine.Screen.orientation = ScreenOrientation.Portrait;
            UnityEngine.Screen.sleepTimeout = SleepTimeout.NeverSleep;
            G = new Game(Load());
            G.EnsureDaily();
            Arena = Arena.Create();
            Vfx.Create(Arena.Cam);
            Battle = gameObject.AddComponent<BattleController>();
            Battle.App = this;
            Online = gameObject.AddComponent<Online>();
            Online.App = this;
            Screen = G.S.started ? ScreenId.Home : ScreenId.Intro;
            Arena.Build(Math.Min(GameData.Chapters.Length - 1, G.S.cleared / GameData.StagesPerChapter), false);
        }

        // ---------- save ----------
        static SaveData Load()
        {
            try
            {
                var json = PlayerPrefs.GetString(SaveKey, "");
                if (!string.IsNullOrEmpty(json)) return JsonUtility.FromJson<SaveData>(json) ?? new SaveData();
            }
            catch (Exception e) { Debug.LogWarning("Save unreadable, starting fresh: " + e.Message); }
            return new SaveData();
        }
        public void Save() { PlayerPrefs.SetString(SaveKey, JsonUtility.ToJson(G.S)); PlayerPrefs.Save(); }
        void OnApplicationPause(bool paused) { if (paused) Save(); }
        void OnApplicationQuit() => Save();

        public void Toast(string text) => _toasts.Add((text, Time.unscaledTime + 2.4f));
        public void Modal(string title, float height, Action<Rect> body) { _modalTitle = title; _modalHeight = height; _modalBody = body; }
        public void CloseModal() { _modalBody = null; _modalTitle = null; }
        public bool ModalOpen => _modalBody != null;

        public void Go(ScreenId s) { Screen = s; _scroll = Vector2.zero; CloseModal(); }

        void Update()
        {
            Scroller.Tick();
            if (Input.GetKeyDown(KeyCode.Escape)) Back(); // Android back button
            if (Screen != ScreenId.Battle) UpdateLineup();
        }

        void Back()
        {
            if (ModalOpen) { CloseModal(); return; }
            switch (Screen)
            {
                case ScreenId.Battle: Battle.AskRetreat(); break;
                case ScreenId.Hero: Go(ScreenId.Heroes); break;
                case ScreenId.Equip: Go(ScreenId.Hero); break;
                case ScreenId.Prep: Go(_prepBack); break;
                case ScreenId.FriendProfile: case ScreenId.Blocked: Go(ScreenId.Friends); break;
                case ScreenId.Chat: Go(ScreenId.FriendProfile); break;
                case ScreenId.Home: case ScreenId.Intro: Application.Quit(); break;
                default: Go(ScreenId.Home); break;
            }
        }

        // ---------- 3D lineup behind the menus ----------
        void UpdateLineup()
        {
            List<(HeroDef def, Element el)> want;
            float scale = 1f; bool single = false;
            switch (Screen)
            {
                case ScreenId.Hero: case ScreenId.Equip:
                    var h = G.HeroByUid(_heroUid);
                    want = h == null ? new List<(HeroDef, Element)>() : new List<(HeroDef, Element)> { (GameData.Hero(h.id), GameData.Hero(h.id).Element) };
                    scale = 1.5f; single = true; break;
                case ScreenId.FriendProfile:
                    var fr = Online.Friend(_friendId);
                    want = fr?.profile?.heroes == null ? new List<(HeroDef, Element)>()
                        : fr.profile.heroes.Where(x => GameData.Hero(x.id) != null).Take(4).Select(x => (GameData.Hero(x.id), GameData.Hero(x.id).Element)).ToList();
                    break;
                case ScreenId.Chat: case ScreenId.Blocked:
                    want = new List<(HeroDef, Element)>(); break;
                case ScreenId.Intro:
                    want = GameData.Starters.Select(id => (GameData.Hero(id), GameData.Hero(id).Element)).ToList(); break;
                default:
                    want = G.Team.Select(x => (GameData.Hero(x.id), GameData.Hero(x.id).Element)).ToList(); break;
            }
            string key = string.Join(",", want.Select(w => w.def.Id)) + (single ? "!" : "");
            if (key == _lineupKey) return;
            _lineupKey = key;
            ClearLineup();
            for (int i = 0; i < want.Count; i++)
            {
                var u = new Unit { Template = want[i].def, Name = want[i].def.Name, El = want[i].el, Ally = true, Key = "L" + i };
                var pos = single ? new Vector3(0, 0, 0.4f) : new Vector3(-2.1f + i * (4.2f / Math.Max(1, want.Count - 1)) * (want.Count > 1 ? 1 : 0), 0, 0.6f + (i % 2) * 0.5f);
                if (want.Count == 1 && !single) pos = new Vector3(0, 0, 0.6f);
                var v = CharacterView.Create(u, pos, false, scale);
                var toCam = Arena.Cam.transform.position - pos; toCam.y = 0;
                v.transform.rotation = Quaternion.LookRotation(toCam, Vector3.up);
                _lineup.Add(v);
            }
        }
        public void ClearLineup()
        {
            foreach (var v in _lineup) if (v) Destroy(v.gameObject);
            _lineup.Clear(); _lineupKey = "";
        }

        // ---------- GUI ----------
        void OnGUI()
        {
            Ui.Begin();
            if (Screen == ScreenId.Battle) { Battle.DrawHud(); DrawModalAndToasts(); return; }
            var safe = Ui.Safe;
            float top = safe.y, bottom = safe.yMax;
            if (Screen == ScreenId.Intro) { DrawIntro(new Rect(0, top, Ui.W, bottom - top)); DrawModalAndToasts(); return; }

            DrawTopBar(new Rect(0, top, Ui.W, 44));
            var content = new Rect(0, top + 44, Ui.W, bottom - top - 44 - 64);
            switch (Screen)
            {
                case ScreenId.Home: DrawHome(content); break;
                case ScreenId.Campaign: DrawCampaign(content); break;
                case ScreenId.Prep: DrawPrep(content); break;
                case ScreenId.Heroes: DrawHeroes(content); break;
                case ScreenId.Hero: DrawHero(content); break;
                case ScreenId.Equip: DrawEquip(content); break;
                case ScreenId.Summon: DrawSummon(content); break;
                case ScreenId.Titan: DrawTitan(content); break;
                case ScreenId.Friends: DrawFriends(content); break;
                case ScreenId.FriendProfile: DrawFriendProfile(content); break;
                case ScreenId.Chat: DrawChat(content); break;
                case ScreenId.Blocked: DrawBlocked(content); break;
            }
            DrawNav(new Rect(0, bottom - 64, Ui.W, 64 + (Ui.H - bottom)));
            DrawModalAndToasts();
        }

        void DrawTopBar(Rect r)
        {
            GUI.DrawTexture(new Rect(0, 0, Ui.W, r.yMax), Ui.Solid(new Color(0.08f, 0.07f, 0.11f, 0.92f)));
            float x = 10;
            void Chip(string text, Color c)
            {
                var w = Mathf.Max(52, text.Length * 8.2f + 18);
                Ui.Panel(new Rect(x, r.y + 8, w, 28), Palette.Panel2, Palette.Panel2, 13);
                Ui.Text(new Rect(x, r.y + 8, w, 28), text, 13, c, FontStyle.Bold, TextAnchor.MiddleCenter);
                x += w + 6;
            }
            Chip("● " + Ui.Fmt(G.S.gold), Palette.Gold);
            Chip("Worn " + G.S.shardCommon, Palette.Hex("#c9a37b"));
            Chip("Mystic " + G.S.shardMystic, Palette.Blue);
            Chip("Radiant " + G.S.shardRadiant, Palette.Hex("#ffb02e"));
        }

        void DrawNav(Rect r)
        {
            GUI.DrawTexture(r, Ui.Solid(new Color(0.08f, 0.07f, 0.11f, 0.96f)));
            GUI.DrawTexture(new Rect(r.x, r.y, r.width, 1), Ui.Solid(Palette.Line));
            var items = new (ScreenId id, string label)[] { (ScreenId.Home, "Home"), (ScreenId.Campaign, "Campaign"), (ScreenId.Heroes, "Heroes"), (ScreenId.Summon, "Summon"), (ScreenId.Titan, "Titan"), (ScreenId.Friends, "Friends") };
            float w = Ui.W / items.Length;
            for (int i = 0; i < items.Length; i++)
            {
                var it = items[i];
                bool on = Screen == it.id || (it.id == ScreenId.Heroes && (Screen == ScreenId.Hero || Screen == ScreenId.Equip))
                    || (it.id == ScreenId.Friends && (Screen == ScreenId.FriendProfile || Screen == ScreenId.Chat || Screen == ScreenId.Blocked));
                var cell = new Rect(i * w, r.y, w, 64);
                if (Ui.Button(cell, "", Ui.Kind.Ghost)) { if (it.id == ScreenId.Friends) OpenFriends(); else Go(it.id); }
                if (on) GUI.DrawTexture(new Rect(cell.x + w / 2 - 14, r.y + 6, 28, 4), Ui.RoundTex(Palette.Gold, null, 2));
                Ui.Text(new Rect(cell.x, r.y + 12, w, 40), it.label, 12, on ? Palette.Gold : Palette.Dim, FontStyle.Bold, TextAnchor.MiddleCenter);
                int badge = it.id == ScreenId.Home ? HomeBadge() : it.id == ScreenId.Titan ? G.S.daily.titanTries
                    : it.id == ScreenId.Friends && Online.SignedIn ? Online.Unread.messages + Online.Unread.requests : 0;
                if (badge > 0)
                {
                    var b = new Rect(cell.x + w / 2 + 14, r.y + 8, 18, 18);
                    GUI.DrawTexture(b, Ui.RoundTex(it.id == ScreenId.Titan ? Palette.Blue : Palette.Bad, null, 9));
                    Ui.Text(b, badge.ToString(), 11, Color.white, FontStyle.Bold, TextAnchor.MiddleCenter);
                }
            }
        }
        int HomeBadge()
        {
            int n = G.LoginAvailable ? 1 : 0;
            foreach (var q in GameData.DailyQuests) if (!G.QuestClaimed(q.Id) && G.QuestProgress(q.Id) >= q.Goal) n++;
            return n;
        }

        void DrawModalAndToasts()
        {
            if (ModalOpen)
            {
                GUI.DrawTexture(new Rect(0, 0, Ui.W, Ui.H), Ui.Solid(new Color(0, 0, 0, 0.7f)));
                var box = new Rect(16, Mathf.Max(Ui.Safe.y + 20, (Ui.H - _modalHeight) / 2), Ui.W - 32, _modalHeight);
                Ui.Panel(box, Palette.Panel, Palette.Line, 18);
                if (!string.IsNullOrEmpty(_modalTitle)) Ui.Text(new Rect(box.x, box.y + 14, box.width, 34), _modalTitle, 24, Palette.Gold, FontStyle.Bold, TextAnchor.MiddleCenter);
                _modalBody?.Invoke(new Rect(box.x + 16, box.y + 56, box.width - 32, box.height - 72));
            }
            _toasts.RemoveAll(t => t.until < Time.unscaledTime);
            float y = Ui.Safe.yMax - 120;
            for (int i = _toasts.Count - 1; i >= 0; i--)
            {
                var r = new Rect(30, y, Ui.W - 60, 36);
                Ui.Panel(r, new Color(0, 0, 0, 0.85f), Palette.Line, 10);
                Ui.Text(r, _toasts[i].text, 13, Palette.Text, FontStyle.Normal, TextAnchor.MiddleCenter, true);
                y -= 42;
            }
        }
    }
}
