import React from "react";
import { type VariantProps } from "class-variance-authority";
import { card } from "./Card.styles";
import { MotionProps } from "framer-motion";

type HTMLAndMotionProps = React.HTMLAttributes<HTMLElement> & MotionProps;

export interface CardProps
  extends HTMLAndMotionProps,
    VariantProps<typeof card> {
  data: {
    image?: {};
    backgroundImage?: {};
    preHeading?: string;
    headingTitle?: string;
    subHeading?: string;
    description?: string;
    info?: string;
    infoTags?: string;
    primaryCta?: string;
    secondaryCta?: string;
    mediaAlignment?: any;
    mediaOrientation?: any;
  };
  priority?: boolean;
  contentVariant?: any;
  childAnims?: Record<string, any>;
  imageSizes?: string;
}

export type CardVars = (
  variant: CardProps["variant"],
  size: CardProps["size"],
  className: CardProps["className"],
) => Record<any, any>;

export interface CardGenericProps {
  className?: Record<string, string>;
  size: CardProps["size"];
  data: {
    preHeading: string;
    headingTitle: string;
    subHeading: string;
    description: string;
    primaryCta: string;
  };
}
