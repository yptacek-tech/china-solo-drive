import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const officialGuide = "https://english.beijing.gov.cn/mostrequested/drivinglicense/list/202012/t20201210_2161614.html";
const HowToDrive = () => (
  <div className="min-h-screen bg-background">
    <SEO title="Jak se připravit na řízení v Číně | Čína Solo"
      description="Překlad, podklady a osobní žádost u čínského úřadu. Praktická orientace s odkazem na oficiální pokyny pro Peking." />
    <Navbar />
    <main className="container max-w-3xl pt-28 pb-20">
      <Link to="/" className="text-sm text-muted-foreground underline">Zpět na úvod</Link>
      <h1 className="mt-6 text-3xl md:text-5xl font-bold">Jak se připravit na řízení v Číně</h1>
      <p className="mt-5 text-lg text-muted-foreground">Překlad je jeden z podkladů pro vaši žádost. Čínské oprávnění vydává příslušný úřad po posouzení vašich dokumentů.</p>
      <div className="mt-8 space-y-8 text-muted-foreground leading-relaxed">
        <section className="rounded-xl bg-card border border-border p-6">
          <h2 className="text-xl font-semibold text-foreground mb-3">Začněte místem, kde budete žádat</h2>
          <p>Ještě před objednávkou překladu si ověřte požadavky konkrétního úřadu: přijímaný formát překladu a zhotovitele, další dokumenty, úřední hodiny a postup pro váš pobyt. Níže uvedené údaje vycházejí z pekingských pokynů; nejde o příslib stejného postupu ve všech městech.</p>
          <a href={officialGuide} className="mt-4 inline-block underline text-foreground">Oficiální pokyny pro dočasné oprávnění v Pekingu</a>
          <p className="mt-2 text-sm">Ověřeno 14. listopadu 2026. Před cestou zkontrolujte aktuální znění.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Jaké oprávnění potřebujete</h2>
          <p>Pro krátkodobý pobyt se zahraničním řidičským průkazem lze podle pekingského úřadu žádat o dočasné čínské oprávnění. Samotný zahraniční průkaz ani jeho překlad tento dokument nenahrazují.</p>
          <p className="mt-3">Pekingské pokyny uvádějí platnost tři měsíce; při povoleném pobytu delším než tři měsíce může platnost odpovídat pobytu, nejvýše však jeden rok. Rozsah a platnost určí úřad podle konkrétní žádosti.</p>
          <p className="mt-3">Pro pronájem auta pekingské pokyny uvádějí kategorie C1 a C2. Pro jiné typy vozidel či dlouhodobý pobyt si nechte potvrdit odpovídající postup.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Podklady podle pekingského úřadu</h2>
          <ul className="list-disc ml-5 space-y-3">
            <li>Platný vstupní doklad, zpravidla pas, a doklad o oprávněném pobytu; pokyny počítají také s bezvízovým vstupem.</li>
            <li>Zahraniční řidičský průkaz a, není-li v čínštině, čínský překlad od překladatelské agentury nebo notářsky ověřený překlad. Vhodnost konkrétního zhotovitele ověřte u úřadu.</li>
            <li>Dvě aktuální barevné průkazové fotografie s bílým pozadím podle uvedených parametrů. Jiné místo může mít odlišné požadavky.</li>
            <li>Další podklady podle vozidla a situace. Dočasní návštěvníci žádající pro malé osobní vozy či motocykly jsou podle těchto pokynů osvobozeni od předložení potvrzení o zdravotním stavu.</li>
          </ul>
          <p className="mt-3">Tento přehled nenahrazuje úplný seznam podmínek v oficiálních pokynech, včetně věku, zdravotní způsobilosti a případných omezení.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Návštěva úřadu, čas a poplatek</h2>
          <p>Pokyny pro Peking uvádějí úřad správy vozidel a jeho pobočky, pracoviště na letišti Beijing Capital (terminál 3), letišti Daxing a Beijing Government Service Center. Dostupnost a otevírací dobu pracoviště zkontrolujte před cestou.</p>
          <p className="mt-3">Oficiální doba vyřízení je do tří pracovních dnů od přijetí žádosti. Vyřízení na počkání nelze slíbit. Uvedený správní poplatek je 10 jüanů za oprávnění a hradí se přímo úřadu, odděleně od našeho balíčku.</p>
        </section>
        <section className="rounded-xl bg-primary p-6 md:p-8 text-primary-foreground">
          <h2 className="text-2xl font-semibold mb-3">Chcete pomoc s přípravou a překladem?</h2>
          <p className="text-primary-foreground/85">Čína Solo poskytne průvodce a koordinuje objednávku, úhradu agentury a doručení. Překlad vyhotoví agentura; doklady odešlete přímo jí. Žádost podáváte sami a o výsledku rozhoduje úřad.</p>
          <Button variant="hero" className="mt-6" asChild><Link to="/#balicek">Prohlédnout balíček a cenu</Link></Button>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);
export default HowToDrive;
