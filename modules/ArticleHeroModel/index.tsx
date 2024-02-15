import { FC } from "react";
import { Card, ModuleBase } from "../../components";
import { ArticleHeroModelProps } from "./ArticleHeroModel.types";
import { RichTextAndOneMedia } from "./ArticleHeroModel.styles";

const ArticleHeroModel: FC<ArticleHeroModelProps> = ({
  data,
  childAnims,
  backgroundImageSizes,
  ...props
}) => {
  return (
    <ModuleBase
      {...RichTextAndOneMedia(data.mediaAlignment, props)}
      data={data}
      {...props}
    >
      <Card
        data={data}
        variant="articleHeroModel"
        {...backgroundImageSizes}
        {...childAnims}
      />
    </ModuleBase>
  );
};

export default ArticleHeroModel;
