import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "quari-gray-500": "#42403F",
        "quari-gray-300": "#D9D9D9",
        "quari-gray-200": "#F6F6F6",
        "quari-orange-500": "#FF6B44",
        "quari-orange-300": "#FFC37D",
      },
      fontFamily: {
        clashDisplay: "clash-display",
      },
    },
  },
  plugins: [],
};
export default config;
