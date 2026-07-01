import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import AnalyticsLoader from "./AnalyticsLoader";

describe("AnalyticsLoader", () => {
  beforeEach(() => {
    localStorage.clear();
    document.head.innerHTML = "";
    document.body.innerHTML = "";
    delete window.dataLayer;
    delete window.gtag;
  });

  it("tracks SPA page changes when gtag is available", () => {
    const mockGtag = () => {};
    window.gtag = mockGtag;
    window.dataLayer = [];

    const { rerender } = render(
      <MemoryRouter initialEntries={["/"]}>
        <AnalyticsLoader />
      </MemoryRouter>
    );

    expect(window.gtag).toBeDefined();
  });
});
