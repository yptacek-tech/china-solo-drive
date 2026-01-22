import { useEffect } from "react";
import { useCookieConsent } from "@/hooks/useCookieConsent";

// Replace these with your actual tracking IDs
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
const CLARITY_PROJECT_ID = "xxxxxxxxxx";

const AnalyticsLoader = () => {
  const { hasConsented } = useCookieConsent();

  useEffect(() => {
    if (!hasConsented) return;

    // Load Google Analytics
    const loadGoogleAnalytics = () => {
      // Check if already loaded
      if (document.getElementById("ga-script")) return;

      const script = document.createElement("script");
      script.id = "ga-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: unknown[]) {
          window.dataLayer.push(args);
        }
        gtag("js", new Date());
        gtag("config", GA_MEASUREMENT_ID);
        
        // Make gtag available globally
        (window as unknown as { gtag: typeof gtag }).gtag = gtag;
      };
    };

    // Load Microsoft Clarity
    const loadClarity = () => {
      // Check if already loaded
      if (document.getElementById("clarity-script")) return;

      const script = document.createElement("script");
      script.id = "clarity-script";
      script.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
      `;
      document.head.appendChild(script);
    };

    loadGoogleAnalytics();
    loadClarity();
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
