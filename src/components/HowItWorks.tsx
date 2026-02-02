import { motion } from "framer-motion";
import { CreditCard, Mail, Plane } from "lucide-react";

const steps = [
  {
    icon: CreditCard,
    step: "1",
    title: "Objednání na 2 kliknutí",
    description:
      "Vyberete doručení, zaplatíte kartou. Žádné zbytečné papírování.",
  },
  {
    icon: Mail,
    step: "2",
    title: "Odešlete sken řidičského průkazu",
    description:
      "Sken řidičáku zašlete přímo naší partnerské agentuře v Číně, my se postaráme o zbytek. Vaše data neukládáme.",
  },
  {
    icon: Plane,
    step: "3",
    title: "Expresní doručení",
    description:
      'Oficiální dokument s "mokrým razítkem" vám přistane ve schránce a Vy jste připraveni vyrazit na cestu. (Překlad můžeme zaslat kamkoli, včetně Vašeho hotelu v Číně).',
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

        {/* Steps Container with Gradient Line */}
        <div className="relative">
          {/* Gradient Connector Line - Desktop */}
          <div 
            className="hidden md:block absolute top-14 left-[16.67%] right-[16.67%] h-1 rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(var(--action)) 0%, hsl(25, 95%, 53%) 50%, hsl(0, 84%, 60%) 100%)",
              boxShadow: "0 0 20px hsla(var(--action), 0.4), 0 0 40px hsla(var(--action), 0.2)"
            }}
          />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="relative bg-card rounded-xl p-6 md:p-8 border-2 border-border shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-action group-hover:shadow-xl group-hover:shadow-action/10">
                  {/* Step Number Badge with Glow */}
                  <div className="absolute -top-4 left-6 md:left-8">
                    <span 
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-action text-action-foreground text-sm font-bold transition-all duration-300 group-hover:scale-110"
                      style={{
                        boxShadow: "0 0 15px hsla(var(--action), 0.5), 0 0 30px hsla(var(--action), 0.3), 0 0 45px hsla(var(--action), 0.1)"
                      }}
                    >
                      {item.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mt-4 mb-5 flex items-center justify-center w-14 h-14 rounded-lg bg-secondary transition-all duration-300 group-hover:bg-action/10">
                    <item.icon className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-action" />
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
      </div>
    </section>
  );
};

export default HowItWorks;
