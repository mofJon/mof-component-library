import { forwardRef, Ref, useState } from "react";
import { CarouselProps } from "./Carousel.types";
import { carouselVars } from "./Carousel.styles";
import { Stack } from "../../../components";
import {
  CarouselContext,
  CarouselControls,
  CarouselPagination,
  CarouselWrapper,
} from "./chunks";

export const Carousel = forwardRef(
  (
    {
      className,
      variant = "primary",
      size,
      items = [],
      loop = false,
      animationStyle = "default",
      gap = 0,
      width,
      height,
      controls,
      showPagination = false,
      paginationType = "dots",
      align = "left",
      crop = true,
      isClickable = false,
      itemAnimationVariant = "default",
      paginationStyle,
      ...props
    }: CarouselProps,
    ref: Ref<CarouselProps>,
  ) => {
    const [currItem, setCurrItem] = useState(0);

    if (items.length === 0 || width === 0 || height === 0) return null;

    const carouselWidth = width || items[0].media.width;
    const carouselHeight = height || items[0].media.height;

    const allProps = {
      ...carouselVars(
        variant,
        size,
        align,
        carouselWidth,
        carouselHeight,
        className,
      ),
      ...props,
    };

    return (
      <Stack {...allProps}>
        <CarouselContext.Provider
          value={{ currItem, setCurrItem, isClickable, itemAnimationVariant }}
        >
          <CarouselWrapper
            items={items}
            gap={gap}
            dragWidth={carouselWidth}
            animationStyle={animationStyle}
            crop={crop}
            loop={loop}
            variant={variant}
          />
          <CarouselControls
            controls={controls}
            length={items.length}
            width={carouselWidth}
            loop={loop}
          />
          {showPagination && !loop && (
            <CarouselPagination
              length={items.length}
              paginationType={paginationType}
              paginationStyle={paginationStyle}
            />
          )}
        </CarouselContext.Provider>
      </Stack>
    );
  },
);

Carousel.displayName = "Carousel";
