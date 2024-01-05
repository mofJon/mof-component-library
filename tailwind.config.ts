import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./safelist.txt",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gap: {
        "0": "0",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "7": "1.25rem",
        "8": "2rem",
        "9": "2.25rem",
        "10": "2.5rem",
        "11": "2.75rem",
        "12": "3rem",
        "13": "3.35rem",
        "14": "3.5rem",
        "15": "3.75rem",
        "16": "4rem",
        "17": "4.25rem",
        "18": "4.5rem",
        "19": "4.75rem",
        "20": "6rem",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      fontSize: ["responsive", "h1", "h2", "h3", "h4", "h5", "h6"], // Add h* styles
    },
  },
};
export default config;
