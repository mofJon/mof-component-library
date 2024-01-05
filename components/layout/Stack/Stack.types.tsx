import React from "react";
import { type VariantProps } from "class-variance-authority";
import { stack } from "./Stack.styles";
import { MotionProps } from "framer-motion";

type HTMLAndMotionProps = React.HTMLAttributes<HTMLElement> & MotionProps;

export interface StackProps
  extends HTMLAndMotionProps,
    VariantProps<typeof stack> {
  gap: number;
  direction?: Exclude<VariantProps<typeof stack>["intent"], null>;
  props?: any;
}

export type StackVars = (
  intent: StackProps["intent"],
  gap: StackProps["gap"],
  className: StackProps["className"],
) => Record<any, any>;
