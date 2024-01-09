import { FC } from "react";
import { Box, Image, Text } from "@components";
import { ICarouselItem } from "../Carousel.types";
import { itemHolder } from "../Carousel.styles";
import { carouselFocusAnimation } from "@animations";

const CarouselItem: FC<ICarouselItem> = ({
  index,
  item,
  width,
  isActive = false,
  animationStyle,
  variant,
  ...props
}) => {
  const itemAnimation =
    variant === "focus" ? carouselFocusAnimation(animationStyle, isActive) : {};

  const allProps = {
    ...itemHolder(item.width),
    ...props,
    src: item.src,
    ...itemAnimation,
  };

  return (
    <Box {...allProps}>
      <Image src={item.src} alt={`slide${index}`} />
    </Box>
  );
};

export default CarouselItem;
