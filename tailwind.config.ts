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
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgb(255 255 255 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
