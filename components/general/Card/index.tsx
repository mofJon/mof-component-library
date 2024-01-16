import { forwardRef, Ref } from "react";
import { CardProps } from "./Card.types";
import { cardContent, cardVars, mediaHolder } from "./Card.styles";
import { ContentBlock, Grid, Media } from "#mof-components";
import { emptyContentBlockAnim } from "#mof-animations";

export const Card = forwardRef(
  (
    {
      className,
      variant = "primary",
      size,
      data,
      childAnims = emptyContentBlockAnim,
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
        <Media data={data.media} size={size} {...mediaHolder(size)} />
        <ContentBlock
          data={data}
          {...cardContent(size)}
          childAnims={childAnims}
        />
      </Grid>
    );
  },
);

Card.displayName = "Card";