import { ContentBlockMotionTypes } from "../../components";

export interface ArticleHeroModelProps {
  data: any;
  moduleAnims?: {
    module: Record<string, any>;
    card: ContentBlockMotionTypes;
  };
  imageSizes?: string;
}
