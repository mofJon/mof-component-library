import { cva } from "class-variance-authority";
import { ContentBlockVars } from "./ContentBlock.types";

// contentBlock Variant Styles
export const contentBlock = cva("content-block", {
  variants: {
    variant: {
      primary: "primary",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: "primary",
  },
});

// contentBlock Props
export const contentBlockVars: ContentBlockVars = (variant, classes) => {
  const baseStyles = `${classes ? classes : ""}`;

  return {
    className: contentBlock({
      variant,
      className: baseStyles,
    }),
  };
};

export const cta = {
  className: "cta",
};
