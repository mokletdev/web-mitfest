import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        telkomlogo:
          "https://drive.google.com/file/d/1ygZM0ANA6QR3e9l-MODJ5NNNNvOUZB3i/view?usp=drive_link",
      },
    },
  },
  plugins: [],
};
export default config;
