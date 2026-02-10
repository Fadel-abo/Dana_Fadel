import { motion } from "framer-motion";

const DressCodeSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-cream texture-overlay">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-5xl text-foreground mb-4">
            Dress Code
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We’d love for everyone to look and feel their best. Think{" "}
            <span className="text-foreground">chic, elegant, and polished</span>{" "}
            — perfect for an evening of celebration, photos, and dancing.
          </p>
          <div className="w-12 h-px bg-sage mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.0 }}
            className="bg-card rounded-2xl shadow-lg border border-border p-8 text-center"
          >
            <h3 className="font-serif text-2xl text-foreground mb-3">For Her</h3>
            <div className="w-8 h-px bg-gold mx-auto mb-4" />
            <p className="font-body text-muted-foreground leading-relaxed">
              Elegant dress, cocktail dress, or a refined jumpsuit — anything that
              feels festive and sophisticated.
            </p>
            <p className="font-body text-muted-foreground mt-4 leading-relaxed">
              Soft tones and classic accessories are always a beautiful choice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card rounded-2xl shadow-lg border border-border p-8 text-center"
          >
            <h3 className="font-serif text-2xl text-foreground mb-3">For Him</h3>
            <div className="w-8 h-px bg-gold mx-auto mb-4" />
            <p className="font-body text-muted-foreground leading-relaxed">
              Suit or blazer with tailored trousers — smart and well-fitted for a
              timeless look.
            </p>
            <p className="font-body text-muted-foreground mt-4 leading-relaxed">
              A crisp shirt, polished shoes, and subtle details complete the style.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-10"
        >
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Most importantly: wear something you’re comfortable in — we’ll be
            celebrating, eating, and dancing throughout the evening.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DressCodeSection;