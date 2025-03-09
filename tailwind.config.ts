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
        beproGreen: "#00FF84",
        beproBlack: "#002433",
        beproWhite: "#FFF",
        beproPurple: "#CFCEFF",
        beproPurpleLight: "#F1F0FF",
        beproSky: "#00FF8466",
        beproYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;
