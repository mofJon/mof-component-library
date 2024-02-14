import { CarouselProps } from "../../components";

export type CardCarouselFocusModuleProps = CarouselProps & {
  moduleAnims?: any;
  data: any;
  directionComponent?: any;
  slideWidth?: number;
  slideHeight?: number;
  cardVariant?: string;
  carouselVariant?: string;
  imageSizes?: string;
};
