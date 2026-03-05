# AGENTS.md — TM-Cositas

Guidance for agentic coding assistants working in this repository.

---

## Project Overview

**TM-Cositas** is a static marketing/landing site for an event decoration business.
Built with **Astro 5**, styled with **Tailwind CSS** and **shadcn/ui** CSS variables.
React is installed and configured but currently no React components (`.tsx`/`.jsx`) exist — all
components are `.astro` files. The site has three pages: `/` (home), `/deco`, and `/servicios`.

---

## Commands

```bash
# Start dev server with HMR
npm run dev
# or
npm start

# Type-check + production build
npm run build          # runs: astro check && astro build

# Serve the production build locally
npm run preview

# Run the raw Astro CLI
npm run astro -- <command>

# Type-checking only (no build output)
npm run astro -- check
```

> **No lint, format, or test scripts exist.** Do not invent or assume commands for these.
> If you add a testing framework, document it here and add an npm script for it.

### Running a single test
There is currently **no test infrastructure**. If tests are added (recommended: Vitest for
unit tests, Playwright for end-to-end), use:
```bash
# Vitest (once configured)
npx vitest run src/path/to/file.test.ts

# Playwright (once configured)
npx playwright test tests/specific.spec.ts
```

---

## Tech Stack

| Layer            | Technology                                  |
|------------------|---------------------------------------------|
| Meta-framework   | Astro 5.x                                   |
| UI integration   | `@astrojs/react` (React 18)                 |
| Language         | TypeScript 5.x — **strict mode**            |
| Styling          | Tailwind CSS 3.x + `tailwindcss-animate`    |
| Component lib    | shadcn/ui (Radix UI primitives + CVA)        |
| Utility          | `clsx` + `tailwind-merge` via `src/lib/utils.ts` |
| Icons            | `lucide-react`, `@heroicons/react`, `astro-icon`, inline SVG |
| Validation       | Zod (installed, not yet used in forms)      |
| Forms            | react-hook-form (installed, not yet wired)  |

---

## TypeScript

- Extends `astro/tsconfigs/strict` — **strict mode is always on**.
- `noImplicitAny`, `strictNullChecks`, and all strict flags are active.
- JSX is configured for React: `"jsx": "react-jsx"`, `"jsxImportSource": "react"`.
- Define `interface Props` inline in Astro frontmatter for component props.
- Prefer `interface` over `type` for object shapes; use `type` for unions/aliases.
- Always type function parameters and return values explicitly in `.ts`/`.tsx` files.

---

## Path Aliases

All imports must use the defined aliases — **never use `../` relative imports** across
directory boundaries. Aliases are defined in `tsconfig.json`:

| Alias             | Resolves to          | Use for                        |
|-------------------|----------------------|--------------------------------|
| `@components/*`   | `src/components/*`   | Component imports              |
| `@layouts/*`      | `src/layouts/*`      | Layout imports                 |
| `@pages/*`        | `src/pages/*`        | Page-level imports             |
| `@lib/*`          | `src/lib/*`          | Shared utilities               |
| `@data/*`         | `src/data/*`         | Centralized data/content files |
| `@src/*`          | `src/styles/*`       | Global CSS imports             |
| `@/*`             | `src/*`              | shadcn/ui convention (`@/lib/utils`) |

```astro
---
// Good
import Layout from "@layouts/Layout.astro";
import Header from "@components/Header.astro";
import { cn } from "@lib/utils";
---
```

---

## File & Folder Naming

| Artifact                     | Convention          | Example                        |
|------------------------------|---------------------|--------------------------------|
| Pages (`src/pages/`)         | `lowercase`         | `index.astro`, `servicios.astro` |
| Layouts (`src/layouts/`)     | `PascalCase`        | `Layout.astro`                 |
| Top-level components         | `PascalCase`        | `Header.astro`, `Footer.astro` |
| Sub-folder components        | `lowercase`         | `portada.astro`, `crear.astro` |
| Feature folders              | `lowercase-kebab`   | `sections-servis/`             |
| Utility files                | `lowercase`         | `utils.ts`, `globals.css`      |
| TypeScript interfaces/types  | `PascalCase`        | `interface ImageData { ... }`  |
| Variables & functions        | `camelCase`         | `const menuToggle`, `function slide()` |
| HTML `id` attributes         | `kebab-case`        | `id="mobile-menu"`             |
| CSS class names              | `kebab-case`        | `.whatsapp-float`, `.carousel-slide` |

---

## Code Style

### Formatting
No Prettier or ESLint config is present. Follow these conventions consistently:
- **Indentation:** 2 spaces (not tabs, not 4 spaces).
- **Quotes:** Double quotes for JS/TS strings and imports.
- **Semicolons:** Required in TypeScript/JavaScript.
- **Trailing commas:** Add in multi-line arrays and objects.
- **Line length:** Keep lines under ~100 characters.

### Astro Components
- Place all imports and logic in the `---` frontmatter block.
- Scripts that need DOM access: use `<script>` with `type="module"` (not `is:inline` unless required).
- Avoid `is:inline` scripts — they skip bundling and TypeScript checking.
- Scoped styles live in `<style>` blocks; use Tailwind utilities first before writing custom CSS.
- Pass data to `<script>` via `data-*` attributes or `define:vars`.

### Tailwind & CSS
- Use Tailwind utility classes as the primary styling mechanism.
- Use `cn()` from `@lib/utils` for conditional/merged class names.
- shadcn/ui CSS variables are defined in `src/styles/globals.css` — do not remove them.
- Custom CSS belongs in scoped `<style>` blocks or `globals.css`; avoid inline `style` attributes.
- The active Tailwind config is `tailwind.config.js` (not `tailwind.config.mjs`).

### Imports Order (in frontmatter / TS files)
1. Framework/external packages
2. Internal path-alias imports (`@layouts/`, `@components/`, `@lib/`)
3. CSS/style imports
4. Type-only imports (`import type { ... }`)

---

## Component Architecture

- **Pages** (`src/pages/`) import and compose top-level section components.
- **Top-level components** (`src/components/*.astro`) map to major page sections.
- **Sub-folder components** (`sections-servis/`, `sectiions-deco/`) are used exclusively by
  their corresponding page — keep them co-located.
- `src/layouts/Layout.astro` is the single shared HTML shell; all pages use it via
  `<Layout title="..." description="...">`. The `globals.css` import lives here — do **not**
  re-import it in individual pages.
- `src/components/WhatsAppButton.astro` — extracted floating WhatsApp CTA; already included by
  `Layout.astro`. Do not add a second instance in any page or section component.
- `src/lib/utils.ts` is for pure, framework-agnostic TypeScript utilities only.

### Centralized data files (`src/data/`)

All hard-coded content arrays live in `src/data/`. **Do not repeat inline data in components.**

| File                  | Exports                              | Used by                         |
|-----------------------|--------------------------------------|---------------------------------|
| `navigation.ts`       | `NAV_LINKS`                          | `Header.astro`, `Footer.astro`  |
| `images.ts`           | `CAROUSEL_IMAGES`, `GALLERY_IMAGES`  | `Inicio.astro`, `Reserva.astro` |
| `features.ts`         | `FEATURES`                           | `Caracteristicas.astro`         |
| `events.ts`           | `EVENTS`                             | `eventos.astro`                 |
| `services.ts`         | `SERVICES`, `PROCESS_STEPS`          | `portada.astro`, `crear.astro`  |

### Shared constants (`src/lib/constants.ts`)

- `WHATSAPP_URL` — the single direct contact number (`https://wa.me/51908618955`).
  **Always use this constant** — never hard-code the number in markup.
- `SOCIAL_LINKS` — object with `facebook`, `instagram`, `tiktok`, `whatsapp` URLs.

### Shared types (`src/lib/types.ts`)

All data-file interfaces are defined here: `ImageData`, `NavLink`, `SocialLink`, `Feature`,
`EventCard`, `ServiceCard`, `ProcessStep`. Import with `import type { ... } from "@lib/types"`.

---

## Error Handling

- Guard DOM queries before use: `if (element) { element.addEventListener(...) }`.
- No `try/catch` patterns currently needed (static site, no async data fetching).
- If async operations are added (API calls, form submissions), always wrap in `try/catch`
  and surface errors to the user via a toast (sonner is installed) or inline message.
- Validate user input with Zod schemas before processing.
- Never `console.error` silently in production paths — either re-throw or handle visibly.

---

## Existing Quirks / Known Issues

- **Two Tailwind configs:** `tailwind.config.js` is the active one (referenced by `components.json`).
  `tailwind.config.mjs` is a leftover stub — do not add config to it.
- **Folder typo:** `src/components/sectiions-deco/` has an extra `i`. Do not rename without
  updating all imports.
- **Unused dependencies:** Many shadcn/ui-related packages are installed but unused
  (MUI, recharts, vaul, cmdk, etc.). Do not remove them without confirming with the project owner.
- **Non-web files in `public/`:** `public/icons/` and `public/image/` contain stray `.docx`/`.xlsx`
  files — leave them in place.
- **No `.env` file:** No environment variables are in use. If added, never commit secrets.
- **`@data/*` LSP cache:** The language server may report "Cannot find module '@data/...'" after
  first adding new files under `src/data/`. This is a stale LSP cache artifact — the alias is
  correctly declared in both `tsconfig.json` and `astro.config.mjs`. The build (`npm run build`)
  always resolves it correctly. Restart the TS language server to clear the error.
- **Security upgrades (2025):** `npm audit fix --force` was run to patch 29 vulnerabilities.
  Astro was upgraded to 5.x (major bump), swiper to 12.x, and `@astrojs/check` downgraded to
  0.9.2 as part of a lodash transitive chain fix. Four remaining moderate vulns are lodash inside
  `yaml-language-server` (dev-only, no fix available). Do not downgrade these packages.

---

## Adding New Components

```bash
# Add a shadcn/ui component (uses tailwind.config.js + @/* alias)
npx shadcn-ui add <component-name>
```

Generated components land in `src/components/ui/`. Import them with `@/components/ui/<name>`.

---

## Git Hygiene

- Do not commit build output (`dist/`).
- Do not commit `.env` files or files with secrets.
- Commit messages: imperative mood, present tense (`Add carousel`, `Fix mobile menu`).
