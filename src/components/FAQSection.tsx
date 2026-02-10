import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I drive my own car?",
    answer:
      "Yes, you are welcome to drive to the venue. There is parking available at Schloss Aumühle. Please drive carefully on the approach roads.",
  },
  {
    question: "Can children attend?",
    answer:
      "With love in our hearts, we invite you and your little ones to share in the joy of our celebration. Having your whole family with us will make this day even more meaningful.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-sage-light texture-overlay">
      <div className="container max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-5xl text-foreground mb-4">
            Important Information
          </h2>
          <div className="w-12 h-px bg-sage mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-2xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="font-serif text-lg text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
