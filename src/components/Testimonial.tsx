import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-action/10">
              <Quote className="w-7 h-7 text-action" />
            </div>
          </div>

          <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
            "Díky Čína Solo jsme projeli Yunnan bez problémů. V půjčovně v
            Kunmingu dokument hned uznali."
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-lg font-semibold text-foreground">PN</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Petr N.</p>
              <p className="text-sm text-muted-foreground">Praha</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
