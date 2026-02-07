import { useEffect } from "react";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const GA_MEASUREMENT_ID = "G-G0TRYRJ6J5";

const AnalyticsLoader = () => {
  const { hasConsented } = useCookieConsent();

  useEffect(() => {
    if (!hasConsented) return;
    if (document.getElementById("ga-script")) return;

    // Initialize dataLayer and gtag BEFORE loading the script (Google's recommended pattern)
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID);
    (window as unknown as { gtag: typeof gtag }).gtag = gtag;

    // Load the gtag.js script
    const script = document.createElement("script");
    script.id = "ga-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }, [hasConsented]);

  return null;
};

// Type declaration for window
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export default AnalyticsLoader;
