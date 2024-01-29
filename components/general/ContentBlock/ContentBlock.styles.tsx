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
      headingSide: "heading-side",
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
  let textProps = {};
  let textStyles = {};

  if (data && data[component]) {
    if (typeof data[component] === "string") {
      textProps = { text: data[component] };
    } else {
      textProps = data[component]?.heading
        ? { text: data[component].heading }
        : data[component];
    }
  }

  if (contentSettings[contentVariant][component]) {
    textStyles = {
      textStyle: contentSettings[contentVariant][component].textStyle,
      variant: contentSettings[contentVariant][component].variant,
    };
  }

  return {
    className: camelToHyphen(component),
    ...textProps,
    ...textStyles,
    ...animations[component],
  };
};
