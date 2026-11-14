import { Link } from "react-router-dom";

const SupportSection = () => (
  <section className="py-14 md:py-20 bg-background" aria-labelledby="support-title">
    <div className="container max-w-4xl">
      <h2 id="support-title" className="text-2xl md:text-3xl font-bold text-center">Víte, kdo řeší kterou část</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          { title: "Čína Solo", text: "Průvodce, komunikace o objednávce, přijetí platby, úhrada agentury a koordinace dopravy. Provozovatelem je Jan Ptáček, IČO 24398489." },
          { title: "Čínská agentura", text: "Přebírá podklady přímo od vás a vyhotovuje překlad. Skeny pasu a průkazu nepřeposíláte přes Čína Solo." },
          { title: "Vy a příslušný úřad", text: "Vy podáte vlastní žádost. Úřad posoudí podklady a rozhodne o oprávnění. Překlad ani balíček nejsou povolením k řízení." },
        ].map(item => (
          <div key={item.title} className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold mb-3">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-border p-5 text-sm text-muted-foreground leading-relaxed">
        <h3 className="font-semibold text-foreground mb-2">Dotaz před nákupem nebo problém s objednávkou?</h3>
        <p>Napište na <a className="underline" href="mailto:info@cinasolo.cz">info@cinasolo.cz</a>.
          Podrobnosti o agentuře si můžete vyžádat předem. K dotazům nepřikládejte doklady.
          U chyby překladu koordinujeme opravu, u nedoručení prověření zásilky.{" "}
          <Link className="underline" to="/obchodni-podminky">Pravidla nápravy a odstoupení</Link>.
        </p>
      </div>
    </div>
  </section>
);
export default SupportSection;
