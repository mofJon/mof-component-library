import { FC } from "react";
import { Card, ModuleBase } from "../../components";
import { ArticleHeroModuleProps } from "./ArticleHeroModule.types";
import { articleHero } from "./ArticleHeroModule.styles";

const ArticleHeroModule: FC<ArticleHeroModuleProps> = ({
  data,
  moduleAnims,
  imageSizes,
  variant = "articleHero",
  children,
  ...props
}) => {
  const newData = Object.assign(data, {
    headingTitle: data.heading || data.headingTitle,
    primaryCta: data.cta || data.primaryCta,
  });

  return (
    <ModuleBase
      {...articleHero(props)}
      data={newData}
      {...props}
      {...moduleAnims?.module}
    >
      <Card
        data={data}
        variant={variant}
        backgroundImageSizes={imageSizes}
        childAnims={moduleAnims?.card}
        children={children}
      />
    </ModuleBase>
  );
};

export default ArticleHeroModule;
