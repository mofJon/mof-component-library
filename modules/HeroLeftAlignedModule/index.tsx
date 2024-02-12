import { FC } from "react";
import { Card, ModuleBase } from "../../components";
import { HeroLeftAlignedModuleProps } from "./HeroLeftAlignedModule.types";
import { HeroLeftAligned } from "./HeroLeftAlignedModule.styles";

const HeroLeftAlignedModule: FC<HeroLeftAlignedModuleProps> = ({
  data,
  childAnims,
  backgroundImageSizes,
  ...props
}) => {
  return (
    <ModuleBase {...HeroLeftAligned(props)} data={data} {...props}>
      <Card
        variant="overlay"
        data={data}
        size="full"
        contentVariant="HeroLeftAligned"
        {...backgroundImageSizes}
        {...childAnims}
      />
    </ModuleBase>
  );
};

export default HeroLeftAlignedModule;
