import { FC } from "react";
import { Box, Stack } from "@components";
import { ICarouselPagination } from "../Carousel.types";
import {
  carouselPagination,
  carouselPaginationStep,
  carouselPaginationStepClickArea,
} from "../Carousel.styles";

const CarouselPagination: FC<ICarouselPagination> = ({
  currItem,
  isAnimating,
  length,
  ...props
}) => {
  const { isAnimating: isLocked } = isAnimating;
  const { currItem: currentItem, setCurrItem } = currItem;

  const handleClick = (index: number) => {
    if (!isLocked) {
      setCurrItem(index);
    }
  };

  const indexer = Array.from({ length }, (v, i) => i);
  const renderDots = indexer.map((i: number) => {
    const isActive = currentItem === i;
    return (
      <Box
        key={`pagination${i}`}
        {...carouselPaginationStepClickArea}
        onClick={() => handleClick(i)}
      >
        <Box variant="block" {...carouselPaginationStep(isActive)} />
      </Box>
    );
  });

  const allProps = {
    ...carouselPagination,
    ...props,
  };

  return (
    <Stack direction="row" {...allProps}>
      {renderDots}
    </Stack>
  );
};

export default CarouselPagination;
