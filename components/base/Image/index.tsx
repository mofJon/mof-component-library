import { FC, forwardRef, Ref, useRef } from "react";
import { Box } from "@/components";
import NextImage from "next/image";
import { ImageProps } from "./Image.types";
import { imageVars } from "./Image.styles";
import { motion } from "framer-motion";
import { containsMotionProps } from "@/utils";
import { useImageOptimiser } from "@/hooks";

export const Image: FC<any> = forwardRef(
  (
    {
      className,
      variant = "static",
      src: propSrc,
      alt = "image",
      width: propWidth,
      height: propHeight,
      priority = false,
      responsive = false,
      blurDataURL,
      placeholder,
      ...props
    }: ImageProps,
    ref: Ref<ImageProps>,
  ) => {
    const imageRef = useRef();
    const isAnimated = containsMotionProps(props);
    const { width, height, src } = useImageOptimiser(
      propSrc,
      propWidth,
      propHeight,
      imageRef,
    );

    const allProps = {
      ...imageVars(variant, className),
      ...props,
      src,
      width,
      height,
      alt,
      priority,
      blurDataURL,
      placeholder,
    };

    if (!src || !width || !height) {
      return <Box className="w-full h-full border" ref={imageRef} />;
    }

    return isAnimated ? (
      motion(NextImage, { ...allProps, ref })
    ) : (
      <NextImage {...allProps} ref={ref} />
    );
  },
);

Image.displayName = "Image";
