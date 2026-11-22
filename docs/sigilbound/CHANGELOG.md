# Sigilbound changelog

Versions follow **major.minor.patch**:
- **patch:** fixes and tuning.
- **minor:** new features.
- **major:** milestones or changes that need a save migration.

Every Android build also gets a **build number**, GitHub's run counter. It always goes up, so
any newer APK installs over an older one. The Home screen shows both, for example
`v0.6.0 · build 12 · abc1234`.

Bump with `node tools/sigilbound-version.cjs <major|minor|patch> "What changed"`.

<!-- new versions go below this line -->

## 0.8.0 (2026-11-22)
- Settings screen (gear button in the top bar and battle header): Music and Sound effects volume sliders (0 = off) that apply instantly, plus battle graphics, save code, how to play and reset.


## 0.7.0 (2026-11-22)
- Sound and music: CC0 battle theme, hit/crit/heal/buff/knockout sounds, swing and spell sounds, victory and summon fanfares, coin sounds for rewards. Sound and Music on/off buttons on Home.


## 0.6.2 (2026-11-22)
- Battle visuals: heroes turned side-on so faces show, softer textured ground, trees no longer float above their trunks.


## 0.6.1 (2026-11-22)
- Android test builds are now signed with one permanent key, so updates install over the old app and keep your progress. Earlier builds each had a random key, which forced an uninstall and lost data.

## 0.6.0 (2026-11-22)
- Rigged, animated 3D hero models (CC0, Quaternius), recolored per hero, with idle, attack, cast, hit and death animations. Hollow enemies and a stone Titan.
- Versioning: version and build number shown on the Home screen and in release names.
- Update check: the Android app shows an "Update available" banner with a download button when a newer build is published.
- Android builds: retries for rate-limited downloads, and a download link that can't break mid-update.

## 0.5.0 (2026-11-22)
- Android and iOS apps (Capacitor), with an APK on every push. Native saves, haptics and back button.
- 3D battles (Three.js) with a 2D fallback toggle.
- Chat moderation: report, block, account deletion, word filter.

## 0.4.0 (2026-11-22)
- Friends and 1-on-1 chat (Cloudflare D1 server). Save codes. Full-body animated 2D sprites.

## 0.3.0 (2026-11-22)
- 2D art pass: illustrated vector hero portraits, chapter backdrops, battle effects, summon portal.

## 0.2.0 (2026-11-22)
- Campaign difficulty rebalanced with a progression simulation.

## 0.1.0 (2026-11-22)
- First playable: 24 heroes, turn-meter battles, 60-stage campaign, Titan, gear, summoning, daily quests. Fully free.
