import { ContentBlockMotionTypes } from "../../components";

export interface ArticleHeroModuleProps {
  data: any;
  moduleAnims?: {
    module: Record<string, any>;
    card: ContentBlockMotionTypes;
  };
  imageSizes?: string;
  variant?: string;
}
