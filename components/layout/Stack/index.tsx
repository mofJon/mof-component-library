import { createElement, forwardRef, Ref } from "react";
import { StackProps } from "./Stack.types";
import { stackVars } from "./Stack.styles";
import { motion } from "framer-motion";

export const Stack = forwardRef(
  (
    {
      className,
      direction = "row",
      align = "start",
      gap,
      ...props
    }: StackProps,
    ref: Ref<StackProps>,
  ) => {
    const isAnimated = props.animate || props.variants; // do framer motion props exist on parent
    const allProps = {
      ...stackVars(direction, align, gap, className), // pass all styling defaults to decoupled styles file to future-proof modularity
      ...props, // pass down remaining props
    };

    return createElement(
      isAnimated ? motion.div : "div", // if motion props exist on component, make this component animatable, otherwise render static stack
      { ...allProps, ref },
      props.children,
    );
  },
);

Stack.displayName = "Stack";
