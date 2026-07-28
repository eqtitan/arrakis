#!/usr/bin/env node
// Reads the local RSL Helper SQLite database (populated by RSL Helper while
// it runs alongside Raid: Shadow Legends) and prints an Arrakis roster JSON
// to stdout. This is the "near real-time" sync path: re-run this any time
// you want to refresh, then paste the output into Arrakis's import box.
//
// Requires Node 22+ (uses the built-in node:sqlite module) and RSL Helper
// (https://rslhelper.com/) installed and having synced at least once.
//
// Usage:
//   node tools/rslhelper-export.mjs > roster.json
//   node tools/rslhelper-export.mjs --champions ../data/champions.json > roster.json

import { DatabaseSync } from "node:sqlite";
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function findDbPath() {
  const configDir = join(
    process.env.APPDATA ?? "",
    "RslHelper",
    "Config",
  );
  let entries;
  try {
    entries = readdirSync(configDir, { withFileTypes: true });
  } catch {
    throw new Error(`RSL Helper config folder not found at ${configDir}. Is RSL Helper installed?`);
  }
  const dbFiles = entries
    .filter((e) => e.isFile() && /_RSLHelper\.db$/i.test(e.name))
    .map((e) => join(configDir, e.name));
  if (dbFiles.length === 0) {
    throw new Error(`No *_RSLHelper.db file found in ${configDir}. Run RSL Helper and let it sync at least once.`);
  }
  return dbFiles[0];
}

function normalizeName(name) {
  return name.trim().toLowerCase();
}

function loadChampionsIndex(path) {
  const raw = JSON.parse(readFileSync(path, "utf-8"));
  const byName = new Map();
  for (const champion of raw) byName.set(normalizeName(champion.name), champion.id);
  return byName;
}

function main() {
  const args = process.argv.slice(2);
  const flagIndex = args.indexOf("--champions");
  const championsPath =
    flagIndex >= 0 && args[flagIndex + 1]
      ? args[flagIndex + 1]
      : join(__dirname, "..", "data", "champions.json");

  const championIdByName = loadChampionsIndex(championsPath);
  const dbPath = findDbPath();
  const db = new DatabaseSync(dbPath, { readOnly: true });

  const rows = db.prepare(
    "SELECT Name, Rang, Lvl, HP, DEF, ACC, RES, SPD, CritDamage FROM Champs",
  ).all();

  // Players often hold multiple un-fused copies of the same champion (fusion
  // fodder). Only the strongest copy is ever team-worthy, so dedupe by
  // championId, keeping the highest (stars, level, speed) copy.
  const bestByChampionId = new Map();
  const unmatchedNames = new Set();

  for (const row of rows) {
    const championId = championIdByName.get(normalizeName(row.Name));
    if (!championId) {
      unmatchedNames.add(row.Name);
      continue;
    }
    const existing = bestByChampionId.get(championId);
    const isBetter =
      !existing ||
      row.Rang > existing.Rang ||
      (row.Rang === existing.Rang && row.Lvl > existing.Lvl) ||
      (row.Rang === existing.Rang && row.Lvl === existing.Lvl && row.SPD > existing.SPD);
    if (isBetter) bestByChampionId.set(championId, row);
  }

  const roster = [...bestByChampionId.entries()].map(([championId, row]) => ({
    championId,
    stars: row.Rang,
    level: row.Lvl,
    stats: {
      speed: row.SPD,
      hp: row.HP,
      def: row.DEF,
      accuracy: row.ACC,
      resistance: row.RES,
      critDamage: row.CritDamage,
    },
  }));

  process.stdout.write(JSON.stringify(roster, null, 2) + "\n");
  process.stderr.write(
    `Matched ${roster.length} unique champion(s) (from ${rows.length} owned copies) against ${championsPath}. ` +
      `${unmatchedNames.size} owned champion(s) aren't in Arrakis's tagged dataset yet and were skipped.\n`,
  );
}

main();
