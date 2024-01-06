import { createElement, forwardRef, Ref } from "react";
import { TextProps } from "./Text.types";
import { textVars } from "./Text.styles";
import { motion } from "framer-motion";

export const Text = forwardRef(
  (
    {
      className,
      variant = "primary",
      text = "Text",
      textStyle = "copy",
      ...props
    }: TextProps,
    ref: Ref<TextProps>,
  ) => {
    const isAnimated = props.animate || props.variants; // do framer motion props exist on parent

    // HTML string cleaning logic here
    // multi-lang logic here

    if (textStyle === "button") {
      return text;
    }

    const allProps = {
      ...textVars(variant, textStyle, className), // pass all styling defaults to decoupled styles file to future-proof modularity
      ...props, // pass down remaining props
      dangerouslySetInnerHTML: { __html: text },
    };

    const textTag =
      typeof textStyle === "string" && textStyle.match(/h[1-6]/)
        ? textStyle
        : "p";
    return createElement(
      isAnimated ? motion(textTag) : textTag, // if motion props exist on component, make this component animatable, otherwise render static Text
      { ...allProps, ref },
      props.children,
    );
  },
);

Text.displayName = "Text";
