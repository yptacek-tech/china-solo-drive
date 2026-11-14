import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STRIPE_CHECKOUT_URL } from "@/lib/stripe";
import { SERVICE_PRICE_CZK } from "@/lib/service";
import { Link } from "react-router-dom";

const features = [
  "Vyhotovení překladu partnerskou překladatelskou agenturou v Číně",
  "Překlad evropské legislativy specifikující typy držených řidičských oprávnění",
  "Průvodce řízením v Číně (administrativní proces, specifika řízení, jak na půjčení auta)",
  "Koordinace objednávky, platby a dopravy překladu",
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Co si objednáváte?
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

            <div className="p-5 sm:p-6 md:p-8">
              {/* Header */}
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                Zprostředkování překladu do čínštiny
              </h3>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-foreground">
                  {SERVICE_PRICE_CZK.toLocaleString("cs-CZ")}
                </span>
                <span className="text-lg sm:text-xl font-semibold text-muted-foreground">
                  Kč
                </span>
              </div>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                Cena zahrnuje překlad, zprostředkování a průvodce. Dopravu zvolíte při platbě.
              </p>

              {/* Divider */}
              <div className="my-6 sm:my-8 h-px bg-border" />

              {/* Features */}
              <ul className="space-y-3 sm:space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-success/20 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-success" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl bg-secondary/60 p-4 text-sm text-foreground">
                <h4 className="font-semibold mb-3">Doručení a celková cena</h4>
                <table className="w-full text-left">
                  <caption className="sr-only">Cena služby včetně zvoleného doručení</caption>
                  <thead>
                    <tr className="border-b border-border">
                      <th scope="col" className="pb-2 font-medium">Doručení</th>
                      <th scope="col" className="pb-2 text-right font-medium">Celkem</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="pt-3">Po Číně (+ 0 Kč)</td><td className="pt-3 text-right whitespace-nowrap">1 399 Kč</td></tr>
                    <tr><td className="pt-3">ČR standard (+ 1 190 Kč)</td><td className="pt-3 text-right whitespace-nowrap">2 589 Kč</td></tr>
                    <tr><td className="pt-3">ČR expres (+ 1 780 Kč)</td><td className="pt-3 text-right whitespace-nowrap">3 179 Kč</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                Překlad vyhotovuje čínská agentura. Čína Solo je soukromý
                zprostředkovatel objednávky a doručení. Podání žádosti, vydání
                řidičského oprávnění ani správní poplatky nejsou součástí ceny.
                Přijetí překladu úřadem není zaručeno.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Před objednávkou si přečtěte{" "}
                <Link to="/obchodni-podminky" className="underline">obchodní podmínky</Link>{" "}
                a{" "}
                <Link to="/ochrana-osobnich-udaju" className="underline">informace o osobních údajích</Link>.
              </p>

              {/* CTA */}
              <Button
                variant="action"
                size="xl"
                className="w-full mt-10"
                asChild
              >
                <a href={STRIPE_CHECKOUT_URL}>Objednat překlad</a>
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
