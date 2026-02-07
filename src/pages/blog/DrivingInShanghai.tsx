import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Jak si pronajmout auto v Šanghaji",
  description:
    "Praktický průvodce pronájmem vozidla v Šanghaji. Tipy na půjčovny, pojištění a dokumenty potřebné pro řízení v Číně.",
  datePublished: "2026-02-07",
  author: {
    "@type": "Organization",
    name: "CinaSolo.cz",
  },
};

const DrivingInShanghai = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Jak si pronajmout auto v Šanghaji | Blog | CinaSolo.cz"
        description="Praktický průvodce pronájmem vozidla v Šanghaji. Tipy na půjčovny, pojištění a dokumenty potřebné pro řízení v Číně."
        schema={articleSchema}
      />
      <Navbar />

      <main className="pt-24 pb-16">
        <article className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/blog">
              <Button variant="ghost" className="mb-6 -ml-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zpět na blog
              </Button>
            </Link>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <time dateTime="2026-02-07">7. února 2026</time>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Jak si pronajmout auto v Šanghaji
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Šanghaj je fascinující metropole, kterou lze nejlépe prozkoumat
                vlastním tempem. Pronájem auta vám dá svobodu navštívit místa
                mimo turistické trasy. Zde je vše, co potřebujete vědět.
              </p>

              <h2>Než vyrazíte na cestu</h2>
              <p>
                Před pronájmem auta v Šanghaji je nezbytné mít platné dočasné
                řidičské oprávnění pro Čínu. Mezinárodní řidičský průkaz zde
                bohužel neplatí – Čína nepodepsala příslušné mezinárodní
                úmluvy. Nejprve si tedy zajistěte úředně ověřený překlad vašeho
                českého řidičáku, který vám umožní získat čínské dočasné
                povolení.
              </p>

              <h2>Kde si pronajmout auto</h2>
              <p>
                V Šanghaji funguje několik mezinárodních i lokálních půjčoven.
                Mezi nejoblíbenější patří:
              </p>
              <ul>
                <li>
                  <strong>Avis a Hertz</strong> – mezinárodní značky s pobočkami
                  na letišti Pudong i Hongqiao
                </li>
                <li>
                  <strong>eHi Car Rental</strong> – největší čínská půjčovna s
                  širokou nabídkou vozidel
                </li>
                <li>
                  <strong>CAR Inc.</strong> – populární lokální alternativa s
                  konkurenceschopnými cenami
                </li>
              </ul>

              <h2>Co budete potřebovat</h2>
              <p>Při vyzvednutí auta mějte připraveno:</p>
              <ul>
                <li>Platný cestovní pas</li>
                <li>Čínské dočasné řidičské oprávnění</li>
                <li>Český řidičský průkaz (originál)</li>
                <li>Mezinárodní kreditní kartu pro kauci</li>
              </ul>

              <h2>Tipy pro řízení v Šanghaji</h2>
              <p>
                Doprava v Šanghaji může být náročná, zejména v centru města.
                Počítejte s hustým provozem ve špičkách (7–9 ráno a 17–19
                večer). Parkovací místa v centru jsou vzácná a drahá – většina
                obchodních center nabízí podzemní parkoviště za poplatek.
              </p>
              <p>
                Důrazně doporučujeme používat navigaci s aktuálními mapami
                (např. Amap nebo Baidu Maps) a mít připojení k internetu pro
                online aktualizace dopravní situace.
              </p>

              <h2>Pojištění</h2>
              <p>
                Základní pojištění je obvykle zahrnuto v ceně pronájmu, ale
                doporučujeme zvážit i připojištění pro případ nehody či krádeže.
                Zkontrolujte podmínky vaší cestovní pojistky – některé už
                pokrývají pronájem vozidla v zahraničí.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8">
                <h3 className="text-lg font-semibold mb-2">
                  Potřebujete řidičské oprávnění pro Čínu?
                </h3>
                <p className="mb-4">
                  Zajistíme vám úředně ověřený překlad řidičského průkazu, se
                  kterým získáte dočasné povolení k řízení v Číně.
                </p>
                <Link to="/#balicek">
                  <Button>Zjistit více</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default DrivingInShanghai;
