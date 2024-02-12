import type { Config } from "tailwindcss";
import { cardListingAnims, cardListingHolderAnims } from "./theme/animations";

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
        primary: "#344356",
        secondary: "#ED8936",
        alternate: "#0987A0",
        copy: "#333333",
        black: "#000000",
        white: "#FFFFFF",
        grey1: "#F0F0F0",
        grey2: "#DCDCDC",
        grey3: "#BEBEBE",
        grey4: "#828282",
        grey5: "#505050",
        grey6: "#323232",
        success: "#68D391",
        warning: "#E53E3E",
        transparent: "transparent",
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
      fontSize: {
        xs: [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: "400",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "400",
          },
        ],
        md: [
          "1rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "400",
          },
        ],
        lg: [
          "1.25rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "400",
          },
        ],
        xl: [
          "1.5rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "400",
          },
        ],
        "2xl": [
          "1.75rem",
          {
            lineHeight: "2rem",
            fontWeight: "400",
          },
        ],
        "3xl": [
          "2rem",
          {
            lineHeight: "2.25rem",
            fontWeight: "400",
          },
        ],
        "4xl": [
          "2.25rem",
          {
            lineHeight: "2.5rem",
            fontWeight: "400",
          },
        ],
        "5xl": [
          "2.5rem",
          {
            lineHeight: "2.75rem",
            fontWeight: "400",
          },
        ],
        "6xl": [
          "3rem",
          {
            lineHeight: "3.25rem",
            fontWeight: "400",
          },
        ],
        "7xl": [
          "4rem",
          {
            lineHeight: "1",
            fontWeight: "400",
          },
        ],
        "8xl": [
          "4.5rem",
          {
            lineHeight: "1",
            fontWeight: "400",
          },
        ],
        "9xl": [
          "5rem",
          {
            lineHeight: "1",
            fontWeight: "400",
          },
        ],
        "10xl": [
          "5.5rem",
          {
            lineHeight: "1",
            fontWeight: "400",
          },
        ],
        "11xl": [
          "6rem",
          {
            lineHeight: "1",
            fontWeight: "400",
          },
        ],
        "12xl": [
          "6.5rem",
          {
            lineHeight: "1",
            fontWeight: "400",
          },
        ],
        "13xl": [
          "7rem",
          {
            lineHeight: "1",
            fontWeight: "400",
          },
        ],
        "14xl": [
          "7.5rem",
          {
            lineHeight: "1",
            fontWeight: "400",
          },
        ],
        "15xl": [
          "8rem",
          {
            lineHeight: "1",
            fontWeight: "400",
          },
        ],
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
          preHeading: {
            variant: "primaryBold",
            textStyle: "p",
          },
          headingTitle: {
            textStyle: "h2",
          },
          subHeading: {
            variant: "primaryBold",
            textStyle: "h3",
          },
          info: {
            variant: "primaryBold",
            textStyle: "p",
          },
        },
        headingSide: {
          headingTitle: {
            textStyle: "h3",
          },
        },
        card: {
          preHeading: {
            variant: "primaryBold",
            textStyle: "p",
          },
          headingTitle: {
            textStyle: "h5",
          },
          description: {
            variant: "primary",
            textStyle: "p-sm",
          },
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
      modules: {
        accordion: {
          tag: {
            textStyle: "p-sm",
          },
          heading: {
            textStyle: "h3",
          },
          itemTitle: {
            textStyle: "h3",
          },
          itemCopy: {
            textStyle: "p-sm",
          },
        },
        Breadcrumbs: {
          textStyle: "i-xs",
        },
        CardListingGrid: {
          animated: true,
          cardAnims: cardListingAnims,
          cardHolderAnims: cardListingHolderAnims,
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  variants: {
    extend: {
      fontSize: ["responsive", "h1", "h2", "h3", "h4", "h5", "h6"], // Add h* styles
    },
  },
};

export default config;
