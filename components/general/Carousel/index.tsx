import { forwardRef, Ref, useState } from "react";
import { CarouselProps } from "./Carousel.types";
import { carouselVars } from "./Carousel.styles";
import { Stack } from "#mof-components";
import {
  CarouselControls,
  CarouselPagination,
  CarouselWrapper,
} from "./subcomponents";

export const Carousel = forwardRef(
  (
    {
      className,
      variant = "primary",
      size,
      items = [],
      loop = false,
      animationStyle = "default",
      gap,
      width,
      height,
      controls,
      showPagination = false,
      align = "left",
      crop = true,
      ...props
    }: CarouselProps,
    ref: Ref<CarouselProps>,
  ) => {
    const [currItem, setCurrItem] = useState(0);

    if (items.length === 0) return null;

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
        <CarouselWrapper
          items={items}
          gap={gap}
          dragWidth={carouselWidth}
          currItem={{ currItem, setCurrItem }}
          animationStyle={animationStyle}
          crop={crop}
          loop={loop}
          variant={variant}
        />
        <CarouselControls
          controls={controls}
          currItem={{ currItem, setCurrItem }}
          length={items.length}
          width={carouselWidth}
          loop={loop}
        />
        {showPagination && !loop && (
          <CarouselPagination
            currItem={{ currItem, setCurrItem }}
            length={items.length}
          />
        )}
      </Stack>
    );
  },
);

Carousel.displayName = "Carousel";
