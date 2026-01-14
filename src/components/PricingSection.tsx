import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Úřední překlad uznávaný čínskou policií",
  "Expresní mezinárodní doprava z Číny do ČR",
  'PDF Průvodce "Jak na čínské úřady" (mapy, fráze)',
  "Prioritní podpora na e-mailu",
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
            Co obsahuje balíček
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Vše, co potřebujete pro legální jízdu v Číně
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative bg-card rounded-2xl border-2 border-action shadow-xl overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0">
              <div className="bg-action text-action-foreground text-xs font-bold px-4 py-1.5 rounded-bl-lg flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Nejoblíbenější
              </div>
            </div>

            <div className="p-8 md:p-10">
              {/* Header */}
              <h3 className="text-xl font-semibold text-foreground">
                Startovní balíček Čína Solo
              </h3>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-extrabold text-foreground">
                  1500
                </span>
                <span className="text-2xl font-semibold text-muted-foreground">
                  Kč
                </span>
              </div>
              <p className="mt-2 text-muted-foreground">jednorázově</p>

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
                <a href="#stripe">Koupit a vyrazit</a>
              </Button>

              {/* Trust */}
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Bezpečná platba kartou • Garance vrácení peněz
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
