import { FC } from "react";
import {
  contentBlockVars,
  cta,
  description,
  headingTitle,
  info,
  preContent,
  preHeading,
  subHeading,
} from "../ContentBlock.styles";
import { ContentBlockContentProps } from "../ContentBlock.types";
import { Button, Stack, Text } from "@components";
import { emptyContentBlockAnim } from "@animations";

// Work in progress

const PrimaryContentBlock: FC<ContentBlockContentProps> = ({
  variant,
  className,
  data,
  childAnims = emptyContentBlockAnim,
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
    <Stack direction="column" {...allProps} {...childAnims?.contentBlock}>
      <Stack direction="row" {...preContent} {...childAnims?.preContent}>
        <Text
          text={data.preHeading}
          {...preHeading}
          {...childAnims?.preHeading}
        />
        <Text text={data.info} {...info} {...childAnims?.info} />
      </Stack>
      <Text
        text={data.headingTitle}
        {...headingTitle}
        {...childAnims?.headingTitle}
      />
      <Text
        text={data.subHeading}
        {...subHeading}
        {...childAnims?.subHeading}
      />
      <Text
        text={data.description}
        {...description}
        {...childAnims?.description}
      />
      <Button
        text={data.primaryCta}
        onClick={handleClick}
        {...cta}
        {...childAnims?.primaryCta}
      />
    </Stack>
  );
};

export default PrimaryContentBlock;
