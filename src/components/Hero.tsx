import { ArrowRight, BookOpen, FileText, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-road.jpg";

const Hero = () => (
  <section className="bg-[#faf8f4] pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20">
    <div className="container grid items-center gap-10 lg:grid-cols-[1.08fr_1fr] lg:gap-16">
      <div>
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-orange-800">Pro vaši první cestu autem po Číně</p>
        <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
          Chcete si v Číně<br className="hidden sm:block" /> půjčit auto?<br />
          <span className="text-orange-700">Začněte s přípravou.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Mezinárodní řidičák v pevninské Číně nestačí. Pomůžeme vám zorientovat se v postupu
          a zkoordinujeme překlad vašeho průkazu u čínské agentury.
          O dočasné oprávnění pak požádáte osobně na místním úřadě.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button size="xl" asChild className="bg-orange-700 text-white hover:bg-orange-800">
            <a href="#jak-zacit">Jak to celé funguje<ArrowRight size={18} /></a>
          </Button>
          <Button variant="outline" size="xl" asChild className="border-slate-300 bg-transparent">
            <a href="#balicek">Balíček a celková cena</a>
          </Button>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-slate-600">Balíček <strong className="text-slate-900">1 399 Kč</strong> · s doručením do ČR od <strong className="text-slate-900">2 589 Kč</strong></p>
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-slate-200 pt-5 text-xs font-medium text-slate-600">
          <span className="flex items-center gap-2"><BookOpen size={16} className="text-orange-800" />Průvodce v češtině</span>
          <span className="flex items-center gap-2"><FileText size={16} className="text-orange-800" />Doklady přímo agentuře</span>
          <a href="mailto:info@cinasolo.cz" className="flex items-center gap-2 underline-offset-4 hover:underline"><Mail size={16} className="text-orange-800" />Kontakt před nákupem</a>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-900 shadow-xl">
        <img src={heroImage} alt="Klikatá horská silnice v čínské krajině" className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[540px]" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange-200"><MapPin size={15} />Vaše cesta začíná před odletem</p>
          <p className="max-w-sm text-2xl font-bold leading-snug sm:text-3xl">Méně tápání v dokladech.<br />Více prostoru na cestu.</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-200">Přehledný postup, překlad od agentury a koordinace doručení. V jedné objednávce.</p>
        </div>
      </div>
    </div>
  </section>
);
export default Hero;
