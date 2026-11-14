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
            className="text-center mt-12"
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
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Další kroky k vaší objednávce
            </h1>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Po potvrzení platby vám pošleme průvodce a instrukce k přímému kontaktu s agenturou. Samotné zobrazení této stránky nepotvrzuje úhradu.
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
                  <span>Vyčkejte na potvrzení platby a instrukce e-mailem. Pokud potvrzení nedorazí, napište na info@cinasolo.cz bez příloh s doklady.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-action/20 text-action text-sm font-bold shrink-0">2</span>
                  <span>Potřebné podklady odešlete přímo agentuře na adresu v instrukcích, nikoli na kontaktní e-mail Čína Solo.</span>
                </li>
              </ol>
            </div>

            <p className="mb-8 text-sm text-muted-foreground">
              Objednávka se týká překladu a zprostředkování. Nejde o žádost
              o řidičské oprávnění ani o potvrzení jeho vydání.
            </p>

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
