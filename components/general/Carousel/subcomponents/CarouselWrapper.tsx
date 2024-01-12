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
  dragWidth,
  gap,
  animationStyle,
  crop,
  loop,
  variant,
  ...props
}) => {
  const length = items.length - 1;
  const { currItem: currentItem, setCurrItem } = currItem;
  const slideWidth = dragWidth + (gap || 0);

  const carouselItems = loop ? [...items, ...items] : items;

  const handleItemClick = (itemIndex: number) => {
    console.log(itemIndex, currentItem);

    setCurrItem(itemIndex);
  };

  const renderItems = carouselItems.map((val: any, i: number) => {
    return (
      <CarouselItem
        key={`carouselItem_${i}`}
        item={val.media}
        index={i}
        width={dragWidth}
        slideWidth={slideWidth}
        currentItem={currentItem}
        length={length}
        animationStyle={animationStyle}
        variant={variant}
        loop={loop}
        onClick={handleItemClick}
      />
    );
  });

  const startDrag = () => {
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
        const croppedVal = loop ? next : Math.max(0, Math.min(length, next));

        setCurrItem(croppedVal);
      }
    }

    // html.style.touchAction = "auto";
  };

  let x = 0;
  if (typeof currentItem === "number") {
    x = -currentItem * slideWidth;
  }

  return (
    <Box {...carouselCanvas(crop)}>
      <Stack
        direction="row"
        drag="x"
        onDragEnd={endDrag}
        onDragStart={startDrag}
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
