import { FC } from "react";
import { contentBlockVars, cta } from "../ContentBlock.styles";
import { ContentBlockContentProps } from "../ContentBlock.types";
import { Button, Stack, Text } from "@components";

const PrimaryContentBlock: FC<ContentBlockContentProps> = ({
  variant,
  className,
  data,
  ...props
}) => {
  const allProps = {
    ...contentBlockVars(variant, className),
    ...props,
  };

  const handleClick = () => {
    console.log("clicked CTA");
  };

  return (
    <Stack direction="column" {...allProps}>
      <Text text={data.preHeading} textStyle="copyBold" />
      <Text text={data.headingTitle} textStyle="h5" />
      <Text text={data.subHeading} textStyle="copyBold" />
      <Text text={data.description} />
      <Button text={data.primaryCta} onClick={handleClick} {...cta} />
    </Stack>
  );
};

export default PrimaryContentBlock;
