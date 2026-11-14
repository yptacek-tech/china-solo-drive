import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { applyTrackingConsent, trackPage, GA_ID, ADS_ID } from "./tracking";

function commands() {
  return (window.dataLayer || []).map(value => Array.from(value as ArrayLike<unknown>));
}
describe("tracking consent and page events", () => {
  beforeEach(() => {
    document.querySelectorAll("script").forEach(element => element.remove());
    document.cookie.split(";").forEach(value => {
      document.cookie = value.split("=")[0].trim() + "=; Max-Age=0; path=/";
    });
    delete window.gtag; delete window.dataLayer; delete window.fbq; delete window._fbq;
  });
  afterEach(() => vi.restoreAllMocks());
  it("makes no tracker available without opt-in", () => {
    applyTrackingConsent({ analytics: false, marketing: false });
    trackPage("/", { analytics: false, marketing: false });
    expect(document.querySelectorAll("script")).toHaveLength(0);
    expect(window.gtag).toBeUndefined();
    expect(window.fbq).toBeUndefined();
  });
  it("analytics consent does not opt into advertising", () => {
    applyTrackingConsent({ analytics: true, marketing: false });
    expect(document.getElementById("consented-google-tag")?.getAttribute("src")).toContain(GA_ID);
    expect(document.getElementById("consented-meta-pixel")).toBeNull();
    expect(commands().filter(command => command[0] === "config").map(command => command[1])).toEqual([GA_ID]);
    expect(commands().find(command => command[0] === "consent" && command[1] === "update")?.[2])
      .toMatchObject({ analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied" });
  });
  it("marketing consent does not configure analytics", () => {
    applyTrackingConsent({ analytics: false, marketing: true });
    expect(document.getElementById("consented-google-tag")?.getAttribute("src")).toContain(ADS_ID);
    expect(document.getElementById("consented-meta-pixel")).not.toBeNull();
    expect(commands().filter(command => command[0] === "config").map(command => command[1])).toEqual([ADS_ID]);
    expect((window as unknown as Record<string, unknown>)["ga-disable-" + GA_ID]).toBe(true);
  });
  it("does not insert duplicate tags when settings are updated", () => {
    applyTrackingConsent({ analytics: true, marketing: true });
    applyTrackingConsent({ analytics: true, marketing: true });
    expect(document.querySelectorAll("#consented-google-tag")).toHaveLength(1);
    expect(document.querySelectorAll("#consented-meta-pixel")).toHaveLength(1);
    expect(window.fbq?.queue.filter(command => command[0] === "init")).toHaveLength(1);
  });
  it("revokes vendors and clears available first-party measurement cookies", () => {
    applyTrackingConsent({ analytics: true, marketing: true });
    document.cookie = "_ga=123; path=/";
    document.cookie = "_fbp=123; path=/";
    document.cookie = "_gcl_au=123; path=/";
    const pixel = vi.fn();
    window.fbq = Object.assign(pixel, { queue: [], loaded: true, version: "2.0" });
    applyTrackingConsent({ analytics: false, marketing: false });
    expect(pixel).toHaveBeenCalledWith("consent", "revoke");
    expect(document.cookie).not.toMatch(/_ga=|_fbp=|_gcl_au=/);
    expect((window as unknown as Record<string, unknown>)["ga-disable-" + GA_ID]).toBe(true);
    const count = commands().length;
    trackPage("/kontakt", { analytics: false, marketing: false });
    expect(commands()).toHaveLength(count);
  });
  it("does not treat a public success URL as a purchase", () => {
    window.gtag = vi.fn();
    window.fbq = Object.assign(vi.fn(), { queue: [], loaded: true, version: "2.0" });
    trackPage("/success", { analytics: true, marketing: true });
    expect(window.gtag).not.toHaveBeenCalled();
    expect(window.fbq).not.toHaveBeenCalled();
  });
  it("sends only the route as an analytics page location", () => {
    window.gtag = vi.fn();
    trackPage("/kontakt", { analytics: true, marketing: false });
    expect(window.gtag).toHaveBeenCalledWith("event", "page_view",
      expect.objectContaining({ page_location: window.location.origin + "/kontakt", send_to: GA_ID }));
  });
});
