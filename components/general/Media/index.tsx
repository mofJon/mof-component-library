import { forwardRef, Ref } from "react";
import { MediaProps } from "./Media.types";
import { caption, mediaHolder } from "./Media.styles";
import { Box, Image, Text, Video } from "../../../components";

//  Work in progress!!!

export const Media = forwardRef(
  (
    {
      data,
      size,
      imageSizes,
      responsive = true,
      priority = false,
      align,
      captionTextStyle = "p",
      orientation,
      cardVariant = "primary",
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
      variant = <SVG /> || null;
    }

    if (!variant) return null;

    return (
      <Box {...props} {...mediaHolder(size, align, orientation)}>
        {variant}
        <Text text={data.caption} {...caption} />
      </Box>
    );
  },
);
