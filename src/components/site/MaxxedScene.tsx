import { useEffect, useRef } from "react";

/**
 * Lightweight, dependency-free canvas scene for the homepage hero.
 * It uses a projected 3D point cloud and responsive frame budgets instead of
 * shipping a large WebGL runtime to every visitor.
 */
export function MaxxedScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 720px)");
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let width = 1;
    let height = 1;
    let pixelRatio = 1;
    let frame = 0;
    let lastFrame = 0;
    let rotation = 0;
    let disposed = false;

    const pointCount = () => (mobile.matches ? 92 : 168);
    let points: Array<{ x: number; y: number; z: number; phase: number }> = [];

    const buildPoints = () => {
      const count = pointCount();
      points = Array.from({ length: count }, (_, index) => {
        const y = 1 - (index / Math.max(1, count - 1)) * 2;
        const radius = Math.sqrt(Math.max(0, 1 - y * y));
        const angle = Math.PI * (3 - Math.sqrt(5)) * index;
        return {
          x: Math.cos(angle) * radius,
          y,
          z: Math.sin(angle) * radius,
          phase: index * 0.17,
        };
      });
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      pixelRatio = Math.min(window.devicePixelRatio || 1, mobile.matches ? 1.25 : 1.65);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      buildPoints();
      draw(performance.now(), true);
    };

    const draw = (time: number, staticFrame = false) => {
      if (disposed) return;
      context.clearRect(0, 0, width, height);

      const cx = width * 0.51;
      const cy = height * 0.49;
      const scale = Math.min(width, height) * (mobile.matches ? 0.31 : 0.34);
      const movement = reducedMotion.matches ? 0 : 1;
      const tiltX = pointer.y * 0.16;
      const tiltY = pointer.x * 0.22 + rotation;
      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);
      const cosY = Math.cos(tiltY);
      const sinY = Math.sin(tiltY);

      const projected = points.map((point) => {
        const x1 = point.x * cosY - point.z * sinY;
        const z1 = point.x * sinY + point.z * cosY;
        const y2 = point.y * cosX - z1 * sinX;
        const z2 = point.y * sinX + z1 * cosX;
        const perspective = 2.8 / (2.8 + z2 * 0.42);
        const breathe = 1 + Math.sin(time * 0.00065 + point.phase) * 0.018 * movement;
        return {
          x: cx + x1 * scale * perspective * breathe,
          y: cy + y2 * scale * perspective * breathe,
          z: z2,
          radius: Math.max(0.6, (1.8 - z2 * 0.45) * (mobile.matches ? 0.72 : 1)),
        };
      });

      const maxDistance = mobile.matches ? 47 : 55;
      for (let i = 0; i < projected.length; i += 1) {
        const a = projected[i];
        for (let j = i + 1; j < projected.length; j += 1) {
          const b = projected[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          if (distance < maxDistance) {
            const depth = Math.max(0.06, 1 - distance / maxDistance);
            context.strokeStyle = `rgba(53, 189, 181, ${depth * (0.1 + (a.z + b.z + 2) * 0.035)})`;
            context.lineWidth = 0.65;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      projected.forEach((point, index) => {
        const glow = 0.35 + (point.z + 1) * 0.24;
        context.beginPath();
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(117, 244, 232, ${glow})`;
        context.fill();

        if (index % (mobile.matches ? 13 : 9) === 0) {
          context.beginPath();
          context.arc(point.x, point.y, point.radius * 3.4, 0, Math.PI * 2);
          context.fillStyle = `rgba(53, 189, 181, ${glow * 0.07})`;
          context.fill();
        }
      });

      // Fine orbital ellipses add a sense of depth without a heavy 3D dependency.
      context.save();
      context.translate(cx, cy);
      context.rotate(-0.28 + pointer.x * 0.08);
      [0.72, 0.94, 1.16].forEach((ratio, index) => {
        context.beginPath();
        context.ellipse(0, 0, scale * ratio, scale * ratio * (index === 1 ? 0.27 : 0.19), 0, 0, Math.PI * 2);
        context.strokeStyle = `rgba(53, 189, 181, ${index === 1 ? 0.2 : 0.11})`;
        context.lineWidth = 0.8;
        context.stroke();
      });
      context.restore();

      if (!staticFrame && !reducedMotion.matches) {
        rotation += mobile.matches ? 0.0018 : 0.0025;
      }
    };

    const animate = (time: number) => {
      if (disposed) return;
      const frameInterval = mobile.matches ? 1000 / 30 : 1000 / 45;
      if (!reducedMotion.matches && time - lastFrame >= frameInterval) {
        lastFrame = time;
        pointer.x += (pointer.targetX - pointer.x) * 0.055;
        pointer.y += (pointer.targetY - pointer.y) * 0.055;
        draw(time);
      }
      if (!reducedMotion.matches) frame = window.requestAnimationFrame(animate);
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      if (
        event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom
      ) {
        pointer.targetX = 0;
        pointer.targetY = 0;
        return;
      }
      pointer.targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointer.targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };
    const onPointerLeave = () => {
      pointer.targetX = 0;
      pointer.targetY = 0;
    };
    const onMotionPreference = () => {
      window.cancelAnimationFrame(frame);
      draw(performance.now(), true);
      if (!reducedMotion.matches) frame = window.requestAnimationFrame(animate);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    reducedMotion.addEventListener("change", onMotionPreference);
    mobile.addEventListener("change", resize);
    resize();
    if (!reducedMotion.matches) frame = window.requestAnimationFrame(animate);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      reducedMotion.removeEventListener("change", onMotionPreference);
      mobile.removeEventListener("change", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="maxxed-scene-canvas" aria-hidden="true" />;
}
