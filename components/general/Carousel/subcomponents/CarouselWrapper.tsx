import { FC } from "react";
import { Box, Stack } from "@components";
import CarouselItem from "./CarouselItem";
import { ICarouselWrapper } from "../Carousel.types";
import { PanInfo } from "framer-motion";
import { carouselCanvas, carouselWrapper } from "../Carousel.styles";

// @ts-ignore
// const html = document.documentElement;

const CarouselWrapper: FC<ICarouselWrapper> = ({
  items,
  currItem,
  isAnimating,
  dragWidth,
  gap,
  animationStyle,
  crop,
  variant,
  ...props
}) => {
  const length = items.length - 1;
  const origin = 0;
  const { currItem: currentItem, setCurrItem } = currItem;
  const { setIsAnimating } = isAnimating;

  const renderItems = items.map((val: any, i: number) => {
    return (
      <CarouselItem
        key={`carouselItem_${i}`}
        item={val.media}
        index={i}
        width={dragWidth}
        isActive={i === currentItem}
        animationStyle={animationStyle}
        variant={variant}
        onClick={() => {
          setCurrItem(i);
        }}
      />
    );
  });

  const startDrag = () => {
    setIsAnimating(true);
    // html.style.touchAction = "none";
  };

  const endDrag: any = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const { velocity } = info;
    const vel = velocity.x;
    const fastEnough = Math.abs(vel) > 5;

    if (fastEnough && typeof currentItem === "number") {
      const delta = vel > 0 ? -1 : 1;
      const next = currentItem + delta;

      if (next !== currentItem) {
        const clampedValue = Math.max(0, Math.min(length, next));
        setCurrItem(clampedValue);
      }
    }

    // html.style.touchAction = "auto";
  };

  const startAnimate = () => {
    setIsAnimating(true);
  };

  const endAnimate = () => {
    setIsAnimating(false);
  };

  let x;
  if (typeof currentItem === "number") {
    x = origin - currentItem * (dragWidth + gap);
  }

  return (
    <Box {...carouselCanvas(crop)}>
      <Stack
        direction="row"
        drag="x"
        onDragEnd={endDrag}
        onDragStart={startDrag}
        onAnimationStart={startAnimate}
        onAnimationComplete={endAnimate}
        animate={{ x }}
        dragConstraints={{ left: x, right: x, top: 0, bottom: 0 }}
        {...carouselWrapper(gap, animationStyle)}
        {...props}
      >
        {renderItems}
      </Stack>
    </Box>
  );
};

export default CarouselWrapper;
