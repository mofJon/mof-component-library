import { createElement, forwardRef, Ref } from "react";
import { TextProps } from "./Text.types";
import { textVars } from "./Text.styles";
import DOMPurify from "isomorphic-dompurify";
import { motion } from "framer-motion";
import { containsMotionProps } from "../../../utils";
import Link from "next/link";
import { allowedTags } from "./chunks";

//  Work in progress!!!

export const Text = forwardRef(
  (
    {
      className,
      variant,
      text,
      textStyle = "p",
      link = {},
      rich = false,
      ...props
    }: TextProps,
    ref: Ref<TextProps>,
  ) => {
    const isAnimated = containsMotionProps(props); //contains framer motion props?

    if (!text && !link.text) return null;

    // HTML string - unwanted tags stripping
    const currentText = link?.text || (text as string);
    let cleanedText = currentText;
    // @ts-ignore
    if (typeof window !== "undefined") {
      cleanedText = DOMPurify.sanitize(currentText, {
        ALLOWED_TAGS: rich ? allowedTags.rich : allowedTags.default,
      });
    }

    if (textStyle === "button") {
      return text;
    }

    const isLink: boolean = !!link.text;

    const allProps = {
      ...textVars(variant, textStyle, isLink, className), // pass all styling defaults to decoupled styles file to future-proof modularity
      ...link,
      ...props, // pass down remaining props
      dangerouslySetInnerHTML: { __html: cleanedText },
    };

    let textTag: any = link?.text ? Link : "p";
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
