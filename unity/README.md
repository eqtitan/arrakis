# Sigilbound: native Unity version

A native Unity 6 build of the game in `public/game/`, made **in parallel** with the web app.
The web/Capacitor app keeps shipping; we switch when this one is clearly better (native speed,
cooler phones, higher-fidelity characters). Same heroes, rules and numbers as the web game
(v0.19.2), and it reads the web game's save codes, so progress carries over.

It installs as a **separate app**, "Sigilbound (Unity)" (`com.sigilbound.unity`), next to the
regular Sigilbound app, and downloads from its own release:
**https://github.com/eqtitan/arrakis/releases/tag/unity-latest**

## Phone builds: what the owner needs to do (once)

GitHub builds the APK for you, but Unity needs a (free) Unity account to run on GitHub's
computers. Everything below works from a phone browser.

### 1. Make a Unity account just for the builds

Use a separate free account, not your personal one (its password will live in GitHub).

1. Open **https://id.unity.com** and tap **Create a Unity ID**. Use an email address and a
   password (not "Sign in with Google/Apple": those accounts have no password the build can use).
2. Confirm the email Unity sends you.
3. Sign in once at **https://id.unity.com**, accept any terms it shows, and if asked, choose
   **Unity Personal** (free) for personal or hobby use.
4. Keep **two-step verification off** for this account (the build can't type in a code).

### 2. Add the account to GitHub as secrets

1. In your phone's browser (the GitHub app can't edit secrets), open
   **https://github.com/eqtitan/arrakis/settings/secrets/actions** and sign in.
   (The long way: the repository page → **Settings** → **Secrets and variables** → **Actions**.
   If you don't see Settings, use the browser menu's "Desktop site" option.)
2. Tap **New repository secret**, then add each of these (name exactly as written), tapping
   **Add secret** after each:

| Name | Value |
|---|---|
| `UNITY_EMAIL` | the build account's email address |
| `UNITY_PASSWORD` | the build account's password |

That's all. The next push that changes `unity/` builds an APK; or start one by hand:
**Actions** tab → **Sigilbound Unity** → **Run workflow** → task **build-apk** → **Run workflow**.
When it finishes (about 20–40 minutes the first time), the APK is on the
[unity-latest release](https://github.com/eqtitan/arrakis/releases/tag/unity-latest).

Without these secrets the tests still run, and the APK step is skipped with a note.

If a build fails at the license step, the log says why. "No available seats" means an earlier
run didn't hand its seat back (for example a cancelled run): wait an hour or sign in at
https://id.unity.com and remove the old activation, then run again. "Credentials rejected" means
a wrong email/password, two-step verification still on, or Unity emailed the account a new-device
check to confirm.

### 3. Only if the build says the license failed: the fallback

The build activates a free Personal license straight from the account (game-ci's
"personal" activation). If Unity ever refuses that, there's a fallback that creates a license
file for you:

1. **Actions** tab → **Sigilbound Unity** → **Run workflow** → task **get-license-file** → **Run workflow**.
2. When it finishes, open the run, download the **unity-license** file at the bottom (it's
   deleted after a day), open `Unity_lic.ulf` and copy all of its text.
3. Add it as a third secret named `UNITY_LICENSE` (same steps as above, paste the whole text).

Optional shortcut: if you also add a secret `GH_SECRETS_TOKEN` (a GitHub fine-grained token for
this repository with "Secrets: read and write" permission), the fallback saves `UNITY_LICENSE` by
itself. Unity has been restricting this manual route for free licenses, so it may not work;
account activation (step 2) is the main path.

Never put the password or license text in a file in the repository: secrets only.

### Installing and carrying progress over

1. On the phone, download `Sigilbound-Unity.apk` from the release and open it (allow installs
   from your browser if asked). Newer builds install over older ones and keep progress.
2. In the regular Sigilbound app: **Settings → Save code → Copy my save code**.
3. In Sigilbound (Unity): **≡ (Settings) → Save code → Paste → Load code**, check the preview, tap **Load**.

Save codes work both ways (Settings → Copy mine in the Unity app loads in the web game).

## What's here

| Path | What it is |
|---|---|
| `Assets/Sigilbound/Core/` | Game rules in plain C# (no Unity code): heroes, skills, battles, progression, Trials, promo codes, save codes, hero looks, battle layout. Tested outside Unity by `Tests~/`. |
| `Assets/Sigilbound/Client/` | Everything you see, built in code at startup (no scenes or prefabs to hand-make): 3D arena, glTFast hero models, effects, quality tiers, battle HUD, menus, friends & chat. |
| `Assets/Sigilbound/Editor/` | Project setup run before every build: scene, app id, URP pipeline and materials, Android settings; the command-line build script. |
| `Assets/StreamingAssets/Models/` | The web game's CC0 Quaternius models (meshopt decoded) and retargeted CC0 UAL clips, with `CREDITS.md`. Regenerate with `Tools~/models`. |
| `Tests~/` | Core tests (`dotnet run --project unity/Tests~`), web-parity fixtures, and the compile check (`CompileCheck/`). Unity ignores folders ending in `~`. |
| `Tools~/models/` | `prepare-models.mjs`: copies `public/game/models` into StreamingAssets, decoding meshopt. |
| `Tools~/shadercheck/` | Compiles every pass and variant of our `.shader` files with DXC against URP 17's ShaderLibrary (no Unity needed). |
| `Tools~/unity-refs/` | Fetches the real Unity 6000.0.58f1 managed assemblies from the game-ci editor image (no Docker, no license). |

## Checks without Unity (what CI runs)

```
dotnet run --project unity/Tests~                       # rules, web parity, save codes, Trials, looks, layout
dotnet build unity/Tests~/CompileCheck/Editor.csproj    # compiles Client + Editor code against Unity reference assemblies
node unity/Tests~/fixtures/make-fixtures.cjs            # regenerate parity fixtures from public/game/*.js
node unity/Tests~/fixtures/make-role-colors.mjs         # regenerate model colours with three.js (after `npm ci`)
node unity/Tests~/fixtures/make-kit-fixture.mjs         # re-run the web's buildKit() for the kit parity test (after `npm ci`)
node unity/Tests~/fixtures/make-hero-art.cjs            # regenerate Core/HeroArt.Generated.cs (kit, builds, faces)

# against the real Unity 6 assemblies (keeps ~50 MB of DLLs from the editor image):
python3 unity/Tools~/unity-refs/fetch_unity_refs.py /tmp/unity-managed
dotnet build unity/Tests~/CompileCheck/Editor.csproj -p:UnityManaged=/tmp/unity-managed -o /tmp/refs-out

# shaders (needs DXC and a sparse checkout of Unity-Technologies/Graphics 6000.0/staging; see the workflow):
python3 unity/Tools~/shadercheck/shadercheck.py unity/Assets/Sigilbound/Client/Shaders/SigilCharacter.shader <graphics> <dxc>
```

The compile check uses the `UnityEngine.Modules` reference assemblies from nuget.org (2021.3 API;
Unity 6 keeps these APIs) plus small hand-written stubs for UnityEditor, URP 17 and glTFast 6.14
in `Tests~/CompileCheck/Stubs`, with signatures copied from Unity's published C# source. CI then
compiles again against the real Unity 6000.0.58f1 engine and editor assemblies (URP and glTFast
still stubbed). It catches typos and wrong calls, but only a real Unity build proves the project
imports and runs.

## Status (Phase 3)

- **Rules and data** match web v0.19.2, checked against fixtures generated by the web code itself:
  all 24 heroes and every skill, gear and sets, stage curve and enemies, summon rates and pity,
  login and daily quests, Titan, Trials (Gilded Vault, Hall of Echoes, Sigil Forge: 10 floors,
  3 winning runs a day; Arena: 3 rivals, Bronze → Sigil, weekly rewards), promo codes.
- **Save codes**: SB1. codes from the web game load (and export back) field for field.
- **Heroes**: the web game's CC0 models built like the web: borrowed body parts, shaved/bald heads,
  proportions, LOOKS recolours (identical colours), and the full code-built kit from three3d.mjs
  (weapons, shields, helms, crowns, halos, hair pieces, faces, robes, belts, pauldrons, mantles,
  capes, wings, gear by rarity and set), checked part for part against the web's own buildKit()
  (77 builds, 4,625 parts, including the Titan's stone kit for all five elements). Live parts animate (flames, glows, capes, hair, wings). Clips include
  the retargeted CC0 UAL spell casts, hits and death; choreography follows the web (run-in strikes,
  casts, Titan slam, dodge rolls, victory). Placeholder figures remain the fallback.
- **Effects and arenas**: element skill VFX after vfx.mjs (cast circles, projectiles, beams,
  impacts, area floods, shockwaves, heals, buffs, shields, poison ticks, death fades, Titan slam,
  crit flash); arenas after scenery.mjs (ten chapter themes and the Titan caldera, water/lava,
  scatter, silhouettes, motes); URP bloom and per-arena colour grading from postfx2's presets.
- **Sound**: the web's CC0 effects and battle theme, with Music / Sound effects sliders.
- **UI**: Home, Campaign, Heroes, Summon, Trials (Titan, Dungeons, Arena), Settings, first-time
  tips, auto-replay summary, in the gilded dark-fantasy look.
- **Character look**: `Sigilbound/Character`, a hand-written URP shader after shading.mjs (wrap
  lighting, painterly ramp, rim in the element colour, cloth sheen) with materials.mjs's procedural
  detail textures (metal, hammered, leather, cloth, wood, stone, scale) generated in code, 128-512 px
  by tier, mapped triplanar on rest positions (the models have no UVs). The Titan is dark basalt
  with pulsing seams in the day's element. Falls back to URP Lit if the shader isn't supported.
- **Performance**: GPU skinning, static batching of the arena, VFX pools, shadow distance and
  cascades per tier; 60 fps (30 for Cooler, and on Low); on Android 10+ a warm phone (thermal
  status MODERATE or worse) drops to 30 fps and one tier with a toast, restored after two cool
  minutes. Settings > Performance overlay shows fps, frame time and draw calls.
- **Also**: 3D hero viewer on the hero screen (drag to spin, tap to attack), equipped gear on the
  menu lineup, soft contact shadows under every unit, light shafts on Ultra, scrolling Settings.
- **Not yet**: a real device run. Nothing has been built with Unity yet (the license secrets are
  unset), so shader import, frame rates and thermals are unmeasured.

## Open the project in Unity (optional, needs a computer)

Install Unity Hub and Unity 6000.0.58f1 with Android Build Support, add this `unity/` folder in
Unity Hub, open it, and press Play (the setup creates `Assets/Scenes/Main.unity` and the URP
assets). Run `Tools~/models` first if `Assets/StreamingAssets/Models` is empty.
