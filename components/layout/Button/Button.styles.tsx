import { cva } from "class-variance-authority";
import { ButtonVars } from "./Button.types";

// Button Base and Variant Styles
export const button = cva("button", {
  variants: {
    variant: {
      primary: ["primary"],
      secondary: ["secondary"],
      primaryCircle: ["primary circle"],
      secondaryCircle: ["secondary circle"],
    },
    size: {
      sm: ["small"],
      md: ["medium"],
      lg: ["large"],
      full: ["full"],
    },
  },
  // example compond variant
  compoundVariants: [
    { variant: "primary", size: ["md", "full"], class: "uppercase" },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

// Button Props
export const buttonVars: ButtonVars = (variant, size, classes) => {
  const baseStyles = `
        btn
         ${classes ? classes : ""}
    `;

  return {
    className: button({
      variant,
      size,
      className: baseStyles,
    }),
  };
};
