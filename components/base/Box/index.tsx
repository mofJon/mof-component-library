import { createElement, forwardRef, Ref } from "react";
import { BoxProps } from "./Box.types";
import { boxVars } from "./Box.styles";
import { motion } from "framer-motion";
import { containsMotionProps } from "../../../utils";

export const Box = forwardRef(
  (
    { className, variant = "flex", bgSrc, ...props }: BoxProps,
    ref: Ref<BoxProps>,
  ) => {
    const isAnimated = containsMotionProps(props); //contains framer motion props?
    const allProps = {
      ...props,
      ...boxVars(variant, bgSrc, className, props.style), // pass all styling defaults to decoupled styles file to future-proof modularity
    };

    const tagType = variant === "section" ? "section" : "div";

    return createElement(
      isAnimated ? motion(tagType) : tagType, // if motion props exist on component, make this component animatable, otherwise render static div
      { ...allProps, ref },
      props.children,
    );
  },
);

Box.displayName = "Box";
