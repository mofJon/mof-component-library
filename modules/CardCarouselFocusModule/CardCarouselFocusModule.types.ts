import { CarouselProps } from "../../components";

export type CardCarouselFocusModuleProps = CarouselProps & {
  cardAnim?: any;
  cardChildAnims?: any;
  data: any;
  directionComponent?: any;
  slideWidth?: number;
  slideHeight?: number;
  contentVariant?: string;
};
