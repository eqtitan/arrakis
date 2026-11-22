// Sigilbound — 3D battlefield. Source for public/game/three3d.js (bundled with esbuild:
// `npm run build:game3d`). Exposes window.W3D for the classic-script game.
//
// Heroes use rigged, animated CC0 models by Quaternius (public/game/models, see CREDITS.md),
// recoloured per hero from LOOKS in art.js. Until the models finish loading, or if they
// fail to, heroes fall back to figures built from primitive shapes.
import * as T from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { clone as cloneSkinned } from "three/examples/jsm/utils/SkeletonUtils.js";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { detailMaterial, envMap, disposeEnv, bevelBox, roundedPlate } from "./materials.mjs";
import { createPipeline, createQualityManager, deviceHint } from "./post.mjs";

// Proper colour management: hex colours (LOOKS, palettes) are sRGB and get converted to
// linear for lighting, then back to sRGB on output. Legacy mode skipped that conversion,
// which rendered every colour much paler than intended.
T.ColorManagement.legacyMode = false;

// Lighting/tone settings, tuned for colour-managed rendering. window.SB_GFX can override
// them for side-by-side comparisons.
const GFX = Object.assign({ tone: "aces", exposure: 1.3, hemi: 1.25, sun: 2.0, rim: 0.8, front: 0.6, groundLift: 0.3, shadow: 2048, pixelRatio: 2 }, window.SB_GFX || {});

const W3D = (() => {
  let renderer = null, scene = null, camera = null, host = null, raf = 0, last = 0;
  let views = new Map(), parts = [], tweens = [], frameCbs = [];
  const camBase = new T.Vector3();
  let shakeT = 0, shakeAmp = 0;
  const matCache = new Map(), geo = {};
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const spd = () => (typeof G !== "undefined" && G.settings && G.settings.speed) || 1;

  let supportedCache = null;
  function supported() {
    if (supportedCache !== null) return supportedCache;
    try { const c = document.createElement("canvas"); return (supportedCache = !!(c.getContext("webgl2") || c.getContext("webgl"))); }
    catch (_) { return (supportedCache = false); }
  }

  // ---------- model library ----------
  // Which base model each hero uses (bearded bruisers in plate, hooded casters and rogues,
  // everyone else as the adventurer). Any hero not listed uses the adventurer.
  const BASE = {
    hask: "monarch", ulfgar: "monarch", gorrum: "monarch", thrain: "monarch", corvan: "monarch", odo: "monarch",
    mira: "hooded", wren: "hooded", kettle: "adventurer", ysolde: "hooded", nyx: "hooded", tamsin: "hooded",
    velka: "hooded", aurelia: "monarch", sable: "hooded", maelis: "monarch", morwenna: "hooded", seraphine: "hooded",
    brannoc: "adventurer", pell: "adventurer", lumen: "adventurer", kaito: "adventurer", oriel: "adventurer", vaelith: "adventurer",
  };
  const FILES = { hooded: "hooded_adventurer", adventurer: "adventurer", monarch: "monarch", titan: "yeti" };
  // Material name -> colour role, per base model.
  const ROLES = {
    hooded: { DarkBrown: "armor", Black: "cloth", Brown: "cloth", LightBrown: "accent", Gold: "accent", Metal: "trim", Metal_Dark: "blade", Brown2: "wood", Skin: "skin",
      "head:Black": "cloth", "head:Brown": "eye", "head:DarkBrown": "hood", White: "hair" },
    adventurer: { LightGreen: "armor", Green: "cloth", Brown: "pants", Brown2: "pants", Black: "boot", Grey: "boot", Hair: "hair", Eyebrows: "hair", Gold: "accent", Skin: "skin", Eye: "eye" },
    monarch: { Metal: "armor", Metal_Dark: "trim", Blue: "cloth", DarkBrown: "pants", Beige: "accent", Gold: "crown", Hair_White: "hair", Skin: "skin", Eye: "eye" },
    titan: { Yeti_Main: "stone", Yeti_Secondary: "stoneDark", Eye_White: "socket", Eye_Black: "maw", Yeti_Teeth: "fang", Tongue: "tongue" },
  };
  // Skinned mesh parts per base. Monarch and adventurer share an identical skeleton rest pose,
  // and the hooded one differs by under 2 cm at the head, so parts can be borrowed across
  // bases (see BODY) to give heroes on the same base different builds.
  const PARTMESH = {
    monarch: { head: "King_Head", body: "King_Body", legs: "King_Legs", feet: "King_Feet" },
    hooded: { head: "Medieval_Head", body: "Medieval_Body", legs: "Medieval_Legs", feet: "Medieval_Feet" },
    adventurer: { head: "Adventurer_Head", body: "Adventurer_Body", legs: "Adventurer_Legs", feet: "Adventurer_Feet" },
  };
  // Per-hero build (see buildRigged / shapeBody): parts borrowed from other bases, hidden
  // materials ("hood", "hair", "crown"), shave (no beard) / bald (beard only), and proportions
  // h (height), head, bulk ([chest w, h, d]), arms / legs (thickness), sh (shoulder width, m).
  const BODY = {
    brannoc: { bulk: [0.96, 1, 0.96] },
    mira: { hide: ["hood"], parts: { legs: "adventurer" }, h: 0.95, head: 1.04 },
    pell: { shave: true, h: 0.9, head: 1.08, bulk: [0.92, 1, 0.95], arms: 0.94 },
    odo: { bald: true, parts: { body: "adventurer", legs: "adventurer" }, h: 1.03, bulk: [1.28, 1.05, 1.3], arms: 1.3, legs: 1.25, sh: 0.035, head: 0.94 },
    wren: { h: 0.94 },
    kettle: { parts: { head: "monarch", body: "hooded" }, shave: true, h: 1.02, arms: 1.15, bulk: [1.08, 1, 1.05], head: 0.95 },
    ysolde: { hide: ["hood"], bulk: [0.94, 1, 0.94] },
    corvan: { parts: { body: "adventurer" }, h: 0.97 },
    hask: { h: 1.0, bulk: [1.15, 1, 1.12], sh: 0.025, arms: 1.1 },
    lumen: { shave: true, parts: { body: "monarch" }, h: 1.06, head: 0.93 },
    nyx: { h: 0.97, bulk: [0.9, 1, 0.9], arms: 0.92, legs: 0.92 },
    tamsin: { hide: ["hood"], parts: { body: "adventurer" }, h: 0.98 },
    gorrum: { bald: true, h: 1.1, bulk: [1.3, 1.05, 1.25], arms: 1.3, legs: 1.25, sh: 0.04, head: 0.92 },
    velka: { hide: ["hood"], h: 1.03, bulk: [0.92, 1, 0.92] },
    aurelia: { hide: ["hood"], parts: { head: "hooded" }, h: 1.03, head: 1.02 },
    sable: { hide: ["hood"], h: 1.0 },
    kaito: { shave: true, parts: { body: "hooded" }, h: 1.02, head: 0.96 },
    maelis: { hide: ["hood"], parts: { head: "hooded", legs: "hooded", feet: "hooded" }, h: 1.04 },
    thrain: { parts: { body: "adventurer" }, h: 0.88, bulk: [1.25, 1, 1.2], arms: 1.25, legs: 1.2, head: 1.06, sh: 0.02 },
    oriel: { shave: true, h: 1.04 },
    vaelith: { hide: ["hair"], parts: { body: "monarch", legs: "monarch", feet: "monarch" }, h: 1.06, head: 0.94 },
    morwenna: { hide: ["hood"], h: 1.06 },
    seraphine: { hide: ["hood"], h: 1.02 },
    ulfgar: { h: 1.08, bulk: [1.25, 1.05, 1.2], arms: 1.2, legs: 1.15, sh: 0.03 },
  };
  const bodyOf = (id) => Object.assign({}, BODY[id], (window.SB_BODY_TEST || {})[id]);
  const ANIMS = {
    idle: ["Idle_Sword", "Idle"], melee: ["Sword_Slash", "Punch_Right", "Punch"], cast: ["Gun_Shoot", "Interact", "Weapon", "Punch"],
    hit: ["HitRecieve", "HitReact"], die: ["Death"],
  };
  const library = {};               // base -> { scene, clips, headY }
  let modelsSettled = false, readyResolve;
  const readyPromise = new Promise((r) => { readyResolve = r; });

  function preload() {
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    // Pages that can't serve .glb files may embed them as base64 in window.SB_MODEL_DATA.
    const embedded = window.SB_MODEL_DATA || {};
    const load = (file) => embedded[file]
      ? loader.parseAsync(Uint8Array.from(atob(embedded[file]), (c) => c.charCodeAt(0)).buffer, "")
      : loader.loadAsync(`models/${file}.glb`);
    const jobs = Object.entries(FILES).map(([base, file]) => load(file).then((g) => {
      g.scene.updateMatrixWorld(true);
      let headY = 1.55;
      g.scene.traverse((o) => { if (o.isBone && o.name === "Head") { const v = new T.Vector3(); o.getWorldPosition(v); headY = v.y; } });
      const clips = {};
      for (const a of g.animations) clips[a.name.split("|").pop()] = a;
      library[base] = { scene: g.scene, clips, headY };
    }).catch((e) => console.warn("Sigilbound: model failed to load", file, e)));
    Promise.all(jobs).then(() => { modelsSettled = true; readyResolve(); });
  }
  const whenReady = (timeoutMs = 8000) => Promise.race([readyPromise, new Promise((r) => setTimeout(r, timeoutMs))]).then(() => { modelsSettled = true; });

  // ---------- materials & primitive geometry ----------
  function geos() {
    if (geo.box) return geo;
    geo.box = new T.BoxGeometry(1, 1, 1);
    geo.sphere = new T.SphereGeometry(0.5, 20, 14);
    geo.capsule = new T.CapsuleGeometry(0.5, 1.0, 6, 14);
    geo.cyl = new T.CylinderGeometry(0.5, 0.5, 2, 20);
    // Unit-height shapes for code-built props (low segment counts: they are small on a phone).
    geo.rod = new T.CylinderGeometry(0.5, 0.5, 1, 18);
    geo.disc = new T.CylinderGeometry(0.5, 0.5, 1, 36);
    geo.cone = new T.ConeGeometry(0.5, 1, 18);
    geo.taper = new T.CylinderGeometry(0.5, 0.32, 1, 36, 4);
    geo.bell = new T.CylinderGeometry(0.22, 0.5, 1, 16);
    geo.ring = new T.TorusGeometry(0.5, 0.07, 8, 40);
    geo.hook = new T.TorusGeometry(0.5, 0.18, 6, 14, Math.PI * 1.25);
    geo.crook = new T.TorusGeometry(0.5, 0.2, 6, 12, Math.PI);
    geo.octa = new T.OctahedronGeometry(0.5);
    geo.half = new T.CylinderGeometry(0.5, 0.5, 1, 12, 1, false, 0, Math.PI);
    geo.dome = new T.SphereGeometry(0.5, 24, 10, 0, Math.PI * 2, 0, Math.PI / 2);
    // Kit parts: boxes with rounded edges (unit size; non-uniform scale keeps them chamfered).
    geo.bbox = bevelBox(1, 1, 1, 0.14, 2);
    geo.breast = roundedPlate(0.3, 0.27, 0.03, 0.07, { curve: 0.17, curveY: 0.45, cornerSeg: 4, seg: 6 });
    return geo;
  }
  function lit(color, metal = 0) {
    const key = `l${color}${metal}`;
    if (!matCache.has(key)) matCache.set(key, new T.MeshStandardMaterial({ color: new T.Color(color), roughness: metal ? 0.35 : 0.65, metalness: metal }));
    return matCache.get(key);
  }
  function glow(color, opacity = 1) {
    const key = `g${color}${opacity}`;
    // Not tone-mapped: glows show at full colour, so the bloom pass (post.mjs) picks them up.
    if (!matCache.has(key)) matCache.set(key, new T.MeshBasicMaterial({ color: new T.Color(color), transparent: opacity < 1, opacity, depthWrite: opacity >= 1, toneMapped: false }));
    return matCache.get(key);
  }
  function part(kind, parent, pos, scale, mat, rot) {
    const m = new T.Mesh(typeof kind === "string" ? geos()[kind] : kind, mat);
    m.position.set(pos[0], pos[1], pos[2]);
    m.scale.set(scale[0], scale[1], scale[2]);
    if (rot) { m.rotation.order = "YXZ"; m.rotation.set(rot[0] * Math.PI / 180, rot[1] * Math.PI / 180, rot[2] * Math.PI / 180); }
    m.castShadow = true;
    parent.add(m);
    return m;
  }
  // A curved cloth sheet hanging down from y = 0: width w0 at the top flaring to w1 at the
  // bottom, bowed back (-Z) by `curve`. Cached; drawn double-sided.
  const sheets = new Map();
  function sheet(w0, w1, h, curve, sx = 16, sy = 8) {
    const key = [w0, w1, h, curve].join("|");
    if (sheets.has(key)) return sheets.get(key);
    const pos = [], uv = [], idx = [];
    for (let j = 0; j <= sy; j++) for (let i = 0; i <= sx; i++) {
      const u = i / sx, v = j / sy, w = w0 + (w1 - w0) * v, a = u * 2 - 1;
      pos.push(a * w / 2, -v * h, -curve * (1 - a * a) * (0.7 + 0.3 * v) + Math.sin(a * 3 + 1) * 0.012 * v);
      uv.push(u * w * 3, v * h * 3);
    }
    for (let j = 0; j < sy; j++) for (let i = 0; i < sx; i++) {
      const a = j * (sx + 1) + i, b = a + 1, c = a + sx + 1, d = c + 1;
      idx.push(a, c, b, b, c, d);
    }
    const g = new T.BufferGeometry();
    g.setAttribute("position", new T.Float32BufferAttribute(pos, 3));
    g.setAttribute("uv", new T.Float32BufferAttribute(uv, 2));
    g.setIndex(idx); g.computeVertexNormals();
    const ng = g.toNonIndexed(); ng.computeVertexNormals();
    sheets.set(key, ng);
    return ng;
  }
  function pivot(parent, pos) { const g = new T.Group(); g.position.set(pos[0], pos[1], pos[2]); parent.add(g); return g; }
  const mix = (a, b, k) => "#" + new T.Color(a).lerp(new T.Color(b), k).getHexString();
  const mul = (a, k) => "#" + new T.Color(a).multiplyScalar(k).getHexString();

  // ---------- scene ----------
  function gradientTexture(top, bottom) {
    const c = document.createElement("canvas"); c.width = 2; c.height = 256;
    const g = c.getContext("2d"), grd = g.createLinearGradient(0, 0, 0, 256);
    grd.addColorStop(0, top); grd.addColorStop(1, bottom);
    g.fillStyle = grd; g.fillRect(0, 0, 2, 256);
    const t = new T.CanvasTexture(c); t.encoding = T.sRGBEncoding;
    return t;
  }
  // Soft mottled noise so the ground isn't one flat colour.
  function groundTexture() {
    const c = document.createElement("canvas"); c.width = c.height = 128;
    const g = c.getContext("2d");
    g.fillStyle = "#b8b8b8"; g.fillRect(0, 0, 128, 128);
    let s = 7; const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
    for (let i = 0; i < 260; i++) {
      const v = 150 + Math.floor(rnd() * 105), r = 2 + rnd() * 9;
      g.fillStyle = `rgba(${v},${v},${v},0.18)`;
      g.beginPath(); g.arc(rnd() * 128, rnd() * 128, r, 0, 7); g.fill();
    }
    const t = new T.CanvasTexture(c);
    t.wrapS = t.wrapT = T.RepeatWrapping; t.encoding = T.sRGBEncoding;
    return t;
  }
  let _dot = null;
  function dot() {
    if (_dot) return _dot;
    const c = document.createElement("canvas"); c.width = c.height = 64;
    const g = c.getContext("2d"), grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grd.addColorStop(0, "rgba(255,255,255,1)"); grd.addColorStop(0.4, "rgba(255,255,255,.6)"); grd.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
    return (_dot = new T.CanvasTexture(c));
  }

  function sceneColors(chapter) {
    const s = [
      ["#1f2b46", "#c9805a", "#2a2a22", "#16141f"], ["#16283a", "#4f7c8a", "#1c2a2a", "#0e1a22"],
      ["#2a1a1e", "#a8483a", "#2e1a1c", "#160c0e"], ["#1a2e2a", "#7fa088", "#23362a", "#101c16"],
      ["#28203a", "#c8a870", "#2c2640", "#14101e"], ["#2a2438", "#e0b0d0", "#3a2e4a", "#ffd0f0"],
      ["#101a2e", "#5a7ab0", "#1a2440", "#0c1220"], ["#0e0a16", "#3a2a5a", "#180f26", "#b080ff"],
      ["#0e1a2a", "#2a5a7a", "#10283c", "#80e0ff"], ["#1a0a0a", "#ff6a2a", "#24100c", "#100606"],
    ];
    return s[((chapter || 0) % 10 + 10) % 10];
  }

  function mount(el, opts) {
    unmount();
    host = el; mountTitan = !!opts.titan;
    renderer = new T.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(GFX.pixelRatio, window.devicePixelRatio || 1)); // the quality tier (post.mjs) overrides this
    renderer.outputEncoding = T.sRGBEncoding;
    renderer.toneMapping = GFX.tone === "aces" ? T.ACESFilmicToneMapping : GFX.tone === "linear" ? T.LinearToneMapping : T.NoToneMapping;
    renderer.toneMappingExposure = GFX.exposure;
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = T.PCFSoftShadowMap;
    renderer.domElement.className = "w3d-canvas";
    el.prepend(renderer.domElement);

    scene = new T.Scene();
    const sc = opts.titan ? ["#1a0a0a", "#c0401a", "#24100c", "#100606"] : sceneColors(opts.chapter);
    scene.background = gradientTexture(sc[0], sc[1]);
    scene.fog = new T.Fog(new T.Color(sc[1]), 18, 48);
    scene.environment = envMap(renderer); // small generated PMREM: highlights on metal kit
    scene.add(new T.HemisphereLight(new T.Color(mix(sc[1], "#ffffff", 0.35)), new T.Color(sc[2]), GFX.hemi));
    const sun = new T.DirectionalLight(0xfff1dd, GFX.sun);
    sun.position.set(-5, 10, 6); sun.castShadow = true;
    sun.shadow.mapSize.set(GFX.shadow, GFX.shadow); sun.shadow.radius = 3; sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02;
    Object.assign(sun.shadow.camera, { left: -7, right: 7, top: 7, bottom: -7, near: 1, far: 30 });
    scene.add(sun);
    const rim = new T.DirectionalLight(0x99aaff, GFX.rim); rim.position.set(4, 5, -8); scene.add(rim);
    const front = new T.DirectionalLight(0xffffff, GFX.front); front.position.set(0, 4, 10); scene.add(front);

    // Lift the ground toward a neutral warm grey: colour-managed dark tones read much darker,
    // and lifting toward the (often saturated) horizon colour made it glare.
    const groundMat = new T.MeshStandardMaterial({ color: new T.Color(mix(sc[2], "#8c8680", GFX.groundLift)), roughness: 1, map: groundTexture() });
    groundMat.map.repeat.set(24, 24);
    const ground = new T.Mesh(new T.PlaneGeometry(120, 120), groundMat);
    ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
    const ring = new T.Mesh(new T.RingGeometry(3.4, 3.6, 64), glow("#ffffff", 0.08));
    ring.rotation.x = -Math.PI / 2; ring.position.set(0, 0.01, -0.6); ring.scale.set(1.25, 1, 1); scene.add(ring);
    buildScenery(opts.titan ? 2 : (opts.chapter || 0) % 5, sc, opts.chapter || 0);

    camera = new T.PerspectiveCamera(50, 1, 0.1, 150);
    // Post-processing and adaptive quality (post.mjs): the tier sets pixel ratio, MSAA, shadow
    // map size and bloom, and steps down on sustained low fps.
    const Q = quality(renderer);
    try { pipe = createPipeline(renderer, scene, camera, { quality: Q.current }); pipe.params.exposure = GFX.exposure; }
    catch (e) { console.warn("Sigilbound: post-processing unavailable", e); pipe = null; }
    renderer.domElement.addEventListener("webglcontextrestored", () => { if (pipe && qm) pipe.setQuality(qm.current); });
    resize();
    window.addEventListener("resize", resize);
    last = performance.now();
    raf = requestAnimationFrame(loop);
  }

  function buildScenery(kind, sc, seed) {
    let s = seed * 9301 + 49297;
    const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
    const propMat = lit(sc[3]), glowMat = glow(mix(sc[1], "#ffffff", 0.3), 0.7);
    for (let i = 0; i < 30; i++) {
      const ang = rnd() * Math.PI * 2, rad = 7.5 + rnd() * 10;
      const x = Math.cos(ang) * rad, z = Math.sin(ang) * rad * 0.8 - 5;
      if (z > 4 || (z > -4.5 && Math.abs(x) < 7)) continue; // keep the battlefield and the camera's view clear
      const k = 0.6 + rnd() * 1.4;
      if (kind === 0) { part("cyl", scene, [x, 0.65 * k, z], [0.25 * k, 0.65 * k, 0.25 * k], propMat); part("capsule", scene, [x, 2 * k, z], [1.4 * k, 0.8 * k, 1.4 * k], propMat); }
      else if (kind === 1 || kind === 3) part("cyl", scene, [x, 0.5 * k, z], [0.12, 0.5 * k, 0.12], propMat);
      else if (kind === 2) part("box", scene, [x, 0.7 * k, z], [1.2 * k, 1.6 * k, 1 * k], propMat, [rnd() * 30 - 15, rnd() * 90, rnd() * 30 - 15]);
      else if (i % 2) part("box", scene, [x, 1.2 * k, z], [0.5 * k, 2.4 * k, 0.5 * k], propMat);
      else part("box", scene, [x, 0.8 * k, z], [0.35 * k, 1.6 * k, 0.35 * k], glowMat, [0, 45, rnd() * 40 - 20]);
    }
  }

  // Fit the battle camera to the portrait frame: the closest distance (at a fixed, fairly low
  // pitch) at which every ally and enemy slot, the tallest kit and the HUD tags above the enemy
  // row all project inside the screen. Allies stand nearer the camera, so they set the width.
  const camTarget = new T.Vector3(0, 1.0, -0.5);
  let mountTitan = false, camFov = 50;
  // Shared quality manager (one per session; remembers the tier in localStorage).
  let pipe = null, qm = null;
  function quality(r) {
    if (!qm) qm = createQualityManager({ initial: deviceHint(r), onChange: (n) => { if (pipe) pipe.setQuality(n); } });
    return qm;
  }
  function setQuality(name) { quality(renderer).force(name || "auto"); }
  function resize() {
    if (!renderer || !host) return;
    const w = host.clientWidth || 1, h = host.clientHeight || 1;
    if (pipe) pipe.setSize(w, h); else renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // Portrait screens get a wider lens so a full row fits without pulling far back.
    camera.fov = camFov = camera.aspect < 0.75 ? 62 : 50;
    const pitch = 34 * D2R, pts = [];
    for (const sx of [-1, 1]) {
      for (const y of [0, 2.75]) { pts.push([sx * 2.35, y, 2.6]); pts.push([sx * 2.35, y, 2.0]); }
      for (const y of [0, 3.2]) pts.push([sx * 2.45, y, -3.2]);
    }
    pts.push([0, 3.75, -3.7]);                          // HUD tags above the back row
    if (mountTitan) { pts.push([0, 5.6, -3.8]); pts.push([-2.3, 3.4, -3.8]); pts.push([2.3, 3.4, -3.8]); }
    const v = new T.Vector3();
    const fits = (dist) => {
      camera.position.set(camTarget.x, camTarget.y + Math.sin(pitch) * dist, camTarget.z + Math.cos(pitch) * dist);
      camera.lookAt(camTarget); camera.updateMatrixWorld(); camera.updateProjectionMatrix();
      return pts.every((p) => { v.set(p[0], p[1], p[2]).project(camera); return Math.abs(v.x) <= 0.95 && v.y <= 0.84 && v.y >= -0.84; });
    };
    let lo = 5, hi = 40;
    for (let i = 0; i < 22; i++) { const mid = (lo + hi) / 2; if (fits(mid)) hi = mid; else lo = mid; }
    fits(hi);
    camBase.copy(camera.position);
  }

  function unmount() {
    focusK = 0; hitStop = 0; punchT = 0; focusId++;
    cancelAnimationFrame(raf); raf = 0;
    window.removeEventListener("resize", resize);
    if (renderer) {
      if (pipe) { pipe.dispose(); pipe = null; }
      renderer.domElement.remove();
      disposeEnv(renderer);
      renderer.dispose();
    }
    renderer = scene = camera = host = null;
    views.clear(); parts = []; tweens = []; frameCbs = [];
  }

  // ---------- rigged heroes ----------
  function roleColors(L, hollow) {
    const tint = (c) => hollow ? mix(c, "#2e1f33", 0.5) : c;
    const skin = SKIN[L.skin];
    return {
      // Optional LOOKS.cloth gives sleeves/trousers/tunic their own colour (otherwise a darker armour shade).
      armor: tint(L.armor), cloth: tint(L.cloth || mul(L.armor, 0.62)), pants: tint(L.pants || mix(L.cloth || L.armor, "#2a2522", L.cloth ? 0.35 : 0.6)), accent: tint(L.accent),
      trim: tint(L.trim || mix(L.accent, "#c8ccd4", 0.4)), blade: tint("#c8d0dc"), wood: tint("#6b4a29"), boot: tint(L.boot || "#2a1f1a"),
      hair: tint(L.hair), brow: tint(mul(L.hair, 0.8)), hood: tint(L.hood || L.armor), skin: tint(skin), crown: tint(L.accent), eye: hollow ? "#ff2a2a" : L.glow || "#1a141f",
    };
  }
  const roleOf = (base, kind, mat) => (ROLES[base] || {})[`${kind}:${mat}`] || (ROLES[base] || {})[mat];
  const partKind = (base, name) => { const P = PARTMESH[base]; if (P) for (const k in P) if (P[k] === name) return k; return ""; };

  // Swap skinned mesh parts for ones borrowed from another base (`parts: { head: "hooded" }`),
  // rebinding them to this model's bones by name. "none" removes the part.
  function swapParts(model, base, parts) {
    const bones = {};
    model.traverse((o) => { if (o.isBone) bones[o.name] = o; });
    for (const [kind, src] of Object.entries(parts)) {
      const own = model.getObjectByName(PARTMESH[base][kind]);
      if (src === base) continue;
      const lib = library[src];
      const from = lib && PARTMESH[src] && lib.scene.getObjectByName(PARTMESH[src][kind]);
      if (src !== "none" && !from) continue;
      const parent = own ? own.parent : model;
      if (own) parent.remove(own);
      if (src === "none") continue;
      const copy = from.clone(true);
      copy.traverse((m) => {
        m.userData.sbBase = src; m.userData.sbKind = kind;
        if (!m.isSkinnedMesh) return;
        const sk = m.skeleton;
        m.bind(new T.Skeleton(sk.bones.map((b) => bones[b.name] || b), sk.boneInverses.map((x) => x.clone())), m.bindMatrix.clone());
      });
      parent.add(copy);
    }
  }

  // Per-hero build on top of the shared skeleton, applied once after cloning (the animations
  // only key bone rotations, plus translations on Body and the feet, so these stick):
  // h = height, head = head size, bulk = [chest width, height, depth], arms / legs = limb
  // thickness, sh = shoulders moved outwards (m). Scaling a bone undoes the scale on its child
  // bones so only that segment grows; the kit on it grows with it.
  function shapeBody(model, B) {
    const bones = {};
    model.traverse((o) => { if (o.isBone) bones[o.name] = o; });
    const m3 = new T.Matrix3();
    const scaleBone = (b, v) => {
      if (!b) return;
      b.scale.set(v[0], v[1], v[2]);
      for (const c of b.children) {
        if (!c.isBone) continue;
        m3.setFromMatrix4(new T.Matrix4().makeRotationFromQuaternion(c.quaternion));
        const e = m3.elements, inv = [1 / v[0], 1 / v[1], 1 / v[2]];
        // diag(Rᵀ·S⁻¹·R): exact when the child's rotation permutes the parent's axes.
        c.scale.set(
          e[0] * e[0] * inv[0] + e[1] * e[1] * inv[1] + e[2] * e[2] * inv[2],
          e[3] * e[3] * inv[0] + e[4] * e[4] * inv[1] + e[5] * e[5] * inv[2],
          e[6] * e[6] * inv[0] + e[7] * e[7] * inv[1] + e[8] * e[8] * inv[2]);
      }
    };
    if (B.bulk) scaleBone(bones.Chest, B.bulk);
    if (B.arms) for (const n of ["UpperArmL", "UpperArmR", "LowerArmL", "LowerArmR"]) scaleBone(bones[n], [B.arms, 1, B.arms]);
    if (B.legs) for (const n of ["UpperLegL", "UpperLegR"]) scaleBone(bones[n], [B.legs, 1, B.legs]);
    if (B.sh) for (const [n, s] of [["ShoulderL", 1], ["ShoulderR", -1]]) {
      const b = bones[n]; if (!b) continue;
      model.updateMatrixWorld(true);
      const ws = new T.Vector3(); b.parent.getWorldScale(ws);
      b.position.x += s * B.sh * model.scale.x / (ws.x || 1);
    }
    if (B.head && bones.Head) bones.Head.scale.multiplyScalar(B.head);
  }

  // The monarch and adventurer heads model scalp hair and beard as one mesh. Split it by
  // position in head-bone space (metres; +Y up, +Z forward, eyes at y 0.11): the beard is
  // everything below the cheekbones that isn't at the back of the neck. `keep` = "scalp"
  // shaves the beard, "beard" leaves a bald head with a beard. Cached per geometry.
  const hairCache = new Map();
  function trimHair(m, keep) {
    const key = m.geometry.uuid + keep;
    if (hairCache.has(key)) return hairCache.get(key);
    const sk = m.skeleton, hi = sk.bones.findIndex((b) => b.name === "Head");
    const g = m.geometry, pos = g.attributes.position, idx = g.index;
    const toHead = new T.Matrix4().multiplyMatrices(sk.boneInverses[hi], m.bindMatrix);
    const v = new T.Vector3(), out = [];
    const n = idx ? idx.count : pos.count;
    for (let i = 0; i < n; i += 3) {
      let y = 0, z = 0;
      for (let k = 0; k < 3; k++) {
        v.fromBufferAttribute(pos, idx ? idx.getX(i + k) : i + k).applyMatrix4(toHead).multiplyScalar(100);
        y += v.y / 3; z += v.z / 3;
      }
      const beard = y < 0.075 && z > -0.03;
      if (beard === (keep === "beard")) for (let k = 0; k < 3; k++) out.push(idx ? idx.getX(i + k) : i + k);
    }
    const ng = g.clone(); ng.setIndex(out);
    hairCache.set(key, ng);
    return ng;
  }

  function buildRigged(id, base, hollow, el, gear) {
    const lib = library[base];
    if (!lib) return null;
    const L = base === "titan" ? null : LOOKS[id] || LOOKS.brannoc;
    const B = base === "titan" ? {} : bodyOf(id);
    const K = (L && L.kit) || {};
    const model = cloneSkinned(lib.scene);
    // A long robe replaces the legs (the feet still show under the hem).
    const parts = K.robe === "long" ? Object.assign({ legs: "none" }, B.parts) : B.parts;
    if (parts) swapParts(model, base, parts);
    const fx = [];
    // Titan: dark basalt; its eyes, maw and (in crackMaterial) seams glow in the day's element.
    const ec = el && ELEMENTS[el] ? ELEMENTS[el].color : "#e8553a";
    const colors = base === "titan" ? { stone: "#16130f", stoneDark: "#0c0a09", fang: "#0e0c0a", socket: "#040303", tongue: "#0a0606" } : roleColors(L, hollow);
    const hide = new Set(B.hide || []);
    const showCrown = L && L.gear === "crown" && !hide.has("crown");
    model.traverse((o) => {
      if (!o.isMesh) return;
      o.castShadow = true; o.frustumCulled = false;
      let srcBase = base, kind = "";
      for (let p = o; p && p !== model; p = p.parent) if (p.userData.sbBase) { srcBase = p.userData.sbBase; kind = p.userData.sbKind; break; }
      if (!kind) for (let p = o; p && p !== model && !kind; p = p.parent) kind = partKind(base, p.name);
      if (!Array.isArray(o.material) && roleOf(srcBase, kind, o.material.name) === "hair" && kind === "head" && srcBase !== "hooded" && (B.shave || B.bald))
        o.geometry = trimHair(o, B.bald ? "beard" : "scalp");
      const recolor = (m) => {
        const role = roleOf(srcBase, kind, m.name);
        const c = m.clone();
        if ((role === "crown" && !showCrown) || role === "tongue" || hide.has(role) || hide.has(`${kind}:${role}`)) { c.visible = false; return c; }
        if (role === "maw") { c.color.set(mul(ec, 0.3)); c.emissive = new T.Color(ec); c.emissiveIntensity = 1.8; c.metalness = 0; return c; }
        if (role === "eye" && (hollow || (L && L.glow))) { c.color.set(colors.eye); c.emissive = new T.Color(colors.eye); c.emissiveIntensity = 3; return c; }
        if (role && role !== "keep" && colors[role]) c.color.set(colors[role]);
        else if (hollow) c.color.lerp(new T.Color("#2e1f33"), 0.5);
        if (role === "armor" && srcBase === "monarch") { c.metalness = 0.2; c.roughness = 0.55; }
        if (base === "titan") { c.metalness = 0; c.roughness = 0.95; }
        if (role === "blade" || role === "trim") { c.metalness = 0.3; c.roughness = 0.5; }
        // Per-role finish under the environment light: metals catch it, skin/cloth barely.
        const shiny = (role === "armor" && srcBase === "monarch") || role === "trim" || role === "blade" || role === "crown";
        c.envMapIntensity = base === "titan" ? 0.15 : shiny ? 0.8 : 0.25;
        // Two finishes only (matte and metal), so the merged body needs two draw calls.
        if (base !== "titan") { c.roughness = shiny ? 0.5 : 0.8; c.metalness = shiny ? 0.3 : 0; }
        // Glowing molten seams over the armour (forge heroes).
        if (K.seams && (role === "armor" || role === "trim" || role === "pants")) crackMaterial(c, hollow ? "#ff2a2a" : K.seams, fx, K.seamScale || 3.2);
        return c;
      };
      o.material = Array.isArray(o.material) ? o.material.map(recolor) : recolor(o.material);
    });
    const root = new T.Group();
    root.add(model);
    // Normalize height (base models are ~1.8 m; heroes stand about 2 units tall like the fallback figures).
    const targetHead = base === "titan" ? 3.6 : 1.85;
    const h = B.h || 1;
    model.scale.setScalar(targetHead / lib.headY * h);
    const mixer = new T.AnimationMixer(model);
    const clip = (kind) => { for (const n of ANIMS[kind]) if (lib.clips[n]) return lib.clips[n]; return null; };
    const actions = {};
    for (const k of Object.keys(ANIMS)) { const c = clip(k); if (c) actions[k] = mixer.clipAction(c); }
    const anim = makeAnim(mixer, lib, base === "titan" ? TITAN_STYLE : styleOf(id, L), actions);
    if (L) {
      buildKit(id, L, base, model, hollow, fx, B, gear);
      mergeKit(model, `${id}|${hollow ? 1 : 0}|${base}|${gearKey(gear)}`);
      mergeBody(model, `${id}|${hollow ? 1 : 0}|${base}`);
      shapeBody(model, B);
    }
    else buildTitanKit(model, el, fx);
    return { model: root, mixer, actions, anim, fx, height: base === "titan" ? 4.7 : 2.3 * h };
  }

  // ---------- animation: per-hero clip choice + crossfading controller ----------
  // The base models ship Idle, Idle_Sword, Idle_Neutral, Idle_Gun, Sword_Slash, Punch_Left/Right,
  // Kick_Left/Right, Gun_Shoot, Interact, Roll, Run, Run_Back, Wave, HitRecieve(_2), Death.
  const BRAWLERS = { odo: 1, kettle: 1, gorrum: 1, thrain: 1 };
  const SMALL_FOCUS = { candle: 1, mirror: 1, bell: 1, orb: 1, lantern: 1 };
  function styleOf(id, L) {
    const p = L.prop;
    return {
      idle: SMALL_FOCUS[p] ? "Idle_Neutral" : p === "bow" ? "Idle_Gun" : "Idle_Sword",
      // Strikes cycle through the list; brawlers punch and kick, blades slash and kick.
      strike: BRAWLERS[id] ? ["Punch_Right", "Punch_Left", "Kick_Right"] : p === "daggers" ? ["Sword_Slash", "Punch_Left", "Kick_Left"]
        : p === "spear" || p === "trident" ? ["Sword_Slash", "Kick_Right"] : ["Sword_Slash", "Sword_Slash", "Kick_Right"],
      cast: p === "bow" ? "Gun_Shoot" : "Gun_Shoot", support: "Interact",
      fidget: ["Idle", "Idle_Neutral", "Interact"], win: "Wave",
    };
  }
  const TITAN_STYLE = { idle: "Idle", strike: ["Punch", "Weapon", "Punch"], cast: "Punch", support: "Yes", fidget: ["No"], win: "Yes", titan: true };
  function makeAnim(mixer, lib, S, actions) {
    const cache = {};
    const act = (name) => {
      if (!lib.clips[name]) return null;
      return cache[name] || (cache[name] = mixer.clipAction(lib.clips[name]));
    };
    const idleName = lib.clips[S.idle] ? S.idle : Object.keys(lib.clips).find((n) => /^Idle/.test(n));
    const A = {
      S, cur: null, strikeN: 0, hold: false,
      has: (name) => !!lib.clips[name],
      // Crossfade to `name`. Loops when opt.loop; otherwise plays once and returns to idle.
      play(name, opt = {}) {
        const a = act(name);
        if (!a) return null;
        const prev = A.cur;
        a.reset();
        a.setLoop(opt.loop ? T.LoopRepeat : T.LoopOnce, opt.loop ? Infinity : 1);
        a.clampWhenFinished = !!opt.clamp;
        a.setEffectiveTimeScale(opt.speed || (S.titan && name === idleName ? 0.7 : 1));
        a.setEffectiveWeight(1);
        a.play();
        if (prev && prev !== a) prev.crossFadeTo(a, opt.fade == null ? 0.18 : opt.fade, false);
        A.cur = a; A.hold = !!opt.hold;
        return a;
      },
      idle(fade = 0.25) { return A.play(idleName, { loop: true, fade }); },
      strike() { const s = S.strike.filter((n) => lib.clips[n]); return A.play(s[A.strikeN++ % s.length] || "Sword_Slash", { fade: 0.1 }); },
      duration: (name) => lib.clips[name] ? lib.clips[name].duration : 0,
    };
    // Keep the old `actions` map working (hero viewer tap) and start idling.
    if (idleName) actions.idle = act(idleName);
    A.idle(0);
    mixer.addEventListener("finished", (e) => {
      if (e.action !== A.cur || e.action.clampWhenFinished || A.hold) return;
      A.idle(0.22);
    });
    return A;
  }

  // ---------- signature kit: code-built props & headgear attached to bones ----------
  // Every hero gets a silhouette from LOOKS: `prop` (weapon or focus), `gear` (headgear),
  // `glow` (eyes and glowing parts) and the optional 3D-only `kit` ({ cape, aura, shield,
  // side, helm, staff, big, flame, pack }). Parts are built in the model's own metres
  // (hero ≈ 1.75 m) and merged into one mesh per material per bone, cached per hero, so a
  // full battle adds only a few draw calls per unit.
  const kitCache = new Map();
  const D2R = Math.PI / 180;
  // Head-bone offsets per base: top of the head (or hood) and the face's front.
  // `hair` is the hooded head with its hood hidden (long hair), `bald` a head with no scalp hair.
  const HEAD = {
    monarch: { top: 0.26, r: 0.13, face: 0.15, eye: 0.09, crown: 0.18 },
    adventurer: { top: 0.25, r: 0.12, face: 0.14, eye: 0.09, crown: 0.18 },
    hooded: { top: 0.27, r: 0.15, face: 0.16, eye: 0.09, crown: 0.25 },
    hair: { top: 0.25, r: 0.12, face: 0.14, eye: 0.1, crown: 0.2 },
    bald: { top: 0.235, r: 0.11, face: 0.135, eye: 0.09, crown: 0.17 },
  };

  function bake(src) {
    src.updateMatrixWorld(true);
    const buckets = new Map();
    src.traverse((o) => {
      if (!o.isMesh) return;
      const g = o.geometry.clone().applyMatrix4(o.matrixWorld);
      const ng = g.index ? g.toNonIndexed() : g;
      if (!buckets.has(o.material)) buckets.set(o.material, []);
      buckets.get(o.material).push(ng);
    });
    return [...buckets].map(([mat, list]) => ({ mat, geo: mergeBufferGeometries(list) }));
  }
  // ---------- draw-call merging ----------
  // A phone can afford ~10 draw calls per hero, so after the kit is built:
  // * Kit: every kit mesh (static or animated) gets a helper bone as its child, and all kit
  //   geometry is merged into ONE skinned mesh per finish (metal, leather, cloth, gold, glow…)
  //   with the material colour baked into vertex colours. The animated parts keep working:
  //   their fx move the (now invisible) node, and the helper bone follows it.
  // * Body: the model's primitives that share a skeleton are merged per finish the same way.
  // Merged geometry is cached per hero + gear, so a battle shares it between units.
  const finishCache = new Map(), mergeCache = new Map();
  function finishOf(m) {
    // Translucent glows share two opacity levels so they merge into one or two meshes.
    if (m.transparent && m.isMeshBasicMaterial) {
      const op = m.opacity < 0.45 ? 0.3 : 0.6, key = `glow|${op}`;
      let f = finishCache.get(key);
      if (!f) { f = m.clone(); f.color = new T.Color(1, 1, 1); f.opacity = op; f.vertexColors = true; f.userData.shared = true; finishCache.set(key, f); }
      return { key, mat: f };
    }
    const n2 = (x) => x == null ? "" : x.toFixed(2);
    if (m.userData.crack) { // glowing seams (crackMaterial): keep the shader patch
      const key = `crack|${m.userData.crack}|${n2(m.roughness)}|${n2(m.metalness)}`;
      let f = finishCache.get(key);
      if (!f) {
        f = m.clone(); f.onBeforeCompile = m.onBeforeCompile; f.customProgramCacheKey = m.customProgramCacheKey;
        f.color = new T.Color(1, 1, 1); f.vertexColors = true; f.userData.shared = true; finishCache.set(key, f);
      }
      return { key, mat: f };
    }
    const key = [m.type, m.map ? m.map.uuid : "", n2(m.roughness), n2(m.metalness), m.side,
      m.transparent ? m.opacity : 1, n2(m.envMapIntensity), m.bumpScale || 0,
      m.emissive ? m.emissive.getHexString() + m.emissiveIntensity : ""].join("|");
    let f = finishCache.get(key);
    if (!f) {
      f = m.clone(); f.color = new T.Color(1, 1, 1); f.vertexColors = true; f.userData.shared = true;
      finishCache.set(key, f);
    }
    return { key, mat: f };
  }
  // Geometry with only the attributes we merge, plus a vertex colour (linear) for `color`.
  // The models' attributes are interleaved and quantized (meshopt), so copy each one into a
  // plain Float32 attribute through the accessors before merging.
  const plain = (a) => {
    const n = a.count, s = a.itemSize, out = new Float32Array(n * s), get = [a.getX, a.getY, a.getZ, a.getW];
    for (let i = 0; i < n; i++) for (let c = 0; c < s; c++) out[i * s + c] = get[c].call(a, i);
    return new T.BufferAttribute(out, s);
  };
  function prepGeo(src, color, keepSkin) {
    const g = new T.BufferGeometry();
    for (const n of ["position", "normal", "uv", ...(keepSkin ? ["skinIndex", "skinWeight"] : [])]) if (src.attributes[n]) g.setAttribute(n, plain(src.attributes[n]));
    if (src.index) g.setIndex(src.index);
    const out = g.index ? g.toNonIndexed() : g;
    if (!out.attributes.uv) out.setAttribute("uv", new T.Float32BufferAttribute(new Float32Array(out.attributes.position.count * 2), 2));
    const n = out.attributes.position.count, col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { col[i * 3] = color.r; col[i * 3 + 1] = color.g; col[i * 3 + 2] = color.b; }
    out.setAttribute("color", new T.BufferAttribute(col, 3));
    return out;
  }
  function mergeKit(model, cacheKey) {
    const meshes = [];
    model.traverse((o) => { if (o.isMesh && o.userData.kit) meshes.push(o); });
    if (!meshes.length) return;
    const bones = meshes.map((m) => { const b = new T.Bone(); m.add(b); m.visible = false; return b; });
    let groups = mergeCache.get(cacheKey);
    if (!groups) {
      const buckets = new Map();
      meshes.forEach((m, i) => {
        const f = finishOf(m.material);
        const g = prepGeo(m.geometry, m.material.color, false), n = g.attributes.position.count;
        const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
        for (let k = 0; k < n; k++) { si[k * 4] = i; sw[k * 4] = 1; }
        g.setAttribute("skinIndex", new T.Uint16BufferAttribute(si, 4));
        g.setAttribute("skinWeight", new T.Float32BufferAttribute(sw, 4));
        if (!buckets.has(f.key)) buckets.set(f.key, { mat: f.mat, list: [] });
        buckets.get(f.key).list.push(g);
      });
      groups = [...buckets.values()].map(({ mat, list }) => ({ mat, geo: mergeBufferGeometries(list) }));
      mergeCache.set(cacheKey, groups);
    }
    model.updateMatrixWorld(true);
    // Bone inverses = inverse(bindMatrix), so vertex data is simply each mesh's local geometry.
    const holder = new T.Group(); model.add(holder); holder.updateMatrixWorld(true);
    const inv = holder.matrixWorld.clone().invert();
    const skel = new T.Skeleton(bones, bones.map(() => inv.clone()));
    for (const { mat, geo: g } of groups) {
      const sm = new T.SkinnedMesh(g, mat);
      sm.frustumCulled = false; sm.castShadow = !mat.isMeshBasicMaterial; sm.userData.kitMerged = 1;
      holder.add(sm);
      sm.updateMatrixWorld(true);
      sm.bind(skel, sm.matrixWorld.clone());
    }
  }
  function mergeBody(model, cacheKey) {
    // Group visible body meshes by finish. Each source mesh can have its own joint order and
    // bind matrix, so skin indices are remapped onto one shared bone list and vertices moved
    // into the first mesh's bind space; a mesh whose bind inverses differ for a shared bone
    // (a part borrowed from another base) starts its own group.
    const all = [];
    model.traverse((o) => { if (o.isSkinnedMesh && !o.userData.kit && !o.userData.kitMerged && o.parent && !o.parent.isBone) all.push(o); });
    const groups = [];
    const near = (a, b) => a.elements.every((x, i) => Math.abs(x - b.elements[i]) < 1e-3 * (1 + Math.abs(x)));
    // A mesh fits a group when its bind inverses equal the group's up to one constant offset X
    // (invB_mesh[j] = invB_group[j] · X for every shared bone).
    const fit = (g, o) => {
      let X = null;
      for (let j = 0; j < o.skeleton.bones.length; j++) {
        const k = g.bones.indexOf(o.skeleton.bones[j]);
        if (k < 0) continue;
        if (!X) { X = g.inverses[k].clone().invert().multiply(o.skeleton.boneInverses[j]); continue; }
        if (!near(g.inverses[k].clone().multiply(X), o.skeleton.boneInverses[j])) return null;
      }
      return X || new T.Matrix4();
    };
    for (const o of all) {
      const m = o.material;
      if (Array.isArray(m) || m.map) continue;
      if (!o.visible || !m.visible) { o.parent.remove(o); continue; }
      const f = finishOf(m);
      let grp = null, X = null;
      for (const g of groups) if (g.key === f.key && (X = fit(g, o))) { grp = g; break; }
      if (!grp) { grp = { key: f.key, mat: f.mat, bones: [], inverses: [], list: [], xs: [] }; groups.push(grp); X = new T.Matrix4(); }
      // Bones new to the group get inverses expressed in the group's frame: invB · X⁻¹.
      const Xi = X.clone().invert();
      o.skeleton.bones.forEach((b, j) => { if (grp.bones.indexOf(b) < 0) { grp.bones.push(b); grp.inverses.push(o.skeleton.boneInverses[j].clone().multiply(Xi)); } });
      grp.list.push(o); grp.xs.push(X);
    }
    groups.forEach((grp, gi) => {
      const first = grp.list[0], key = `${cacheKey}|${gi}|${grp.key}|${grp.list.length}`;
      let g = mergeCache.get(key);
      if (!g) {
        const toFirst = new T.Matrix4(), nm = new T.Matrix3();
        g = mergeBufferGeometries(grp.list.map((o, li) => {
          const pg = prepGeo(o.geometry, o.material.color, true);
          // invB_g · bindF · v' = invB_g · X · bind_o · v  →  v' = bindF⁻¹ · X · bind_o · v
          toFirst.copy(first.bindMatrix).invert().multiply(grp.xs[li]).multiply(o.bindMatrix);
          pg.applyMatrix4(toFirst);
          const si = pg.attributes.skinIndex, map = o.skeleton.bones.map((b) => grp.bones.indexOf(b));
          const out = new Uint16Array(si.count * 4);
          for (let i = 0; i < si.count; i++) for (let c = 0; c < 4; c++) out[i * 4 + c] = Math.max(0, map[Math.round(si.array[i * 4 + c])]);
          pg.setAttribute("skinIndex", new T.Uint16BufferAttribute(out, 4));
          if (pg.attributes.skinWeight.normalized || !(pg.attributes.skinWeight.array instanceof Float32Array)) {
            const sw = pg.attributes.skinWeight, f32 = new Float32Array(sw.count * 4);
            for (let i = 0; i < sw.count; i++) { f32[i * 4] = sw.getX(i); f32[i * 4 + 1] = sw.getY(i); f32[i * 4 + 2] = sw.getZ(i); f32[i * 4 + 3] = sw.getW(i); }
            pg.setAttribute("skinWeight", new T.Float32BufferAttribute(f32, 4));
          }
          return pg;
        }));
        mergeCache.set(key, g);
      }
      const sm = new T.SkinnedMesh(g, grp.mat);
      sm.position.copy(first.position); sm.quaternion.copy(first.quaternion); sm.scale.copy(first.scale);
      sm.castShadow = true; sm.frustumCulled = false;
      first.parent.add(sm);
      sm.bind(new T.Skeleton(grp.bones, grp.inverses.map((x) => x.clone())), first.bindMatrix.clone());
      for (const o of grp.list) o.parent.remove(o);
    });
  }

  function instantiate(baked) {
    const g = new T.Group();
    for (const { mat, geo: bg } of baked) {
      const m = new T.Mesh(bg, mat);
      m.castShadow = !(mat.isMeshBasicMaterial);
      m.frustumCulled = false;
      g.add(m);
    }
    return g;
  }
  // A group under `bone` whose units are the model's metres. `dir` (bone space) is where the
  // group's +Y points; `pos` is its origin in bone space.
  function socket(bone, model, pos, dir, roll = 0) {
    const s = new T.Vector3(); bone.getWorldScale(s);
    const outer = new T.Group(); outer.scale.setScalar(model.scale.x / (s.x || 1));
    bone.add(outer);
    const inner = new T.Group(); inner.position.set(pos[0], pos[1], pos[2]);
    if (dir) {
      const d = new T.Vector3(dir[0], dir[1], dir[2]).normalize();
      inner.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), d);
      if (roll) inner.quaternion.multiply(new T.Quaternion().setFromAxisAngle(new T.Vector3(0, 1, 0), roll * D2R));
    }
    outer.add(inner);
    return inner;
  }
  // Grip direction for a hand: the fist's axis is the wrist's X axis; `tilt` swings the tip
  // from "forward like a sword" (0) towards "straight up" (about 60) in the idle pose.
  const gripDir = (side, tilt) => [side === "R" ? -Math.cos(tilt * D2R) : Math.cos(tilt * D2R), -Math.sin(tilt * D2R), 0];
  const GRIP_POS = { R: [0, 0.075, 0.01], L: [0, 0.075, 0.01] };

  // A group under `bone` aligned with the model's own axes in the rest pose (+Y up, +Z the
  // way the hero faces, +X the hero's left), in the model's metres. `pos` is in those axes.
  // Bone axes differ per bone (the shins are rolled about the leg), so limb and hip parts use
  // this instead of `socket`.
  const _m4 = new T.Matrix4(), _q = new T.Quaternion(), _sv = new T.Vector3(), _s = new T.Vector3();
  function socketM(bone, model, pos = [0, 0, 0]) {
    model.updateMatrixWorld(true);
    bone.getWorldScale(_s);
    const outer = new T.Group(); outer.scale.setScalar(model.scale.x / (_s.x || 1));
    bone.add(outer);
    _m4.copy(model.matrixWorld).invert().multiply(bone.matrixWorld).decompose(_sv, _q, _s);
    const inner = new T.Group();
    inner.quaternion.copy(_q).invert();
    inner.position.set(pos[0], pos[1], pos[2]).applyQuaternion(inner.quaternion);
    outer.add(inner);
    return inner;
  }
  // Rest-pose height of a bone above the model's feet, in the model's metres.
  function boneY(bone, model) {
    model.updateMatrixWorld(true);
    _m4.copy(model.matrixWorld).invert().multiply(bone.matrixWorld);
    return _sv.setFromMatrixPosition(_m4).y;
  }

  // Gear (equipped items) shows on the model. Finish by rarity 1-5 (Worn … Mythic): base metal,
  // trim colour (the UI's rarity colours) and size; the item's set tints its gem and glow.
  const GEAR_METAL = ["", "#6b5d50", "#9aa3ad", "#c6ced8", "#dfe3ea", "#f0e6d0"];
  const GEAR_TRIM = ["", "#8a7a68", "#5bc46a", "#4aa3ff", "#b46cff", "#ffb02e"];
  const SET_GLOW = { fury: "#ff4a3a", vigor: "#4ae07a", bulwark: "#b8b4aa", haste: "#3ad8cc", keen: "#ffd040" };
  const gearSig = (g) => g ? `${g.r}${g.s ? g.s[0] : "-"}` : "0";
  // Headgear classes: a helm the gear upgrades, a crown-like piece it adorns, or a bare head.
  const HELM_GEAR = { helm: 1, horns: 1 };
  const ADORN_GEAR = { crown: 1, halo: 1, circlet: 1, veil: 1, mask: 1 };

  // Secondary motion: wraps a live part's animation so the part also swings against its
  // anchor's movement, as a damped spring in the anchor's own axes (+Z forward). Moving
  // forward pushes it back (+X rotation); sideways motion tilts it (Z). Cheap: one world
  // position read per part per frame.
  const _sp = new T.Vector3(), _sq = new T.Quaternion();
  function springy(fn, gain) {
    return (o, t) => {
      fn(o, t);
      const s = o.userData.sp || (o.userData.sp = { p: new T.Vector3(), t, ax: 0, az: 0, vx: 0, vz: 0, on: false });
      const dt = Math.min(0.05, Math.max(0.001, t - s.t)); s.t = t;
      if (!o.parent) return;
      o.parent.getWorldPosition(_sp);
      if (!s.on) { s.p.copy(_sp); s.on = true; }
      const vel = _sp.clone().sub(s.p).divideScalar(dt); s.p.copy(_sp);
      o.parent.getWorldQuaternion(_sq); vel.applyQuaternion(_sq.invert());
      const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
      const tx = clamp((vel.z * 0.11 - vel.y * 0.05) * gain, -0.5, 1.0), tz = clamp(-vel.x * 0.11 * gain, -0.7, 0.7);
      s.vx += ((tx - s.ax) * 70 - s.vx * 9) * dt; s.ax += s.vx * dt;
      s.vz += ((tz - s.az) * 70 - s.vz * 9) * dt; s.az += s.vz * dt;
      o.rotation.x += s.ax; o.rotation.z += s.az;
    };
  }

  function buildKit(id, L, base, model, hollow, fx, B = {}, gear = null) {
    const K = L.kit || {};
    const headSrc = (B.parts && B.parts.head) || base;
    const hide = new Set(B.hide || []);
    const hooded = headSrc === "hooded" && !hide.has("hood");
    const H = hooded ? HEAD.hooded : headSrc === "hooded" ? HEAD.hair : B.bald || hide.has("hair") ? HEAD.bald : HEAD[headSrc] || HEAD.adventurer;
    const bones = {};
    model.traverse((o) => { if (o.isBone) bones[o.name] = o; });
    model.updateMatrixWorld(true);
    const tint = (c) => hollow ? mix(c, "#2e1f33", 0.5) : c;
    // Kit materials use the shared procedural finishes (materials.mjs): `metal` ≥ 0.5 brushed
    // metal, otherwise leather grain; Mc/Mw/Mg/Mh pick cloth, wood, gold or hair explicitly.
    const TX = qm ? qm.preset.textureSize : 256; // kit texture size follows the quality tier (512/256/128)
    const M = (c, metal = 0) => metal >= 0.5 ? detailMaterial("metal", tint(c), { metalness: 0.75, size: TX }) : metal > 0 ? detailMaterial("leather", tint(c), { roughness: 0.55, metalness: 0.35, size: TX }) : detailMaterial("leather", tint(c), { size: TX });
    const Mc = (c) => detailMaterial("cloth", tint(c), { side: T.DoubleSide, repeat: 4, bump: 0.6, size: TX });
    const Mw = (c) => detailMaterial("wood", tint(c), { size: TX });
    const Mg = (c) => detailMaterial("gold", tint(c), { size: TX });
    const Gl = (c, op = 1) => glow(hollow ? mix(c, "#ff3355", 0.45) : c, op);
    const gw = gear && gear.weapon;
    const C = {
      steel: M(gw ? GEAR_METAL[gw.r] : "#c4ccd6", gw && gw.r === 1 ? 0.3 : 0.6), iron: M("#4a4a52", 0.5), wood: Mw("#6b4a29"), leather: M("#3a2a20"),
      acc: M(L.accent, 0.35), accG: Gl(L.accent), accH: Gl(L.accent, 0.28), armor: M(L.armor),
      armorD: M(mul(L.armor, 0.6)), gold: Mg(mix(L.accent, "#e8c070", 0.5)),
      glowC: Gl(L.glow || L.accent), glowH: Gl(L.glow || L.accent, 0.3),
      cloth: Mc(L.cloth || mul(L.armor, 0.62)), hair: detailMaterial("hair", tint(L.hair), { size: TX }),
    };
    // Gear metal leans towards the hero's armour colour so Mythic gear doesn't make everyone gold.
    const gmetal = (r, k = 0.7) => r === 1 ? "#5a4232" : mix(GEAR_METAL[r], L.armor, k);
    const gtrim = (r) => r >= 4 ? Mg(GEAR_TRIM[r]) : M(GEAR_TRIM[r], 0.4); // Heroic+ trim is polished
    // Build (or reuse) a merged prop and hang it on a socket. `live` parts stay separate so
    // they can animate (flames, spinning rings, swaying capes). `sig` keys gear variants.
    const attach = (slot, sock, build, sig = "") => {
      const key = `${id}|${hollow ? 1 : 0}|${slot}|${sig}`;
      let entry = kitCache.get(key);
      if (!entry) {
        const g = new T.Group(), live = [];
        build(g, live);
        live.forEach((l) => g.remove(l.obj));
        entry = { baked: bake(g), live };
        kitCache.set(key, entry);
      }
      const inst = instantiate(entry.baked);
      inst.traverse((m) => { if (m.isMesh) m.userData.kit = 1; });
      sock.add(inst);
      for (const l of entry.live) {
        const o = l.obj.clone(); sock.add(o);
        o.traverse((m) => { if (m.isMesh) m.userData.kit = 1; });
        fx.push((t) => l.fn(o, t));
      }
    };
    const P = (g, kind, pos, scale, mat, rot) => part(kind === "box" ? "bbox" : kind, g, pos, scale, mat, rot);
    const flicker = (o, t) => { const b = o.userData.base, s = 1 + Math.sin(t * 17 + o.id) * 0.12 + Math.sin(t * 29) * 0.06; o.scale.set(b[0] * s, b[1] * (2 - s), b[2] * s); };
    const pulse = (o, t) => { const b = o.userData.base, s = 1 + Math.sin(t * 3 + o.id) * 0.12; o.scale.set(b[0] * s, b[1] * s, b[2] * s); };
    const spin = (axis, rate) => (o, t) => { o.rotation[axis] = t * rate; };
    const liveMesh = (g, live, kind, pos, s, mat, fn, rot) => {
      const sc = Array.isArray(s) ? s : [s, s, s];
      const m = P(g, kind, pos, sc, mat, rot);
      m.userData.base = sc.slice(); m.castShadow = false;
      live.push({ obj: m, fn }); return m;
    };
    // A live group (several meshes moving together), added straight to `g`. With `spring`,
    // the group also lags behind its anchor's motion (runs, lunges, hits) on a damped spring.
    const liveGroup = (g, live, pos, fn, spring = 0) => { const p = pivot(g, pos); live.push({ obj: p, fn: spring ? springy(fn, spring) : fn }); return p; };

    // ---- weapons, built along +Y from the fist at the origin ----
    const W = {
      spear(g) {
        P(g, "rod", [0, 0.3, 0], [0.042, 1.75, 0.042], C.wood);
        P(g, "rod", [0, 1.15, 0], [0.06, 0.07, 0.06], C.acc);
        P(g, "cone", [0, 1.32, 0], [0.09, 0.28, 0.03], C.steel);
        P(g, "cone", [0, 1.08, 0], [0.09, 0.12, 0.09], C.acc, [180, 0, 0]);
        if (K.pennant) { // a little wind pennant under the head
          const f = Mc(K.pennant);
          P(g, "box", [0.0, 1.0, 0.11], [0.012, 0.13, 0.2], f);
          P(g, "cone", [0.0, 1.0, 0.27], [0.12, 0.14, 0.012], f, [90, 90, 0]);
        }
      },
      staff(g, live) {
        const style = K.staff || "orb";
        const f = K.staffLen || 1, dy = 1.5 * (f - 1);
        const shaft = style === "ice" ? M("#cfe8f4", 0.2) : style === "sun" ? C.gold : style === "drift" ? M("#8a7458") : C.wood;
        P(g, "rod", [0, 0.3 + dy / 2, 0], [0.05, 1.5 * f, 0.05], shaft);
        if (style === "ice") {
          P(g, "octa", [0, 1.17 + dy, 0], [0.13, 0.32, 0.13], C.accG);
          P(g, "octa", [0.07, 1.06 + dy, 0], [0.06, 0.16, 0.06], C.accG, [0, 0, -30]);
          P(g, "octa", [-0.07, 1.06 + dy, 0], [0.06, 0.16, 0.06], C.accG, [0, 0, 30]);
          liveMesh(g, live, "sphere", [0, 1.17 + dy, 0], 0.34, C.accH, pulse);
        } else if (style === "sun") {
          P(g, "sphere", [0, 1.16 + dy, 0], [0.16, 0.16, 0.16], C.glowC);
          for (let i = 0; i < 8; i++) {
            const a = i * 45 * D2R;
            P(g, "cone", [Math.cos(a) * 0.15, 1.16 + dy + Math.sin(a) * 0.15, 0], [0.04, 0.1, 0.04], C.gold, [0, 0, i * 45 - 90]);
          }
          liveMesh(g, live, "sphere", [0, 1.16 + dy, 0], 0.42, C.glowH, pulse);
        } else {
          // Orb in a forked cradle; "drift" is knotted driftwood with a shell charm.
          if (style === "drift") {
            for (const s of [-1, 1]) P(g, "rod", [s * 0.06, 1.04 + dy, 0], [0.035, 0.22, 0.035], shaft, [0, 0, s * -25]);
            P(g, "sphere", [0, 0.86 + dy, 0], [0.08, 0.06, 0.08], shaft);
            P(g, "cone", [0.06, 0.8 + dy, 0.03], [0.06, 0.08, 0.02], M("#f0e0c8"), [180, 0, 0]);
          } else {
            P(g, "ring", [0, 1.12 + dy, 0], [0.2, 0.2, 0.2], C.acc);
            P(g, "cone", [0, 1.01 + dy, 0], [0.07, 0.1, 0.07], C.acc, [180, 0, 0]);
          }
          P(g, "sphere", [0, 1.12 + dy, 0], [0.13, 0.13, 0.13], C.accG);
          liveMesh(g, live, "sphere", [0, 1.12 + dy, 0], 0.3, C.accH, pulse);
        }
      },
      hammer(g, live) {
        // Gorrum's slag maul is two-handed and long; Thrain's smith hammer is short with a glowing face.
        const big = K.big ? 1.25 : 1;
        P(g, "rod", [0, K.big ? 0.2 : 0.25, 0], [0.045 * big, K.big ? 0.85 : 0.95, 0.045 * big], C.wood);
        if (K.big) {
          P(g, "box", [0, 0.62, 0], [0.32, 0.2, 0.2], M("#2a2426", 0.5));
          P(g, "box", [0, 0.62, 0], [0.34, 0.045, 0.21], C.accG);
          P(g, "box", [0, 0.62, 0], [0.045, 0.22, 0.22], C.accG);
          P(g, "cone", [0.19, 0.62, 0], [0.11, 0.11, 0.11], M("#2a2426", 0.5), [0, 0, -90]);
          P(g, "rod", [0, -0.2, 0], [0.07, 0.06, 0.07], C.iron);
        } else {
          P(g, "box", [0, 0.68, 0], [0.3, 0.16, 0.16], C.iron);
          P(g, "box", [0, 0.68, 0], [0.32, 0.04, 0.17], C.acc);
          P(g, "box", [0.16, 0.68, 0], [0.02, 0.15, 0.15], C.accG);
          P(g, "box", [-0.16, 0.68, 0], [0.02, 0.15, 0.15], C.accG);
          liveMesh(g, live, "sphere", [0.16, 0.68, 0], 0.22, C.accH, pulse);
        }
      },
      club(g) {
        // A gnarled marsh-root club with moss and a bound grip.
        const moss = M(L.accent);
        P(g, "taper", [0, 0.38, 0], [0.16, 0.8, 0.16], C.wood);
        P(g, "sphere", [0, 0.78, 0], [0.16, 0.14, 0.16], C.wood);
        P(g, "sphere", [0.07, 0.62, 0.04], [0.08, 0.08, 0.08], C.wood);
        P(g, "sphere", [-0.06, 0.74, -0.05], [0.07, 0.07, 0.07], C.wood);
        P(g, "sphere", [0.02, 0.84, 0.05], [0.12, 0.07, 0.1], moss);
        P(g, "sphere", [-0.08, 0.66, 0.02], [0.07, 0.1, 0.07], moss);
        P(g, "rod", [0, 0.08, 0], [0.11, 0.12, 0.11], C.leather);
      },
      trident(g) {
        P(g, "rod", [0, 0.28, 0], [0.042, 1.6, 0.042], C.armorD);
        P(g, "box", [0, 1.08, 0], [0.3, 0.04, 0.04], C.gold);
        P(g, "cone", [0, 1.27, 0], [0.06, 0.34, 0.06], C.acc);
        for (const x of [-0.13, 0.13]) {
          P(g, "rod", [x, 1.16, 0], [0.03, 0.16, 0.03], C.acc);
          P(g, "cone", [x, 1.3, 0], [0.05, 0.14, 0.05], C.acc);
        }
        P(g, "sphere", [0, 1.08, 0], [0.07, 0.07, 0.07], C.accG);
      },
      katana(g) {
        P(g, "rod", [0, 0.03, 0], [0.04, 0.26, 0.04], M("#1c1c22"));
        P(g, "disc", [0, 0.17, 0], [0.1, 0.02, 0.1], C.gold);
        P(g, "box", [0, 0.48, 0], [0.012, 0.6, 0.045], C.steel);
        P(g, "box", [0, 0.92, -0.025], [0.012, 0.3, 0.04], C.steel, [-9, 0, 0]);
        P(g, "box", [0, 0.48, 0.03], [0.014, 0.6, 0.016], C.glowC);
        P(g, "box", [0, 0.91, 0.006], [0.014, 0.3, 0.016], C.glowC, [-9, 0, 0]);
      },
      sword(g, live) {
        const s = K.side === "sword" && L.prop === "shield" ? 0.8 : 1;
        P(g, "rod", [0, 0.02, 0], [0.04, 0.22, 0.04], C.leather);
        P(g, "sphere", [0, -0.1, 0], [0.06, 0.06, 0.06], C.gold);
        P(g, "box", [0, 0.14, 0], [0.26, 0.04, 0.05], C.gold);
        P(g, "box", [0, 0.16 + 0.45 * s, 0], [0.075, 0.9 * s, 0.022], C.steel);
        P(g, "cone", [0, 0.16 + 0.9 * s + 0.05, 0], [0.075, 0.1, 0.022], C.steel);
        if (L.glow || K.flame) {
          const fl = K.flame ? Gl(L.accent, 0.55) : C.glowH;
          liveMesh(g, live, "box", [0, 0.16 + 0.47 * s, 0], [0.13, 0.98 * s, 0.05], fl, K.flame ? flicker : pulse);
        }
      },
      axe(g) {
        P(g, "rod", [0, 0.25, 0], [0.045, 0.85, 0.045], C.wood);
        P(g, "half", [0, 0.6, 0], [0.34, 0.025, 0.3], C.steel, [90, 90, 0]);
        P(g, "box", [0, 0.6, 0], [0.08, 0.12, 0.06], C.acc);
        P(g, "cone", [0, 0.72, 0], [0.05, 0.1, 0.05], C.acc);
      },
      dagger(g) {
        P(g, "rod", [0, 0.01, 0], [0.034, 0.13, 0.034], C.leather);
        P(g, "box", [0, 0.09, 0], [0.12, 0.025, 0.03], C.acc);
        P(g, "cone", [0, 0.28, 0], [0.065, 0.36, 0.015], C.steel);
        P(g, "cone", [0, 0.28, 0], [0.09, 0.4, 0.02], C.glowH);
      },
      whip(g) {
        // Just the handle here; the lash hangs from the wrist under gravity (see below).
        P(g, "rod", [0, 0.06, 0], [0.045, 0.3, 0.045], C.leather);
        P(g, "sphere", [0, -0.1, 0], [0.055, 0.055, 0.055], C.acc);
        P(g, "rod", [0, 0.2, 0], [0.06, 0.04, 0.06], C.acc);
      },
      hook(g) {
        P(g, "rod", [0, 0.2, 0], [0.04, 0.7, 0.04], M("#5a4034", 0.4));
        P(g, "hook", [0.09, 0.56, 0], [0.18, 0.18, 0.18], M("#7a5a48", 0.5), [0, 0, -20]);
        P(g, "cone", [0.2, 0.52, 0], [0.04, 0.1, 0.04], M("#7a5a48", 0.5), [0, 0, 150]);
        P(g, "rod", [0, -0.12, 0], [0.06, 0.05, 0.06], C.acc);
        P(g, "rod", [0, -0.2, 0], [0.012, 0.14, 0.012], C.iron);
      },
      bow(g) {
        // Limbs curve back towards the string side (-Z); the fist holds the middle.
        P(g, "rod", [0, 0, 0], [0.04, 0.16, 0.04], C.leather);
        for (const sgn of [1, -1]) {
          P(g, "rod", [0, sgn * 0.22, -0.02], [0.03, 0.32, 0.03], C.wood, [sgn * -8, 0, 0]);
          P(g, "rod", [0, sgn * 0.5, -0.09], [0.024, 0.28, 0.024], C.wood, [sgn * -28, 0, 0]);
          P(g, "sphere", [0, sgn * 0.63, -0.16], [0.035, 0.035, 0.035], C.acc);
        }
        P(g, "rod", [0, 0, -0.16], [0.006, 1.26, 0.006], C.accG);
      },
      lantern(g, live) {
        P(g, "rod", [0, 0.3, 0], [0.04, 1.5, 0.04], C.wood);
        P(g, "crook", [0.1, 1.05, 0], [0.2, 0.2, 0.2], C.gold);
        P(g, "rod", [0.2, 0.97, 0], [0.008, 0.12, 0.008], C.gold);
        P(g, "box", [0.2, 0.84, 0], [0.13, 0.17, 0.13], M(mix(L.accent, "#6a4a20", 0.6), 0.5));
        P(g, "cone", [0.2, 0.95, 0], [0.16, 0.06, 0.16], C.gold);
        P(g, "sphere", [0.2, 0.84, 0], [0.15, 0.13, 0.15], C.accG);
        liveMesh(g, live, "sphere", [0.2, 0.84, 0], 0.4, C.accH, pulse);
      },
      candle(g, live) {
        P(g, "disc", [0, 0.06, 0], [0.22, 0.03, 0.22], C.gold);
        P(g, "rod", [0, -0.03, 0], [0.045, 0.16, 0.045], C.gold);
        P(g, "rod", [0, 0.2, 0], [0.11, 0.28, 0.11], M("#f2e6c8"));
        P(g, "ring", [0.13, 0.03, 0], [0.08, 0.08, 0.2], C.gold, [90, 0, 0]);
        liveMesh(g, live, "cone", [0, 0.42, 0], [0.11, 0.22, 0.11], C.accG, flicker);
        liveMesh(g, live, "sphere", [0, 0.4, 0], 0.42, C.accH, pulse);
      },
      mirror(g, live) {
        P(g, "rod", [0, 0.05, 0], [0.035, 0.2, 0.035], C.gold);
        P(g, "ring", [0, 0.3, 0], [0.24, 0.24, 0.3], C.gold);
        P(g, "disc", [0, 0.3, 0], [0.22, 0.012, 0.22], C.accG, [90, 0, 0]);
        liveMesh(g, live, "sphere", [0, 0.3, 0], 0.4, C.accH, pulse);
      },
      bell(g, live) {
        // Hand bell: handle in the fist, mouth hanging below the hand (-Y).
        P(g, "rod", [0, 0.05, 0], [0.04, 0.18, 0.04], C.wood);
        P(g, "sphere", [0, -0.08, 0], [0.12, 0.1, 0.12], C.gold);
        P(g, "bell", [0, -0.22, 0], [0.32, 0.28, 0.32], C.gold, [180, 0, 0]);
        P(g, "ring", [0, -0.36, 0], [0.32, 0.32, 0.4], C.gold, [90, 0, 0]);
        P(g, "sphere", [0, -0.39, 0], [0.07, 0.07, 0.07], C.glowC);
        liveMesh(g, live, "sphere", [0, -0.24, 0], 0.55, C.glowH, pulse);
      },
      orb(g, live) {
        P(g, "sphere", [0, 0.22, 0], [0.18, 0.18, 0.18], M("#140a1e", 0.3));
        liveMesh(g, live, "sphere", [0, 0.22, 0], 0.3, C.accH, pulse);
        liveMesh(g, live, "ring", [0, 0.22, 0], 0.3, C.accG, spin("y", 2.2), [70, 0, 0]);
        liveMesh(g, live, "ring", [0, 0.22, 0], 0.24, C.glowC, spin("x", -1.6), [0, 0, 60]);
      },
    };
    // Tilt (degrees towards vertical in idle) per weapon.
    // Idle holds the fist forward with the arm low; the cast pose raises it pointing at the
    // target, so tall foci use a compromise that stands up in idle without leaning far back
    // when casting.
    const TILT = { spear: 25, staff: 32, lantern: 32, candle: 42, bell: 35, orb: 40, mirror: 30, bow: 15, trident: 30, club: 12, hammer: 15, axe: 15, hook: 25, whip: 10 };
    const ROLL = { bow: 90 };

    // Gear trim on a held weapon: rarity-coloured wraps at the grip, a set gem in the pommel
    // (Superior+), and a set-coloured glow around the whole weapon (Mythic).
    const weaponGear = (g, live, w) => {
      const trim = gtrim(w.r), gem = Gl(SET_GLOW[w.s] || L.accent);
      P(g, "ring", [0, 0.06, 0], [0.075, 0.075, 0.3], trim, [90, 0, 0]);
      if (w.r >= 2) P(g, "ring", [0, -0.02, 0], [0.07, 0.07, 0.3], trim, [90, 0, 0]);
      if (w.r >= 3) P(g, "octa", [0, -0.14, 0], [0.06, 0.08, 0.06], gem);
      if (w.r >= 4) for (const s of [-1, 1]) P(g, "cone", [s * 0.06, 0.12, 0], [0.03, 0.09, 0.03], trim, [0, 0, s * -60]);
      if (w.r >= 5) {
        P(g, "octa", [0, 0.13, 0], [0.07, 0.09, 0.07], gem);
        liveMesh(g, live, "sphere", [0, 0.13, 0], 0.13, Gl(SET_GLOW[w.s] || L.accent, 0.3), pulse);
      }
    };
    const RSCALE = [1, 1, 1.04, 1.08, 1.13, 1.18];

    // ---- right hand ----
    const right = L.prop === "shield" ? K.side : L.prop === "daggers" ? "dagger" : L.prop;
    const builtinSword = false; // the code-built sword merges with the kit (the model's own costs 3 draw calls)
    model.traverse((o) => {
      if (o.name === "Sword") o.visible = builtinSword;
      if (o.name === "Backpack" && (K.cape || K.pack === false || K.back)) o.visible = false;
    });
    if (right && !builtinSword && W[right] && bones.WristR) {
      // Gorrum's maul is held upright beside him rather than across his body.
      const tilt = right === "hammer" && K.big ? 58 : TILT[right] || 0;
      // Finer weapons are a little bigger: scale this unit's grip socket (live parts included).
      const sockR = socket(bones.WristR, model, GRIP_POS.R, gripDir("R", tilt), ROLL[right] || 0);
      if (gw) sockR.scale.multiplyScalar(RSCALE[gw.r]);
      attach("R", sockR, (g, live) => {
        W[right](g, live);
        if (gw) weaponGear(g, live, gw);
      }, gearSig(gw));
    }
    // The whip's lash hangs from the fist and trails on the ground, snaking slowly (a held
    // whip that pointed up read as a bow); a second coil hangs at the hip.
    if (L.prop === "whip" && bones.WristR) {
      attach("Wl", socketM(bones.WristR, model, [0, 0, 0]), (g, live) => {
        const lash = liveGroup(g, live, [0, 0, 0], (o, t) => { o.rotation.y = Math.sin(t * 1.7) * 0.35; o.rotation.x = Math.sin(t * 2.3) * 0.06; }, 0.6);
        const pts = [];
        for (let i = 0; i <= 12; i++) {
          const k = i / 12;
          // Forward and down to the ground (the wrist is ~1 m up), then along the ground.
          const y = k < 0.7 ? -Math.pow(k / 0.7, 1.4) * 0.92 : -0.92;
          const fwd = 0.12 + k * 0.75, side = Math.sin(k * 9) * 0.1 * k;
          pts.push(new T.Vector3(-0.08 - side, y, fwd));
        }
        for (let i = 0; i < 12; i++) {
          const a = pts[i], b = pts[i + 1], len = a.distanceTo(b);
          const m = P(lash, "rod", [(a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2], [0.035 - i * 0.002, len + 0.01, 0.035 - i * 0.002], C.accG);
          m.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), b.clone().sub(a).normalize());
        }
        const tip = pts[12];
        P(lash, "sphere", [tip.x, tip.y + 0.03, tip.z], [0.09, 0.07, 0.09], C.glowC);
        P(lash, "cone", [tip.x, tip.y + 0.12, tip.z], [0.08, 0.2, 0.08], C.glowC); // the flame rides on the lash
      });
    }
    // ---- left hand: shield or second dagger ----
    if (bones.WristL && L.prop === "daggers") attach("L", socket(bones.WristL, model, GRIP_POS.L, gripDir("L", 0)), (g, live) => {
      W.dagger(g, live); if (gw) weaponGear(g, live, gw);
    }, gearSig(gw));
    if (bones.WristL && L.prop === "shield") {
      // Shield frame: face (+Z) points along the wrist's X axis, up (+Y) along the forearm.
      const sock = socket(bones.WristL, model, [0, 0.0, 0.08], null);
      sock.quaternion.setFromRotationMatrix(new T.Matrix4().makeBasis(new T.Vector3(0, 0, 1), new T.Vector3(0, -1, 0), new T.Vector3(1, 0, 0)));
      const style = K.shield || "round";
      attach("S", sock, (g) => {
        const face = M(K.shieldFace || mix(L.armor, L.accent, 0.25), 0.4), rim = M(gw && gw.r >= 3 ? GEAR_TRIM[gw.r] : mix(L.accent, "#c8ccd4", 0.4), 0.6);
        if (style === "kite") {
          P(g, "box", [0, 0.1, 0], [0.4, 0.42, 0.035], face);
          P(g, "cone", [0, -0.27, 0], [0.4, 0.32, 0.035], face, [180, 0, 0]);
          P(g, "box", [0, 0.0, 0.022], [0.06, 0.62, 0.012], rim);
          P(g, "box", [0, 0.14, 0.022], [0.34, 0.06, 0.012], rim);
          P(g, "ring", [0, 0.1, 0.0], [0.4, 0.42, 0.35], rim, [0, 0, 0]);
        } else if (style === "tower") {
          P(g, "box", [0, 0.05, 0], [0.44, 0.78, 0.04], M(L.armor, 0.4));
          P(g, "box", [0, 0.05, -0.006], [0.5, 0.84, 0.03], Gl(L.glow || L.accent, 0.7));
          P(g, "sphere", [0, 0.12, 0.03], [0.14, 0.14, 0.05], C.glowC);
          P(g, "box", [0, 0.05, 0.024], [0.05, 0.66, 0.012], C.gold);
        } else {
          const r = K.big ? 0.62 : 0.56;
          P(g, "disc", [0, 0, 0], [r, 0.035, r], face, [90, 0, 0]);
          P(g, "ring", [0, 0, 0], [r, r, 0.6], K.big ? Gl(L.accent) : rim);
          P(g, "sphere", [0, 0, 0.02], [0.12, 0.12, 0.08], rim);
          if (K.studs) for (let i = 0; i < 6; i++) { const a = i * 60 * D2R; P(g, "sphere", [Math.cos(a) * r * 0.36, Math.sin(a) * r * 0.36, 0.02], [0.045, 0.045, 0.03], M(L.accent)); }
          if (K.big) for (let i = 0; i < 8; i++) { const a = i * 45 * D2R; P(g, "box", [Math.cos(a) * r * 0.3, Math.sin(a) * r * 0.3, 0.02], [0.03, r * 0.5, 0.012], rim, [0, 0, i * 45 + 90]); }
        }
      }, gw && gw.r >= 3 ? String(gw.r) : "");
    }

    // ---- headgear ----
    const gh = gear && gear.helm;
    const headClass = HELM_GEAR[L.gear] ? "helm" : ADORN_GEAR[L.gear] || hooded || K.hat ? "adorn" : "open";
    if (bones.Head) {
      const head = socket(bones.Head, model, [0, 0, 0], null);
      const top = H.top, r = H.r;
      const helm = (g, metal, open) => {
        // A rounded helm that covers the crown and sides, with a nasal bar; `open` has cheek guards instead.
        P(g, "dome", [0, top - 0.12, -0.01], [r * 2.25, r * 1.55, r * 2.35], metal);
        P(g, "rod", [0, top - 0.12, -0.01], [r * 2.3, 0.035, r * 2.4], metal);
        P(g, "box", [0, top - 0.17, H.face + 0.012], [0.03, 0.1, 0.02], metal);
        if (open) for (const s of [-1, 1]) P(g, "box", [s * r * 0.98, top - 0.21, 0.04], [0.03, 0.12, 0.1], metal);
      };
      const eyes = (g) => { for (const x of [-0.05, 0.05]) P(g, "sphere", [x, H.eye, H.face], [0.035, 0.022, 0.02], Gl(hollow ? "#ff2a2a" : L.glow)); };
      const gearHead = L.gear;
      attach("H", head, (g, live) => {
        if (gearHead === "helm") {
          const metal = M(gh ? mix(GEAR_METAL[gh.r], L.armor, 0.3) : mix(L.armor, "#c8ccd4", K.helm === "winged" ? 0.2 : 0.5), 0.6);
          helm(g, metal, K.helm !== "great");
          if (K.helm === "winged") {
            for (const s of [-1, 1]) {
              P(g, "cone", [s * (r + 0.03), top - 0.0, -0.05], [0.1, 0.32, 0.03], M("#ffffff", 0.2), [-35, 90, s * -35]);
              P(g, "cone", [s * (r + 0.02), top - 0.06, -0.08], [0.08, 0.24, 0.025], C.glowC, [-50, 90, s * -50]);
            }
          } else if (K.helm === "horned") {
            for (const s of [-1, 1]) {
              P(g, "cone", [s * (r + 0.05), top + 0.0, 0], [0.075, 0.3, 0.075], M("#e8e4da"), [0, 0, s * -35]);
              P(g, "cone", [s * (r + 0.13), top + 0.15, 0], [0.035, 0.08, 0.035], C.accG, [0, 0, s * -35]);
            }
            P(g, "box", [0, top + 0.0, 0], [0.03, 0.07, 0.26], C.acc);
          } else if (K.helm === "great") {
            // Visored great helm with a slit and a ridge; the veteran's battered steel.
            P(g, "rod", [0, top - 0.2, 0.0], [r * 2.25, 0.16, r * 2.3], metal);
            P(g, "box", [0, H.eye + 0.005, H.face + 0.005], [0.17, 0.022, 0.02], M("#141418"));
            P(g, "box", [0, top - 0.04, 0], [0.025, 0.05, r * 2.1], C.acc);
            for (const s of [-1, 1]) P(g, "sphere", [s * r * 1.1, top - 0.15, 0], [0.04, 0.04, 0.04], C.acc);
          }
        } else if (gearHead === "horns") {
          P(g, "dome", [0, top - 0.12, -0.01], [r * 2.3, r * 1.7, r * 2.45], M("#26201e", 0.5));
          const bone = detailMaterial("bone", tint("#e8dcc0"), { size: TX });
          for (const s of [-1, 1]) {
            P(g, "rod", [s * (r + 0.03), top - 0.08, 0.01], [0.085, 0.12, 0.085], bone, [0, 0, s * 75]);
            P(g, "rod", [s * (r + 0.1), top - 0.03, 0.02], [0.07, 0.12, 0.07], bone, [-10, 0, s * 35]);
            P(g, "cone", [s * (r + 0.13), top + 0.07, 0.04], [0.065, 0.16, 0.065], bone, [-20, 0, s * 5]);
          }
          P(g, "box", [0, top - 0.15, H.face + 0.01], [0.16, 0.025, 0.02], C.glowC);
        } else if (gearHead === "halo") {
          const hp = pivot(g, [0, top + 0.13, -0.06]); hp.rotation.x = 70 * D2R;
          P(hp, "ring", [0, 0, 0], [0.34, 0.34, 0.5], C.glowC);
          if (K.staff === "sun") for (let i = 0; i < 8; i++) {
            const a = i * 45 * D2R;
            P(hp, "cone", [Math.cos(a) * 0.23, Math.sin(a) * 0.23, 0], [0.035, 0.08, 0.035], C.gold, [0, 0, i * 45 - 90]);
          }
          liveMesh(g, live, "sphere", [0, top + 0.13, -0.06], [0.42, 0.12, 0.42], C.glowH, pulse);
        } else if (gearHead === "circlet") {
          const cy = H.eye + 0.07;
          P(g, "ring", [0, cy, 0.0], [r * 1.85, r * 1.95, 0.2], C.gold, [80, 0, 0]);
          P(g, "octa", [0, cy - 0.005, r * 0.95 + 0.02], [0.05, 0.075, 0.03], C.glowC);
        } else if (gearHead === "bandana") {
          const cloth = Mc(K.band || L.accent);
          const by = H.eye + 0.08;
          P(g, "ring", [0, by, 0], [r * 2.25, r * 2.4, 0.35], cloth, [80, 0, 0]);
          // Long tails that flutter in the wind.
          const tails = liveGroup(g, live, [0, by, -r - 0.03], (o, t) => { o.rotation.x = 0.5 + Math.sin(t * 3.1 + o.id) * 0.18; o.rotation.z = Math.sin(t * 2.3) * 0.15; }, 1.6);
          P(tails, "box", [0.03, -0.12, -0.02], [0.05, 0.26, 0.012], cloth, [0, 0, 10]);
          P(tails, "box", [-0.03, -0.15, -0.01], [0.05, 0.32, 0.012], cloth, [0, 0, -8]);
          if (L.glow) P(g, "sphere", [0, by, r * 1.1], [0.04, 0.04, 0.02], C.glowC);
        } else if (gearHead === "crown") {
          const band = M(K.crownBand || mix(L.accent, "#e8c070", 0.4), 0.6);
          const cy = H.crown, cr = r * 1.05;
          P(g, "ring", [0, cy, 0], [cr * 2, cr * 2.1, 0.6], band, [90, 0, 0]);
          const n = 7, style = K.crown || "spike";
          for (let i = 0; i < n; i++) {
            const a = (i / n) * Math.PI * 2 + Math.PI / 2, x = Math.cos(a) * cr, z = Math.sin(a) * cr * 1.05;
            const h = style === "jagged" ? (i % 2 ? 0.12 : 0.24) : style === "coral" ? 0.12 + (i % 3) * 0.05 : (i === 0 ? 0.16 : 0.11);
            const tilt = style === "coral" ? (i % 2 ? 18 : -14) : 0;
            P(g, "cone", [x, cy + h / 2, z], [0.05, h, 0.05], style === "jagged" ? M("#1a1020", 0.4) : band, [0, 0, tilt]);
            if (style !== "spike" || i === 0) P(g, "sphere", [x, cy + h + 0.005, z], [0.035, 0.035, 0.035], C.glowC);
          }
          if (K.flame) for (let i = 0; i < 3; i++) liveMesh(g, live, "cone", [(i - 1) * 0.07, cy + 0.13, cr * 0.95], [0.05, 0.13, 0.05], C.glowC, flicker);
        } else if (gearHead === "mask") {
          const wrap = Mc(mix(L.armor, "#000000", 0.25));
          P(g, "dome", [0, H.eye - 0.07, H.face - 0.06], [0.22, 0.1, 0.17], wrap, [90, 0, 0]);
          P(g, "box", [0, H.eye - 0.035, H.face + 0.0], [0.2, 0.01, 0.03], C.acc);
        } else if (gearHead === "veil") {
          P(g, "cone", [0, top + 0.02, -0.01], [0.3, 0.24, 0.3], M("#1a1028"));
          P(g, "disc", [0, top - 0.09, -0.01], [0.42, 0.012, 0.42], M("#1a1028"));
          P(g, "cone", [0, top - 0.2, -0.04], [0.5, 0.42, 0.5], Gl("#1a1028", 0.55));
          P(g, "ring", [0, top - 0.09, 0], [0.21, 0.21, 0.3], C.accG, [90, 0, 0]);
        }
        // ---- hair pieces (hooded heads without the hood, or any head) ----
        const hair = C.hair;
        if (K.hair === "ponytail") {
          P(g, "sphere", [0, top - 0.05, -r * 0.95], [0.07, 0.07, 0.07], C.acc);
          const pt = liveGroup(g, live, [0, top - 0.05, -r - 0.02], (o, t) => { o.rotation.x = Math.sin(t * 2.2 + 1) * 0.08; o.rotation.z = Math.sin(t * 1.6) * 0.06; }, 1.3);
          P(pt, "capsule", [0, -0.1, -0.06], [0.11, 0.1, 0.09], hair, [-30, 0, 0]);
          P(pt, "capsule", [0, -0.24, -0.1], [0.08, 0.1, 0.07], hair, [-12, 0, 0]);
          P(pt, "cone", [0, -0.37, -0.11], [0.07, 0.12, 0.06], hair, [180, 0, 0]);
        } else if (K.hair === "braid") {
          for (let i = 0; i < 6; i++) P(g, "sphere", [0, top - 0.12 - i * 0.075, -r - 0.03 - i * 0.008], [0.085 - i * 0.006, 0.09, 0.08 - i * 0.005], hair);
          P(g, "ring", [0, top - 0.6, -r - 0.07], [0.05, 0.05, 0.4], C.acc, [90, 0, 0]);
          P(g, "cone", [0, top - 0.66, -r - 0.07], [0.06, 0.1, 0.05], hair, [180, 0, 0]);
        } else if (K.hair === "bun") {
          P(g, "sphere", [0, top - 0.02, -r * 0.8], [0.13, 0.12, 0.12], hair);
          P(g, "rod", [0.04, top + 0.02, -r * 0.8], [0.015, 0.2, 0.015], C.gold, [0, 0, 60]);
        } else if (K.hair === "flame") {
          for (let i = 0; i < 5; i++) {
            const a = (i - 2) * 0.5;
            liveMesh(g, live, "cone", [Math.sin(a) * 0.08, top + 0.04 - Math.abs(i - 2) * 0.03, -0.04 - Math.cos(a) * 0.03], [0.09, 0.26 - Math.abs(i - 2) * 0.05, 0.09], i % 2 ? C.glowC : Gl(L.hair), flicker, [-20, 0, (i - 2) * -14]);
          }
        } else if (K.hair === "long") {
          P(g, "box", [0, top - 0.33, -r * 0.6], [r * 1.9, 0.36, 0.08], hair, [8, 0, 0]);
          P(g, "cone", [0, top - 0.55, -r * 0.62], [r * 1.9, 0.12, 0.08], hair, [180, 0, 0]);
        }
        if (K.beardBraid) {
          P(g, "ring", [0, -0.06, 0.13], [0.05, 0.05, 0.4], C.gold, [90, 0, 0]);
          for (let i = 0; i < 3; i++) P(g, "sphere", [0, -0.1 - i * 0.05, 0.13 + i * 0.01], [0.055 - i * 0.008, 0.06, 0.05], hair);
          P(g, "sphere", [0, -0.25, 0.155], [0.04, 0.04, 0.04], C.gold);
        }
        if (K.hat === "straw") {
          const straw = M("#d8bb6a"), band = M(L.accent);
          P(g, "disc", [0, top - 0.04, 0], [0.62, 0.02, 0.62], straw, [-6, 0, 0]);
          P(g, "cone", [0, top + 0.06, -0.01], [0.32, 0.2, 0.32], straw);
          P(g, "rod", [0, top - 0.02, -0.01], [0.27, 0.04, 0.27], band);
        }
        if (hooded && (L.glow || hollow) && gearHead !== "halo") eyes(g);

      });
      // ---- helm gear ----
      if (gh) attach("gH", head, (g, live) => {
        const metal = M(gmetal(gh.r, 0.4), gh.r === 1 ? 0 : 0.6), trim = gtrim(gh.r), gem = Gl(SET_GLOW[gh.s] || L.accent);
        const leather = M("#5a4232");
        if (headClass === "open" || headClass === "adorn") {
          // Never cover the face or the hero's own headgear: a brow band that gains temple
          // guards (Superior), small wings (Heroic) and a gem crest at the back (Mythic).
          const by = hooded ? H.eye + 0.11 : H.eye + 0.065;
          const br = r * (hooded ? 1.02 : 1.0);
          if (K.hat) P(g, "rod", [0, top - 0.005, -0.01], [0.28, 0.025, 0.28], trim);
          else P(g, "ring", [0, by, -0.005], [br * 1.98, br * 2.08, gh.r === 1 ? 0.22 : 0.16], gh.r === 1 ? leather : trim, [80, 0, 0]);
          const fy = K.hat ? top : by, fz = K.hat ? 0.14 : (hooded ? H.face : br * 0.98 + 0.012);
          if (gh.r >= 2) P(g, "octa", [0, fy, fz], [0.035 + gh.r * 0.005, 0.045 + gh.r * 0.007, 0.022], gh.r >= 3 ? gem : metal);
          if (gh.r >= 3 && !K.hat && !hooded) for (const s of [-1, 1]) P(g, "box", [s * (br + 0.005), by - 0.035, -0.01], [0.022, 0.07, 0.09], metal);
          if (gh.r >= 4) for (const s of [-1, 1]) P(g, "cone", [s * (br + 0.02), by + 0.025, -0.03], [0.045, 0.11 + (gh.r - 4) * 0.06, 0.016], trim, [-40, 90, s * -40]);
          if (gh.r >= 5 && !K.hat) P(g, "octa", [0, by + 0.03, -br - 0.01], [0.05, 0.08, 0.03], gem);
          if (K.hat && gh.r >= 3) P(g, "cone", [0.1, top + 0.08, -0.08], [0.035, 0.22 + gh.r * 0.02, 0.018], gem, [-30, 0, -30]);
        } else {
          // Upgrade the hero's own helm: trim band, brow plate, set gem, a low crest fin.
          P(g, "rod", [0, top - 0.115, -0.01], [r * 2.4, 0.03, r * 2.5], trim);
          if (gh.r >= 2) P(g, "box", [0, top - 0.085, H.face - 0.01], [0.12 + gh.r * 0.01, 0.03, 0.025], metal);
          if (gh.r >= 3) P(g, "octa", [0, top - 0.06, H.face + 0.0], [0.04, 0.055, 0.028], gem);
          if (gh.r >= 4) P(g, "box", [0, top + 0.02, -0.02], [0.025, 0.06 + (gh.r - 4) * 0.04, r * 2.0], trim);
        }
      }, `${headClass}${gearSig(gh)}`);
    }

    // ---- body: robes, coats, tabards, aprons (hip-mounted, model-aligned) ----
    const hipY = bones.Hips ? boneY(bones.Hips, model) : 0.9;
    if (bones.Hips && (K.robe || K.coat || K.tabard || K.apron || K.belt || K.scabbard || K.coil)) {
      attach("Hp", socketM(bones.Hips, model, [0, 0, 0]), (g) => {
        const robeC = Mc(K.robeColor || L.cloth || L.armor), trimC = M(L.accent, 0.3);
        if (K.robe) {
          // A flared skirt from the waist; "long" reaches the ankles (the legs are removed).
          const top = 0.12, len = K.robe === "long" ? hipY + top - 0.07 : 0.45;
          const w = K.robeW || 1;
          P(g, "taper", [0, top - len / 2, 0.0], [0.5 * w, len, 0.42 * w], robeC, [180, 0, 0]);
          // Layered cloth: a shorter, slightly wider overskirt with its own hem.
          if (K.robe === "long") {
            const ol = len * 0.42, over = Mc(mix(K.robeColor || L.cloth || L.armor, "#000000", 0.18));
            P(g, "taper", [0, top - ol / 2 + 0.01, 0.0], [0.53 * w, ol, 0.45 * w], over, [180, 0, 0]);
            P(g, "taper", [0, top - ol + 0.02, 0.0], [0.555 * w, 0.03, 0.47 * w], trimC, [180, 0, 0]);
          }
          P(g, "taper", [0, top - len + 0.03, 0.0], [0.53 * w, 0.06, 0.45 * w], trimC, [180, 0, 0]);
          if (K.robe === "long" && K.stole !== false) P(g, "box", [0, top - len / 2, 0.205 * w], [0.12, len * 0.96, 0.02], trimC, [-9, 0, 0]);
          if (K.bells) for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2 + 0.3;
            P(g, "bell", [Math.sin(a) * 0.235 * w, top - len + 0.05, Math.cos(a) * 0.195 * w], [0.05, 0.06, 0.05], C.gold, [180, 0, 0]);
          }
        }
        if (K.coat) {
          // Open coat tails: a back panel and two front flaps to the knee.
          const coatC = Mc(K.coat === true ? L.armor : K.coat), len = 0.5;
          P(g, "box", [0, 0.02 - len / 2, -0.12], [0.36, len, 0.03], coatC, [8, 0, 0]);
          for (const s of [-1, 1]) {
            P(g, "box", [s * 0.15, 0.02 - len / 2, 0.0], [0.03, len, 0.22], coatC, [0, 0, s * 4]);
            P(g, "box", [s * 0.12, 0.02 - len / 2, 0.1], [0.1, len, 0.03], coatC, [-6, s * 20, 0]);
          }
          P(g, "box", [0, 0.02 - len + 0.02, -0.135], [0.37, 0.03, 0.035], trimC, [8, 0, 0]);
        }
        if (K.tabard) {
          const tc = Mc(K.tabard), len = 0.5;
          P(g, "box", [0, 0.25 - len / 2 + 0.05, 0.16], [0.22, len + 0.25, 0.02], tc, [-6, 0, 0]);
          P(g, "box", [0, 0.25 - len / 2 + 0.05, -0.14], [0.22, len + 0.25, 0.02], tc, [6, 0, 0]);
          P(g, "box", [0, 0.25 - len - 0.05, 0.19], [0.24, 0.03, 0.025], trimC, [-6, 0, 0]);
          P(g, "box", [0, 0.25 - len - 0.05, -0.17], [0.24, 0.03, 0.025], trimC, [6, 0, 0]);
          if (K.emblem) P(g, "octa", [0, 0.2, 0.18], [0.08, 0.11, 0.02], M(K.emblem, 0.3));
        }
        if (K.apron) {
          const ac = M("#4a3426");
          P(g, "box", [0, 0.05, 0.17], [0.3, 0.75, 0.025], ac, [-4, 0, 0]);
          P(g, "box", [0, -0.31, 0.19], [0.31, 0.03, 0.03], C.acc, [-4, 0, 0]);
          P(g, "box", [0.08, -0.05, 0.19], [0.1, 0.1, 0.02], M("#3a281c"), [-4, 0, 0]);
          P(g, "rod", [0.08, -0.01, 0.205], [0.012, 0.12, 0.012], C.iron, [0, 0, 20]);
        }
        if (K.belt) {
          const bc = M(K.belt === true ? "#3a2a20" : K.belt);
          P(g, "rod", [0, 0.1, 0.0], [0.38, 0.05, 0.32], bc);
          P(g, "box", [0, 0.1, 0.16], [0.07, 0.06, 0.02], C.gold);
          P(g, "box", [-0.16, 0.04, 0.05], [0.06, 0.1, 0.08], bc);
        }
        if (K.scabbard) {
          P(g, "box", [-0.19, -0.05, -0.02], [0.03, 0.7, 0.05], M("#1c1c22"), [62, 0, -8]);
          P(g, "box", [-0.19, -0.05, -0.02], [0.035, 0.05, 0.06], C.gold, [62, 0, -8]);
        }
        if (K.coil) for (let i = 0; i < 3; i++) P(g, "ring", [0.2, 0.0 - i * 0.012, 0.03], [0.14, 0.14, 0.3], i === 1 ? C.accG : C.leather, [10, 90, 0]);
      });
    }

    // ---- shoulders: pauldrons (hero kit and/or chest gear), mantles, glowing aura orbs ----
    const gc = gear && gear.chest;
    const pStyle = K.pauldrons || (gc ? (gc.r === 1 ? "leather" : "plate") : null);
    if (pStyle) for (const [side, bn] of [[1, "UpperArmL"], [-1, "UpperArmR"]]) {
      if (!bones[bn]) continue;
      attach("P" + side, socketM(bones[bn], model, [side * 0.02, 0.01, 0]), (g, live) => {
        const size = (K.pauldronSize || 1) * (gc ? 0.72 + gc.r * 0.05 : 1);
        const base0 = gc ? M(gmetal(gc.r, 0.75), gc.r === 1 ? 0 : 0.55) : M(K.pauldronColor || mix(L.armor, "#c8ccd4", 0.25), 0.4);
        const trim = gc ? gtrim(gc.r) : C.acc;
        const tiltZ = side * -50;
        const pg = pivot(g, [0, 0, 0]); pg.scale.setScalar(size);
        if (pStyle === "leather") {
          P(pg, "sphere", [side * 0.02, 0.0, 0], [0.2, 0.12, 0.2], M("#5a4232"), [0, 0, tiltZ]);
        } else if (pStyle === "shell") {
          P(pg, "dome", [side * 0.02, -0.01, 0], [0.24, 0.16, 0.22], base0, [0, 0, tiltZ]);
          for (let i = -1; i <= 1; i++) P(pg, "box", [side * 0.06, 0.03, i * 0.05], [0.02, 0.1, 0.02], trim, [i * 20, 0, tiltZ]);
        } else if (pStyle === "ice") {
          P(pg, "dome", [side * 0.01, -0.01, 0], [0.2, 0.12, 0.2], base0, [0, 0, tiltZ]);
          for (let i = -1; i <= 1; i++) P(pg, "octa", [side * (0.06 + Math.abs(i) * 0.01), 0.07 - Math.abs(i) * 0.02, i * 0.05], [0.04, 0.16 - Math.abs(i) * 0.04, 0.04], C.accG, [i * 15, 0, side * -25]);
        } else if (pStyle === "spike") {
          P(pg, "dome", [side * 0.02, -0.01, 0], [0.24, 0.17, 0.24], base0, [0, 0, tiltZ]);
          for (let i = -1; i <= 1; i++) P(pg, "cone", [side * 0.08, 0.06, i * 0.06], [0.04, 0.14, 0.04], trim, [i * 15, 0, side * -45]);
        } else { // plate
          P(pg, "dome", [side * 0.02, -0.01, 0], [0.26, 0.17, 0.25], base0, [0, 0, tiltZ]);
          P(pg, "ring", [side * 0.0, -0.035, 0], [0.13, 0.13, 0.4], trim, [90, 0, tiltZ]);
          // Lames: two narrower plates stepping down the upper arm, with rivets on the cap.
          for (let i = 1; i <= 2; i++) P(pg, "dome", [side * (0.03 + i * 0.012), -0.035 - i * 0.03, 0], [0.24 - i * 0.025, 0.1, 0.23 - i * 0.025], base0, [0, 0, tiltZ - side * 8 * i]);
          for (let i = -1; i <= 1; i++) P(pg, "sphere", [side * 0.075, 0.035, i * 0.06], [0.018, 0.018, 0.018], trim);
          if (gc && gc.r >= 3) P(pg, "dome", [side * 0.05, -0.07, 0], [0.22, 0.12, 0.22], base0, [0, 0, side * -65]);
          if (gc && gc.r >= 4) P(pg, "ring", [side * 0.035, -0.075, 0], [0.12, 0.12, 0.35], trim, [90, 0, side * -65]);
        }
        if (gc && gc.r >= 3 && pStyle !== "leather") P(pg, "octa", [side * 0.1, 0.02, 0.0], [0.035, 0.045, 0.035], Gl(SET_GLOW[gc.s] || L.accent));
        if (K.aura) {
          P(g, "sphere", [side * 0.05, 0.06, 0], [0.11, 0.11, 0.11], C.glowC);
          liveMesh(g, live, "sphere", [side * 0.05, 0.06, 0], 0.2, C.glowH, pulse);
        }
      }, gc ? `${gc.r}${gc.s ? gc.s[0] : ""}` : "");
    } else if (K.aura) for (const [side, bn] of [[1, "UpperArmL"], [-1, "UpperArmR"]]) {
      if (!bones[bn]) continue;
      attach("A" + side, socketM(bones[bn], model, [side * 0.03, 0.04, 0]), (g, live) => {
        P(g, "sphere", [0, 0, 0], [0.15, 0.15, 0.15], C.glowC);
        liveMesh(g, live, "sphere", [0, 0, 0], 0.3, C.glowH, pulse);
      });
    }
    // Chest gear: a breastplate/gorget over the torso (Fine+).
    if (gc && gc.r >= 2 && bones.Chest) attach("gC", socketM(bones.Chest, model, [0, 0, 0]), (g, live) => {
      const metal = M(gmetal(gc.r), 0.55), trim = gtrim(gc.r), gem = Gl(SET_GLOW[gc.s] || L.accent);
      const fz = base === "hooded" ? 0.035 : 0.045, w = 0.3 + gc.r * 0.012;
      // Gorget ring, then a curved breastplate (a flattened dome hugging the chest) with a
      // centre ridge; Superior adds a set gem, Heroic side plates, Mythic a glow.
      P(g, "rod", [0, 0.13, 0.0], [0.24, 0.05, 0.2], metal);
      P(g, "rod", [0, 0.13, 0.0], [0.25, 0.012, 0.21], trim);
      const ps = 0.92 + gc.r * 0.03;
      P(g, "breast", [0, 0.0, fz + 0.075], [ps, ps, 1], metal, [-6, 0, 0]);
      P(g, "box", [0, 0.0, fz + 0.1], [0.022, 0.24, 0.02], trim, [-6, 0, 0]);
      if (gc.r >= 3) P(g, "octa", [0, 0.03, fz + 0.115], [0.045 + gc.r * 0.004, 0.06 + gc.r * 0.005, 0.025], gem);
      if (gc.r >= 4) P(g, "box", [0, -0.13, fz + 0.085], [0.24, 0.025, 0.03], trim, [-6, 0, 0]);
      if (gc.r >= 5) for (const s of [-1, 1]) P(g, "box", [s * 0.1, 0.08, fz + 0.1], [0.07, 0.02, 0.02], trim, [-6, 0, s * -25]);
    }, gearSig(gc));

    if (bones.Chest && (K.mantle || K.collar || K.scarf)) attach("Mn", socketM(bones.Chest, model, [0, 0, 0]), (g, live) => {
      if (K.mantle === "fur" || K.mantle === "moss") {
        const fur = M(K.mantle === "fur" ? (K.furColor || "#e8e4dc") : L.accent), furD = M(mul(K.mantle === "fur" ? (K.furColor || "#e8e4dc") : L.accent, 0.75));
        for (let i = 0; i < 9; i++) {
          const a = (i / 8) * Math.PI * 1.25 - Math.PI * 0.625;
          P(g, "sphere", [Math.sin(a) * 0.2, 0.14 - Math.abs(Math.sin(a)) * 0.03, -Math.cos(a) * 0.1 - 0.02], [0.16, 0.12, 0.14], i % 2 ? fur : furD);
        }
        P(g, "sphere", [0, 0.06, -0.15], [0.36, 0.2, 0.14], furD);
        if (K.mantle === "moss") for (let i = 0; i < 5; i++) P(g, "cone", [-0.16 + i * 0.08, 0.2, -0.12], [0.02, 0.16, 0.02], M("#8a9a50"), [-20 + i * 5, 0, (i - 2) * 12]);
      } else if (K.mantle === "ember") {
        for (let i = 0; i < 5; i++) for (const s of [-1, 1]) {
          liveMesh(g, live, "cone", [s * (0.12 + i * 0.03), 0.17 - i * 0.015, -0.06 - i * 0.02], [0.06, 0.2 - i * 0.02, 0.06], i % 2 ? C.glowC : C.accG, flicker, [-25, 0, s * (-20 - i * 8)]);
        }
      }
      if (K.collar === "spike") {
        for (let i = 0; i < 7; i++) {
          const a = (i - 3) * 0.32;
          P(g, "cone", [Math.sin(a) * 0.17, 0.27 + Math.cos(a * 1.4) * 0.05, -0.1 - Math.cos(a) * 0.03], [0.05, 0.26 - Math.abs(i - 3) * 0.03, 0.03], i % 2 ? M("#1a1020", 0.4) : C.acc, [-15, 0, -a * 40]);
        }
      }
      if (K.scarf) {
        const sc = Mc(K.scarf);
        P(g, "rod", [0, 0.16, 0.0], [0.22, 0.07, 0.2], sc);
        const tails = liveGroup(g, live, [0.06, 0.15, -0.1], (o, t) => { o.rotation.x = 0.6 + Math.sin(t * 3.4 + o.id) * 0.2; o.rotation.y = Math.sin(t * 1.9) * 0.25; }, 1.6);
        P(tails, "box", [0.0, -0.18, 0], [0.07, 0.36, 0.012], sc, [0, 0, 6]);
        P(tails, "box", [-0.06, -0.14, 0], [0.06, 0.28, 0.012], sc, [0, 0, -8]);
      }
    });

    // ---- back: capes (sway in two hinged panels), quiver, shovel, wings, sunburst ----
    if (bones.Chest && (K.cape || L.prop === "bow" || K.back)) {
      const back = socketM(bones.Chest, model, [0, 0, 0]);
      attach("B", back, (g, live) => {
        const z = base === "hooded" ? -0.15 : -0.14;
        if (K.cape) {
          const cloth = Mc(K.capeColor || mul(L.armor, 0.55)), trim = Mc(L.accent);
          const capeLen = K.capeLen || 1;
          for (const sx of [-1, 1]) P(g, "sphere", [sx * 0.12, 0.14, z + 0.04], [0.05, 0.05, 0.03], C.gold);
          // Upper panel hangs from the shoulders; the lower panel hinges at the waist and swings
          // more, so the cloak moves like cloth instead of a board.
          const upper = liveGroup(g, live, [0, 0.14, z], (o, t) => {
            o.rotation.x = 0.1 + Math.sin(t * 1.3 + o.id) * 0.035;
            const lo = o.children[o.children.length - 1], sp = o.userData.sp;
            lo.rotation.x = 0.06 + Math.sin(t * 1.9 + 0.8 + o.id) * 0.1 + (sp ? sp.ax * 0.7 : 0);
            lo.rotation.z = Math.sin(t * 1.1 + o.id) * 0.05 + (sp ? sp.az * 0.5 : 0);
          }, 1);
          P(upper, sheet(0.24, 0.42, 0.52, 0.09), [0, 0, -0.01], [1, 1, 1], cloth);
          P(upper, sheet(0.22, 0.39, 0.5, 0.085), [0, -0.01, -0.002], [1, 1, 1], Mc(mix(L.accent, "#000000", 0.35))); // lining
          const lower = pivot(upper, [0, -0.47, -0.01]);
          P(lower, sheet(0.4, 0.56, 0.06 + 0.5 * capeLen, 0.11), [0, 0.06, 0], [1, 1, 1], cloth);
          P(lower, sheet(0.56, 0.57, 0.045, 0.11, 10, 1), [0, -0.5 * capeLen + 0.02, 0.003], [1.01, 1, 1.01], trim);
        }
        if (L.prop === "bow") {
          P(g, "rod", [0.06, -0.05, -0.2], [0.12, 0.46, 0.12], C.leather, [0, 0, -25]);
          for (let i = 0; i < 3; i++) P(g, "cone", [0.15 + i * 0.03, 0.2 + i * 0.01, -0.2 + (i - 1) * 0.03], [0.04, 0.08, 0.015], C.acc, [0, 0, -25]);
        }
        if (K.back === "shovel") {
          P(g, "rod", [0, 0.0, z - 0.04], [0.04, 1.0, 0.04], C.wood, [0, 0, 35]);
          P(g, "box", [0.3, -0.42, z - 0.04], [0.2, 0.26, 0.02], C.iron, [0, 0, 35]);
          P(g, "box", [-0.28, 0.4, z - 0.04], [0.14, 0.04, 0.04], C.wood, [0, 0, 35]);
        } else if (K.back === "wings") {
          // Feathered wings: a row of coverts along the arm, then broad flight feathers fanning
          // from the wing's wrist from outward-level to hanging down, overlapping like a fan.
          const feather = detailMaterial("bone", tint("#fbf6ea")), tip = Mg(mix(L.accent, "#ffffff", 0.3));
          for (const s of [-1, 1]) {
            const w = liveGroup(g, live, [s * 0.07, 0.12, z - 0.03], (o, t) => { o.rotation.y = s * (0.55 + Math.sin(t * 1.4) * 0.1); o.rotation.z = s * Math.sin(t * 1.4) * 0.05; });
            for (let i = 0; i < 4; i++) P(w, "sphere", [s * (0.06 + i * 0.07), 0.2 + i * 0.03, -0.04], [0.13, 0.1, 0.035], feather, [0, 0, s * -20]);
            for (let i = 0; i < 7; i++) {
              const ang = (10 + i * 13) * D2R, len = 0.48 - Math.abs(i - 3) * 0.04;
              const dx = Math.cos(ang) * len / 2, dy = -Math.sin(ang) * len / 2;
              P(w, "sphere", [s * (0.24 + dx), 0.28 + dy, -0.05 - i * 0.004], [0.12, len, 0.025], i < 2 ? tip : feather, [0, 0, s * (90 - (10 + i * 13))]);
            }
          }
        } else if (K.back === "sunburst") {
          const hp = pivot(g, [0, 0.3, z - 0.08]);
          P(hp, "ring", [0, 0, 0], [0.46, 0.46, 0.5], C.gold);
          for (let i = 0; i < 12; i++) { const a = i * 30 * D2R; P(hp, "cone", [Math.cos(a) * 0.3, Math.sin(a) * 0.3, 0], [0.05, i % 2 ? 0.14 : 0.22, 0.02], C.gold, [0, 0, i * 30 - 90]); }
          liveMesh(g, live, "sphere", [0, 0.3, z - 0.1], [0.5, 0.5, 0.1], C.glowH, pulse);
        }
      });
    }
    // Floating mirror shards that circle the hero.
    if (K.shards && bones.Hips) attach("Sh", socketM(bones.Hips, model, [0, 0.35, 0]), (g, live) => {
      const ring = liveGroup(g, live, [0, 0, 0], (o, t) => { o.rotation.y = t * 0.9; o.position.y = Math.sin(t * 1.3) * 0.04; });
      for (let i = 0; i < 5; i++) {
        const a = i * 72 * D2R;
        P(ring, "octa", [Math.cos(a) * 0.45, Math.sin(i * 2.1) * 0.12, Math.sin(a) * 0.45], [0.06, 0.13, 0.02], i % 2 ? C.accG : M("#cfe4ff", 0.6), [0, -i * 72 + 90, 20]);
      }
    });

    // ---- boots gear: shin greaves (or toe caps under a long robe) ----
    const gb = gear && gear.boots;
    if (gb) {
      const longRobe = K.robe === "long";
      for (const [side, ln, fn] of [[1, "LowerLegL", "FootL"], [-1, "LowerLegR", "FootR"]]) {
        const metal = M(gmetal(gb.r), gb.r === 1 ? 0 : 0.55), trim = gtrim(gb.r), gem = Gl(SET_GLOW[gb.s] || L.accent);
        if (!longRobe && bones[ln]) attach("gL" + side, socketM(bones[ln], model, [0, 0, 0]), (g, live) => {
          // Shin plate from below the knee towards the ankle (the shin points down -Y here).
          // Wrap-around greave on the shin (the shin points down -Y here), with a trim cuff.
          if (gb.r === 1) { P(g, "rod", [0, -0.24, 0.0], [0.125, 0.22, 0.125], M("#5a4232")); P(g, "rod", [0, -0.16, 0], [0.13, 0.02, 0.13], M("#3a2a20")); return; }
          P(g, "taper", [0, -0.21, 0.005], [0.13, 0.3, 0.13], metal);
          P(g, "rod", [0, -0.355, 0.005], [0.115, 0.025, 0.115], trim);
          P(g, "box", [0, -0.2, 0.06], [0.03, 0.26, 0.02], trim);
          if (gb.r >= 3) P(g, "sphere", [0, -0.03, 0.035], [0.11, 0.1, 0.09], metal);
          if (gb.r >= 4) P(g, "cone", [side * 0.065, -0.04, 0.0], [0.03, 0.12 + (gb.r - 4) * 0.06, 0.03], trim, [0, 0, side * -70]);
          if (gb.r >= 5) { P(g, "octa", [0, -0.03, 0.085], [0.035, 0.045, 0.02], gem); liveMesh(g, live, "sphere", [0, -0.03, 0.08], 0.1, Gl(SET_GLOW[gb.s] || L.accent, 0.35), pulse); }
        }, gearSig(gb));
        if (bones[fn]) attach("gF" + side, socketM(bones[fn], model, [0, 0, 0]), (g) => {
          if (gb.r === 1) { P(g, "rod", [0, 0.06, -0.01], [0.12, 0.05, 0.14], M("#5a4232")); return; }
          P(g, "dome", [0, 0.02, 0.06], [0.12, 0.08, 0.14], metal);
          P(g, "rod", [0, 0.08, -0.01], [0.13, 0.035, 0.14], trim);
          if (longRobe && gb.r >= 3) P(g, "octa", [0, 0.06, 0.12], [0.03, 0.04, 0.02], gem);
        }, gearSig(gb) + (longRobe ? "r" : ""));
      }
    }
  }

  // ---------- the Titan: dark cracked stone, glowing element seams, stone horns ----------
  // Uniforms are shared per colour+scale, so merged materials (finishOf) keep pulsing whichever
  // unit's fx drives them.
  const crackUniforms = new Map();
  function crackMaterial(m, color, fx, scale = 3.2) {
    const ck = `${color}|${scale}`;
    if (!crackUniforms.has(ck)) crackUniforms.set(ck, { uCrack: { value: new T.Color(color).multiplyScalar(0.75) }, uPulse: { value: 1 }, uScale: { value: scale } });
    const uniforms = crackUniforms.get(ck);
    m.userData.crack = ck;
    m.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, uniforms);
      sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vCrackP;")
        .replace("#include <begin_vertex>", "#include <begin_vertex>\nvCrackP = position;");
      sh.fragmentShader = sh.fragmentShader.replace("#include <common>", `#include <common>
varying vec3 vCrackP; uniform vec3 uCrack; uniform float uPulse; uniform float uScale;
float cHash(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float cNoise(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(cHash(i), cHash(i + vec3(1,0,0)), f.x), mix(cHash(i + vec3(0,1,0)), cHash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(cHash(i + vec3(0,0,1)), cHash(i + vec3(1,0,1)), f.x), mix(cHash(i + vec3(0,1,1)), cHash(i + vec3(1,1,1)), f.x), f.y), f.z); }
float cN2(vec3 p){ return cNoise(p) * 0.75 + cNoise(p * 2.7 + 3.1) * 0.25; }`)
        .replace("#include <emissivemap_fragment>", `#include <emissivemap_fragment>
{ // Seams where the noise crosses 0.5, kept a constant width by dividing by its gradient.
  vec3 cp = vCrackP * uScale; const float e = 0.04;
  float n = cN2(cp), gx = cN2(cp + vec3(e, 0, 0)) - n, gy = cN2(cp + vec3(0, e, 0)) - n, gz = cN2(cp + vec3(0, 0, e)) - n;
  float d = abs(n - 0.5) / max(length(vec3(gx, gy, gz)) / e, 0.05);
  float line = 1.0 - smoothstep(0.012, 0.03, d), heat = (1.0 - smoothstep(0.0, 0.09, d)) * 0.35;
  totalEmissiveRadiance += uCrack * (line + heat) * uPulse; diffuseColor.rgb *= 1.0 - line * 0.9; }`);
    };
    m.customProgramCacheKey = () => "sb-crack";
    fx.push((t) => { uniforms.uPulse.value = 0.75 + Math.sin(t * 1.6) * 0.25; });
    return m;
  }

  const EYE = { x: 0.24, y: 0.27, z: 0.46 }; // Titan eye position in its Head-bone space
  function buildTitanKit(model, el, fx) {
    const ec = ELEMENTS[el] ? ELEMENTS[el].color : "#e8553a";
    model.traverse((o) => {
      if (!o.isMesh) return;
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      for (const m of mats) if (m.name === "Yeti_Main" || m.name === "Yeti_Secondary") crackMaterial(m, ec, fx);
    });
    const bones = {};
    model.traverse((o) => { if (o.isBone) bones[o.name] = o; });
    model.updateMatrixWorld(true);
    const rock = lit("#1e1a17"), rockD = lit("#110f0d"), g = glow(ec), gh = glow(ec, 0.3);
    const key = `titan|${el}`;
    const build = (name, fn) => {
      const k = key + name;
      if (!kitCache.has(k)) { const grp = new T.Group(); fn(grp); kitCache.set(k, { baked: bake(grp), live: [] }); }
      return instantiate(kitCache.get(k).baked);
    };
    if (bones.Head) {
      const s = socket(bones.Head, model, [0, 0, 0], null);
      s.add(build("H", (grp) => {
        for (const sx of [-1, 1]) {
          part("cone", grp, [sx * 0.34, 0.5, -0.02], [0.22, 0.5, 0.22], rock, [0, 0, sx * -42]);
          part("cone", grp, [sx * 0.56, 0.8, 0.08], [0.14, 0.4, 0.14], rockD, [-30, 0, sx * -14]);
          // Heavy brow ridge slanting down towards the nose over an ember eye in a dark socket.
          part("box", grp, [sx * (EYE.x - 0.02), EYE.y + 0.12, EYE.z - 0.02], [0.32, 0.08, 0.16], rockD, [15, 0, sx * -24]);
        }
        // The base mesh's mouth curves up into a grin. Heavy cheek slabs press down over its
        // corners and lower tusks jut up, so the glowing opening reads as a snarl (∩).
        for (const sx of [-1, 1]) {
          part("octa", grp, [sx * 0.22, 0.17, 0.55], [0.2, 0.09, 0.12], rock, [10, 0, sx * 38]);
          part("cone", grp, [sx * 0.13, 0.05, 0.58], [0.06, 0.16, 0.06], lit("#5a4e44"), [-12, 0, sx * -12]);
        }
        part("box", grp, [0, -0.03, 0.53], [0.42, 0.06, 0.12], rockD, [-8, 0, 0]);
        part("octa", grp, [0, 0.62, 0.12], [0.3, 0.6, 0.26], rockD, [-15, 0, 0]);
        part("octa", grp, [0.13, 0.56, -0.06], [0.22, 0.44, 0.2], rock, [-35, 0, -22]);
        part("octa", grp, [-0.13, 0.56, -0.06], [0.22, 0.44, 0.2], rock, [-35, 0, 22]);
        part("octa", grp, [0, 0.44, -0.3], [0.2, 0.4, 0.18], rockD, [-60, 0, 0]);
      }));
    }
    // Shards along the back and on each shoulder.
    if (bones.Torso) socket(bones.Torso, model, [0, 0, 0], null).add(build("T", (grp) => {
      [[0, 0.45, -0.38, 0.5], [0.22, 0.32, -0.35, 0.36], [-0.22, 0.32, -0.35, 0.36], [0, 0.15, -0.44, 0.34]].forEach(([x, y, z, h], i) => {
        part("octa", grp, [x, y, z], [0.16, h, 0.14], i % 2 ? rockD : rock, [-50, 0, x * -60]);
      });
      part("sphere", grp, [0, 0.3, -0.33], [0.1, 0.1, 0.1], g);
    }));
    for (const bn of ["UpperArmL", "UpperArmR"]) if (bones[bn]) socket(bones[bn], model, [0, 0, 0], null).add(build(bn, (grp) => {
      part("octa", grp, [0, 0.12, 0], [0.24, 0.38, 0.22], rock, [0, 0, 20]);
      part("octa", grp, [0.06, 0.02, 0.12], [0.14, 0.26, 0.14], rockD, [30, 0, -10]);
      part("sphere", grp, [0, 0.12, 0], [0.4, 0.4, 0.4], gh);
    }));
  }

  // ---------- primitive fallback heroes ----------
  function buildHero(id, hollow) {
    const L = LOOKS[id] || LOOKS.brannoc;
    const tint = (c) => hollow ? mix(c, "#2e1f33", 0.55) : c;
    const skin = lit(tint(SKIN[L.skin])), hair = lit(tint(L.hair)), armor = lit(tint(L.armor)), armorD = lit(tint(mul(L.armor, 0.7))),
      acc = lit(tint(L.accent)), metal = lit(tint("#b8c0cc"), 0.6), boot = lit("#2a1f1a");
    const eyes = hollow || L.glow ? glow(hollow ? "#ff2a2a" : L.glow) : lit("#1a141f");
    const m = new T.Group();
    part("capsule", m, [-0.15, 0.35, 0], [0.2, 0.16, 0.2], armorD); part("capsule", m, [0.15, 0.35, 0], [0.2, 0.16, 0.2], armorD);
    part("box", m, [-0.15, 0.07, 0.04], [0.2, 0.14, 0.3], boot); part("box", m, [0.15, 0.07, 0.04], [0.2, 0.14, 0.3], boot);
    part("capsule", m, [0, 0.95, 0], [0.62, 0.21, 0.42], armor);
    part("cyl", m, [0, 0.74, 0], [0.58, 0.015, 0.42], acc);
    part("sphere", m, [-0.33, 1.22, 0], [0.26, 0.2, 0.26], acc); part("sphere", m, [0.33, 1.22, 0], [0.26, 0.2, 0.26], acc);
    const head = pivot(m, [0, 1.55, 0]);
    part("sphere", head, [0, 0, 0], [0.5, 0.54, 0.5], skin);
    part("sphere", head, [-0.1, 0.02, 0.22], [0.08, 0.06, 0.04], eyes); part("sphere", head, [0.1, 0.02, 0.22], [0.08, 0.06, 0.04], eyes);
    if (L.gear === "helm") part("sphere", head, [0, 0.1, -0.01], [0.55, 0.46, 0.55], metal);
    else if (L.style !== "bald") part("sphere", head, [0, 0.1, -0.05], [0.54, 0.44, 0.52], hair);
    const armL = pivot(m, [-0.38, 1.18, 0]);
    part("capsule", armL, [0, -0.28, 0], [0.16, 0.14, 0.16], armorD);
    const armR = pivot(m, [0.38, 1.18, 0]);
    part("capsule", armR, [0, -0.28, 0], [0.16, 0.14, 0.16], armorD);
    return { model: m, armL, armR, height: 2.0 };
  }

  function buildTitanPrimitive(el) {
    const ec = ELEMENTS[el].color, stone = lit("#6b635c"), dark = lit("#3d3833"), g = glow(ec);
    const m = new T.Group();
    part("box", m, [-0.5, 0.6, 0], [0.6, 1.2, 0.6], dark); part("box", m, [0.5, 0.6, 0], [0.6, 1.2, 0.6], dark);
    part("box", m, [0, 2.0, 0], [2.0, 1.8, 1.2], stone);
    part("box", m, [0, 3.25, 0.1], [1.0, 0.9, 0.9], stone);
    part("sphere", m, [-0.22, 3.3, 0.55], [0.2, 0.12, 0.06], g); part("sphere", m, [0.22, 3.3, 0.55], [0.2, 0.12, 0.06], g);
    const armL = pivot(m, [-1.25, 2.7, 0]); part("box", armL, [0, -0.8, 0], [0.6, 1.7, 0.6], stone);
    const armR = pivot(m, [1.25, 2.7, 0]); part("box", armR, [0, -0.8, 0], [0.6, 1.7, 0.6], stone);
    return { model: m, armL, armR, height: 4.1 };
  }

  const ALLY_FACING = Math.PI - 0.95;
  // Rows spread with the team size; with 4+ units every other one steps back, so the HUD tags
  // and the figures overlap less.
  function slot(ally, i, n) {
    const spread = n <= 1 ? 0 : Math.min(ally ? 3.7 : 4.0, (ally ? 0.95 : 1.0) * (n - 1));
    const x = n <= 1 ? 0 : -spread / 2 + i * (spread / (n - 1));
    const step = n >= 4 && i % 2 ? 0.5 : 0;
    return ally ? new T.Vector3(x, 0, 2.0 + step) : new T.Vector3(x, 0, -3.2 - step);
  }

  // Gear shown on a battle unit: allies use their equipped items (u.gear, or looked up from
  // u.heroUid); Hollow enemies get plain gear that gets finer with their level.
  function unitGear(u) {
    if (u.gear !== undefined) return u.gear;
    if (u.side === "A") {
      try { return typeof heroGearLook === "function" && u.heroUid && typeof heroByUid === "function" ? heroGearLook(heroByUid(u.heroUid)) : null; } catch (_) { return null; }
    }
    const lv = u.level || 1;
    if (lv < 8) return null;
    const r = Math.min(5, 1 + Math.floor(lv / 12)), g = { helm: { r, s: "" }, chest: { r, s: "" } };
    if (lv >= 20 || u.boss) { g.boots = { r, s: "" }; g.weapon = { r, s: "" }; }
    return g;
  }
  const gearKey = (g) => g ? ["weapon", "helm", "chest", "boots"].map((s) => g[s] ? `${g[s].r}${g[s].s || ""}` : "0").join(".") : "";

  // Top of a built hero's head and headgear (not long weapons), from the kit's source nodes,
  // so HUD tags sit just above each model rather than at one fixed height.
  function measureTop(built) {
    if (!built.mixer) return built.height;
    built.mixer.update(0.01);
    built.model.updateMatrixWorld(true);
    let head = null;
    built.model.traverse((o) => { if (!head && o.isBone && o.name === "Head") head = o; });
    if (!head) return built.height;
    const p = new T.Vector3(); head.getWorldPosition(p);
    let top = p.y + 0.35;
    const box = new T.Box3(), hp = new T.Vector3();
    built.model.traverse((o) => {
      if (!o.isMesh || !o.userData.kit || !o.geometry) return;
      for (let q = o; q; q = q.parent) if (q === head) {
        if (!o.geometry.boundingBox) o.geometry.computeBoundingBox();
        box.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld);
        top = Math.max(top, Math.min(box.max.y, p.y + 0.9));
        break;
      }
    });
    return top;
  }

  function addUnit(u, i, n) {
    const ally = u.side === "A";
    const scale = u.titan ? 1.0 : u.boss ? 1.3 : 1;
    const rigged = u.titan ? buildRigged("titan", "titan", false, u.el) : buildRigged(u.template.id, BASE[u.template.id] || "adventurer", !ally, undefined, unitGear(u));
    const built = rigged || (u.titan ? buildTitanPrimitive(u.el) : buildHero(u.template.id, !ally));
    const root = new T.Group();
    root.add(built.model);
    built.model.scale.multiplyScalar(scale);
    const pos = u.titan ? new T.Vector3(0, 0, -3.8) : slot(ally, i, n);
    root.position.copy(pos);
    root.rotation.y = ally ? ALLY_FACING : 0; // allies face the enemies side-on, so their faces show
    const aura = new T.Mesh(new T.CircleGeometry(0.62 * (u.titan ? 2 : scale), 32), glow(ELEMENTS[u.el].color, 0.35));
    aura.rotation.x = -Math.PI / 2; aura.position.y = 0.02; root.add(aura);
    const ring = new T.Mesh(new T.RingGeometry(0.72 * (u.titan ? 2 : scale), 0.86 * (u.titan ? 2 : scale), 40),
      new T.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.03; root.add(ring);
    scene.add(root);
    const top = u.titan ? built.height : measureTop(built) * scale;
    views.set(u.key, {
      u, root, model: built.model, armL: built.armL, armR: built.armR, mixer: built.mixer, actions: built.actions, anim: built.anim, fx: built.fx || [],
      aura, ring, home: pos.clone(), height: built.height * scale, top, phase: Math.random() * 10, busy: false, dead: false,
      fidgetAt: 6 + Math.random() * 10,
    });
  }

  function removeSide(side) {
    for (const [k, v] of views) if (v.u.side === side) { scene.remove(v.root); views.delete(k); }
  }

  // ---------- per-frame ----------
  // Camera: base framing, plus a focus move toward a caster (A3 / AoE skills), a short punch
  // toward the target on crits, and shake. Hit-stop briefly slows the whole fight on crits.
  let hitStop = 0, punchT = 0, focusK = 0, focusId = 0;
  const focusAt = new T.Vector3(), _cam = new T.Vector3(), _look = new T.Vector3();
  function loop(now) {
    if (!renderer) return;
    const rawDt = Math.min(0.05, (now - last) / 1000); last = now;
    const dt = hitStop > 0 ? rawDt * 0.06 : rawDt;
    hitStop = Math.max(0, hitStop - rawDt);
    const t = now / 1000;
    for (const v of views.values()) {
      if (v.mixer) v.mixer.update(dt * spd());
      if (v.dead) continue;
      for (const f of v.fx) f(t);
      if (!v.mixer) {
        v.model.position.y = Math.sin(t * 2.4 + v.phase) * 0.025;
        if (!v.busy && v.armR) {
          v.armR.rotation.x = (Math.sin(t * 2.4 + v.phase) * 5 - 8) * Math.PI / 180;
          v.armL.rotation.x = (-Math.sin(t * 2.4 + v.phase) * 4 - 4) * Math.PI / 180;
        }
      } else if (v.anim && !v.busy && !v.won) {
        // Idle variety: now and then a short fidget, then back to the hero's own idle.
        v.fidgetAt -= rawDt;
        if (v.fidgetAt <= 0) {
          v.fidgetAt = 8 + Math.random() * 12;
          const F = v.anim.S.fidget.filter(v.anim.has);
          if (F.length && v.anim.cur && v.anim.cur.loop === T.LoopRepeat) {
            const a = v.anim.play(F[Math.floor(Math.random() * F.length)], { fade: 0.35 });
            if (a && a.getClip().duration > 3) setTimeout(() => { if (v.anim.cur === a && !v.busy) v.anim.idle(0.4); }, 2200);
          }
        }
      }
      const s = 1 + Math.sin(t * 3 + v.phase) * 0.05; v.aura.scale.set(s, s, s);
    }
    tweens = tweens.filter((tw) => { tw.k = Math.min(1, tw.k + dt * spd() / tw.dur); tw.fn(tw.k); if (tw.k >= 1) { tw.done(); return false; } return true; });
    parts = parts.filter((p) => p.update(dt * spd()));
    // Camera pose.
    _cam.copy(camBase); _look.copy(camTarget);
    if (focusK > 0) {
      const k = ease(focusK);
      _look.lerp(focusAt, k * 0.22);
    }
    const fov = camFov * (1 - 0.12 * ease(focusK));
    if (Math.abs(camera.fov - fov) > 1e-3) { camera.fov = fov; camera.updateProjectionMatrix(); }
    if (punchT > 0) { punchT = Math.max(0, punchT - rawDt); _cam.lerp(_look, 0.06 * Math.sin((punchT / 0.25) * Math.PI)); }
    if (shakeT > 0) {
      shakeT -= rawDt;
      const a = shakeAmp * Math.max(0, shakeT / 0.22);
      _cam.x += (Math.random() - 0.5) * a; _cam.y += (Math.random() - 0.5) * a;
    }
    camera.position.copy(_cam); camera.lookAt(_look);
    if (qm) qm.tick(now);
    if (pipe) pipe.render(rawDt); else renderer.render(scene, camera);
    for (const cb of frameCbs) cb();
    raf = requestAnimationFrame(loop);
  }
  function tween(dur, fn) { return new Promise((done) => tweens.push({ dur, fn, done, k: 0 })); }
  const ease = (k) => 1 - Math.pow(1 - k, 3);
  const easeIO = (k) => k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
  // Fallback for units without the animation controller.
  function play(v, kind) {
    const a = v.actions && v.actions[kind];
    if (!a) return false;
    for (const other of Object.values(v.actions)) if (other !== a && other.isRunning()) other.fadeOut(0.15);
    a.reset().setEffectiveTimeScale(1).fadeIn(0.12).play();
    return true;
  }

  // ---------- queries for the HTML overlay ----------
  const _v = new T.Vector3();
  function screen(key, where = "head") {
    const v = views.get(key);
    if (!v || !camera || !host) return null;
    const y = where === "feet" ? 0 : where === "center" ? v.height * 0.55 : (v.top || v.height) + 0.12;
    _v.set(v.root.position.x, v.root.position.y + y, v.root.position.z).project(camera);
    return { x: (_v.x + 1) / 2 * host.clientWidth, y: (1 - _v.y) / 2 * host.clientHeight };
  }
  const worldCenter = (key) => { const v = views.get(key); return v ? new T.Vector3(v.root.position.x, v.height * 0.55, v.root.position.z) : null; };

  // ---------- animation & effects ----------
  // A glowing spell circle on the ground under a caster, turning and fading out.
  function spellCircle(v, color) {
    if (!scene) return;
    const g = new T.Group();
    const mat = new T.MeshBasicMaterial({ color: new T.Color(color), transparent: true, opacity: 0.9, depthWrite: false, blending: T.AdditiveBlending, side: T.DoubleSide });
    const r1 = new T.Mesh(new T.RingGeometry(0.75, 0.82, 48), mat), r2 = new T.Mesh(new T.RingGeometry(0.5, 0.54, 6), mat);
    g.add(r1, r2);
    for (let i = 0; i < 6; i++) { const m = new T.Mesh(new T.PlaneGeometry(0.06, 0.28), mat); m.position.set(Math.cos(i * Math.PI / 3) * 0.64, Math.sin(i * Math.PI / 3) * 0.64, 0); m.rotation.z = i * Math.PI / 3; g.add(m); }
    g.rotation.x = -Math.PI / 2; g.position.copy(v.root.position).setY(0.05);
    scene.add(g);
    tween(0.75, (k) => { g.rotation.z = k * 2.2; g.scale.setScalar(0.6 + ease(Math.min(1, k * 2.5)) * 0.6); mat.opacity = 0.9 * (k < 0.6 ? 1 : 1 - (k - 0.6) / 0.4); })
      .then(() => { if (scene) scene.remove(g); g.traverse((o) => o.geometry && o.geometry.dispose()); mat.dispose(); });
  }
  // opts: { ult } for A3 / all-enemy skills (camera moves toward the caster), { support } for
  // skills that only buff or heal.
  async function attack(key, targetKey, melee, opts = {}) {
    const v = views.get(key); if (!v) return;
    v.busy = true;
    const tgt = views.get(targetKey);
    const dir = tgt ? tgt.root.position.clone().sub(v.home).setY(0) : new T.Vector3(0, 0, v.u.side === "A" ? -1 : 1);
    const turnTo = Math.atan2(dir.x, dir.z), turnFrom = v.root.rotation.y;
    const A = v.anim;
    if (opts.ult && !reduce) {
      // A short push toward the caster, easing back on its own.
      const id = ++focusId;
      focusAt.copy(v.root.position).setY(1.2);
      const f0 = focusK;
      tween(0.25, (k) => { if (focusId === id) focusK = f0 + (1 - f0) * k; })
        .then(() => sleepScaled(0.55))
        .then(() => { if (focusId === id) return tween(0.35, (k) => { if (focusId === id) focusK = 1 - k; }); });
    }
    if (A && v.u.titan) {
      // The Titan slams (jump and land) or swings, in place.
      const slam = A.has("Jump") && A.has("Jump_Land") && (opts.ult || Math.random() < 0.4);
      if (slam) {
        A.play("Jump", { fade: 0.12, speed: 1.6, hold: true });
        await sleepScaled(0.3);
        A.play("Jump_Land", { fade: 0.08, speed: 1.4 });
        await sleepScaled(0.12);
        shake(0.35);
        await sleepScaled(0.2);
      } else { A.strike(); await sleepScaled(0.5); }
      return;
    }
    if (A && melee) {
      // Run in (Run clip), stop short of the target and strike.
      const to = v.home.clone().add(dir.clone().multiplyScalar(Math.max(0.35, 1 - 1.15 / Math.max(1.2, dir.length()))));
      A.play("Run", { loop: true, fade: 0.12, speed: 1.4 });
      await tween(0.26, (k) => { v.root.position.lerpVectors(v.home, to, easeIO(k)); v.root.rotation.y = turnFrom + shortAngle(turnFrom, turnTo) * ease(Math.min(1, k * 1.6)); });
      A.strike();
      await sleepScaled(0.35);
      return;
    }
    if (A) {
      v.root.rotation.y = turnFrom + shortAngle(turnFrom, turnTo);
      A.play(opts.support && A.has(A.S.support) ? A.S.support : A.S.cast, { fade: 0.12 });
      spellCircle(v, ELEMENTS[v.u.el] ? ELEMENTS[v.u.el].color : "#ffffff");
      const to = v.home.clone().add(dir.clone().normalize().multiplyScalar(0.2));
      await tween(0.2, (k) => { v.root.position.lerpVectors(v.home, to, ease(k)); });
      await sleepScaled(0.15);
      return;
    }
    const to = melee ? v.home.clone().add(dir.clone().multiplyScalar(0.55)) : v.home.clone().add(dir.clone().normalize().multiplyScalar(0.25));
    await tween(melee ? 0.22 : 0.2, (k) => {
      v.root.position.lerpVectors(v.home, to, ease(k));
      if (v.armR) {
        v.armR.rotation.x = -(melee ? 150 : 160) * k * Math.PI / 180;
        if (!melee) v.armL.rotation.x = -160 * k * Math.PI / 180;
      }
    });
    if (melee && v.armR) await tween(0.1, (k) => { v.armR.rotation.x = (-150 + 190 * k) * Math.PI / 180; });
  }
  const shortAngle = (a, b) => { let d = (b - a) % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return d; };
  const sleepScaled = (s) => tween(s, () => {});

  async function recover(key) {
    const v = views.get(key); if (!v || v.dead) return;
    const from = v.root.position.clone(), rotFrom = v.root.rotation.y;
    const rotHome = v.u.side === "A" ? ALLY_FACING : 0;
    const r0 = v.armR ? v.armR.rotation.x : 0, l0 = v.armL ? v.armL.rotation.x : 0;
    const far = from.distanceTo(v.home) > 0.6;
    if (v.anim && v.u.titan && Math.random() < 0.5) {
      // A roar after the swing.
      const R = ["Yes", "No", "Wave"].filter(v.anim.has);
      if (R.length) v.anim.play(R[Math.floor(Math.random() * R.length)], { fade: 0.2, speed: 1.3 });
    } else if (v.anim && far) v.anim.play(v.anim.has("Run_Back") ? "Run_Back" : "Run", { loop: true, fade: 0.15, speed: 1.5 });
    await tween(0.25, (k) => {
      v.root.position.lerpVectors(from, v.home, easeIO(k));
      v.root.rotation.y = rotFrom + shortAngle(rotFrom, rotHome) * ease(k);
      if (v.armR && !v.mixer) { v.armR.rotation.x = r0 * (1 - k); v.armL.rotation.x = l0 * (1 - k); }
    });
    if (v.anim && far && !v.u.titan) v.anim.idle(0.2);
    v.busy = false;
  }
  // e: the damage event (amount, crit, em) when known.
  function hit(key, e) {
    const v = views.get(key); if (!v || v.dead) return;
    const frac = e && v.u.maxHp ? e.amount / v.u.maxHp : 0;
    const crit = !!(e && e.crit), big = crit || frac > 0.14;
    const A = v.anim;
    if (crit) { hitStop = Math.max(hitStop, reduce ? 0 : 0.09); punchT = 0.25; }
    if (A && !v.busy) {
      if (v.u.titan) A.play(A.has("HitReact") ? "HitReact" : "Idle", { fade: 0.1 });
      // A light glancing blow is sometimes dodged with a roll.
      else if (!big && e && (e.em < 1 || frac < 0.04) && Math.random() < 0.35 && A.has("Roll")) A.play("Roll", { fade: 0.1, speed: 1.5 });
      else A.play(big && A.has("HitRecieve_2") ? "HitRecieve_2" : "HitRecieve", { fade: 0.08 });
    } else if (!A) play(v, "hit");
    if (v.u.titan) return;
    const back = new T.Vector3(0, 0, (v.u.side === "A" ? 1 : -1) * (big ? 0.34 : 0.2));
    const base = v.root.position.clone();
    tween(big ? 0.24 : 0.18, (k) => { v.root.position.copy(base).addScaledVector(back, Math.sin(k * Math.PI)); });
  }
  function die(key) {
    const v = views.get(key); if (!v || v.dead) return;
    v.dead = true;
    const y0 = v.root.position.y;
    const fall = v.anim && v.anim.has("Death") ? (v.anim.play("Death", { fade: 0.12, clamp: true }), Promise.resolve())
      : play(v, "die") ? Promise.resolve() : tween(0.45, (k) => { v.root.rotation.x = -1.4 * ease(k) * (v.u.side === "A" ? -1 : 1); });
    fall.then(() => sleepScaled(1.1))
      .then(() => tween(0.8, (k) => { v.root.position.y = y0 - 0.9 * k; }))
      .then(() => { v.aura.visible = false; v.ring.visible = false; });
    burstAt(worldCenter(key), "#8a8a96", 26, 1.6, 0.6, -0.3);
  }
  // Winners turn to the camera and celebrate (staggered so they don't move in lockstep).
  function victory(side = "A") {
    let i = 0;
    for (const v of views.values()) {
      if (v.u.side !== side || v.dead || !v.anim) continue;
      v.won = true; v.busy = true;
      const r0 = v.root.rotation.y, delay = 0.1 + (i++) * 0.12;
      sleepScaled(delay).then(() => {
        tween(0.35, (k) => { v.root.rotation.y = r0 + shortAngle(r0, -0.25 + v.home.x * 0.08) * ease(k); });
        v.anim.play(v.anim.S.win, { loop: true, fade: 0.25 });
      });
    }
  }
  function setHighlight(key, color) {
    const v = views.get(key); if (!v) return;
    if (color) { v.ring.material.color.set(color); v.ring.material.opacity = 0.85; } else v.ring.material.opacity = 0;
  }

  function burstAt(pos, color, n, speed, size, gravity) {
    if (!pos || !scene) return;
    if (reduce) n = Math.ceil(n / 3);
    const g = new T.BufferGeometry(), arr = new Float32Array(n * 3), vel = [];
    for (let i = 0; i < n; i++) {
      arr[i * 3] = pos.x; arr[i * 3 + 1] = pos.y; arr[i * 3 + 2] = pos.z;
      vel.push(new T.Vector3(Math.random() - 0.5, Math.random() - 0.3, Math.random() - 0.5).normalize().multiplyScalar(speed * (0.4 + Math.random() * 0.6)));
    }
    g.setAttribute("position", new T.BufferAttribute(arr, 3));
    const mat = new T.PointsMaterial({ color: new T.Color(color), size, map: dot(), transparent: true, depthWrite: false, blending: T.AdditiveBlending, sizeAttenuation: true });
    const pts = new T.Points(g, mat); scene.add(pts);
    let life = 0;
    parts.push({ update(dt) {
      life += dt;
      const p = g.attributes.position.array;
      for (let i = 0; i < n; i++) { vel[i].y -= gravity * dt * 6; p[i * 3] += vel[i].x * dt; p[i * 3 + 1] += vel[i].y * dt; p[i * 3 + 2] += vel[i].z * dt; }
      g.attributes.position.needsUpdate = true;
      mat.opacity = Math.max(0, 1 - life / 0.7);
      if (life > 0.7) { if (scene) scene.remove(pts); g.dispose(); mat.dispose(); return false; }
      return true;
    } });
  }
  function burst(key, color, big) {
    const p = worldCenter(key);
    burstAt(p, color, big ? 44 : 22, big ? 5 : 3.2, big ? 0.45 : 0.32, 0.6);
    burstAt(p, "#ffffff", big ? 10 : 5, 1.4, big ? 1.1 : 0.7, 0);
  }
  function heal(key) { const v = views.get(key); if (v) burstAt(v.root.position.clone().setY(0.3), "#7dff8a", 18, 1.0, 0.3, -0.6); }
  function buff(key, good) { const v = views.get(key); if (v) burstAt(v.root.position.clone().setY(0.4), good ? "#ffd86a" : "#c07aff", 10, 0.9, 0.28, -0.5); }
  function cast(key, color) { const v = views.get(key); if (v) burstAt(v.root.position.clone().setY(0.1), color, 26, 1.4, 0.35, -0.7); }

  function projectile(fromKey, toKey, color, dur = 0.3) {
    const a = worldCenter(fromKey), b = worldCenter(toKey);
    if (!a || !b || !scene) return Promise.resolve();
    const orb = new T.Mesh(geos().sphere, glow(mix(color, "#ffffff", 0.4)));
    orb.scale.setScalar(0.3); scene.add(orb);
    let n = 0;
    return tween(dur, (k) => {
      orb.position.lerpVectors(a, b, k); orb.position.y += Math.sin(k * Math.PI) * 0.9;
      if (++n % 2 === 0) burstAt(orb.position.clone(), color, 3, 0.3, 0.35, 0);
    }).then(() => { if (scene) scene.remove(orb); });
  }
  function slash(key, color) {
    const p = worldCenter(key); if (!p || !scene) return;
    const arc = new T.Mesh(new T.RingGeometry(0.55, 0.75, 32, 1, -0.9, 2.2), new T.MeshBasicMaterial({ color: new T.Color(color), transparent: true, side: T.DoubleSide, blending: T.AdditiveBlending, depthWrite: false }));
    arc.position.copy(p); arc.quaternion.copy(camera.quaternion); arc.rotateZ(Math.random() * 0.8 - 0.4);
    scene.add(arc);
    tween(0.22, (k) => { arc.material.opacity = 1 - k; arc.scale.setScalar(0.8 + k * 0.5); }).then(() => { if (scene) scene.remove(arc); arc.geometry.dispose(); arc.material.dispose(); });
  }
  function shake(amp = 0.25) { if (!reduce) { shakeT = 0.22; shakeAmp = amp; } }
  function onFrame(cb) { frameCbs.push(cb); }

  // ---------- card faces: head-and-shoulders snapshots of the 3D heroes ----------
  // Rendered once per hero in a small offscreen renderer, cached in memory and in
  // localStorage (keyed by game version so model or palette changes re-shoot them).
  const FACE_SIZE = 256;
  const faceVer = (window.SB_VERSION && window.SB_VERSION.version) || "dev";
  const FACE_KEY = "sigilbound.faces.v1";
  const faces = new Map();
  try {
    const stored = JSON.parse(localStorage.getItem(FACE_KEY) || "null");
    if (stored && stored.ver === faceVer) for (const [k, v] of Object.entries(stored.faces || {})) faces.set(k, v);
  } catch (_) { /* no storage: shoot again */ }
  let faceQueue = [], faceBusy = false, faceRenderer = null, faceListeners = [], saveTimer = 0;
  const faceKey = (id, el, hollow) => id === "titan" ? `titan|${el}` : `${id}|${hollow ? 1 : 0}`;
  function storeFaces() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      try { localStorage.setItem(FACE_KEY, JSON.stringify({ ver: faceVer, faces: Object.fromEntries(faces) })); } catch (_) {}
    }, 400);
  }
  function shootFace(id, el, hollow) {
    const base = id === "titan" ? "titan" : BASE[id] || "adventurer";
    const built = buildRigged(id, base, hollow, el);
    if (!built) return null;
    if (!faceRenderer) {
      faceRenderer = new T.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
      faceRenderer.setPixelRatio(1);
      faceRenderer.setSize(FACE_SIZE, FACE_SIZE, false);
      faceRenderer.outputEncoding = T.sRGBEncoding;
      faceRenderer.toneMapping = T.ACESFilmicToneMapping;
      faceRenderer.toneMappingExposure = GFX.exposure;
      faceRenderer.setClearColor(0x000000, 0);
    }
    const sc = new T.Scene();
    sc.environment = envMap(faceRenderer);
    sc.add(new T.HemisphereLight(0xfff4e6, 0x3a3040, 1.3));
    const key = new T.DirectionalLight(0xfff1dd, 2.2); key.position.set(-2, 3, 4); sc.add(key);
    const fill = new T.DirectionalLight(0xffffff, 0.6); fill.position.set(3, 1, 3); sc.add(fill);
    const rim = new T.DirectionalLight(el && ELEMENTS[el] ? new T.Color(ELEMENTS[el].color) : 0x99aaff, 1.4); rim.position.set(2, 3, -4); sc.add(rim);
    const root = built.model;
    root.rotation.y = -0.35; // a slight three-quarter turn reads better than dead-on
    sc.add(root);
    if (built.mixer) built.mixer.update(0.6);
    for (const f of built.fx || []) f(0.6);
    root.updateMatrixWorld(true);
    let head = null;
    root.traverse((o) => { if (!head && o.isBone && o.name === "Head") head = o; });
    const c = new T.Vector3();
    if (head) head.getWorldPosition(c); else c.set(0, built.height * 0.8, 0);
    const titan = base === "titan";
    const span = titan ? 2.9 : 0.74;             // height of the view, in scene units
    c.y += titan ? 0.15 : 0.15;                   // room above for hoods, helms and halos
    const cam = new T.PerspectiveCamera(28, 1, 0.05, 50);
    const dist = (span / 2) / Math.tan(14 * D2R);
    cam.position.set(c.x, c.y + span * 0.08, c.z + dist);
    cam.lookAt(c.x, c.y - span * 0.04, c.z);
    faceRenderer.render(sc, cam);
    let url = null;
    try {
      url = faceRenderer.domElement.toDataURL("image/webp", 0.86);
      if (!url.startsWith("data:image/webp")) url = faceRenderer.domElement.toDataURL("image/png");
    } catch (_) { url = null; }
    sc.traverse((o) => { if (o.isMesh) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => !m.userData.shared && m.dispose && m.dispose()); });
    return url;
  }
  function pumpFaces() {
    if (faceBusy) return;
    faceBusy = true;
    whenReady().then(() => {
      const step = () => {
        const job = faceQueue.shift();
        if (!job) {
          faceBusy = false;
          if (faceRenderer) { disposeEnv(faceRenderer); faceRenderer.dispose(); faceRenderer.forceContextLoss(); faceRenderer = null; }
          storeFaces();
          faceListeners.forEach((cb) => { try { cb(); } catch (_) {} });
          return;
        }
        const k = faceKey(job.id, job.el, job.hollow);
        if (!faces.has(k)) {
          try { const url = shootFace(job.id, job.el, job.hollow); faces.set(k, url); } catch (e) { console.warn("Sigilbound: face failed", job.id, e); faces.set(k, null); }
        }
        setTimeout(step, 0); // let the page breathe between shots
      };
      step();
    });
  }
  // Returns a cached card face (data URL), or null and queues one to be shot.
  function face(id, el, hollow = false) {
    if (!supported()) return null;
    const k = faceKey(id, el, hollow);
    if (faces.has(k)) return faces.get(k);
    if (!faceQueue.some((j) => faceKey(j.id, j.el, j.hollow) === k)) faceQueue.push({ id, el, hollow });
    pumpFaces();
    return null;
  }
  const onFaces = (cb) => faceListeners.push(cb);

  // ---------- hero detail showcase: one live, animated hero you can spin ----------
  // The UI re-renders with innerHTML, so the canvas is kept and re-attached to whatever
  // host element the latest render produced. Drag sideways to turn the hero, tap to see
  // an attack.
  const SC = { renderer: null, scene: null, camera: null, built: null, key: "", raf: 0, last: 0, yaw: -0.35, spin: 0, host: null };
  function scLoop(now) {
    SC.raf = 0;
    if (!SC.renderer || !SC.renderer.domElement.isConnected) return; // page changed: pause until re-attached
    const dt = Math.min(0.05, (now - SC.last) / 1000); SC.last = now;
    if (SC.built) {
      if (SC.built.mixer) SC.built.mixer.update(dt);
      for (const f of SC.built.fx || []) f(now / 1000);
      if (!SC.drag) { SC.yaw += SC.spin * dt; SC.spin *= Math.pow(0.04, dt); }
      SC.built.model.rotation.y = SC.yaw;
    }
    SC.renderer.render(SC.scene, SC.camera);
    SC.raf = requestAnimationFrame(scLoop);
  }
  function scResize() {
    if (!SC.renderer || !SC.host) return;
    const w = SC.host.clientWidth || 110, h = SC.host.clientHeight || 165;
    SC.renderer.setSize(w, h, false);
    SC.camera.aspect = w / h; SC.camera.updateProjectionMatrix();
  }
  function scSetup() {
    const r = new T.WebGLRenderer({ antialias: true, alpha: true });
    r.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    r.outputEncoding = T.sRGBEncoding;
    r.toneMapping = T.ACESFilmicToneMapping; r.toneMappingExposure = GFX.exposure;
    r.setClearColor(0x000000, 0);
    r.domElement.className = "show3d";
    SC.renderer = r;
    SC.scene = new T.Scene();
    SC.scene.environment = envMap(r);
    SC.scene.add(new T.HemisphereLight(0xfff4e6, 0x3a3040, 1.3));
    const key = new T.DirectionalLight(0xfff1dd, 2.2); key.position.set(-2, 3, 4); SC.scene.add(key);
    const fill = new T.DirectionalLight(0xffffff, 0.6); fill.position.set(3, 1, 3); SC.scene.add(fill);
    SC.rim = new T.DirectionalLight(0x99aaff, 1.4); SC.rim.position.set(2, 3, -4); SC.scene.add(SC.rim);
    SC.camera = new T.PerspectiveCamera(30, 110 / 165, 0.1, 50);
    const c = r.domElement;
    let x0 = 0, moved = 0, lastX = 0, lastT = 0;
    c.addEventListener("pointerdown", (e) => { SC.drag = true; x0 = lastX = e.clientX; lastT = performance.now(); moved = 0; SC.spin = 0; c.setPointerCapture && c.setPointerCapture(e.pointerId); });
    c.addEventListener("pointermove", (e) => {
      if (!SC.drag) return;
      const dx = e.clientX - lastX, t = performance.now();
      SC.yaw += dx * 0.012; moved += Math.abs(dx);
      SC.spin = dx * 0.012 / Math.max(0.008, (t - lastT) / 1000);
      lastX = e.clientX; lastT = t;
    });
    const up = () => {
      if (!SC.drag) return;
      SC.drag = false;
      if (performance.now() - lastT > 80) SC.spin = 0;
      SC.spin = Math.max(-8, Math.min(8, SC.spin));
      if (moved < 6 && SC.built && SC.built.anim) SC.built.anim.strike(); // a tap: show off an attack
    };
    c.addEventListener("pointerup", up); c.addEventListener("pointercancel", up);
    window.addEventListener("resize", scResize);
  }
  // Show hero `id` live inside `host`. Returns false if 3D isn't available yet.
  function showcase(host, id, el, gear) {
    if (!host || !supported() || !modelsSettled) return false;
    if (!SC.renderer) scSetup();
    const key = `${id}|${el}|${gearKey(gear)}`;
    if (SC.key !== key) {
      if (SC.built) SC.scene.remove(SC.built.model);
      const built = buildRigged(id, BASE[id] || "adventurer", false, el, gear || null);
      if (!built) return false;
      SC.built = built; SC.key = key; SC.yaw = -0.35; SC.spin = 0;
      SC.scene.add(built.model);
      SC.rim.color.set(ELEMENTS[el] ? ELEMENTS[el].color : "#99aaff");
      // Frame the whole figure, props and headgear included: measure the kit in the idle pose
      // (its invisible source nodes still carry their world transforms) and fit the camera.
      if (built.mixer) built.mixer.update(0.5);
      built.model.updateMatrixWorld(true);
      const box = new T.Box3().set(new T.Vector3(-0.45, 0, -0.45), new T.Vector3(0.45, built.height - 0.2, 0.45)), tmp = new T.Box3();
      built.model.traverse((o) => { if (o.isMesh && o.userData.kit && o.geometry) { if (!o.geometry.boundingBox) o.geometry.computeBoundingBox(); box.union(tmp.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld)); } });
      const rad = Math.min(1.3, Math.max(-box.min.x, box.max.x, -box.min.z, box.max.z));
      const lo = Math.min(-0.3, Math.max(-0.5, box.min.y)), hi = Math.max(2.65, Math.min(3.3, box.max.y + 0.05)), tanV = Math.tan(15 * D2R);
      const aspect = (host.clientWidth || 110) / (host.clientHeight || 165);
      const dist = Math.max(5.5, Math.max((hi - lo) / 2 / tanV, rad / (tanV * aspect)) * 1.04 + rad * 0.4);
      SC.camera.position.set(0, (lo + hi) / 2 + 0.18, dist);
      SC.camera.lookAt(0, (lo + hi) / 2, 0);
      const ec = ELEMENTS[el] ? ELEMENTS[el].color : "#ffffff";
      if (!SC.aura) {
        SC.aura = new T.Mesh(new T.CircleGeometry(0.6, 40), glow(ec, 0.3));
        SC.aura.rotation.x = -Math.PI / 2; SC.aura.position.y = 0.01; SC.scene.add(SC.aura);
      } else SC.aura.material = glow(ec, 0.3);
    }
    SC.host = host;
    if (SC.renderer.domElement.parentNode !== host) host.prepend(SC.renderer.domElement);
    host.classList.add("has3d");
    scResize();
    if (!SC.raf) { SC.last = performance.now(); SC.raf = requestAnimationFrame(scLoop); }
    return true;
  }
  // `onlyIn`: a selector; stop only when the viewer lives in such a host (the hero page passes
  // ".show-sprite" so other pages, and tools that host the viewer elsewhere, keep theirs).
  function showcaseStop(onlyIn) {
    if (!SC.renderer) return;
    if (onlyIn && !(SC.host && SC.host.matches && SC.host.matches(onlyIn))) return;
    cancelAnimationFrame(SC.raf); SC.raf = 0;
    window.removeEventListener("resize", scResize);
    SC.renderer.domElement.remove();
    disposeEnv(SC.renderer); SC.renderer.dispose(); SC.renderer.forceContextLoss();
    Object.assign(SC, { renderer: null, scene: null, camera: null, built: null, key: "", host: null, aura: null });
  }

  preload();
  return {
    supported, mount, unmount, addUnit, removeSide, screen, attack, recover, hit, die, victory, setHighlight, setQuality,
    get quality() { return qm ? qm.current : null; }, get qualityAuto() { return qm ? qm.auto : true; },
    burst, heal, buff, cast, projectile, slash, shake, onFrame, whenReady, face, onFaces, showcase, showcaseStop,
    has: (k) => views.has(k), get active() { return !!renderer; }, get modelsReady() { return modelsSettled; },
  };
})();

window.W3D = W3D;
