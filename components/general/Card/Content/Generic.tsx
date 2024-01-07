import { FC } from "react";
import { content, cta } from "../Card.styles";
import { Button, Stack, Text } from "@components";

const Generic: FC<any> = ({ className, size, data, ...props }) => {
  const allProps = {
    ...className,
    ...props,
  };

  const handleClick = () => {
    console.log("clicked CTA");
  };

  return (
    <Stack direction="column" {...allProps} {...content(size)}>
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
  );
};

export default Generic;
