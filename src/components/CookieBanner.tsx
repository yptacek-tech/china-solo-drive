import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie, ShieldCheck, SlidersHorizontal, ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const CookieBanner = () => {
  const { preferences, hasMadeChoice, settingsOpen, savePreferences, acceptAll, rejectAll, closeSettings } = useCookieConsent();
  const [selection, setSelection] = useState(preferences);
  const [details, setDetails] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const customize = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (settingsOpen) {
      setSelection(preferences);
      setDetails(hasMadeChoice);
    }
  }, [settingsOpen, preferences, hasMadeChoice]);
  useEffect(() => { if (details && settingsOpen) heading.current?.focus(); }, [details, settingsOpen]);
  if (!settingsOpen) return null;

  return (
    <section aria-labelledby="cookies-title"
      className="fixed bottom-3 left-3 right-3 z-[60] mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-[0_12px_60px_-12px_rgba(15,23,42,0.4)] sm:bottom-5 sm:left-5 sm:right-5"
      onKeyDown={event => {
        if (event.key === "Escape" && details) {
          if (hasMadeChoice) closeSettings();
          else { setDetails(false); customize.current?.focus(); }
        }
      }}>
      <div className="h-1 bg-action" />
      <div className="max-h-[72dvh] overflow-y-auto p-4 sm:p-6">
        <div className="flex items-start gap-3">
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-800 sm:flex">
            <Cookie size={23} aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 id="cookies-title" ref={heading} tabIndex={-1} className="text-lg font-bold outline-none">
              {details ? "Cookies podle vás" : "Pár slov o cookies"}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              Analytické cookies nám pomáhají vylepšovat web, reklamní měřit reklamu a vytvářet reklamní publika.
              Používáme Google Analytics, Google Ads a Meta Pixel, jen když nám to dovolíte.
              Web i objednávka fungují také bez nich.
            </p>
          </div>
          {hasMadeChoice && <button type="button" onClick={closeSettings} aria-label="Zavřít nastavení cookies"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-700">
            <X size={19} />
          </button>}
        </div>

        {details && <div className="mt-5 space-y-2.5">
          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3.5">
            <ShieldCheck size={20} className="shrink-0 text-slate-600" aria-hidden="true" />
            <div className="flex-1"><h3 className="text-sm font-semibold">Nezbytné nastavení</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">Pamatuje si vaši volbu cookies.</p></div>
            <span className="text-xs font-semibold text-slate-600">Vždy aktivní</span>
          </div>
          {([
            { key: "analytics", name: "Analytika", text: "Google Analytics: návštěvnost a používání webu." },
            { key: "marketing", name: "Reklamní měření", text: "Google Ads a Meta Pixel: měření reklamy a reklamní publika." },
          ] as const).map(item => (
            <div key={item.key} className={`flex items-center gap-4 rounded-xl border p-3.5 transition-colors ${selection[item.key] ? "border-orange-200 bg-orange-50" : "border-slate-200 bg-white"}`}>
              <div className="min-w-0 flex-1">
                <label htmlFor={`cookie-${item.key}`} className="cursor-pointer text-sm font-semibold">{item.name}</label>
                <p id={`cookie-${item.key}-description`} className="mt-1 text-xs leading-relaxed text-slate-600">{item.text}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2.5">
                <span className="w-12 text-right text-xs font-medium text-slate-600" aria-hidden="true">{selection[item.key] ? "Zapnuto" : "Vypnuto"}</span>
                <Switch id={`cookie-${item.key}`} aria-label={item.name} aria-describedby={`cookie-${item.key}-description`}
                  checked={selection[item.key]}
                  onCheckedChange={checked => setSelection(current => ({ ...current, [item.key]: checked }))}
                  className="data-[state=checked]:bg-orange-700 data-[state=unchecked]:bg-slate-300" />
              </div>
            </div>
          ))}
        </div>}

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
          <Link to="/ochrana-osobnich-udaju" className="rounded underline underline-offset-4 hover:text-slate-900">Podrobnosti o cookies a údajích</Link>
          <span>Volbu změníte kdykoli v patičce.</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Button type="button" size="lg" onClick={rejectAll} className="h-11 px-3 text-sm">Odmítnout volitelné</Button>
          <Button type="button" size="lg" onClick={acceptAll} className="h-11 px-3 text-sm">Přijmout vše</Button>
          {details
            ? <Button type="button" size="lg" className="col-span-2 h-11 bg-orange-700 px-3 text-sm text-white hover:bg-orange-800 sm:col-span-1" onClick={() => savePreferences(selection)}>Uložit výběr</Button>
            : <Button type="button" ref={customize} size="lg" variant="outline" className="col-span-2 h-11 border-slate-300 px-3 text-sm sm:col-span-1" onClick={() => setDetails(true)}><SlidersHorizontal size={16} />Vlastní nastavení</Button>}
        </div>
        {details && !hasMadeChoice && <button type="button" className="mt-3 flex min-h-8 items-center gap-1.5 rounded text-xs font-medium text-slate-600 hover:text-slate-900"
          onClick={() => { setDetails(false); customize.current?.focus(); }}><ArrowLeft size={14} />Zpět na stručný přehled</button>}
      </div>
    </section>
  );
};
export default CookieBanner;
