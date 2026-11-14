import { Mail, FileText, Truck, ArrowRight } from "lucide-react";

const steps = [
  { icon: Mail, title: "Vyberete balíček a doručení", text: "Zaplatíte jednu částku přes Stripe. Čína Solo z ní uhradí překlad agentuře a vyřídí komunikaci o objednávce." },
  { icon: FileText, title: "Doklady pošlete přímo agentuře", text: "Dostanete kontakt a instrukce. Čínská agentura převezme podklady a vyhotoví překlad. Skeny neposíláte přes Čína Solo." },
  { icon: Truck, title: "Překlad dorazí a máte plán", text: "Koordinujeme doručení do ČR nebo v Číně. S praktickým průvodcem se připravíte na další kroky a osobní návštěvu úřadu." },
];
const HowItWorks = () => (
  <section id="jak-to-funguje" className="scroll-mt-24 bg-[#faf8f4] py-14 md:py-20">
    <div className="container">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-800">Kde vám pomůže Čína Solo</p>
      <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Příprava a překlad.<br />S jedním kontaktním místem.</h2>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Nemusíte sami koordinovat objednávku, platbu agentuře a dopravu. Tuto část vyřídíme za vás.</p>
      </div>
      <ol className="mt-9 grid gap-4 md:grid-cols-3">
        {steps.map((item, index) => <li key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7">
          <div className="mb-6 flex items-center justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-800"><item.icon size={21} aria-hidden="true" /></span>
            <span className="text-sm font-semibold text-slate-400">0{index + 1}</span></div>
          <h3 className="text-lg font-bold leading-snug">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
        </li>)}
      </ol>
      <div className="mt-6 flex items-start gap-3 rounded-xl bg-slate-900 p-5 text-sm leading-relaxed text-white">
        <ArrowRight size={20} className="mt-0.5 shrink-0 text-orange-300" aria-hidden="true" />
        <p><strong>Další krok je na vás:</strong> žádost podáte osobně čínskému úřadu. Vydání oprávnění, správní poplatky a půjčení auta nejsou součástí balíčku.</p>
      </div>
    </div>
  </section>
);
export default HowItWorks;
