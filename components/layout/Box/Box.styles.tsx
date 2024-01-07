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
export const boxVars: BoxVars = (variant, src, classes) => {
  const fetchedImage = src ? { "--image-url": `url(${src})` } : {};
  const bgImage = src ? `bg-[image:var(--image-url)]` : "";

  const baseStyles = `
        ${bgImage}
        ${classes ? classes : ""}
    `;

  return {
    style: fetchedImage,
    className: box({
      variant,
      className: baseStyles,
    }),
  };
};
