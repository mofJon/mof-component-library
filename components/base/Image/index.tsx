import { FC, forwardRef, Ref, useRef, useState } from "react";
import { Box, Text, Stack } from "@/components";
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
      priority = true,
      responsive = false,
      placeholder,
      sizes,
      ...props
    }: ImageProps,
    ref: Ref<ImageProps>,
  ) => {
    const imageRef = useRef();
    const isAnimated = containsMotionProps(props);
    const { width, height, src, dpr, quality, optimiserProps, fallbackURL } =
      useImageOptimiser(
        propSrc,
        propWidth,
        propHeight,
        responsive,
        sizes,
        imageRef,
      );

    if (!src || width === 0 || height === 0) {
      return <Box className="w-full h-full" ref={imageRef} />;
    }

    const allProps = {
      ...imageVars(variant, className),
      ...props,
      alt,
      priority,
      ...optimiserProps,
      onError: () => handleFallback(),
    };

    const handleFallback = () => {
      console.log("ERROR", fallbackURL);
      allProps.src = fallbackURL;
    };

    return isAnimated ? (
      motion(NextImage, { ...allProps, ref })
    ) : (
      <Stack direction="column" gap={4}>
        <NextImage {...allProps} ref={ref} />
        <Text
          text={`<b>width: </b> ${width} <b>height: </b> ${height} <b>DPR: </b> ${dpr} <b>Quality: </b> ${quality}`}
        />
      </Stack>
    );
  },
);

Image.displayName = "Image";
