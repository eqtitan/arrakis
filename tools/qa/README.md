# Sigilbound 3D QA harness

Headless checks for the hero models in `public/game` (W3D / Three.js). Both scripts:

- rebuild `public/game/three3d.js` with `npm run build:game3d` when `game3d/three3d.mjs` is newer
  (up to 5 tries a minute apart, in case someone is mid-edit; `--no-build` or `QA_NO_BUILD=1` skips this)
- serve `public/game` with `python3 -m http.server 8792` (they reuse a server already on the port; `QA_PORT` changes it)
- run Playwright Chromium with SwiftShader WebGL and a fresh save: pick Ysolde, close the welcome modal, wait for `W3D.modelsReady`
- write their output to `QA_OUT` (default: the session scratchpad `qa/` folder)

Requirements: Node with `playwright` resolvable (preinstalled here), Chromium for Playwright, Python 3 with Pillow.

## Hero contact sheets

```sh
node tools/qa/hero-sheet.cjs                      # every hero in HEROES (about 3 min)
node tools/qa/hero-sheet.cjs --only=odo,ulfgar    # just these heroes
node tools/qa/hero-sheet.cjs --per-sheet=6        # heroes per PNG (default 8)
```

For each hero, the script opens the hero detail page, enlarges the live viewer to 240×360 CSS px at
2× scale on a neutral background, and turns the hero by dragging the canvas: the viewer starts at yaw
-0.35, and each pixel dragged turns it 0.012 rad. It takes front (0), 3/4 (-0.8) and back (π) views at three gear
levels: none, rarity 3 `bulwark`, and rarity 5 `fury`. Gear is equipped on the hero in `G`. If
`W3D.showcase` takes a 4th `gear` argument, it is also called directly with
`{weapon,helm,chest,boots: {r, s, rarity, set, slot}}`. If it doesn't, the sheet title says so.

Output: `hero-sheet-N.png` (labelled contact sheets), `hero-sheet.json` (per-hero draw calls and
triangles in the viewer for each gear level, plus shot paths) and `shots/<id>_<gear>_<view>.png`
(full-resolution shots).

## Performance probe

```sh
node tools/qa/perf.cjs                    # stage 0, team ysolde,pell,odo,brannoc,mira, all in r5 fury gear
node tools/qa/perf.cjs --stage=auto       # first stage with the biggest opening wave
node tools/qa/perf.cjs --gear=none --team=ulfgar,seraphine,odo,hask,aurelia --secs=5 --no-sweep
```

An init script wraps `drawElements`/`drawArrays` (and their instanced versions) on the WebGL
contexts. It counts calls and triangles for each animation frame, split by canvas class
(`.w3d-canvas` is the battle, `.show3d` is the hero viewer), and it times the rAF callbacks that issue
draws. That timing is W3D's render loop, measured as JS-side CPU time.

Reported, as JSON on stdout and in `perf.json`:

- `perHero`: the single-pass cost of each hero in the viewer, with no gear and with r5 gear. The aura
  disc is subtracted. Each row is checked against the budget (≤ 10 draw calls, ≤ 25k triangles per hero).
- `battle.perFrame`: draw calls and triangles per frame in a real battle. The figures include the
  shadow-map pass.
- `battle.sceneBaseline`: the same scene after `W3D.removeSide("A")` and `W3D.removeSide("B")`.
- `battle.perUnitInBattle`: (battle − baseline) / number of units. Shadows roughly double this
  compared with the viewer figures.
- `battle.fps`, `w3dFramesPerSec`, `w3dLoopCpuMs`. SwiftShader rasterises on the CPU, so FPS here
  is far below a phone's. The portable numbers are the draw-call and triangle counts.

`lib.cjs` holds the shared helpers (server, build, browser, boot, GL counter). `contact-sheet.py`
lays out the contact sheets with PIL.
