import { motion } from "framer-motion";
import { Gift } from "lucide-react";

const GiftsSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-cream texture-overlay">
      <div className="container max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl sm:text-5xl text-foreground mb-4">
            Gifts
          </h2>
          <div className="w-12 h-px bg-sage mx-auto mb-12" />

          <div className="bg-card rounded-2xl shadow-lg border border-border p-8 sm:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-sage-light mx-auto mb-6 flex items-center justify-center">
              <Gift size={28} className="text-sage" />
            </div>
            <p className="font-body text-foreground leading-relaxed mb-4">
              Your presence at our engagement celebration is the greatest gift we could ask for.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              If you wish to honor us with a gift, a contribution towards our future together would be deeply appreciated.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftsSection;
