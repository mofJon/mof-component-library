import { forwardRef, Ref } from "react";
import { MediaProps } from "./Media.types";
import { mediaHolder } from "./Media.styles";
import { Box, Image } from "@/components";

//  Work in progress!!!

export const Media = forwardRef(
  (
    { data, size, imageSizes, ...props }: MediaProps,
    ref: Ref<MediaProps>,
  ): any => {
    if (!data) return null;
    let variant = "image";
    if (data.videoId) {
      variant = "video";
    }

    const hasImageSizes = imageSizes ? { sizes: imageSizes } : {};

    return (
      <Box {...props} {...mediaHolder(size)}>
        {variant === "image" && (
          <Image
            {...hasImageSizes}
            src={data.imageUrl}
            alt={data.imageUrl}
            responsive
          />
        )}
      </Box>
    );
  },
);
