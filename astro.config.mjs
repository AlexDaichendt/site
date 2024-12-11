// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkEmoji from "remark-emoji";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";
import { remarkReadingTime } from "./src/remark/remark-reading-time";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: "hover",
    prefetchAll: true,
  },
  site: "https://daichendt.one",
  integrations: [
    mdx({
      remarkPlugins: [remarkEmoji, remarkReadingTime],
    }),
    sitemap(),
    tailwind(),
    icon(),
  ],
});
