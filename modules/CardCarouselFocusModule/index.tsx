import { FC, useRef } from "react";
import { Box, ModuleBase, Carousel, Card } from "../../components";
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
  heightRatio = 1,
  showPagination = false,
  crop = false,
  loop = true,
  gap = 0,
  ...props
}) => {
  const ref = useRef(null);
  const { width } = useDimensions(ref);

  const height = width * heightRatio;

  const renderItems = data.map((val: any, i: number) => {
    return (
      <Card
        key={`card${i}`}
        data={val}
        variant="overlay"
        size="full"
        contentVariant="card"
        childAnims={cardChildAnims}
        priority
        {...cardAnim}
        {...focusCard}
      />
    );
  });

  return (
    <ModuleBase data={data} {...props}>
      <Box ref={ref} variant="container" {...focusContainer}>
        <Carousel
          items={renderItems}
          animationStyle={animationStyle}
          crop={crop}
          controls={{
            show: directionComponent ? true : false,
            directionComponent: directionComponent ? directionComponent : null,
          }}
          showPagination={showPagination}
          loop={loop}
          gap={gap}
          width={width}
          height={height}
          {...focusCarousel}
          {...props}
        />
      </Box>
    </ModuleBase>
  );
};

export default CardCarouselFocusModule;
