import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const STATUS_STEPS = [
  { at: 0, label: "INITIALIZING MAXXED OS" },
  { at: 38, label: "ASSEMBLING DIGITAL SPACE" },
  { at: 72, label: "CALIBRATING INTERFACE" },
  { at: 96, label: "SYSTEMS ONLINE" },
];

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  const dismiss = useCallback(() => {
    try {
      sessionStorage.setItem("maxxed_loaded_session", "true");
    } catch {
      // Storage can be unavailable in private browsing contexts.
    }
    setVisible(false);
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("maxxed_loaded_session")) {
        setVisible(false);
        onComplete?.();
        return;
      }
    } catch {
      // Continue with the intro if session storage is unavailable.
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", handleKeyDown);

    const duration = reduceMotion ? 450 : 1650;
    const start = performance.now();
    let frame = 0;
    let exitTimer: ReturnType<typeof setTimeout> | undefined;
    let finished = false;

    const tick = (now: number) => {
      if (finished) return;
      const ratio = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - ratio, 2.2);
      setProgress(Math.min(100, Math.round(eased * 100)));

      if (ratio < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        finished = true;
        exitTimer = setTimeout(dismiss, reduceMotion ? 0 : 180);
      }
    };

    frame = requestAnimationFrame(tick);
    const safetyTimer = setTimeout(() => {
      if (!finished) {
        finished = true;
        setProgress(100);
        dismiss();
      }
    }, duration + 900);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(frame);
      clearTimeout(safetyTimer);
      if (exitTimer) clearTimeout(exitTimer);
    };
  }, [dismiss, onComplete, reduceMotion]);

  const status = [...STATUS_STEPS].reverse().find((step) => progress >= step.at)?.label ?? STATUS_STEPS[0].label;

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="maxxed-os-loader"
          className={`maxxed-loader fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden select-none ${reduceMotion ? "motion-safe:transition-none" : ""}`}
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0.98, transition: { duration: reduceMotion ? 0.15 : 0.65, ease: [0.76, 0, 0.24, 1] } }}
          role="status"
          aria-label="Initializing Maxxed Tech"
        >
          <div className="maxxed-loader-grid" aria-hidden="true" />
          <div className="maxxed-loader-haze maxxed-loader-haze-one" aria-hidden="true" />
          <div className="maxxed-loader-haze maxxed-loader-haze-two" aria-hidden="true" />

          <div className="maxxed-loader-content">
            <div className="maxxed-loader-scene" aria-hidden="true">
              <div className="maxxed-loader-orbit maxxed-loader-orbit-one" />
              <div className="maxxed-loader-orbit maxxed-loader-orbit-two" />
              <div className="maxxed-loader-orbit maxxed-loader-orbit-three" />
              <div className="maxxed-loader-core">
                <span className="maxxed-core-face maxxed-core-front" />
                <span className="maxxed-core-face maxxed-core-back" />
                <span className="maxxed-core-face maxxed-core-right" />
                <span className="maxxed-core-face maxxed-core-left" />
                <span className="maxxed-core-face maxxed-core-top" />
                <span className="maxxed-core-face maxxed-core-bottom" />
              </div>
              <span className="maxxed-loader-particle maxxed-particle-one" />
              <span className="maxxed-loader-particle maxxed-particle-two" />
              <span className="maxxed-loader-particle maxxed-particle-three" />
            </div>

            <motion.img
              src="/images/logo/navbar-logo.png"
              alt="Maxxed Tech"
              className="maxxed-loader-logo"
              initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: reduceMotion ? 0.15 : 0.7, delay: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
            />

            <div className="maxxed-loader-wordmark">DIGITAL SYSTEMS STUDIO</div>

            <div className="maxxed-loader-progress" aria-hidden="true">
              <motion.span animate={{ width: `${progress}%` }} transition={{ duration: 0.08, ease: "linear" }} />
            </div>

            <div className="maxxed-loader-status">
              <span>{status}</span>
              <span className="maxxed-loader-percent">{String(progress).padStart(3, "0")}%</span>
            </div>
          </div>

          <div className="maxxed-loader-footer">
            <span>DESIGNED TO MOVE YOU FORWARD</span>
            <button type="button" onClick={dismiss}>Skip intro <span aria-hidden="true">↗</span></button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
