import { cva } from "class-variance-authority";
import { CardVars } from "./Card.types";

// Card Variant Styles
export const card = cva("card", {
  variants: {
    variant: {
      generic: "card-generic",
    },
    size: {
      sm: "card-sm",
      md: "card-md",
      lg: "card-lg",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: "generic",
    size: "sm",
  },
});

// card Props
export const cardVars: CardVars = (variant, size, classes) => {
  const baseStyles = `${classes ? classes : ""}`;

  return {
    className: card({
      variant,
      size,
      className: baseStyles,
    }),
  };
};

export const mediaHolder = (size: any) => {
  return {
    className: `card-media-holder ${size}`,
  };
};

export const content = (size: any) => {
  return {
    className: `card-content ${size}`,
  };
};

export const cta = {
  className: "card-cta",
};
