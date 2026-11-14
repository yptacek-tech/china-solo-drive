import { createContext, createElement, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type CookiePreferences = { analytics: boolean; marketing: boolean };
type ConsentRecord = { version: 2; savedAt: number; preferences: CookiePreferences };
const STORAGE_KEY = "cookie-consent-v2";
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
const denied: CookiePreferences = { analytics: false, marketing: false };

function readRecord(): ConsentRecord | null {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (value?.version !== 2 || typeof value.savedAt !== "number" ||
      value.savedAt > Date.now() || Date.now() - value.savedAt > MAX_AGE ||
      typeof value.preferences?.analytics !== "boolean" ||
      typeof value.preferences?.marketing !== "boolean") return null;
    return value;
  } catch { return null; }
}

function useConsentState() {
  const [record, setRecord] = useState<ConsentRecord | null>(readRecord);
  const [settingsOpen, setSettingsOpen] = useState(() => !readRecord());
  useEffect(() => {
    const sync = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY || event.key === null) {
        const next = readRecord();
        setRecord(next);
        setSettingsOpen(!next);
      }
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  const savePreferences = useCallback((preferences: CookiePreferences) => {
    const next: ConsentRecord = {
      version: 2, savedAt: Date.now(),
      preferences: { analytics: !!preferences.analytics, marketing: !!preferences.marketing },
    };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* Keep the choice for this visit if storage is blocked. */ }
    setRecord(next);
    setSettingsOpen(false);
  }, []);
  return {
    preferences: record?.preferences ?? denied,
    hasMadeChoice: record !== null,
    settingsOpen,
    savePreferences,
    acceptAll: () => savePreferences({ analytics: true, marketing: true }),
    rejectAll: () => savePreferences(denied),
    openSettings: () => setSettingsOpen(true),
    closeSettings: () => { if (record) setSettingsOpen(false); },
  };
}

const CookieConsentContext = createContext<ReturnType<typeof useConsentState> | null>(null);
export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const value = useConsentState();
  return createElement(CookieConsentContext.Provider, { value }, children);
}
export function useCookieConsent() {
  const value = useContext(CookieConsentContext);
  if (!value) throw new Error("useCookieConsent requires CookieConsentProvider");
  return value;
}
