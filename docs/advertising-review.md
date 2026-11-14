# Čína Solo: coordination and consent update

The service is a package of practical know-how and coordination. Jan Ptáček remains the disclosed legal operator and payment recipient. The site does not describe him as the translator or licence issuer, or claim that taking payment removes contractual responsibilities.

## Confirmed operating description

The customer pays Čína Solo through Stripe. Čína Solo pays the Chinese agency and coordinates the order and delivery. The agency receives document scans directly from the customer and prepares the translation. Čína Solo handles contact/order/delivery information, not document scans. The customer applies to the authority separately.

## Implemented

- Consistent package wording across hero, process, price, FAQs, service schema, navigation, contact, confirmation, and terms.
- No blanket claim that Čína Solo handles no personal data; the distinction is document scans versus necessary order/contact data.
- No fabricated agency identity, credentials, testimonials, document examples or guaranteed permit outcome.
- Analytics and marketing consent are separate, off by default, and shared across all UI components. Legacy blanket choices are not reused.
- Static Google/Meta tags and the noscript tracking image are removed. Dynamic tags require the relevant consent.
- Persistent cookie settings, vendor revocation commands, GA disable flag, accessible first-party measurement cookie cleanup, and cross-tab synchronization.
- No tracking or purchase conversion on the public payment-return page. Verified purchase measurement requires a trusted payment confirmation integration and remains a separate task.
- Privacy notice describes actual Google, Google Ads, Meta and Stripe use rather than claiming all data is anonymous or naming unused Microsoft Clarity.
- Terms preserve statutory remedies and withdrawal rights instead of blanket no-refund clauses. Any early-performance waiver needs a proper explicit checkout consent; it is not assumed from accepting terms.
- Beijing guide corrected and sourced: possible validity up to one year for qualifying stays, two photos per Beijing instructions, official processing within three working days, separate 10-yuan government fee.
- Netlify now runs the automated consent/tracking tests before building.

## Remaining external facts and configuration

- Exact Google rejection notice, ad creative and account status are still needed to choose the correct review/certification route.
- The Chinese agency's legal identity, document-retention practices, qualifications and data-protection arrangements must be verified. The site permits asking for partner details before ordering and receiving them before sending scans; it does not invent these facts.
- Stripe's external product title, description, shipping rates, receipt, merchant display and withdrawal/early-performance controls must match the package. This source update does not edit Stripe.
- Any stated delivery estimates and offer contents must match actual fulfilment.
- The rewrite is not a legal certification or a guarantee of Google/Meta approval.

## Sources checked 14 November 2026

- https://support.google.com/adspolicy/answer/13156083?hl=en
- https://support.google.com/adspolicy/answer/17260489?hl=en
- https://uoou.gov.cz/index.php/media-publikace/tiskove-zpravy/cookies-od-zacatku-roku-2022-pouze-se-souhlasem
- https://coi.gov.cz/faq/8-odstoupeni-od-smlouvy-do-14-dnu-u-digitalniho-obsahu/
- https://developers.google.com/tag-platform/security/guides/consent
- https://developers.google.com/tag-platform/security/guides/privacy
- https://english.beijing.gov.cn/mostrequested/drivinglicense/list/202012/t20201210_2161614.html

## Validation

Consent tests cover refusal, separate choices, immediate updates across components, legacy/expired/malformed records, revocation, cookie cleanup, route tracking, avoiding duplicate vendor tags and excluding the payment-return route. Netlify test/build results and browser findings are recorded in the pull request.
