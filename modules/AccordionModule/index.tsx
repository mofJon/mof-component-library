import { FC } from "react";
import { Accordion, ModuleBase, Stack, Text } from "../../components";
import {
  accordionHeading,
  accordionTag,
  accordionWrapper,
} from "./AccordionModule.styles";
import { AccordionModuleProps } from "./AccordionModule.types";

const AccordionModule: FC<AccordionModuleProps> = ({
  data,
  accordionIcon,
  moduleAnims = {},
  textStyles,
  ...props
}) => {
  return (
    <ModuleBase data={data} {...props}>
      <Stack {...accordionWrapper(moduleAnims, props)}>
        <Text text={data.tag} {...accordionTag(textStyles?.tag, moduleAnims)} />
        <Text
          text={data?.headingTitle?.heading}
          htag={data?.headingTitle?.htag}
          {...accordionHeading(textStyles?.headingTitle, moduleAnims)}
        />
        <Accordion
          // @ts-ignore
          data={data.accordionElements}
          icon={accordionIcon}
          allowedMultipleOpen={data?.allowedMultipleOpen}
          textStyles={textStyles}
          childAnims={moduleAnims}
        />
      </Stack>
    </ModuleBase>
  );
};

export default AccordionModule;
