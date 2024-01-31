import { FC, useRef } from "react";
import { Box, ModuleBase, Carousel, Card, CardItems } from "../../components";
import {
  focusCard,
  focusCarousel,
  focusContainer,
} from "./CardCarouselFocusModule.styles";
import { CardCarouselFocusModuleProps } from "./CardCarouselFocusModule.types";
import { useDimensions } from "../../hooks";

const CardCarouselFocusModule: FC<CardCarouselFocusModuleProps> = ({
  animationStyle = "default",
  data,
  directionComponent,
  cardAnim,
  cardChildAnims,
  showPagination = false,
  paginationType = "dots",
  crop = false,
  loop = true,
  gap = 0,
  slideWidth,
  slideHeight,
  ...props
}) => {
  const ref = useRef(null);
  const { width, height } = useDimensions(ref);

  const renderCarouselRows = data.props.cardRow.map((val: any, i: number) => {
    const { cards } = val.props;

    return (
      <Box key={`focusCardCarouselRow${i}`} ref={ref} {...focusContainer}>
        <Carousel
          {...props}
          items={CardItems(
            cards,
            cardChildAnims,
            cardAnim,
            "card",
            "overlay",
            focusCard,
            "full",
          )}
          animationStyle={animationStyle}
          crop={crop}
          controls={{
            show: directionComponent ? true : false,
            directionComponent: directionComponent ? directionComponent : null,
          }}
          showPagination={showPagination}
          paginationType={paginationType}
          loop={loop}
          gap={gap}
          width={slideWidth || width}
          height={slideHeight || height}
          {...focusCarousel}
        />
      </Box>
    );
  });

  return <ModuleBase data={data}>{renderCarouselRows}</ModuleBase>;
};

export default CardCarouselFocusModule;
