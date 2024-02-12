import { FC, useEffect, useState } from "react";
import { AccordionItem } from "./chunks";
import { accordionWrapper } from "./Accordion.styles";
import { Stack } from "../../";

const Accordion: FC = ({
  data,
  icon,
  allowedMultipleOpen = true,
  accordionItemTitle,
  accordionItemCopy,
  childAnims,
}: any) => {
  const [accordionState, setAccordionState] = useState<boolean[]>([]);

  useEffect(() => {
    const newState: boolean[] = [];
    for (let i = 0; i < data.length; i++) {
      newState.push(false);
    }

    setAccordionState(newState);
  }, []);

  const togglePanel = (index: number) => {
    const newState = [...accordionState];
    for (let i = 0; i < newState.length; i++) {
      if (i !== index && !allowedMultipleOpen) {
        newState[i] = false;
      }
    }
    newState[index] = !accordionState[index];

    setAccordionState(newState);
  };

  if (accordionState.length <= 0) return null;

  const renderItems = data.map((val: any, i: number) => {
    return (
      <AccordionItem
        key={`accordionItem-${i}`}
        data={val}
        index={i}
        accordionIcon={icon}
        accordionItemTitle={accordionItemTitle}
        accordionItemCopy={accordionItemCopy}
        childAnims={childAnims}
        togglePanel={togglePanel}
        isActive={accordionState[i]}
      />
    );
  });

  return <Stack {...accordionWrapper}>{renderItems}</Stack>;
};

export default Accordion;
