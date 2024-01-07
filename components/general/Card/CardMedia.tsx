import { FC } from "react";
import { mediaHolder } from "./Card.styles";
import { Box } from "@components";

const CardMedia: FC<any> = ({ className, size, data, ...props }) => {
  const allProps = {
    ...className,
    ...props,
  };

  if (!data) return null;

  // logic for carousel
  if (data.isArray) {
    console.log("carousel", data);
  }

  // if not an array of images, display one image as background image for responsive cover
  return <Box src={data} {...mediaHolder(size)} {...allProps} />;
};

export default CardMedia;
