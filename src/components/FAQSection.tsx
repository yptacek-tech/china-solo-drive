import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Musím dělat v Číně autoškolu?",
    answer:
      "Ne. Pro dočasné povolení (max 90 dní) stačí náš překlad a návštěva úřadu pro registraci. Žádné zkoušky ani jízdy.",
  },
  {
    question: "Jak dlouho trvá doručení?",
    answer:
      "Obvykle 7-10 pracovních dní od odeslání skenu vašeho řidičského průkazu. Používáme expresní kurýry DHL a SF Express.",
  },
  {
    question: "Co když mi zamítnou vydání?",
    answer:
      "Pokud máte platné vízum a český řidičák, je zamítnutí extrémně vzácné. Vydání povolení závisí na rozhodnutí čínských úřadů.",
  },
  {
    question: "Platí povolení v celé Číně?",
    answer:
      "Ano, dočasné povolení k řízení platí na celém území Čínské lidové republiky po dobu 90 dní od vydání.",
  },
  {
    question: "Co potřebuji k objednávce?",
    answer:
      "Platný český řidičský průkaz, platné čínské vízum (nebo potvrzení o jeho vyřízení) a doručovací adresu v ČR.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Často kladené dotazy
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Odpovědi na nejčastější otázky našich zákazníků
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.answer}
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
