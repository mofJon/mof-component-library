import { createElement } from 'react';
import { TextProps } from "./Text.types";
import { textVars } from "./Text.styles";
import { motion } from 'framer-motion';

export const Text: React.FC<TextProps> = ({
  className,
  variant = 'primary',
  text = "Text",
  textStyle = 'copy',
  ...props
}) => {
    const isAnimated = props.animate || props.variants;
    const allProps: any = {...textVars(variant, textStyle, className), ...props, dangerouslySetInnerHTML: { __html: text }};

    // HTML string cleaning logic here
    // multi-lang logic here

    const textTag = textStyle === 'copy' ? 'p' : textStyle;
    return createElement(isAnimated ? motion(textTag) : textTag, allProps);

}