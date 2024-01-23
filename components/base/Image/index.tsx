import { forwardRef, Ref, useEffect, useRef, useState } from "react";
import { Box } from "@/components";
import NextImage from "next/image";
import { ImageProps } from "./Image.types";
import { spacer } from "./Image.styles";
import { motion } from "framer-motion";
import { containsMotionProps, toDataURL } from "@/utils";
import { useImageOptimiser } from "@/hooks";

export const Image = forwardRef(
  (
    {
      src: propSrc,
      width: propWidth,
      height: propHeight,
      alt = "image",
      responsive = false,
      placeholder,
      sizes,
      ...props
    }: ImageProps,
    ref: Ref<ImageProps>,
  ): any => {
    const imageRef = useRef<any>();
    const isAnimated = containsMotionProps(props);
    const optimiserProps = useImageOptimiser(
      propSrc,
      propWidth,
      propHeight,
      responsive,
      sizes,
      imageRef,
    );

    // work out parent dimensions
    if (optimiserProps.width === 0 || !optimiserProps.src) {
      return <Box {...spacer} ref={imageRef} />;
    }

    const allProps = {
      alt,
      ...props,
      ...optimiserProps,
    };

    return isAnimated ? (
      motion(NextImage, { ...allProps, ref })
    ) : (
      <NextImage {...allProps} ref={ref} />
    );
  },
);

Image.displayName = "Image";
