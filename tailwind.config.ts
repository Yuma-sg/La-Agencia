import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eeecfd",
          100: "#dedbfc",
          200: "#beb8f9",
          300: "#9d95f5",
          400: "#8a80f2",
          500: "#675df0",
          600: "#4f44e0",
          700: "#4038b8",
          800: "#332d8f",
          900: "#282363",
          950: "#1a1747",
        },
        accent: {
          50: "#fbffe0",
          100: "#f6ffc2",
          200: "#edff85",
          300: "#e4ff47",
          400: "#e6ff01",
          500: "#d1e900",
          600: "#a8bb00",
          700: "#7f8d00",
          800: "#565f00",
          900: "#2d3200",
        },
        magenta: {
          50: "#ffe4f3",
          100: "#ffc0e4",
          200: "#ff85cc",
          300: "#ff5fb8",
          400: "#ff2e9c",
          500: "#f0057f",
          600: "#c40468",
          700: "#970351",
          800: "#6b023a",
          900: "#3f0122",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
