import { FC } from "react";
import { MediaProps } from "./Media.types";
import { mediaHolder } from "./Media.styles";
import { Box } from "@/components";

//  Work in progress!!!

export const Media: FC<MediaProps> = ({ className, data, size, ...props }) => {
  if (!data) return null;
  let variant = "backgroundImage";
  if (data.isArray) {
    variant = "slideshow";
  }
  if (data.videoId) {
    variant = "video";
  }

  // logic for carousel
  if (data.isArray) {
    console.log("carousel", data);
  }

  // if not an array of images, display one image as background image for responsive cover
  return <Box bgSrc={data} {...mediaHolder(size)} {...props} />;
};
