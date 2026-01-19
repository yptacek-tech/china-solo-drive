import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  AlertTriangle, 
  FileText, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Camera, 
  MapPin, 
  Plane,
  ArrowLeft,
  Car
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HowToDrive = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Zpět na hlavní stránku
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Jak legálně řídit v Číně jako turista?
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Kompletní průvodce pro české řidiče plánující roadtrip v Číně
            </p>
          </motion.div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-8 bg-warning/20 border-y border-warning/30">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <AlertTriangle className="w-8 h-8 text-warning-foreground flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-bold text-warning-foreground mb-2">
                Důležité upozornění
              </h2>
              <p className="text-warning-foreground/90">
                Jakýkoli <strong>mezinárodní řidičský průkaz</strong>, který vydávají české úřady, 
                je v Číně <strong>neplatný</strong>. Čína není signatářem žádné z mezinárodních úmluv 
                o silničním provozu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-16">
            
            {/* License Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                Druhy řidičáků pro cizince v Číně
              </h2>
              
              <div className="space-y-8">
                {/* Temporary Permit */}
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-action/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-action" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        1. Dočasné povolení k řízení
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Temporary Driving Permit
                      </p>
                      <p className="text-primary/70 text-sm font-medium mt-1">
                        🇨🇳 临时机动车驾驶许可 (Línshí jīdòngchē jiàshǐ xǔkě)
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-action/5 border border-action/20 rounded-xl p-4 mb-6">
                    <p className="text-action font-semibold text-center">
                      ✨ Tohle je tvůj "chleba". Jediná možnost pro turisty na krátké návštěvě.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Pro koho:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                          Turisté (vízum L)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                          Obchodní cestující (vízum M)
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Platnost:</h4>
                      <p className="text-muted-foreground">
                        Max. <strong>90 dní</strong> (nebo do konce platnosti víza, pokud je kratší)
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-xl">
                    <h4 className="font-semibold text-success mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Zkoušky: ŽÁDNÉ
                    </h4>
                    <p className="text-muted-foreground">
                      Není třeba dělat testy ani jízdy. To je hlavní výhoda tohoto povolení.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-foreground mb-3">Omezení:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-1" />
                        Platí pouze pro malé osobní automobily (C1) nebo automaty (C2)
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-1" />
                        S tímto papírem nemůžeš řídit kamion ani autobus
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-warning-foreground flex-shrink-0 mt-1" />
                        Musíš ho vozit s sebou spolu s pasem a českým řidičákem
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Permanent License */}
                <div className="bg-muted/30 border border-border rounded-2xl p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                      <Car className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        2. Trvalý čínský řidičák
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Permanent Chinese License
                      </p>
                      <p className="text-primary/70 text-sm font-medium mt-1">
                        🇨🇳 机动车驾驶证 (Jīdòngchē jiàshǐzhèng)
                      </p>
                    </div>
                  </div>

                  <div className="bg-muted border border-border rounded-xl p-4 mb-6">
                    <p className="text-muted-foreground font-medium text-center">
                      ⚠️ Tohle pro turisty není relevantní
                    </p>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong>Pro koho:</strong> Cizinci s dlouhodobým pobytem (Residence Permit) – studenti, pracující expati.
                    </p>
                    <p>
                      <strong>Zkoušky:</strong> ANO. Musí složit teoretický test.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                Co musí mít turista u sebe?
              </h2>
              
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                <p className="text-muted-foreground mb-6">
                  Aby úředník na přepážce povolení vydal, turista musí předložit:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <FileText className="w-6 h-6 text-action flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Cestovní pas</h4>
                      <p className="text-muted-foreground text-sm">
                        S platným vízem nebo vstupním razítkem u bezvízového styku
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <FileText className="w-6 h-6 text-action flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Originál českého řidičského průkazu</h4>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-action/10 border border-action/20 rounded-xl">
                    <FileText className="w-6 h-6 text-action flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Úřední překlad řidičáku do čínštiny</h4>
                      <p className="text-muted-foreground text-sm">
                        Od certifikované čínské překladatelské agentury – <strong>tohle za tebe zařídíme</strong>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <Camera className="w-6 h-6 text-action flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">3× Barevná fotografie</h4>
                      <p className="text-muted-foreground text-sm">
                        Velikost 1 palec, bílé pozadí
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Where to go */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                Kam jít? Návštěva dopravní policie
              </h2>
              
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                <p className="text-muted-foreground mb-6">
                  Turista musí fyzicky navštívit <strong>dopravní policii, oddělení správy vozidel</strong>
                </p>
                <p className="text-primary/70 font-medium mb-8">
                  🇨🇳 Che Guan Suo - 车管所
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <Plane className="w-6 h-6 text-action flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">V Pekingu/Šanghaji (Na letišti)</h4>
                      <p className="text-muted-foreground text-sm">
                        Na velkých letištích (Beijing Capital, Daxing, Shanghai Pudong) jsou tyto přepážky 
                        přímo v příletové hale. Celý proces tam trvá cca <strong>1 hodinu</strong>.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <MapPin className="w-6 h-6 text-action flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Ve městě</h4>
                      <p className="text-muted-foreground text-sm">
                        V každém větším městě je tato stanice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                Jak probíhá vydání?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-action text-action-foreground flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Registrace</h4>
                    <p className="text-muted-foreground">
                      Předložíš pas a překlad řidičáku.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-success/10 border border-success/20 rounded-2xl">
                  <div className="w-10 h-10 rounded-full bg-success text-success-foreground flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Žádné testy!</h4>
                    <p className="text-muted-foreground">
                      Pro auta (kategorie C1) a motorky se nedělají žádné písemné testy ani jízdy, 
                      pokud jde o dočasné povolení.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-action text-action-foreground flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Vydání</h4>
                    <p className="text-muted-foreground">
                      Úředník data zkontroluje, vytiskne malou kartičku (povolení) a nalepí tam fotku.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Platnost</h4>
                    <p className="text-muted-foreground">
                      Povolení platí po dobu platnosti víza (max 90 dní).
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Potřebuješ úřední překlad?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
                Zařídíme ti certifikovaný překlad od čínské agentury a doručíme ho až k tobě domů.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/#pricing">
                  Objednat překlad za 1500 Kč
                </Link>
              </Button>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowToDrive;
