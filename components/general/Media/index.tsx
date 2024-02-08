import { forwardRef, Ref } from "react";
import { MediaProps } from "./Media.types";
import { mediaHolder } from "./Media.styles";
import { Box, Image, Video } from "../../../components";

//  Work in progress!!!

export const Media = forwardRef(
  (
    {
      data,
      size,
      imageSizes,
      responsive = false,
      priority = false,
      align,
      orientation,
      ...props
    }: MediaProps,
    ref: Ref<MediaProps>,
  ): any => {
    if (!data) return null;

    const hasImageSizes = imageSizes ? { sizes: imageSizes } : {};

    let variant: any = (
      <Image
        {...hasImageSizes}
        src={data.imageUrl}
        alt={data.imageUrl}
        responsive={responsive}
        priority={priority}
      />
    );
    if (data.isVideo) {
      variant = <Video {...props} videoId={data.imageUrl} />;
    }
    if (data.isSvg && data.svg) {
      const SVG = require(data.imageUrl).current;
      variant = SVG || null;
    }

    if (!variant) return null;

    return (
      <Box {...props} {...mediaHolder(size, align, orientation)}>
        {variant}
      </Box>
    );
  },
);
