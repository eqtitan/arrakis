# Sigilbound: Unity 3D version

A Unity 6 port of the web game in `public/game/`. It has the same heroes, rules and
numbers, rendered in 3D. Unity builds the native Android and iOS apps from this one project.

## What's here

| Path | What it is |
|---|---|
| `Assets/Sigilbound/Core/` | Game rules in plain C# (no Unity code): heroes, skills, battles, progression, saves. Compiled and tested outside Unity by `Tests~/`. |
| `Assets/Sigilbound/Client/` | Everything you see: 3D arena, characters, effects, battle HUD and menus. All of it is built in code at startup, so the project needs no hand-made scenes or prefabs. |
| `Assets/Sigilbound/Editor/` | One-time project setup (scene, portrait mode, Android 64-bit) and a command-line build script. |
| `Assets/Resources/Heroes/` | Drop real 3D hero models here to replace the placeholders (see the README inside). |
| `Tests~/` | .NET console checks for the core (Unity ignores folders ending in `~`). |

## Run it

1. Install **Unity Hub** (free) from unity.com and sign in. A free Personal license is fine.
2. In Unity Hub → *Installs*, add **Unity 6 (LTS)** with the **Android Build Support** module.
   Include its OpenJDK and Android SDK/NDK. On a Mac, also add **iOS Build Support**.
3. Unity Hub → *Projects* → *Add* → choose this `unity/` folder.
   If Unity Hub offers a different 6000.x version than `ProjectVersion.txt`, accept it.
4. When it opens, the setup script creates `Assets/Scenes/Main.unity`.
   Open that scene and press **Play**.
5. In the Game view, pick a portrait phone size (for example 1080×2400) so the layout matches a phone.

## Build for a phone

- **Android:** *File → Build Profiles → Android → Switch Platform → Build*.
  Copy the `.apk` to an Android phone and open it, after allowing installs from that source.
  Or plug the phone in with USB debugging on and use *Build And Run*.
- **iPhone:** needs a Mac with Xcode and an Apple Developer account.
  *Build Profiles → iOS → Build* produces an Xcode project. Open it, sign it, and run on a device or upload to TestFlight.
- **CI (optional):** the `Sigilbound Unity` GitHub workflow runs the core tests on every push.
  It can also build an Android APK when started by hand, once you add `UNITY_EMAIL`,
  `UNITY_PASSWORD` and `UNITY_LICENSE` repository secrets (see game-ci's activation docs).

## Status

- **Done:**
  - The full game loop: intro, home with daily login and quests, campaign, team prep, heroes (training, rank-up, gear), summon, Titan.
  - 3D turn-meter battles with manual targeting, auto, 1–3× speed and auto-replay.
- **Placeholder art:** heroes are built from Unity's basic shapes in each hero's colours, with code-driven idle, attack, cast, hit and death animations.
- **Not yet in the Unity version:** friends and chat (the server is ready, at `functions/api/sb`), save codes, and sound.
- **Separate saves:** progress is stored per device and doesn't carry over from the web version.

Check the core without Unity: `dotnet run --project unity/Tests~` (needs the .NET 8 SDK).
