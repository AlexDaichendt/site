/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        // Mobile sizes
        "h1-mobile": ["2rem", { lineHeight: "1.2" }], // 32px
        "h2-mobile": ["1.75rem", { lineHeight: "1.2" }], // 28px
        "h3-mobile": ["1.5rem", { lineHeight: "1.2" }], // 24px
        "h4-mobile": ["1.25rem", { lineHeight: "1.2" }], // 20px
        "h5-mobile": ["1.1rem", { lineHeight: "1.2" }], // 17.6px
        "h6-mobile": ["1rem", { lineHeight: "1.2" }], // 16px

        // Desktop sizes
        h1: ["3rem", { lineHeight: "1.2" }],
        h2: ["2.7rem", { lineHeight: "1.2" }],
        h3: ["2.25rem", { lineHeight: "1.2" }],
        h4: ["2rem", { lineHeight: "1.2" }],
        h5: ["1.75rem", { lineHeight: "1.2" }],
        h6: ["1.5rem", { lineHeight: "1.2" }],
      },
      colors: {
        mytheme: {
          50: "#ecfcfb",
          100: "#caf3f4",
          200: "#a9e0eb",
          300: "#8ac9e0",
          400: "#6cabd4",
          500: "#4c99ca",
          600: "#3678ab",
          700: "#23558a",
          800: "#133664",
          900: "#071a3b",
        },
      },
    },
  },
  plugins: [
    // exposes the colors in the theme as --tw-mytheme-50, --tw-mytheme-100, etc. in :root
    require("@tailwind-plugin/expose-colors")({
      extract: ["mytheme"],
    }),
  ],
};
