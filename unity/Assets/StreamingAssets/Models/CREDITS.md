# 3D model credits

All models in this folder are by **Quaternius** (https://quaternius.com), released under
**CC0 1.0** (public domain). Credit isn't required; we give it anyway.

| File | Original model page (lists Public Domain / CC0) |
|---|---|
| `hooded_adventurer.glb` | https://poly.pizza/m/y9KWOVG21R |
| `adventurer.glb` | https://poly.pizza/m/5EGWBMpuXq |
| `monarch.glb` | https://poly.pizza/m/I1gTjmuK2m |
| `yeti.glb` | https://poly.pizza/m/ceRHrn8HHE |

These copies are mesh-optimized (meshopt compression), taken from the CC0 npm package
`@netforge/asset-library-files` 0.2.0. Its NOTICE traces each file to the Quaternius
upload above. The game recolors the models in code for each hero.

CC0 1.0 legal code: https://creativecommons.org/publicdomain/zero/1.0/legalcode

## Animations: `anims_ual.json`

Seven clips (Spell_Simple_Enter / Shoot / Exit / Idle_Loop, Hit_Chest, Hit_Head, Death01) from
**Quaternius, Universal Animation Library (Standard / free tier)**, CC0 1.0.
Original pages: https://quaternius.com/packs/universalanimationlibrary.html and
https://quaternius.itch.io/universal-animation-library.

The source files came from a GitHub mirror that redistributes the free CC0 tier unmodified:
https://github.com/J-Ponzo/gltf-universal-animation-library (commit e24c23cf, 2025-06-10), with the
pack's CC0 LICENSE file. **Before a store release, re-download from quaternius.com or itch and
confirm the clips match.**

The clips are retargeted from the pack's Rigify (`DEF-*`) rig onto our character rig and baked to
JSON by `tools/anim-retarget` (rotations for 20 bones, plus hips and feet positions; 24 fps).
