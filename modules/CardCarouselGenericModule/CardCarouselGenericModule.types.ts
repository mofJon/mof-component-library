import { CarouselProps } from "../../components";

export type CardCarouselGenericModuleProps = CarouselProps & {
  moduleAnims?: {
    module?: any;
    content?: any;
    tag?: any;
    heading?: any;
    description?: any;
    carousel?: any;
  };
  data: any;
  carouselProps?: CarouselProps;
  getItems: (cards: any) => any;
  textStyles?: Record<string, any>;
};
