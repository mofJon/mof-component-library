import { FC } from "react";
import { ModuleBase, Carousel, Stack, Text } from "../../components";
import {
  carouselContent,
  carouselWrapper,
  carouselTag,
  carouselHeading,
  carouselDescription,
} from "./CardCarouselFocusModule.styles";
import { CardCarouselFocusModuleProps } from "./CardCarouselFocusModule.types";

const CardCarouselFocusModule: FC<CardCarouselFocusModuleProps> = ({
  carouselProps,
  data,
  moduleAnims,
  getItems,
  textStyles,
  ...props
}) => {
  if (!data) return null;
  const getCards = data?.cardRow || [];

  const renderCarouselRows = getCards.map((val: any, i: number) => {
    const { cards } = val.props;

    return <Carousel items={getItems(cards)} {...carouselProps} />;
  });

  const heading =
    typeof data.headingTitle === "object"
      ? data.headingTitle.heading
      : data.headingTitle;
  const htag = data.headingTitle?.htag
    ? { htag: data.headingTitle.heading }
    : {};

  return (
    <ModuleBase data={data} {...carouselWrapper(props, moduleAnims?.module)}>
      <Stack {...carouselContent(moduleAnims?.content)}>
        <Text
          text={data.tag}
          {...carouselTag(moduleAnims?.tag, textStyles?.tag)}
        />
        <Text
          text={heading}
          {...htag}
          {...carouselHeading(moduleAnims?.heading, textStyles?.heading)}
        />
        <Text
          text={data.description}
          {...carouselDescription(
            moduleAnims?.description,
            textStyles?.description,
          )}
        />
      </Stack>
      {renderCarouselRows}
    </ModuleBase>
  );
};

export default CardCarouselFocusModule;
