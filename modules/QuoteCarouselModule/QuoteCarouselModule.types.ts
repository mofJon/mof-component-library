import { CarouselProps } from "../../components";

export type QuoteCarouselModuleProps = CarouselProps & {
  data: any;
  directionComponent?: any;
  slideWidth?: number;
  slideHeight?: number;
  textStyles?: any;
};
