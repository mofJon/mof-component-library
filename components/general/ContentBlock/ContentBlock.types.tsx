import React from "react";
import { type VariantProps } from "class-variance-authority";
import { contentBlock } from "./ContentBlock.styles";
import { MotionProps } from "framer-motion";

export interface ContentBlockProps {
  variant?: "primary" | null;
  data: any;
  childAnims?: Record<string, any>;
}

type HTMLAndMotionProps = React.HTMLAttributes<HTMLElement> & MotionProps;

export interface ContentBlockContentProps
  extends HTMLAndMotionProps,
    VariantProps<typeof contentBlock> {
  data: {
    // variant: ContentBlockProps["variant"];
    preHeading?: string;
    headingTitle?: string;
    info?: string;
    subHeading?: string;
    description?: string;
    primaryCta?: string;
    secondaryCta?: string;
  };
  childAnims?: Record<string, any>;
}

export type ContentBlockVars = (
  variant: ContentBlockProps["variant"],
  childAnims: {},
  className: any,
) => Record<any, any>;
