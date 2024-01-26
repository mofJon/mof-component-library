import { cva } from "class-variance-authority";
import { TextVars } from "./Text.types";

// Text Base and Variant Styles
export const text = cva("text", {
  variants: {
    variant: {
      primary: ["font-primary"],
      secondary: ["font-secondary"],
      alternate: ["font-alternate"],
    },
    textStyle: {
      h1: "text-h1",
      h2: "text-h2",
      h3: "text-h3",
      h4: "text-h4",
      h5: "text-h5",
      h6: "text-h6",
      paragraph: "text-paragraph",
      paragraphBold: "text-paragraph-bold",
      main: "text-mainheading",
      sub: "text-mainheading",
      button: "",
      link: "text-link",
    },
  },
  defaultVariants: {
    variant: "primary",
    textStyle: "paragraph",
  },
});

// Text Props
export const textVars: TextVars = (variant, textStyle, classes) => {
  const baseStyles = `
        ${classes ? classes : ""}
    `;

  return {
    className: text({
      variant,
      textStyle,
      className: baseStyles,
    }),
  };
};
