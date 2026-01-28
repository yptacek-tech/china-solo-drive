import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isHeroPage = isHomePage || location.pathname === "/jak-ridit-v-cine";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/jak-ridit-v-cine", label: "Jak řídit v Číně", isRoute: true },
    { href: isHomePage ? "#jak-to-funguje" : "/#jak-to-funguje", label: "Jak to funguje", isRoute: false },
    { href: isHomePage ? "#balicek" : "/#balicek", label: "Co obsahuje služba", isRoute: false },
    { href: isHomePage ? "#faq" : "/#faq", label: "FAQ", isRoute: false },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHeroPage
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className={`text-xl md:text-2xl font-bold transition-colors ${
              isScrolled || !isHeroPage ? "text-foreground" : "text-primary-foreground"
            }`}>
              Čína Solo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-action ${
                    isScrolled || !isHeroPage ? "text-foreground" : "text-primary-foreground/90"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-action ${
                    isScrolled || !isHeroPage ? "text-foreground" : "text-primary-foreground/90"
                  }`}
                >
                  {link.label}
                </a>
              )
            ))}
            <Button variant="nav" size="default" asChild>
              <a href={isHomePage ? "#balicek" : "/#balicek"}>Objednat překlad</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled || !isHeroPage ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground font-medium py-2 hover:text-action transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground font-medium py-2 hover:text-action transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <Button variant="action" size="lg" className="w-full" asChild>
                <a href={isHomePage ? "#balicek" : "/#balicek"} onClick={() => setIsMobileMenuOpen(false)}>
                  Objednat překlad
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
