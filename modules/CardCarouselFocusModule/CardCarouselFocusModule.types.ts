import { CarouselProps } from "../../components";

export type CardCarouselFocusModuleProps = {
  moduleAnims?: {
    module?: any;
    content?: any;
    tag?: any;
    heading?: any;
    description?: any;
  };
  carouselProps?: CarouselProps;
  data: any;
  getItems: (cards: any) => any;
  textStyles?: Record<string, any>;
};
