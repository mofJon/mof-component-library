import { createElement, forwardRef, Ref } from "react";
import { ImageProps } from "./Image.types";
import { imageVars } from "./Image.styles";
import { motion } from "framer-motion";

// basic image component for now - WIP
export const Image = forwardRef(
  (
    { className, variant = "static", src, alt = "image", ...props }: ImageProps,
    ref: Ref<ImageProps>,
  ) => {
    const isAnimated = props.animate || props.variants; // do framer motion props exist on parent
    const allProps = {
      ...imageVars(variant, className), // pass all styling defaults to decoupled styles file to future-proof modularity
      ...props, // pass down remaining props
    };

    return createElement(
      isAnimated ? motion.img : "img", // if motion props exist on component, make this component animatable, otherwise render static div
      { ...allProps, ref, src },
    );
  },
);

Image.displayName = "Image";
