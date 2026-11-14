import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { MemoryRouter, useNavigate } from "react-router-dom";
import AnalyticsLoader from "./AnalyticsLoader";
import CookieBanner from "./CookieBanner";
import { CookieConsentProvider, useCookieConsent } from "@/hooks/useCookieConsent";

function Controls() {
  const consent = useCookieConsent();
  const navigate = useNavigate();
  return <><button onClick={consent.openSettings}>Settings</button>
    <button onClick={() => navigate("/kontakt")}>Next page</button></>;
}
function App() {
  return <CookieConsentProvider><MemoryRouter>
    <Controls /><CookieBanner /><AnalyticsLoader />
  </MemoryRouter></CookieConsentProvider>;
}
function commands() {
  return (window.dataLayer || []).map(value => Array.from(value as ArrayLike<unknown>));
}
describe("cookie choice controls tracking across components", () => {
  beforeEach(() => {
    localStorage.clear();
    document.querySelectorAll("script").forEach(element => element.remove());
    delete window.gtag; delete window.dataLayer; delete window.fbq; delete window._fbq;
  });
  afterEach(cleanup);
  it("does not load trackers before consent or after rejecting, including on navigation", () => {
    render(<App />);
    expect(document.querySelectorAll("script")).toHaveLength(0);
    fireEvent.click(screen.getByRole("button", { name: "Odmítnout volitelné" }));
    fireEvent.click(screen.getByRole("button", { name: "Next page" }));
    expect(document.querySelectorAll("script")).toHaveLength(0);
    expect(window.gtag).toBeUndefined();
    expect(window.fbq).toBeUndefined();
  });
  it("applies an analytics-only choice immediately and lets the footer control reopen it", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Vlastní nastavení" }));
    fireEvent.click(screen.getByRole("switch", { name: "Analytika", exact: true }));
    fireEvent.click(screen.getByRole("button", { name: "Uložit výběr" }));
    expect(document.getElementById("consented-google-tag")).not.toBeNull();
    expect(document.getElementById("consented-meta-pixel")).toBeNull();
    expect(commands().some(command => command[0] === "event" && command[1] === "page_view")).toBe(true);
    fireEvent.click(screen.getByRole("button", { name: "Next page" }));
    expect(commands().some(command => command[0] === "event" &&
      (command[2] as { page_path?: string })?.page_path === "/kontakt")).toBe(true);
    fireEvent.click(screen.getByRole("button", { name: "Settings" }));
    expect(screen.getByRole("switch", { name: "Analytika", exact: true })).toBeChecked();
    fireEvent.click(screen.getByRole("button", { name: "Odmítnout volitelné" }));
    expect((window as unknown as Record<string, unknown>)["ga-disable-G-G0TRYRJ6J5"]).toBe(true);
  });
  it("offers one-click refusal and acceptance without requiring category controls", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: "Odmítnout volitelné" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Přijmout vše" })).toBeVisible();
    expect(screen.queryByRole("switch")).not.toBeInTheDocument();
    expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();
  });
  it("keeps custom choices off until saved and allows returning without consenting", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Vlastní nastavení" }));
    expect(screen.getByRole("switch", { name: "Analytika", exact: true })).not.toBeChecked();
    expect(screen.getByRole("switch", { name: "Reklamní měření" })).not.toBeChecked();
    fireEvent.click(screen.getByRole("switch", { name: "Reklamní měření" }));
    expect(document.querySelectorAll("script")).toHaveLength(0);
    fireEvent.keyDown(screen.getByRole("switch", { name: "Reklamní měření" }), { key: "Escape" });
    expect(screen.getByRole("button", { name: "Vlastní nastavení" })).toBeInTheDocument();
    expect(localStorage.getItem("cookie-consent-v2")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Odmítnout volitelné" }));
    expect(document.querySelectorAll("script")).toHaveLength(0);
  });
  it("does not reuse the legacy blanket consent", () => {
    localStorage.setItem("cookie-consent", "accepted");
    render(<App />);
    expect(screen.getByRole("button", { name: "Vlastní nastavení" })).toBeInTheDocument();
    expect(document.querySelectorAll("script")).toHaveLength(0);
  });
  it("ignores expired and malformed records", () => {
    localStorage.setItem("cookie-consent-v2", JSON.stringify({
      version: 2, savedAt: 1, preferences: { analytics: true, marketing: true },
    }));
    const view = render(<App />);
    expect(document.querySelectorAll("script")).toHaveLength(0);
    view.unmount();
    localStorage.setItem("cookie-consent-v2", "{invalid");
    render(<App />);
    expect(document.querySelectorAll("script")).toHaveLength(0);
  });
  it("honours a consent revocation from another tab", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Přijmout vše" }));
    expect(window.fbq).toBeDefined();
    act(() => {
      localStorage.removeItem("cookie-consent-v2");
      window.dispatchEvent(new StorageEvent("storage", { key: "cookie-consent-v2" }));
    });
    expect((window as unknown as Record<string, unknown>)["ga-disable-G-G0TRYRJ6J5"]).toBe(true);
    expect(screen.getByRole("button", { name: "Vlastní nastavení" })).toBeInTheDocument();
  });
});
