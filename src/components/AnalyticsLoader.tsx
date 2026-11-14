import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { applyTrackingConsent, trackPage } from "@/lib/tracking";

const AnalyticsLoader = () => {
  const { pathname } = useLocation();
  const { preferences } = useCookieConsent();
  const { analytics, marketing } = preferences;
  const isPaymentReturn = pathname === "/success";
  useEffect(() => {
    applyTrackingConsent({ analytics: analytics && !isPaymentReturn, marketing: marketing && !isPaymentReturn });
  }, [analytics, marketing, isPaymentReturn]);
  useEffect(() => {
    trackPage(pathname, { analytics, marketing });
  }, [pathname, analytics, marketing]);
  return null;
};
export default AnalyticsLoader;
