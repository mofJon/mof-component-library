import { forwardRef, Ref } from "react";
import { CardProps } from "./Card.types";
import { cardVars } from "./Card.styles";
import { Grid } from "@components";
import CardMedia from "./CardMedia";
import Content from "./Content";

export const Card = forwardRef(
  ({ className, size, data, ...props }: CardProps, ref: Ref<CardProps>) => {
    const allProps = {
      ...cardVars(data.variant, size, className),
      ...props,
    };

    return (
      <Grid ref={ref} {...allProps}>
        <CardMedia data={data.media} size={size} />
        <Content data={data} size={size} />
      </Grid>
    );
  },
);

Card.displayName = "Card";
