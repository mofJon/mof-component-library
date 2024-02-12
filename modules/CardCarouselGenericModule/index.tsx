import { FC, useRef } from "react";
import {
  Box,
  ModuleBase,
  Card,
  Carousel,
  CardItems,
  Stack,
} from "../../components";
import {
  genericCard,
  genericCarousel,
  genericContainer,
} from "./CardCarouselGenericModule.styles";
import { CardCarouselGenericModuleProps } from "./CardCarouselGenericModule.types";
import { useDimensions } from "../../hooks";
// @ts-ignore - grabs variables from the root project's tailwind config
import twConfig from "/tailwind.config.ts";

// @ts-ignore
const { screens: breakpoints } = twConfig?.theme?.extend;
const availBreakpoints = breakpoints
  ? Object.keys(breakpoints)
  : ["base", "sm", "md", "lg", "xl"];

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
  contentVariant = "card",
  imageSizes = "(max-width: 640px) 100vw, (max-width: 1200px) 33vw, 20vw",
  ...props
}) => {
  const ref = useRef(null);
  const { width, height, breakpoint } = useDimensions(ref);

  // get the number of columns to render based on the current breakpoint
  let columnNum = columns;
  if (typeof columns === "object") {
    columnNum = Object.values(columns)[0];
    for (let i = 0; i < availBreakpoints.length; i++) {
      const val = availBreakpoints[i];
      if (columns[val] && breakpoint !== "base") columnNum = columns[val];
      if (val === breakpoint) {
        break;
      }
    }
  }

  const getCards = data?.cardRow || [];

  const renderCarouselRows = getCards.map((val: any, i: number) => {
    const { cards } = val.props;

    return (
      <Box key={`genericCardCarouselRow${i}`} ref={ref} {...genericContainer}>
        <Carousel
          {...props}
          items={CardItems(
            cards,
            cardChildAnims,
            cardAnim,
            contentVariant,
            "primary",
            genericCard,
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
          width={(slideWidth || width) / (columnNum as number) - gap}
          height={slideHeight || height}
          {...genericCarousel}
        />
      </Box>
    );
  });

  return (
    <ModuleBase data={data}>
      <Stack direction="column">
        <Card data={data} />
        {renderCarouselRows}
      </Stack>
    </ModuleBase>
  );
};

export default CardCarouselGenericModule;
