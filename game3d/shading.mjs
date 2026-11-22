// Sigilbound 3D — character shading: role-aware stylized PBR, normal smoothing, subdivision
// and an optional inverted-hull outline for the low-poly rigged heroes.
//
// Three.js r149 (MeshStandardMaterial / MeshPhysicalMaterial patched with onBeforeCompile, so
// skinning, shadows, fog, env maps and tone mapping all keep working).
//
//   upgradeMaterial(mat, role, opts)       → cached clone with the Sigil shading patch
//   tagRole(geometry, role)                → writes the per-vertex `sbRole` attribute (id, height)
//   smoothNormals(geometry, angleDeg)      → new geometry, smooth normals, hard edges kept
//   subdivide(geometry, levels, opts)      → new geometry, crease-aware Loop subdivision,
//                                            skinIndex/skinWeight/uv/color/sbRole interpolated
//   outline(mesh, opts)                    → inverted-hull outline mesh (skinned-compatible)
//   applyCharacterLook(root, opts)         → walks a character and applies all of the above by tier
//   roleFromGame(gameRole, base, matName)  → maps three3d.mjs recolour roles to shading roles
//
// Why a per-vertex role: three3d.mjs merges every body/kit primitive that shares a finish into
// ONE skinned mesh with baked vertex colours (2–6 draw calls per hero). The shading role (skin,
// hair, cloth…) is therefore carried per vertex in `sbRole` (vec2: role id, normalised height
// inside the source part) and the vertex shader looks the role's parameters up in a small
// uniform table, so one program and one draw call shade skin, hair and cloth differently.
// Without the attribute, the material's own role (uniform) is used.
//
// Shader cost by tier (SB_Q define, on top of MeshStandardMaterial):
//   Q0 (Low)       wrap diffuse, SSS terminator tint, per-role finish, fresnel rim     ~ +25 ALU
//   Q1 (Medium)    + painterly ramp, cloth sheen/fuzz, hair band (1 lobe), metal sky/ground
//                    reflection, gem core, eye catchlight                                ~ +70 ALU
//   Q2 (High/Ult.) + 2nd hair lobe, painted curvature edge (fwidth), saturation keep   ~ +95 ALU
//   3 extra vec4 varyings; the role table is read in the vertex shader (no fragment branching
//   on uniform-array indices, which WebGL1 fragment shaders don't guarantee).

import * as T from "three";

// ---------------------------------------------------------------------------------------------
// Role table
// ---------------------------------------------------------------------------------------------

export const ROLE_IDS = { default: 0, skin: 1, hair: 2, cloth: 3, leather: 4, metal: 5, gold: 6, gem: 7, eye: 8 };
const N_ROLES = 9;

// A: wrap, sss, sheen, hair band     B: roughness (<0 keep), metalness (<0 keep), spec scale, metal edge/env
// C: rim scale, shadow saturation (1 = neutral), glow (>0 gem core, <0 eye catchlight), height (attr)
// D: albedo gain, painterly ramp scale, spare, spare
export const ROLE_PARAMS = {
  default: { A: [0.18, 0.0, 0.0, 0.0], B: [-1, -1, 1.0, 0.0], C: [1.0, 1.0, 0.0, 0.5], D: [1.0, 1.0, 0, 0] },
  skin:    { A: [0.5, 0.75, 0.0, 0.0], B: [0.5, 0.0, 0.5, 0.0], C: [0.75, 1.18, 0.0, 0.5], D: [1.0, 0.8, 0, 0] },
  hair:    { A: [0.28, 0.12, 0.0, 1.0], B: [0.55, 0.0, 0.3, 0.0], C: [1.0, 1.1, 0.0, 0.5], D: [1.0, 1.0, 0, 0] },
  cloth:   { A: [0.32, 0.0, 0.55, 0.0], B: [0.88, 0.0, 0.35, 0.0], C: [1.0, 0.85, 0.0, 0.5], D: [1.0, 1.0, 0, 0] },
  leather: { A: [0.2, 0.0, 0.15, 0.0], B: [0.52, 0.0, 0.85, 0.25], C: [0.9, 1.0, 0.0, 0.5], D: [1.0, 1.0, 0, 0] },
  metal:   { A: [0.06, 0.0, 0.0, 0.0], B: [0.3, 0.88, 1.0, 1.0], C: [0.75, 1.0, 0.0, 0.5], D: [1.2, 0.7, 0, 0] },
  gold:    { A: [0.06, 0.0, 0.0, 0.0], B: [0.26, 1.0, 1.0, 1.0], C: [0.75, 1.1, 0.0, 0.5], D: [1.15, 0.7, 0, 0] },
  gem:     { A: [0.2, 0.0, 0.0, 0.0], B: [0.12, 0.0, 1.5, 0.3], C: [1.2, 1.2, 1.0, 0.5], D: [1.0, 0.5, 0, 0] },
  eye:     { A: [0.1, 0.0, 0.0, 0.0], B: [0.18, 0.0, 1.0, 0.0], C: [0.25, 1.0, -1.0, 0.5], D: [1.0, 0.0, 0, 0] },
};

const roleTable = { A: [], B: [], C: [], D: [] };
for (let i = 0; i < N_ROLES; i++) for (const k of "ABCD") roleTable[k].push(new T.Vector4());
const tableUniforms = {
  uSbRoleA: { value: roleTable.A }, uSbRoleB: { value: roleTable.B },
  uSbRoleC: { value: roleTable.C }, uSbRoleD: { value: roleTable.D },
};
function syncTable() {
  for (const [name, id] of Object.entries(ROLE_IDS)) {
    const p = ROLE_PARAMS[name];
    for (const k of "ABCD") roleTable[k][id].fromArray(p[k]);
  }
}
syncTable();

/** Tweak a role globally (all upgraded materials share the table): setRoleParams("skin", { A: [...] }). */
export function setRoleParams(role, p) {
  Object.assign(ROLE_PARAMS[role], p);
  syncTable();
}

// ---------------------------------------------------------------------------------------------
// GLSL
// ---------------------------------------------------------------------------------------------

const VERT_PARS = /* glsl */`
#ifdef SB_ROLE_ATTR
attribute vec2 sbRole;
#endif
uniform float uSbRole;
uniform vec4 uSbRoleA[${N_ROLES}];
uniform vec4 uSbRoleB[${N_ROLES}];
uniform vec4 uSbRoleC[${N_ROLES}];
uniform vec4 uSbRoleD[${N_ROLES}];
varying vec4 vSbA;
varying vec4 vSbB;
varying vec4 vSbC;
varying vec2 vSbD;
`;

const VERT_MAIN = /* glsl */`
{
#ifdef SB_ROLE_ATTR
  int sbI = int(clamp(sbRole.x, 0.0, ${N_ROLES - 1}.0) + 0.5); float sbAux = sbRole.y;
#else
  int sbI = int(uSbRole + 0.5); float sbAux = 0.5;
#endif
  vSbA = uSbRoleA[sbI]; vSbB = uSbRoleB[sbI]; vSbC = uSbRoleC[sbI]; vSbC.w = sbAux; vSbD = uSbRoleD[sbI].xy;
}
`;

const FRAG_PARS = /* glsl */`
varying vec4 vSbA;
varying vec4 vSbB;
varying vec4 vSbC;
varying vec2 vSbD;
uniform vec3 uSbRimColor;
uniform float uSbRim;
uniform float uSbRamp;
uniform vec3 uSbSky;
uniform vec3 uSbGround;
uniform float uSbSat;
uniform float uSbEnvBoost;
uniform vec3 uSbSssColor;
float sbLuma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
// Painterly ramp: three soft bands (shadow / mid / light) — blended with the PBR term by uSbRamp.
float sbRampF(float d) { return 0.05 + 0.45 * smoothstep(0.03, 0.17, d) + 0.42 * smoothstep(0.42, 0.6, d) + 0.08 * smoothstep(0.86, 0.98, d); }
`;

// Replaces RE_Direct (called once per direct light, after shadows have scaled directLight.color).
const FRAG_DIRECT = /* glsl */`
void RE_Direct_Sigil( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
  vec3 N = geometry.normal; vec3 V = geometry.viewDir; vec3 L = directLight.direction;
  float nl = dot( N, L );
  float w = vSbA.x;
  float d = saturate( ( nl + w ) / ( 1.0 + w ) );
#if SB_Q >= 1
  d = mix( d, sbRampF( d ), uSbRamp * vSbD.y );
#endif
  // Subsurface-like scatter: a warm, red-shifted band around the terminator.
  float t = smoothstep( -0.5, 0.0, nl ) * ( 1.0 - smoothstep( 0.0, 0.55, nl ) );
  vec3 diff = vec3( d ) + uSbSssColor * ( t * vSbA.y * 0.5 );
  reflectedLight.directDiffuse += directLight.color * diff * BRDF_Lambert( material.diffuseColor );
  vec3 irr = saturate( nl ) * directLight.color;
  reflectedLight.directSpecular += irr * BRDF_GGX( L, V, N, material.specularColor, material.specularF90, material.roughness ) * vSbB.z;
#if SB_Q >= 1
  float nv = saturate( dot( N, V ) );
  // Cloth: sheen at grazing view + fuzz that wraps into the shadow side.
  if ( vSbA.z > 0.001 ) {
    float fuzz = pow( 1.0 - nv, 3.0 ) * smoothstep( -0.3, 0.6, nl );
    reflectedLight.directSpecular += directLight.color * ( fuzz * vSbA.z * 0.35 ) * mix( material.diffuseColor, vec3( 1.0 ), 0.45 );
  }
  // Hair: tangent-free Kajiya-Kay band. Strand direction = world up projected on the surface.
  if ( vSbA.w > 0.001 ) {
    vec3 up = normalize( ( viewMatrix * vec4( 0.0, 1.0, 0.0, 0.0 ) ).xyz );
    vec3 Tg = up - N * dot( N, up );
    Tg = Tg / max( length( Tg ), 1e-3 );
    vec3 H = normalize( L + V );
    float th = dot( normalize( Tg + N * 0.1 ), H );
    float band = pow( sqrt( max( 1.0 - th * th, 0.0 ) ), 110.0 ) * 0.5;
  #if SB_Q >= 2
    float th2 = dot( normalize( Tg - N * 0.18 ), H );
    band += pow( sqrt( max( 1.0 - th2 * th2, 0.0 ) ), 24.0 ) * 0.22 * sbLuma( material.diffuseColor ) * 3.0;
  #endif
    float hl = smoothstep( -0.1, 0.4, nl ) * vSbA.w;
    reflectedLight.directSpecular += directLight.color * hl * band * mix( vec3( 1.0 ), material.diffuseColor * 2.0 + 0.2, 0.4 );
  }
#endif
}
#undef RE_Direct
#define RE_Direct RE_Direct_Sigil
`;

const FRAG_FINISH = /* glsl */`
#ifndef SB_KEEP_FINISH
  if ( vSbB.x >= 0.0 ) roughnessFactor = vSbB.x;
  if ( vSbB.y >= 0.0 ) metalnessFactor = vSbB.y;
#endif
`;

const FRAG_COLOR = /* glsl */`
  diffuseColor.rgb *= vSbD.x;
  // Hair: darker toward the bottom of each hair part (and its roots/underside), lighter on top.
  diffuseColor.rgb *= mix( 1.0, mix( 0.6, 1.08, smoothstep( 0.0, 0.8, vSbC.w ) ), vSbA.w );
`;

const FRAG_POST = /* glsl */`
{
  vec3 sbN = geometry.normal; vec3 sbV = geometry.viewDir;
  float sbNV = saturate( dot( sbN, sbV ) );
  vec3 sbNw = ( vec4( sbN, 0.0 ) * viewMatrix ).xyz; // view → world (rotation only)
  // Ambient / shadow-side saturation per role (cloth a touch greyer, skin warmer and richer).
  float sbIl = sbLuma( reflectedLight.indirectDiffuse );
  reflectedLight.indirectDiffuse = max( mix( vec3( sbIl ), reflectedLight.indirectDiffuse, vSbC.y ), 0.0 );
  float sbDl = sbLuma( reflectedLight.directDiffuse );
  reflectedLight.directDiffuse = max( mix( vec3( sbDl ), reflectedLight.directDiffuse, mix( 1.0, vSbC.y, 0.5 ) ), 0.0 );
  // Per-role specular scale, and metals get the env at full strength even on dim-env finishes.
  reflectedLight.indirectSpecular *= vSbB.z * mix( 1.0, uSbEnvBoost, metalnessFactor );
#if SB_Q >= 1
  vec3 sbRw = ( vec4( reflect( -sbV, sbN ), 0.0 ) * viewMatrix ).xyz;
  float sbSky = smoothstep( -0.3, 0.5, sbRw.y );
  // Stylised sky/ground reflection + a painted horizon streak so metal always reads as metal.
  vec3 sbEnv = mix( uSbGround, uSbSky, sbSky ) + uSbSky * ( 1.2 * smoothstep( 0.05, 0.2, sbRw.y ) * ( 1.0 - smoothstep( 0.2, 0.45, sbRw.y ) ) );
  reflectedLight.indirectSpecular += sbEnv * material.specularColor * ( metalnessFactor * vSbB.w * 0.55 );
#endif
#if SB_Q >= 2
  // Painted edge highlight on tight curvature (metal and gold rims, rivets, plate borders).
  float sbCurv = length( fwidth( sbN ) ) / max( length( fwidth( geometry.position ) ), 1e-5 );
  float sbEdge = smoothstep( 6.0, 22.0, sbCurv ) * vSbB.w;
  totalEmissiveRadiance += material.specularColor * sbEdge * ( 0.18 + 0.25 * sbSky );
#endif
  // Fresnel rim in the hero's element colour, favouring up-facing surfaces.
  float sbRimF = smoothstep( 0.5, 0.95, 1.0 - sbNV ) * ( 0.45 + 0.55 * saturate( sbNw.y + 0.4 ) );
  totalEmissiveRadiance += uSbRimColor * ( uSbRim * vSbC.x * sbRimF );
#if SB_Q >= 1
  if ( vSbC.z > 0.0 ) { // gem: glowing core + white fresnel
    totalEmissiveRadiance += diffuseColor.rgb * vSbC.z * ( 0.25 + 0.9 * pow( sbNV, 2.5 ) ) + vec3( 0.5 ) * pow( 1.0 - sbNV, 4.0 ) * vSbC.z;
  } else if ( vSbC.z < 0.0 ) { // eye: a small fixed catchlight (upper left, toward the camera)
    vec3 sbCl = normalize( vec3( -0.35, 0.5, 1.0 ) );
    totalEmissiveRadiance += vec3( 0.9 ) * ( pow( saturate( dot( reflect( -sbV, sbN ), sbCl ) ), 24.0 ) * -vSbC.z );
    totalEmissiveRadiance += diffuseColor.rgb * 0.25 * -vSbC.z;
  }
#endif
}
`;

const FRAG_OUT = /* glsl */`
#if SB_Q >= 2
  { float sbL = sbLuma( outgoingLight ); outgoingLight = max( mix( vec3( sbL ), outgoingLight, 1.0 + uSbSat ), 0.0 ); }
#endif
`;

function patchShader(sh, u) {
  Object.assign(sh.uniforms, tableUniforms, u);
  sh.vertexShader = sh.vertexShader
    .replace("#include <common>", "#include <common>\n" + VERT_PARS)
    .replace("#include <begin_vertex>", "#include <begin_vertex>\n" + VERT_MAIN);
  sh.fragmentShader = sh.fragmentShader
    .replace("#include <common>", "#include <common>\n" + FRAG_PARS)
    .replace("#include <lights_physical_pars_fragment>", "#include <lights_physical_pars_fragment>\n" + FRAG_DIRECT)
    .replace("#include <metalnessmap_fragment>", "#include <metalnessmap_fragment>\n" + FRAG_FINISH)
    .replace("#include <color_fragment>", "#include <color_fragment>\n" + FRAG_COLOR)
    .replace("#include <aomap_fragment>", "#include <aomap_fragment>\n" + FRAG_POST)
    .replace("#include <output_fragment>", FRAG_OUT + "\n#include <output_fragment>");
}

// ---------------------------------------------------------------------------------------------
// Materials
// ---------------------------------------------------------------------------------------------

const QUALITY = { low: 0, medium: 1, high: 2, ultra: 2 };
const normQ = (q) => (q == null ? "high" : String(q).toLowerCase());
const matCache = new Map();
const DEFAULTS = { rim: 0.55, ramp: 0.35, saturation: 0.1, sky: "#cfe0ff", ground: "#4a3a30", sss: "#ff5a3a", rimColor: "#9fb4ff" };
const hex = (c) => new T.Color(c).getHexString();

/**
 * upgradeMaterial(mat, role, opts?) → a cached, patched clone (or `mat` itself if unsupported).
 *   role: "skin" | "hair" | "cloth" | "leather" | "metal" | "gold" | "gem" | "eye" | "default"
 *         | "multi" (read the per-vertex `sbRole` attribute; see tagRole)
 *   opts: quality ("ultra"|"high"|"medium"|"low"), rimColor (element colour), rim (0..1.5),
 *         ramp (painterly strength 0..1), saturation (0..0.3), sky / ground (stylised reflection
 *         colours), sss (scatter tint), keepFinish (don't override roughness/metalness by role),
 *         metalEnv (env multiplier for metals; default 1/envMapIntensity, capped at 4).
 * MeshLambert/Phong materials are converted to MeshStandardMaterial first. Basic (unlit),
 * transparent and points/lines materials are returned unchanged.
 * Runtime tweaks: mat.userData.sbUniforms.uSbRim.value = 1.2 etc. (per material, no recompile).
 */
export function upgradeMaterial(mat, role = "default", opts = {}) {
  if (!mat || mat.userData.sbShade) return mat;
  if (mat.isMeshLambertMaterial || mat.isMeshPhongMaterial) mat = toStandard(mat);
  if (!mat.isMeshStandardMaterial || mat.transparent && mat.opacity < 0.98) return mat;
  const q = normQ(opts.quality), Q = QUALITY[q] ?? 2;
  const multi = role === "multi";
  const roleId = multi ? 0 : ROLE_IDS[role] ?? 0;
  const o = Object.assign({}, DEFAULTS, opts);
  const key = [mat.uuid, role, Q, hex(o.rimColor), o.rim, o.ramp, o.saturation, hex(o.sky), hex(o.ground), hex(o.sss), !!o.keepFinish, o.metalEnv].join("|");
  const hit = matCache.get(key);
  if (hit) return hit;

  const m = mat.clone();
  const prev = Object.prototype.hasOwnProperty.call(mat, "onBeforeCompile") ? mat.onBeforeCompile : null;
  const prevKey = Object.prototype.hasOwnProperty.call(mat, "customProgramCacheKey") ? mat.customProgramCacheKey.call(mat) : "";
  m.defines = Object.assign({}, mat.defines, { SB_Q: Q });
  if (multi) m.defines.SB_ROLE_ATTR = "";
  if (o.keepFinish) m.defines.SB_KEEP_FINISH = "";
  if (!multi && !o.keepFinish) { // mirror the role finish on the material too (shadows/env use them)
    const B = ROLE_PARAMS[role] ? ROLE_PARAMS[role].B : ROLE_PARAMS.default.B;
    if (B[0] >= 0) m.roughness = B[0];
    if (B[1] >= 0) m.metalness = B[1];
  }
  const u = {
    uSbRole: { value: roleId },
    uSbRimColor: { value: new T.Color(o.rimColor) },
    uSbRim: { value: o.rim },
    uSbRamp: { value: Q >= 1 ? o.ramp : 0 },
    uSbSky: { value: new T.Color(o.sky) },
    uSbGround: { value: new T.Color(o.ground) },
    uSbSat: { value: o.saturation },
    uSbEnvBoost: { value: o.metalEnv ?? Math.min(4, 1 / Math.max(0.25, m.envMapIntensity ?? 1)) },
    uSbSssColor: { value: new T.Color(o.sss) },
  };
  m.onBeforeCompile = function (sh, renderer) {
    if (prev) prev.call(this, sh, renderer);
    patchShader(sh, u);
  };
  m.customProgramCacheKey = () => `sbshade|${prevKey}`;
  m.userData = Object.assign({}, mat.userData, { sbShade: { role, quality: q }, sbUniforms: u, sbSource: mat.uuid });
  matCache.set(key, m);
  return m;
}

function toStandard(src) {
  const m = new T.MeshStandardMaterial({
    name: src.name, color: src.color, map: src.map, vertexColors: src.vertexColors, emissive: src.emissive,
    emissiveIntensity: src.emissiveIntensity, emissiveMap: src.emissiveMap, side: src.side, roughness: 0.7, metalness: 0,
    transparent: src.transparent, opacity: src.opacity, alphaTest: src.alphaTest, normalMap: src.normalMap || null,
  });
  m.userData = Object.assign({}, src.userData);
  return m;
}

/** Dispose every cached upgraded material (call on full teardown). */
export function disposeShading() {
  for (const m of matCache.values()) m.dispose();
  matCache.clear();
}

// ---------------------------------------------------------------------------------------------
// Roles
// ---------------------------------------------------------------------------------------------

/** Guess a shading role from a material name (Quaternius: Skin, Hair, Metal, Gold, Brown…). */
export function guessRole(mat) {
  const n = (mat && mat.name || "").toLowerCase();
  if (/skin|face|body_skin/.test(n)) return "skin";
  if (/hair|brow|beard|fur/.test(n)) return "hair";
  if (/^eye|eye_|iris|pupil/.test(n) && !/white/.test(n)) return "eye";
  if (/gold|brass|crown/.test(n)) return "gold";
  if (/metal|steel|iron|silver|blade|armou?r/.test(n)) return "metal";
  if (/gem|crystal|jewel|ruby|sapphire/.test(n)) return "gem";
  if (/leather|brown|boot|belt|strap|wood/.test(n)) return "leather";
  return "cloth";
}

/**
 * Map a three3d.mjs recolour role (roleOf(base, kind, matName)) to a shading role.
 * Returns null for parts that should keep their material (glows, titan stone, hidden parts).
 */
export function roleFromGame(gameRole, base, matName = "") {
  switch (gameRole) {
    case "skin": return "skin";
    case "hair": case "brow": return "hair";
    case "eye": return "eye";
    case "crown": return "gold";
    case "trim": case "blade": return "metal";
    case "accent": return /gold/i.test(matName) ? "gold" : "leather";
    case "armor": return base === "monarch" ? "metal" : base === "hooded" ? "leather" : "cloth";
    case "boot": case "wood": return "leather";
    case "cloth": case "pants": case "hood": return "cloth";
    case "gem": return "gem";
    case "maw": case "glow": case "stone": case "stoneDark": case "socket": case "fang": case "tongue": return null;
    default: return gameRole ? guessRole({ name: matName }) : "default";
  }
}

/**
 * Write the `sbRole` attribute (vec2: role id, height 0..1 inside this geometry's bounds) on
 * `geometry` in place. Call it on every geometry before mergeBufferGeometries so the merged
 * attribute sets match (prepGeo in three3d.mjs is the natural place).
 */
export function tagRole(geometry, role) {
  const pos = geometry.attributes.position, n = pos.count;
  const id = typeof role === "number" ? role : ROLE_IDS[role] ?? 0;
  let lo = Infinity, hi = -Infinity;
  for (let i = 0; i < n; i++) { const y = pos.getY(i); if (y < lo) lo = y; if (y > hi) hi = y; }
  const span = hi - lo || 1, a = new Float32Array(n * 2);
  for (let i = 0; i < n; i++) { a[i * 2] = id; a[i * 2 + 1] = (pos.getY(i) - lo) / span; }
  geometry.setAttribute("sbRole", new T.BufferAttribute(a, 2));
  return geometry;
}

// ---------------------------------------------------------------------------------------------
// Geometry helpers
// ---------------------------------------------------------------------------------------------

const GET = ["getX", "getY", "getZ", "getW"];
function floatArray(a) { // works for interleaved / normalized / quantized (meshopt) attributes
  const n = a.count, s = a.itemSize, out = new Float32Array(n * s);
  for (let c = 0; c < s; c++) { const g = a[GET[c]]; for (let i = 0; i < n; i++) out[i * s + c] = g.call(a, i); }
  return out;
}
function indexArray(g) {
  if (g.index) return g.index.array.length === g.index.count ? g.index.array : Uint32Array.from({ length: g.index.count }, (_, i) => g.index.getX(i));
  const n = g.attributes.position.count, a = new Uint32Array(n);
  for (let i = 0; i < n; i++) a[i] = i;
  return a;
}
// Weld identical positions → position ids (topology), with a tolerance relative to the bounds.
function positionIds(pos, n) {
  let mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < n; i++) for (let c = 0; c < 3; c++) { const v = pos[i * 3 + c]; if (v < mn[c]) mn[c] = v; if (v > mx[c]) mx[c] = v; }
  const diag = Math.hypot(mx[0] - mn[0], mx[1] - mn[1], mx[2] - mn[2]) || 1, inv = 1 / (diag * 1e-5);
  const map = new Map(), pid = new Int32Array(n), rep = [];
  for (let i = 0; i < n; i++) {
    const k = `${Math.round(pos[i * 3] * inv)},${Math.round(pos[i * 3 + 1] * inv)},${Math.round(pos[i * 3 + 2] * inv)}`;
    let id = map.get(k);
    if (id === undefined) { id = rep.length / 3; map.set(k, id); rep.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]); }
    pid[i] = id;
  }
  return { pid, rep: new Float32Array(rep), count: rep.length / 3 };
}
function faceNormals(idx, pid, rep, F) {
  const fn = new Float32Array(F * 3), area = new Float32Array(F);
  for (let f = 0; f < F; f++) {
    const a = pid[idx[f * 3]] * 3, b = pid[idx[f * 3 + 1]] * 3, c = pid[idx[f * 3 + 2]] * 3;
    const ux = rep[b] - rep[a], uy = rep[b + 1] - rep[a + 1], uz = rep[b + 2] - rep[a + 2];
    const vx = rep[c] - rep[a], vy = rep[c + 1] - rep[a + 1], vz = rep[c + 2] - rep[a + 2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const l = Math.hypot(nx, ny, nz);
    area[f] = l / 2;
    if (l > 0) { nx /= l; ny /= l; nz /= l; }
    fn[f * 3] = nx; fn[f * 3 + 1] = ny; fn[f * 3 + 2] = nz;
  }
  return { fn, area };
}

// Output vertex builder: copies or blends source vertices across every attribute.
class VertexBuilder {
  constructor(geometry, capacity, skip = []) {
    this.attrs = [];
    for (const [name, a] of Object.entries(geometry.attributes)) {
      if (skip.includes(name)) continue;
      this.attrs.push({ name, size: a.itemSize, src: floatArray(a), out: new Float32Array(capacity * a.itemSize), skin: name === "skinIndex" });
    }
    this.sw = this.attrs.find((a) => a.name === "skinWeight");
    this.si = this.attrs.find((a) => a.name === "skinIndex");
    this.pos = this.attrs.find((a) => a.name === "position");
    this.n = 0;
  }
  copy(v) {
    const i = this.n++;
    for (const a of this.attrs) for (let c = 0; c < a.size; c++) a.out[i * a.size + c] = a.src[v * a.size + c];
    return i;
  }
  blend(v1, v2) {
    const i = this.n++;
    for (const a of this.attrs) {
      if (a === this.si || a === this.sw) continue;
      for (let c = 0; c < a.size; c++) a.out[i * a.size + c] = (a.src[v1 * a.size + c] + a.src[v2 * a.size + c]) * 0.5;
    }
    if (this.si && this.sw) { // merge both bone sets, keep the 4 strongest, renormalise
      const acc = new Map();
      for (const v of [v1, v2]) for (let c = 0; c < 4; c++) {
        const w = this.sw.src[v * 4 + c] * 0.5; if (w <= 0) continue;
        const b = this.si.src[v * 4 + c]; acc.set(b, (acc.get(b) || 0) + w);
      }
      const top = [...acc].sort((x, y) => y[1] - x[1]).slice(0, 4);
      const sum = top.reduce((s, x) => s + x[1], 0) || 1;
      for (let c = 0; c < 4; c++) {
        this.si.out[i * 4 + c] = top[c] ? top[c][0] : 0;
        this.sw.out[i * 4 + c] = top[c] ? top[c][1] / sum : 0;
      }
    }
    return i;
  }
  setPos(i, x, y, z) { const o = this.pos.out; o[i * 3] = x; o[i * 3 + 1] = y; o[i * 3 + 2] = z; }
  build(index, src) {
    const g = new T.BufferGeometry();
    for (const a of this.attrs) {
      const arr = a.out.subarray(0, this.n * a.size);
      if (a.skin) g.setAttribute(a.name, new T.Uint16BufferAttribute(Uint16Array.from(arr, Math.round), a.size));
      else g.setAttribute(a.name, new T.BufferAttribute(arr.slice(), a.size));
    }
    g.setIndex(new T.BufferAttribute(this.n > 65535 ? Uint32Array.from(index) : Uint16Array.from(index), 1));
    if (src) { g.name = src.name; g.userData = Object.assign({}, src.userData); }
    return g;
  }
}

/**
 * smoothNormals(geometry, angleDeg = 50) → NEW indexed geometry with smooth normals across
 * edges whose faces meet at less than `angleDeg`; sharper edges stay hard (vertices are split
 * only where needed). Positions are welded for adjacency, so flat-shaded / non-indexed input
 * (the Quaternius parts, the merged hero meshes) works. All other attributes are preserved.
 */
export function smoothNormals(geometry, angleDeg = 50) {
  const src = geometry;
  geometry = weldForSubdiv(geometry);
  const pos = geometry.attributes.position.array, idx = geometry.index.array;
  const F = idx.length / 3 | 0, V = geometry.attributes.position.count;
  const { pid, rep, count: P } = positionIds(pos, V);
  const { fn } = faceNormals(idx, pid, rep, F);
  // Corner angle weights and per-position corner lists (CSR).
  const cw = new Float32Array(F * 3), start = new Int32Array(P + 1);
  for (let f = 0; f < F; f++) for (let k = 0; k < 3; k++) {
    const p = pid[idx[f * 3 + k]], a = pid[idx[f * 3 + (k + 1) % 3]], b = pid[idx[f * 3 + (k + 2) % 3]];
    const ux = rep[a * 3] - rep[p * 3], uy = rep[a * 3 + 1] - rep[p * 3 + 1], uz = rep[a * 3 + 2] - rep[p * 3 + 2];
    const vx = rep[b * 3] - rep[p * 3], vy = rep[b * 3 + 1] - rep[p * 3 + 1], vz = rep[b * 3 + 2] - rep[p * 3 + 2];
    const d = (ux * vx + uy * vy + uz * vz) / ((Math.hypot(ux, uy, uz) * Math.hypot(vx, vy, vz)) || 1);
    cw[f * 3 + k] = Math.acos(Math.max(-1, Math.min(1, d)));
    start[p + 1]++;
  }
  for (let p = 0; p < P; p++) start[p + 1] += start[p];
  const fill = start.slice(0, P), corners = new Int32Array(F * 3);
  for (let c = 0; c < F * 3; c++) corners[fill[pid[idx[c]]]++] = c;
  const cos = Math.cos(angleDeg * Math.PI / 180);
  const vb = new VertexBuilder(geometry, F * 3, ["normal"]);
  const nrm = new Float32Array(F * 9), outIdx = new Uint32Array(F * 3), seen = new Map();
  for (let c = 0; c < F * 3; c++) {
    const f = c / 3 | 0, p = pid[idx[c]];
    let nx = 0, ny = 0, nz = 0;
    for (let j = start[p]; j < start[p + 1]; j++) {
      const c2 = corners[j], g = c2 / 3 | 0;
      const dt = fn[f * 3] * fn[g * 3] + fn[f * 3 + 1] * fn[g * 3 + 1] + fn[f * 3 + 2] * fn[g * 3 + 2];
      if (dt >= cos) { const w = cw[c2]; nx += fn[g * 3] * w; ny += fn[g * 3 + 1] * w; nz += fn[g * 3 + 2] * w; }
    }
    const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
    const v = idx[c], key = `${v}|${Math.round(nx * 1000)},${Math.round(ny * 1000)},${Math.round(nz * 1000)}`;
    let o = seen.get(key);
    if (o === undefined) { o = vb.copy(v); seen.set(key, o); nrm[o * 3] = nx; nrm[o * 3 + 1] = ny; nrm[o * 3 + 2] = nz; }
    outIdx[c] = o;
  }
  const g = vb.build(outIdx, src);
  g.setAttribute("normal", new T.BufferAttribute(nrm.slice(0, vb.n * 3), 3));
  for (const gr of src.groups) g.addGroup(gr.start, gr.count, gr.materialIndex);
  g.computeBoundingSphere(); g.computeBoundingBox();
  return g;
}

// Weld vertices whose non-normal attributes match (so subdivided faces share edge vertices).
function weldForSubdiv(geometry) {
  const names = Object.keys(geometry.attributes).filter((n) => n !== "normal");
  const arrs = names.map((n) => [floatArray(geometry.attributes[n]), geometry.attributes[n].itemSize]);
  const V = geometry.attributes.position.count, map = new Map(), remap = new Uint32Array(V), keep = [];
  for (let i = 0; i < V; i++) {
    let k = "";
    for (const [a, s] of arrs) for (let c = 0; c < s; c++) k += Math.round(a[i * s + c] * 1e5) + ",";
    let o = map.get(k);
    if (o === undefined) { o = keep.length; keep.push(i); map.set(k, o); }
    remap[i] = o;
  }
  const g = new T.BufferGeometry();
  names.forEach((n, j) => {
    const [a, s] = arrs[j], out = new Float32Array(keep.length * s);
    keep.forEach((v, i) => { for (let c = 0; c < s; c++) out[i * s + c] = a[v * s + c]; });
    g.setAttribute(n, new T.BufferAttribute(out, s));
  });
  const idx = indexArray(geometry), ni = new Uint32Array(idx.length);
  for (let i = 0; i < idx.length; i++) ni[i] = remap[idx[i]];
  g.setIndex(new T.BufferAttribute(ni, 1));
  for (const gr of geometry.groups) g.addGroup(gr.start, gr.count, gr.materialIndex);
  return g;
}

function subdivideOnce(geometry, creaseCos, smooth) {
  const g0 = weldForSubdiv(geometry);
  const pos = g0.attributes.position.array, idx = g0.index.array;
  const F = idx.length / 3 | 0, V = g0.attributes.position.count;
  const { pid, rep, count: P } = positionIds(pos, V);
  const { fn } = faceNormals(idx, pid, rep, F);
  // Edges on position ids.
  const emap = new Map(), ea = [], eb = [], ef = [], eo = [], en = [];
  const faceEdge = new Int32Array(F * 3);
  for (let f = 0; f < F; f++) for (let k = 0; k < 3; k++) {
    const a = pid[idx[f * 3 + k]], b = pid[idx[f * 3 + (k + 1) % 3]], o = pid[idx[f * 3 + (k + 2) % 3]];
    const lo = Math.min(a, b), hi = Math.max(a, b), key = lo * P + hi;
    let e = emap.get(key);
    if (e === undefined) { e = ea.length; emap.set(key, e); ea.push(lo); eb.push(hi); ef.push([f]); eo.push([o]); en.push(0); }
    else { ef[e].push(f); eo[e].push(o); }
    faceEdge[f * 3 + k] = e;
  }
  const E = ea.length, crease = new Uint8Array(E);
  for (let e = 0; e < E; e++) {
    if (ea[e] === eb[e] || ef[e].length !== 2) { crease[e] = 1; continue; }
    const f1 = ef[e][0], f2 = ef[e][1];
    const d = fn[f1 * 3] * fn[f2 * 3] + fn[f1 * 3 + 1] * fn[f2 * 3 + 1] + fn[f1 * 3 + 2] * fn[f2 * 3 + 2];
    if (d < creaseCos) crease[e] = 1;
  }
  // Loop vertex rule (crease / corner aware).
  const sum = new Float64Array(P * 3), val = new Int32Array(P), csum = new Float64Array(P * 3), ccnt = new Int32Array(P);
  for (let e = 0; e < E; e++) {
    const a = ea[e], b = eb[e]; if (a === b) continue;
    for (let c = 0; c < 3; c++) { sum[a * 3 + c] += rep[b * 3 + c]; sum[b * 3 + c] += rep[a * 3 + c]; }
    val[a]++; val[b]++;
    if (crease[e]) { for (let c = 0; c < 3; c++) { csum[a * 3 + c] += rep[b * 3 + c]; csum[b * 3 + c] += rep[a * 3 + c]; } ccnt[a]++; ccnt[b]++; }
  }
  const vp = new Float32Array(P * 3);
  for (let p = 0; p < P; p++) for (let c = 0; c < 3; c++) {
    const x = rep[p * 3 + c];
    let y;
    if (ccnt[p] >= 3 || val[p] < 2) y = x;
    else if (ccnt[p] === 2) y = 0.75 * x + 0.125 * csum[p * 3 + c];
    else { const n = val[p], beta = n === 3 ? 3 / 16 : 3 / (8 * n); y = (1 - n * beta) * x + beta * sum[p * 3 + c]; }
    vp[p * 3 + c] = x + (y - x) * smooth;
  }
  const ep = new Float32Array(E * 3);
  for (let e = 0; e < E; e++) for (let c = 0; c < 3; c++) {
    const m = (rep[ea[e] * 3 + c] + rep[eb[e] * 3 + c]) * 0.5;
    let y = m;
    if (!crease[e]) y = 0.375 * (rep[ea[e] * 3 + c] + rep[eb[e] * 3 + c]) + 0.125 * (rep[eo[e][0] * 3 + c] + rep[eo[e][1] * 3 + c]);
    ep[e * 3 + c] = m + (y - m) * smooth;
  }
  // Build: corners keep their attributes; edge points blend the two corner vertices of the face
  // (so attribute seams stay sharp) and take the topological edge position (so no cracks).
  const vb = new VertexBuilder(g0, V + F * 3);
  const cornerNew = new Int32Array(V).fill(-1), mid = new Map(), out = new Uint32Array(F * 12);
  const corner = (v) => {
    if (cornerNew[v] < 0) { const i = vb.copy(v), p = pid[v]; vb.setPos(i, vp[p * 3], vp[p * 3 + 1], vp[p * 3 + 2]); cornerNew[v] = i; }
    return cornerNew[v];
  };
  const midpoint = (v1, v2, e) => {
    const key = Math.min(v1, v2) * V + Math.max(v1, v2);
    let i = mid.get(key);
    if (i === undefined) { i = vb.blend(v1, v2); vb.setPos(i, ep[e * 3], ep[e * 3 + 1], ep[e * 3 + 2]); mid.set(key, i); }
    return i;
  };
  for (let f = 0; f < F; f++) {
    const a = idx[f * 3], b = idx[f * 3 + 1], c = idx[f * 3 + 2];
    const A = corner(a), B = corner(b), C = corner(c);
    const ab = midpoint(a, b, faceEdge[f * 3]), bc = midpoint(b, c, faceEdge[f * 3 + 1]), ca = midpoint(c, a, faceEdge[f * 3 + 2]);
    out.set([A, ab, ca, ab, B, bc, ca, bc, C, ab, bc, ca], f * 12);
  }
  const g = vb.build(out, geometry);
  for (const gr of geometry.groups) g.addGroup(gr.start * 4, gr.count * 4, gr.materialIndex);
  return g;
}

/**
 * subdivide(geometry, levels = 1, opts?) → NEW geometry, each level 4× the triangles.
 * Loop subdivision on the position-welded mesh with crease handling: edges sharper than
 * opts.creaseAngle (default 40°), open borders and non-manifold edges keep their line, corners
 * (3+ creases) stay put — so boxy kit keeps its edges while organic parts round off.
 * opts.smooth (0..1, default 1) blends Loop positions with plain midpoints.
 * skinIndex/skinWeight are merged per edge (top 4 bones, renormalised), uv/color/sbRole are
 * interpolated, groups are kept; normals are rebuilt with smoothNormals(opts.normalAngle ?? 50).
 * Safe for SkinnedMesh (same bind space, same bone indices).
 */
export function subdivide(geometry, levels = 1, opts = {}) {
  const creaseCos = Math.cos((opts.creaseAngle ?? 40) * Math.PI / 180), smooth = opts.smooth ?? 1;
  let g = geometry;
  for (let l = 0; l < levels; l++) g = subdivideOnce(g, creaseCos, smooth);
  g = smoothNormals(g, opts.normalAngle ?? 50);
  return g;
}

export const triCount = (g) => (g.index ? g.index.count : g.attributes.position.count) / 3;

// ---------------------------------------------------------------------------------------------
// Outline (inverted hull)
// ---------------------------------------------------------------------------------------------

const outlineNormalCache = new WeakMap();
function outlineNormals(geometry) {
  // Position-welded average normal, so the hull doesn't split open at hard edges.
  if (outlineNormalCache.has(geometry)) return;
  const pos = floatArray(geometry.attributes.position), idx = indexArray(geometry), V = geometry.attributes.position.count;
  const { pid, rep, count: P } = positionIds(pos, V);
  const { fn, area } = faceNormals(idx, pid, rep, idx.length / 3 | 0);
  const acc = new Float32Array(P * 3);
  for (let f = 0; f < idx.length / 3; f++) for (let k = 0; k < 3; k++) {
    const p = pid[idx[f * 3 + k]];
    for (let c = 0; c < 3; c++) acc[p * 3 + c] += fn[f * 3 + c] * area[f];
  }
  const out = new Float32Array(V * 3);
  for (let v = 0; v < V; v++) {
    const p = pid[v], l = Math.hypot(acc[p * 3], acc[p * 3 + 1], acc[p * 3 + 2]) || 1;
    for (let c = 0; c < 3; c++) out[v * 3 + c] = acc[p * 3 + c] / l;
  }
  geometry.setAttribute("sbOutlineN", new T.BufferAttribute(out, 3));
  outlineNormalCache.set(geometry, true);
}

const OUTLINE_VERT = /* glsl */`
#include <common>
#include <skinning_pars_vertex>
#include <fog_pars_vertex>
attribute vec3 sbOutlineN;
#ifdef USE_COLOR
varying vec3 vOColor;
#endif
uniform float uWidth;
uniform vec2 uRes;
void main() {
  vec3 objectNormal = sbOutlineN;
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <begin_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  #include <fog_vertex>
  vec2 n2 = ( projectionMatrix * vec4( transformedNormal, 0.0 ) ).xy;
  float l = length( n2 );
  if ( l > 1e-5 ) gl_Position.xy += ( n2 / l ) * ( uWidth * 2.0 / uRes ) * gl_Position.w;
  gl_Position.z += 0.0004 * gl_Position.w; // tuck behind the surface a hair
#ifdef USE_COLOR
  vOColor = color;
#endif
}`;
const OUTLINE_FRAG = /* glsl */`
#include <common>
#include <fog_pars_fragment>
uniform vec3 uColor;
uniform float uTint;
#ifdef USE_COLOR
varying vec3 vOColor;
#endif
void main() {
  vec3 c = uColor;
#ifdef USE_COLOR
  c = mix( c, vOColor * 0.22, uTint );
#endif
  gl_FragColor = vec4( c, 1.0 );
  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
}`;

const _vp = new T.Vector4();
/**
 * outline(mesh, opts?) → an inverted-hull Mesh/SkinnedMesh added next to `mesh` (same skeleton).
 *   opts.color ("#1b1422"), opts.width (screen px at the drawing-buffer resolution, default 1.6),
 *   opts.tint (0..1, mixes in a darkened vertex colour when the mesh has one; default 0.6).
 * Remove with `mesh.userData.sbOutline.removeFromParent()`.
 */
export function outline(mesh, opts = {}) {
  if (mesh.userData.sbOutline) return mesh.userData.sbOutline;
  const geo = mesh.geometry;
  outlineNormals(geo);
  const hasColor = !!geo.attributes.color;
  const mat = new T.ShaderMaterial({
    uniforms: T.UniformsUtils.merge([T.UniformsLib.fog, {
      uColor: { value: new T.Color(opts.color || "#1b1422") }, uWidth: { value: opts.width ?? 1.6 },
      uRes: { value: new T.Vector2(1, 1) }, uTint: { value: opts.tint ?? 0.6 },
    }]),
    vertexShader: OUTLINE_VERT, fragmentShader: OUTLINE_FRAG, side: T.BackSide, fog: true, vertexColors: hasColor,
  });
  let hull;
  if (mesh.isSkinnedMesh) {
    hull = new T.SkinnedMesh(geo, mat);
    hull.position.copy(mesh.position); hull.quaternion.copy(mesh.quaternion); hull.scale.copy(mesh.scale);
    mesh.parent.add(hull);
    hull.bind(mesh.skeleton, mesh.bindMatrix);
    hull.bindMode = mesh.bindMode;
  } else {
    hull = new T.Mesh(geo, mat);
    mesh.add(hull);
  }
  hull.frustumCulled = false; hull.castShadow = false; hull.receiveShadow = false;
  hull.userData.sbOutlineOf = mesh;
  hull.onBeforeRender = (renderer) => { renderer.getCurrentViewport(_vp); mat.uniforms.uRes.value.set(_vp.z || 1, _vp.w || 1); };
  mesh.userData.sbOutline = hull;
  return hull;
}

// ---------------------------------------------------------------------------------------------
// Character pass
// ---------------------------------------------------------------------------------------------

// Per tier: shader level, geometry treatment. Subdivision is 4× triangles per level, so it is
// restricted to Ultra (whole body) and High (skin + hair parts of single-role meshes only, and
// meshes under `subdivMaxTris`).
export const TIERS = {
  ultra: { Q: 2, smooth: true, subdiv: 1, subdivMaxTris: 16000 },
  high: { Q: 2, smooth: true, subdiv: 0, subdivMaxTris: 0 },
  medium: { Q: 1, smooth: true, subdiv: 0, subdivMaxTris: 0 },
  low: { Q: 0, smooth: true, subdiv: 0, subdivMaxTris: 0 },
};

const geoCache = new WeakMap();
function cachedGeo(src, key, make) {
  let m = geoCache.get(src);
  if (!m) { m = new Map(); geoCache.set(src, m); }
  let g = m.get(key);
  if (!g) { g = make(); g.userData.sbProcessed = key; m.set(key, g); }
  return g;
}

/**
 * applyCharacterLook(root, opts) — walk a character and upgrade it for the given tier.
 *   opts.quality   "ultra" | "high" | "medium" | "low"
 *   opts.rimColor  element colour for the fresnel rim; opts.rim / ramp / saturation / sky / ground
 *   opts.roleOf    (material, mesh) => role | null (null = leave the material alone);
 *                  default guessRole by material name. Ignored for meshes carrying `sbRole`.
 *   opts.subdiv    override levels (0..2); opts.smoothAngle (default 50); opts.creaseAngle (40)
 *   opts.outline   false | { color, width, tint }
 *   opts.geometry  false to skip all geometry processing
 * Geometry results are cached per source geometry, materials per source material + options,
 * so calling this on every unit of a battle shares work. Returns { tris, meshes }.
 */
export function applyCharacterLook(root, opts = {}) {
  const q = normQ(opts.quality), tier = TIERS[q] || TIERS.high;
  const levels = opts.subdiv ?? tier.subdiv, maxTris = opts.subdivMaxTris ?? (tier.subdivMaxTris || Infinity);
  const smoothAngle = opts.smoothAngle ?? 50, creaseAngle = opts.creaseAngle ?? 40;
  const roleOf = opts.roleOf || ((m) => guessRole(m));
  const mopts = Object.assign({}, opts, { quality: q });
  const meshes = [];
  root.traverse((o) => { if (o.isMesh && !o.userData.sbOutlineOf && !o.isInstancedMesh) meshes.push(o); });
  let tris = 0;
  for (const o of meshes) {
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    if (!mats.some((m) => m.isMeshStandardMaterial || m.isMeshLambertMaterial || m.isMeshPhongMaterial)) { tris += triCount(o.geometry); continue; }
    let geo = o.geometry;
    const tagged = !!geo.attributes.sbRole;
    const single = !Array.isArray(o.material);
    const role = tagged ? "multi" : single ? roleOf(o.material, o) : null;
    if (opts.geometry !== false && geo.attributes.position && !geo.morphAttributes.position && !o.material.flatShading) {
      const n = triCount(geo), src = geo;
      // A processed geometry is ours: tag single-role meshes so every mesh uses the same program.
      const tag = !tagged && single && role ? role : "";
      const fin = (g) => { if (tag) tagRole(g, tag); return g; };
      if (levels > 0 && n <= maxTris) geo = cachedGeo(src, `sub${levels}|${creaseAngle}|${smoothAngle}|${tag}`, () => fin(subdivide(src, levels, { creaseAngle, normalAngle: smoothAngle })));
      else if (tier.smooth) geo = cachedGeo(src, `sm${smoothAngle}|${tag}`, () => fin(smoothNormals(src, smoothAngle)));
      o.geometry = geo;
    }
    const multi = !!o.geometry.attributes.sbRole;
    if (single) {
      if (role !== null) o.material = upgradeMaterial(o.material, multi ? "multi" : role, mopts);
    } else {
      o.material = o.material.map((m) => { const r = roleOf(m, o); return r === null ? m : upgradeMaterial(m, r, mopts); });
    }
    if (opts.outline) outline(o, opts.outline);
    tris += triCount(o.geometry);
  }
  return { tris, meshes: meshes.length };
}
