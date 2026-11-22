# Sigilbound roadmap

Owned by the **pmo** agent (`.claude/agents/pmo.md`). Status of the project, what's next,
what's blocked, and decisions made. Update it whenever work lands or plans change.

_Last updated: 2026-11-22._

## Where things stand

> **Real-device check (2026-11-22):** v0.15.0 on the owner's Galaxy S26+ runs very smoothly, even at 3x speed, with Graphics quality on Auto.

| Area | Status | Notes |
|---|---|---|
| Web game (`public/game/`) | ✅ Playable | 24 heroes, campaign, Titan, gear, summoning, daily quests. Fully free, with no shop. |
| 3D battles | ✅ Playable | Rigged CC0 models with per-hero builds, code-built kit and visible gear; 2D fallback toggle on Home. |
| Android app (`mobile/`) | ✅ Tested on a real phone | Debug APK built on every push: [download](https://github.com/eqtitan/arrakis/releases/download/android-latest/Sigilbound.apk). |
| iOS app (`mobile/`) | 🟡 Compiles in CI | Needs an Apple Developer account for TestFlight. |
| Friends & chat | 🟡 Built, not live | Needs the D1 database and a merge to `master`. |
| Balance | ✅ Tuned | Progression sim in `tools/sigilbound-balance-sim.cjs`. |
| Unity version (`unity/`) | 🟡 Phase 1 built, not yet run | Native parallel build on branch `unity-native`: rules/data and save codes match web v0.19.2 (tested against the web code), glTFast CC0 heroes, URP, Trials, settings. APKs go to `unity-latest` once the `UNITY_EMAIL` / `UNITY_PASSWORD` secrets exist (see `unity/README.md`). |
| Hero card art | ⏳ Not started | Prompts ready in `ART_DIRECTION.md`. |

## Blockers (waiting on the owner)

1. **Cloudflare D1 database ID**, so friends and chat can go live. Create it at *Storage & Databases → D1 → Create* (name `sigilbound`) and paste the ID.
2. **Merge PR #1 to `master`**, which puts the friends server at the address the apps use.
3. **Apple Developer account** ($99/year), only needed for iPhone and TestFlight.
3b. **Unity build secrets** (free): a dedicated Unity account's `UNITY_EMAIL` and `UNITY_PASSWORD` as repository secrets, so CI can build the Unity APK. Steps in `unity/README.md`.
4. **Google Play Console** ($25 once), only needed to publish on the Play Store.

## Next up (priority order)

1. **Hero card art.** ~~Cards~~ now show faces photographed from the 3D models (0.12.0), and the detail page shows the live 3D hero (0.13.0). Painted illustrations are optional: if the owner sends images, they go in `ART_FILES` and replace the 3D faces. *Owner: you (images, optional) + art-director.*
2. **3D hero polish (follow-ups from the 0.10.0 art pass).**
   - ~~**Color pipeline**~~ fixed in 0.11.0.
   - ~~**Light heroes**~~ given distinct palettes in 0.11.1.
   - ~~**Hask, Brannoc and Odo** beige~~, ~~**Ysolde's whip**~~, ~~**Velka's staff**~~, ~~**rigid capes**~~ and ~~**the Titan's grin**~~: fixed in the hero art pass. All 24 heroes now have their own build, with borrowed parts, proportions and hair, plus their own kit and palette (table in `ART_DIRECTION.md`).
   - ~~**Equipped gear changes the 3D model**~~: helm, chest, boots and weapon show by rarity and set, in battle and in the hero viewer.
   - ~~**Draw calls**~~: kit and body merged into a few skinned meshes, about 14.5 calls per unit in battle (was about 85).
   - ~~**Note20 pass**~~: arenas with real ground and props, a portrait camera fit, allies turned toward the camera, choreographed attacks (run-in, strike combos, casts with spell circles, rolls, hit-stop, A3 zoom, victory wave, Titan slam), spring physics on cloth and hair, bloom and adaptive quality tiers.
   - Next: robes that follow the legs, a Graphics setting row in Settings (`W3D.setQuality`), per-hero unique attack poses, and real-device fps checks on a Note20.

   *Owner: art-director.*
3. **Friends & chat live.** Unblocked by blockers 1 and 2. *Owner: engineering.*
4. ~~**Sound & music.**~~ Shipped in 0.7.0, with volume sliders in 0.8.0. The in-app update banner works without a restart as of 0.13.1.
5. **Play Store release build.** A release signing key in GitHub secrets, an AAB build, and the store listing. *Owner: pmo (checklist) + engineering.*
6. **TestFlight.** Once there's an Apple account: signing secrets and an upload step in the workflow. *Owner: engineering.*

## Backlog
- Arena (player vs. player teams) using the friends server.
- Hero voice lines and skill animations unique per hero.
- Accessibility pass: text size, colorblind-safe element markers.

## Release checklist (each APK build)
- [ ] Version bumped if this is a release you'll share (`node tools/sigilbound-version.cjs ...`), changelog entry written.
- [ ] CI green: core tests, Android, iOS, Cloudflare Pages.
- [ ] Smoke test: starter pick, summon, manual and auto battle, Titan, save and reload.
- [ ] 3D screenshots reviewed (art-director checklist).
- [ ] Install over the previous APK on a real phone and confirm progress is kept.
- [ ] Note the changes in the release notes.

## Decisions log
- **2026-11-22:** Focus is the Android app (APK). The web build stays as the shared code base and as the app's engine, but new work is checked and released through the APK.
- **2026-11-22:** Fully free to play, with no shop or paid currency.
- **2026-11-22:** Native apps built by wrapping the web game with Capacitor, so no computer is needed. The Unity port is parked.
- **2026-11-22:** Unity port resumed in parallel (separate app id `com.sigilbound.unity`, release `unity-latest`); the web app keeps shipping until Unity is clearly better on the S26+ and Note20.
- **2026-11-22:** 3D heroes use CC0 Quaternius models recolored per hero. Every asset must be CC0 or owned, with provenance recorded in `models/CREDITS.md`.
- **2026-11-22:** Hero card art will be AI-generated by the owner from shared prompts, or commissioned.
