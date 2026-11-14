import type { PropsWithChildren } from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import PricingSection from "./PricingSection";
import { DELIVERY_CHECKOUTS } from "@/lib/stripe";

vi.mock("framer-motion", () => ({
  motion: { div: ({ children }: PropsWithChildren) => <div>{children}</div> },
}));
afterEach(cleanup);

describe("delivery-specific checkout", () => {
  it("defaults to the Czech checkout instead of offering free China shipping on a Czech address", () => {
    render(<MemoryRouter><PricingSection /></MemoryRouter>);
    expect(screen.getByRole("radio", { name: /Doručení do ČR/ })).toBeChecked();
    expect(screen.getByRole("link", { name: "Objednat balíček", exact: true }))
      .toHaveAttribute("href", DELIVERY_CHECKOUTS.CZ.url);
  });
  it("routes a China delivery to the separate China-only checkout", () => {
    render(<MemoryRouter><PricingSection /></MemoryRouter>);
    fireEvent.click(screen.getByRole("radio", { name: /Doručení v Číně/ }));
    expect(screen.getByRole("radio", { name: /Doručení v Číně/ })).toBeChecked();
    expect(screen.getByRole("radio", { name: /Doručení do ČR/ })).not.toBeChecked();
    expect(screen.getByRole("link", { name: "Objednat balíček", exact: true }))
      .toHaveAttribute("href", DELIVERY_CHECKOUTS.CN.url);
  });
});
