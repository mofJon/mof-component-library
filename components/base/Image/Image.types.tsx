import React from "react";
import { type VariantProps } from "class-variance-authority";
import { image } from "./Image.styles";
import { MotionProps } from "framer-motion";

type HTMLAndMotionProps = React.HTMLAttributes<HTMLElement> & MotionProps;

export interface ImageProps
  extends HTMLAndMotionProps,
    VariantProps<typeof image> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export type ImageVars = (
  variant: ImageProps["variant"],
  className: ImageProps["className"],
) => Record<any, any>;
