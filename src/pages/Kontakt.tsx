import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[600px] mx-auto text-center"
          >
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Kontakt
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg text-muted-foreground mb-12">
              Potřebujete poradit s řidičským oprávněním? Napište nám.
            </p>

            {/* Primary Action - Email Card */}
            <motion.a
              href="mailto:info@cinasolo.cz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group block bg-card border-2 border-action/20 hover:border-action rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-action/10 flex items-center justify-center group-hover:bg-action/20 transition-colors">
                  <Mail className="w-8 h-8 md:w-10 md:h-10 text-action" />
                </div>
                <span className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-action transition-colors">
                  info@cinasolo.cz
                </span>
                <span className="text-sm text-muted-foreground">
                  Klikněte pro odeslání e-mailu
                </span>
              </div>
            </motion.a>

            {/* Secondary Action - FAQ Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mb-16"
            >
              <Link
                to="/#faq"
                className="inline-flex items-center gap-2 text-action hover:text-action/80 font-medium transition-colors group"
              >
                Přejít na Časté dotazy (FAQ)
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Business Details Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="pt-8 border-t border-border"
            >
              <div className="text-xs md:text-sm text-muted-foreground space-y-1">
                <p>Provozovatel: Jan Ptáček</p>
                <p>IČO: 24398489</p>
                <p>Sídlo: Nad Okrouhlíkem 2372/14, 182 00 Praha, Česká republika</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;
