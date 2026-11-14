# Translation intermediary wording review

Status: draft for factual review. These changes clarify the advertised service; they do not establish Google Ads eligibility or guarantee approval.

## Service shown to customers

- Čína Solo arranges an order for a Chinese translation of an existing driving licence and coordinates payment and delivery.
- A partner translation agency in China prepares the translation.
- A translation is not a driving permit. The customer applies separately to the relevant Chinese authority; acceptance and issuance are not guaranteed.
- The displayed base price is 1,399 CZK. Existing delivery prices are preserved: China 0 CZK, Czechia standard 1,190 CZK, Czechia express 1,780 CZK. Government charges are excluded.
- Visible FAQs and FAQ structured data share the same source. The previous permit product schema and its inconsistent 2,500 CZK price are replaced with a translation intermediation service schema.

## Facts needed before publication and advertising review

1. Obtain the exact Google rejection notice and establish whether it concerns an ad disapproval, certification, or an account suspension.
2. Confirm the Chinese agency's full legal name, address, contact details, and any credentials claimed for its translations. Add verified details to the service description and relevant terms/privacy information.
3. Confirm who the customer contracts with, who receives the Stripe payment, who invoices the customer, and how the intermediary's fee and agency charge are handled. Existing terms describe the customer paying Čína Solo, which pays the partner. The draft therefore does not assert a direct customer-agency sale.
4. Check the real Stripe product title, description, price, delivery options, merchant identity, receipt, and post-payment instructions against this wording. External Stripe configuration is not changed by this pull request.
5. Verify that the actual service excludes filing permit applications or representing customers before authorities, as described in the draft.
6. Run the production build and browser checks before merging. This environment could not obtain project dependencies. Source and content checks alone do not establish a passing build.
7. Review existing consumer terms and privacy disclosures separately; this wording update is not a legal certification of those documents.

## Google Ads path

Official sources checked on 14 November 2026:

- [Government documents and services](https://support.google.com/adspolicy/answer/13156083?hl=en)
- [October 2026 authorized-provider update](https://support.google.com/adspolicy/answer/17260489?hl=en)
- [Misrepresentation](https://support.google.com/adspolicy/answer/6020955?hl=en)

Google restricts ads promoting direct acquisition of driving licences. Intermediary status is not a listed driver-licence business exclusion. A private contract with an agency does not establish government authorization under the October 2026 update.

If the real offer is solely translation and delivery, request Google's determination using the option for ads believed to be outside the government-documents policy. This is an assessment to request, not an exemption established by this draft. Complete advertiser verification and any certification process Google requires. If the real offer includes obtaining a restricted government document, follow the applicable certification requirements.

Keep the agency's real identity, pricing, merchant identity, ads, landing page, checkout, terms, and fulfilment consistent. Do not describe a permit-acquisition service as translation merely to change the policy classification.

## Validation recorded in this environment

- Source files reviewed against the original main-branch snapshot.
- Shared FAQ/service data evaluated successfully; required intermediary and permit distinctions checked.
- All relative and alias imports in changed source files checked for local targets.
- Delivery totals checked against the displayed base and delivery prices.
- Full application build and browser layout remain unverified because project dependencies were unavailable.
