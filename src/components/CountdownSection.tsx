import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-06-06T16:00:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET_DATE - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 sm:py-32 bg-sage-light texture-overlay">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl sm:text-5xl text-foreground mb-4">
            Counting the Days
          </h2>
          <div className="w-12 h-px bg-sage mx-auto mb-12" />

          <div className="flex justify-center gap-4 sm:gap-8">
            {units.map((u) => (
              <div key={u.label} className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl bg-card shadow-lg flex items-center justify-center mb-3 border border-border">
                  <span className="font-serif text-2xl sm:text-4xl font-semibold text-foreground">
                    {String(u.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="font-sans text-xs sm:text-sm tracking-widest uppercase text-muted-foreground">
                  {u.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownSection;
