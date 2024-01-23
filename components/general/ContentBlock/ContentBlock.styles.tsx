import { cva } from "class-variance-authority";
import { ContentBlockVars } from "./ContentBlock.types";
import twConfig from "@/tailwind.config";

// @ts-ignore
const { contentBlock: contentSettings } = twConfig?.theme?.extend;
let animations: any = {};
let contentVariant: string = "primary";

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
export const contentBlockVars: ContentBlockVars = (
  variant,
  childAnims,
  classes,
) => {
  const baseStyles = `${classes ? classes : ""}`;
  animations = childAnims;
  contentVariant = variant || "primary";

  return {
    className: contentBlock({
      variant,
      className: baseStyles,
    }),
    ...animations.contentBlock,
  };
};

export const primaryCta: any = () => ({
  className: "primary-cta",
  ...animations.primaryCta,
});

export const preContent: any = () => ({
  className: "pre-content",
  ...animations.preContent,
});

export const preHeading: any = () => ({
  className: "pre-heading",
  textStyle: contentSettings[contentVariant].preHeading,
  ...animations.preHeading,
});

export const info: any = () => ({
  className: "info",
  textStyle: contentSettings[contentVariant].info,
  ...animations.info,
});

export const headingTitle: any = () => ({
  className: "heading-title",
  textStyle: contentSettings[contentVariant].headingTitle,
  ...animations.headingTitle,
});

export const subHeading: any = () => ({
  className: "sub-heading",
  textStyle: contentSettings[contentVariant].subHeading,
  ...animations.subHeading,
});

export const description: any = () => ({
  className: "description",
  textStyle: contentSettings[contentVariant].description,
  ...animations.description,
});
