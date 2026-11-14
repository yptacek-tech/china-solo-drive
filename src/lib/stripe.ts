export type DeliveryRegion = "CZ" | "CN";

export const DELIVERY_CHECKOUTS = {
  CZ: { url: "https://buy.stripe.com/7sY00k2PMf8F34v3r55gc03", minimumTotalCzk: 2589 },
  CN: { url: "https://buy.stripe.com/7sY3cw2PM9Ol0Wn5zd5gc04", minimumTotalCzk: 1399 },
} as const;

// Kept for callers that use the Czech-delivery checkout.
export const STRIPE_CHECKOUT_URL = DELIVERY_CHECKOUTS.CZ.url;
