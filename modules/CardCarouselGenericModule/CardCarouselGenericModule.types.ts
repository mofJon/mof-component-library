import { CarouselProps } from "../../components";

export type CardCarouselGenericModuleProps = CarouselProps & {
  cardAnim?: any;
  cardChildAnims?: any;
  columns?: number | Record<string, number>;
  data: any;
  directionComponent?: any;
  slideWidth?: number;
  slideHeight?: number;
  contentVariant?: string;
  imageSizes?: string;
};
