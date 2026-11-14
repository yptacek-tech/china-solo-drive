import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, FileCheck2, ShieldCheck } from "lucide-react";

const SupportSection = () => (
  <section id="kdo-za-sluzbou-stoji" className="scroll-mt-24 bg-slate-900 py-14 text-white md:py-20" aria-labelledby="support-title">
    <div className="container grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-300">Víte, s kým jednáte</p>
        <h2 id="support-title" className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Za Čína Solo stojí<br />Jan Ptáček.</h2>
        <p className="mt-5 text-base leading-relaxed text-slate-300">Provozovatel služby a váš kontakt pro objednávku. Přijímám platbu za balíček,
          hradím práci agentury a koordinuji komunikaci i doručení.</p>
        <div className="mt-6 flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg font-bold text-orange-200" aria-hidden="true">JP</span>
          <div><p className="font-semibold">Jan Ptáček · Čína Solo</p><p className="mt-1 text-sm text-slate-300">IČO 24398489</p></div>
        </div>
        <a href="mailto:info@cinasolo.cz" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg text-base font-semibold text-orange-200 underline underline-offset-4"><Mail size={18} />info@cinasolo.cz<ArrowUpRight size={16} /></a>
        <p className="mt-1 text-sm leading-relaxed text-slate-300">Napište i před nákupem. Stačí termín cesty a město; skeny dokladů neposílejte.</p>
      </div>
      <div className="space-y-0 divide-y divide-white/15 rounded-2xl border border-white/15 bg-white/5 px-6">
        <div className="py-6"><h3 className="flex items-center gap-2 font-semibold"><FileCheck2 size={19} className="text-orange-300" />Kdo vyhotoví překlad?</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">Partnerská agentura v Číně. Její kontakt dostanete před odesláním podkladů; podrobnosti o agentuře si vyžádejte i před objednávkou. Skeny jí posíláte přímo.</p></div>
        <div className="py-6"><h3 className="flex items-center gap-2 font-semibold"><ShieldCheck size={19} className="text-orange-300" />Co když se objednávka zkomplikuje?</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">Ozvěte se s číslem objednávky. U chyby překladu koordinuji opravu s agenturou, u nedoručení prověření zásilky. Vaše zákonná práva tím nejsou dotčena.</p>
          <Link to="/obchodni-podminky" className="mt-3 inline-block text-sm text-orange-200 underline underline-offset-4">Pravidla nápravy a odstoupení</Link></div>
        <div className="py-5 text-xs leading-relaxed text-slate-300">Čína Solo poskytuje průvodce a koordinaci; nevydává řidičská oprávnění. O žádosti rozhoduje příslušný čínský úřad.</div>
      </div>
    </div>
  </section>
);
export default SupportSection;
