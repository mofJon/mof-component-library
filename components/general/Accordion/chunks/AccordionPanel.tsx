import { FC } from "react";
import { Box, Text } from "../../../../components";
import { accordionItemPanel } from "../Accordion.styles";

const AccordionPanel: FC = ({
  contentAnim,
  data,
  panelAnim,
  accordionItemCopy,
  index,
}: any) => {
  return (
    <Box key={`accordionPanel${index}`} {...accordionItemPanel} {...panelAnim}>
      <Text
        key={`accordionContent${index}`}
        text={data}
        {...accordionItemCopy}
        {...contentAnim}
      />
    </Box>
  );
};

export default AccordionPanel;
