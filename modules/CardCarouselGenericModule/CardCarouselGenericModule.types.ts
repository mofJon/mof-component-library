import { CarouselProps } from "../../components";

export type CardCarouselGenericModuleProps = CarouselProps & {
  moduleAnims?: {
    module?: any;
    content?: any;
    carousel?: any;
    headingSide?: any;
  };
  data: any;
  carouselProps?: CarouselProps;
  getItems: (cards: any) => any;
  textStyles?: Record<string, any>;
};
