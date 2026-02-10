import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/place/Schloss+Aum%C3%BChle/@48.2889015,15.8918388,17z/data=!3m1!4b1!4m6!3m5!1s0x476d79b02a33080b:0xd8f4869e9fa29cd4!8m2!3d48.2889015!4d15.8944137!16s%2Fg%2F11l5pyx00t";

const LocationSection = () => {
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
            Location
          </h2>
          <div className="w-12 h-px bg-sage mx-auto mb-6" />
          <p className="font-body text-muted-foreground text-lg">
            Schloss Aumühle, Atzenbrugg
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border"
        >
          <div className="aspect-[16/10] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.5!2d15.8918388!3d48.2889015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d79b02a33080b%3A0xd8f4869e9fa29cd4!2sSchloss%20Aum%C3%BChle!5e0!3m2!1sen!2sat!4v1700000000000!5m2!1sen!2sat"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Schloss Aumühle location"
            />
          </div>
          <div className="p-6 text-center">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-sage text-primary-foreground font-sans text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              <MapPin size={16} />
              Open in Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
