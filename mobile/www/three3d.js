// Sigilbound — 3D battlefield (Three.js r149, vendored in vendor/three.min.js).
// Heroes are stylized figures built from primitive shapes, coloured from LOOKS in art.js,
// animated in code. The HTML battle HUD is positioned over them each frame.
// Falls back to the 2D sprites when WebGL isn't available.

const W3D = (() => {
  const T = window.THREE;
  let renderer = null, scene = null, camera = null, host = null, raf = 0, last = 0;
  let views = new Map(), parts = [], tweens = [], frameCbs = [];
  let camBase = new (T ? T.Vector3 : Object)(), shakeT = 0, shakeAmp = 0;
  const matCache = new Map(), geo = {};
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const spd = () => (typeof G !== "undefined" && G.settings && G.settings.speed) || 1;

  function supported() {
    if (!T) return false;
    try { const c = document.createElement("canvas"); return !!(c.getContext("webgl2") || c.getContext("webgl")); }
    catch (_) { return false; }
  }

  // ---------- materials & geometry (Unity-sized primitives so proportions match the Unity build) ----------
  function geos() {
    if (geo.box) return geo;
    geo.box = new T.BoxGeometry(1, 1, 1);
    geo.sphere = new T.SphereGeometry(0.5, 20, 14);
    geo.capsule = new T.CapsuleGeometry(0.5, 1.0, 6, 14);
    geo.cyl = new T.CylinderGeometry(0.5, 0.5, 2, 20);
    geo.plane = new T.PlaneGeometry(1, 1);
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
  function dotTexture() {
    const c = document.createElement("canvas"); c.width = c.height = 64;
    const g = c.getContext("2d"), grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grd.addColorStop(0, "rgba(255,255,255,1)"); grd.addColorStop(0.4, "rgba(255,255,255,.6)"); grd.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
    return new T.CanvasTexture(c);
  }
  let _dot = null;
  const dot = () => _dot || (_dot = dotTexture());

  function mount(el, opts) {
    unmount();
    host = el;
    renderer = new T.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.outputEncoding = T.sRGBEncoding;
    renderer.toneMapping = T.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.92;
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = T.PCFSoftShadowMap;
    renderer.domElement.className = "w3d-canvas";
    el.prepend(renderer.domElement);

    scene = new T.Scene();
    const sc = opts.titan ? ["#1a0a0a", "#c0401a", "#24100c", "#100606", 2] : sceneColors(opts.chapter);
    scene.background = gradientTexture(sc[0], sc[1]);
    scene.fog = new T.Fog(new T.Color(sc[1]), 18, 48);
    scene.add(new T.HemisphereLight(new T.Color(mix(sc[1], "#ffffff", 0.25)), new T.Color(sc[2]), 0.5));
    const sun = new T.DirectionalLight(0xfff1dd, 1.25);
    sun.position.set(-5, 10, 6); sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -7, right: 7, top: 7, bottom: -7, near: 1, far: 30 });
    scene.add(sun);
    const rim = new T.DirectionalLight(0x99aaff, 0.5); rim.position.set(4, 5, -8); scene.add(rim);

    const ground = new T.Mesh(new T.PlaneGeometry(120, 120), lit(mul(sc[2], 0.8)));
    ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
    const ring = new T.Mesh(new T.RingGeometry(3.4, 3.6, 64), glow("#ffffff", 0.08));
    ring.rotation.x = -Math.PI / 2; ring.position.set(0, 0.01, -0.6); ring.scale.set(1.25, 1, 1); scene.add(ring);
    buildScenery(opts.titan ? 2 : opts.chapter % 5, sc, opts.chapter || 0);

    camera = new T.PerspectiveCamera(50, 1, 0.1, 150);
    resize();
    window.addEventListener("resize", resize);
    last = performance.now();
    raf = requestAnimationFrame(loop);
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

  function buildScenery(kind, sc, seed) {
    let s = seed * 9301 + 49297;
    const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
    const propMat = lit(sc[3]), glowMat = glow(mix(sc[1], "#ffffff", 0.3), 0.7);
    for (let i = 0; i < 30; i++) {
      const ang = rnd() * Math.PI * 2, rad = 7.5 + rnd() * 10;
      const x = Math.cos(ang) * rad, z = Math.sin(ang) * rad * 0.8 - 5;
      if (z > 4 || (z > -4.5 && Math.abs(x) < 7)) continue; // keep the battlefield and the camera's view clear
      const k = 0.6 + rnd() * 1.4;
      if (kind === 0) { part("cyl", scene, [x, 0.6 * k, z], [0.25 * k, 0.3 * k, 0.25 * k], propMat); part("capsule", scene, [x, 2 * k, z], [1.4 * k, 0.8 * k, 1.4 * k], propMat); }
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
    const target = new T.Vector3(0, 0.9, -0.5), pitch = 38 * Math.PI / 180;
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
      scene.traverse((o) => { if (o.geometry && !Object.values(geo).includes(o.geometry)) o.geometry.dispose(); });
      renderer.dispose();
    }
    renderer = scene = camera = host = null;
    views.clear(); parts = []; tweens = []; frameCbs = [];
  }

  // ---------- characters ----------
  function buildHero(id, hollow) {
    const L = LOOKS[id] || LOOKS.brannoc;
    const tint = (c) => hollow ? mix(c, "#2e1f33", 0.55) : c;
    const skin = lit(tint(SKIN[L.skin])), hair = lit(tint(L.hair)), armor = lit(tint(L.armor)), armorD = lit(tint(mul(L.armor, 0.7))),
      acc = lit(tint(L.accent)), metal = lit(tint("#b8c0cc"), 0.6), wood = lit(tint("#6b4a29")), boot = lit("#2a1f1a");
    const eyeC = hollow ? "#ff2a2a" : L.glow || "#1a141f", eyes = hollow || L.glow ? glow(eyeC) : lit(eyeC), accGlow = glow(L.accent);
    const m = new T.Group();
    part("capsule", m, [-0.15, 0.35, 0], [0.2, 0.16, 0.2], armorD); part("capsule", m, [0.15, 0.35, 0], [0.2, 0.16, 0.2], armorD);
    part("box", m, [-0.15, 0.07, 0.04], [0.2, 0.14, 0.3], boot); part("box", m, [0.15, 0.07, 0.04], [0.2, 0.14, 0.3], boot);
    part("capsule", m, [0, 0.95, 0], [0.62, 0.21, 0.42], armor);
    part("cyl", m, [0, 0.62, 0], [0.6, 0.05, 0.44], armorD);
    part("cyl", m, [0, 0.74, 0], [0.58, 0.015, 0.42], acc);
    part("box", m, [0, 1.0, 0.2], [0.1, 0.1, 0.04], acc, [0, 0, 45]);
    part("sphere", m, [-0.33, 1.22, 0], [0.26, 0.2, 0.26], acc); part("sphere", m, [0.33, 1.22, 0], [0.26, 0.2, 0.26], acc);
    const rarity = HERO[id] ? HERO[id].rarity : "common";
    if (rarity === "epic" || rarity === "legendary") part("box", m, [0, 0.85, -0.24], [0.62, 0.85, 0.04], lit(tint(mul(L.accent, 0.55))), [-6, 0, 0]);
    const head = pivot(m, [0, 1.55, 0]);
    part("sphere", head, [0, 0, 0], [0.5, 0.54, 0.5], skin);
    part("sphere", head, [-0.1, 0.02, 0.22], [0.08, 0.06, 0.04], eyes); part("sphere", head, [0.1, 0.02, 0.22], [0.08, 0.06, 0.04], eyes);
    if (L.beard) part("sphere", head, [0, -0.17, 0.12], [0.36, 0.26, 0.3], hair);
    const longHair = ["long", "braid", "ponytail", "flame"].includes(L.style);
    if (L.style === "hood" || L.gear === "veil") part("sphere", head, [0, 0.06, -0.04], [0.58, 0.6, 0.56], L.style === "hood" ? armor : armorD);
    else if (L.gear === "helm") { part("sphere", head, [0, 0.1, -0.01], [0.55, 0.46, 0.55], metal); part("box", head, [0, 0, 0.25], [0.05, 0.2, 0.03], metal); }
    else if (L.style !== "bald") {
      part("sphere", head, [0, 0.1, -0.05], [0.54, 0.44, 0.52], hair);
      if (longHair) part("capsule", head, [0, -0.2, -0.2], [0.44, 0.16, 0.16], hair);
      if (L.style === "spiky" || L.style === "flame") for (let i = -2; i <= 2; i++) part("box", head, [i * 0.09, 0.3, -0.04], [0.07, 0.18, 0.07], hair, [0, 0, -i * 14]);
    }
    if (L.gear === "crown") for (let i = 0; i < 5; i++) { const a = (i - 2) * 0.35; part("box", head, [Math.sin(a) * 0.2, 0.3, Math.cos(a) * 0.2 - 0.02], [0.06, 0.14, 0.04], acc, [0, a * 57.3, 0]); }
    if (L.gear === "circlet") part("cyl", head, [0, 0.14, -0.02], [0.52, 0.008, 0.52], acc);
    if (L.gear === "halo") part("cyl", head, [0, 0.44, 0], [0.42, 0.005, 0.42], accGlow);
    if (L.gear === "horns") { const bone = lit("#e6dcc0"); part("capsule", head, [-0.24, 0.24, 0], [0.08, 0.09, 0.08], bone, [0, 0, 35]); part("capsule", head, [0.24, 0.24, 0], [0.08, 0.09, 0.08], bone, [0, 0, -35]); }
    if (L.gear === "bandana") part("cyl", head, [0, 0.1, 0], [0.53, 0.02, 0.53], acc);
    if (L.gear === "mask") part("sphere", head, [0, -0.1, 0.12], [0.42, 0.22, 0.32], armor);
    const armL = pivot(m, [-0.38, 1.18, 0]);
    part("capsule", armL, [0, -0.28, 0], [0.16, 0.14, 0.16], armorD); part("sphere", armL, [0, -0.58, 0], [0.13, 0.13, 0.13], skin);
    const armR = pivot(m, [0.38, 1.18, 0]);
    part("capsule", armR, [0, -0.28, 0], [0.16, 0.14, 0.16], armorD); part("sphere", armR, [0, -0.58, 0], [0.13, 0.13, 0.13], skin);
    const hand = pivot(armR, [0, -0.6, 0.06]);
    buildProp(L.prop, hand, armL, wood, metal, acc, accGlow);
    return { model: m, armL, armR, height: 2.0 };
  }

  function buildProp(p, hand, off, wood, metal, acc, g) {
    switch (p) {
      case "spear": part("cyl", hand, [0, 0.35, 0.1], [0.05, 0.375, 0.05], wood, [20, 0, 0]); part("box", hand, [0, 1.05, 0.36], [0.08, 0.22, 0.03], metal, [20, 0, 0]); break;
      case "sword": case "katana": part("box", hand, [0, 0.45, 0.12], [0.07, 0.8, 0.03], metal, [18, 0, 0]); part("box", hand, [0, 0.06, 0.02], [0.24, 0.04, 0.06], acc); break;
      case "staff": part("cyl", hand, [0, 0.3, 0], [0.05, 0.375, 0.05], wood); part("sphere", hand, [0, 1.08, 0], [0.18, 0.18, 0.18], g); break;
      case "hammer": case "club":
        part("cyl", hand, [0, 0.3, 0.06], [0.06, 0.2, 0.06], wood, [15, 0, 0]);
        part("box", hand, [0, 0.72, 0.18], p === "hammer" ? [0.34, 0.2, 0.2] : [0.18, 0.24, 0.18], p === "hammer" ? metal : wood, [15, 0, 0]); break;
      case "trident": part("cyl", hand, [0, 0.35, 0.08], [0.04, 0.375, 0.04], metal, [12, 0, 0]); for (let i = -1; i <= 1; i++) part("box", hand, [i * 0.09, 1.15, 0.25], [0.03, 0.2, 0.03], metal, [12, 0, 0]); break;
      case "bow": part("capsule", hand, [0, 0.1, 0.1], [0.05, 0.25, 0.05], wood); break;
      case "lantern": case "candle": part("box", hand, [0, -0.12, 0.06], [0.14, 0.18, 0.14], wood); part("sphere", hand, [0, -0.12, 0.06], [0.12, 0.12, 0.12], g); break;
      case "hook": part("cyl", hand, [0, 0.3, 0.06], [0.04, 0.175, 0.04], metal, [15, 0, 0]); part("capsule", hand, [0, 0.66, 0.2], [0.05, 0.07, 0.05], metal, [110, 0, 0]); break;
      case "whip": part("capsule", hand, [0, 0.25, 0.3], [0.04, 0.2, 0.04], acc, [60, 0, 0]); break;
      case "daggers": part("box", hand, [0, 0.18, 0.08], [0.05, 0.3, 0.02], metal, [25, 0, 0]); part("box", off, [0, -0.45, 0.12], [0.05, 0.3, 0.02], metal, [25, 0, 0]); break;
      case "mirror": part("cyl", hand, [0, 0.3, 0.05], [0.26, 0.008, 0.32], g, [90, 0, 0]); break;
      case "orb": part("sphere", hand, [0, 0.12, 0.08], [0.22, 0.22, 0.22], g); break;
      case "bell": part("sphere", hand, [0, -0.05, 0.08], [0.2, 0.24, 0.2], acc); break;
      case "shield":
        part("box", hand, [0, 0.42, 0.1], [0.06, 0.65, 0.03], metal, [18, 0, 0]);
        part("cyl", off, [-0.04, -0.4, 0.16], [0.44, 0.015, 0.52], metal, [90, 0, 0]);
        part("sphere", off, [-0.04, -0.4, 0.2], [0.1, 0.1, 0.1], acc); break;
    }
  }

  function buildTitan(el) {
    const ec = ELEMENTS[el].color, stone = lit("#6b635c"), dark = lit("#3d3833"), g = glow(ec);
    const m = new T.Group();
    part("box", m, [-0.5, 0.6, 0], [0.6, 1.2, 0.6], dark); part("box", m, [0.5, 0.6, 0], [0.6, 1.2, 0.6], dark);
    part("box", m, [0, 2.0, 0], [2.0, 1.8, 1.2], stone, [0, 0, 2]);
    part("box", m, [0, 3.25, 0.1], [1.0, 0.9, 0.9], stone);
    part("sphere", m, [-0.22, 3.3, 0.55], [0.2, 0.12, 0.06], g); part("sphere", m, [0.22, 3.3, 0.55], [0.2, 0.12, 0.06], g);
    part("box", m, [0, 2.1, 0.61], [0.12, 1.2, 0.02], g, [0, 0, 12]);
    part("box", m, [-1.2, 3.5, 0], [0.25, 0.8, 0.25], dark, [0, 0, 30]); part("box", m, [1.2, 3.5, 0], [0.25, 0.8, 0.25], dark, [0, 0, -30]);
    const armL = pivot(m, [-1.25, 2.7, 0]); part("box", armL, [0, -0.8, 0], [0.6, 1.7, 0.6], stone);
    const armR = pivot(m, [1.25, 2.7, 0]); part("box", armR, [0, -0.8, 0], [0.6, 1.7, 0.6], stone);
    return { model: m, armL, armR, height: 4.1 };
  }

  function slot(ally, i, n) {
    const spread = ally ? 4.0 : 3.6;
    const x = n <= 1 ? 0 : -spread / 2 + i * (spread / (n - 1));
    return ally ? new T.Vector3(x, 0, 1.6) : new T.Vector3(x, 0, -2.6);
  }

  function addUnit(u, i, n) {
    const ally = u.side === "A";
    const scale = u.titan ? 1.25 : u.boss ? 1.35 : 1;
    const built = u.titan ? buildTitan(u.el) : buildHero(u.template.id, !ally);
    const root = new T.Group();
    root.add(built.model);
    built.model.scale.setScalar(scale);
    const pos = u.titan ? new T.Vector3(0, 0, -3.2) : slot(ally, i, n);
    root.position.copy(pos);
    root.rotation.y = ally ? Math.PI - 0.55 : 0; // allies face the enemies three-quarter on, so their faces show; enemies face the camera
    const aura = new T.Mesh(new T.CircleGeometry(0.62 * scale, 32), glow(ELEMENTS[u.el].color, 0.35));
    aura.rotation.x = -Math.PI / 2; aura.position.y = 0.02; root.add(aura);
    const ringMat = new T.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false });
    const ring = new T.Mesh(new T.RingGeometry(0.72 * scale, 0.86 * scale, 40), ringMat);
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.03; root.add(ring);
    scene.add(root);
    views.set(u.key, { u, root, model: built.model, armL: built.armL, armR: built.armR, aura, ring, home: pos.clone(), height: built.height * scale,
      phase: Math.random() * 10, busy: false, dead: false });
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
      if (v.dead) continue;
      v.model.position.y = Math.sin(t * 2.4 + v.phase) * 0.025;
      if (!v.busy && v.armR) {
        v.armR.rotation.x = (Math.sin(t * 2.4 + v.phase) * 5 - 8) * Math.PI / 180;
        v.armL.rotation.x = (-Math.sin(t * 2.4 + v.phase) * 4 - 4) * Math.PI / 180;
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

  // ---------- queries for the HTML overlay ----------
  const _v = T ? new T.Vector3() : null;
  function screen(key, where = "head") {
    const v = views.get(key);
    if (!v || !camera || !host) return null;
    const y = where === "feet" ? 0 : where === "center" ? v.height * 0.55 : v.height + 0.15;
    _v.set(v.root.position.x, v.root.position.y + y, v.root.position.z).project(camera);
    return { x: (_v.x + 1) / 2 * host.clientWidth, y: (1 - _v.y) / 2 * host.clientHeight };
  }
  function screenCenter(key) {
    const p = screen(key, "center"); if (!p || !host) return null;
    const r = host.getBoundingClientRect();
    return { x: r.left + p.x, y: r.top + p.y };
  }
  const worldCenter = (key) => { const v = views.get(key); return v ? new T.Vector3(v.root.position.x, v.height * 0.55, v.root.position.z) : null; };

  // ---------- animation & effects ----------
  async function attack(key, targetKey, melee) {
    const v = views.get(key); if (!v) return;
    v.busy = true;
    const tgt = views.get(targetKey);
    const dir = tgt ? tgt.root.position.clone().sub(v.home).setY(0) : new T.Vector3(0, 0, v.u.side === "A" ? -1 : 1);
    const to = melee ? v.home.clone().add(dir.multiplyScalar(0.55)) : v.home.clone().add(dir.normalize().multiplyScalar(0.25));
    await tween(melee ? 0.22 : 0.2, (k) => {
      v.root.position.lerpVectors(v.home, to, ease(k));
      if (v.armR) {
        v.armR.rotation.x = -(melee ? 150 : 160) * k * Math.PI / 180;
        if (!melee) v.armL.rotation.x = -160 * k * Math.PI / 180;
      }
    });
    if (melee && v.armR) await tween(0.1, (k) => { v.armR.rotation.x = (-150 + 190 * k) * Math.PI / 180; });
  }
  async function recover(key) {
    const v = views.get(key); if (!v || v.dead) return;
    const from = v.root.position.clone(), r0 = v.armR ? v.armR.rotation.x : 0, l0 = v.armL ? v.armL.rotation.x : 0;
    await tween(0.25, (k) => {
      v.root.position.lerpVectors(from, v.home, ease(k));
      if (v.armR) { v.armR.rotation.x = r0 * (1 - k); v.armL.rotation.x = l0 * (1 - k); }
    });
    v.busy = false;
  }
  function hit(key) {
    const v = views.get(key); if (!v || v.dead) return;
    const back = new T.Vector3(0, 0, v.u.side === "A" ? 0.22 : -0.22);
    tween(0.18, (k) => { v.root.position.copy(v.home).addScaledVector(back, Math.sin(k * Math.PI)); });
  }
  function die(key) {
    const v = views.get(key); if (!v || v.dead) return;
    v.dead = true;
    const r0 = v.root.rotation.x, y0 = v.root.position.y;
    tween(0.45, (k) => { v.root.rotation.x = r0 - 1.4 * ease(k) * (v.u.side === "A" ? -1 : 1); })
      .then(() => tween(0.8, (k) => { v.root.position.y = y0 - 0.7 * k; }))
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
      const d = new T.Vector3(Math.random() - 0.5, Math.random() - 0.3, Math.random() - 0.5).normalize().multiplyScalar(speed * (0.4 + Math.random() * 0.6));
      vel.push(d);
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
      if (life > 0.7) { scene.remove(pts); g.dispose(); mat.dispose(); return false; }
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
    let trailT = 0;
    return tween(dur, (k) => {
      orb.position.lerpVectors(a, b, k); orb.position.y += Math.sin(k * Math.PI) * 0.9;
      trailT += 1; if (trailT % 2 === 0) burstAt(orb.position.clone(), color, 3, 0.3, 0.35, 0);
    }).then(() => scene && scene.remove(orb));
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

  return { supported, mount, unmount, addUnit, removeSide, screen, screenCenter, attack, recover, hit, die, setHighlight,
    burst, heal, buff, cast, projectile, slash, shake, onFrame, has: (k) => views.has(k), get active() { return !!renderer; } };
})();
