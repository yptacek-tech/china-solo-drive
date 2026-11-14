import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const CookieBanner = () => {
  const { preferences, hasMadeChoice, settingsOpen, savePreferences, acceptAll, rejectAll, closeSettings } = useCookieConsent();
  const [selection, setSelection] = useState(preferences);
  useEffect(() => { if (settingsOpen) setSelection(preferences); }, [settingsOpen, preferences]);
  if (!settingsOpen) return null;
  return (
    <section aria-labelledby="cookies-title"
      className="fixed bottom-0 left-0 right-0 z-[60] max-h-[85dvh] overflow-y-auto border-t border-border bg-card p-4 shadow-xl">
      <div className="container max-w-4xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="cookies-title" className="font-semibold text-foreground">Vaše soukromí, vaše volba</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Web i objednávka fungují bez volitelných cookies. Analytiku a reklamní měření zapneme jen s vaším souhlasem.
              Volbu můžete kdykoli změnit v patičce.{" "}
              <Link to="/ochrana-osobnich-udaju" className="underline">Podrobnosti o cookies a údajích</Link>.
            </p>
          </div>
          {hasMadeChoice && <button type="button" onClick={closeSettings} aria-label="Zavřít nastavení cookies"
            className="shrink-0 rounded px-2 py-1 text-sm underline">Zavřít</button>}
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 text-sm">
            <input type="checkbox" checked={selection.analytics}
              onChange={event => setSelection(current => ({ ...current, analytics: event.target.checked }))}
              className="mt-1" />
            <span><strong>Analytika</strong><span className="mt-1 block text-muted-foreground">
              Google Analytics: návštěvnost a používání webu.</span></span>
          </label>
          <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 text-sm">
            <input type="checkbox" checked={selection.marketing}
              onChange={event => setSelection(current => ({ ...current, marketing: event.target.checked }))}
              className="mt-1" />
            <span><strong>Reklamní měření</strong><span className="mt-1 block text-muted-foreground">
              Google Ads a Meta Pixel: měření reklamy a reklamní publika.</span></span>
          </label>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button type="button" variant="outline" onClick={rejectAll}>Odmítnout volitelné</Button>
          <Button type="button" variant="outline" onClick={() => savePreferences(selection)}>Uložit výběr</Button>
          <Button type="button" variant="outline" onClick={acceptAll}>Přijmout vše</Button>
        </div>
      </div>
    </section>
  );
};
export default CookieBanner;
