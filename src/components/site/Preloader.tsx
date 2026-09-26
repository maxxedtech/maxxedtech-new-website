import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const TELEMETRY_PHRASES = [
  "INITIALIZING MAXXED OS",
  "OPTIMIZING ASSETS",
  "READY",
];

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const dismiss = useCallback(() => {
    try {
      sessionStorage.setItem("maxxed_loaded_session", "true");
    } catch {
      // Ignore sessionStorage security restrictions in private modes
    }
    setVisible(false);
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    // 1. Check session memory
    try {
      if (sessionStorage.getItem("maxxed_loaded_session")) {
        setVisible(false);
        onComplete?.();
        return;
      }
    } catch {
      // Storage unavailable, continue
    }

    // 2. Escape key listener for fast dismissal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // 3. Fast telemetry cycler
    const phraseTimer = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % TELEMETRY_PHRASES.length);
    }, 250);

    // 4. Short, smooth, reliable counter (750ms total)
    const startTime = performance.now();
    const duration = 750;

    let frameId: number;
    let completed = false;

    const tick = (now: number) => {
      if (completed) return;
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        frameId = requestAnimationFrame(tick);
      } else {
        completed = true;
        clearInterval(phraseTimer);
        setTimeout(dismiss, 200);
      }
    };

    frameId = requestAnimationFrame(tick);

    // 5. Bulletproof safety fallback: force dismiss after 1.2s no matter what
    const safetyTimer = setTimeout(() => {
      if (!completed) {
        completed = true;
        setProgress(100);
        dismiss();
      }
    }, 1200);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(frameId);
      clearInterval(phraseTimer);
      clearTimeout(safetyTimer);
    };
  }, [dismiss, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden select-none"
        >
          {/* Ambient Cybernetic Teal Glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/25 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(rgba(53,189,181,0.14)_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            {/* Loading Logo */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative mb-7"
            >
              <div className="absolute -inset-3 rounded-2xl bg-primary/30 blur-xl animate-pulse" />
              <img
                src="/images/logo/loading-logo.png"
                alt="Maxxed Tech"
                className="relative h-16 md:h-20 w-auto object-contain drop-shadow-[0_0_20px_rgba(53,189,181,0.6)]"
              />
            </motion.div>

            {/* Glowing Custom Progress Bar */}
            <div className="w-56 h-[3px] bg-white/10 rounded-full overflow-hidden relative shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-primary via-teal-300 to-primary rounded-full relative shadow-[0_0_12px_#35bdb5] transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
              </div>
            </div>

            {/* Percentage & Status Line */}
            <div className="mt-4 flex items-center justify-between w-56 text-xs font-mono">
              <span className="text-muted-foreground/70 tracking-wider">
                {progress === 100 ? "READY" : TELEMETRY_PHRASES[phraseIndex]}
              </span>
              <span className="text-primary font-bold tracking-widest">{progress}%</span>
            </div>
          </div>

          {/* Skip button */}
          <button
            type="button"
            onClick={dismiss}
            className="absolute bottom-6 flex items-center gap-1.5 text-xs font-mono tracking-wider text-muted-foreground hover:text-primary transition-colors cursor-pointer uppercase py-1.5 px-4 rounded-full border border-white/10 bg-white/5 hover:border-primary/40 hover:bg-primary/10"
          >
            Skip Intro <span>→</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
