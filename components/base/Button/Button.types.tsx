import { ButtonHTMLAttributes, ReactNode } from "react";
import { type VariantProps } from "class-variance-authority";
import { button } from "./Button.styles";
import { TextProps } from "../../";
import { MotionProps } from "framer-motion";

type HTMLAndMotionProps = ButtonHTMLAttributes<HTMLButtonElement> & MotionProps;

export interface ButtonProps
  extends HTMLAndMotionProps,
    VariantProps<typeof button> {
  text?: string;
  onClick?: (e: any) => void;
  iconPre?: ReactNode | null;
  iconPost?: ReactNode | null;
  linkType?: "internal" | "external" | "download";
  href?: string;
  target?: string;
  textStyle?: TextProps["textStyle"];
  motion?: boolean;
}

export type ButtonVars = (
  variant: ButtonProps["variant"],
  size: ButtonProps["size"],
  className: ButtonProps["className"],
) => Record<any, any>;
