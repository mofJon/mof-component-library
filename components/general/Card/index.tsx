import { forwardRef, Ref } from "react";
import { CardProps } from "./Card.types";
import { cardContent, cardVars, mediaHolder } from "./Card.styles";
import { ContentBlock, Grid, Media } from "@components";

export const Card = forwardRef(
  ({ className, size, data, ...props }: CardProps, ref: Ref<CardProps>) => {
    const allProps = {
      ...cardVars(data.variant, size, className),
      ...props,
    };

    return (
      <Grid ref={ref} {...allProps}>
        <Media data={data.media} size={size} {...mediaHolder(size)} />
        <ContentBlock data={data} {...cardContent(size)} />
      </Grid>
    );
  },
);

Card.displayName = "Card";
