import { forwardRef, Ref } from "react";
import { CardProps } from "./Card.types";
import { cardVars, content, cta, mediaHolder } from "./Card.styles";
import { Box, Button, Stack, Text } from "@components";

export const Card = forwardRef(
  ({ className, size, data, ...props }: CardProps, ref: Ref<CardProps>) => {
    const allProps = {
      ...cardVars(data.variant, size, className), // pass all styling defaults to decoupled styles file to future-proof modularity
      ...props, // pass down remaining props
    };

    const handleClick = () => {
      console.log("clicked CTA");
    };

    return (
      <Stack ref={ref} {...allProps}>
        <Box {...mediaHolder(size)}>{data.media}</Box>
        <Stack direction="column" {...content(size)}>
          <Text text={data.preHeading} textStyle="copyBold" />
          <Text text={data.headingTitle} textStyle="h5" />
          <Text text={data.subHeading} textStyle="copyBold" />
          <Text text={data.description} />
          <Button
            text={data.primaryCta}
            onClick={handleClick}
            variant="primary"
            {...cta}
          />
        </Stack>
      </Stack>
    );
  },
);

Card.displayName = "Card";
