import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Certifikovaný překlad uznávaný čínskou policií",
  "Překlad evropské legislativy specifikující typy držených řidičských oprávnění",
  "Průvodce řízením v Číně (administrativní proces, specifika řízení, jak na půjčení auta)",
  "Podpora při vyhledání správného úřadu v místě Vašeho pobytu a při doručení překladu do hotelu",
];

const PricingSection = () => {
  return (
    <section id="balicek" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Co obsahuje naše služba?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative bg-card rounded-2xl border-2 border-action shadow-xl overflow-hidden">

            <div className="p-8 md:p-10">
              {/* Header */}
              <h3 className="text-xl font-semibold text-foreground">
                Překlad řidičského průkazu
              </h3>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-extrabold text-foreground">
                  999
                </span>
                <span className="text-2xl font-semibold text-muted-foreground">
                  Kč
                </span>
              </div>
              <p className="mt-2 text-muted-foreground">+ doprava</p>

              {/* Divider */}
              <div className="my-8 h-px bg-border" />

              {/* Features */}
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-success/20 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-success" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant="action"
                size="xl"
                className="w-full mt-10"
                asChild
              >
                <a href="https://buy.stripe.com/6oU00k3TQ2lT8oP7Hl5gc00">Koupit a vyrazit</a>
              </Button>

              {/* Trust */}
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Bezpečná platba kartou
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
