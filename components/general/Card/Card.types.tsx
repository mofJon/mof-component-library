import React, { ReactNode } from "react";
import { type VariantProps } from "class-variance-authority";
import { card } from "./Card.styles";
import { MotionProps } from "framer-motion";

type HTMLAndMotionProps = React.HTMLAttributes<HTMLElement> & MotionProps;

export interface CardProps
  extends HTMLAndMotionProps,
    VariantProps<typeof card> {
  data: {
    variant: CardProps["variant"];
    media: ReactNode;
    preHeading: string;
    headingTitle: string;
    subHeading: string;
    description: string;
    primaryCta: string;
  };
}

export type CardVars = (
  variant: CardProps["variant"],
  size: CardProps["size"],
  className: CardProps["className"],
) => Record<any, any>;
