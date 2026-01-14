import { motion } from "framer-motion";
import { ShoppingCart, Mail, Package } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    step: "1",
    title: "Objednáte balíček",
    description:
      "Vyplníte doručovací adresu a zaplatíte kartou. Žádné složité formuláře.",
  },
  {
    icon: Mail,
    step: "2",
    title: "Odešlete data",
    description:
      "Sken řidičáku pošlete e-mailem PŘÍMO naší partnerské agentuře v Číně. Vaše citlivá data nevidíme = 100% GDPR Safe.",
  },
  {
    icon: Package,
    step: "3",
    title: "Převezmete zásilku",
    description:
      "Oficiální dokument s mokrým razítkem vám doručíme DHL/SF Expressem až ke dveřím.",
  },
];

const HowItWorks = () => {
  return (
    <section id="jak-to-funguje" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Jak to funguje?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Bezpečně a jednoduše. Ve třech krocích.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-border" />
              )}

              <div className="relative bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-6 md:left-8">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-action text-action-foreground text-sm font-bold">
                    {item.step}
                  </span>
                </div>

                {/* Icon */}
                <div className="mt-4 mb-5 flex items-center justify-center w-14 h-14 rounded-lg bg-secondary">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
