import { FC } from "react";
import { Box, Image, Text } from "@components";
import { ICarouselItem } from "../Carousel.types";
import { itemHolder } from "../Carousel.styles";
import { carouselFocusAnimation, carouselBookcaseAnimation } from "@animations";

let offset = 0;

const CarouselItem: FC<ICarouselItem> = ({
  index,
  item,
  width,
  currentItem = 0,
  length,
  loop = false,
  animationStyle,
  slideWidth,
  variant,
  ...props
}) => {
  let isActive = currentItem === index;

  if (loop) {
    const itemsLength = length + 1;
    const fullLength = itemsLength * 2;
    const groupOffset = Math.floor((currentItem - index - 1) / fullLength);

    // reorders stack to faux infinte scroll
    offset = slideWidth * (fullLength * groupOffset + itemsLength);
    isActive = currentItem - fullLength * groupOffset - itemsLength === index;
  }

  const itemAnimation = {
    primary: {},
    focus: carouselFocusAnimation(animationStyle, isActive, offset, loop),
    bookcase: carouselBookcaseAnimation(animationStyle, isActive, offset, loop),
  };

  const allProps = {
    ...itemHolder(width, offset, (props as any).style, loop),
    ...props,
    bgSrc: typeof item === "string" ? item : "",
    // @ts-ignore
    ...itemAnimation[variant],
  };

  return <Box {...allProps}>{item.type ? item : null}</Box>;
};

export default CarouselItem;
