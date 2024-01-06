import React from "react";
import { type VariantProps } from "class-variance-authority";
import { text } from "./Text.styles";
import { MotionProps } from "framer-motion";

type HTMLAndMotionProps = React.HTMLAttributes<HTMLElement> & MotionProps;

export interface TextProps
  extends HTMLAndMotionProps,
    VariantProps<typeof text> {
  text: string;
}

export type TextVars = (
  variant: TextProps["variant"],
  textStyle: TextProps["textStyle"],
  className: TextProps["className"],
) => Record<any, any>;
