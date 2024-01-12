import { FC } from "react";
import { Box, Image, Text } from "@components";
import { ICarouselItem } from "../Carousel.types";
import { itemHolder } from "../Carousel.styles";
import { carouselFocusAnimation, carouselBookcaseAnimation } from "@animations";

let offset = 0;
let itemIndex = 0;

const CarouselItem: FC<ICarouselItem> = ({
  index,
  item,
  width,
  currentItem = 0,
  length,
  loop,
  animationStyle,
  slideWidth,
  variant,
  onClick,
  ...props
}) => {
  let isActive = currentItem === index;
  itemIndex = index;

  if (loop) {
    const itemsLength = length + 1;
    const fullLength = itemsLength * 2;
    const groupOffset = Math.floor((currentItem - index - 1) / fullLength);

    offset = slideWidth * (fullLength * groupOffset + itemsLength);
    isActive = currentItem - fullLength * groupOffset - itemsLength === index;
    itemIndex = index + index * groupOffset;
  }

  const itemAnimation = {
    primary: {},
    focus: carouselFocusAnimation(animationStyle, isActive, offset),
    bookcase: carouselBookcaseAnimation(animationStyle, isActive, offset),
  };

  const handleClick = () => {
    onClick(itemIndex);
  };

  const allProps = {
    ...itemHolder(width, offset),
    ...props,
    src: item.src,
    // @ts-ignore
    ...itemAnimation[variant],
  };

  return (
    <Box {...allProps} onClick={handleClick}>
      <Text
        text={`${index}`}
        textStyle="h3"
        className="absolute z-10 p-4 !text-white"
      />
      <Image src={item.src} alt={`slide${index}`} />
    </Box>
  );
};

export default CarouselItem;
