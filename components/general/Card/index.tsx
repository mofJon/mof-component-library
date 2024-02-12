import { forwardRef, Ref } from "react";
import { CardProps } from "./Card.types";
import {
  backgroundMediaHolder,
  cardContent,
  cardVars,
  mediaHolder,
} from "./Card.styles";
import { ContentBlock, Grid, Media } from "../../../components";
import { emptyContentBlockAnim } from "../../../theme/animations";

export const Card = forwardRef(
  (
    {
      className,
      variant = "primary",
      size,
      imageSizes,
      backgroundImageSizes,
      captionTextStyle,
      data,
      childAnims = emptyContentBlockAnim,
      priority,
      contentVariant = "card",
      ...props
    }: CardProps,
    ref: Ref<CardProps>,
  ) => {
    const allProps = {
      ...cardVars(variant, size, className),
      ...props,
    };

    if (!data) return null;

    const mainImage: any =
      data?.image ||
      data?.cardImage ||
      data?.largeImage ||
      data?.videoFromGallery; // grrrr
    const bgImage: any = data?.backgroundImage || data?.backgroundMedia;

    return (
      <Grid ref={ref} {...allProps}>
        <Media
          data={mainImage}
          size={size}
          imageSizes={imageSizes}
          captionTextStyle={captionTextStyle}
          {...mediaHolder(size)}
          responsive
          priority
          align={data?.mediaAlignment && data.mediaAlignment.toLowerCase()}
          orientation={
            data?.mediaOrientation && data.mediaOrientation.toLowerCase()
          }
        />
        <Media
          data={bgImage}
          size={size}
          imageSizes={backgroundImageSizes}
          {...backgroundMediaHolder}
          responsive
          priority
        />
        <ContentBlock
          data={data}
          {...cardContent(size)}
          childAnims={childAnims}
          variant={contentVariant}
        />
      </Grid>
    );
  },
);

Card.displayName = "Card";
