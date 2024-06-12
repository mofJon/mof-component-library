import { FC } from "react";
import { Box, Carousel, ModuleBase, Stack, Text } from "../../components";
import * as styles from "./QuoteCarouselModule.styles";
import { QuoteCarouselModuleProps } from "./QuoteCarouselModule.types";

const QuoteCarouselModule: FC<QuoteCarouselModuleProps> = ({
  data,
  carouselProps,
  moduleAnims,
  textStyles,
  ...props
}) => {
  if (!data) return null;

  const quoteItems = data?.quotes || [];

  const renderQuotes = quoteItems.map((val: any, i: number) => {
    return (
      <Stack
        key={`quoteCarousel${i}`}
        {...styles.quoteSlide(moduleAnims?.slide)}
      >
        <Stack {...styles.quoteWrapper}>
          <Text
            text={`<span class="quote-left">&ldquo;</span>${val.quote}<span class="quote-right">&rdquo;</span>`}
            {...styles.quoteMain(moduleAnims?.quoteMain, textStyles?.quote)}
          />
        </Stack>
        <Stack {...styles.quoteFooter(moduleAnims?.footer)}>
          <Text
            text={val.author}
            {...styles.quoteAuthor(
              moduleAnims?.author,
              textStyles?.quoteAuthor,
            )}
          />
          <Text
            text={val.source}
            {...styles.quoteSource(
              moduleAnims?.source,
              textStyles?.quoteSource,
            )}
          />
        </Stack>
      </Stack>
    );
  });

  return (
    <ModuleBase data={data} {...styles.quoteModule(props, moduleAnims?.module)}>
      <Box
        variant="container"
        {...styles.quoteContainer(moduleAnims?.container)}
      >
        <Carousel items={renderQuotes} {...carouselProps} />
      </Box>
    </ModuleBase>
  );
};

export default QuoteCarouselModule;
