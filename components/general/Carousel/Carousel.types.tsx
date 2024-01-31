import React, { ReactNode } from "react";
import { type VariantProps } from "class-variance-authority";
import { carousel } from "./Carousel.styles";
import { MotionProps } from "framer-motion";

type HTMLAndMotionProps = React.HTMLAttributes<HTMLElement> & MotionProps;

export interface CarouselProps
  extends HTMLAndMotionProps,
    VariantProps<typeof carousel> {
  items: any;
  loop: boolean;
  animationStyle?: "default" | "elegant" | "bouncy";
  gap: number;
  width?: number;
  height?: number;
  controls?: {
    show?: boolean;
    directionComponent: ReactNode;
  };
  showPagination: boolean;
  align?: "left" | "center";
  crop: boolean;
}

export type CarouselVars = (
  variant: CarouselProps["variant"],
  size: CarouselProps["size"],
  align: CarouselProps["align"],
  width: CarouselProps["width"],
  height: CarouselProps["height"],
  className: CarouselProps["className"],
) => Record<any, any>;

export interface ICarouselWrapper {
  items: CarouselProps["items"];
  animationStyle: CarouselProps["animationStyle"];
  dragWidth: number;
  gap: number;
  crop: boolean;
  loop?: boolean;
  variant: CarouselProps["variant"];
}

export interface ICarouselItem {
  index: number;
  item: any;
  width: number;
  slideWidth: number;
  length: number;
  loop?: boolean;
  onClick: (index: number) => void;
  animationStyle: CarouselProps["animationStyle"];
  variant: CarouselProps["variant"];
}

export type CarouselDirection = "prev" | "next";

export interface ICarouselControls {
  controls: CarouselProps["controls"];
  length: number;
  width: number;
}

export interface ICarouselPagination {
  length: number;
}
