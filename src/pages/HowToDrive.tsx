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
  Building2,
  ArrowLeft,
  Car,
  BadgeCheck
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
              Zpět na úvodní stránku
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Řízení motorových vozidel v Číně
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Komplexní přehled legislativních požadavků pro české státní příslušníky
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
                Mezinárodní řidičský průkaz vydaný českými úřady <strong>není v Číně platný</strong>. 
                Čínská lidová republika není signatářem Vídeňské ani Ženevské úmluvy o silničním provozu.
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
                Typy řidičských oprávnění pro cizí státní příslušníky
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
                        临时机动车驾驶许可 (Línshí jīdòngchē jiàshǐ xǔkě)
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-action/5 border border-action/20 rounded-xl p-4 mb-6">
                    <p className="text-action font-semibold text-center">
                      Doporučená varianta pro turisty a krátkodobé návštěvy
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Oprávněné osoby:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                          Držitelé turistického víza (typ L)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                          Držitelé obchodního víza (typ M)
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Doba platnosti:</h4>
                      <p className="text-muted-foreground">
                        Maximálně <strong>90 dní</strong>, případně do konce platnosti víza
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-xl">
                    <h4 className="font-semibold text-success mb-2 flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5" />
                      Bez zkoušek
                    </h4>
                    <p className="text-muted-foreground">
                      Pro vydání dočasného povolení není vyžadována teoretická ani praktická zkouška.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-foreground mb-3">Omezení:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-1" />
                        Oprávnění platí pouze pro osobní automobily kategorie C1 a C2
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-1" />
                        Neopravňuje k řízení nákladních vozidel ani autobusů
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-warning-foreground flex-shrink-0 mt-1" />
                        Povinnost mít při řízení u sebe pas a originál českého řidičského průkazu
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
                        2. Trvalé čínské řidičské oprávnění
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Permanent Chinese License
                      </p>
                      <p className="text-primary/70 text-sm font-medium mt-1">
                        机动车驾驶证 (Jīdòngchē jiàshǐzhèng)
                      </p>
                    </div>
                  </div>

                  <div className="bg-muted border border-border rounded-xl p-4 mb-6">
                    <p className="text-muted-foreground font-medium text-center">
                      Určeno výhradně pro osoby s dlouhodobým pobytem
                    </p>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong>Oprávněné osoby:</strong> Cizinci s povolením k pobytu (Residence Permit) – studenti, zaměstnanci.
                    </p>
                    <p>
                      <strong>Požadavky:</strong> Úspěšné složení teoretické zkoušky z pravidel silničního provozu.
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
                Požadované dokumenty
              </h2>
              
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                <p className="text-muted-foreground mb-6">
                  Pro vydání dočasného povolení k řízení je nutné předložit následující dokumenty:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <FileText className="w-6 h-6 text-action flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Cestovní pas</h4>
                      <p className="text-muted-foreground text-sm">
                        S platným vízem nebo vstupním razítkem v rámci bezvízového styku
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <FileText className="w-6 h-6 text-action flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Originál českého řidičského průkazu</h4>
                      <p className="text-muted-foreground text-sm">
                        Platný řidičský průkaz vydaný příslušným českým úřadem
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-action/10 border border-action/20 rounded-xl">
                    <FileText className="w-6 h-6 text-action flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Úřední překlad řidičského průkazu</h4>
                      <p className="text-muted-foreground text-sm">
                        Překlad do čínského jazyka vyhotovený certifikovanou čínskou překladatelskou agenturou — <strong>zajišťujeme v rámci našich služeb</strong>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <Camera className="w-6 h-6 text-action flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Průkazové fotografie</h4>
                      <p className="text-muted-foreground text-sm">
                        3 kusy, rozměr 1 palec (25 × 35 mm), bílé pozadí
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
                Místo vyřízení
              </h2>
              
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                <p className="text-muted-foreground mb-6">
                  Žádost se podává osobně na <strong>Oddělení správy motorových vozidel</strong> (Vehicle Management Office)
                </p>
                <p className="text-primary/70 font-medium mb-8">
                  车管所 (Chē guǎn suǒ)
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <Building2 className="w-6 h-6 text-action flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Mezinárodní letiště</h4>
                      <p className="text-muted-foreground text-sm">
                        Na letištích Beijing Capital, Beijing Daxing a Shanghai Pudong jsou k dispozici 
                        přepážky přímo v příletové hale. Doba vyřízení je přibližně <strong>60 minut</strong>.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <MapPin className="w-6 h-6 text-action flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Městské pobočky</h4>
                      <p className="text-muted-foreground text-sm">
                        Oddělení správy vozidel se nachází v každém větším čínském městě.
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
                Průběh vydání povolení
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-action text-action-foreground flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Podání žádosti</h4>
                    <p className="text-muted-foreground">
                      Předložení cestovního pasu a úředního překladu řidičského průkazu.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-success/10 border border-success/20 rounded-2xl">
                  <div className="w-10 h-10 rounded-full bg-success text-success-foreground flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Ověření bez zkoušek</h4>
                    <p className="text-muted-foreground">
                      Pro kategorii osobních automobilů (C1) není vyžadována žádná teoretická 
                      ani praktická zkouška.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-action text-action-foreground flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Vydání oprávnění</h4>
                    <p className="text-muted-foreground">
                      Po kontrole dokumentů úředník vytiskne povolení a připojí průkazovou fotografii.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Platnost oprávnění</h4>
                    <p className="text-muted-foreground">
                      Dočasné povolení je platné po dobu trvání víza, maximálně však 90 dní.
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
                Potřebujete zajistit úřední překlad?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
                Zajistíme vyhotovení certifikovaného překladu prostřednictvím čínské překladatelské 
                agentury včetně doručení na adresu v České republice.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="https://buy.stripe.com/6oU00k3TQ2lT8oP7Hl5gc00">
                  Objednat službu — 999 Kč
                </a>
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
