/* =====================================================================
   three-scene.js — hero silk-flow lines (three.js from CDN, ES module)

   Layered champagne lines undulating like silk under candlelight —
   calm, liquid, luxurious. A new playbook recipe alongside the particle
   wave and dust drift. Self-hosted, no Spline, no watermark.

   All motion is a pure function of the rAF timestamp (no incremental
   state), so stepped/virtual-clock capture renders it deterministically.

   Guardrails:
   - skips entirely on prefers-reduced-motion (CSS gradient stays)
   - fewer lines on small screens
   - pauses rendering when the hero is off-screen or the tab is hidden
   - DPR clamped to 2; CDN/WebGL failure leaves the gradient — nothing breaks
   ===================================================================== */

const canvas = document.getElementById("heroCanvas");
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canvas && !reduced) {
  init().catch(() => { /* CDN or WebGL unavailable — gradient fallback stays */ });
}

async function init() {
  const THREE = await import("https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js");

  const hero = canvas.parentElement;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0d0b09, 8, 26);

  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 60);
  camera.position.set(0, 1.2, 13);
  camera.lookAt(0, 0, 0);

  // --- Silk sheet: rows of lines across X, stacked in Z, Y = layered sines ---
  const small = window.innerWidth < 768;
  const LINES = small ? 16 : 26;
  const POINTS = small ? 90 : 140;
  const SPAN_X = 38, SPAN_Z = 14;

  const group = new THREE.Group();
  group.rotation.x = -0.42; // tilt the sheet toward the camera
  scene.add(group);

  const lines = [];
  for (let li = 0; li < LINES; li++) {
    const z = -SPAN_Z / 2 + (li / (LINES - 1)) * SPAN_Z;
    const positions = new Float32Array(POINTS * 3);
    for (let pi = 0; pi < POINTS; pi++) {
      positions[pi * 3] = -SPAN_X / 2 + (pi / (POINTS - 1)) * SPAN_X;
      positions[pi * 3 + 2] = z;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    // nearer lines glow brighter — reads as depth without heavy fog
    const depth = 1 - Math.abs(z) / (SPAN_Z / 2 + 0.001);
    const mat = new THREE.LineBasicMaterial({
      color: 0xd9b98c,
      transparent: true,
      opacity: 0.07 + depth * 0.26,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const line = new THREE.Line(geo, mat);
    group.add(line);
    lines.push({ geo, z });
  }

  // y(x, z, t) — pure function of position + time, no accumulated state
  const silkY = (x, z, t) =>
    Math.sin(x * 0.28 + t * 0.55 + z * 0.55) * 1.05 +
    Math.sin(x * 0.11 - t * 0.32 + z * 1.3) * 0.7 +
    Math.sin(x * 0.52 + t * 0.85) * 0.22 +
    Math.sin(z * 0.8 + t * 0.18) * 0.45;

  // --- Cursor parallax (lerped so it feels weighty, not twitchy) ---
  let targetX = 0, targetY = 0;
  window.addEventListener("pointermove", (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 1.3;
    targetY = (e.clientY / window.innerHeight - 0.5) * 0.7;
  }, { passive: true });

  // --- Resize to the hero box ---
  function resize() {
    const w = hero.clientWidth, h = hero.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener("resize", resize, { passive: true });
  resize();

  // --- Pause when hero is off-screen or tab hidden ---
  let heroVisible = true;
  new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; }).observe(hero);

  function frame(t) {
    requestAnimationFrame(frame);
    if (!heroVisible || document.hidden) return;
    const time = t * 0.001;
    for (const { geo, z } of lines) {
      const pos = geo.attributes.position;
      for (let pi = 0; pi < POINTS; pi++) {
        pos.array[pi * 3 + 1] = silkY(pos.array[pi * 3], z, time);
      }
      pos.needsUpdate = true;
    }
    group.rotation.z = Math.sin(time * 0.1) * 0.03;
    camera.position.x += (targetX - camera.position.x) * 0.04;
    camera.position.y += (1.2 - targetY - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }
  requestAnimationFrame(frame);
}
