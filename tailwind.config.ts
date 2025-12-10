import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        istok: ["var(--font-istok)", "sans-serif"], // шрифт 
      },
      colors: {
        pinkMain: "#FAC4D2",
        cremeMain: "#FFF9F0",
      },
    },
  },
  plugins: [],
} satisfies Config;

  