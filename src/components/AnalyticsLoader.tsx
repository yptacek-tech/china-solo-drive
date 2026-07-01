import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID = "G-G0TRYRJ6J5";

const AnalyticsLoader = () => {
  const location = useLocation();

  useEffect(() => {
    // Track SPA page changes after initial load
    // The initial page view is already tracked by the inline tag in index.html
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);

  return null;
};

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

export default AnalyticsLoader;
