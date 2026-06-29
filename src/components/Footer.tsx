import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 md:py-10 bg-primary text-primary-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5 md:gap-6">
          <div className="text-center md:text-left">
            <p className="font-semibold text-base sm:text-lg">Čína Solo</p>
            <p className="text-xs sm:text-sm text-primary-foreground/70 mt-1">
              © 2026 Čína Solo. Vaše brána k roadtripům v Asii.
            </p>
          </div>

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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
