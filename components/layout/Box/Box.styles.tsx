import { cva } from "class-variance-authority";
import { BoxVars } from "./Box.types";

// box Base and Variant Styles
export const box = cva("box", {
  variants: {
    intent: {
      flex: ["flex flex-1"],
      block: ["block"],
      container: ["w-screen m-auto max-w-lg"],
    },
  },
  defaultVariants: {
    intent: "flex",
  },
});

// box Props
export const boxVars: BoxVars = (intent, classes) => {
  const baseStyles = `
        ${classes ? classes : ""}
    `;

  return {
    className: box({
      intent,
      className: baseStyles,
    }),
  };
};
