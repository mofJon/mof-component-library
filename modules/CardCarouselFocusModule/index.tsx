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
  contentVariant = "card",
  imageSizes,
  itemAnimationVariant = "none",
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
            contentVariant,
            "overlay",
            focusCard,
            "full",
            imageSizes,
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
          itemAnimationVariant={itemAnimationVariant}
          {...focusCarousel}
        />
      </Box>
    );
  });

  return <ModuleBase data={data}>{renderCarouselRows}</ModuleBase>;
};

export default CardCarouselFocusModule;
