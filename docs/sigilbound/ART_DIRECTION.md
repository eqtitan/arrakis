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
- **Base per hero:** set in `BASE` in `game3d/three3d.mjs`.
  - `monarch`: plate armor and a beard, with an optional crown.
  - `hooded`: hooded cloak, shoulder pads, optional sword.
  - `adventurer`: shirt and trousers, beard.
- **Recolor:** `ROLES` maps each model material to a role (armor, cloth, pants, accent,
  trim, blade, hair, skin, crown, eye). The colors come from each hero's `LOOKS` entry in
  `public/game/art.js` (armor, accent, hair, skin, glow).
- **Signature kit (props and headgear):** because several heroes share a base, each hero's
  silhouette comes from code-built props attached to bones (`buildKit` in
  `game3d/three3d.mjs`). No extra assets are downloaded. The kit is driven by `LOOKS`:
  - `prop` → right-hand weapon or focus: spear, staff (shaft plus a glowing head, `kit.staff`
    = `orb` / `ice` crystal / `sun`), hammer, club, trident, katana, sword, axe, daggers (one
    per hand), flaming whip, hook, bow (plus a quiver on the back), lantern on a crook pole,
    candle, hand mirror, hand bell, orb with orbiting rings. `shield` puts a shield on the
    left forearm (`kit.shield` = `round` / `kite` / `tower`) and `kit.side` in the right hand.
    On the hooded base, `sword` uses the model's own sword mesh.
  - `gear` → headgear on the Head bone: helm (`kit.helm` = `winged` / `horned`), horns,
    halo, circlet with a gem, bandana with trailing tails, crown (`kit.crown` = `spike` /
    `coral` / `jagged`), mask, veil. Hooded heroes with a `glow` (and all Hollow) get
    glowing eyes.
  - `kit.cape` (epics and legendaries) adds a flared cloak on the Chest bone and hides the
    adventurer's backpack (or use `kit.pack: false`). `kit.aura` (legendaries) adds glowing
    pauldrons. `kit.big` makes the hammer or shield heavier, and `kit.flame` adds fire to the
    sword and crown.
  - Colors: main = `armor`, accent = `accent`, and glowing parts use `glow` (or the accent).
    Hollow copies are tinted dark, and their glows shift toward red.
  - **Grip:** a held item is built along +Y, with the fist at the origin. The fist's axis is
    the wrist bone's X axis, and the per-item `TILT` swings the tip from "forward like a
    sword" (0°) toward vertical. Tall foci use about 30°, which stands up in idle without
    leaning far back in the Gun_Shoot cast pose. Check new props in both poses.
  - **Phone budget:** each bone's parts are merged into one mesh per material and cached per
    hero, which adds about 2–8 draw calls per unit. Only animated bits (flames, orb rings,
    glow halos) stay separate. Bone children follow the existing scale rule (divide by the
    bone's world scale, multiply by the model's scale), so all sizes are in the model's own
    metres (a hero is about 1.75 m).
- **Titan:** `yeti.glb` recolored as dark basalt. A small shader patch (`crackMaterial`)
  draws glowing, slowly pulsing seams in the day's element color. The eye whites become dark
  sockets, the pupils and mouth interior glow, the tongue is hidden, and the teeth are dark
  stone. Code-built stone horns, a skull crest, angry brow ridges, back shards and shoulder
  shards attach to its bones. Its idle plays at 0.7× speed for weight, and it is about 10%
  larger than before.
- **Color pipeline (since 0.11.0):** color management is on (`ColorManagement.legacyMode = false`),
  so the hex colors in `LOOKS` and the palettes render as they look in a color picker.
  Lighting uses ACES tone mapping at exposure 1.3. All lighting values sit in the `GFX`
  object at the top of `game3d/three3d.mjs`, and `window.SB_GFX` can override them for
  side-by-side comparisons. The ground is lifted toward a neutral warm grey so dark chapter
  colors don't go muddy. Colors chosen under the old legacy mode (very dark values such as the
  Titan's `#16130f`) now render darker still. That works for the Titan, but recheck any old
  "picked dark on purpose" colors when you touch them.
- **Animations used:** Idle (Idle_Sword), Sword_Slash (melee), Gun_Shoot (casting), HitRecieve, Death.
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

## 3. Hero card art (2D illustrations)

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
