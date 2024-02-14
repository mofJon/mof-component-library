import { cva } from "class-variance-authority";
import { CardVars } from "./Card.types";
import { camelToHyphen } from "../../../utils";
// @ts-ignore - mof overrides
import mofConfig from "/mofConfig";

const cards = mofConfig.card;
let customCardVariants: any = [];
if (cards) {
  customCardVariants = Object.entries(cards).map(([key]) => {
    return {
      [key]: camelToHyphen(key),
    };
  });
}

const variantObject = Object.assign({}, ...customCardVariants);

console.log(variantObject);

// Card Variant Styles
export const card = cva("card", {
  variants: {
    variant: {
      primary: "primary",
      overlay: "overlay",
      ...variantObject,
    },
    size: {
      sm: "sm",
      md: "md",
      lg: "lg",
      full: "full",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: "primary",
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

export const backgroundMediaHolder = {
  className: "card-bg-media-holder",
};

export const cardContent = (size: any) => {
  return {
    className: `card-content ${size}`,
  };
};

export const cta = {
  className: "card-cta",
};
