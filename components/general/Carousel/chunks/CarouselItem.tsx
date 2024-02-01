import { FC, useContext } from "react";
import { Box } from "../../../../components";
import { ICarouselItem } from "../Carousel.types";
import { itemHolder } from "../Carousel.styles";
import {
  carouselFocusAnimation,
  carouselBookcaseAnimation,
  carouselFadeAndScaleAnimation,
} from "../../../../theme/animations";
import { CarouselContext } from "./";

let offset = 0;

const CarouselItem: FC<ICarouselItem> = ({
  index,
  item,
  width,
  length,
  loop = false,
  animationStyle,
  slideWidth,
  variant,
  ...props
}) => {
  const { currItem } = useContext(CarouselContext);
  let isActive = currItem === index;

  if (loop) {
    const itemsLength = length + 1;
    const fullLength = itemsLength * 2;
    const groupOffset = Math.floor((currItem - index - 1) / fullLength);

    // reorders stack to faux infinte scroll
    offset = slideWidth * (fullLength * groupOffset + itemsLength);
    isActive = currItem - fullLength * groupOffset - itemsLength === index;
  }

  const itemAnimation = {
    primary: { initial: "inactive", animate: isActive ? "active" : "inactive" },
    focus: carouselFocusAnimation(animationStyle, isActive, offset, loop),
    bookcase: carouselBookcaseAnimation(animationStyle, isActive, offset, loop),
    fadeInAndScale: carouselFadeAndScaleAnimation(
      animationStyle,
      isActive,
      offset,
      loop,
    ),
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
