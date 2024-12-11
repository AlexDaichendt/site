/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
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
