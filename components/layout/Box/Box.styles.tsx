import { cva } from "class-variance-authority";
import { BoxVars } from "./Box.types";

// box Base and Variant Styles
export const box = cva("box", {
  variants: {
    variant: {
      flex: ["flex flex-1"],
      block: ["block"],
      container: ["container m-auto"],
    },
  },
  defaultVariants: {
    variant: "flex",
  },
});

// box Props
export const boxVars: BoxVars = (variant, classes) => {
  const baseStyles = `
        ${classes ? classes : ""}
    `;

  return {
    className: box({
      variant,
      className: baseStyles,
    }),
  };
};
