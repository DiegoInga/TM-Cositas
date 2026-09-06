---
version: 1
slug: "site"
primary_target: "site"
related_targets: ["servicios","deco"]
---

## Scope & mode

Whole site redesign (Persuade). Three routes stay separate: `/` is the flagship "vision wall" that must convert on its own; `/servicios` and `/deco` go deep once someone is already curious. Redesign, not extension — old look is anti-reference only; content, event types, and the WhatsApp-only funnel carry over unchanged.

## Audience, job, proof, constraints

Parent/family in Lima planning a birthday, quinceañero, bautizo, baby shower or graduación, comparing decorators. They must believe TM Cositas can execute the specific theme they picture, at the reference sites' craft level, then message the owner's WhatsApp. Proof = the owner's real photos only (confirmed genuine); all 5 event types shown as equally first-class. No fabricated testimonials/pricing. Must hold up with today's modest photo count and absorb more later.

## Direction contract

THESIS: the home page is a vision wall, not a brochure — a full-bleed real-event scene under an editorial headline, refusing the generic pastel-clipart party-site default.

OWN-WORLD: structure pinned by the owner's two reference sites (Bloom & Grace, LJ's Partyland) — editorial full-bleed hero photo with dark-gradient overlay, kicker label + headline with one accent-colored word, sticky nav with a pill WhatsApp CTA, a "signature work" category grid (icon + caption), feature strip with icon+label. **Revised mid-build per a third reference the owner sent (chacra.maxttito.dev)**: tone shifts from bold/maximalist chrome to quiet and refined — the chrome (type, nav, spacing, buttons) stays minimal so the already-colorful party photography carries the energy, rather than competing with it. Typography changed from a display serif with italic accents to **Instrument Sans** (headlines/kickers) + **Plus Jakarta Sans** (UI/body), no italics anywhere. Warm cream ground alternating with a deep navy anchor section; pink/candy stays the one accent but used sparingly (buttons, small kickers) rather than as large saturated fields, matching how the reference uses its lime accent.

STORY: land → recognize craft/warmth → scroll "Nuestro Mundo" category tiles (Cumpleaños, Quinceañero, Bautizo, Baby Shower, Graduación) → trust/feature strip → a big two/three-photo highlight band → CTA band → footer. Every section ends looking at a WhatsApp action.

FIRST VIEWPORT: full-bleed real photo hero ~88vh, bottom-left dark gradient for legibility, sticky top nav (logo left, links, pill WhatsApp CTA right, compacts on scroll), kicker label, large serif headline with accent word, subhead, two CTAs (primary WhatsApp pill, secondary outline "Ver decoraciones"), small scroll cue.

FORM: no roll run — the owner's two reference URLs are a pinned catalog world (brief beats the roll); code-led (no image generation available in this environment, stated once here rather than asked).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved decisions

- Icon set referenced in `features.ts`/`services.ts` (birthday.svg, wand.svg, balloon.svg, people.svg, design.svg, check.svg) does not exist in `public/icons/` — will be replaced with `lucide-react`/inline SVG equivalents already available as a dependency, not treated as a content decision.
- More real event photos arrive later per category; category tiles must degrade gracefully with 1 photo today.
