import { Link } from "react-router-dom";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const Footer = () => {
  const { openSettings } = useCookieConsent();
  return (
    <footer className="py-6 sm:py-8 md:py-10 bg-primary text-primary-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5 md:gap-6">
          <div className="text-center md:text-left">
            <p className="font-semibold text-base sm:text-lg">Čína Solo</p>
            <p className="text-xs sm:text-sm text-primary-foreground/70 mt-1">
              © 2026 Čína Solo · Jan Ptáček · IČO 24398489
            </p>
          </div>

          <p className="max-w-sm text-center md:text-left text-xs sm:text-sm text-primary-foreground/80">
            Know-how a koordinace překladu u čínské agentury.
            Skeny dokladů zasíláte přímo agentuře.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6 text-xs sm:text-sm">
            <Link
              to="/obchodni-podminky"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Obchodní podmínky
            </Link>
            <Link
              to="/ochrana-osobnich-udaju"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Ochrana osobních údajů
            </Link>
            <Link
              to="/kontakt"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Kontakt
            </Link>
            <button type="button" onClick={openSettings} className="text-primary-foreground/80 hover:text-primary-foreground underline">
              Nastavení cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
