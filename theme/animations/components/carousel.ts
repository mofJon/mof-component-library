import { CarouselProps } from "@/components/general/Carousel/Carousel.types";

export const carouselAnimationDefault = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

export const carouselAnimationElegant = {
  type: "spring",
  damping: 20,
  stiffness: 90,
};

export const carouselAnimationBouncy = {
  type: "spring",
  damping: 10,
  stiffness: 200,
};

const focusTransition = {
  default: carouselAnimationDefault,
  elegant: carouselAnimationElegant,
  bouncy: carouselAnimationBouncy,
};

const disableCarouselX = {
  x: {
    duration: 0,
  },
};

export const carouselFocusAnimation = (
  animStyle: CarouselProps["animationStyle"],
  isActive: boolean,
  offset: number,
  loop: boolean,
) => {
  let xOffset = {};
  if (loop)
    xOffset = {
      x: offset,
    };

  return {
    initial: "inactive",
    animate: isActive ? "active" : "inactive",
    variants: {
      inactive: {
        ...xOffset,
        opacity: 0.5,
        scale: 0.5,
      },
      active: {
        ...xOffset,
        opacity: 1,
        scale: 1,
      },
    },
    transition: {
      ...focusTransition[animStyle as "default"],
      ...disableCarouselX,
    },
  };
};

export const carouselBookcaseAnimation = (
  animStyle: CarouselProps["animationStyle"],
  isActive: boolean,
  offset: number,
  loop: boolean,
) => {
  let xOffset = {};
  if (loop)
    xOffset = {
      x: offset,
    };

  return {
    initial: "inactive",
    animate: isActive ? "active" : "inactive",
    variants: {
      inactive: {
        ...xOffset,
        scale: 0.85,
        opacity: 1,
      },
      active: {
        ...xOffset,
        scale: 1,
        opacity: 1,
      },
    },
    transition: {
      ...focusTransition[animStyle as "default"],
      ...disableCarouselX,
    },
  };
};
