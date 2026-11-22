# Sigilbound art direction

Owned by the **art-director** agent (`.claude/agents/art-director.md`). This is the source of
truth for how Sigilbound looks: the style rules, how 3D models are assigned and recolored,
and a brief plus an image prompt for each of the 24 heroes.

## 1. Style pillars

1. **Original, always.** No characters, names, logos, layouts or art from other games. Don't
   prompt an image tool with another game's or artist's name.
2. **Readable at phone size.** Each hero must read at 70 px tall in battle and as a 60 px
   card. That takes a clear silhouette, one strong main color, one accent, and a prop that
   tells the role.
3. **Element first.** The element color (below) shows in the aura, glows, card background
   and rim light, so players see matchups at a glance.
4. **Rarity reads as finish.** Commons wear practical gear. Rares add trim. Epics get capes
   and ornament. Legendaries get crowns, halos or glowing effects. The palette stays the same.
5. **Enemies are "Hollow."** Corrupted copies of heroes: desaturated, purple-dark, with
   glowing red eyes. Never redesigned, so players recognize them.

### Element palette

| Element | Color | Feel |
|---|---|---|
| Flame | `#e8553a` | embers, forge, ash |
| Gale | `#3fb57a` | wind, reeds, storm |
| Tide | `#3a8ee8` | sea, ice, depths |
| Light | `#e8c23a` | dawn, bells, gold |
| Shadow | `#9a5ae8` | night, glass, void |

Rarity frame colors: Common `#9aa3ad`, Rare `#4aa3ff`, Epic `#b46cff`, Legendary `#ffb02e`.

## 2. 3D character pipeline (current)

- **Models:** rigged, animated CC0 characters by Quaternius in `public/game/models/`, with
  sources in `CREDITS.md`. Only use models whose original page states CC0 or public domain,
  and record the page URL in `CREDITS.md`.
- **Base per hero:** set in `BASE` in `game3d/three3d.mjs`. All three bases share one
  skeleton (same bone names; monarch and adventurer have an identical rest pose, the hooded one
  is within 2 cm at the head), so parts can be mixed.
  - `monarch`: plate armor, long hair and beard, optional crown.
  - `hooded`: hood over long hair, cloak with shoulder pads, optional sword.
  - `adventurer`: shirt and trousers, short hair and beard, backpack.
- **Per-hero build (`BODY` in `three3d.mjs`)**, applied right after cloning, so no two heroes
  on a base are recolours of each other:
  - `parts: { head|body|legs|feet: base | "none" }` borrows a skinned part from another base
    (for example Lumen wears the monarch breastplate on the adventurer body, Kettle has the
    monarch head on the hooded cloak). A `kit.robe: "long"` removes the legs automatically.
  - `hide: ["hood" | "hair" | "crown"]` hides material roles. The hooded head without its hood
    is a long-haired head, which is how most of the women get visible hair.
  - `shave` drops the beard, and `bald` keeps only the beard. The monarch and adventurer heads
    model hair and beard as one mesh, which `trimHair` splits by height in head space.
  - Proportions: `h` (height), `head` (head size), `bulk` ([chest width, height, depth]),
    `arms` and `legs` (limb thickness), `sh` (shoulders moved outward, in metres). Bones are
    scaled once (the animations only key rotations, plus translations on Body and the feet);
    child bones get the inverse scale so only that segment grows. Leg *length* is never
    scaled, because the feet are IK bones under Root.
- **Recolor:** colours come from each hero's `LOOKS` entry in `public/game/art.js`: armor,
  accent, hair, skin and glow, plus optional `cloth`, `pants`, `boot`, `trim` and `hood`.
  `ROLES` maps each model material to a role, and `"head:Mat"` keys can override a role for one
  part only. Body materials use just two finishes, matte (roughness 0.8) and metal
  (roughness 0.5, metalness 0.3, env 0.8), so the merged body costs two draw calls.
- **Signature kit (`buildKit`, driven by `LOOKS.kit`):** code-built parts on bones. No extra
  assets are downloaded.
  - `prop`: right-hand weapon or focus (spear with `kit.pennant`, staff `kit.staff` =
    `orb`/`ice`/`sun`/`drift` with `kit.staffLen`, hammer (`kit.big` is Gorrum's upright maul),
    club, trident, katana, sword, axe, daggers, whip, hook, bow plus quiver, lantern, candle,
    mirror, bell, orb). The whip's lash hangs from the fist and trails on the ground, with a
    coil at the hip (`kit.coil`). Shields: `kit.shield` = `round`/`kite`/`tower`, plus
    `kit.shieldFace`, `kit.studs` and `kit.side` (the right-hand weapon).
  - `gear` (headgear): helm (`kit.helm` = `winged`/`horned`/`great`), horns, halo, circlet,
    bandana with fluttering tails, crown (`kit.crown` = `spike`/`coral`/`jagged`), cloth face
    mask, veil.
  - Hair and hats: `kit.hair` = `ponytail`/`braid`/`bun`/`flame`/`long`, `kit.beardBraid`,
    `kit.hat: "straw"`.
  - Body: `kit.robe` (`long`/`short`, with `robeColor` and `robeW` width, and `bells`),
    `kit.coat`, `kit.tabard` with `emblem`, `kit.apron`, `kit.belt`, `kit.scabbard`.
  - Shoulders and neck: `kit.pauldrons` = `plate`/`shell`/`spike`/`ice` (with
    `pauldronColor`), `kit.mantle` = `fur`/`moss`/`ember`, `kit.collar: "spike"`,
    `kit.scarf`, and `kit.aura` (glowing orbs on the shoulders, for legendaries).
  - Back: `kit.cape` (two curved, tapered panels; the lower one hinges at the waist and sways
    more), `kit.back` = `shovel`/`wings`/`sunburst`, and `kit.shards` (mirror shards that
    circle the hero).
  - `kit.seams` gives glowing molten cracks over the armor (the Titan's shader, on Gorrum).
  - Colours: main = `armor`, accent = `accent`, and glowing parts use `glow`. Hollow copies are
    tinted dark, and their glows shift toward red.
  - **Grip:** a held item is built along +Y with the fist at the origin. `TILT` swings the tip
    from "forward like a sword" (0°) toward vertical. Check new props in both the idle and the
    Gun_Shoot cast pose. Limb, hip and back parts use `socketM`, a socket aligned with the
    model's own axes in the rest pose, because the bone axes vary (the shins are rolled).
- **Materials:** `game3d/materials.mjs` makes small procedural textures (brushed metal,
  hammered gold, leather, cloth weave, wood, stone and scale; 128 px each, shared and cached)
  and `detailMaterial(role, colour)`. Each renderer gets a small generated PMREM environment
  (`envMap`, 64 px) for highlights on metal. Kit boxes are bevelled (`bevelBox`), the
  breastplate is a curved `roundedPlate`, and capes are curved cloth sheets.
- **Phone budget (measured):** after the kit is built, `mergeKit` gives every kit mesh a helper
  bone and merges all kit geometry, static and animated, into one vertex-coloured skinned mesh
  per finish. The animated parts move their helper bones. `mergeBody` merges the model's
  primitives per finish the same way, remapping each part's joints and bind space. Merged
  geometry is cached per hero and gear, so units share it. Result: 9–12 draw calls per hero
  in the viewer. In a 5v3 battle with Mythic gear: 132 calls and 188k triangles per frame,
  about 14.5 calls and 23k triangles per unit including the shadow pass (before this pass it
  was 697 calls). Only cloth kit casts shadows.
- **Titan:** `yeti.glb` recolored as dark basalt. A small shader patch (`crackMaterial`)
  draws glowing, slowly pulsing seams in the day's element color. The eye whites become dark
  sockets, the pupils and mouth interior glow, the tongue is hidden, and the teeth are dark
  stone. Code-built stone horns, a skull crest, angry brow ridges, back shards and shoulder
  shards attach to its bones. Cheek slabs press down over the corners of the model's upturned
  mouth, and lower tusks jut up, so the glowing mouth reads as a snarl rather than a grin.
  Its idle plays at 0.7× speed for weight.
- **Equipped gear on the model.** The game passes a compact descriptor,
  `{ weapon|helm|chest|boots: { r: rarity 1-5, s: set } }`, from `heroGearLook(h)` in
  `art.js`. Battle units look it up from `u.heroUid`, and the hero viewer receives it as
  `W3D.showcase(host, id, el, gear)`; its cache key includes the gear, so equipping or
  unequipping on the hero page rebuilds the model. Rarity reads as finish and size, the set as
  gem colour, and gear always takes the hero's palette:
  - Metal leans toward the hero's armour colour (`gmetal`). Trim uses the UI's rarity colours,
    polished at Heroic and above. Set gems: Fury red, Vigor green, Bulwark stone grey,
    Haste teal, Keen gold.
  - **Helm** never covers the face or replaces the hero's own headgear. On a hero who already
    wears a helm (Hask, Aurelia, Ulfgar, Gorrum), it upgrades that helm: a trim band, brow
    plate, set gem and low crest fin. On everyone else it adds a brow band, then temple guards
    (Superior), small wings (Heroic) and a gem at the back (Mythic). Hats get a band and a
    feather.
  - **Chest:** pauldrons in the hero's own style (or plate/leather), which grow with rarity
    and gain a second plate, trim ring and set gem. A gorget and a single curved breastplate
    (Fine and up) add a ridge, a set gem, and trim bars at Heroic and Mythic.
  - **Boots:** a wrap-around shin greave with a trim cuff, plus knee cops, fins and a Mythic
    gem, and toe caps on the feet. Under a long robe only the toe caps show.
  - **Weapon:** the signature weapon scales up with rarity (to +18% at Mythic). It gets
    rarity-coloured grip wraps and a set gem in the pommel, plus a small glowing gem at Mythic.
    A shield's rim takes the rarity colour from Superior up.
  - Hollow enemies wear plain gear that gets finer with their level (helm and chest from level
    8, everything from level 20 or on bosses).
  - **Card faces ignore gear** on purpose. Faces are cached per hero and shown wherever that
    hero appears, including summons and other players' heroes, so the card stays the hero's
    identity. Per-loadout faces would also multiply the localStorage cache and the re-shoot
    time on phones. Gear shows in battle and in the live hero viewer.
- **Color pipeline (since 0.11.0):** color management is on (`ColorManagement.legacyMode = false`),
  so the hex colors in `LOOKS` and the palettes render as they look in a color picker.
  Lighting uses ACES tone mapping at exposure 1.3. All lighting values sit in the `GFX`
  object at the top of `game3d/three3d.mjs`, and `window.SB_GFX` can override them for
  side-by-side comparisons. The ground is lifted toward a neutral warm grey so dark chapter
  colors don't go muddy. Colors chosen under the old legacy mode (very dark values such as the
  Titan's `#16130f`) now render darker still. That works for the Titan, but recheck any old
  "picked dark on purpose" colors when you touch them.
- **Animation (`makeAnim` and the battle choreography in `three3d.mjs`):** every unit has a
  controller that crossfades between clips (no pops) and returns to its own idle.
  - Idle per hero: Idle_Sword for weapon holders, Idle_Neutral for small foci (candle, mirror,
    bell, orb, lantern), Idle_Gun for the archer. Every 8–20 s an idle unit plays a short fidget.
  - Melee: run in with the Run clip, stop short of the target, strike, then backpedal home with
    Run_Back. Strikes cycle per hero: brawlers (Odo, Kettle, Gorrum, Thrain) use Punch_Right,
    Punch_Left and Kick_Right; daggers slash, punch and kick; blades slash and sometimes kick.
  - Ranged and support skills cast in place (Gun_Shoot, or Interact for buffs and heals) over a
    glowing spell circle in the element colour.
  - Hits: HitRecieve, or HitRecieve_2 for crits and hits over 14% of max HP. A glancing blow
    (weak element or under 4%) is sometimes dodged with Roll. Crits add a short hit-stop and a
    camera punch.
  - A3 and all-enemy skills: the camera zooms gently toward the caster (the FOV narrows 12%,
    and the view drifts a little toward the caster), then eases back.
  - Victory (`W3D.victory("A")`, called from ui.js): the winners turn to the camera and wave,
    staggered.
  - Titan: Punch and Weapon swings, a Jump → Jump_Land slam with a camera shake, then a roar
    (Yes, No or Wave).
  - Secondary motion: capes, ponytails, bandana and scarf tails, and the whip swing on damped
    springs driven by their anchor's movement (`springy`). The kit helper bones follow, so it
    costs nothing extra in draw calls.
  - Pacing is unchanged: run-in 0.26 s, strike 0.35 s, return 0.25 s, all scaled by the game
    speed setting.
- **Battle camera (`resize`):** a fixed pitch of 34° (a 62° lens on portrait screens) and the
  closest distance at which every slot, the tallest kit and the HUD tags fit the frame. Rows
  are 5.2 m apart; with 4 or more units every other one steps back 0.5 m. Allies idle in a
  three-quarter turn toward the camera, angled in toward the middle of the line
  (`allyFacing`), and turn to the target only to attack. HUD tags anchor at each model's real
  head and headgear top (`screen(key, "head")`), and ui.js stacks tags that would overlap.
- **Arenas (`game3d/scenery.mjs`, `buildArena`):** each chapter has its own textured ground,
  with a worn fighting circle and paths, scattered rocks and grass, framing props, sky,
  silhouettes, light fog and motes. The Titan fights in a basalt caldera with lava seams. If
  the arena fails to build, the plain field is used. Preview: `node tools/scenery-preview-shot.cjs`.
- **Post-processing and quality (`game3d/post.mjs`):** bloom, MSAA, a grade and a vignette.
  The quality tiers are:

  | Tier | Pixel ratio | MSAA | Shadow map | Textures |
  |---|---|---|---|---|
  | High | 2.0 | 4× | 2048 PCF soft | 512 px |
  | Medium | 1.5 | 2× | 1024 | 256 px |
  | Low | 1.25 | direct render | 512 | 128 px |

  The tier starts from a GPU hint and steps down on sustained low fps. A steady 30 or 60 fps
  cap from a power saver doesn't count as slow. `W3D.setQuality("High" | "Medium" | "Low" | "auto")`
  and `W3D.quality` are there for a settings row. Glows use untonemapped MeshBasic materials,
  and eyes and the Titan's maw use strong emissive, so the bloom catches them.
- **Note20 budget (High):** about 60k triangles and 20 draw calls per hero, and about 1.2M
  triangles and 350 calls per battle frame. Measured (SwiftShader, 412×915 at 2.6×):
  - Per hero in the viewer: 5–12 calls, 8–27k triangles with no gear, 15–42k at Mythic.
  - Battle, 5 Mythic allies against a 3-enemy wave, arena included: 195 calls and 662k
    triangles per frame, shadow and post passes included.
- **Rebuild after changes:** `npm run build:game3d`. Check by screenshotting a battle at
  390×844 (see "Review checklist").
- **Real per-hero models (future):** a prefab or GLB per hero, rigged to the same humanoid
  skeleton with the same five animation names, about 1.8 m tall, facing +Z. List it in
  `FILES`/`BASE` and give it its own `ROLES` map.

### Review checklist (for every visual change)
- [ ] Screenshot a regular battle and a Titan battle at 390×844. The full team is visible,
      nothing clips the screen edge, and the HUD tags don't cover faces.
- [ ] Each hero's main color and accent match their `LOOKS` entry, and no two heroes on
      the same base look alike.
- [ ] Hollow enemies are clearly darker than heroes, with red eyes visible.
- [ ] Animations play: idle, attack or cast, hit, death. Nobody T-poses.
- [ ] The 2D fallback (Home → *Battles: 2D*) still works.
- [ ] Any new asset's license is CC0 or owned, and recorded in `CREDITS.md`.
- [ ] Gear at Worn, Superior and Mythic still leaves the hero recognisable: their palette and
      silhouette stay intact, and nothing covers the face.
- [ ] Back view in the hero viewer (drag to turn): capes, hair and back items attached, with no
      floating parts.
- [ ] Draw calls stay at about 15 or fewer per unit in battle (run `node tools/qa/perf.cjs`).

### Hero builds at a glance (hero art pass, 2026-11-22)

| Hero | Base and borrowed parts | Build | Silhouette |
|---|---|---|---|
| Brannoc | adventurer | lean | bandana with tails, spear with pennant, backpack, leaf-green jerkin |
| Mira | hooded, no hood, adventurer legs | small | teal ponytail, studded round shield and sword, trousers |
| Pell | adventurer, shaved | short, big head (young) | apprentice tunic skirt, candle |
| Odo | monarch, bald with beard, adventurer body and legs | huge and broad | moss mantle, root club, dark mud and moss palette |
| Wren | hooded | small | hooded habit, narrow long robe, rope belt, lantern crook |
| Kettle | adventurer, monarch head shaved, hooded body | brawny arms | ash-grey coat tails, hook |
| Ysolde | hooded, no hood | slim | long crimson hair, circlet, whip trailing on the ground, hip coil |
| Corvan | monarch, adventurer body | slightly short | white hair and beard, knee tunic, cyan stole, driftwood staff |
| Hask | monarch | broad | visored great helm, green tabard, kite shield, gunmetal plate |
| Lumen | adventurer shaved, monarch body | tall, heroic head | breastplate, gold pauldrons, glowing sword |
| Nyx | hooded | slim | hood, cloth face-wrap, violet scarf tails, twin daggers |
| Tamsin | hooded, no hood, adventurer body | — | straw hat, braid, bow and quiver |
| Gorrum | monarch, bald with beard | huge | bone horns, spiked pauldrons, molten armour seams, upright maul |
| Velka | hooded, no hood | tall and slim | white hair, circlet, ice pauldrons, long robe, short frost staff |
| Aurelia | monarch, hooded head without hood | — | winged helm, white tabard, blue cape, tower shield |
| Sable | hooded, no hood | — | veil and hat, midnight-blue robe, silver trim, circling mirror shards |
| Kaito | adventurer shaved, hooded body | athletic | bandana tails, mint scarf, jade pauldrons, scabbard, katana |
| Maelis | monarch, hooded head without hood, hooded legs | tall | coral crown, shell pauldrons, cape, trident |
| Thrain | monarch, adventurer body | short and stocky (dwarf) | red braided beard, smith apron, cape, glowing hammer |
| Oriel | adventurer shaved | tall | halo, orange robe, sunburst on the back, sun staff |
| Vaelith | adventurer, bald, monarch body, legs and feet | tall | living-flame hair, crown, aura, burning sword, cape |
| Morwenna | hooded, no hood | tall | jagged crown, spiked collar, black robe, cape, star orb |
| Seraphine | hooded, no hood | — | halo, wide robe with bells, feathered wings, big bell |
| Ulfgar | monarch | tall and broad | horned helm, fur mantle, braided beard, big round shield and axe |

### Review notes (hero art pass, 2026-11-22)
- Fixed: Hask, Brannoc and Odo now have three different palettes and builds. Ysolde's whip
  hangs and trails instead of reading as a bow. Velka's staff is 28% shorter. Capes are
  tapered two-panel cloth that sways. The Titan's mouth reads as a snarl.
- Still rough: robes are rigid cones (legs don't move under them, which shows in the attack
  lunge). The hooded body under borrowed monarch parts stretches slightly at the shoulders.
  Bandana tails are flat strips. At phone size, Superior pauldrons are the largest gear
  shape, so watch that they don't hide shoulder kit.

## 3. Hero card art (2D illustrations)

**Current default (0.12.0): 3D card faces.** The game photographs each hero's 3D model
(head and shoulders, slight three-quarter turn, element-coloured rim light) in a small
offscreen renderer, then caches the images on the device. `W3D.face()` lives in
`game3d/three3d.mjs`. The cache is keyed by game version, so a model or palette change
re-shoots the faces after the next update. Order of preference: `ART_FILES` illustration,
then the 3D face, then the drawn SVG portrait (used before the faces are ready or without WebGL).

**Hero detail page (0.13.0):** a live 3D viewer (`W3D.showcase()`) plays the hero's idle animation;
the player drags to spin and taps to see an attack. It replaces the drawn full-body sprite when WebGL
is available, and frees its renderer when the player leaves the page or starts a battle.

Hero cards and summon reveals can use real illustrations. Generate them with an image tool,
or commission them, then drop them in `public/game/art/` and list them in `ART_FILES` in
`public/game/art.js` (for example `ysolde: "art/ysolde.webp"`).

- **Format:** square, 1024×1024. WebP or PNG, under 200 KB after compression.
- **Framing:** waist-up, three-quarter view, face in the upper third, prop visible.
- **Background:** a simple dark gradient tinted with the element color. No scenery and
  no text.

**Shared style prompt** (start every hero prompt with this, so the set matches):

> Original fantasy character portrait for a mobile hero-collector RPG. Painterly, semi-realistic
> illustration, clean shapes, dramatic rim lighting in {ELEMENT COLOR}, waist-up three-quarter view,
> plain dark gradient background tinted {ELEMENT COLOR}, crisp details on face and weapon,
> no text, no logo, no frame.

Replace `{ELEMENT COLOR}` with the hero's element (for example "ember orange-red").
Element colors in words:
- Flame: ember orange-red
- Gale: wind green
- Tide: sea blue
- Light: dawn gold
- Shadow: violet

## 4. Hero briefs and prompts

Each entry gives the hero's role in game terms, then the description to add after the shared prompt.

### Common
1. **Brannoc Spearhand**, Gale · Attack. A weathered spearman of the road.
   *Prompt:* "tan-skinned man with short brown hair and stubble, olive-green leather jerkin with brass trim, knotted gale-green bandana, gripping a long iron spear, determined grin."
2. **Mira Saltwhistle**, Tide · Defense. A dockside guard.
   *Prompt:* "young woman with a teal ponytail, sea-blue padded armor with pale shell trim, round shell-studded shield raised, salt spray in the air, calm and steady."
3. **Pell Cinderbrook**, Flame · Support. A candle-keeper apprentice.
   *Prompt:* "pale freckled youth with messy copper hair, rust-brown robes with amber trim, cupping a candle whose flame glows warm, gentle smile."
4. **Odo Mudlark**, Gale · HP. A burly marsh dweller.
   *Prompt:* "broad dark-skinned bald man with a thick black beard, mud-brown hide vest with moss-green trim, heavy wooden club over his shoulder, good-natured and sturdy."
5. **Sister Wren**, Light · Support. A wandering lamplighter nun.
   *Prompt:* "woman in a cream hooded habit with gold embroidery, holding a small brass lantern that glows golden, serene expression."
6. **Kettle Gravejaw**, Shadow · Attack. A gravedigger turned brawler.
   *Prompt:* "ash-grey-skinned man with long black hair and a scar across one eye, dark charcoal coat with violet stitching, rusted iron hook in hand, sly grin."

### Rare
7. **Ysolde Emberlash**, Flame · Attack. A fire-whip duelist.
   *Prompt:* "fierce woman with long crimson hair and a thin gold circlet, dark red leather armor, a flaming whip coiling around her, glowing amber eyes."
8. **Corvan Tidecaller**, Tide · Support. An old sea priest.
   *Prompt:* "dark-skinned elder with long white hair and beard, deep-blue robes with pale cyan trim, driftwood staff topped with a glowing blue orb, kind eyes."
9. **Hask the Unbowed**, Gale · Defense. A veteran shieldbearer.
   *Prompt:* "tan bearded warrior in a steel helm, grey-green plate armor with pale green trim, tall kite shield planted in front, unbroken stance."
10. **Lumen Varro**, Light · Attack. A radiant swordsman.
    *Prompt:* "fair man with swept golden hair, pale gold breastplate, longsword shining with light, glowing pale-gold eyes, confident."
11. **Nyx Hollowstep**, Shadow · Attack. A masked night-blade.
    *Prompt:* "slender figure in a deep violet hood with a cloth mask over the lower face, twin daggers, glowing lilac eyes, wisps of shadow."
12. **Tamsin Reedvane**, Gale · Support. A reed-field archer.
    *Prompt:* "tan young woman with a long golden-brown braid, moss-green tunic with straw-gold trim, longbow drawn, reeds blowing behind her."
13. **Gorrum Slagheart**, Flame · Defense. A forge-born guardian.
    *Prompt:* "massive dark-skinned bald man with a black beard and curved bone horns on a helm, soot-black armor with glowing orange seams, huge forge hammer, ember-orange eyes."
14. **Velka Driftmourn**, Tide · HP. A frost-tide mourner.
    *Prompt:* "pale-blue-skinned woman with long white hair and a silver circlet, icy blue robes, staff of frozen sea-glass, melancholy expression."

### Epic
15. **Aurelia Dawnwarden**, Light · Defense. A paladin of the dawn.
    *Prompt:* "fair woman with long golden hair under a winged steel helm, gold and white plate armor, white cape, radiant tower shield, glowing pale-gold eyes."
16. **Sable Nightglass**, Shadow · Support. A mirror-witch.
    *Prompt:* "pale woman with dark violet hair under a sheer black veil, midnight robes with lavender trim, a hand mirror reflecting violet light, enigmatic smile."
17. **Kaito Stormrend**, Gale · Attack. A storm swordsman.
    *Prompt:* "fair young man with spiky black hair and a green headband, dark jade armor with mint-green accents, curved katana crackling with wind, glowing mint eyes."
18. **Maelis Deepcurrent**, Tide · Attack. A deep-sea queen.
    *Prompt:* "dark-skinned woman with long navy hair and a coral crown, deep-blue scale armor with bright aqua trim, three-pronged trident, ocean currents swirling."
19. **Thrain Ashforge**, Flame · HP. A dwarf-like smith-warrior.
    *Prompt:* "stocky tan man with a braided red beard, leather-and-iron smith armor with orange trim, glowing forge hammer, sparks flying."
20. **Oriel Sunveil**, Light · Support. A sun herald.
    *Prompt:* "dark-skinned figure with swept cream-white hair and a floating golden halo, ivory and gold robes, a staff tipped with a small sun, warm golden light."

### Legendary
21. **Vaelith, the Last Pyre**, Flame · Attack. The final flame of a burned kingdom.
    *Prompt:* "fair figure with hair like living flame and a black-and-gold crown, charred crimson armor with molten gold edges, a burning longsword, phoenix-like embers, blazing golden eyes."
22. **Morwenna Abyss-Crowned**, Shadow · Attack. Sovereign of the abyss.
    *Prompt:* "ash-grey-skinned queen with long black hair and a jagged violet crown, abyssal black robes with violet light, a dark orb swirling with stars, glowing lilac eyes."
23. **Seraphine of the Seventh Bell**, Light · Support. A bell-saint.
    *Prompt:* "pale woman with long cream-gold hair and a radiant halo, ivory robes with golden bells, ringing a large golden bell, soft light pouring from it, serene."
24. **Ulfgar Stormwall**, Gale · Defense. A mountain-king guardian.
    *Prompt:* "tan elder with long silver hair and a braided silver beard in a horned steel helm, slate-blue plate armor with ice-blue trim, massive round shield, storm clouds behind."

### Enemies and Titan
- **Hollow (enemy) variants:** reuse the hero image, desaturated, with a dark violet overlay
  and glowing red eyes. Done in code, so no separate art is needed.
- **Kharvok the Ashen Titan:** "colossal stone giant made of cracked grey rock, glowing
  element-colored eyes and cracks, looming over the viewer, embers in the air." It has a
  separate card, and its glow color changes daily.
