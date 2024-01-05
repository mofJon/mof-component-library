import { createElement, forwardRef, Ref } from "react";
import { BoxProps } from "./Box.types";
import { boxVars } from "./Box.styles";
import { motion } from "framer-motion";

export const Box = forwardRef(
  (
    { className, variant = "flex", ...props }: BoxProps,
    ref: Ref<BoxProps>,
  ) => {
    const isAnimated = props.animate || props.variants; // do framer motion props exist on parent
    const allProps = { 
      ...boxVars(variant, className), // pass all styling defaults to decoupled styles file to future-proof modularity
      ...props // pass down remaining props 
    };

    return createElement(
      isAnimated ? motion.div : "div", // if motion props exist on component, make this component animatable, otherwise render static div
      { ...allProps, ref },
      props.children,
    );
  },
);

Box.displayName = "Box";
