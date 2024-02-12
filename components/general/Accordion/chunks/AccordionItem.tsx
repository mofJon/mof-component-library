import { FC } from "react";
import { Box, Stack, Text } from "../../../../components";
import { AccordionPanel } from "./";
import {
  accordionItemButton,
  accordionClose,
  accordionItem,
} from "../Accordion.styles";

const AccordionItem: FC<any> = ({
  data,
  accordionIcon = null,
  accordionItemTitle,
  accordionItemCopy,
  childAnims,
  index = 0,
  togglePanel,
  isActive,
}) => {
  return (
    <Stack
      key={`accordion-item-${index}`}
      direction="column"
      {...accordionItem(isActive)}
      initial="inactive"
      animate={isActive ? "active" : "inactive"}
    >
      <Stack
        direction="row"
        onClick={() => togglePanel(index)}
        {...accordionItemButton}
      >
        <Box {...accordionClose} {...childAnims?.close}>
          {accordionIcon}
        </Box>
        <Text text={data.title} {...accordionItemTitle} />
      </Stack>
      <AccordionPanel
        index={index}
        data={data.text}
        panelAnim={childAnims?.panel || {}}
        contentAnim={childAnims?.content || {}}
        {...accordionItemCopy}
        isActive={isActive}
      />
    </Stack>
  );
};

export default AccordionItem;
