import classNames from "classnames";
// @ts-ignore - grabs variables from the root project's tailwind config
import mofConfig from "/mofConfig.ts";
import { text } from "stream/consumers";

// @ts-ignore
const { card: contentSettings } = mofConfig;
let contentVariant: string = "primary";

export const mediaHolder = (
  size: any,
  align: any,
  orientation: any,
  props: any,
) => {
  return {
    className: classNames(
      "media-holder",
      [size],
      [align],
      [orientation],
      props.className,
    ),
  };
};

export const caption = () => {
  const textStyles = contentSettings?.[contentVariant]?.textStyles?.caption || {
    textStyle: "p-sm",
  };

  return {
    className: "caption",
    ...textStyles,
  };
};
