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

    return (
      <Grid ref={ref} {...allProps}>
        <Media
          data={data.image}
          size={size}
          imageSizes={imageSizes}
          {...mediaHolder(size)}
          responsive
          priority
          align={data.mediaAlignment && data.mediaAlignment.toLowerCase()}
          orientation={
            data.mediaOrientation && data.mediaOrientation.toLowerCase()
          }
        />
        <Media
          data={data.backgroundImage}
          size={size}
          imageSizes={imageSizes}
          {...backgroundMediaHolder(size)}
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
