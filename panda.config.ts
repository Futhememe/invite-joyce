import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          lightgreen: { value: "#E7EDDF" },
          green: { value: "#234723" },
          yellow: { value: "#FFFEF4" },
        },
        fonts: {
          body: { value: '"Quicksand", sans-serif' },
          display: { value: '"Britney", cursive' },
        },
      },
      semanticTokens: {
        colors: {
          background: { value: "{colors.yellow}" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",
});
