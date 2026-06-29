import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const WarningSection = () => {
  return (
    <section className="py-6 md:py-8 bg-warning">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-3 sm:gap-4 md:gap-6"
        >
          <div className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-warning-foreground/10 shrink-0">
            <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-warning-foreground" />
          </div>
          <p className="text-warning-foreground font-medium text-sm sm:text-base md:text-lg">
            <span className="font-bold">Pozor:</span> V Číně vám půjčovny auto
            bez místního řidičského průkazu nevydají. Policie neuznává
            mezinárodní řidičské průkazy (IDP).
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WarningSection;
