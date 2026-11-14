import type { CookiePreferences } from "@/hooks/useCookieConsent";

export const GA_ID = "G-G0TRYRJ6J5";
export const ADS_ID = "AW-18281639357";
export const META_ID = "1517224419869559";

type Pixel = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push?: Pixel;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: Pixel;
    _fbq?: Pixel;
  }
}

function script(id: string, src: string) {
  if (document.getElementById(id)) return;
  const element = document.createElement("script");
  element.id = id;
  element.src = src;
  element.async = true;
  document.head.appendChild(element);
}

function clearCookies(pattern: RegExp) {
  const host = window.location.hostname;
  const parts = host.split(".");
  const domains = ["", host, "." + host];
  for (let i = 1; i < parts.length - 1; i++) domains.push("." + parts.slice(i).join("."));
  const paths = ["/"];
  const segments = window.location.pathname.split("/").filter(Boolean);
  for (let i = 1; i <= segments.length; i++) paths.push("/" + segments.slice(0, i).join("/"));
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (!pattern.test(name)) continue;
    for (const domain of domains) for (const path of paths) {
      document.cookie = name + "=; Max-Age=0; path=" + path +
        (domain ? "; domain=" + domain : "") + "; SameSite=Lax";
    }
  }
}

export function applyTrackingConsent(preferences: CookiePreferences) {
  const flags = window as unknown as Record<string, unknown>;
  flags["ga-disable-" + GA_ID] = !preferences.analytics;
  const consent = {
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_storage: preferences.marketing ? "granted" : "denied",
    ad_user_data: preferences.marketing ? "granted" : "denied",
    ad_personalization: preferences.marketing ? "granted" : "denied",
  };
  // Basic consent mode: no Google request before a relevant opt-in.
  if (preferences.analytics || preferences.marketing) {
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer?.push(arguments); };
      window.gtag("consent", "default", {
        analytics_storage: "denied", ad_storage: "denied",
        ad_user_data: "denied", ad_personalization: "denied",
      });
      window.gtag("js", new Date());
    }
    window.gtag("consent", "update", consent);
    script("consented-google-tag", "https://www.googletagmanager.com/gtag/js?id=" +
      (preferences.analytics ? GA_ID : ADS_ID));
  } else {
    window.gtag?.("consent", "update", consent);
  }
  if (preferences.analytics) {
    window.gtag?.("config", GA_ID, {
      send_page_view: false,
      allow_google_signals: preferences.marketing,
      allow_ad_personalization_signals: preferences.marketing,
    });
  } else {
    clearCookies(/^_ga(?:_|$)|^_gid$|^_gat/);
  }
  if (preferences.marketing) {
    window.gtag?.("config", ADS_ID, { send_page_view: false });
    if (!window.fbq) {
      const pixel = function (...args: unknown[]) {
        if (pixel.callMethod) pixel.callMethod(...args);
        else pixel.queue.push(args);
      } as Pixel;
      pixel.queue = [];
      pixel.push = pixel;
      pixel.loaded = true;
      pixel.version = "2.0";
      window.fbq = pixel;
      window._fbq = pixel;
      pixel("consent", "grant");
      pixel("set", "autoConfig", false, META_ID);
      pixel("init", META_ID);
    } else window.fbq("consent", "grant");
    script("consented-meta-pixel", "https://connect.facebook.net/en_US/fbevents.js");
  } else {
    window.fbq?.("consent", "revoke");
    clearCookies(/^_fbp$|^_fbc$|^_gcl/);
  }
}

export function trackPage(pathname: string, preferences: CookiePreferences) {
  // A public return URL is not proof of payment. Never send its Stripe session ID.
  if (pathname === "/success") return;
  const pageLocation = window.location.origin + pathname;
  if (preferences.analytics) window.gtag?.("event", "page_view", {
    send_to: GA_ID, page_path: pathname, page_location: pageLocation,
    page_referrer: document.referrer.split(/[?#]/)[0],
  });
  if (preferences.marketing) window.fbq?.("track", "PageView");
}
