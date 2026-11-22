// Friends & chat client for the Sigilbound server (functions/api/sb on the website).
// Same server as the web version, so web and app players can be friends.
// Credentials live in their own PlayerPrefs key, separate from the game save.
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEngine;
using UnityEngine.Networking;
using Sigilbound.Core;

namespace Sigilbound.Client
{
    // ---- wire format (field names match the server's JSON) ----
    [Serializable] public sealed class NetHero { public string id; public int stars; public int level; }
    [Serializable] public sealed class NetProfile { public int cleared; public int power; public long titanBest; public int heroCount; public List<NetHero> heroes = new List<NetHero>(); }
    [Serializable] public sealed class NetPlayer { public string id; public string name; public string code; public long seen; public NetProfile profile = new NetProfile(); public int unread; public long lastMsg; }
    [Serializable] public sealed class NetFriends { public NetPlayer me; public List<NetPlayer> friends = new List<NetPlayer>(); public List<NetPlayer> incoming = new List<NetPlayer>(); public List<NetPlayer> outgoing = new List<NetPlayer>(); }
    [Serializable] public sealed class NetMessage { public long id; public string sender; public string body; public long created; public bool mine; public bool pending; }
    [Serializable] public sealed class NetMessages { public List<NetMessage> messages = new List<NetMessage>(); }
    [Serializable] public sealed class NetUnread { public int messages; public int requests; }
    [Serializable] public sealed class NetBlocked { public List<NetPlayer> blocked = new List<NetPlayer>(); }
    [Serializable] public sealed class NetRegister { public string token; public NetPlayer me; }
    [Serializable] public sealed class NetOk { public bool ok; public bool accepted; public string name; public string error; }
    [Serializable] sealed class NetError { public string error; }
    [Serializable] sealed class Creds { public string token; public string id; public string name; public string code; }

    [Serializable] sealed class BodyName { public string name; public NetProfile profile; }
    [Serializable] sealed class BodyProfile { public NetProfile profile; }
    [Serializable] sealed class BodyCode { public string code; }
    [Serializable] sealed class BodyId { public string id; }
    [Serializable] sealed class BodyRespond { public string id; public bool accept; }
    [Serializable] sealed class BodyMessage { public string to; public string body; }
    [Serializable] sealed class BodyReport { public string id; public long messageId; public string reason; }

    public sealed class Online : MonoBehaviour
    {
        // The website where functions/api/sb runs with its D1 database.
        public const string ServerUrl = "https://arrakis-c06.pages.dev";
        const string CredsKey = "sigilbound.online.v1";

        public App App;
        Creds _creds;
        public bool SignedIn => _creds != null && !string.IsNullOrEmpty(_creds.token);
        public string MyName => _creds?.name;
        public string MyCode => _creds?.code;

        public string Unavailable;          // null = OK/unknown, else why online features can't be used
        public bool Probed;
        public NetFriends Data;
        public NetUnread Unread = new NetUnread();
        public NetBlocked Blocked;
        public bool Busy;

        // chat
        public string ChatWith; public readonly List<NetMessage> Chat = new List<NetMessage>(); long _chatLast; float _nextChatPoll;
        public bool ChatScrollToEnd;
        float _nextUnreadPoll = 2f, _lastProfilePush = -999f;

        void Awake()
        {
            var json = PlayerPrefs.GetString(CredsKey, "");
            if (!string.IsNullOrEmpty(json)) { try { _creds = JsonUtility.FromJson<Creds>(json); } catch { _creds = null; } }
        }
        void SaveCreds() { if (_creds == null) PlayerPrefs.DeleteKey(CredsKey); else PlayerPrefs.SetString(CredsKey, JsonUtility.ToJson(_creds)); PlayerPrefs.Save(); }

        void Update()
        {
            if (!SignedIn) return;
            float t = Time.unscaledTime;
            if (App.Screen == ScreenId.Chat && ChatWith != null && t >= _nextChatPoll) { _nextChatPoll = t + 4f; StartCoroutine(PollChat()); }
            if (t >= _nextUnreadPoll) { _nextUnreadPoll = t + 30f; StartCoroutine(PollUnread()); }
        }

        // ---------- HTTP ----------
        public delegate void Done(string json, string error, long status);
        IEnumerator Send(string method, string path, object body, Done done)
        {
            using var req = new UnityWebRequest(ServerUrl + "/api/sb/" + path, method);
            if (body != null) req.uploadHandler = new UploadHandlerRaw(Encoding.UTF8.GetBytes(JsonUtility.ToJson(body)));
            req.downloadHandler = new DownloadHandlerBuffer();
            req.SetRequestHeader("content-type", "application/json");
            if (SignedIn) req.SetRequestHeader("authorization", "Bearer " + _creds.token);
            req.timeout = 15;
            yield return req.SendWebRequest();
            string text = req.downloadHandler?.text ?? "";
            long status = req.responseCode;
            if (req.result == UnityWebRequest.Result.ConnectionError) { done(null, "Can't reach the game server. Check your connection.", 0); yield break; }
            bool isJson = text.TrimStart().StartsWith("{");
            if (!isJson) { done(null, "Friends and chat aren't available on this server yet.", status); yield break; }
            if (status >= 400)
            {
                string err = "Something went wrong.";
                try { err = JsonUtility.FromJson<NetError>(text).error ?? err; } catch { }
                if (status == 401 && SignedIn) { _creds = null; SaveCreds(); Data = null; err = "You were signed out. Create a profile again."; }
                done(null, err, status);
                yield break;
            }
            done(text, null, status);
        }
        void Call(string method, string path, object body, Action<string> ok, Action<string> fail = null)
        {
            StartCoroutine(Send(method, path, body, (json, err, status) =>
            {
                if (err != null) { if (fail != null) fail(err); else App.Toast(err); } else ok?.Invoke(json);
            }));
        }

        // ---------- profile ----------
        public NetProfile MyProfile()
        {
            var g = App.G;
            var team = g.Team.Count > 0 ? g.Team : g.S.heroes.OrderByDescending(g.Power).Take(4).ToList();
            return new NetProfile
            {
                cleared = g.S.cleared, power = g.TeamPower, titanBest = g.S.titanBestAllTime, heroCount = g.S.heroes.Count,
                heroes = team.Select(h => new NetHero { id = h.id, stars = h.stars, level = h.level }).ToList(),
            };
        }
        public void PushProfile(bool force = false)
        {
            if (!SignedIn || (!force && Time.unscaledTime - _lastProfilePush < 120)) return;
            _lastProfilePush = Time.unscaledTime;
            Call("POST", "profile", new BodyProfile { profile = MyProfile() }, null, _ => { });
        }

        public void Probe()
        {
            if (Busy) return;
            Busy = true;
            StartCoroutine(Send("GET", "me", null, (json, err, status) =>
            {
                Busy = false; Probed = true;
                Unavailable = err == null || status == 401 ? null : err;
                if (err == null) Refresh();
            }));
        }

        public void Register(string name)
        {
            name = (name ?? "").Trim();
            if (name.Length < 2) { App.Toast("Pick a name with at least 2 characters."); return; }
            Busy = true;
            Call("POST", "register", new BodyName { name = name, profile = MyProfile() }, json =>
            {
                Busy = false;
                var r = JsonUtility.FromJson<NetRegister>(json);
                _creds = new Creds { token = r.token, id = r.me.id, name = r.me.name, code = r.me.code };
                SaveCreds();
                App.G.S.playerName = name; App.Save();
                App.Toast($"Profile created. Your friend code is {r.me.code}");
                Refresh();
            }, err => { Busy = false; App.Toast(err); });
        }

        public void Refresh()
        {
            if (!SignedIn) return;
            Call("GET", "friends", null, json =>
            {
                Data = JsonUtility.FromJson<NetFriends>(json);
                _creds.name = Data.me.name; _creds.code = Data.me.code; SaveCreds();
                Unread = new NetUnread { messages = Data.friends.Sum(f => f.unread), requests = Data.incoming.Count };
                Unavailable = null; Probed = true;
            }, err => { Unavailable = SignedIn ? null : err; App.Toast(err); });
            PushProfile();
        }
        IEnumerator PollUnread()
        {
            yield return Send("GET", "unread", null, (json, err, status) =>
            {
                if (err != null) return;
                var u = JsonUtility.FromJson<NetUnread>(json);
                bool changed = u.messages != Unread.messages || u.requests != Unread.requests;
                Unread = u;
                if (changed && (App.Screen == ScreenId.Friends || App.Screen == ScreenId.FriendProfile)) Refresh();
            });
            PushProfile();
        }

        // ---------- friends ----------
        public NetPlayer Friend(string id) => Data?.friends.FirstOrDefault(f => f.id == id);

        public void AddFriend(string code)
        {
            code = (code ?? "").Trim();
            if (code.Length == 0) { App.Toast("Enter your friend's code first."); return; }
            Call("POST", "friends/add", new BodyCode { code = code }, json =>
            {
                var r = JsonUtility.FromJson<NetOk>(json);
                App.Toast(r.accepted ? $"You and {r.name} are now friends!" : $"Friend request sent to {r.name}");
                Refresh();
            });
        }
        public void Respond(string id, bool accept) => Call("POST", "friends/respond", new BodyRespond { id = id, accept = accept }, _ => Refresh());
        public void Remove(string id, Action after = null) => Call("POST", "friends/remove", new BodyId { id = id }, _ => { Refresh(); after?.Invoke(); });
        public void Block(string id, Action after = null) => Call("POST", "block", new BodyId { id = id }, _ => { App.Toast("Player blocked"); Refresh(); after?.Invoke(); });
        public void Unblock(string id) => Call("POST", "unblock", new BodyId { id = id }, _ => { App.Toast("Player unblocked"); LoadBlocked(); });
        public void LoadBlocked() => Call("GET", "blocks", null, json => Blocked = JsonUtility.FromJson<NetBlocked>(json));
        public void Report(string id, long messageId, string reason) =>
            Call("POST", "report", new BodyReport { id = id, messageId = messageId, reason = reason }, _ => App.Toast("Thanks. The report was sent."));
        public void DeleteAccount(Action after) => Call("POST", "account/delete", new BodyId { id = "" }, _ =>
        {
            _creds = null; SaveCreds(); Data = null; Unread = new NetUnread(); App.Toast("Online profile deleted"); after?.Invoke();
        });

        // ---------- chat ----------
        public void OpenChat(string friendId)
        {
            if (ChatWith != friendId) { ChatWith = friendId; Chat.Clear(); _chatLast = 0; }
            _nextChatPoll = 0; ChatScrollToEnd = true;
        }
        IEnumerator PollChat()
        {
            string with = ChatWith;
            yield return Send("GET", $"messages?with={UnityWebRequest.EscapeURL(with)}&after={_chatLast}", null, (json, err, status) =>
            {
                if (with != ChatWith) return;
                if (err != null) { if (status == 403) { App.Toast(err); App.Go(ScreenId.Friends); } return; }
                var r = JsonUtility.FromJson<NetMessages>(json);
                if (r.messages.Count == 0) return;
                Chat.RemoveAll(m => m.pending && r.messages.Any(x => x.mine && x.body == m.body));
                int insertAt = Chat.FindIndex(m => m.pending); if (insertAt < 0) insertAt = Chat.Count;
                Chat.InsertRange(insertAt, r.messages);
                _chatLast = r.messages[r.messages.Count - 1].id;
                ChatScrollToEnd = true;
                var f = Friend(with); if (f != null) f.unread = 0;
            });
        }
        public void SendMessage(string text, Action<bool> done)
        {
            text = (text ?? "").Trim();
            if (text.Length == 0) { done(false); return; }
            var temp = new NetMessage { body = text, mine = true, pending = true, created = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds() };
            Chat.Add(temp); ChatScrollToEnd = true;
            Call("POST", "messages", new BodyMessage { to = ChatWith, body = text }, _ => { _nextChatPoll = 0; done(true); },
                err => { Chat.Remove(temp); App.Toast(err); done(false); });
        }

        public static string Ago(long ms)
        {
            double s = Math.Max(0, (DateTimeOffset.UtcNow.ToUnixTimeMilliseconds() - ms) / 1000.0);
            if (s < 120) return "online now";
            if (s < 3600) return $"{(int)(s / 60)} min ago";
            if (s < 86400) return $"{(int)(s / 3600)} h ago";
            return $"{(int)(s / 86400)} d ago";
        }
    }
}
