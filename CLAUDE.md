# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Read `AGENTS.md` first.** It is the authoritative, detailed guide for this repo (commands,
> path aliases, naming conventions, code style, data-file map, known quirks). This file only adds
> a short orientation and anything AGENTS.md doesn't cover — do not let the two drift into
> contradicting each other.

## Project

TM-Cositas is a static marketing/landing site (event decoration business) built with **Astro 5**
+ Tailwind CSS + shadcn/ui (Radix primitives). All pages/components are currently `.astro` files;
React is installed via `@astrojs/react` but unused so far. Three routes: `/`, `/deco`, `/servicios`.

## Commands

```bash
npm run dev       # dev server (HMR)
npm run build     # astro check && astro build — always run before considering a task done
npm run preview   # serve the production build
```

No lint, format, or test tooling exists — don't invent scripts for these (see AGENTS.md for
recommendations if adding a test framework).

## Architecture essentials

- **Data-driven content**: hard-coded content lives in `src/data/*.ts` (nav, images, features,
  events, services), typed via `src/lib/types.ts`. Components import from there — never inline
  content arrays into a component.
- **Path aliases** (`@components`, `@layouts`, `@pages`, `@lib`, `@data`, `@src`, `@/*`) are
  mandatory for imports; no cross-directory relative `../` imports. Declared in both
  `tsconfig.json` and `astro.config.mjs` (the `@data` alias needs both).
- **Layout**: `src/layouts/Layout.astro` is the single shared shell (imports `globals.css`,
  includes the floating `WhatsAppButton.astro`) — don't re-import globals.css or add a second
  WhatsApp button elsewhere.
- **Two Tailwind configs exist**: `tailwind.config.js` is the active one (wired via
  `components.json`); `tailwind.config.mjs` is a dead stub — never add config there.
- Contact/social links come from `src/lib/constants.ts` (`WHATSAPP_URL`, `SOCIAL_LINKS`) —
  never hard-code the WhatsApp number in markup.

## Skills

`.agent/skills/` (and mirrored `.agents/skills/`) contains local skills for `astro-framework`,
`react-components`, `shadcn-ui`, and `design-md` — consult these before making framework-level
or design-system decisions in this repo.
