import { cva } from "class-variance-authority";
import { ImageVars } from "./Image.types";

// Image Variant Styles
export const image = cva("Image", {
  variants: {
    variant: {
      static: [],
      responsive: [],
    },
  },
  defaultVariants: {
    variant: "static",
  },
});

// Image Props
export const imageVars: ImageVars = (variant, classes) => {
  const baseStyles = `
        ${classes ? classes : ""}
    `;

  return {
    className: image({
      variant,
      className: baseStyles,
    }),
  };
};
