// Sigilbound — procedural 2D art: hero portraits, chapter backdrops, battle FX.
// Everything is drawn in code (SVG + canvas). To use real artwork instead, put
// image files in art/ and list them in ART_FILES, e.g. { ysolde: "art/ysolde.webp" }.

const ART_FILES = {};

// ---------- portrait specs ----------
// skin, hair colour, hair style, headgear, armour, accent, prop, extras.
// `cloth` (optional) colours sleeves/trousers/tunic in 3D; otherwise they're a darker armour shade.
// `kit` is read only by the 3D battle (three3d.js): cape, aura (glowing pauldrons), shield
// style (round/kite/tower), side (weapon in the free hand of a shield user), helm style
// (winged/horned), staff style (orb/ice/sun), crown style (spike/coral/jagged), big, flame, pack.
const SKIN = { pale: "#f3d6c1", fair: "#e9c09f", tan: "#c99068", brown: "#9a6544", deep: "#6b412b", ash: "#b9b4c4", blue: "#8fb3d9" };
const LOOKS = {
  brannoc:  { skin: "tan",   hair: "#5a3a22", style: "short",    gear: "bandana", armor: "#4f7a34", accent: "#d8b04a", cloth: "#7a5232", prop: "spear",   beard: "stubble", kit: { band: "#8fe8a8", pennant: "#8fe8a8", belt: true } },
  mira:     { skin: "fair",  hair: "#2f8f8f", style: "ponytail", gear: "none",    armor: "#3f7f9a", accent: "#e8e0c8", cloth: "#2a5a70", prop: "shield", kit: { shield: "round", studs: true, side: "sword", hair: "ponytail", belt: "#e8e0c8" } },
  pell:     { skin: "pale",  hair: "#c8642a", style: "messy",    gear: "none",    armor: "#8a4a2a", accent: "#ffb347", cloth: "#6a3420", prop: "candle", kit: { robe: "short", robeColor: "#8a4a2a", belt: "#4a2a18", pack: false } },
  odo:      { skin: "brown", hair: "#1e1610", style: "bald",     gear: "none",    armor: "#4e3626", accent: "#9ab84a", cloth: "#6b7a3a", pants: "#3a3026", prop: "club",    beard: "full", kit: { mantle: "moss", pack: false, belt: "#2a1e16" } },
  wren:     { skin: "fair",  hair: "#e8e2d0", style: "hood",     gear: "none",    armor: "#7a5a3e", accent: "#ffc84a", cloth: "#5c4330", prop: "lantern", kit: { robe: "long", robeColor: "#6e5038", robeW: 0.86, belt: "#c8a040" } },
  kettle:   { skin: "ash",   hair: "#2a2a30", style: "long",     gear: "none",    armor: "#5a5560", accent: "#9a5ae8", cloth: "#2a2a30", prop: "hook",    scar: true, kit: { coat: "#3a3a42", belt: true } },
  ysolde:   { skin: "fair",  hair: "#c8281e", style: "long",     gear: "circlet", armor: "#5a1e1e", accent: "#ff7a3a", prop: "whip",    glow: "#ffb347", kit: { coil: true, belt: "#2a1010" } },
  corvan:   { skin: "brown", hair: "#d0e6f0", style: "long",     gear: "none",    armor: "#20507a", accent: "#7fd4ff", cloth: "#173a5a", prop: "staff",   beard: "full", kit: { robe: "short", robeColor: "#20507a", staff: "drift", scarf: "#7fd4ff", belt: "#3a2a20" } },
  hask:     { skin: "tan",   hair: "#4a4036", style: "short",    gear: "helm",    armor: "#5c656e", accent: "#d8e8c8", cloth: "#2f6b3a", prop: "shield",  beard: "full", kit: { shield: "kite", shieldFace: "#2f6b3a", side: "sword", helm: "great", tabard: "#2f6b3a", emblem: "#d8e8c8", pauldrons: "plate" } },
  lumen:    { skin: "fair",  hair: "#f2d27a", style: "swept",    gear: "none",    armor: "#c8d0dc", accent: "#ffcc33", cloth: "#4f5a6c", prop: "sword",   glow: "#fff2b0", kit: { pack: false, pauldrons: "plate", pauldronColor: "#e8c860", belt: "#4f5a6c" } },
  nyx:      { skin: "pale",  hair: "#1e1a2a", style: "hood",     gear: "mask",    armor: "#26203a", accent: "#b48cff", prop: "daggers", glow: "#c9a3ff", kit: { scarf: "#4a2a7a", belt: true } },
  tamsin:   { skin: "tan",   hair: "#8a6a2a", style: "braid",    gear: "none",    armor: "#5f7f3a", accent: "#e8d07a", cloth: "#4a6a2a", prop: "bow", kit: { hat: "straw", hair: "braid", belt: "#6a4a2a", pack: false } },
  gorrum:   { skin: "deep",  hair: "#1a1410", style: "bald",     gear: "horns",   armor: "#3a2a22", accent: "#ff5a1a", prop: "hammer",  beard: "full", glow: "#ff7a2a", kit: { big: true, seams: "#ff6a1a", pauldrons: "spike", pauldronColor: "#2a2222" } },
  velka:    { skin: "blue",  hair: "#e8f4ff", style: "long",     gear: "circlet", armor: "#3a6a8a", accent: "#bfefff", prop: "staff", kit: { staff: "ice", staffLen: 0.72, robe: "long", robeColor: "#3a6a8a", pauldrons: "ice" } },
  aurelia:  { skin: "fair",  hair: "#e8b84a", style: "long",     gear: "helm",    armor: "#d9b24a", accent: "#f5f0e0", cloth: "#2a3f8f", prop: "shield",  glow: "#fff2b0", kit: { shield: "tower", side: "sword", helm: "winged", cape: true, capeColor: "#2a3f8f", tabard: "#f5f0e0", emblem: "#d9b24a" } },
  sable:    { skin: "pale",  hair: "#3a2050", style: "swept",    gear: "veil",    armor: "#232a48", accent: "#c8d8ff", prop: "mirror", kit: { cape: true, capeColor: "#161a30", robe: "long", robeColor: "#1c2240", shards: true } },
  kaito:    { skin: "fair",  hair: "#1a1a1a", style: "spiky",    gear: "bandana", armor: "#2f5a4a", accent: "#7affc0", cloth: "#1e3a30", prop: "katana",  glow: "#a8ffdf", kit: { scarf: "#7affc0", scabbard: true, belt: "#1a1a1a", pauldrons: "plate", pauldronColor: "#2f5a4a" } },
  maelis:   { skin: "brown", hair: "#163a5a", style: "long",     gear: "crown",   armor: "#1a4a6a", accent: "#4ad0ff", cloth: "#123048", prop: "trident", kit: { cape: true, crown: "coral", pauldrons: "shell" } },
  thrain:   { skin: "tan",   hair: "#a8321a", style: "short",    gear: "none",    armor: "#5a3a2a", accent: "#ffa040", cloth: "#7a5034", prop: "hammer",  beard: "braided", kit: { cape: true, capeColor: "#5a2a1a", apron: true, beardBraid: true, pack: false } },
  oriel:    { skin: "deep",  hair: "#f0e6c8", style: "swept",    gear: "halo",    armor: "#e08a2c", accent: "#ffe27a", cloth: "#b5521f", prop: "staff",   glow: "#ffe27a", kit: { staff: "sun", robe: "long", robeColor: "#c4561e", back: "sunburst" } },
  vaelith:  { skin: "fair",  hair: "#ff5a2a", style: "flame",    gear: "crown",   armor: "#3a1010", accent: "#ffb020", prop: "sword",   glow: "#ffd060", kit: { cape: true, aura: true, flame: true, hair: "flame" } },
  morwenna: { skin: "ash",   hair: "#120a1a", style: "long",     gear: "crown",   armor: "#1a0f24", accent: "#a050ff", prop: "orb",     glow: "#d090ff", kit: { cape: true, aura: true, crown: "jagged", robe: "long", robeColor: "#140b1e", collar: "spike" } },
  seraphine:{ skin: "pale",  hair: "#fff4d8", style: "long",     gear: "halo",    armor: "#f0e8d8", accent: "#ffd870", prop: "bell",    glow: "#fff0a0", kit: { aura: true, robe: "long", robeColor: "#f4eee0", robeW: 1.18, bells: true, back: "wings" } },
  ulfgar:   { skin: "tan",   hair: "#c8ccd0", style: "long",     gear: "helm",    armor: "#8a9aac", accent: "#bfe8ff", cloth: "#3a4a62", prop: "shield",  beard: "braided", kit: { shield: "round", big: true, side: "axe", helm: "horned", cape: true, capeColor: "#2a3a52", aura: true, mantle: "fur", beardBraid: true } },
};

// Compact description of a hero's equipped gear for the 3D model ({ helm: { r, s }, … }
// with rarity 1-5 and set key), or null with nothing equipped. Card faces ignore gear.
function heroGearLook(h) {
  if (!h || !h.gear || typeof gearByUid !== "function") return null;
  let out = null;
  for (const slot of ["weapon", "helm", "chest", "boots"]) {
    const g = h.gear[slot] && gearByUid(h.gear[slot]);
    if (g) (out = out || {})[slot] = { r: g.rarity, s: g.set };
  }
  return out;
}

let _artId = 0;
const shade = (hex, amt) => {
  const n = parseInt(hex.slice(1), 16);
  const c = (v) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
  return "#" + [c(n >> 16), c((n >> 8) & 255), c(n & 255)].map((v) => v.toString(16).padStart(2, "0")).join("");
};

function propSvg(kind, L, id) {
  const wood = "#6a4a2a", metal = `url(#m${id})`, acc = L.accent;
  switch (kind) {
    case "spear": return `<path d="M84 100 L90 10" stroke="${wood}" stroke-width="3"/><path d="M90 2 L95 16 L90 14 L86 16Z" fill="${metal}"/>`;
    case "sword": return `<path d="M82 100 L88 22" stroke="${metal}" stroke-width="5" stroke-linecap="round"/><path d="M80 34 L96 36" stroke="${acc}" stroke-width="3"/><path d="M88 22 L89 8" stroke="#fff" stroke-width="2" opacity=".6"/>`;
    case "katana": return `<path d="M80 100 Q86 50 96 8" stroke="${metal}" stroke-width="3.5" fill="none"/><path d="M79 74 L89 76" stroke="${acc}" stroke-width="3"/>`;
    case "staff": return `<path d="M86 100 L88 18" stroke="${wood}" stroke-width="3.5"/><circle cx="88" cy="14" r="6" fill="${acc}" opacity=".9"/><circle cx="88" cy="14" r="10" fill="${acc}" opacity=".25"/>`;
    case "hammer": return `<path d="M84 100 L88 26" stroke="${wood}" stroke-width="4"/><rect x="76" y="12" width="24" height="16" rx="2" fill="${metal}"/><rect x="76" y="18" width="24" height="3" fill="${acc}"/>`;
    case "trident": return `<path d="M85 100 L89 14" stroke="${metal}" stroke-width="3"/><path d="M80 20 L80 6 M89 16 L89 0 M98 20 L98 6 M80 20 Q89 26 98 20" stroke="${metal}" stroke-width="3" fill="none"/>`;
    case "shield": return `<path d="M6 62 L26 56 L30 82 Q20 98 8 92 Q2 80 6 62Z" fill="${metal}" stroke="${acc}" stroke-width="2"/><circle cx="17" cy="74" r="4" fill="${acc}"/>`;
    case "bow": return `<path d="M88 4 Q72 52 88 100" stroke="${wood}" stroke-width="3" fill="none"/><path d="M88 4 L88 100" stroke="#ddd" stroke-width=".8"/>`;
    case "lantern": return `<path d="M86 40 L86 52" stroke="#555" stroke-width="1.5"/><rect x="80" y="52" width="12" height="16" rx="3" fill="#3a3020"/><rect x="82" y="55" width="8" height="10" rx="2" fill="${acc}"/><circle cx="86" cy="60" r="12" fill="${acc}" opacity=".25"/>`;
    case "candle": return `<rect x="82" y="70" width="8" height="18" fill="#f0e6d0"/><path d="M86 70 Q82 62 86 56 Q90 62 86 70Z" fill="${acc}"/><circle cx="86" cy="64" r="9" fill="${acc}" opacity=".3"/>`;
    case "club": return `<path d="M84 100 L92 30" stroke="${wood}" stroke-width="7" stroke-linecap="round"/><circle cx="92" cy="28" r="7" fill="${shade(wood, -0.05)}"/>`;
    case "hook": return `<path d="M86 100 L88 30 Q88 18 80 18 Q74 20 76 26" stroke="${metal}" stroke-width="3" fill="none"/>`;
    case "whip": return `<path d="M88 100 L86 80 Q96 60 80 44 Q66 30 84 14" stroke="${acc}" stroke-width="2.5" fill="none"/><circle cx="84" cy="14" r="3" fill="#ffd060"/>`;
    case "daggers": return `<path d="M80 96 L92 60" stroke="${metal}" stroke-width="3"/><path d="M8 96 L16 62" stroke="${metal}" stroke-width="3"/>`;
    case "mirror": return `<ellipse cx="86" cy="30" rx="9" ry="12" fill="#cfe4ff" stroke="${acc}" stroke-width="2.5" opacity=".9"/><path d="M86 42 L86 60" stroke="${acc}" stroke-width="3"/>`;
    case "orb": return `<circle cx="86" cy="30" r="9" fill="${acc}" opacity=".85"/><circle cx="86" cy="30" r="15" fill="${acc}" opacity=".2"/><circle cx="83" cy="27" r="3" fill="#fff" opacity=".6"/>`;
    case "bell": return `<path d="M78 40 Q78 22 86 22 Q94 22 94 40 L97 44 L75 44Z" fill="#ffd870" stroke="#a07a20" stroke-width="1"/><circle cx="86" cy="46" r="2.5" fill="#a07a20"/>`;
    default: return "";
  }
}

function hairBack(L) {
  const h = L.hair;
  switch (L.style) {
    case "long": return `<path d="M32 46 Q30 78 26 92 L74 92 Q70 78 68 46 Q50 24 32 46Z" fill="${shade(h, -0.08)}"/>`;
    case "braid": return `<path d="M62 52 Q74 66 66 92" stroke="${h}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
    case "ponytail": return `<path d="M60 34 Q78 40 72 70" stroke="${h}" stroke-width="8" fill="none" stroke-linecap="round"/>`;
    case "flame": return `<path d="M30 50 Q22 30 34 14 Q36 26 42 20 Q46 6 54 14 Q60 4 64 18 Q72 12 70 30 Q80 38 70 52Z" fill="${h}"/>`;
    default: return "";
  }
}
function hairFront(L) {
  const h = L.hair, d = shade(h, 0.08);
  switch (L.style) {
    case "short": return `<path d="M34 46 Q33 27 50 26 Q67 27 66 46 Q62 36 50 35 Q38 36 34 46Z" fill="${h}"/>`;
    case "messy": return `<path d="M33 47 L34 32 L39 34 L41 26 L46 31 L50 24 L54 31 L60 26 L61 34 L66 32 L67 47 Q60 36 50 36 Q40 36 33 47Z" fill="${h}"/>`;
    case "spiky": return `<path d="M32 46 L30 30 L38 34 L36 20 L44 30 L48 16 L53 29 L60 18 L60 32 L70 28 L67 46 Q60 34 50 35 Q40 34 32 46Z" fill="${h}"/>`;
    case "swept": return `<path d="M33 48 Q32 28 52 26 Q70 28 67 44 Q60 32 44 38 Q38 40 33 48Z" fill="${h}"/><path d="M44 30 Q56 26 64 34" stroke="${d}" stroke-width="1.5" fill="none"/>`;
    case "long": case "braid": case "ponytail":
      return `<path d="M33 52 Q31 28 50 26 Q69 28 67 52 Q64 38 56 34 Q50 40 40 38 Q35 42 33 52Z" fill="${h}"/><path d="M42 30 Q50 28 58 31" stroke="${d}" stroke-width="1.2" fill="none"/>`;
    case "flame": return `<path d="M34 46 Q36 30 50 30 Q64 30 66 46 Q60 36 50 37 Q40 36 34 46Z" fill="${shade(h, 0.1)}"/>`;
    default: return "";
  }
}
function headgear(L, id) {
  const a = L.accent;
  switch (L.gear) {
    case "helm": return `<path d="M31 48 Q30 24 50 22 Q70 24 69 48 L66 48 Q64 33 50 32 Q36 33 34 48Z" fill="url(#m${id})"/><path d="M50 22 L50 32" stroke="${a}" stroke-width="2"/><path d="M48 33 L52 33 L51 47 L49 47Z" fill="url(#m${id})"/>`;
    case "crown": return `<path d="M35 34 L37 22 L42 30 L46 18 L50 28 L54 18 L58 30 L63 22 L65 34Z" fill="${a}" stroke="${shade(a, -0.25)}" stroke-width=".8"/><circle cx="50" cy="31" r="1.8" fill="#fff"/>`;
    case "circlet": return `<path d="M34 40 Q50 34 66 40" stroke="${a}" stroke-width="2" fill="none"/><path d="M50 36 L52 39 L50 42 L48 39Z" fill="#fff"/>`;
    case "horns": return `<path d="M36 34 Q24 30 22 16 Q30 26 40 28Z" fill="#e8dcc0"/><path d="M64 34 Q76 30 78 16 Q70 26 60 28Z" fill="#e8dcc0"/>`;
    case "bandana": return `<path d="M33 40 Q50 32 67 40 L67 44 Q50 37 33 44Z" fill="${a}"/><path d="M66 42 L76 48 L72 40Z" fill="${a}"/>`;
    case "halo": return `<ellipse cx="50" cy="20" rx="15" ry="4" fill="none" stroke="${a}" stroke-width="2.5"/><ellipse cx="50" cy="20" rx="17" ry="5" fill="none" stroke="${a}" stroke-width="5" opacity=".2"/>`;
    case "veil": return `<path d="M32 46 Q32 24 50 24 Q68 24 68 46 L70 70 Q62 60 60 46 Q58 34 50 34 Q42 34 40 46 Q38 60 30 70Z" fill="${shade(L.armor, 0.08)}" opacity=".85"/>`;
    case "mask": return `<path d="M36 52 Q50 56 64 52 L62 64 Q50 70 38 64Z" fill="${shade(L.armor, 0.05)}"/>`;
    default: return "";
  }
}
function beardSvg(L) {
  const h = shade(L.hair, -0.02);
  switch (L.beard) {
    case "full": return `<path d="M36 52 Q38 70 50 72 Q62 70 64 52 Q60 62 50 62 Q40 62 36 52Z" fill="${h}"/>`;
    case "braided": return `<path d="M37 52 Q40 66 50 66 Q60 66 63 52 Q58 60 50 60 Q42 60 37 52Z" fill="${h}"/><path d="M50 64 L50 80" stroke="${h}" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="80" r="2" fill="${L.accent}"/>`;
    case "stubble": return `<path d="M38 55 Q50 68 62 55 Q60 64 50 65 Q40 64 38 55Z" fill="${h}" opacity=".35"/>`;
    default: return "";
  }
}


// Head, face, hair and headgear in 100x100 portrait coordinates. Needs the
// s{id} skin gradient, g{id} glow filter and m{id} metal gradient in <defs>.
function headSvg(L, id, skin, eye, glowEyes, hood) {
  return `
    ${hood ? `<path d="M28 54 Q26 20 50 18 Q74 20 72 54 L70 76 L30 76Z" fill="${shade(L.armor, -0.05)}"/>` : ""}
    <ellipse cx="34.5" cy="50" rx="2.5" ry="4" fill="${shade(skin, -0.1)}"/><ellipse cx="65.5" cy="50" rx="2.5" ry="4" fill="${shade(skin, -0.1)}"/>
    <path d="M35 46 Q35 30 50 30 Q65 30 65 46 Q65 62 50 66 Q35 62 35 46Z" fill="url(#s${id})"/>
    ${hood ? `<path d="M35 44 Q36 30 50 29 Q64 30 65 44 Q58 36 50 36 Q42 36 35 44Z" fill="#000" opacity=".35"/>` : ""}
    <path d="M40.5 45.5 L46 44.5 M54 44.5 L59.5 45.5" stroke="${shade(L.hair, -0.1)}" stroke-width="1.4" stroke-linecap="round"/>
    ${glowEyes ? `<g filter="url(#g${id})"><ellipse cx="43.5" cy="49" rx="3" ry="2" fill="${eye}"/><ellipse cx="56.5" cy="49" rx="3" ry="2" fill="${eye}"/></g>` : ""}
    <ellipse cx="43.5" cy="49" rx="2.6" ry="1.5" fill="${glowEyes ? eye : "#fff"}"/><ellipse cx="56.5" cy="49" rx="2.6" ry="1.5" fill="${glowEyes ? eye : "#fff"}"/>
    ${glowEyes ? "" : `<circle cx="43.8" cy="49" r="1.15" fill="${eye}"/><circle cx="56.8" cy="49" r="1.15" fill="${eye}"/>`}
    <path d="M50 50 L48.6 55.5 L51 55.8" stroke="${shade(skin, -0.22)}" stroke-width=".9" fill="none" stroke-linecap="round"/>
    <path d="M46 59.2 Q50 60.6 54 59.2" stroke="${shade(skin, -0.3)}" stroke-width="1" fill="none" stroke-linecap="round"/>
    <ellipse cx="41" cy="55" rx="3" ry="1.6" fill="#ff7a7a" opacity=".15"/><ellipse cx="59" cy="55" rx="3" ry="1.6" fill="#ff7a7a" opacity=".15"/>
    ${L.scar ? `<path d="M57 42 L62 54" stroke="#7a3a3a" stroke-width="1.2"/>` : ""}
    ${beardSvg(L)}
    ${hood ? "" : hairFront(L)}
    ${headgear(L, id)}
`;
}

// Main entry: returns an inline SVG string for a hero/enemy portrait.
function heroArt(templateId, el, opts = {}) {
  if (ART_FILES[templateId] && !opts.hollow) return `<img class="art" src="${ART_FILES[templateId]}" alt="">`;
  // Card faces photographed from the 3D models (falls back to the drawn portrait until ready).
  if (window.W3D && !opts.flat) {
    const url = W3D.face(templateId, el, !!opts.hollow);
    if (url) return `<img class="art face3d" src="${url}" alt="">`;
  }
  if (templateId === "titan") return titanArt(el);
  const L = LOOKS[templateId];
  if (!L) return "";
  const id = ++_artId;
  const ec = ELEMENTS[el].color;
  const skin = SKIN[L.skin];
  const hollow = !!opts.hollow;
  const eye = hollow ? "#ff3030" : L.glow || "#2a2030";
  const glowEyes = hollow || !!L.glow;
  const hood = L.style === "hood";
  return `<svg class="art" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <defs>
    <radialGradient id="b${id}" cx="50%" cy="38%" r="70%"><stop offset="0" stop-color="${ec}" stop-opacity=".95"/><stop offset=".55" stop-color="${shade(ec, -0.35)}"/><stop offset="1" stop-color="#0d0a14"/></radialGradient>
    <linearGradient id="a${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${shade(L.armor, 0.15)}"/><stop offset="1" stop-color="${shade(L.armor, -0.2)}"/></linearGradient>
    <linearGradient id="m${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e8eef4"/><stop offset=".5" stop-color="#8a96a4"/><stop offset="1" stop-color="#4a5260"/></linearGradient>
    <radialGradient id="s${id}" cx="45%" cy="40%" r="60%"><stop offset="0" stop-color="${shade(skin, 0.06)}"/><stop offset="1" stop-color="${shade(skin, -0.12)}"/></radialGradient>
    <filter id="g${id}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.4"/></filter>
    ${hollow ? `<filter id="h${id}"><feColorMatrix type="saturate" values=".25"/><feComponentTransfer><feFuncR type="linear" slope=".75"/><feFuncG type="linear" slope=".7"/><feFuncB type="linear" slope=".85"/></feComponentTransfer></filter>` : ""}
  </defs>
  <rect width="100" height="100" fill="url(#b${id})"/>
  <circle cx="50" cy="46" r="38" fill="none" stroke="${ec}" stroke-opacity=".35" stroke-width="1" stroke-dasharray="2 4"/>
  <circle cx="50" cy="46" r="31" fill="none" stroke="#fff" stroke-opacity=".08" stroke-width="6"/>
  <g ${hollow ? `filter="url(#h${id})"` : ""}>
    ${propSvg(L.prop, L, id)}
    ${hairBack(L)}
    <path d="M8 100 C10 80 28 71 50 71 C72 71 90 80 92 100Z" fill="url(#a${id})"/>
    <ellipse cx="25" cy="80" rx="13" ry="8" fill="${shade(L.armor, -0.05)}" stroke="${L.accent}" stroke-width="1.2"/>
    <ellipse cx="75" cy="80" rx="13" ry="8" fill="${shade(L.armor, -0.05)}" stroke="${L.accent}" stroke-width="1.2"/>
    <path d="M38 73 L50 86 L62 73" stroke="${L.accent}" stroke-width="2" fill="none"/>
    <path d="M50 88 L54 93 L50 98 L46 93Z" fill="${L.accent}"/>
    <path d="M44 60 L56 60 L57 74 L43 74Z" fill="${shade(skin, -0.15)}"/>
    ${headSvg(L, id, skin, eye, glowEyes, hood)}
  </g>
  ${hollow ? `<path d="M40 34 L44 42 L41 48 M60 60 L56 66" stroke="#ff3030" stroke-width=".8" opacity=".55" fill="none"/>
    <rect width="100" height="100" fill="#200010" opacity=".25"/>` : ""}
  <rect width="100" height="100" fill="url(#b${id})" opacity=".12"/>
</svg>`;
}

function titanArt(el) {
  const id = ++_artId, ec = ELEMENTS[el].color;
  return `<svg class="art" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <defs>
    <radialGradient id="tb${id}" cx="50%" cy="40%" r="75%"><stop offset="0" stop-color="${shade(ec, -0.1)}"/><stop offset=".6" stop-color="#2a1a1a"/><stop offset="1" stop-color="#0a0608"/></radialGradient>
    <linearGradient id="ts${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a8078"/><stop offset="1" stop-color="#3a3430"/></linearGradient>
    <filter id="tg${id}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2"/></filter>
  </defs>
  <rect width="100" height="100" fill="url(#tb${id})"/>
  <path d="M0 100 L6 70 Q20 56 34 60 L40 54 L60 54 L66 60 Q80 56 94 70 L100 100Z" fill="url(#ts${id})"/>
  <path d="M30 60 L28 30 Q30 12 50 10 Q70 12 72 30 L70 60 Q60 70 50 70 Q40 70 30 60Z" fill="url(#ts${id})" stroke="#2a2420" stroke-width="1"/>
  <path d="M28 30 L20 18 L32 24 M72 30 L80 18 L68 24" stroke="#5a5048" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M34 36 L46 40 M66 36 L54 40" stroke="#2a2420" stroke-width="3" stroke-linecap="round"/>
  <g filter="url(#tg${id})"><ellipse cx="41" cy="45" rx="5" ry="3" fill="${ec}"/><ellipse cx="59" cy="45" rx="5" ry="3" fill="${ec}"/><path d="M40 60 Q50 66 60 60" stroke="${ec}" stroke-width="3" fill="none"/></g>
  <ellipse cx="41" cy="45" rx="3.5" ry="1.8" fill="#fff8e0"/><ellipse cx="59" cy="45" rx="3.5" ry="1.8" fill="#fff8e0"/>
  <path d="M40 60 Q50 65 60 60" stroke="#fff2c0" stroke-width="1.2" fill="none"/>
  <path d="M50 12 L48 24 L52 30 L49 38 M36 62 L30 74 L34 84 M64 62 L72 76 L68 88 M14 78 L22 86" stroke="${ec}" stroke-width="1.4" fill="none" opacity=".9"/>
  <path d="M50 12 L48 24 L52 30 L49 38 M36 62 L30 74 L34 84 M64 62 L72 76 L68 88" stroke="${ec}" stroke-width="4" fill="none" opacity=".25" filter="url(#tg${id})"/>
</svg>`;
}

// ---------- chapter backdrops ----------
const SCENES = [ // sky top, sky bottom, far, mid, near, glow, feature
  ["#1f2b46", "#c9805a", "#3b3a5a", "#2a2a3e", "#16141f", "#ffb070", "trees"],     // Thornwick Road
  ["#16283a", "#4f7c8a", "#2a4a5a", "#1c3442", "#0e1a22", "#9fe0ff", "mill"],      // Drowned Mill
  ["#2a1a1e", "#a8483a", "#4a2a2a", "#2e1a1c", "#160c0e", "#ff7040", "peaks"],     // Ashgrave Pass
  ["#1a2e2a", "#7fa088", "#3a5a4a", "#24382e", "#101c16", "#d0ffd8", "reeds"],     // Saltmarsh
  ["#28203a", "#c8a870", "#4a4060", "#2c2640", "#14101e", "#ffe0a0", "ruins"],     // Bellspire
  ["#2a2438", "#e0b0d0", "#5a4a6a", "#3a2e4a", "#1a1424", "#ffd0f0", "crystals"],  // Glass Wastes
  ["#101a2e", "#5a7ab0", "#2a3a5a", "#1a2440", "#0c1220", "#bfe0ff", "peaks"],     // Stormcrown
  ["#0e0a16", "#3a2a5a", "#241a36", "#180f26", "#0a0610", "#b080ff", "crystals"],  // Hollow Deep
  ["#0e1a2a", "#2a5a7a", "#1a3a52", "#10283c", "#081420", "#80e0ff", "ruins"],     // Sunken Cathedral
  ["#1a0a0a", "#ff6a2a", "#3a1410", "#24100c", "#100606", "#ffc060", "peaks"],     // The Last Pyre
];
const _sceneCache = {};
function ridge(rng, y, amp, steps, w = 400) {
  let d = `M0 ${y}`;
  for (let i = 0; i <= steps; i++) d += ` L${(i / steps) * w} ${y - rng() * amp}`;
  return d + ` L${w} 300 L0 300Z`;
}
function sceneSvg(chapter) {
  const [top, bot, far, mid, near, glow, feature] = SCENES[chapter % SCENES.length];
  const rng = seeded(chapter * 31 + 3);
  let feat = "";
  if (feature === "trees") for (let i = 0; i < 14; i++) { const x = rng() * 400, h = 40 + rng() * 50; feat += `<path d="M${x} 250 L${x - 12} 250 L${x} ${250 - h} L${x + 12} 250Z" fill="${near}"/>`; }
  if (feature === "peaks") feat += `<path d="${ridge(rng, 200, 110, 9)}" fill="${far}" opacity=".9"/>`;
  if (feature === "mill") feat += `<rect x="290" y="150" width="34" height="80" fill="${mid}"/><path d="M286 150 L307 126 L328 150Z" fill="${mid}"/><g stroke="${mid}" stroke-width="5"><path d="M307 140 L307 90 M307 140 L350 150 M307 140 L270 160 M307 140 L320 185"/></g>`;
  if (feature === "reeds") for (let i = 0; i < 60; i++) { const x = rng() * 400; feat += `<path d="M${x} 260 Q${x + 4} ${230 - rng() * 20} ${x + 8 * (rng() - 0.5)} ${210 - rng() * 30}" stroke="${near}" stroke-width="2" fill="none"/>`; }
  if (feature === "ruins") for (let i = 0; i < 6; i++) { const x = 20 + i * 70 + rng() * 20, h = 40 + rng() * 90; feat += `<rect x="${x}" y="${230 - h}" width="16" height="${h}" fill="${mid}"/><rect x="${x - 4}" y="${226 - h}" width="24" height="6" fill="${mid}"/>`; }
  if (feature === "crystals") for (let i = 0; i < 10; i++) { const x = rng() * 400, h = 30 + rng() * 70; feat += `<path d="M${x} 250 L${x - 9} 250 L${x - 3} ${250 - h} L${x + 6} 250Z" fill="${glow}" opacity="${0.15 + rng() * 0.25}"/>`; }
  let stars = "";
  for (let i = 0; i < 40; i++) stars += `<circle cx="${rng() * 400}" cy="${rng() * 120}" r="${rng() * 1.2}" fill="#fff" opacity="${rng() * 0.6}"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
    <defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bot}"/></linearGradient>
    <radialGradient id="gl" cx="70%" cy="55%" r="45%"><stop offset="0" stop-color="${glow}" stop-opacity=".55"/><stop offset="1" stop-color="${glow}" stop-opacity="0"/></radialGradient></defs>
    <rect width="400" height="300" fill="url(#sk)"/>${stars}<rect width="400" height="300" fill="url(#gl)"/>
    <path d="${ridge(rng, 170, 50, 7)}" fill="${far}" opacity=".85"/>
    ${feature === "peaks" ? feat : ""}
    <path d="${ridge(rng, 215, 40, 12)}" fill="${mid}"/>
    ${feature !== "peaks" ? feat : ""}
    <path d="${ridge(rng, 255, 18, 16)}" fill="${near}"/>
    <rect y="200" width="400" height="100" fill="${near}" opacity=".35"/>
  </svg>`;
}
// Single-quoted url() so it can sit inside a double-quoted style attribute.
const svgUrl = (svg) => `url('data:image/svg+xml,${encodeURIComponent(svg).replace(/'/g, "%27")}')`;
function sceneUrl(chapter) {
  if (!_sceneCache[chapter]) _sceneCache[chapter] = svgUrl(sceneSvg(chapter));
  return _sceneCache[chapter];
}
function titanSceneUrl() {
  if (!_sceneCache.titan) {
    const svg = sceneSvg(9).replace(/#ff6a2a/g, "#c0401a");
    _sceneCache.titan = svgUrl(svg);
  }
  return _sceneCache.titan;
}

// ---------- battle FX (canvas particles) ----------
const FX = (() => {
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let cv = null, ctx = null, parts = [], running = false, dpr = 1;
  function ensure() {
    if (cv) return;
    cv = document.createElement("canvas");
    cv.id = "fx";
    document.body.appendChild(cv);
    ctx = cv.getContext("2d");
    resize();
    window.addEventListener("resize", resize);
  }
  function resize() {
    if (!cv) return;
    dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
  }
  function loop() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    const now = performance.now();
    parts = parts.filter((p) => now - p.t0 < p.life);
    for (const p of parts) p.draw(ctx, (now - p.t0) / p.life, now);
    if (parts.length) requestAnimationFrame(loop); else { running = false; ctx.clearRect(0, 0, innerWidth, innerHeight); }
  }
  function add(p) {
    ensure();
    p.t0 = performance.now();
    parts.push(p);
    if (!running) { running = true; requestAnimationFrame(loop); }
  }
  const spd = () => (typeof G !== "undefined" && G.settings && G.settings.speed) || 1;
  const center = (el) => { const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height * 0.4 }; };

  function burst(x, y, color, n = 18, power = 1) {
    if (reduce) n = Math.ceil(n / 3);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, v = (40 + Math.random() * 120) * power, size = 1.5 + Math.random() * 3;
      add({ life: (450 + Math.random() * 300) / spd(), draw(c, k) {
        const e = 1 - Math.pow(1 - k, 2);
        c.globalAlpha = 1 - k; c.fillStyle = color;
        c.beginPath(); c.arc(x + Math.cos(a) * v * e, y + Math.sin(a) * v * e + 30 * k * k, size * (1 - k * 0.5), 0, 7); c.fill();
        c.globalAlpha = 1;
      } });
    }
    add({ life: 300 / spd(), draw(c, k) { // shock ring
      c.globalAlpha = (1 - k) * 0.8; c.strokeStyle = color; c.lineWidth = 3 * (1 - k);
      c.beginPath(); c.arc(x, y, 8 + 40 * k * power, 0, 7); c.stroke(); c.globalAlpha = 1;
    } });
  }
  function slash(x, y, color) {
    const rot = -0.6 + Math.random() * 0.4;
    add({ life: 260 / spd(), draw(c, k) {
      c.save(); c.translate(x, y); c.rotate(rot);
      c.globalAlpha = 1 - k; c.strokeStyle = "#fff"; c.lineWidth = 4 * (1 - k); c.shadowColor = color; c.shadowBlur = 14;
      c.beginPath(); c.arc(0, 0, 34, -1.2, -1.2 + 2.4 * Math.min(1, k * 2.2)); c.stroke();
      c.restore(); c.globalAlpha = 1; c.shadowBlur = 0;
    } });
  }
  function projectile(from, to, color, ms = 280) {
    return new Promise((res) => {
      const life = ms / spd();
      add({ life, draw(c, k) {
        const x = from.x + (to.x - from.x) * k, y = from.y + (to.y - from.y) * k - Math.sin(k * Math.PI) * 30;
        c.shadowColor = color; c.shadowBlur = 18; c.fillStyle = "#fff";
        c.beginPath(); c.arc(x, y, 5, 0, 7); c.fill();
        c.fillStyle = color; c.globalAlpha = 0.6; c.beginPath(); c.arc(x, y, 9, 0, 7); c.fill();
        c.globalAlpha = 1; c.shadowBlur = 0;
        if (Math.random() < 0.7) parts.push(trail(x, y, color));
      } });
      setTimeout(res, life);
    });
  }
  function trail(x, y, color) {
    return { t0: performance.now(), life: 300, draw(c, k) { c.globalAlpha = (1 - k) * 0.6; c.fillStyle = color; c.beginPath(); c.arc(x, y, 4 * (1 - k), 0, 7); c.fill(); c.globalAlpha = 1; } };
  }
  function rise(x, y, color, n = 12, glyph = null) {
    if (reduce) n = Math.ceil(n / 3);
    for (let i = 0; i < n; i++) {
      const dx = (Math.random() - 0.5) * 50, delay = Math.random() * 0.3;
      add({ life: 800 / spd(), draw(c, k) {
        const kk = Math.max(0, (k - delay) / (1 - delay)); if (kk <= 0) return;
        c.globalAlpha = 1 - kk; c.fillStyle = color;
        if (glyph) { c.font = "bold 14px system-ui"; c.fillText(glyph, x + dx, y + 20 - 50 * kk); }
        else { c.beginPath(); c.arc(x + dx, y + 20 - 55 * kk, 2.4, 0, 7); c.fill(); }
        c.globalAlpha = 1;
      } });
    }
  }
  function dissolve(x, y) { burst(x, y, "#888", 26, 0.7); rise(x, y, "#555", 10); }
  function shake(intensity = 6) {
    if (reduce) return;
    const el = document.querySelector(".battle");
    if (!el) return;
    el.animate([{ transform: "translate(0,0)" }, { transform: `translate(${intensity}px,${-intensity / 2}px)` },
      { transform: `translate(${-intensity}px,${intensity / 2}px)` }, { transform: "translate(0,0)" }], { duration: 220 });
  }
  function flash(color = "#fff") {
    if (reduce) return;
    add({ life: 180, draw(c, k) { c.globalAlpha = (1 - k) * 0.25; c.fillStyle = color; c.fillRect(0, 0, innerWidth, innerHeight); c.globalAlpha = 1; } });
  }
  function portal(x, y, color, ms = 1100) {
    add({ life: ms, draw(c, k, now) {
      const r = 20 + 90 * Math.min(1, k * 1.6);
      for (let i = 0; i < 3; i++) {
        c.globalAlpha = (1 - k) * 0.7; c.strokeStyle = i === 1 ? "#fff" : color; c.lineWidth = 3;
        c.beginPath(); c.arc(x, y, r * (1 - i * 0.22), now / 200 + i * 2, now / 200 + i * 2 + 4.2); c.stroke();
      }
      c.globalAlpha = Math.sin(k * Math.PI) * 0.5; c.fillStyle = color; c.beginPath(); c.arc(x, y, r * 0.5, 0, 7); c.fill();
      c.globalAlpha = 1;
    } });
    for (let i = 0; i < 40; i++) {
      const a = Math.random() * 7, d = 120 + Math.random() * 80;
      add({ life: ms * 0.9, draw(c, k) { const e = 1 - k; c.globalAlpha = k; c.fillStyle = color;
        c.beginPath(); c.arc(x + Math.cos(a + k * 2) * d * e, y + Math.sin(a + k * 2) * d * e, 2.5, 0, 7); c.fill(); c.globalAlpha = 1; } });
    }
  }
  function clear() { parts = []; if (ctx) ctx.clearRect(0, 0, innerWidth, innerHeight); }
  return { burst, slash, projectile, rise, dissolve, shake, flash, portal, center, clear };
})();

// ---------- full-body battle sprites ----------
// viewBox 0 0 100 150. Parts are grouped so CSS / Web Animations can move them:
//   .sp-body (breathing), .sp-armf (weapon arm, pivots at 70,58), .sp-armb (off arm,
//   pivots at 30,58), .sp-cape (sway). Weapons are drawn in hand-local coordinates.
const RANGED = new Set(["staff", "orb", "bell", "lantern", "candle", "mirror", "bow"]);
function weaponInHand(kind, L, id) {
  const wood = "#6a4a2a", metal = `url(#m${id})`, a = L.accent;
  switch (kind) {
    case "spear": return `<path d="M0 14 L0 -40" stroke="${wood}" stroke-width="2.4"/><path d="M0 -48 L3.5 -38 L0 -40 L-3.5 -38Z" fill="${metal}"/>`;
    case "sword": return `<path d="M0 2 L0 -34" stroke="${metal}" stroke-width="4" stroke-linecap="round"/><path d="M-6 0 L6 0" stroke="${a}" stroke-width="2.5"/><path d="M0 -6 L0 -32" stroke="#fff" stroke-width="1" opacity=".6"/>`;
    case "katana": return `<path d="M0 4 Q3 -16 8 -36" stroke="${metal}" stroke-width="2.6" fill="none"/><path d="M-4 0 L4 1" stroke="${a}" stroke-width="2.5"/>`;
    case "staff": return `<path d="M0 22 L0 -34" stroke="${wood}" stroke-width="2.6"/><circle cx="0" cy="-38" r="4.5" fill="${a}"/><circle cx="0" cy="-38" r="8" fill="${a}" opacity=".3" class="sp-glow"/>`;
    case "hammer": return `<path d="M0 10 L0 -26" stroke="${wood}" stroke-width="3"/><rect x="-9" y="-36" width="18" height="12" rx="2" fill="${metal}"/><rect x="-9" y="-31" width="18" height="2.5" fill="${a}"/>`;
    case "trident": return `<path d="M0 16 L0 -34" stroke="${metal}" stroke-width="2.4"/><path d="M-6 -30 L-6 -42 M0 -34 L0 -46 M6 -30 L6 -42 M-6 -30 Q0 -26 6 -30" stroke="${metal}" stroke-width="2.2" fill="none"/>`;
    case "bow": return `<path d="M2 -30 Q-12 0 2 30" stroke="${wood}" stroke-width="2.4" fill="none"/><path d="M2 -30 L2 30" stroke="#ddd" stroke-width=".7"/>`;
    case "lantern": return `<path d="M0 0 L0 6" stroke="#555" stroke-width="1.2"/><rect x="-5" y="6" width="10" height="12" rx="2.5" fill="#3a3020"/><rect x="-3.2" y="8.5" width="6.4" height="7" rx="1.5" fill="${a}"/><circle cx="0" cy="12" r="10" fill="${a}" opacity=".25" class="sp-glow"/>`;
    case "candle": return `<rect x="-3" y="-12" width="6" height="12" fill="#f0e6d0"/><path d="M0 -12 Q-3 -18 0 -22 Q3 -18 0 -12Z" fill="${a}"/><circle cx="0" cy="-17" r="8" fill="${a}" opacity=".3" class="sp-glow"/>`;
    case "club": return `<path d="M0 6 L3 -26" stroke="${wood}" stroke-width="5.5" stroke-linecap="round"/><circle cx="3" cy="-28" r="5.5" fill="${shade(wood, -0.05)}"/>`;
    case "hook": return `<path d="M0 6 L0 -24 Q0 -32 -6 -32 Q-10 -30 -8 -26" stroke="${metal}" stroke-width="2.4" fill="none"/>`;
    case "whip": return `<path d="M0 0 Q12 -10 6 -24 Q0 -36 12 -44" stroke="${a}" stroke-width="2" fill="none"/>`;
    case "daggers": return `<path d="M0 2 L4 -18" stroke="${metal}" stroke-width="2.4"/>`;
    case "mirror": return `<path d="M0 0 L0 -10" stroke="${a}" stroke-width="2.4"/><ellipse cx="0" cy="-18" rx="6" ry="8" fill="#cfe4ff" stroke="${a}" stroke-width="2"/>`;
    case "orb": return `<circle cx="0" cy="-8" r="6" fill="${a}"/><circle cx="0" cy="-8" r="11" fill="${a}" opacity=".25" class="sp-glow"/><circle cx="-2" cy="-10" r="2" fill="#fff" opacity=".6"/>`;
    case "bell": return `<path d="M-7 -4 Q-7 -18 0 -18 Q7 -18 7 -4 L9 -1 L-9 -1Z" fill="#ffd870" stroke="#a07a20" stroke-width=".8"/><circle cx="0" cy="1" r="2" fill="#a07a20"/>`;
    default: return "";
  }
}
function heroSprite(templateId, el, opts = {}) {
  const L = LOOKS[templateId];
  if (!L) return heroArt(templateId, el, opts);
  const id = ++_artId;
  const hollow = !!opts.hollow;
  const skin = SKIN[L.skin];
  const eye = hollow ? "#ff3030" : L.glow || "#2a2030";
  const glowEyes = hollow || !!L.glow;
  const hood = L.style === "hood";
  const ec = ELEMENTS[el].color;
  const t = HERO[templateId];
  const cape = t && (t.rarity === "legendary" || t.rarity === "epic");
  const armD = shade(L.armor, -0.12), pants = shade(L.armor, -0.3), boot = "#2a2018";
  const shield = L.prop === "shield";
  const dual = L.prop === "daggers";
  return `<svg class="sprite" viewBox="0 0 100 150" aria-hidden="true" overflow="visible">
  <defs>
    <linearGradient id="a${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${shade(L.armor, 0.15)}"/><stop offset="1" stop-color="${shade(L.armor, -0.2)}"/></linearGradient>
    <linearGradient id="m${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e8eef4"/><stop offset=".5" stop-color="#8a96a4"/><stop offset="1" stop-color="#4a5260"/></linearGradient>
    <radialGradient id="s${id}" cx="45%" cy="40%" r="60%"><stop offset="0" stop-color="${shade(skin, 0.06)}"/><stop offset="1" stop-color="${shade(skin, -0.12)}"/></radialGradient>
    <radialGradient id="au${id}"><stop offset="0" stop-color="${ec}" stop-opacity=".55"/><stop offset="1" stop-color="${ec}" stop-opacity="0"/></radialGradient>
    <filter id="g${id}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.4"/></filter>
    ${hollow ? `<filter id="h${id}"><feColorMatrix type="saturate" values=".35"/><feComponentTransfer><feFuncR type="linear" slope=".95"/><feFuncG type="linear" slope=".82"/><feFuncB type="linear" slope=".95"/></feComponentTransfer></filter>` : ""}
  </defs>
  <ellipse cx="50" cy="144" rx="30" ry="6" fill="#000" opacity=".45"/>
  <ellipse class="sp-aura" cx="50" cy="132" rx="34" ry="12" fill="url(#au${id})"/>
  <g ${hollow ? `filter="url(#h${id})"` : ""}>
    <g class="sp-legs">
      <rect x="38" y="104" width="9" height="30" rx="3" fill="${pants}"/><rect x="53" y="104" width="9" height="30" rx="3" fill="${pants}"/>
      <path d="M36 130 h12 v8 q0 3 -3 3 h-11 q-2 0 -1 -3Z" fill="${boot}"/><path d="M52 130 h12 v8 q0 3 -3 3 h-9 q-2 0 -1 -3Z" fill="${boot}"/>
    </g>
    <g class="sp-body">
      ${cape ? `<path class="sp-cape" d="M33 56 Q50 52 67 56 L76 124 Q50 130 24 124Z" fill="${shade(L.accent, -0.35)}" opacity=".95"/>` : ""}
      <g class="sp-armb">
        <path d="M31 58 Q22 72 25 90" stroke="${armD}" stroke-width="8" fill="none" stroke-linecap="round"/>
        <circle cx="25" cy="92" r="4" fill="url(#s${id})"/>
        ${shield ? `<path d="M12 80 L30 76 L32 100 Q24 112 14 106 Q9 96 12 80Z" fill="url(#m${id})" stroke="${L.accent}" stroke-width="1.6"/><circle cx="21.5" cy="91" r="3" fill="${L.accent}"/>` : ""}
        ${dual ? `<g transform="translate(25 92) rotate(-14)">${weaponInHand("daggers", L, id)}</g>` : ""}
      </g>
      <path d="M33 56 Q50 50 67 56 L70 94 L30 94Z" fill="url(#a${id})"/>
      <path d="M30 94 L70 94 L75 110 L25 110Z" fill="${armD}"/>
      <rect x="30" y="88" width="40" height="5" fill="${L.accent}" opacity=".9"/>
      <path d="M40 57 L50 70 L60 57" stroke="${L.accent}" stroke-width="1.8" fill="none"/>
      <path d="M50 74 L53 78 L50 82 L47 78Z" fill="${L.accent}"/>
      <ellipse cx="32" cy="59" rx="8" ry="5.5" fill="${shade(L.armor, -0.05)}" stroke="${L.accent}" stroke-width="1"/>
      <ellipse cx="68" cy="59" rx="8" ry="5.5" fill="${shade(L.armor, -0.05)}" stroke="${L.accent}" stroke-width="1"/>
      <g transform="translate(10 -12) scale(.8)">
        ${hairBack(L)}
        <path d="M44 60 L56 60 L57 74 L43 74Z" fill="${shade(skin, -0.15)}"/>
        ${headSvg(L, id, skin, eye, glowEyes, hood)}
      </g>
      <g class="sp-armf">
        <path d="M69 58 Q78 72 75 90" stroke="${armD}" stroke-width="8" fill="none" stroke-linecap="round"/>
        <g transform="translate(75 92)">${shield ? weaponInHand("sword", L, id) : weaponInHand(L.prop, L, id)}<circle r="4" fill="url(#s${id})"/></g>
      </g>
    </g>
  </g>

</svg>`;
}
const spriteKind = (templateId) => (LOOKS[templateId] && RANGED.has(LOOKS[templateId].prop) ? "cast" : "melee");
