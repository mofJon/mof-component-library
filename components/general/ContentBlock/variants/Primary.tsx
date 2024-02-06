import { FC } from "react";
import { contentBlockVars, renderComponent } from "../ContentBlock.styles";
import { ContentBlockContentProps } from "../ContentBlock.types";
import { ButtonGroup, Stack, Text } from "../../../../components";
import { emptyContentBlockAnim } from "../../../../theme/animations";

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

  return (
    <Stack direction="column" {...allProps}>
      <Stack direction="row" {...renderComponent("preContent")}>
        <Text {...renderComponent("tag", data)} />
        <Text {...renderComponent("preHeading", data)} />
        <Text {...renderComponent("infoTags", data)} />
      </Stack>
      <Text {...renderComponent("headingTitle", data)} />
      <Text {...renderComponent("subheading", data)} />
      <Text {...renderComponent("description", data)} />
      <ButtonGroup
        {...renderComponent("buttonGroup")}
        primaryProps={renderComponent("primaryCta", data)}
        secondaryProps={renderComponent("secondaryCta", data)}
      />
    </Stack>
  );
};

export default PrimaryContentBlock;
