import { cva } from "class-variance-authority";
import { CardVars } from "./Card.types";

// Card Variant Styles
export const card = cva("card", {
  variants: {
    variant: {
      generic: "p-5 bg-white",
    },
    size: {
      sm: "w-[10rem] md:w-[23rem] lg:w-[56rem] flex-col gap-5",
      md: "w-[15rem] md:w-[33rem] lg:w-[66rem] flex-col gap-8",
      lg: "w-[20rem] md:w-[43rem] lg:w-[76rem] flex-row gap-10",
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
  const baseStyles = `
       
        ${classes ? classes : ""}
    `;

  return {
    className: card({
      variant,
      size,
      className: baseStyles,
    }),
  };
};

export const mediaHolder = (size: any) => {
  const flex = size === "lg" ? "flex-[0.45]" : "flex-1";

  return {
    className: `gap-4 ${flex} w-full h-full`,
  };
};

export const content = (size: any) => {
  const flex = size === "lg" ? "flex-[0.55]" : "flex-1";

  return {
    className: `gap-5 h-full ${flex}`,
  };
};

export const cta = {
  className: "align-self-baseline mt-8 flex",
};
