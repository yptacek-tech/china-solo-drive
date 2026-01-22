import { useState, useEffect, useCallback } from "react";

const COOKIE_CONSENT_KEY = "cookie-consent";

type ConsentStatus = "pending" | "accepted" | "declined";

export const useCookieConsent = () => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>("pending");

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored === "accepted" || stored === "declined") {
      setConsentStatus(stored);
    }
  }, []);

  const acceptCookies = useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setConsentStatus("accepted");
  }, []);

  const declineCookies = useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setConsentStatus("declined");
  }, []);

  return {
    consentStatus,
    acceptCookies,
    declineCookies,
    hasConsented: consentStatus === "accepted",
    hasMadeChoice: consentStatus !== "pending",
  };
};
