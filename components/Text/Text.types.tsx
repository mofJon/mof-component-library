import React from 'react'
import { type VariantProps } from "class-variance-authority";
import { text } from './Text.styles';
import { MotionProps } from 'framer-motion';

type HTMLAndMotionProps = React.HTMLAttributes<HTMLElement> & MotionProps

export interface TextProps
  extends HTMLAndMotionProps,
    VariantProps<typeof text> {
      text: string
      variant?: Exclude<VariantProps<typeof text>['intent'], null>
      textStyle?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'button' | 'copy'
    }

export type TextVars = (intent:TextProps["intent"], size:TextProps["size"], className: TextProps["className"]) => Record<any, any>