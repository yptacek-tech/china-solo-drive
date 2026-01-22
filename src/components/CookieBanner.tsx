import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const { hasMadeChoice, acceptCookies, declineCookies } = useCookieConsent();

  return (
    <AnimatePresence>
      {!hasMadeChoice && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-border shadow-lg"
        >
          <div className="container max-w-4xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-muted-foreground text-center md:text-left">
                <p>
                  Tento web používá cookies pro analýzu návštěvnosti. Kliknutím na „Přijmout" souhlasíte s jejich použitím.{" "}
                  <Link to="/obchodni-podminky" className="underline hover:text-foreground">
                    Více informací
                  </Link>
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={declineCookies}
                  className="min-w-[100px]"
                >
                  Odmítnout
                </Button>
                <Button
                  size="sm"
                  onClick={acceptCookies}
                  className="min-w-[100px]"
                >
                  Přijmout
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
