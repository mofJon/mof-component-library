import { cva } from "class-variance-authority";
import { ContentBlockVars } from "./ContentBlock.types";
import { camelToHyphen } from "../../../utils/formatting";
import classNames from "classnames";
// @ts-ignore - grabs variables from the root project's tailwind config
import mofConfig from "/mofConfig.ts";

// @ts-ignore
const { card: contentSettings } = mofConfig;
let animations: any = {};
let contentVariant: string = "primary";

// contentBlock Props
export const contentBlockVars: ContentBlockVars = (
  variant,
  childAnims,
  classes,
) => {
  animations = childAnims;
  contentVariant = variant || "primary";

  return {
    className: classNames(classes),
    ...animations.contentBlock,
  };
};

export const renderComponent = (component: string, data?: any) => {
  let textProps = {};
  let textStyles = {};

  if (data && data[component]) {
    if (typeof data[component] === "string") {
      textProps = { text: data[component] };
    } else {
      // data[component] is an object. either from the backend...or to define buttons

      // seoTag
      if (data[component]?.heading) {
        textProps = { text: data[component].heading };
      } else {
        // buttons
        if (
          contentSettings[contentVariant] &&
          contentSettings[contentVariant].buttons &&
          contentSettings[contentVariant].buttons[component]
        ) {
          const buttonStyles =
            contentSettings[contentVariant].buttons[component] || {};

          textProps = { ...data[component], ...buttonStyles };
        }
      }
    }

    if (
      contentSettings[contentVariant] &&
      contentSettings[contentVariant].textStyles &&
      contentSettings[contentVariant].textStyles[component]
    ) {
      const style = contentSettings[contentVariant].textStyles[component];

      textStyles = {
        textStyle: style?.textStyle || "p",
        variant: style?.variant || "primary",
      };
    }

    if (component === "infoTags" && Array.isArray(data[component])) {
      textProps = {
        text:
          data[component]
            .map((val: string) => {
              let infoTag = `<span>${val}</span>`;
              if (animations["infoTag"]) {
                infoTag = `<span {...${animations["infoTag"]}}>${val}</span>`;
              }

              return infoTag;
            })
            .join("") || "",
      };
    }
  }

  return {
    className: camelToHyphen(component),
    ...textProps,
    ...textStyles,
    ...animations[component],
  };
};
