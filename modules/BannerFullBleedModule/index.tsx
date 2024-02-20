import { FC } from "react";
import { Card, ModuleBase } from "../../components";
import { BannerFullBleedModuleProps } from "./BannerFullBleedModule.types";
import { BannerFullBleedMedia } from "./BannerFullBleedModule.styles";

const BannerFullBleedModule: FC<BannerFullBleedModuleProps> = ({
  data,
  backgroundImageSizes,
  moduleAnims,
  cardVariant = "bannerFullBleed",
  ...props
}) => {
  return (
    <ModuleBase {...BannerFullBleedMedia(props)} data={data} {...props}>
      <Card
        variant={cardVariant}
        data={data}
        size="full"
        {...moduleAnims?.card}
        {...backgroundImageSizes}
      />
    </ModuleBase>
  );
};

export default BannerFullBleedModule;
