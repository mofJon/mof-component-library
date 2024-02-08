import { FC, useRef } from "react";
import { Box, Carousel, ModuleBase, Stack, Text } from "../../components";
import * as styles from "./QuoteCarouselModule.styles";
import { QuoteCarouselModuleProps } from "./QuoteCarouselModule.types";
import { useDimensions } from "../../hooks";

const QuoteCarouselModule: FC<QuoteCarouselModuleProps> = ({
  data,
  animationStyle = "default",
  directionComponent,
  showPagination = false,
  paginationType = "dots",
  crop = false,
  loop = false,
  gap = 0,
  slideWidth,
  slideHeight,
  ...props
}) => {
  const ref = useRef(null);
  const { width, height } = useDimensions(ref);

  if (!data) return null;

  const renderQuotes = data.quotes.map((val: any, i: number) => {
    return (
      <Stack key={`quoteCarousel${i}`} {...styles.quoteSlide}>
        <Stack {...styles.quoteMainWrapper}>
          <Text text="&ldquo;" textStyle="quote" {...styles.quoteLeft} />
          <Text text={val.quote} textStyle="quote" {...styles.quoteMain} />
          <Text text="&rdquo;" textStyle="quote" {...styles.quoteRight} />
        </Stack>
        <Stack {...styles.quoteFooter}>
          <Text text={val.author} {...styles.quoteAuthor} />
          <Text text={val.source} {...styles.quoteSource} />
        </Stack>
      </Stack>
    );
  });

  return (
    <ModuleBase data={data}>
      <Box variant="container" ref={ref} {...styles.quoteContainer}>
        <Carousel
          {...props}
          items={renderQuotes}
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
          {...styles.quoteCarousel}
        />
      </Box>
    </ModuleBase>
  );
};

export default QuoteCarouselModule;
