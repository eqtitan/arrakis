# Arrakis

Clan Boss team optimizer for Raid: Shadow Legends — pick the best team from
your *actual* roster, not a generic tier list.

## Status

- **Clan Boss only** for v1 (Arena, Dungeons, Doom Tower, and Hydra are
  natural follow-ups once this is proven out).
- Ships with a small, hand-curated seed dataset (`data/champions.json`,
  `data/templates.json`) — not a copy of any single third-party database.
  No well-maintained, clearly-licensed open dataset with full champion
  skills/stats exists (see below), so the champion tag set is intentionally
  narrow (just what Clan Boss synergy scoring needs) and meant to grow.

## Stack

- **Frontend:** Vite + TypeScript (vanilla, no framework), all synergy
  scoring runs client-side for real-time recompute as you edit your roster.
- **Backend:** Cloudflare Pages Functions, serving the static champion/
  template JSON (`/api/champions`, `/api/templates`).
- **Hosting:** Cloudflare Pages free tier — one URL, reachable from any
  device.
- **Roster storage:** browser `localStorage` for v1 (no account system).

## Running locally

Requires Node.js 22+ (uses the built-in `node:sqlite` module for the RSL
Helper import script).

```
npm install

# Terminal 1: backend functions (Cloudflare Pages Functions emulator, port 8789)
npm run pages:dev

# Terminal 2: frontend dev server (port 5174, proxies /api to 8789)
npm run dev
```

## Syncing your roster

### Manual

Search and add champions one at a time from the picker; edit stars, level,
and gear stats (Speed/HP/DEF/ACC/RES/C.DMG) inline. Saved to `localStorage`
automatically.

### Near real-time via RSL Helper

If you run [RSL Helper](https://rslhelper.com/) alongside the game, it
keeps a local SQLite database of your full roster up to date while you
play. Refresh your Arrakis roster any time with:

```
node tools/rslhelper-export.mjs > roster.json
```

Then paste `roster.json`'s contents into the "Import roster" box in the
app. The script matches RSL Helper's champion names against
`data/champions.json` by name and reports how many matched — champions not
yet in Arrakis's tagged dataset are skipped (that's most of your roster
today; the seed set is intentionally small and grows over time).

A true live sync (no manual re-run) would mean a small companion process
that watches the RSL Helper database for changes and pushes updates
automatically — a reasonable v2, not built here.

## Data sources considered

No open, well-maintained, clearly-licensed dataset with full champion
skills/stats was found:

- [`Goctionni/raid-data`](https://github.com/Goctionni/raid-data) —
  classification only (rarity/affinity/faction/role), no license, "Update
  Champions" still on its own TODO.
- [`PatPat1567/RaidShadowLegendsData`](https://github.com/PatPat1567/RaidShadowLegendsData) —
  same limitations.
- [`alotama/shadow-legends-api`](https://github.com/alotama/shadow-legends-api) —
  early-stage, hosted on a since-deprecated Heroku free tier.
- [`zerfl/StaticRaidExtraction`](https://github.com/zerfl/StaticRaidExtraction) —
  requires running an extractor against your own game install; no hosted
  output.
- [Raid Toolkit](https://github.com/raid-toolkit) (`extractor`,
  `raid-toolkit-sdk`) — open source and actively used by HellHades-style
  tools, but its exact export schema wasn't verified against a real export
  in this project. RSL Helper's local SQLite database (verified directly
  against a real account) was used instead.

## Project layout

```
index.html               entry HTML
src/                      frontend (Vite)
  main.ts                 wires roster, templates, and results together
  lib/                     data fetching, localStorage, roster import parsing
  ui/                      champion picker, roster editor, template gallery, results panel
shared/                   types + synergy scoring engine, shared by frontend and Functions
  types.ts
  synergy.ts               Clan Boss team scoring (Poison/HP Burn/Nuke/Debuff/Unkillable)
  synergy.test.ts
data/                     curated seed data
  champions.json
  templates.json
functions/api/            Cloudflare Pages Functions (serve the JSON data)
tools/
  rslhelper-export.mjs     reads RSL Helper's local SQLite DB, outputs roster.json
```
