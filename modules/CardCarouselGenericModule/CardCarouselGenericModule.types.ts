import { CarouselProps } from "../../components";

export type CardCarouselGenericModuleProps = CarouselProps & {
  moduleAnims?: any;
  columns?: number | Record<string, number>;
  data: any;
  directionComponent?: any;
  slideWidth?: number;
  slideHeight?: number;
  cardVariant?: string;
  carouselVariant?: string;
  imageSizes?: string;
};
