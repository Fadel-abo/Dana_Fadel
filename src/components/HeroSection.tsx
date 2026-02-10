import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const HERO_VIDEO_URL = "https://boda-finca-comassema.lovable.app/assets/hero-video-PwBjjBYV.mp4";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO_URL}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/40" />

      {/* Mute button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-10 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-cream/30 flex items-center justify-center text-cream hover:bg-background/30 transition-colors"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* Hero text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-cream mb-6 leading-tight">
            Fadel & Dana
          </h1>
          <p className="font-sans text-sm sm:text-base tracking-[0.3em] uppercase text-cream/80 mb-2">
            Engagement
          </p>
          <div className="w-16 h-px bg-gold mx-auto my-6" />
          <p className="font-body text-base sm:text-lg text-cream/90 mb-1">
            June 6, 2026 — 16:00
          </p>
          <p className="font-body text-base sm:text-lg text-cream/80">
            Schloss Aumühle, Atzenbrugg
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
