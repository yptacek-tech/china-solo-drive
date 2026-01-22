import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Terms = () => {
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
              Všeobecné obchodní podmínky
            </h1>
            <p className="text-center text-muted-foreground mb-12">(dále jen „VOP")</p>

            <div className="prose prose-lg max-w-none text-foreground">
              {/* Section I */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4">I. Úvodní ustanovení</h2>
                <ol className="list-decimal list-outside ml-6 space-y-4 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Poskytovatel:</strong> Jan Ptáček, IČO: 24398489, Sídlo: Nad Okrouhlíkem 2372/14, 182 00 Praha, Česká republika, E-mail: info@cinasolo.cz (dále jen „Poskytovatel")
                  </li>
                  <li>
                    <strong className="text-foreground">Služba:</strong> Poskytovatel provozuje webové rozhraní na adrese www.cinasolo.cz (dále jen „Web"), jehož prostřednictvím nabízí službu zprostředkování úředního překladu řidičského průkazu v Čínské lidové republice a prodej digitálních informačních materiálů (dále jen „Služba").
                  </li>
                  <li>
                    <strong className="text-foreground">Klient:</strong> Fyzická nebo právnická osoba, která si objedná Službu prostřednictvím Webu (dále jen „Klient").
                  </li>
                  <li>
                    <strong className="text-foreground">Charakter Služby:</strong> Klient bere na vědomí, že Poskytovatel není orgánem veřejné moci ani vydavatelem řidičských oprávnění. Služba spočívá v administrativní asistenci, poskytnutí know-how a úhradě poplatků zahraničnímu partnerovi. Poskytovatel negarantuje výsledek správního řízení před čínskými úřady.
                  </li>
                </ol>
              </section>

              {/* Section II */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4">II. Předmět smlouvy</h2>
                <ol className="list-decimal list-outside ml-6 space-y-4 text-muted-foreground">
                  <li>
                    Předmětem smlouvy je závazek Poskytovatele:
                    <ol className="list-[lower-alpha] list-outside ml-6 mt-2 space-y-2">
                      <li>Poskytnout Klientovi digitální průvodce (PDF e-book) s instrukcemi pro řízení v Číně.</li>
                      <li>Zajistit u partnerské agentury v Číně (dále jen „Zhotovitel") rezervaci kapacity pro vyhotovení úředního překladu.</li>
                      <li>Poskytnout Klientovi instrukce a přímý kontakt na Zhotovitele pro bezpečné zaslání podkladů.</li>
                      <li>Uhradit Zhotoviteli náklady na překlad a mezinárodní dopravu (DHL/SF Express) na adresu Klienta.</li>
                    </ol>
                  </li>
                  <li>
                    Předmětem smlouvy je závazek Klienta uhradit sjednanou cenu a poskytnout součinnost dle čl. V. těchto podmínek.
                  </li>
                </ol>
              </section>

              {/* Section III */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4">III. Objednávka a uzavření smlouvy</h2>
                <ol className="list-decimal list-outside ml-6 space-y-4 text-muted-foreground">
                  <li>Smluvní vztah vzniká odesláním objednávky na Webu a uhrazením plné ceny Služby.</li>
                  <li>Odesláním objednávky Klient potvrzuje, že se seznámil s těmito VOP a že s nimi bez výhrad souhlasí.</li>
                </ol>
              </section>

              {/* Section IV */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4">IV. Cena služby a platební podmínky</h2>
                <ol className="list-decimal list-outside ml-6 space-y-4 text-muted-foreground">
                  <li>Cena služby je uvedena na Webu jako konečná. Poskytovatel není plátcem DPH.</li>
                  <li>Cenu hradí Klient bezhotovostně prostřednictvím platební brány (Stripe) ihned po odeslání objednávky.</li>
                  <li>Cena zahrnuje: licenci k digitálnímu obsahu, zprostředkovatelský poplatek, poplatek za překlad v Číně a mezinárodní poštovné do ČR.</li>
                </ol>
              </section>

              {/* Section V */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4">V. Dodací podmínky a Součinnost klienta (Důležité)</h2>
                <ol className="list-decimal list-outside ml-6 space-y-4 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Postup zpracování:</strong>
                    <ul className="list-disc list-outside ml-6 mt-2 space-y-2">
                      <li>Po úhradě obdrží Klient e-mailem instrukce.</li>
                      <li>Klient je povinen zaslat sken svého řidičského průkazu a cestovního pasu přímo na e-mailovou adresu Zhotovitele v Číně, kterou mu Poskytovatel sdělí. Poskytovatel tyto citlivé dokumenty neshromažďuje, nearchivuje ani k nim nemá přístup.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-foreground">Lhůty:</strong> Zhotovitel obvykle vyhotoví překlad do 3 pracovních dnů od obdržení podkladů od Klienta. Následná doprava do ČR trvá zpravidla 5–10 pracovních dnů. Poskytovatel nenese odpovědnost za zpoždění způsobené celním řízením nebo dopravcem.
                  </li>
                  <li>
                    <strong className="text-foreground">Nesplnění součinnosti:</strong> Pokud Klient nezašle podklady Zhotoviteli ani do 30 dnů od objednávky, považuje se Služba za splněnou v rozsahu rezervace kapacity a administrativy, a Klientovi nevzniká nárok na vrácení peněz.
                  </li>
                </ol>
              </section>

              {/* Section VI */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4">VI. Odpovědnost za vady a Vyloučení záruk</h2>
                <ol className="list-decimal list-outside ml-6 space-y-4 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Rozhodnutí úřadů:</strong> Poskytovatel nenese odpovědnost za rozhodnutí čínských správních orgánů (Traffic Police / Vehicle Management Station). Vydání Dočasného povolení k řízení (Temporary Driving Permit) podléhá posouzení místním úředníkem.
                  </li>
                  <li>
                    <strong className="text-foreground">Žádná refundace při zamítnutí:</strong> V případě, že čínský úřad odmítne uznat formálně správně vyhotovený překlad (např. z důvodu "vyšší moci", změny interních předpisů v Číně, politické situace nebo individuálního posouzení úředníka), nevzniká Klientovi nárok na vrácení peněz ani reklamaci Služby. Poskytovatel odpovídá pouze za dodání překladu, nikoliv za jeho akceptaci třetí stranou.
                  </li>
                  <li>
                    <strong className="text-foreground">Odpovědnost Klienta:</strong> Poskytovatel neodpovídá za škody nebo zmaření účelu Služby, pokud Klient:
                    <ol className="list-[lower-alpha] list-outside ml-6 mt-2 space-y-2">
                      <li>Dodal Zhotoviteli nečitelné nebo neplatné podklady.</li>
                      <li>Nemá platné vízum do ČLR.</li>
                      <li>Se pokusí použít dokument k řízení vozidla jiné kategorie, než pro kterou byl vystaven.</li>
                    </ol>
                  </li>
                </ol>
              </section>

              {/* Section VII */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4">VII. Odstoupení od smlouvy</h2>
                <ol className="list-decimal list-outside ml-6 space-y-4 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Nemožnost odstoupení:</strong> V souladu s ustanovením § 1837 občanského zákoníku Klient bere na vědomí, že nemá právo odstoupit od smlouvy ve lhůtě 14 dnů bez udání důvodu, a to z těchto důvodů:
                    <ol className="list-[lower-alpha] list-outside ml-6 mt-2 space-y-2">
                      <li>Služba obsahuje dodání digitálního obsahu (PDF průvodce), který byl dodán okamžitě po zaplacení.</li>
                      <li>Služba se týká zboží (překladu), které bylo upraveno podle přání spotřebitele nebo pro jeho osobu (personalizovaný dokument).</li>
                    </ol>
                  </li>
                  <li>
                    Klient odesláním objednávky výslovně žádá o započetí poskytování Služby před uplynutím lhůty pro odstoupení a bere na vědomí zánik tohoto práva.
                  </li>
                  <li>
                    <strong className="text-foreground">Reklamace:</strong> V případě, že objednaný překlad nebude Klientovi vůbec doručen z viny na straně Poskytovatele nebo Zhotovitele (ztráta zásilky), má Klient právo na bezplatné opětovné zaslání nebo vrácení peněz v plné výši.
                  </li>
                </ol>
              </section>

              {/* Section VIII */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4">VIII. Ochrana osobních údajů</h2>
                <ol className="list-decimal list-outside ml-6 space-y-4 text-muted-foreground">
                  <li>Poskytovatel zpracovává pouze kontaktní údaje Klienta (Jméno, Adresa, Telefon, E-mail) nezbytné pro doručení zásilky.</li>
                  <li>Klient souhlasí s předáním těchto kontaktních údajů (Jméno, Adresa, Telefon) do třetí země (Čínská lidová republika) za účelem doručení zásilky kurýrní službou.</li>
                  <li>Podrobné informace o zpracování dat jsou uvedeny v samostatném dokumentu „Zásady ochrany osobních údajů".</li>
                </ol>
              </section>

              {/* Section IX */}
              <section className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4">IX. Závěrečná ustanovení</h2>
                <ol className="list-decimal list-outside ml-6 space-y-4 text-muted-foreground">
                  <li>Tyto obchodní podmínky se řídí právním řádem České republiky. Případné spory budou řešeny věcně a místně příslušnými soudy v ČR.</li>
                  <li>Poskytovatel si vyhrazuje právo znění VOP měnit. Pro Klienta je závazné znění účinné v době odeslání objednávky.</li>
                  <li>Tyto VOP nabývají účinnosti dnem 23. 1. 2026.</li>
                </ol>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
