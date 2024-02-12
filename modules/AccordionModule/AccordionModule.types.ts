import { ReactNode } from "react";
import { StackProps } from "../../components";

export interface AccordionModuleProps extends StackProps {
  data: any;
  accordionIcon?: ReactNode;
  childAnims?: any;
}
