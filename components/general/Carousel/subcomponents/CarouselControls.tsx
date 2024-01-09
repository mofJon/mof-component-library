import { FC } from "react";
import { Box, Stack } from "@components";
import { carouselControl, carouselControlsHolder } from "../Carousel.styles";
import { CarouselDirection } from "../Carousel.types";

const CarouselControls: FC<any> = ({
  controls,
  currItem,
  isAnimating,
  width,
  length,
  ...props
}) => {
  const { currItem: currentItem, setCurrItem } = currItem;
  const isLocked = isAnimating.isAnimating;

  const handleSwitch = (dir: CarouselDirection) => {
    if (!isLocked) {
      let switchVal = dir === "next" ? currentItem + 1 : currentItem - 1;
      if (switchVal > length - 1) {
        switchVal = currentItem;
      } else if (switchVal < 0) {
        switchVal = 0;
      }

      setCurrItem(switchVal);
    }
  };

  const Arrow = controls.svg;
  const allProps = {
    ...carouselControlsHolder(width),
    ...props,
  };

  const renderControls = ["prev", "next"].map((val: any, i: number) => {
    const hide =
      (val === "prev" ? currentItem === 0 : currentItem === length - 1) ||
      isLocked;

    return (
      <Box
        key={`control${i}`}
        onClick={() => handleSwitch(val)}
        {...carouselControl(val, hide)}
      >
        <Arrow />
      </Box>
    );
  });

  return (
    <Stack direction="row" {...allProps}>
      {renderControls}
    </Stack>
  );
};

export default CarouselControls;
