import { FC } from "react";
import { Card, ModuleBase } from "../../components";
import { HeroLeftAlignedModuleProps } from "./HeroLeftAlignedModule.types";
import { HeroLeftAligned } from "./HeroLeftAlignedModule.styles";

const HeroLeftAlignedModule: FC<HeroLeftAlignedModuleProps> = ({
  data,
  moduleAnims,
  backgroundImageSizes,
  ...props
}) => {
  return (
    <ModuleBase
      {...HeroLeftAligned(props)}
      data={data}
      {...moduleAnims?.module}
      {...props}
    >
      <Card
        data={data}
        size="full"
        variant="heroLeftAligned"
        {...backgroundImageSizes}
        childAnims={moduleAnims}
      />
    </ModuleBase>
  );
};

export default HeroLeftAlignedModule;
