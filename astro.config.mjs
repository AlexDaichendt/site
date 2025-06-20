// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import remarkEmoji from "remark-emoji";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";
import { remarkReadingTime } from "./src/remark/remark-reading-time";

import cloudflare from "@astrojs/cloudflare";

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

  adapter: cloudflare({
    imageService: "compile",
    platformProxy: {
      enabled: true,
    },
  }),
});
