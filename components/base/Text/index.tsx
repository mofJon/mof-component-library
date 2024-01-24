import { createElement, forwardRef, Ref } from "react";
import { TextProps } from "./Text.types";
import { textVars } from "./Text.styles";
import DOMPurify from "isomorphic-dompurify";
import { motion } from "framer-motion";
import { containsMotionProps } from "@/utils";

//  Work in progress!!!

export const Text = forwardRef(
  (
    { className, variant, text, textStyle = "paragraph", ...props }: TextProps,
    ref: Ref<TextProps>,
  ) => {
    const isAnimated = containsMotionProps(props); //contains framer motion props?

    if (!text) return null;

    // HTML string - unwanted tags stripping
    const cleanedText = DOMPurify.sanitize(text, {
      ALLOWED_TAGS: ["b", "strong", "br", "span"],
    });

    // multi-lang logic here

    if (textStyle === "button") {
      return text;
    }

    const allProps = {
      ...textVars(variant, textStyle, className), // pass all styling defaults to decoupled styles file to future-proof modularity
      ...props, // pass down remaining props
      dangerouslySetInnerHTML: { __html: cleanedText },
    };

    let textTag = "p";
    if (typeof textStyle === "string" && textStyle.match(/h[1-6]/)) {
      textTag = textStyle;
    }

    return createElement(
      isAnimated ? motion(textTag) : textTag, // if motion props exist on component, make this component animatable, otherwise render static Text
      { ...allProps, ref },
    );
  },
);

Text.displayName = "Text";
