import { forwardRef, Ref } from "react";
import { MediaProps } from "./Media.types";
import { caption, mediaHolder } from "./Media.styles";
import { Box, Image, Text, Video } from "../../../components";

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
      onAutoPlayStarted,
      onPlayerReady,
      orientation,
      cardVariant = "primary",
      imageQuality,
      ...props
    }: MediaProps,
    ref: Ref<MediaProps>,
  ): any => {
    if (!data) return null;

    const hasImageSizes = imageSizes ? { sizes: imageSizes } : {};

    let variant: any = (
      <Image
        {...hasImageSizes}
        src={data?.imageUrl}
        alt={data?.imageAlt}
        responsive={responsive}
        priority={priority}
        quality={imageQuality}
      />
    );
    if (data?.coverImage) {
      variant = (
        <Video
          onAutoPlayStarted={onAutoPlayStarted}
          onPlayerReady={onPlayerReady}
          data={data}
          {...hasImageSizes}
          priority={priority} // for cover image
          imageQuality={imageQuality}
        />
      );
    }
    if (data.isSvg && data.svg) {
      const SVG = require(data.imageUrl).current;
      variant = <SVG /> || null;
    }

    if (!variant) return null;

    return (
      <Box {...props} {...mediaHolder(size, align, orientation, props)}>
        {variant}
        {data?.title && <Text text={data?.title} {...caption("title")} />}
        {data?.photographer && (
          <Text text={data?.photographer} {...caption("photographer")} />
        )}
        <Text text={data?.caption} {...caption("")} />
      </Box>
    );
  },
);
