import { FC } from "react";
import { Card, ModuleBase } from "../../components";
import { ArticleHeroModelProps } from "./ArticleHeroModel.types";
import { RichTextAndOneMedia } from "./ArticleHeroModel.styles";

const ArticleHeroModel: FC<ArticleHeroModelProps> = ({
  data,
  moduleAnims,
  imageSizes,
  ...props
}) => {
  return (
    <ModuleBase
      {...RichTextAndOneMedia(data.mediaAlignment, props)}
      data={data}
      {...props}
      {...moduleAnims?.module}
    >
      <Card
        data={data}
        variant="articleHero"
        backgroundImageSizes={imageSizes}
        childAnims={moduleAnims?.card}
      />
    </ModuleBase>
  );
};

export default ArticleHeroModel;
