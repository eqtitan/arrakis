#!/usr/bin/env node
// Bump the Sigilbound version (semantic versioning) and add a changelog entry.
//   node tools/sigilbound-version.cjs patch "Fixed the summon button"
//   node tools/sigilbound-version.cjs minor "Added friends and chat"
//   node tools/sigilbound-version.cjs major "1.0 launch"
// patch = fixes and tuning · minor = new features · major = big milestones / save-breaking changes.
// Updates public/game/version.js, mobile/package.json and docs/sigilbound/CHANGELOG.md.
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const [kind, ...msgParts] = process.argv.slice(2);
const message = msgParts.join(" ").trim();
if (!["major", "minor", "patch"].includes(kind) || !message) {
  console.error('Usage: node tools/sigilbound-version.cjs <major|minor|patch> "What changed"');
  process.exit(1);
}
const vFile = path.join(root, "public/game/version.js");
const src = fs.readFileSync(vFile, "utf8");
const m = src.match(/version: "(\d+)\.(\d+)\.(\d+)"/);
if (!m) { console.error("Couldn't find the version in public/game/version.js"); process.exit(1); }
let [maj, min, pat] = m.slice(1).map(Number);
if (kind === "major") { maj++; min = 0; pat = 0; } else if (kind === "minor") { min++; pat = 0; } else pat++;
const next = `${maj}.${min}.${pat}`;
fs.writeFileSync(vFile, src.replace(m[0], `version: "${next}"`));

const pkgFile = path.join(root, "mobile/package.json");
const pkg = JSON.parse(fs.readFileSync(pkgFile, "utf8"));
pkg.version = next;
fs.writeFileSync(pkgFile, JSON.stringify(pkg, null, 2) + "\n");

const logFile = path.join(root, "docs/sigilbound/CHANGELOG.md");
const log = fs.readFileSync(logFile, "utf8");
const date = new Date().toISOString().slice(0, 10);
const entry = `## ${next} (${date})\n- ${message}\n\n`;
const marker = "<!-- new versions go below this line -->\n";
fs.writeFileSync(logFile, log.includes(marker) ? log.replace(marker, marker + "\n" + entry) : log + "\n" + entry);
console.log(`Sigilbound ${m[1]}.${m[2]}.${m[3]} -> ${next}. Commit and push to build the new APK.`);
