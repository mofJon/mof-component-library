import { cva } from "class-variance-authority";
import { ContentBlockVars } from "./ContentBlock.types";
import { camelToHyphen } from "@/utils/formatting";
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

// likely need modification when we nail down BE data structure
export const renderComponent = (component: string, data?: any) => {
  const text = data ? data[component]?.text || data[component] : null;
  const textStyle = data
    ? contentSettings[contentVariant][component]?.text ||
      contentSettings[contentVariant][component]
    : null;

  return {
    className: camelToHyphen(component),
    text,
    textStyle,
    ...animations[component],
  };
};
