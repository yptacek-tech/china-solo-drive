import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DELIVERY_CHECKOUTS, type DeliveryRegion } from "@/lib/stripe";
import { SERVICE_PRICE_CZK } from "@/lib/service";
import { Link } from "react-router-dom";

const features = [
  "Praktický průvodce a instrukce pro přípravu na cestu",
  "Náklady na překlad průkazu a podkladů ke kategoriím oprávnění u čínské agentury",
  "Komunikace s agenturou a úhrada její práce z vaší platby",
  "Koordinace doručení do ČR nebo na adresu v Číně",
];

const PricingSection = () => {
  const [deliveryRegion, setDeliveryRegion] = useState<DeliveryRegion>("CZ");
  const checkout = DELIVERY_CHECKOUTS[deliveryRegion];
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
                Průvodce a koordinace překladu
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
                Jedna platba za know-how, koordinaci a překlad agenturou. Zvolte zemi doručení; konkrétní způsob dopravy potvrdíte při platbě.
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
                Platbu za balíček přijímá Čína Solo a z ní hradí překlad agentuře.
                Skeny dokladů posíláte přímo agentuře. Podání žádosti, vydání
                řidičského oprávnění ani správní poplatky nejsou součástí ceny.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Před objednávkou si přečtěte{" "}
                <Link to="/obchodni-podminky" className="underline">obchodní podmínky</Link>{" "}
                a{" "}
                <Link to="/ochrana-osobnich-udaju" className="underline">informace o osobních údajích</Link>.
              </p>

              <fieldset className="mt-8">
                <legend className="font-semibold text-foreground mb-3">Kam má překlad dorazit?</legend>
                <div className="grid gap-3">
                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-4">
                    <input type="radio" name="delivery-region" value="CZ" checked={deliveryRegion === "CZ"}
                      onChange={() => setDeliveryRegion("CZ")} className="mt-1" />
                    <span className="text-sm"><strong>Doručení do ČR</strong>
                      <span className="block mt-1 text-muted-foreground">Standardní nebo expresní doprava na českou adresu.</span></span>
                  </label>
                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-4">
                    <input type="radio" name="delivery-region" value="CN" checked={deliveryRegion === "CN"}
                      onChange={() => setDeliveryRegion("CN")} className="mt-1" />
                    <span className="text-sm"><strong>Doručení v Číně</strong>
                      <span className="block mt-1 text-muted-foreground">Doprava zdarma na čínskou adresu, například do hotelu.</span></span>
                  </label>
                </div>
              </fieldset>
              <p className="mt-4 text-sm font-semibold text-foreground" aria-live="polite">
                {deliveryRegion === "CZ" ? "Celkem od " : "Celkem "}
                {checkout.minimumTotalCzk.toLocaleString("cs-CZ")} Kč
                {deliveryRegion === "CZ" ? " včetně standardní dopravy." : " včetně dopravy po Číně."}
              </p>

              {/* CTA */}
              <Button
                variant="action"
                size="xl"
                className="w-full mt-10"
                asChild
              >
                <a href={checkout.url}>Objednat balíček</a>
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
