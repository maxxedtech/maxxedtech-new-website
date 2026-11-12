import { useEffect, useRef } from "react";
import type { BufferGeometry, Material } from "three";

type ThreeModule = typeof import("three");

function useReducedMotion() {
  const reduced = useRef(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { reduced.current = query.matches; };
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return reduced;
}

function setupRenderer(THREE: ThreeModule, canvas: HTMLCanvasElement, alpha = true) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, alpha ? 0 : 1);
  return renderer;
}

export function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;
    let frame = 0;
    let width = 0;
    let height = 0;
    let pointerX = 0.5;
    let pointerY = 0.5;
    let raf = 0;
    const start = performance.now();
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const onPointer = (event: PointerEvent) => { pointerX = event.clientX / Math.max(width, 1); pointerY = event.clientY / Math.max(height, 1); };
    const draw = (now: number) => {
      const t = (now - start) * 0.00015;
      context.clearRect(0, 0, width, height);
      const orbs = [
        [width * (.18 + Math.sin(t * 1.3) * .04), height * (.22 + Math.cos(t) * .08), Math.min(width, height) * .28, "rgba(53,189,181,.12)"],
        [width * (.82 + Math.cos(t * 1.1) * .05), height * (.3 + Math.sin(t * .8) * .1), Math.min(width, height) * .25, "rgba(0,122,115,.14)"],
        [width * (.14 + Math.sin(t * .7) * .06), height * (.84 + Math.cos(t * 1.2) * .05), Math.min(width, height) * .2, "rgba(230,247,246,.06)"],
        [width * (.9 + Math.cos(t * .8) * .03), height * (.82 + Math.sin(t) * .05), Math.min(width, height) * .18, "rgba(53,189,181,.08)"],
      ] as const;
      for (const [x, y, radius, color] of orbs) { const gradient = context.createRadialGradient(x, y, 0, x, y, radius); gradient.addColorStop(0, color); gradient.addColorStop(1, "rgba(0,0,0,0)"); context.fillStyle = gradient; context.fillRect(x - radius, y - radius, radius * 2, radius * 2); }
      context.save();
      context.translate(width * (.5 + (pointerX - .5) * .04), height * .5);
      context.rotate(-.28 + (pointerY - .5) * .03);
      const ribbon = context.createLinearGradient(-width, 0, width, 0); ribbon.addColorStop(0, "rgba(53,189,181,0)"); ribbon.addColorStop(.5, "rgba(230,247,246,.045)"); ribbon.addColorStop(1, "rgba(53,189,181,0)"); context.fillStyle = ribbon; context.fillRect(-width, -height * .02, width * 2, height * .04); context.restore();
      context.save();
      context.strokeStyle = "rgba(230,247,246,.12)"; context.lineWidth = 1;
      for (const x of [width * .1, width * .9]) { context.beginPath(); context.arc(x, height * (.38 + Math.sin(t + x) * .05), 32, 0, Math.PI * 2); context.stroke(); context.beginPath(); context.arc(x, height * (.38 + Math.sin(t + x) * .05), 46, 0, Math.PI * 2); context.stroke(); context.beginPath(); context.moveTo(x - 58, height * .38 + Math.sin(t + x) * height * .05); context.lineTo(x + 58, height * .38 + Math.sin(t + x) * height * .05); context.stroke(); }
      context.restore();
      frame += 1;
      raf = requestAnimationFrame(draw);
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", onPointer); context.clearRect(0, 0, width, height); void frame; };
  }, []);
  return <canvas id="bg-ambient-canvas" ref={canvasRef} aria-hidden="true" />;
}

export function HeroLattice({ onTelemetry }: { onTelemetry?: (theta: string, phi: string) => void }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const telemetryRef = useRef({ frame: 0, theta: 45.28, phi: 118.6 });
  useEffect(() => {
    let disposed = false;
    let raf = 0;
    let observer: IntersectionObserver | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let cleanup: (() => void) | undefined;
    import("three").then((THREE) => {
      if (disposed || !hostRef.current) return;
      const host = hostRef.current;
      const canvas = host.querySelector("canvas");
      if (!canvas) return;
      const renderer = setupRenderer(THREE, canvas);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, .1, 100);
      camera.position.z = 5;
      const group = new THREE.Group();
      scene.add(group);
      const material = (color: number, opacity = 1) => new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: opacity < 1, opacity });
      const outer = new THREE.Mesh(new THREE.IcosahedronGeometry(1.35, 1), material(0x35bdb5));
      const inner = new THREE.Mesh(new THREE.OctahedronGeometry(.8, 1), material(0x007a73));
      group.add(outer, inner);
      const ringA = new THREE.Mesh(new THREE.TorusGeometry(1.6, .012, 8, 96), material(0xe6f7f6, .75)); ringA.rotation.x = .8;
      const ringB = new THREE.Mesh(new THREE.TorusGeometry(1.82, .009, 8, 96), material(0x35bdb5, .7)); ringB.rotation.y = .95;
      group.add(ringA, ringB);
      const satellite = new THREE.Mesh(new THREE.SphereGeometry(.065, 12, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      satellite.position.set(1.8, .2, .2); group.add(satellite);
      const geometries = [outer.geometry, inner.geometry, ringA.geometry, ringB.geometry, satellite.geometry];
      const materials = [outer.material, inner.material, ringA.material, ringB.material, satellite.material];
      let visible = true;
      let drag = false;
      let lastX = 0;
      let lastY = 0;
      let targetX = 0;
      let targetY = 0;
      const resize = () => { const { width, height } = host.getBoundingClientRect(); if (!width || !height) return; renderer.setSize(width, height, false); camera.aspect = width / height; camera.updateProjectionMatrix(); };
      const pointerDown = (event: PointerEvent) => { drag = true; lastX = event.clientX; lastY = event.clientY; canvas.setPointerCapture?.(event.pointerId); };
      const pointerMove = (event: PointerEvent) => { if (!drag) return; targetY += (event.clientX - lastX) * .006; targetX += (event.clientY - lastY) * .006; lastX = event.clientX; lastY = event.clientY; };
      const pointerUp = () => { drag = false; };
      const reset = () => { targetX = 0; targetY = 0; group.rotation.set(0, 0, 0); };
      canvas.addEventListener("pointerdown", pointerDown); canvas.addEventListener("pointermove", pointerMove, { passive: true }); canvas.addEventListener("pointerup", pointerUp); canvas.addEventListener("pointercancel", pointerUp);
      window.addEventListener("maxxed:hero-reset", reset);
      observer = new IntersectionObserver(([entry]) => { visible = entry?.isIntersecting ?? true; }, { threshold: .05 }); observer.observe(host);
      resizeObserver = new ResizeObserver(resize); resizeObserver.observe(host); resize();
      const animate = (time: number) => { if (disposed) return; if (visible && !reduced.current) { group.rotation.x += (targetX - group.rotation.x) * .08; group.rotation.y += (targetY - group.rotation.y) * .08; ringA.rotation.z -= .004; ringB.rotation.z += .006; satellite.position.x = Math.cos(time * .001) * 1.8; satellite.position.z = Math.sin(time * .001) * 1.8; renderer.render(scene, camera); telemetryRef.current.frame += 1; telemetryRef.current.theta = (group.rotation.x * 57.2958 + 45.28 + 360) % 360; telemetryRef.current.phi = (group.rotation.y * 57.2958 + 118.6 + 360) % 360; if (telemetryRef.current.frame % 8 === 0) onTelemetry?.(telemetryRef.current.theta.toFixed(2), telemetryRef.current.phi.toFixed(2)); } raf = requestAnimationFrame(animate); };
      raf = requestAnimationFrame(animate);
      cleanup = () => { cancelAnimationFrame(raf); observer?.disconnect(); resizeObserver?.disconnect(); window.removeEventListener("maxxed:hero-reset", reset); canvas.removeEventListener("pointerdown", pointerDown); canvas.removeEventListener("pointermove", pointerMove); canvas.removeEventListener("pointerup", pointerUp); canvas.removeEventListener("pointercancel", pointerUp); geometries.forEach((geometry) => geometry.dispose()); materials.forEach((item) => item.dispose()); renderer.dispose(); };
    });
    return () => { disposed = true; cancelAnimationFrame(raf); cleanup?.(); };
  }, [onTelemetry, reduced]);
  return <div ref={hostRef} className="hero-canvas-host"><canvas id="hero-3d-canvas" aria-label="Interactive gyroscopic lattice" /></div>;
}

export function Intro3DOverlay({ visible, onExit }: { visible: boolean; onExit: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  const hudRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!visible || reduced.current) return;
    let disposed = false;
    let raf = 0;
    let cleanup: (() => void) | undefined;
    import("three").then((THREE) => {
      const canvas = canvasRef.current;
      if (disposed || !canvas) return;
      const renderer = setupRenderer(THREE, canvas, false);
      const scene = new THREE.Scene(); scene.fog = new THREE.FogExp2(0x000000, .032);
      const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, .1, 200); camera.position.z = 26;
      const group = new THREE.Group(); scene.add(group);
      const geometries: BufferGeometry[] = []; const materials: Material[] = [];
      for (let i = 0; i < 28; i += 1) { const geometry = new THREE.TorusGeometry(4.4 + (i % 3) * .25, .025, 8, 64); const material = new THREE.MeshBasicMaterial({ color: i % 2 ? 0xe6f7f6 : 0x35bdb5, transparent: true, opacity: .55 }); const gate = new THREE.Mesh(geometry, material); gate.position.z = 3 - i * 3.2; gate.rotation.z = i % 2 ? .2 : -.2; group.add(gate); geometries.push(geometry); materials.push(material); }
      const knotGeometry = new THREE.TorusKnotGeometry(1.5, .06, 96, 12); const knotMaterial = new THREE.MeshBasicMaterial({ color: 0x35bdb5, wireframe: true }); const knot = new THREE.Mesh(knotGeometry, knotMaterial); group.add(knot); geometries.push(knotGeometry); materials.push(knotMaterial);
      const shellGeometry = new THREE.IcosahedronGeometry(2, 1); const shellMaterial = new THREE.MeshBasicMaterial({ color: 0xe6f7f6, wireframe: true, transparent: true, opacity: .42 }); const shell = new THREE.Mesh(shellGeometry, shellMaterial); group.add(shell); geometries.push(shellGeometry); materials.push(shellMaterial);
      for (const [color, rotation] of [[0x35bdb5, [0, 0, 0]], [0x007a73, [.8, 0, 0]], [0x35bdb5, [0, .8, 0]]] as const) { const geometry = new THREE.TorusGeometry(2.8, .025, 8, 64); const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .7 }); const ring = new THREE.Mesh(geometry, material); ring.rotation.set(rotation[0], rotation[1], rotation[2]); group.add(ring); geometries.push(geometry); materials.push(material); }
      const starGeometry = new THREE.BufferGeometry(); const positions = new Float32Array(900 * 3); for (let i = 0; i < positions.length; i += 3) { positions[i] = (Math.random() - .5) * 36; positions[i + 1] = (Math.random() - .5) * 24; positions[i + 2] = Math.random() * -90; } starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3)); const stars = new THREE.Points(starGeometry, new THREE.PointsMaterial({ color: 0xe6f7f6, size: .035, transparent: true, opacity: .75 })); scene.add(stars); geometries.push(starGeometry); materials.push(stars.material);
      const start = performance.now(); const resize = () => { renderer.setSize(window.innerWidth, window.innerHeight, false); camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); }; const onPointer = (event: PointerEvent) => { group.rotation.y = (event.clientX / window.innerWidth - .5) * .08; group.rotation.x = (event.clientY / window.innerHeight - .5) * .05; }; resize(); window.addEventListener("resize", resize, { passive: true }); window.addEventListener("pointermove", onPointer, { passive: true });
      const animate = (time: number) => { if (disposed) return; const progress = Math.min((time - start) / 3800, 1); const eased = 1 - Math.pow(1 - progress, 3); camera.position.z = 26 - eased * 21.5; camera.fov = 62 + Math.sin(progress * Math.PI) * 34; camera.updateProjectionMatrix(); knot.rotation.x += .012; knot.rotation.y -= .018; shell.rotation.y -= .01; stars.position.z += .42; if (stars.position.z > 10) stars.position.z = 0; const phase = progress < .38 ? "PHASE 01" : progress < .75 ? "PHASE 02" : "PHASE 03"; if (hudRef.current) hudRef.current.dataset["phase"] = phase; const counter = hudRef.current?.querySelector("[data-counter]"); if (counter) counter.textContent = `${Math.round(progress * 100).toString().padStart(3, "0")}%`; const bar = hudRef.current?.querySelector<HTMLElement>("[data-progress]"); if (bar) bar.style.width = `${progress * 100}%`; renderer.render(scene, camera); if (progress >= 1) { onExit(); return; } raf = requestAnimationFrame(animate); }; raf = requestAnimationFrame(animate);
      cleanup = () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", onPointer); geometries.forEach((geometry) => geometry.dispose()); materials.forEach((material) => material.dispose()); renderer.dispose(); };
    });
    return () => { disposed = true; cancelAnimationFrame(raf); cleanup?.(); };
  }, [onExit, reduced, visible]);
  if (!visible) return null;
  return <div id="intro-3d-overlay" className="intro-3d-overlay"><canvas ref={canvasRef} /><div ref={hudRef} className="intro-hud"><div><span className="status-dot" /> <span data-phase>PHASE 01</span></div><strong data-counter>000%</strong><div className="intro-progress"><span data-progress /></div><button className="button liquid-cta" onClick={onExit}>Enter Atelier Immediately <i className="ph-light ph-arrow-up-right" /></button></div></div>;
}
