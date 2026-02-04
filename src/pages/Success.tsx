import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Success = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container max-w-lg mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Success Icon */}
            <div className="mb-8">
              <div 
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-success/20"
                style={{
                  boxShadow: "0 0 30px hsla(var(--success), 0.3), 0 0 60px hsla(var(--success), 0.1)"
                }}
              >
                <CheckCircle className="w-12 h-12 text-success" />
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Děkujeme za objednávku!
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Vaše platba byla úspěšně zpracována. Na váš e-mail jsme zaslali potvrzení objednávky 
              s dalšími instrukcemi.
            </p>

            {/* Next Steps Card */}
            <div className="bg-card border border-border rounded-xl p-6 mb-8 text-left">
              <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-action" />
                Co bude následovat?
              </h2>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-action/20 text-action text-sm font-bold shrink-0">1</span>
                  <span>Zkontrolujte svůj e-mail pro instrukce k odeslání skenu řidičského průkazu.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-action/20 text-action text-sm font-bold shrink-0">2</span>
                  <span>Odešlete sken řidičáku na uvedenou adresu.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-action/20 text-action text-sm font-bold shrink-0">3</span>
                  <span>Do 1–2 dnů obdržíte překlad připravený k tisku nebo odeslání.</span>
                </li>
              </ol>
            </div>

            {/* Back Button */}
            <Button variant="outline" asChild>
              <Link to="/" className="inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Zpět na úvodní stránku
              </Link>
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Success;
