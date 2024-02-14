import { FC, useRef } from "react";
import {
  Box,
  ModuleBase,
  Carousel,
  Card,
  CardItems,
  Stack,
} from "../../components";
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
  moduleAnims,
  showPagination = false,
  paginationType = "dots",
  crop = false,
  loop = true,
  gap = 0,
  slideWidth,
  slideHeight,
  carouselVariant = "focusCarousel",
  cardVariant = "focusCard",
  imageSizes = "90vw",
  itemAnimationVariant = "none",
  ...props
}) => {
  const ref = useRef(null);
  const { width, height } = useDimensions(ref);

  const getCards = data?.props?.cardRow || [];

  const renderCarouselRows = getCards.map((val: any, i: number) => {
    const { cards } = val.props;

    return (
      <Box key={`focusCardCarouselRow${i}`} ref={ref} {...focusContainer}>
        <Carousel
          {...props}
          items={CardItems(
            cards,
            moduleAnims?.cardChildAnims,
            moduleAnims?.cardAnim,
            cardVariant,
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

  return (
    <ModuleBase data={data}>
      <Stack direction="column">
        <Card data={data.props} variant={carouselVariant} />
        {renderCarouselRows}
      </Stack>
    </ModuleBase>
  );
};

export default CardCarouselFocusModule;
