import { forwardRef, Ref } from "react";
import { CardProps } from "./Card.types";
import { cardContent, cardVars, mediaHolder } from "./Card.styles";
import { ContentBlock, Grid, Media } from "../../../components";
import { emptyContentBlockAnim } from "../../../theme/animations";

export const Card = forwardRef(
  (
    {
      className,
      variant = "primary",
      size,
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
          {...mediaHolder(size)}
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
