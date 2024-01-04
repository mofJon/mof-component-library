import { createElement } from 'react';
import { ButtonProps } from "./Button.types";
import { buttonVars } from "./Button.styles";
import { motion } from 'framer-motion';
import { Text } from '@components';

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  text = "Button",
  ...props
}) => {
    const isAnimated = props.animate || props.variants;
    const allProps: any = {...buttonVars(variant, size, className), ...props};
    
    return createElement(isAnimated ? motion('button') : 'button', allProps, <Text text={text} />);
}