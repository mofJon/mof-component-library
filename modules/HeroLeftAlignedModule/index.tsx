import { FC } from "react";
import { Card, ModuleBase } from "../../components";
import { HeroLeftAlignedModuleProps } from "./HeroLeftAlignedModule.types";
import { HeroLeftAligned } from "./HeroLeftAlignedModule.styles";

const HeroLeftAlignedModule: FC<HeroLeftAlignedModuleProps> = ({
  data,
  ...props
}) => {
  return (
    <ModuleBase {...HeroLeftAligned(props.className)} data={data} {...props}>
      <Card
        variant="overlay"
        data={data}
        size="full"
        contentVariant="HeroLeftAligned"
      />
    </ModuleBase>
  );
};

export default HeroLeftAlignedModule;
