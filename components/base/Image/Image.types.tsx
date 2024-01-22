import React from "react";
import { type VariantProps } from "class-variance-authority";
import { ImageProps as NextImageProps } from "next/image";
import { image } from "./Image.styles";
import { MotionProps } from "framer-motion";

type HTMLAndMotionProps = NextImageProps & MotionProps;

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
