import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 md:py-12 bg-primary text-primary-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">Čína Solo</p>
            <p className="text-sm text-primary-foreground/70 mt-1">
              © 2026 Čína Solo. Vaše brána k roadtripům v Asii.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
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
            <a
              href="mailto:info@cinasolo.cz"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
