import { createElement } from 'react'
import { StackProps } from "./Stack.types";
import { stackVars } from "./Stack.styles";
import { motion } from 'framer-motion';

export const Stack: React.FC<StackProps> = ({
  className,
  direction = 'row',
  gap = 2,
  ...props
}) => {
    const isAnimated = props.animate || props.variants;
    const allProps = {...stackVars(direction, gap, className), ...props};

    return createElement(isAnimated ? motion('div') : 'div', allProps, props.children);
}