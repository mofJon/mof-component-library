import { createElement } from 'react'
import { BoxProps } from "./Box.types";
import { boxVars } from "./Box.styles";
import { motion } from 'framer-motion';

export const Box: React.FC<BoxProps> = ({
  className,
  variant = 'flex',
  ...props
}) => {
    const isAnimated = props.animate || props.variants;
    const allProps = {...boxVars(variant, className), ...props};

    return createElement(isAnimated ? motion('div') : 'div', allProps, props.children);
}