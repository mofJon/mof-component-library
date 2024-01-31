import { FC, useRef } from "react";
import { Box, ModuleBase, Carousel, CardItems } from "../../components";
import {
  genericCard,
  genericCarousel,
  genericContainer,
} from "./CardCarouselGenericModule.styles";
import { CardCarouselGenericModuleProps } from "./CardCarouselGenericModule.types";
import { useDimensions } from "../../hooks";

const CardCarouselGenericModule: FC<CardCarouselGenericModuleProps> = ({
  animationStyle = "default",
  data,
  directionComponent,
  cardAnim,
  cardChildAnims,
  showPagination = true,
  paginationType = "dots",
  columns = 1,
  crop = false,
  loop = false,
  gap = 0,
  slideWidth,
  slideHeight,
  ...props
}) => {
  const ref = useRef(null);
  const { width, height } = useDimensions(ref);

  const renderCarouselRows = data.cardRow.map((val: any, i: number) => {
    const { cards } = val.props;

    return (
      <Box key={`genericCardCarouselRow${i}`} ref={ref} {...genericContainer}>
        <Carousel
          {...props}
          items={CardItems(
            cards,
            cardChildAnims,
            cardAnim,
            "card",
            "primary",
            genericCard,
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
          width={(slideWidth || width) / columns - gap}
          height={slideHeight || height}
          {...genericCarousel}
        />
      </Box>
    );
  });

  return <ModuleBase data={data}>{renderCarouselRows}</ModuleBase>;
};

export default CardCarouselGenericModule;
