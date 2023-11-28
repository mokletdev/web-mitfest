import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "420px",
      // => @media (min-width: 420px) { ... }

      md: "652px",
      // => @media (min-width: 652px) { ... }

      lg: "820px",
      // => @media (min-width: 820px) { ... }

      xl: "1322px",
      // => @media (min-width: 1322px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        black: "#171717",
        white: "#fff",
        "gray-50": "#F6F6F6",
        "gray-100": "#E5E5E5",
        "gray-200": "#CBCBCB",
        "gray-300": "#B2B2B2",
        "gray-400": "#989898",
        "gray-500": "#7F7F7F",
        "gray-600": "#656363",
        "gray-700": "#1F1F1F",
        "primary-50": "#FFE9E7",
        "primary-100": "#FFB9B3",
        "primary-200": "#FF897E",
        "primary-300": "#FD5849",
        "primary-400": "#E42413",
        "primary-500": "#B10F00",
        "primary-600": "#7E0A00",
        "primary-700": "#4B0600",
      },
      dropShadow: {
        "glow-white": [
          "0 0px 40px rgba(255, 255, 255, 0.25)",
          "0 0px 10px rgba(255, 255,255, 0.1)",
        ],
        "glow-red": [
          "0 0px 40px rgba(177, 15, 0, 0.45)",
          "0 0px 20px rgba(177, 15, 0, 0.1)",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
