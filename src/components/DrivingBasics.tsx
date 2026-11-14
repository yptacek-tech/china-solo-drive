import { ArrowRight, Files, Building2, CarFront, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const basics = [
  { icon: Files, label: "Před cestou", title: "Připravíte si podklady", text: "Platný český průkaz, jeho čínský překlad a další doklady podle požadavků úřadu, kde budete žádat." },
  { icon: Building2, label: "Po příletu", title: "Požádáte o oprávnění", text: "Osobně navštívíte příslušný čínský úřad. Ten posoudí podklady a rozhodne o vydání dočasného oprávnění." },
  { icon: CarFront, label: "Před převzetím auta", title: "Ověříte podmínky půjčovny", text: "Před rezervací si potvrďte požadované oprávnění, věk řidiče, platební kartu, kauci a podmínky pojištění." },
];

const DrivingBasics = () => (
  <section id="jak-zacit" className="scroll-mt-24 bg-white py-14 md:py-20">
    <div className="container">
      <div className="grid gap-5 md:grid-cols-[0.8fr_1fr] md:gap-16">
        <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-800">Nejdřív to podstatné</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">K půjčenému autu<br />vedou tři kroky.</h2></div>
        <div className="text-base leading-relaxed text-muted-foreground">
          <p>Pro krátkou turistickou cestu se obvykle řeší <strong className="text-foreground">dočasné čínské řidičské oprávnění</strong>.
            Překlad průkazu je jedním z podkladů k žádosti. Sám o sobě k řízení neopravňuje.</p>
          <p className="mt-3">Čína Solo pomáhá s přípravou a překladem přes agenturu. Oprávnění vydává úřad a auto poskytuje půjčovna.</p>
        </div>
      </div>
      <ol className="mt-9 grid gap-7 md:grid-cols-3 md:gap-10">
        {basics.map((item, index) => <li key={item.title} className="border-t border-slate-200 pt-5">
          <div className="mb-4 flex items-center justify-between text-orange-800"><span className="text-xs font-bold uppercase tracking-wider">0{index + 1} / {item.label}</span><item.icon size={23} aria-hidden="true" /></div>
          <h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
        </li>)}
      </ol>
      <div className="mt-8 flex flex-col justify-between gap-4 rounded-xl bg-slate-50 px-5 py-4 text-sm md:flex-row md:items-center">
        <Link to="/jak-ridit-v-cine" className="flex items-center gap-2 font-semibold text-slate-900 underline-offset-4 hover:underline">Přečíst bezplatný přehled řízení v Číně<ArrowRight size={16} /></Link>
        <a href="https://english.beijing.gov.cn/mostrequested/drivinglicense/list/202012/t20201210_2161614.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 underline underline-offset-4">Oficiální postup pro Peking<ExternalLink size={14} /></a>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Požadavky na překlad a doklady si před objednávkou potvrďte u svého úřadu. Pokyny pro Peking jsou příklad; v jiných městech se postup může lišit.</p>
    </div>
  </section>
);
export default DrivingBasics;
