import { motion } from "framer-motion";
import { Users, Heart, UtensilsCrossed, Cake, Music } from "lucide-react";

const events = [
  { time: "16:00", label: "Guests arrive & welcome", icon: Users },
  { time: "17:00", label: "Ring exchange", icon: Heart },
  { time: "18:30", label: "Dinner", icon: UtensilsCrossed },
  { time: "20:00", label: "Cake cutting", icon: Cake },
  { time: "21:00", label: "Dancing & celebration", icon: Music },
];

const DayProgramSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-sage-light texture-overlay">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-5xl text-foreground mb-4">
            Day Program
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A simple flow for the evening — arrive, celebrate, and enjoy every moment
            with us.
          </p>
          <div className="w-12 h-px bg-sage mx-auto mt-6" />
        </motion.div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Mobile vertical line */}
          <div className="sm:hidden absolute left-7 top-2 bottom-2 w-px bg-sage-muted/70" />

          {/* Desktop horizontal line */}
          <div className="hidden sm:block absolute top-1/2 left-[10%] right-[10%] h-px bg-sage-muted/70" />

          <div className="relative flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-0">
            {events.map((event, i) => (
              <motion.div
                key={event.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="relative flex items-start sm:items-center gap-4 sm:gap-3 sm:flex-1"
              >
                {/* Mobile dot connector alignment */}
                <div className="sm:hidden mt-1">
                  <div className="w-3 h-3 rounded-full bg-sage shadow-sm border border-border" />
                </div>

                <div className="flex flex-row sm:flex-col items-center sm:items-center gap-4 sm:gap-3 w-full">
                  {/* Time badge */}
                  <div className="px-4 py-1.5 rounded-full bg-sage text-primary-foreground font-sans text-xs tracking-[0.22em] uppercase shadow-md">
                    {event.time}
                  </div>

                  {/* Icon circle + subtle glow */}
                  <div className="relative z-10">
                    <div className="absolute inset-0 rounded-full blur-xl bg-sage/25" />
                    <div className="relative w-14 h-14 rounded-full bg-card shadow-lg border border-border flex items-center justify-center">
                      <event.icon size={22} className="text-sage" />
                    </div>
                  </div>

                  {/* Label */}
                  <p className="font-body text-sm text-foreground sm:text-center leading-snug sm:mt-2 max-w-[240px] sm:max-w-[140px]">
                    {event.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center mt-12"
        >
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Times are approximate — the most important part is celebrating together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DayProgramSection;