import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  const { openSettings } = useCookieConsent();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container max-w-3xl pt-28 pb-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Soukromí a cookies</h1>
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-xl font-semibold text-foreground mb-3">Doklady jdou přímo agentuře</h2>
            <p>Čína Solo nevyžaduje ani nearchivuje skeny pasu a řidičského průkazu. Pro překlad je zasíláte přímo agentuře v Číně na kontakt uvedený v instrukcích. Na info@cinasolo.cz je neposílejte. Před odesláním si ověřte příjemce a jeho informace o zpracování údajů.</p>
            <p className="mt-3">Odlišné jsou kontaktní a objednávkové údaje: ty potřebujeme pro komunikaci, úhradu agentury a koordinaci dopravy. Tvrzení, že nezpracováváme vůbec žádné osobní údaje, by proto nebylo přesné.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Kdo za údaje odpovídá</h2>
            <p>Provozovatel a koordinátor Čína Solo: Jan Ptáček, IČO 24398489, Nad Okrouhlíkem 2372/14, 182 00 Praha, Česká republika. Kontakt pro soukromí a objednávky: <a href="mailto:info@cinasolo.cz" className="underline">info@cinasolo.cz</a>.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Co zpracováváme a proč</h2>
            <ul className="list-disc ml-5 space-y-3">
              <li><strong className="text-foreground">Objednávka a komunikace:</strong> jméno, e-mail, telefon, fakturační a doručovací údaje, číslo objednávky, její stav a obsah běžné komunikace. Účelem je plnění smlouvy, vyřízení dotazů a koordinace s agenturou.</li>
              <li><strong className="text-foreground">Platba:</strong> Stripe zpracovává platební kartu; Čína Solo má informace o objednávce a výsledku platby, nikoli celé číslo karty. Nezbytné účetní údaje uchováváme podle zákonných povinností.</li>
              <li><strong className="text-foreground">Analytika a reklama:</strong> pouze při udělení odpovídajícího souhlasu se zapnou Google Analytics nebo Google Ads a Meta Pixel. Mohou zpracovávat online identifikátory, technické údaje zařízení a návštěvy stránek. Neoznačujeme je za automaticky anonymní data.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Komu mohou údaje být předány</h2>
            <p>Stripe pro platbu; partnerské agentuře v Číně a doručovacím partnerům pouze údaje potřebné ke koordinaci objednávky a doručení; při souhlasu také Googlu a společnosti Meta pro zvolené účely měření. Příslušné orgány mohou obdržet údaje, pokud to vyžaduje zákon.</p>
            <p className="mt-3">Dokumenty zasíláte přímo zhotoviteli v Číně. Čína nemá obecné rozhodnutí EU o odpovídající ochraně údajů. Než podklady odešlete, vyžádejte si přesnou identitu agentury, způsob podání, dobu uchování a informace o zpracování a případném předání mimo EHP. Podrobnosti o partnerovi si můžete vyžádat i před objednávkou, bez zasílání dokladů.</p>
            <p className="mt-3">Google, Meta a Stripe mohou zpracovávat údaje i mimo EHP podle podmínek svých služeb a použitelných mechanismů pro předávání údajů. Jejich zásady: <a className="underline" href="https://policies.google.com/privacy">Google</a>, <a className="underline" href="https://www.facebook.com/privacy/policy/">Meta</a>, <a className="underline" href="https://stripe.com/privacy">Stripe</a>.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Volitelné cookies jsou ve výchozím stavu vypnuté</h2>
            <p>Analytiku a reklamní měření volíte samostatně. Odmítnutí nebrání používání webu ani objednávce. Starší souhlas z předchozí verze lišty nepřebíráme.</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Přehled použitých úložišť a cookies</caption>
                <thead><tr className="border-b border-border"><th className="p-2" scope="col">Nástroj</th><th className="p-2" scope="col">Účel</th><th className="p-2" scope="col">Volba / doba</th></tr></thead>
                <tbody>
                  <tr className="border-b border-border"><td className="p-2">cookie-consent-v2 (místní úložiště)</td><td className="p-2">Zapamatování nastavení</td><td className="p-2">Volba platí 180 dnů</td></tr>
                  <tr className="border-b border-border"><td className="p-2">Google Analytics (_ga, _ga_*)</td><td className="p-2">Analýza návštěvnosti</td><td className="p-2">Analytický souhlas; obvykle až 2 roky</td></tr>
                  <tr className="border-b border-border"><td className="p-2">Google Ads (_gcl_*)</td><td className="p-2">Reklamní měření</td><td className="p-2">Reklamní souhlas; podle typu, obvykle až 90 dnů</td></tr>
                  <tr><td className="p-2">Meta Pixel (_fbp, _fbc)</td><td className="p-2">Reklamní měření a publika</td><td className="p-2">Reklamní souhlas; obvykle až 90 dnů</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm">Doby cookies se mohou obnovovat při další návštěvě se souhlasem. Odvolání souhlasu zastaví další měření podle příslušné volby a odstraní dostupné měřicí cookies na této doméně; již předaná data se tím automaticky nevymažou.</p>
            <Button variant="outline" className="mt-4" onClick={openSettings}>Změnit nastavení cookies</Button>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Jak dlouho údaje uchováváme</h2>
            <p>Údaje o objednávce a komunikaci uchováváme po dobu potřebnou k vyřízení a ochraně právních nároků, zpravidla 3 roky od vyřízení. Účetní dokumenty uchováváme po dobu vyžadovanou příslušnými předpisy. Skeny dokladů nejsou součástí našeho objednávkového úložiště.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Vaše práva</h2>
            <p>Podle použitelných podmínek můžete žádat přístup, opravu, výmaz, omezení či přenos údajů a vznést námitku. Souhlas s měřením můžete odvolat v nastavení cookies. Pro další žádosti napište na info@cinasolo.cz; ověření totožnosti řešíme přiměřeně konkrétní žádosti. Stížnost můžete podat u <a className="underline" href="https://uoou.gov.cz/">Úřadu pro ochranu osobních údajů</a>.</p>
          </section>
          <p className="text-sm border-t border-border pt-4">Aktualizováno 14. listopadu 2026.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Privacy;
