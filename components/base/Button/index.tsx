import { createElement, forwardRef, ReactNode, Ref, useCallback } from "react";
import { ButtonProps } from "./Button.types";
import { buttonVars } from "./Button.styles";
import { motion } from "framer-motion";
import { Stack, Text } from "@/components";
import { containsMotionProps } from "@/utils";

export const Button = forwardRef(
  (
    {
      className,
      variant = "primary",
      size = "md",
      text,
      onClick,
      iconPre = null,
      iconPost = null,
      ...props
    }: ButtonProps,
    ref: Ref<ButtonProps>,
  ) => {
    if (!text) return null;

    const isAnimated = containsMotionProps(props); //contains framer motion props?

    const handleClick = useCallback(() => onClick && onClick(), [onClick]);

    const allProps = {
      ...buttonVars(variant, size, className), // pass all styling defaults to decoupled styles file to future-proof modularity
      onClick: handleClick,
      ...props, // pass down remaining props
    };

    const buttonMain = <Text text={text} textStyle="button" />;
    let buttonContent: ReactNode | any[] = buttonMain;

    if (iconPre || iconPost) {
      buttonContent = (
        <Stack>
          {iconPre}
          {buttonMain}
          {iconPost}
        </Stack>
      );
    }

    return createElement(
      isAnimated ? motion.button : "button", // if motion props exist on component, make this component animatable, otherwise render static button
      { ...allProps, ref },
      buttonContent,
    );
  },
);

Button.displayName = "Button";
