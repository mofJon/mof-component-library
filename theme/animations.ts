import { CarouselProps } from "@components/general/Carousel/Carousel.types";

export const animController = (
  active = false,
  delay = 0,
  staggerChildren = 0.2,
) => ({
  initial: "inactive",
  animate: active ? "active" : "inactive",
  variants: {
    inactive: {
      opacity: 0,
    },
    active: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren,
      },
    },
  },
});

export const animControllerInView = (delay = 0, staggerChildren = 0.2) => ({
  initial: "inactive",
  whileInView: "active",
  variants: {
    inactive: {
      opacity: 0,
    },
    active: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren,
      },
    },
  },
});

const easeIn = {
  type: "spring",
  damping: 25,
};

const bounceIn = {
  type: "spring",
  stiffness: 500,
};

export const fadeInUp = {
  variants: {
    inactive: {
      y: 50,
      opacity: 0,
    },
    active: {
      y: 0,
      opacity: 1,
      transition: easeIn,
    },
  },
};

export const fadeInLeft = {
  variants: {
    inactive: {
      x: 50,
      opacity: 0,
    },
    active: {
      x: 0,
      opacity: 1,
      transition: easeIn,
    },
  },
};

export const fadeInRight = {
  variants: {
    inactive: {
      x: -50,
      opacity: 0,
    },
    active: {
      x: 0,
      opacity: 1,
      transition: easeIn,
    },
  },
};

export const scaleIn = {
  variants: {
    inactive: {
      scale: 0,
      opacity: 0,
    },
    active: {
      scale: 1,
      opacity: 1,
      transition: easeIn,
    },
  },
};

export const springIn = {
  variants: {
    inactive: {
      scale: 0,
      opacity: 0,
    },
    active: {
      scale: 1,
      opacity: 1,
      transition: bounceIn,
    },
  },
};

// carousel animations

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
) => ({
  initial: "inactive",
  animate: isActive ? "active" : "inactive",
  variants: {
    inactive: {
      x: offset,
      opacity: 0.5,
      scale: 0.5,
    },
    active: {
      x: offset,
      opacity: 1,
      scale: 1,
    },
  },
  transition: { ...focusTransition[animStyle], ...disableCarouselX },
});

export const carouselBookcaseAnimation = (
  animStyle: CarouselProps["animationStyle"],
  isActive: boolean,
  offset: number,
) => ({
  initial: "inactive",
  animate: isActive ? "active" : "inactive",
  variants: {
    inactive: {
      x: offset,
      scale: 0.85,
      opacity: 1,
    },
    active: {
      x: offset,
      scale: 1,
      opacity: 1,
    },
  },
  transition: { ...focusTransition[animStyle], ...disableCarouselX },
});
