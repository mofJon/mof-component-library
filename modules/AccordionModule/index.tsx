import { FC } from "react";
import { Accordion, ModuleBase, Stack, Text } from "../../components";
import {
  accordionHeading,
  accordionItemTitle,
  accordionItemCopy,
  accordionTag,
  accordionWrapper,
} from "./AccordionModule.styles";
import { AccordionModuleProps } from "./AccordionModule.types";

const AccordionModule: FC<AccordionModuleProps> = ({
  data,
  accordionIcon,
  childAnims = {},
  ...props
}) => {
  return (
    <ModuleBase data={data} {...props}>
      <Stack {...accordionWrapper(childAnims, props)}>
        <Text text={data.tag} {...accordionTag(childAnims)} />
        <Text
          text={data.headingTitle.heading}
          htag={data.headingTitle.htag}
          {...accordionHeading(childAnims)}
        />
        <Accordion
          // @ts-ignore
          data={data.accordionElements}
          icon={accordionIcon}
          allowedMultipleOpen={data.allowedMultipleOpen}
          accordionItemTitle={accordionItemTitle}
          accordionItemCopy={accordionItemCopy}
          childAnims={childAnims}
        />
      </Stack>
    </ModuleBase>
  );
};

export default AccordionModule;
