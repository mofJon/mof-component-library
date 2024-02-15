import React from "react";
import { MotionProps } from "framer-motion";

export interface ContentBlockProps {
  variant?: any;
  data: any;
  childAnims?: Record<string, any>;
}

export type ContentBlockMotionTypes = {
  contentBlock: Record<string, any>;
  preContent: Record<string, any>;
  preHeading: Record<string, any>;
  info: Record<string, any>;
  infoTag: Record<string, any>;
  headingTitle: Record<string, any>;
  subHeading: Record<string, any>;
  description: Record<string, any>;
  primaryCta: Record<string, any>;
  secondaryCta: Record<string, any>;
};

type HTMLAndMotionProps = React.HTMLAttributes<HTMLElement> & MotionProps;

export interface ContentBlockContentProps extends HTMLAndMotionProps {
  ref?: any;
  variant?: any;
  data: {
    preHeading?: string;
    headingTitle?: string;
    info?: string;
    subHeading?: string;
    description?: string;
    primaryCta?: string;
    secondaryCta?: string;
  };
  childAnims?: ContentBlockMotionTypes;
}

export type ContentBlockVars = (
  variant: any,
  childAnims: {},
  className: any,
) => Record<any, any>;
