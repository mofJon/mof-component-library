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
      colors: {
        messagingRed: "#ff5a5a",
        primary: "#344356",
        secondary: "#4d5e74",
        copy: "#333333",
        transparent: "transparent",
        current: "currentColor",
        black: "#000000",
        white: "#ffffff",
        grey1: "#323232",
        grey2: "#505050",
        grey3: "#828282",
        grey4: "#BEBEBE",
        grey5: "#DCDCDC",
        grey6: "#F0F0F0",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "2.5rem",
          md: "1.2rem",
          xl: "2.5rem",
        },
      },
      fontFamily: {
        primary: ["Inter", "Arial", "sans-serif"],
        secondary: ["Arial, Times New Roman", "serif"],
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
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
      contentBlock: {
        primary: {
          preHeading: "copyBold",
          headingTitle: "h3",
          subHeading: "copyBold",
          info: "copyBold",
          description: "copy",
        },
      },
      card: {
        primary: {
          sm: "(max-width: 1000px) 50vw, 80vw",
          md: "(max-width: 1000px) 80vw, 90vw",
          lg: "(max-width: 800px) 60vw, 30vw",
          full: "100vw",
        },
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
