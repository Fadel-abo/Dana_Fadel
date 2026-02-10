import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EnvelopeIntro from "@/components/EnvelopeIntro";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import LocationSection from "@/components/LocationSection";
import DayProgramSection from "@/components/DayProgramSection";
import DressCodeSection from "@/components/DressCodeSection";
import FAQSection from "@/components/FAQSection";
import GiftsSection from "@/components/GiftsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  // Lock scrolling while envelope is showing
  useEffect(() => {
    if (!envelopeOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [envelopeOpen]);

  return (
    <>
      <AnimatePresence>
        {!envelopeOpen && (
          <EnvelopeIntro onOpen={() => setEnvelopeOpen(true)} />
        )}
      </AnimatePresence>

      {/* Website content — hidden until envelope opens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: envelopeOpen ? 1 : 0 }}
        transition={{ duration: 0.6, delay: envelopeOpen ? 0.1 : 0 }}
        style={{ visibility: envelopeOpen ? "visible" : "hidden" }}
      >
        <HeroSection />
        <CountdownSection />
        <LocationSection />
        <DayProgramSection />
        <DressCodeSection />
        <FAQSection />
        <GiftsSection />
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
