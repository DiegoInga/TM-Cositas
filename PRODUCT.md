# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Families and individuals in Lima Metropolitana, Peru, planning a celebration (birthdays — including kids' themed parties such as Mario Bros, Pokémon, Hot Wheels, Paw Patrol, Harry Potter, farm/"La Granja," and sea-creature/mermaid themes — quinceañeros, bautizos, baby showers, and graduations) who want a decorator to design and set up the event. They arrive comparing options and want to quickly see whether TM Cositas' style matches what they picture for their event, then reach out to get a quote.

## Product Purpose

TM Cositas designs and installs themed event decoration (birthdays, quinceañeros, bautizos, baby showers, graduations) in Lima Metropolitana. Success is a visitor recognizing a theme/style they want and contacting the owner directly on WhatsApp to request it.

## Positioning

Fully custom, themed decoration per event (not generic rental kits) — the same team designs and executes across many event types and themes (licensed character themes included), covering birthdays through baptisms and quinceañeros. Contact and quoting happen directly and personally over WhatsApp with the owner, not through a form/checkout funnel.

## Operating Context

- Service area: Lima Metropolitana, Peru.
- All inquiry/contact CTAs route to the owner's WhatsApp (`WHATSAPP_URL` in `src/lib/constants.ts`); there is no other lead-capture or checkout flow today.
- Event types currently offered, with equal priority (no single flagship): cumpleaños temáticos infantiles, quinceañeros, bautizos, baby showers, graduaciones, and general "eventos especiales."
- Portfolio photos are supplied by the owner in batches over time; the site must look complete with the current, smaller image set and absorb more images later without restructuring.

## Capabilities and Constraints

- Built with Astro 5 + Tailwind CSS + shadcn/ui (Radix primitives); React installed but unused. Static site, no backend/CMS.
- No booking/payment system — WhatsApp is the sole conversion channel.
- Current asset set is limited (see Evidence on Hand); design must degrade gracefully with few images per category, not assume a large gallery.

## Brand Commitments

- Name: **TM Cositas**. Existing tagline in copy: "Donde la magia cobra vida."
- Existing voice (from current copy/features): warm, magical/whimsical, personal, love/care-driven, celebratory — not corporate or minimal.
- Existing brand colors in use: pink/magenta accents (`pink-500/600`) and a navy text color; logo assets exist at `public/image/logo-tmcositass.*`.
- Two reference sites in `desing-references-guie/` (Bloom & Grace, LJ's Partyland) were shared by the owner as the *quality/structure bar to reach* (editorial hero, clear signature-work gallery, polished CTAs) — not a literal palette or industry match, since those are elegant floral/wedding sites and TM Cositas is warmer and kid/theme-driven. Visual direction itself is decided in new-work, not recorded here.

## Evidence on Hand

- Real event photos confirmed by the owner, reviewed and correctly re-identified by theme (the original `events.ts` captions had several mismatched, e.g. a farm-theme photo labeled "Frozen" — corrected during this redesign):
  - Cumpleaños temáticos infantiles (9 photos): `image1.jpeg` (Harry Potter/"9¾" — Martina), `image2.jpeg` (fondo marino/sirenas — Sofía), `image3.jpeg` ("La Granja de Gianfranco"), `image4.jpeg` (Mario Bros — Fabianna), `image5.jpg` (Hot Wheels — Juan Diego, carries a visible TM Cositas watermark), `image6.jpg` (Paw Patrol — Cielo), `imagen8.jpg` ("La Granja de Roque"), `mariobros.jpg` (Mario Bros — Alessandro), `pokemons.jpg` (Pokémon — Giacomo, carries a visible T&M Cositas watermark).
  - Baby Shower (1 photo): `imagen7.jpg` ("Oh Baby" — Alessio).
  - Quinceañero, Bautizo, Graduación: **no real photo yet** — do not force-fit an unrelated photo under these labels; show a "próximamente" placeholder that still routes to WhatsApp.
- `cumple.jpg` (a dessert/candy-table photo) and `fotito.jpg`/`fotito.png` (a generic kids-at-a-party stock-style photo) carry no identifying theme/branding — usable only as unlabeled supporting/detail imagery, never captioned as a specific client event.
- Logo files: `public/image/logo-tmcositass.jpg`, `logo-tmcositass.webp`, `logo-tmcositas.ico`, `logo-tmcositas1.ico`.
- No testimonials, reviews, pricing, or case studies exist yet — do not fabricate any.
- More real event photos will be added by the owner over time, especially for Quinceañero/Bautizo/Graduación; current build must work with today's set and slot new photos in without restructuring.

## Product Principles

1. Every path on the site ends at a WhatsApp conversation with the owner — no dead-end pages, no competing CTAs.
2. Show, don't just tell: real photos of the actual themes/events carry more weight than icon rows or generic promise copy.
3. Treat all current event types (birthdays, quinceañeros, bautizos, baby showers, graduaciones) as equally first-class in navigation and structure.
4. Design must hold up today with a modest photo set and expand cleanly as the owner adds more images, without a rebuild.
