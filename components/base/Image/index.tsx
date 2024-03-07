import { forwardRef, Ref, useRef } from "react";
import { Box } from "../../../components";
import NextImage from "next/image";
import { ImageProps } from "./Image.types";
import { spacer } from "./Image.styles";
import { motion } from "framer-motion";
import { containsMotionProps } from "../../../utils";
import { useImageOptimiser } from "../../../hooks";

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
    ref: Ref<any>,
  ): any => {
    const imageRef = useRef<any>();
    const isAnimated = containsMotionProps(props);
    const optimiserProps = useImageOptimiser(
      propSrc,
      (propWidth = 0),
      (propHeight = 0),
      responsive,
      sizes,
      imageRef,
    );

    // this works out parent dimensions
    if (
      (optimiserProps.width && optimiserProps.width === 0) ||
      !optimiserProps.src
    ) {
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
