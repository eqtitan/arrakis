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

const W3D = (() => {
  let renderer = null, scene = null, camera = null, host = null, raf = 0, last = 0;
  let views = new Map(), parts = [], tweens = [], frameCbs = [];
  const camBase = new T.Vector3();
  let shakeT = 0, shakeAmp = 0;
  const matCache = new Map(), geo = {};
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const spd = () => (typeof G !== "undefined" && G.settings && G.settings.speed) || 1;

  function supported() {
    try { const c = document.createElement("canvas"); return !!(c.getContext("webgl2") || c.getContext("webgl")); }
    catch (_) { return false; }
  }

  // ---------- model library ----------
  // Which base model each hero uses (bearded bruisers in plate, hooded casters and rogues,
  // everyone else as the adventurer). Any hero not listed uses the adventurer.
  const BASE = {
    hask: "monarch", ulfgar: "monarch", gorrum: "monarch", thrain: "monarch", corvan: "monarch", odo: "monarch",
    mira: "hooded", wren: "hooded", kettle: "hooded", ysolde: "hooded", nyx: "hooded", tamsin: "hooded",
    velka: "hooded", aurelia: "hooded", sable: "hooded", maelis: "hooded", morwenna: "hooded", seraphine: "hooded",
    brannoc: "adventurer", pell: "adventurer", lumen: "adventurer", kaito: "adventurer", oriel: "adventurer", vaelith: "adventurer",
  };
  const FILES = { hooded: "hooded_adventurer", adventurer: "adventurer", monarch: "monarch", titan: "yeti" };
  // Material name -> colour role, per base model.
  const ROLES = {
    hooded: { DarkBrown: "armor", Black: "cloth", Brown: "cloth", LightBrown: "accent", Gold: "accent", Metal: "trim", Metal_Dark: "blade", Brown2: "wood", White: "hair", Skin: "skin" },
    adventurer: { LightGreen: "armor", Green: "cloth", Brown: "pants", Brown2: "pants", Black: "boot", Grey: "boot", Hair: "hair", Eyebrows: "hair", Gold: "accent", Skin: "skin", Eye: "eye" },
    monarch: { Metal: "armor", Metal_Dark: "trim", Blue: "cloth", DarkBrown: "pants", Beige: "accent", Gold: "crown", Hair_White: "hair", Skin: "skin", Eye: "eye" },
    titan: { Yeti_Main: "stone", Yeti_Secondary: "stoneDark", Eye_White: "glow", Eye_Black: "keep", Yeti_Teeth: "keep", Tongue: "keep" },
  };
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
    geo.rod = new T.CylinderGeometry(0.5, 0.5, 1, 10);
    geo.disc = new T.CylinderGeometry(0.5, 0.5, 1, 24);
    geo.cone = new T.ConeGeometry(0.5, 1, 10);
    geo.taper = new T.CylinderGeometry(0.5, 0.32, 1, 10);
    geo.bell = new T.CylinderGeometry(0.22, 0.5, 1, 16);
    geo.ring = new T.TorusGeometry(0.5, 0.07, 6, 28);
    geo.hook = new T.TorusGeometry(0.5, 0.18, 6, 14, Math.PI * 1.25);
    geo.crook = new T.TorusGeometry(0.5, 0.2, 6, 12, Math.PI);
    geo.octa = new T.OctahedronGeometry(0.5);
    geo.half = new T.CylinderGeometry(0.5, 0.5, 1, 12, 1, false, 0, Math.PI);
    return geo;
  }
  function lit(color, metal = 0) {
    const key = `l${color}${metal}`;
    if (!matCache.has(key)) matCache.set(key, new T.MeshStandardMaterial({ color: new T.Color(color), roughness: metal ? 0.35 : 0.65, metalness: metal }));
    return matCache.get(key);
  }
  function glow(color, opacity = 1) {
    const key = `g${color}${opacity}`;
    if (!matCache.has(key)) matCache.set(key, new T.MeshBasicMaterial({ color: new T.Color(color), transparent: opacity < 1, opacity, depthWrite: opacity >= 1 }));
    return matCache.get(key);
  }
  function part(kind, parent, pos, scale, mat, rot) {
    const m = new T.Mesh(geos()[kind], mat);
    m.position.set(pos[0], pos[1], pos[2]);
    m.scale.set(scale[0], scale[1], scale[2]);
    if (rot) { m.rotation.order = "YXZ"; m.rotation.set(rot[0] * Math.PI / 180, rot[1] * Math.PI / 180, rot[2] * Math.PI / 180); }
    m.castShadow = true;
    parent.add(m);
    return m;
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
    host = el;
    renderer = new T.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.outputEncoding = T.sRGBEncoding;
    renderer.toneMapping = T.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.95;
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = T.PCFSoftShadowMap;
    renderer.domElement.className = "w3d-canvas";
    el.prepend(renderer.domElement);

    scene = new T.Scene();
    const sc = opts.titan ? ["#1a0a0a", "#c0401a", "#24100c", "#100606"] : sceneColors(opts.chapter);
    scene.background = gradientTexture(sc[0], sc[1]);
    scene.fog = new T.Fog(new T.Color(sc[1]), 18, 48);
    scene.add(new T.HemisphereLight(new T.Color(mix(sc[1], "#ffffff", 0.35)), new T.Color(sc[2]), 0.75));
    const sun = new T.DirectionalLight(0xfff1dd, 1.35);
    sun.position.set(-5, 10, 6); sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -7, right: 7, top: 7, bottom: -7, near: 1, far: 30 });
    scene.add(sun);
    const rim = new T.DirectionalLight(0x99aaff, 0.6); rim.position.set(4, 5, -8); scene.add(rim);
    const front = new T.DirectionalLight(0xffffff, 0.35); front.position.set(0, 4, 10); scene.add(front);

    const groundMat = new T.MeshStandardMaterial({ color: new T.Color(mul(sc[2], 1.05)), roughness: 1, map: groundTexture() });
    groundMat.map.repeat.set(24, 24);
    const ground = new T.Mesh(new T.PlaneGeometry(120, 120), groundMat);
    ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
    const ring = new T.Mesh(new T.RingGeometry(3.4, 3.6, 64), glow("#ffffff", 0.08));
    ring.rotation.x = -Math.PI / 2; ring.position.set(0, 0.01, -0.6); ring.scale.set(1.25, 1, 1); scene.add(ring);
    buildScenery(opts.titan ? 2 : (opts.chapter || 0) % 5, sc, opts.chapter || 0);

    camera = new T.PerspectiveCamera(50, 1, 0.1, 150);
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

  function resize() {
    if (!renderer || !host) return;
    const w = host.clientWidth || 1, h = host.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // Frame the battlefield so 4 allies fit across even a narrow portrait screen.
    const halfW = 3.25, halfH = 3.7;
    const tanV = Math.tan(camera.fov * Math.PI / 360);
    const dist = Math.max(halfW / (tanV * camera.aspect), halfH / tanV);
    const target = new T.Vector3(0, 0.9, -0.5), pitch = 36 * Math.PI / 180;
    camBase.set(target.x, target.y + Math.sin(pitch) * dist, target.z + Math.cos(pitch) * dist);
    camera.position.copy(camBase);
    camera.lookAt(target);
    camera.updateProjectionMatrix();
  }

  function unmount() {
    cancelAnimationFrame(raf); raf = 0;
    window.removeEventListener("resize", resize);
    if (renderer) {
      renderer.domElement.remove();
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
      armor: tint(L.armor), cloth: tint(mul(L.armor, 0.62)), pants: tint(mix(L.armor, "#2a2522", 0.6)), accent: tint(L.accent),
      trim: tint(mix(L.accent, "#c8ccd4", 0.4)), blade: tint("#c8d0dc"), wood: tint("#6b4a29"), boot: tint("#2a1f1a"),
      hair: tint(L.hair), skin: tint(skin), crown: tint(L.accent), eye: hollow ? "#ff2a2a" : L.glow || "#1a141f",
      stone: "#7a726a", stoneDark: "#3d3833",
    };
  }

  function buildRigged(id, base, hollow, el) {
    const lib = library[base];
    if (!lib) return null;
    const L = base === "titan" ? null : LOOKS[id] || LOOKS.brannoc;
    const model = cloneSkinned(lib.scene);
    const colors = base === "titan" ? { stone: "#7a726a", stoneDark: "#3d3833" } : roleColors(L, hollow);
    const roles = ROLES[base];
    const showSword = base === "hooded" && L && ["sword", "katana", "daggers", "whip", "hook"].includes(L.prop);
    const showCrown = base === "monarch" && L && L.gear === "crown";
    model.traverse((o) => {
      if (!o.isMesh) return;
      o.castShadow = true; o.frustumCulled = false;
      if (o.name === "Sword" && !showSword) { o.visible = false; return; }
      const recolor = (m) => {
        const role = roles[m.name];
        const c = m.clone();
        if (role === "crown" && !showCrown) { c.visible = false; return c; }
        if (role === "glow" && el) { c.color.set(ELEMENTS[el].color); c.emissive = new T.Color(ELEMENTS[el].color); c.emissiveIntensity = 1.2; return c; }
        if (role === "eye" && (hollow || (L && L.glow))) { c.color.set(colors.eye); c.emissive = new T.Color(colors.eye); c.emissiveIntensity = 1.5; return c; }
        if (role && role !== "keep" && colors[role]) c.color.set(colors[role]);
        else if (hollow) c.color.lerp(new T.Color("#2e1f33"), 0.5);
        if (role === "armor" && base === "monarch") { c.metalness = 0.2; c.roughness = 0.55; }
        if (role === "blade" || role === "trim") { c.metalness = 0.3; c.roughness = 0.5; }
        return c;
      };
      o.material = Array.isArray(o.material) ? o.material.map(recolor) : recolor(o.material);
    });
    const root = new T.Group();
    root.add(model);
    // Normalize height (base models are ~1.8 m; heroes stand about 2 units tall like the fallback figures).
    const targetHead = base === "titan" ? 3.3 : 1.85;
    model.scale.setScalar(targetHead / lib.headY);
    const mixer = new T.AnimationMixer(model);
    const clip = (kind) => { for (const n of ANIMS[kind]) if (lib.clips[n]) return lib.clips[n]; return null; };
    const actions = {};
    for (const k of Object.keys(ANIMS)) { const c = clip(k); if (c) actions[k] = mixer.clipAction(c); }
    if (actions.idle) actions.idle.play();
    for (const k of ["melee", "cast", "hit", "die"]) if (actions[k]) { actions[k].setLoop(T.LoopOnce, 1); actions[k].clampWhenFinished = k === "die"; }
    mixer.addEventListener("finished", (e) => {
      if (e.action === actions.die) return;
      if (actions.idle) { actions.idle.reset().fadeIn(0.15).play(); e.action.fadeOut(0.15); }
    });
    // Props the base model doesn't have: glowing focus for casters, a shield for tanks.
    if (L) {
      let wristR = null, wristL = null;
      model.traverse((o) => { if (o.isBone && o.name === "WristR") wristR = o; if (o.isBone && o.name === "WristL") wristL = o; });
      const inv = (bone) => { const s = new T.Vector3(); bone.getWorldScale(s); return 1 / (s.x || 1); };
      model.updateMatrixWorld(true);
      if (wristR && ["staff", "orb", "bell", "lantern", "candle", "mirror"].includes(L.prop)) {
        const k = inv(wristR) * model.scale.x;
        const orb = new T.Mesh(geos().sphere, glow(L.accent));
        orb.scale.setScalar(0.16 * k); orb.position.set(0, 0.12 * k, 0.04 * k);
        wristR.add(orb);
        const halo = new T.Mesh(geos().sphere, glow(L.accent, 0.3));
        halo.scale.setScalar(2.0); orb.add(halo);
      }
      if (wristL && L.prop === "shield") {
        const k = inv(wristL) * model.scale.x;
        const sh = new T.Mesh(geos().cyl, lit(mix(L.accent, "#b8c0cc", 0.5), 0.6));
        sh.scale.set(0.3 * k, 0.012 * k, 0.36 * k); sh.position.set(0, 0.04 * k, 0.06 * k); sh.rotation.z = Math.PI / 2;
        wristL.add(sh);
      }
    }
    return { model: root, mixer, actions, height: base === "titan" ? 4.2 : 2.3 };
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
  function slot(ally, i, n) {
    const spread = ally ? 4.0 : 3.6;
    const x = n <= 1 ? 0 : -spread / 2 + i * (spread / (n - 1));
    return ally ? new T.Vector3(x, 0, 1.6) : new T.Vector3(x, 0, -2.6);
  }

  function addUnit(u, i, n) {
    const ally = u.side === "A";
    const scale = u.titan ? 1.0 : u.boss ? 1.3 : 1;
    const rigged = u.titan ? buildRigged("titan", "titan", false, u.el) : buildRigged(u.template.id, BASE[u.template.id] || "adventurer", !ally);
    const built = rigged || (u.titan ? buildTitanPrimitive(u.el) : buildHero(u.template.id, !ally));
    const root = new T.Group();
    root.add(built.model);
    built.model.scale.multiplyScalar(scale);
    const pos = u.titan ? new T.Vector3(0, 0, -3.2) : slot(ally, i, n);
    root.position.copy(pos);
    root.rotation.y = ally ? ALLY_FACING : 0; // allies face the enemies side-on, so their faces show
    const aura = new T.Mesh(new T.CircleGeometry(0.62 * (u.titan ? 2 : scale), 32), glow(ELEMENTS[u.el].color, 0.35));
    aura.rotation.x = -Math.PI / 2; aura.position.y = 0.02; root.add(aura);
    const ring = new T.Mesh(new T.RingGeometry(0.72 * (u.titan ? 2 : scale), 0.86 * (u.titan ? 2 : scale), 40),
      new T.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.03; root.add(ring);
    scene.add(root);
    views.set(u.key, {
      u, root, model: built.model, armL: built.armL, armR: built.armR, mixer: built.mixer, actions: built.actions,
      aura, ring, home: pos.clone(), height: built.height * scale, phase: Math.random() * 10, busy: false, dead: false,
    });
  }

  function removeSide(side) {
    for (const [k, v] of views) if (v.u.side === side) { scene.remove(v.root); views.delete(k); }
  }

  // ---------- per-frame ----------
  function loop(now) {
    if (!renderer) return;
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const t = now / 1000;
    for (const v of views.values()) {
      if (v.mixer) v.mixer.update(dt * spd());
      if (v.dead) continue;
      if (!v.mixer) {
        v.model.position.y = Math.sin(t * 2.4 + v.phase) * 0.025;
        if (!v.busy && v.armR) {
          v.armR.rotation.x = (Math.sin(t * 2.4 + v.phase) * 5 - 8) * Math.PI / 180;
          v.armL.rotation.x = (-Math.sin(t * 2.4 + v.phase) * 4 - 4) * Math.PI / 180;
        }
      }
      const s = 1 + Math.sin(t * 3 + v.phase) * 0.05; v.aura.scale.set(s, s, s);
    }
    tweens = tweens.filter((tw) => { tw.k = Math.min(1, tw.k + dt * spd() / tw.dur); tw.fn(tw.k); if (tw.k >= 1) { tw.done(); return false; } return true; });
    parts = parts.filter((p) => p.update(dt * spd()));
    if (shakeT > 0) {
      shakeT -= dt;
      const a = shakeAmp * Math.max(0, shakeT / 0.22);
      camera.position.set(camBase.x + (Math.random() - 0.5) * a, camBase.y + (Math.random() - 0.5) * a, camBase.z);
    } else camera.position.copy(camBase);
    renderer.render(scene, camera);
    for (const cb of frameCbs) cb();
    raf = requestAnimationFrame(loop);
  }
  function tween(dur, fn) { return new Promise((done) => tweens.push({ dur, fn, done, k: 0 })); }
  const ease = (k) => 1 - Math.pow(1 - k, 3);
  function play(v, kind) {
    const a = v.actions && v.actions[kind];
    if (!a) return false;
    for (const other of Object.values(v.actions)) if (other !== a && other.isRunning()) other.fadeOut(0.12);
    a.reset().setEffectiveTimeScale(1).fadeIn(0.08).play();
    return true;
  }

  // ---------- queries for the HTML overlay ----------
  const _v = new T.Vector3();
  function screen(key, where = "head") {
    const v = views.get(key);
    if (!v || !camera || !host) return null;
    const y = where === "feet" ? 0 : where === "center" ? v.height * 0.55 : v.height + 0.15;
    _v.set(v.root.position.x, v.root.position.y + y, v.root.position.z).project(camera);
    return { x: (_v.x + 1) / 2 * host.clientWidth, y: (1 - _v.y) / 2 * host.clientHeight };
  }
  const worldCenter = (key) => { const v = views.get(key); return v ? new T.Vector3(v.root.position.x, v.height * 0.55, v.root.position.z) : null; };

  // ---------- animation & effects ----------
  async function attack(key, targetKey, melee) {
    const v = views.get(key); if (!v) return;
    v.busy = true;
    const tgt = views.get(targetKey);
    const dir = tgt ? tgt.root.position.clone().sub(v.home).setY(0) : new T.Vector3(0, 0, v.u.side === "A" ? -1 : 1);
    const to = melee ? v.home.clone().add(dir.clone().multiplyScalar(0.55)) : v.home.clone().add(dir.clone().normalize().multiplyScalar(0.25));
    const turnTo = Math.atan2(dir.x, dir.z), turnFrom = v.root.rotation.y;
    const rigged = !!v.mixer;
    if (rigged && melee) {
      // Run in, then swing.
      await tween(0.24, (k) => { v.root.position.lerpVectors(v.home, to, ease(k)); v.root.rotation.y = turnFrom + (shortAngle(turnFrom, turnTo)) * ease(k); });
      play(v, "melee");
      await sleepScaled(0.35);
      return;
    }
    if (rigged) {
      v.root.rotation.y = turnFrom + shortAngle(turnFrom, turnTo);
      play(v, "cast");
      await tween(0.2, (k) => { v.root.position.lerpVectors(v.home, to, ease(k)); });
      await sleepScaled(0.15);
      return;
    }
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
    await tween(0.25, (k) => {
      v.root.position.lerpVectors(from, v.home, ease(k));
      v.root.rotation.y = rotFrom + shortAngle(rotFrom, rotHome) * ease(k);
      if (v.armR && !v.mixer) { v.armR.rotation.x = r0 * (1 - k); v.armL.rotation.x = l0 * (1 - k); }
    });
    v.busy = false;
  }
  function hit(key) {
    const v = views.get(key); if (!v || v.dead) return;
    play(v, "hit");
    const back = new T.Vector3(0, 0, v.u.side === "A" ? 0.22 : -0.22);
    const base = v.root.position.clone();
    tween(0.18, (k) => { v.root.position.copy(base).addScaledVector(back, Math.sin(k * Math.PI)); });
  }
  function die(key) {
    const v = views.get(key); if (!v || v.dead) return;
    v.dead = true;
    const y0 = v.root.position.y;
    const fall = play(v, "die") ? Promise.resolve() : tween(0.45, (k) => { v.root.rotation.x = -1.4 * ease(k) * (v.u.side === "A" ? -1 : 1); });
    fall.then(() => sleepScaled(1.1))
      .then(() => tween(0.8, (k) => { v.root.position.y = y0 - 0.9 * k; }))
      .then(() => { v.aura.visible = false; v.ring.visible = false; });
    burstAt(worldCenter(key), "#8a8a96", 26, 1.6, 0.6, -0.3);
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

  preload();
  return {
    supported, mount, unmount, addUnit, removeSide, screen, attack, recover, hit, die, setHighlight,
    burst, heal, buff, cast, projectile, slash, shake, onFrame, whenReady,
    has: (k) => views.has(k), get active() { return !!renderer; }, get modelsReady() { return modelsSettled; },
  };
})();

window.W3D = W3D;
