import { useState } from "react";
import { Check, ArrowRight, LockKeyhole, PackageCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DELIVERY_CHECKOUTS, type DeliveryRegion } from "@/lib/stripe";
import { SERVICE_PRICE_CZK } from "@/lib/service";
import { Link } from "react-router-dom";

const features = [
  { title: "Praktický průvodce v češtině", text: "Administrativní postup, příprava na úřad a praktické informace k řízení a půjčení auta." },
  { title: "Překlad od čínské agentury", text: "Cena zahrnuje náklady na překlad průkazu a podkladů ke kategoriím oprávnění." },
  { title: "Komunikace a platba agentuře", text: "Koordinujeme objednávku a z vaší platby hradíme práci agentury." },
  { title: "Domluva doručení a pomoc s objednávkou", text: "Zajistíme komunikaci o zásilce; při chybě překladu nebo nedoručení koordinujeme nápravu." },
];
const PricingSection = () => {
  const [deliveryRegion, setDeliveryRegion] = useState<DeliveryRegion>("CZ");
  const checkout = DELIVERY_CHECKOUTS[deliveryRegion];
  return (
    <section id="balicek" className="scroll-mt-24 bg-white py-14 md:py-20">
      <div className="container">
        <div className="mb-9 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-800">Co dostanete a za kolik</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Přehledný balíček.<br />Celková cena před platbou.</h2>
        </div>
        <div className="grid items-start gap-9 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <h3 className="text-xl font-bold">Průvodce a koordinace překladu</h3>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">Platíte za přípravu a pomoc s celou objednávkou překladu.
              Samotný překlad vyhotovuje čínská agentura. Její práci hradíme z ceny balíčku.</p>
            <ul className="mt-7 space-y-6">
              {features.map(feature => <li key={feature.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-800"><Check size={15} aria-hidden="true" /></span>
                <div><h4 className="font-semibold">{feature.title}</h4><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{feature.text}</p></div>
              </li>)}
            </ul>
            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold">Máte blízko k odletu nebo si nejste jistí postupem?</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Nejdřív nám napište město, kde budete žádat, a termín cesty. K dotazu nepřikládejte doklady.</p>
              <a href="mailto:info@cinasolo.cz" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-orange-800 underline underline-offset-4"><MessageCircle size={16} />Zeptat se před objednávkou</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
            <div className="border-b border-orange-100 bg-orange-50 px-5 py-4 sm:px-7">
              <p className="flex items-center gap-2 text-sm font-semibold text-orange-900"><PackageCheck size={18} />Jedna platba za balíček a doručení</p>
            </div>
            <div className="p-5 sm:p-7">
              <fieldset>
                <legend className="mb-3 font-semibold">Kam má překlad dorazit?</legend>
                <div className="grid gap-3">
                  {([
                    { value: "CZ", title: "Doručení do ČR", text: "Standardně do 18 dnů · expresně do 10 dnů", price: "od 2 589 Kč" },
                    { value: "CN", title: "Doručení v Číně", text: "Například do hotelu · orientačně do 6 dnů", price: "1 399 Kč" },
                  ] as const).map(option => <label key={option.value} className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-colors ${deliveryRegion === option.value ? "border-orange-700 bg-orange-50/50" : "border-slate-200 bg-white hover:border-slate-400"}`}>
                    <input type="radio" name="delivery-region" value={option.value} checked={deliveryRegion === option.value}
                      onChange={() => setDeliveryRegion(option.value)} className="mt-1 h-4 w-4 shrink-0 accent-orange-700" />
                    <span className="min-w-0 flex-1 text-sm"><span className="flex flex-wrap justify-between gap-1 font-semibold"><span>{option.title}</span><span>{option.price}</span></span>
                      <span className="mt-1.5 block text-xs leading-relaxed text-muted-foreground">{option.text}</span></span>
                  </label>)}
                </div>
              </fieldset>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Orientační doba včetně překladu od dodání úplných podkladů; může se prodloužit. Konkrétní dopravu potvrdíte při platbě.</p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between gap-4"><dt>Balíček včetně překladu</dt><dd className="shrink-0 font-medium">{SERVICE_PRICE_CZK.toLocaleString("cs-CZ")} Kč</dd></div>
                <div className="flex justify-between gap-4"><dt>{deliveryRegion === "CZ" ? "Standardní doprava do ČR" : "Doprava po Číně"}</dt><dd className="shrink-0 font-medium">{deliveryRegion === "CZ" ? "1 190 Kč" : "Zdarma"}</dd></div>
              </dl>
              <div className="mt-5 border-t border-slate-200 pt-5" aria-live="polite">
                <p className="text-sm text-muted-foreground">{deliveryRegion === "CZ" ? "Celkem se standardní dopravou" : "Celkem včetně dopravy"}</p>
                <p className="mt-1 text-4xl font-extrabold tracking-tight">{checkout.minimumTotalCzk.toLocaleString("cs-CZ")} <span className="text-xl font-semibold">Kč</span></p>
                {deliveryRegion === "CZ" && <p className="mt-2 text-xs text-muted-foreground">S expresní dopravou celkem 3 179 Kč. Vyberete v platební bráně.</p>}
              </div>
              <Button size="xl" className="mt-6 w-full bg-orange-700 text-white hover:bg-orange-800" asChild><a href={checkout.url}>Objednat balíček<ArrowRight size={18} /></a></Button>
              <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground"><LockKeyhole size={14} aria-hidden="true" />Platba kartou přes Stripe · příjemce Čína Solo</p>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">Cena nezahrnuje podání žádosti, vydání oprávnění, správní poplatky ani pronájem auta. O přijetí překladu a oprávnění rozhoduje úřad.</p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Před objednávkou si přečtěte <Link to="/obchodni-podminky" className="underline underline-offset-2">obchodní podmínky</Link> a <Link to="/ochrana-osobnich-udaju" className="underline underline-offset-2">informace o osobních údajích</Link>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PricingSection;
