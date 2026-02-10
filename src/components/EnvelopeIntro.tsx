import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EnvelopeIntroProps {
  onOpen: () => void;
}

const FADE_TO_WHITE_SEC = 0.18;   // faster fade
const WHITE_HOLD_MS = 140;        // very short white flash
const CTA_PULSE_SEC = 1.6;        // faster CTA pulse

const EnvelopeIntro = ({ onOpen }: EnvelopeIntroProps) => {
  const [phase, setPhase] = useState<"loading" | "ready" | "playing" | "white" | "done">("loading");
  const videoRef = useRef<HTMLVideoElement>(null);

  // If user clicks while loading, start immediately when ready
  const pendingTapRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const markReady = () => setPhase((p) => (p === "done" ? "done" : "ready"));

    // canplay is faster than canplaythrough
    video.addEventListener("canplay", markReady);

    // Fallback if already ready
    if (video.readyState >= 3) markReady();

    return () => {
      video.removeEventListener("canplay", markReady);
    };
  }, []);

  // When it becomes ready and user already tapped → autoplay
  useEffect(() => {
    if (phase !== "ready") return;
    if (!pendingTapRef.current) return;

    pendingTapRef.current = false;
    // trigger play
    const video = videoRef.current;
    if (!video) return;

    setPhase("playing");
    video.currentTime = 0;
    void video.play();

    const onEnded = () => {
      setPhase("white");
      setTimeout(() => {
        setPhase("done");
        onOpen();
      }, WHITE_HOLD_MS);
    };

    video.addEventListener("ended", onEnded, { once: true });
  }, [phase, onOpen]);

  const handleTap = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // If not ready yet, remember the tap (feels instant)
    if (phase === "loading") {
      pendingTapRef.current = true;
      return;
    }

    if (phase !== "ready") return;

    setPhase("playing");
    video.currentTime = 0;
    void video.play();

    const onEnded = () => {
      setPhase("white");
      setTimeout(() => {
        setPhase("done");
        onOpen();
      }, WHITE_HOLD_MS);
    };

    video.addEventListener("ended", onEnded, { once: true });
  }, [phase, onOpen]);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" onClick={handleTap}>
      {/* White bridge layer */}
      <div className="absolute inset-0 bg-white" />

      {/* Video layer */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: phase === "white" ? 0 : 1 }}
        transition={{ duration: FADE_TO_WHITE_SEC, ease: "easeOut" }}
      >
        <video
          ref={videoRef}
          playsInline
          muted
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          src="/intro-video.mov"
        />
      </motion.div>

      {/* Soft overlay for text readability — hidden during playback */}
      {(phase === "loading" || phase === "ready") && (
        <div className="absolute inset-0 bg-black/20" />
      )}

      {/* CTA text — only before playing */}
      <AnimatePresence>
        {(phase === "loading" || phase === "ready") && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
            exit={{ opacity: 0, transition: { duration: 0.08 } }}
          >
            <motion.p
              className="font-serif text-lg sm:text-2xl md:text-3xl text-cream/90 text-center px-8 tracking-wide"
              initial={{ opacity: 0, y: 8 }}
              animate={
                phase === "ready"
                  ? { opacity: [0.7, 1, 0.7], y: 0 }
                  : { opacity: 0.5, y: 0 }
              }
              transition={
                phase === "ready"
                  ? { duration: CTA_PULSE_SEC, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.25 }
              }
              style={{
                textShadow:
                  "0 2px 20px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.1)",
              }}
            >
              {phase === "loading" ? "Loading…" : "Press here to open the invitation"}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnvelopeIntro;