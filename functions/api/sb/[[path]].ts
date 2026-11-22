// Sigilbound online API: lightweight accounts, friends and 1-on-1 messaging.
// Storage: a Cloudflare D1 database bound as SIGIL_DB (tables are created on first use).
//
// Auth: POST /register returns a random secret token once; the client keeps it and
// sends "Authorization: Bearer <token>". Only a SHA-256 hash of it is stored.

interface Env {
  SIGIL_DB?: D1Database;
}

type Player = { id: string; name: string; code: string; profile: string | null; seen: number };

const NAME_RE = /^[\p{L}\p{N} _.'-]{2,16}$/u;
const MAX_MSG = 300;
const MSG_PER_MINUTE = 20;
const MAX_FRIENDS = 100;

const SCHEMA = [
  `CREATE TABLE IF NOT EXISTS players (
     id TEXT PRIMARY KEY, name TEXT NOT NULL, code TEXT NOT NULL UNIQUE,
     token_hash TEXT NOT NULL UNIQUE, profile TEXT, created INTEGER NOT NULL, seen INTEGER NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS friends (
     a TEXT NOT NULL, b TEXT NOT NULL, status TEXT NOT NULL, requester TEXT NOT NULL,
     created INTEGER NOT NULL, PRIMARY KEY (a, b))`,
  `CREATE INDEX IF NOT EXISTS friends_b ON friends (b)`,
  `CREATE TABLE IF NOT EXISTS messages (
     id INTEGER PRIMARY KEY AUTOINCREMENT, sender TEXT NOT NULL, recipient TEXT NOT NULL,
     body TEXT NOT NULL, created INTEGER NOT NULL, read INTEGER NOT NULL DEFAULT 0)`,
  `CREATE INDEX IF NOT EXISTS messages_pair ON messages (recipient, sender, id)`,
  `CREATE INDEX IF NOT EXISTS messages_sender ON messages (sender, created)`,
];
let schemaReady = false;

function reply(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}
const fail = (status: number, error: string) => reply({ error }, status);

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
function randomString(len: number, alphabet: string): string {
  const bytes = crypto.getRandomValues(new Uint8Array(len));
  return [...bytes].map((b) => alphabet[b % alphabet.length]).join("");
}
const FRIEND_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"; // no look-alikes (0/O, 1/I/L)
const pair = (x: string, y: string): [string, string] => (x < y ? [x, y] : [y, x]);

// Only keep known, bounded fields from the client's self-reported profile.
function cleanProfile(raw: unknown): string {
  const p = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const int = (v: unknown, max: number) => Math.max(0, Math.min(max, Math.floor(Number(v) || 0)));
  const heroes = Array.isArray(p.heroes) ? p.heroes.slice(0, 4) : [];
  return JSON.stringify({
    cleared: int(p.cleared, 1000),
    power: int(p.power, 1e9),
    titanBest: int(p.titanBest, 1e12),
    heroCount: int(p.heroCount, 10000),
    heroes: heroes.map((h) => {
      const o = (h && typeof h === "object" ? h : {}) as Record<string, unknown>;
      return { id: String(o.id || "").replace(/[^a-z]/g, "").slice(0, 20), stars: int(o.stars, 6), level: int(o.level, 60) };
    }),
  });
}

async function auth(db: D1Database, req: Request): Promise<Player | null> {
  const h = req.headers.get("authorization") || "";
  const token = h.startsWith("Bearer ") ? h.slice(7).trim() : "";
  if (token.length < 20) return null;
  const me = await db.prepare("SELECT id, name, code, profile, seen FROM players WHERE token_hash = ?")
    .bind(await sha256(token)).first<Player>();
  if (me && Date.now() - me.seen > 60_000) {
    await db.prepare("UPDATE players SET seen = ? WHERE id = ?").bind(Date.now(), me.id).run();
  }
  return me;
}

async function body(req: Request): Promise<Record<string, unknown>> {
  try { return (await req.json()) as Record<string, unknown>; } catch { return {}; }
}

const publicPlayer = (p: Player) => ({
  id: p.id, name: p.name, code: p.code, seen: p.seen,
  profile: p.profile ? JSON.parse(p.profile) : null,
});

export const onRequest: PagesFunction<Env> = async ({ request, env, params }) => {
  const db = env.SIGIL_DB;
  if (!db) return fail(503, "Online features aren't set up on this server yet.");
  if (!schemaReady) {
    await db.batch(SCHEMA.map((s) => db.prepare(s)));
    schemaReady = true;
  }
  const path = (Array.isArray(params.path) ? params.path : [params.path]).filter(Boolean).join("/");
  const method = request.method;

  // ---- account creation (no auth) ----
  if (path === "register" && method === "POST") {
    const b = await body(request);
    const name = String(b.name || "").trim();
    if (!NAME_RE.test(name)) return fail(400, "Names are 2-16 letters, numbers or spaces.");
    const token = randomString(40, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
    const id = crypto.randomUUID();
    const now = Date.now();
    for (let attempt = 0; attempt < 5; attempt++) {
      const code = randomString(6, FRIEND_ALPHABET);
      try {
        await db.prepare("INSERT INTO players (id, name, code, token_hash, profile, created, seen) VALUES (?, ?, ?, ?, ?, ?, ?)")
          .bind(id, name, code, await sha256(token), cleanProfile(b.profile), now, now).run();
        return reply({ token, me: { id, name, code } });
      } catch (e) {
        if (!String(e).includes("UNIQUE")) throw e; // retry on friend-code collision
      }
    }
    return fail(500, "Couldn't create a friend code. Try again.");
  }

  const me = await auth(db, request);
  if (!me) return fail(401, "Not signed in.");

  if (path === "me" && method === "GET") return reply({ me: publicPlayer(me) });

  if (path === "profile" && method === "POST") {
    const b = await body(request);
    const updates: string[] = ["profile = ?"];
    const values: unknown[] = [cleanProfile(b.profile)];
    if (b.name !== undefined) {
      const name = String(b.name).trim();
      if (!NAME_RE.test(name)) return fail(400, "Names are 2-16 letters, numbers or spaces.");
      updates.push("name = ?"); values.push(name);
    }
    await db.prepare(`UPDATE players SET ${updates.join(", ")}, seen = ? WHERE id = ?`).bind(...values, Date.now(), me.id).run();
    return reply({ ok: true });
  }

  if (path === "friends" && method === "GET") {
    const rows = await db.prepare(
      `SELECT p.id, p.name, p.code, p.profile, p.seen, f.status, f.requester,
         (SELECT COUNT(*) FROM messages m WHERE m.recipient = ?1 AND m.sender = p.id AND m.read = 0) AS unread,
         (SELECT MAX(m.id) FROM messages m WHERE (m.sender = p.id AND m.recipient = ?1) OR (m.sender = ?1 AND m.recipient = p.id)) AS lastMsg
       FROM friends f JOIN players p ON p.id = CASE WHEN f.a = ?1 THEN f.b ELSE f.a END
       WHERE f.a = ?1 OR f.b = ?1`).bind(me.id).all<Player & { status: string; requester: string; unread: number; lastMsg: number | null }>();
    const friends = [], incoming = [], outgoing = [];
    for (const r of rows.results) {
      const pub = { ...publicPlayer(r), unread: r.unread, lastMsg: r.lastMsg || 0 };
      if (r.status === "accepted") friends.push(pub);
      else if (r.requester === me.id) outgoing.push(pub);
      else incoming.push(pub);
    }
    friends.sort((x, y) => y.lastMsg - x.lastMsg || y.seen - x.seen);
    return reply({ me: publicPlayer(me), friends, incoming, outgoing });
  }

  if (path === "friends/add" && method === "POST") {
    const code = String((await body(request)).code || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
    const other = await db.prepare("SELECT id, name, code, profile, seen FROM players WHERE code = ?").bind(code).first<Player>();
    if (!other) return fail(404, "No player has that friend code.");
    if (other.id === me.id) return fail(400, "That's your own code.");
    const count = await db.prepare("SELECT COUNT(*) AS n FROM friends WHERE a = ?1 OR b = ?1").bind(me.id).first<{ n: number }>();
    if ((count?.n || 0) >= MAX_FRIENDS) return fail(400, `You can have up to ${MAX_FRIENDS} friends.`);
    const [a, b] = pair(me.id, other.id);
    const existing = await db.prepare("SELECT status, requester FROM friends WHERE a = ? AND b = ?").bind(a, b).first<{ status: string; requester: string }>();
    if (existing?.status === "accepted") return fail(400, `You're already friends with ${other.name}.`);
    if (existing && existing.requester !== me.id) {
      // They already asked us: adding them back accepts.
      await db.prepare("UPDATE friends SET status = 'accepted' WHERE a = ? AND b = ?").bind(a, b).run();
      return reply({ ok: true, accepted: true, name: other.name });
    }
    if (existing) return fail(400, `Request already sent to ${other.name}.`);
    await db.prepare("INSERT INTO friends (a, b, status, requester, created) VALUES (?, ?, 'pending', ?, ?)").bind(a, b, me.id, Date.now()).run();
    return reply({ ok: true, name: other.name });
  }

  if (path === "friends/respond" && method === "POST") {
    const b = await body(request);
    const [x, y] = pair(me.id, String(b.id || ""));
    const row = await db.prepare("SELECT requester FROM friends WHERE a = ? AND b = ? AND status = 'pending'").bind(x, y).first<{ requester: string }>();
    if (!row || row.requester === me.id) return fail(404, "That request is no longer pending.");
    if (b.accept) await db.prepare("UPDATE friends SET status = 'accepted' WHERE a = ? AND b = ?").bind(x, y).run();
    else await db.prepare("DELETE FROM friends WHERE a = ? AND b = ?").bind(x, y).run();
    return reply({ ok: true });
  }

  if (path === "friends/remove" && method === "POST") {
    const other = String((await body(request)).id || "");
    const [x, y] = pair(me.id, other);
    await db.batch([
      db.prepare("DELETE FROM friends WHERE a = ? AND b = ?").bind(x, y),
      db.prepare("DELETE FROM messages WHERE (sender = ?1 AND recipient = ?2) OR (sender = ?2 AND recipient = ?1)").bind(me.id, other),
    ]);
    return reply({ ok: true });
  }

  if (path === "messages" && method === "GET") {
    const url = new URL(request.url);
    const other = url.searchParams.get("with") || "";
    const after = Number(url.searchParams.get("after") || 0);
    const [x, y] = pair(me.id, other);
    const f = await db.prepare("SELECT status FROM friends WHERE a = ? AND b = ?").bind(x, y).first<{ status: string }>();
    if (f?.status !== "accepted") return fail(403, "You can only message friends.");
    const rows = await db.prepare(
      `SELECT id, sender, body, created FROM messages
       WHERE id > ?3 AND ((sender = ?1 AND recipient = ?2) OR (sender = ?2 AND recipient = ?1))
       ORDER BY id DESC LIMIT 100`).bind(me.id, other, after).all<{ id: number; sender: string; body: string; created: number }>();
    await db.prepare("UPDATE messages SET read = 1 WHERE recipient = ? AND sender = ? AND read = 0").bind(me.id, other).run();
    return reply({ messages: rows.results.reverse().map((m) => ({ ...m, mine: m.sender === me.id })) });
  }

  if (path === "messages" && method === "POST") {
    const b = await body(request);
    const to = String(b.to || "");
    const text = String(b.body || "").replace(/[\u0000-\u0008\u000B-\u001F\u007F]/g, "").trim();
    if (!text) return fail(400, "Message is empty.");
    if (text.length > MAX_MSG) return fail(400, `Messages can be up to ${MAX_MSG} characters.`);
    const [x, y] = pair(me.id, to);
    const f = await db.prepare("SELECT status FROM friends WHERE a = ? AND b = ?").bind(x, y).first<{ status: string }>();
    if (f?.status !== "accepted") return fail(403, "You can only message friends.");
    const recent = await db.prepare("SELECT COUNT(*) AS n FROM messages WHERE sender = ? AND created > ?").bind(me.id, Date.now() - 60_000).first<{ n: number }>();
    if ((recent?.n || 0) >= MSG_PER_MINUTE) return fail(429, "You're sending messages too fast. Wait a moment.");
    const res = await db.prepare("INSERT INTO messages (sender, recipient, body, created) VALUES (?, ?, ?, ?)").bind(me.id, to, text, Date.now()).run();
    return reply({ ok: true, id: res.meta.last_row_id });
  }

  if (path === "unread" && method === "GET") {
    const r = await db.prepare(
      `SELECT (SELECT COUNT(*) FROM messages WHERE recipient = ?1 AND read = 0) AS messages,
              (SELECT COUNT(*) FROM friends WHERE (a = ?1 OR b = ?1) AND status = 'pending' AND requester != ?1) AS requests`)
      .bind(me.id).first<{ messages: number; requests: number }>();
    return reply(r || { messages: 0, requests: 0 });
  }

  return fail(404, "Unknown endpoint.");
};
