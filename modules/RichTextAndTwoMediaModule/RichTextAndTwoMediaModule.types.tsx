import { ContentBlockMotionTypes } from "../../components";

export interface RichTextAndTwoMediaModuleProps {
  data: any;
  imageSizes?: any;
  moduleAnims?: {
    module?: any;
    card?: ContentBlockMotionTypes;
    media?: any;
  };
}
