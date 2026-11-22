// Sigilbound — friends and messaging (talks to /api/sb on the same site).
// Credentials live under their own storage key so they never end up in save codes.

const ONLINE_KEY = "sigilbound.online.v1";
const ON = {
  cfg: null,          // { token, id, name, code }
  available: null,    // null = unknown, true, or a string explaining why not
  data: null,         // last /friends payload
  unread: { messages: 0, requests: 0 },
  friendId: null,     // friend whose profile/chat is open
  chat: { with: null, msgs: [], last: 0, timer: null },
  lastProfilePush: 0,
};
try { ON.cfg = JSON.parse(localStorage.getItem(ONLINE_KEY) || "null"); } catch (_) { ON.cfg = null; }
function saveOnline() {
  const json = ON.cfg ? JSON.stringify(ON.cfg) : null;
  try { if (json) localStorage.setItem(ONLINE_KEY, json); else localStorage.removeItem(ONLINE_KEY); } catch (_) { /* ignore */ }
  NATIVE.persist(ONLINE_KEY, json);
}
// The installed apps aren't served from the website, so they call it by full address.
// This must be the site where functions/api/sb is deployed with its D1 database.
const NATIVE_SERVER = "https://arrakis-c06.pages.dev";
const API_BASE = NATIVE.isNative ? `${NATIVE_SERVER}/api/sb/` : "/api/sb/";

const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
function ago(ts) {
  const s = Math.max(0, (Date.now() - ts) / 1000);
  if (s < 120) return "online now";
  if (s < 3600) return `${Math.floor(s / 60)} min ago`;
  if (s < 86400) return `${Math.floor(s / 3600)} h ago`;
  return `${Math.floor(s / 86400)} d ago`;
}

class ApiError extends Error { constructor(msg, status) { super(msg); this.status = status; } }
async function api(path, opts = {}) {
  let res;
  try {
    res = await fetch(API_BASE + path, {
      method: opts.method || "GET",
      headers: { "content-type": "application/json", ...(ON.cfg ? { authorization: `Bearer ${ON.cfg.token}` } : {}) },
      body: opts.body ? JSON.stringify(opts.body) : undefined,
    });
  } catch (_) { throw new ApiError("Can't reach the game server. Check your connection.", 0); }
  let data = null;
  try { data = await res.json(); } catch (_) { /* not JSON: no API here */ }
  if (!data) throw new ApiError("Friends and chat aren't available on this copy of the game.", res.status || 404);
  if (!res.ok) {
    if (res.status === 401 && ON.cfg) { ON.cfg = null; saveOnline(); }
    throw new ApiError(data.error || "Something went wrong.", res.status);
  }
  return data;
}

function myProfile() {
  const team = G.team.map(heroByUid).filter(Boolean);
  const top = [...G.heroes].sort((a, b) => power(heroStats(b)) - power(heroStats(a))).slice(0, 4);
  return {
    cleared: G.cleared, titanBest: G.stats.titanBest, heroCount: G.heroes.length,
    power: team.reduce((s, h) => s + power(heroStats(h)), 0),
    heroes: (team.length ? team : top).map((h) => ({ id: h.id, stars: h.stars, level: h.level })),
  };
}
function pushProfile(force = false) {
  if (!ON.cfg || (!force && Date.now() - ON.lastProfilePush < 120000)) return;
  ON.lastProfilePush = Date.now();
  api("profile", { method: "POST", body: { profile: myProfile() } }).catch(() => {});
}

async function probe() {
  try { await api("me"); ON.available = true; }
  catch (e) { ON.available = e.status === 401 ? true : e.message; }
}
async function refreshFriends(rerender = true) {
  if (!ON.cfg) return;
  try {
    ON.data = await api("friends");
    ON.available = true;
    ON.cfg.name = ON.data.me.name; ON.cfg.code = ON.data.me.code; saveOnline();
    ON.unread = {
      messages: ON.data.friends.reduce((s, f) => s + f.unread, 0),
      requests: ON.data.incoming.length,
    };
  } catch (e) { if (!ON.cfg) ON.data = null; else toast(esc(e.message)); }
  if (rerender && !B && ["friends", "friend"].includes(UI.screen) && !isTyping()) render();
}
const isTyping = () => document.activeElement && ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName);

// ---------- screens ----------
function onlineBadgeCount() { return ON.cfg ? ON.unread.messages + ON.unread.requests : 0; }
const findFriend = (id) => ON.data && ON.data.friends.find((f) => f.id === id);

function profileHeroes(p, big) {
  if (!p || !p.heroes) return "";
  return p.heroes.filter((h) => HERO[h.id]).map((h) => `<div class="fh">
    ${big ? `<div class="fh-sprite">${heroSprite(h.id, HERO[h.id].el)}</div>` : portrait(HERO[h.id], { lv: "Lv" + Number(h.level) })}
    <span class="stars">${starStr(Math.min(6, Number(h.stars) || 1))}</span></div>`).join("");
}

Object.assign(SCREENS, {
  friends() {
    if (ON.available === null) { probe().then(() => { if (UI.screen === "friends") render(); }); return `<h2>Friends</h2><div class="card dim">Connecting…</div>`; }
    if (ON.available !== true) {
      return `<h2>Friends</h2><div class="card col"><b>Friends and chat aren't available here</b>
        <div class="small dim">${esc(ON.available)}</div>
        <div class="small dim">They work when you play on the game's website, after its online server is set up. Everything else works offline.</div>
        <button class="btn sec" data-act="retryOnline">Try again</button></div>`;
    }
    if (!ON.cfg) {
      return `<h2>Friends</h2><div class="card col">
        <b>Create your online profile</b>
        <div class="small dim">Pick the name friends will see. You'll get a friend code to share. No email or password needed. Your profile is tied to this device, so keep a save code as a backup.</div>
        <input id="sbname" class="inp" maxlength="16" placeholder="Display name" autocomplete="nickname" value="${esc(G.playerName || "")}">
        <button class="btn" data-act="registerOnline">Create profile</button></div>`;
    }
    if (!ON.data) { refreshFriends(); return `<h2>Friends</h2><div class="card dim">Loading friends…</div>`; }
    const d = ON.data;
    return `<div class="row spread"><h2>Friends</h2><button class="btn sec sm" data-act="refreshFriends">↻ Refresh</button></div>
      <div class="card row spread"><div><div class="small dim">Signed in as <b>${esc(d.me.name)}</b> · your friend code</div>
        <div class="fcode" id="mycode">${esc(d.me.code)}</div></div>
        <button class="btn sec sm" data-act="copyCode">Copy</button></div>
      <div class="card col"><b>Add a friend</b>
        <div class="row"><input id="addcode" class="inp grow" maxlength="8" placeholder="Their friend code" autocapitalize="characters" autocomplete="off">
        <button class="btn" data-act="addFriend">Add</button></div></div>
      ${d.incoming.length ? `<div class="card"><b>Friend requests</b>${d.incoming.map((f) => `<div class="frow">
          <div class="grow"><b>${esc(f.name)}</b><div class="small dim">wants to be friends</div></div>
          <button class="btn sm" data-act="respondFriend" data-id="${esc(f.id)}" data-accept="1">Accept</button>
          <button class="btn sec sm" data-act="respondFriend" data-id="${esc(f.id)}" data-accept="0">Decline</button></div>`).join("")}</div>` : ""}
      <div class="card"><b>Your friends (${d.friends.length})</b>
        ${d.friends.length ? d.friends.map((f) => {
          const lead = f.profile && f.profile.heroes && f.profile.heroes.find((h) => HERO[h.id]);
          return `<button class="frow fbtn" data-act="openFriend" data-id="${esc(f.id)}">
            ${lead ? portrait(HERO[lead.id]) : `<div class="por" style="--rc:#3a3150;--ec:#2a2339"></div>`}
            <div class="grow" style="min-width:0"><b>${esc(f.name)}</b>
              <div class="small dim">${f.profile ? `Stage ${f.profile.cleared >= TOTAL_STAGES ? "complete" : stageLabel(Math.min(f.profile.cleared, TOTAL_STAGES - 1))} · ⚔️ ${fmt(f.profile.power)}` : ""} · ${ago(f.seen)}</div></div>
            ${f.unread ? `<span class="ubadge">${f.unread}</span>` : `<span class="dim">›</span>`}</button>`;
        }).join("") : `<div class="small dim" style="margin-top:6px">No friends yet. Share your code above, or add theirs.</div>`}</div>
      ${d.outgoing.length ? `<div class="card"><b>Sent requests</b>${d.outgoing.map((f) => `<div class="frow">
          <div class="grow">${esc(f.name)} <span class="small dim">· waiting</span></div>
          <button class="btn sec sm" data-act="removeFriend" data-id="${esc(f.id)}">Cancel</button></div>`).join("")}</div>` : ""}`;
  },

  friend() {
    const f = findFriend(ON.friendId);
    if (!f) { UI.screen = "friends"; return SCREENS.friends(); }
    const p = f.profile || {};
    return `<div class="row spread"><button class="btn sec sm" data-act="go" data-to="friends">‹ Friends</button>
        <button class="btn sec sm" data-act="askRemoveFriend">Remove</button></div>
      <div class="card col friendcard" style="background-image:linear-gradient(180deg,#120e1a40,#120e1af0 70%),${sceneUrl(Math.min(9, Math.floor((p.cleared || 0) / STAGES_PER_CHAPTER)))}">
        <h2>${esc(f.name)}</h2><div class="small dim">${ago(f.seen)} · code ${esc(f.code)}</div>
        <div class="fteam">${profileHeroes(p, true) || `<span class="small dim">No team shared yet</span>`}</div>
      </div>
      <div class="card stat-grid">
        <div><span>🗺️ Campaign</span><b>${(p.cleared || 0) >= TOTAL_STAGES ? "Complete" : stageLabel(Math.min(p.cleared || 0, TOTAL_STAGES - 1))}</b></div>
        <div><span>⚔️ Team power</span><b>${fmt(p.power || 0)}</b></div>
        <div><span>🗿 Titan best</span><b>${fmt(p.titanBest || 0)}</b></div>
        <div><span>🧙 Heroes</span><b>${Number(p.heroCount) || 0}</b></div>
      </div>
      <button class="btn" data-act="openChat">💬 Message ${esc(f.name)}${f.unread ? ` (${f.unread} new)` : ""}</button>`;
  },

  chat() {
    const f = findFriend(ON.friendId);
    if (!f) { UI.screen = "friends"; return SCREENS.friends(); }
    return `<div class="chatwrap">
      <div class="row" style="gap:10px"><button class="btn sec sm" data-act="closeChat">‹</button>
        <div class="grow"><b>${esc(f.name)}</b><div class="small dim">${ago(f.seen)}</div></div></div>
      <div id="chatlog" class="chatlog">${chatHtml()}</div>
      <form class="chatbar" id="chatform"><input id="chatinput" class="inp grow" maxlength="300" placeholder="Message" autocomplete="off" enterkeyhint="send">
        <button class="btn" type="submit">Send</button></form></div>`;
  },
});

function chatHtml() {
  const msgs = ON.chat.msgs;
  if (!msgs.length) return `<div class="small dim" style="text-align:center;margin:auto">Say hi! 👋</div>`;
  let lastDay = "";
  return msgs.map((m) => {
    const d = new Date(m.created);
    const day = d.toDateString();
    const sep = day !== lastDay ? `<div class="cday">${d.toLocaleDateString(undefined, { month: "short", day: "numeric" })}</div>` : "";
    lastDay = day;
    return `${sep}<div class="bubble ${m.mine ? "mine" : ""}${m.pending ? " pending" : ""}">${esc(m.body)}<span class="btime">${d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })}</span></div>`;
  }).join("");
}
function paintChat(scroll) {
  const log = document.getElementById("chatlog");
  if (!log) return;
  const nearBottom = log.scrollHeight - log.scrollTop - log.clientHeight < 80;
  log.innerHTML = chatHtml();
  if (scroll || nearBottom) log.scrollTop = log.scrollHeight;
}
async function pollChat() {
  const c = ON.chat;
  if (UI.screen !== "chat" || !c.with) return;
  try {
    const r = await api(`messages?with=${encodeURIComponent(c.with)}&after=${c.last}`);
    if (r.messages.length) {
      c.msgs = c.msgs.filter((m) => !m.pending).concat(r.messages).concat(c.msgs.filter((m) => m.pending));
      c.last = r.messages[r.messages.length - 1].id;
      paintChat(false);
    }
  } catch (e) { if (e.status === 403) { toast(esc(e.message)); stopChat(); UI.screen = "friends"; render(); } }
}
function stopChat() { clearInterval(ON.chat.timer); ON.chat.timer = null; }

Object.assign(ACTIONS, {
  retryOnline() { ON.available = null; },
  async registerOnline() {
    const name = document.getElementById("sbname").value.trim();
    if (name.length < 2) return toast("Pick a name with at least 2 characters.");
    try {
      const r = await api("register", { method: "POST", body: { name, profile: myProfile() } });
      ON.cfg = { token: r.token, ...r.me }; saveOnline();
      G.playerName = name; save();
      toast(`Profile created. Your friend code is ${esc(r.me.code)}`);
      await refreshFriends();
    } catch (e) { toast(esc(e.message)); }
  },
  refreshFriends() { refreshFriends(); },
  copyCode() {
    const code = ON.data && ON.data.me.code;
    try { navigator.clipboard.writeText(code).then(() => toast("Friend code copied"), () => toast(`Your code: ${esc(code)}`)); }
    catch (_) { toast(`Your code: ${esc(code)}`); }
  },
  async addFriend() {
    const code = document.getElementById("addcode").value.trim();
    if (!code) return toast("Enter your friend's code first.");
    try {
      const r = await api("friends/add", { method: "POST", body: { code } });
      toast(r.accepted ? `You and ${esc(r.name)} are now friends!` : `Friend request sent to ${esc(r.name)}`);
      document.getElementById("addcode").value = "";
      document.activeElement && document.activeElement.blur();
      await refreshFriends();
    } catch (e) { toast(esc(e.message)); }
  },
  async respondFriend(d) {
    try { await api("friends/respond", { method: "POST", body: { id: d.id, accept: d.accept === "1" } }); await refreshFriends(); }
    catch (e) { toast(esc(e.message)); }
  },
  async removeFriend(d) {
    try { await api("friends/remove", { method: "POST", body: { id: d.id } }); closeModal(); UI.screen = "friends"; await refreshFriends(); }
    catch (e) { toast(esc(e.message)); }
  },
  askRemoveFriend() {
    const f = findFriend(ON.friendId);
    modal(`<h3>Remove ${esc(f.name)}?</h3><p class="small dim">You'll stop being friends and your chat history with them is deleted for both of you.</p>
      <div class="row"><button class="btn sec grow" data-act="closeModal">Cancel</button>
      <button class="btn red grow" data-act="removeFriend" data-id="${esc(f.id)}">Remove</button></div>`);
  },
  openFriend(d) { ON.friendId = d.id; UI.screen = "friend"; window.scrollTo(0, 0); },
  openChat() {
    const c = ON.chat;
    if (c.with !== ON.friendId) { c.with = ON.friendId; c.msgs = []; c.last = 0; }
    UI.screen = "chat";
    setTimeout(() => { paintChat(true); pollChat(); }, 0);
    stopChat(); c.timer = setInterval(pollChat, 4000);
  },
  closeChat() { stopChat(); UI.screen = "friend"; refreshFriends(false); },
});

// Send from the chat form (Enter key or the Send button).
document.addEventListener("submit", async (e) => {
  if (e.target.id !== "chatform") return;
  e.preventDefault();
  const input = document.getElementById("chatinput");
  const text = input.value.trim();
  if (!text) return;
  input.value = "";
  const c = ON.chat;
  const temp = { id: -Date.now(), body: text, mine: true, created: Date.now(), pending: true };
  c.msgs.push(temp); paintChat(true);
  try {
    await api("messages", { method: "POST", body: { to: c.with, body: text } });
    c.msgs = c.msgs.filter((m) => m !== temp);
    await pollChat();
  } catch (err) {
    c.msgs = c.msgs.filter((m) => m !== temp); paintChat(false);
    input.value = text;
    toast(esc(err.message));
  }
});

// Leaving the chat screen by any route stops polling.
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-act=go]");
  if (el) stopChat();
}, true);

// Background: unread badge + profile sync.
async function pollUnread() {
  if (!ON.cfg || document.hidden) return;
  try {
    const u = await api("unread");
    const changed = u.messages !== ON.unread.messages || u.requests !== ON.unread.requests;
    ON.unread = u;
    if (changed && !B && !isTyping() && UI.screen !== "chat") {
      if (["friends", "friend"].includes(UI.screen)) refreshFriends(); else render();
    }
  } catch (_) { /* offline: try again later */ }
  pushProfile();
}
setInterval(pollUnread, 30000);
setTimeout(pollUnread, 1500);
render();
