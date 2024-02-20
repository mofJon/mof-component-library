import { BoxProps, ContentBlockMotionTypes } from "../../components";

export interface HeadingVerticallyStackedModuleProps extends BoxProps {
  data: any;
  moduleAnims?: {
    module: Record<string, any>;
    content: ContentBlockMotionTypes;
  };
}
