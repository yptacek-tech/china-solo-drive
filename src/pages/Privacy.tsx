import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Zásady ochrany osobních údajů
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="lead text-foreground/80 mb-8">
                Tento dokument vysvětluje, jak nakládáme s vašimi osobními údaji při používání služby Čína Solo (dostupné na www.cinasolo.cz). Zpracování údajů probíhá v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR).
              </p>

              {/* Section 1 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4">1. Kdo je správcem Vašich údajů?</h2>
                <p>
                  Správcem osobních údajů (ten, kdo odpovídá za jejich ochranu) je:
                </p>
                <p className="mt-4">
                  <strong className="text-foreground">Jan Ptáček</strong><br />
                  IČO: 24398489<br />
                  Sídlo: Nad Okrouhlíkem 2372/14, 182 00 Praha, Česká republika<br />
                  E-mail: info@cinasolo.cz<br />
                  (dále jen „Správce")
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4">2. Jaké údaje zpracováváme a co NEzpracováváme?</h2>
                
                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">A) Údaje, které zpracováváme (Běžné údaje)</h3>
                <p>Abychom mohli vyřídit Vaši objednávku a doručit Vám zásilku, zpracováváme tyto údaje, které nám sami poskytnete:</p>
                <ul className="list-disc list-outside ml-6 mt-2 space-y-1">
                  <li>Jméno a příjmení</li>
                  <li>Fakturační a doručovací adresa</li>
                  <li>E-mailová adresa</li>
                  <li>Telefonní číslo</li>
                  <li>Platební údaje (pouze informace o tom, že platba proběhla; čísla karet nevidíme, zpracovává je Stripe)</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">B) Údaje, které NEzpracováváme (Citlivé doklady)</h3>
                <p>
                  <strong className="text-foreground">Důležité:</strong> Správce nevyžaduje, neukládá ani nemá přístup ke kopiím Vašich osobních dokladů (sken cestovního pasu, sken řidičského průkazu). Tyto dokumenty zasíláte na základě našich instrukcí přímo koncovému zpracovateli v Číně zabezpečenou cestou. Tím zajišťujeme maximální bezpečnost Vašich citlivých dat, která se vůbec nenacházejí na našich serverech.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">C) Technické údaje (Cookies)</h3>
                <p>
                  Pokud nám udělíte souhlas na webu, sbíráme anonymizovaná data o návštěvnosti pomocí nástrojů Google Analytics 4 a Microsoft Clarity (např. typ zařízení, čas strávený na stránce, kliknutí).
                </p>
              </section>

              {/* Section 3 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4">3. Proč údaje zpracováváme (Právní důvod)?</h2>
                <ul className="list-disc list-outside ml-6 space-y-3">
                  <li>
                    <strong className="text-foreground">Plnění smlouvy:</strong> Vaše jméno, adresu a telefon potřebujeme, abychom zajistili vyhotovení překladu a doručení zásilky k Vám domů.
                  </li>
                  <li>
                    <strong className="text-foreground">Plnění zákonných povinností:</strong> Faktury s Vašimi údaji musíme archivovat pro účely účetnictví a daní (vyžaduje to zákon o DPH).
                  </li>
                  <li>
                    <strong className="text-foreground">Oprávněný zájem / Souhlas:</strong> Analytiku webu provádíme, abychom mohli zlepšovat naše služby.
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4">4. Komu údaje předáváme?</h2>
                <p>
                  Vaše data jsou u nás v bezpečí. Zpřístupňujeme je pouze těmto prověřeným partnerům nezbytným pro fungování služby:
                </p>
                <ul className="list-disc list-outside ml-6 mt-4 space-y-3">
                  <li>
                    <strong className="text-foreground">Stripe, Inc.:</strong> Provozovatel platební brány (bezpečné zpracování platby kartou).
                  </li>
                  <li>
                    <strong className="text-foreground">Google Ireland Ltd. / Microsoft Corp.:</strong> Poskytovatelé analytických nástrojů (pouze anonymizovaná data).
                  </li>
                  <li>
                    <strong className="text-foreground">Doručovací partneři a Zhotovitel (Čína):</strong> Vaše identifikační údaje (Jméno, Adresa, Telefon) musíme předat partnerské agentuře v Číně, aby mohla vypsat adresní štítek pro kurýra (SF Express / DHL) a zaslat Vám hotový dokument.
                  </li>
                </ul>
              </section>

              {/* Section 5 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4">5. Předávání dat mimo EU (Čína)</h2>
                <p>
                  Vzhledem k povaze služby (zajištění dokumentu z Číny) je nezbytné předat Vaše kontaktní údaje (nikoliv citlivé skeny, ty posíláte sami) do třetí země – Čínské lidové republiky. Čína nemá status země s odpovídající úrovní ochrany dat dle rozhodnutí Evropské komise. Předání Vašich kontaktních údajů do Číny je však nezbytné pro splnění smlouvy (doručení zásilky) ve smyslu čl. 49 odst. 1 písm. b) GDPR. Bez tohoto předání nelze službu poskytnout.
                </p>
              </section>

              {/* Section 6 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4">6. Jak dlouho údaje uchováváme?</h2>
                <ul className="list-disc list-outside ml-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Účetní doklady (faktury):</strong> 10 let (dle zákona o DPH).
                  </li>
                  <li>
                    <strong className="text-foreground">Údaje o objednávce:</strong> Do doby promlčení právních nároků (zpravidla 3 roky), poté jsou smazány.
                  </li>
                  <li>
                    <strong className="text-foreground">Marketingová data (cookies):</strong> Dle nastavení Vašeho prohlížeče, maximálně 13 měsíců.
                  </li>
                </ul>
              </section>

              {/* Section 7 */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4">7. Jaká máte práva?</h2>
                <p>Podle GDPR máte právo:</p>
                <ul className="list-disc list-outside ml-6 mt-4 space-y-2">
                  <li>Požadovat přístup ke svým osobním údajům.</li>
                  <li>Požadovat opravu nepřesných údajů.</li>
                  <li>Požadovat výmaz údajů (pokud neexistuje zákonný důvod pro jejich uchování, např. účetnictví).</li>
                  <li>Vznést námitku proti zpracování.</li>
                  <li>
                    Podat stížnost u Úřadu pro ochranu osobních údajů (
                    <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      www.uoou.cz
                    </a>
                    ), pokud máte pocit, že s Vašimi daty nenakládáme správně.
                  </li>
                </ul>
              </section>

              <p className="text-sm text-muted-foreground mt-12 pt-6 border-t border-border">
                Tyto zásady jsou platné od 23. 1. 2026.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
