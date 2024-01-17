import { cva } from "class-variance-authority";
import { CarouselVars, CarouselProps } from "./Carousel.types";
import {
  carouselAnimationDefault,
  carouselAnimationElegant,
  carouselAnimationBouncy,
} from "@/animations";

// Carousel Variant Styles
export const carousel = cva("carousel", {
  variants: {
    variant: {
      primary: "primary",
      focus: "focus",
      bookcase: "bookcase",
    },
    size: {
      sm: "sm",
      md: "md",
      lg: "lg",
    },
    align: {
      left: "left",
      center: "center",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

// Carousel Props
export const carouselVars: CarouselVars = (
  variant,
  size,
  align,
  width,
  height,
  classes,
) => {
  const baseStyles = `${classes ? classes : ""}`;

  return {
    className: carousel({
      variant,
      size,
      className: baseStyles,
    }),
    style: {
      width: `${width}px`,
      height: `${height}px`,
    },
  };
};

export const carouselCanvas = (crop: boolean) => ({
  className: `carousel-canvas ${crop ? "crop" : ""}`,
});

export const carouselWrapper = (gap: number, animationStyle = "default") => {
  const transition = {
    default: carouselAnimationDefault,
    elegant: carouselAnimationElegant,
    bouncy: carouselAnimationBouncy,
  };

  return {
    className: `carousel-wrapper`,
    style: { gap: `${gap}px` },
    transition: transition[animationStyle as "default"],
  };
};

export const itemHolder: any = (
  width: number,
  offset: number,
  style: any,
  loop: boolean,
) => {
  const addOffset = loop
    ? {
        transform: `translateX(${offset}px)`,
      }
    : "";

  return {
    className: `carousel-item`,
    style: {
      ...style,
      width: `${width}px`,
      ...addOffset,
    },
  };
};

export const carouselControlsHolder = (width: number) => ({
  className: `carousel-control-wrapper`,
  style: {
    width: `${width}px`,
  },
});

export const carouselControl = (dir: "prev" | "next", hide: boolean) => {
  return {
    className: `carousel-control ${dir} ${hide ? "hide" : ""}`,
  };
};

export const carouselPagination = {
  className: "carousel-pagination",
};

export const carouselPaginationStep = (isActive: boolean) => {
  return {
    className: `carousel-pagination-step ${isActive ? "active" : ""}`,
  };
};

export const carouselPaginationStepClickArea = {
  className: "carousel-pagination-step-click-area",
};
