import { createElement, forwardRef, Ref } from "react";
import { ButtonProps } from "./Button.types";
import { buttonVars } from "./Button.styles";
import { motion } from "framer-motion";
import { Text } from "@components";

export const Button = forwardRef(
  (
    {
      className,
      variant = "primary",
      size = "md",
      text = "Button",
      ...props
    }: ButtonProps,
    ref: Ref<ButtonProps>,
  ) => {
    const isAnimated = props.animate || props.variants; // do framer motion props exist on parent
    const allProps = {
      ...buttonVars(variant, size, className), // pass all styling defaults to decoupled styles file to future-proof modularity
      ...props, // pass down remaining props
    };

    return createElement(
      isAnimated ? motion.button : "button", // if motion props exist on component, make this component animatable, otherwise render static button
      { ...allProps, ref },
      <Text text={text} variant={`${variant}Button`} />,
    );
  },
);

Button.displayName = "Button";
