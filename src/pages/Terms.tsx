import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container max-w-3xl pt-28 pb-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Obchodní podmínky</h1>
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Provozovatel a role Čína Solo</h2>
          <p>Čína Solo provozuje Jan Ptáček, IČO 24398489, Nad Okrouhlíkem 2372/14, 182 00 Praha, Česká republika, e-mail info@cinasolo.cz (dále „Koordinátor“). Objednatel balíčku je dále označen jako „Klient“.</p>
          <p className="mt-3">Koordinátor poskytuje praktické informační know-how a koordinaci objednávky překladu u agentury v Číně. Není překladatelem, čínským úřadem ani vydavatelem řidičských oprávnění. Nepodává za Klienta žádost a nezastupuje jej při správním řízení. Překlad vyhotovuje čínská překladatelská agentura (dále „Agentura“).</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. Co zahrnuje objednávka</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Praktického průvodce a instrukce k přípravě na řízení v Číně.</li>
            <li>Komunikaci s Agenturou o objednávce a předání přímého kontaktu Klientovi.</li>
            <li>Úhradu nákladů na překlad Agentuře z přijaté platby Klienta.</li>
            <li>Koordinaci vyhotovení a dopravy překladu podle zvolené varianty.</li>
          </ul>
          <p className="mt-3">Cena není poplatkem za řidičské oprávnění. Překlad sám o sobě k řízení neopravňuje. Aktuální požadavky na překlad a ostatní doklady si Klient před objednáním ověří u úřadu, kde bude žádat. O přijetí podkladů a vydání oprávnění rozhoduje výhradně tento úřad.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. Objednávka, platba a cena</h2>
          <p>Klient objedná balíček prostřednictvím platebního odkazu na webu. Smlouva o informační a koordinační službě se uzavírá s Koordinátorem, který přijímá platbu přes Stripe a z přijaté částky hradí Agentuře překlad a příslušnou dopravu. Tím se z Koordinátora nestává zhotovitel překladu.</p>
          <p className="mt-3">Cena balíčku je 1 399 Kč včetně know-how, koordinace a nákladů na překlad. Doručení po Číně stojí 0 Kč, standardní doručení do ČR 1 190 Kč a expresní do ČR 1 780 Kč. Celková cena je tedy 1 399 Kč, 2 589 Kč nebo 3 179 Kč podle vybrané dopravy a je uvedena před zaplacením. Koordinátor není plátcem DPH. Případné správní poplatky hradí Klient přímo úřadu.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. Podklady zasíláte přímo Agentuře</h2>
          <p>Po potvrzení platby obdrží Klient instrukce a kontakt na Agenturu. Podrobnosti o zhotoviteli může vyžádat i před objednávkou. Skeny pasu a řidičského průkazu zasílá Klient přímo Agentuře, nikoli Koordinátorovi. Před odesláním si ověří identitu příjemce, potřebné podklady a jeho pravidla zpracování údajů.</p>
          <p className="mt-3">Koordinátor skeny nevyžaduje a nearchivuje. Pro komunikaci, platbu a doručení zpracovává kontaktní, doručovací a objednávkové údaje podle <Link className="underline" to="/ochrana-osobnich-udaju">informací o soukromí</Link>. Skeny nepřikládejte ani k dotazům či reklamacím adresovaným Koordinátorovi.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. Vyhotovení a doprava</h2>
          <p>Obvyklá doba vyhotovení je 1–3 pracovní dny od obdržení úplných podkladů Agenturou. Orientační celkové lhůty včetně překladu jsou do 6 dnů po Číně, do 18 dnů standardně do ČR a do 10 dnů expresně do ČR. Nejde o zaručené lhůty; dopravu může prodloužit dopravce či celní řízení.</p>
          <p className="mt-3">Klient poskytne úplné, čitelné a platné podklady přímo Agentuře a správné doručovací údaje. Pokud podklady chybí, nelze překlad zahájit. Neposkytnutí podkladů samo o sobě neznamená automatické splnění celé služby ani automatický zánik práva na vrácení peněz.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. Chyby, nedoručení a reklamace</h2>
          <p>Problém oznamte na info@cinasolo.cz s číslem objednávky a popisem bez kopií dokladů. Koordinátor přijme reklamaci své služby a pomůže řešit chybu překladu s Agenturou nebo nedoručení s Agenturou a dopravcem. Podle povahy vady přichází v úvahu oprava, nové dodání, přiměřená sleva či vrácení odpovídající částky v souladu se zákonem. Reklamace bude vyřízena v zákonné lhůtě.</p>
          <p className="mt-3">Koordinátor nezaručuje kladné rozhodnutí čínského úřadu. Zamítnutí žádosti však samo o sobě nevylučuje reklamaci vadné služby či vadného překladu ani jiná zákonná práva Klienta. Rozlišuje se rozhodnutí úřadu nezávislé na kvalitě dodané služby a skutečná vada plnění.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">7. Zrušení objednávky a odstoupení</h2>
          <p>Chcete-li objednávku zrušit, napište co nejdříve na info@cinasolo.cz. Spotřebitel má u smlouvy uzavřené na dálku právo odstoupit do 14 dnů od uzavření, pokud se na konkrétní plnění neuplatní zákonná výjimka. Odstoupení můžete poslat e-mailem nebo poštou; stačí uvést své jméno, kontakt, číslo a datum objednávky a jednoznačné oznámení, že odstupujete.</p>
          <p className="mt-3">Zahájení služby či dodání digitálního průvodce před koncem této lhůty a případná ztráta práva na odstoupení se řídí zákonem a vyžadovaným výslovným souhlasem a poučením. Samotné přijetí těchto podmínek nepovažujeme za automatické vzdání se práva. Zpřístupnění průvodce samo o sobě neznamená automatickou ztrátu práv ke všem ostatním částem balíčku.</p>
          <p className="mt-3">Při platném odstoupení vrátíme příslušné prostředky zákonným způsobem a v zákonné lhůtě. Případná úhrada již poskytnuté části služby závisí na splnění zákonných podmínek, nikoli pouze na tom, že byla provedena rezervace u Agentury.</p>
          <div className="mt-4 rounded-lg border border-border p-4 text-sm">
            <strong className="text-foreground">Vzor oznámení:</strong>
            <p className="mt-2">Adresát: Jan Ptáček, info@cinasolo.cz, Nad Okrouhlíkem 2372/14, 182 00 Praha. Oznamuji, že odstupuji od smlouvy o službě Čína Solo. Číslo a datum objednávky: … Jméno a adresa spotřebitele: … Datum oznámení: … Podpis, pokud je oznámení zasíláno v listinné podobě: …</p>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">8. Závěrečná ustanovení</h2>
          <p>Smlouva se řídí českým právem; kogentní práva spotřebitele zůstávají zachována. Pro objednávku platí znění podmínek přijaté při jejím uzavření. Spotřebitel se může při sporu obrátit na <a className="underline" href="https://coi.gov.cz/informace-o-adr/">Českou obchodní inspekci pro mimosoudní řešení spotřebitelských sporů</a>.</p>
          <p className="mt-3 text-sm">Aktualizováno 14. listopadu 2026.</p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);
export default Terms;
