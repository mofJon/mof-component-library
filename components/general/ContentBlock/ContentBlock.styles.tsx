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

export const preContent: any = {
  className: "pre-content",
};

export const preHeading: any = {
  className: "pre-heading",
  textStyle: "copyBold",
};

export const info: any = {
  className: "info",
  textStyle: "copyBold",
};

export const headingTitle: any = {
  className: "heading-title",
  textStyle: "h5",
};

export const subHeading: any = {
  className: "sub-heading",
  textStyle: "copyBold",
};

export const description = {
  className: "description",
};
