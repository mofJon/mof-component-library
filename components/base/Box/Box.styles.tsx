import { cva } from "class-variance-authority";
import { BoxVars } from "./Box.types";

// box Base and Variant Styles
export const box = cva("box", {
  variants: {
    variant: {
      flex: ["flex flex-1-auto"],
      block: ["block"],
      container: ["container m-auto"],
    },
  },
  defaultVariants: {
    variant: "flex",
  },
});

// box Props
export const boxVars: BoxVars = (variant, bgSrc, classes, styleProps) => {
  const baseStyles = `
        ${classes ? classes : ""}
    `;

  let bg = {};
  if (bgSrc) {
    bg = {
      backgroundImage: `url(${bgSrc})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
    };
  }

  return {
    className: box({
      variant,
      className: baseStyles,
    }),
    style: { ...styleProps, ...bg },
  };
};
