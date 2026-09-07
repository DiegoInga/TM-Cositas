// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: "https://www.tmcositas.site",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    sitemap(),
  ],
  vite: {
    resolve: {
      alias: {
        "@data": path.resolve(__dirname, "src/data"),
      },
    },
  },
});
