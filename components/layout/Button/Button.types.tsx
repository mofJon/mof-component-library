import React from "react";
import { type VariantProps } from "class-variance-authority";
import { button } from "./Button.styles";
import { MotionProps } from "framer-motion";

type HTMLAndMotionProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps;

export interface ButtonProps
  extends HTMLAndMotionProps,
    VariantProps<typeof button> {
  text: string;
  onClick: () => void;
}

export type ButtonVars = (
  variant: ButtonProps["variant"],
  size: ButtonProps["size"],
  className: ButtonProps["className"],
) => Record<any, any>;
