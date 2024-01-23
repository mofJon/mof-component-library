import { FC } from "react";
import {
  contentBlockVars,
  primaryCta,
  description,
  headingTitle,
  info,
  preContent,
  preHeading,
  subHeading,
} from "../ContentBlock.styles";
import { ContentBlockContentProps } from "../ContentBlock.types";
import { Button, Stack, Text } from "@/components";
import { emptyContentBlockAnim } from "@/animations";

// Work in progress

const PrimaryContentBlock: FC<ContentBlockContentProps> = ({
  variant,
  className,
  data,
  childAnims = emptyContentBlockAnim,
  ...props
}) => {
  const allProps = {
    ...contentBlockVars(variant, childAnims, className),
    ...props,
  };

  const handleClick = () => {
    console.log("clicked CTA");
  };

  return (
    <Stack direction="column" {...allProps}>
      <Stack direction="row" {...preContent()}>
        <Text text={data.preHeading} {...preHeading()} />
        <Text text={data.info} {...info()} />
      </Stack>
      <Text text={data.headingTitle} {...headingTitle()} />
      <Text text={data.subHeading} {...subHeading()} />
      <Text text={data.description} {...description()} />
      <Button text={data.primaryCta} onClick={handleClick} {...primaryCta()} />
    </Stack>
  );
};

export default PrimaryContentBlock;
