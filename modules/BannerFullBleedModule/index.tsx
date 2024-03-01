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
    <ModuleBase
      {...BannerFullBleedMedia(props, data)}
      data={data}
      {...moduleAnims?.module}
    >
      <Card
        variant={cardVariant}
        data={data}
        size="full"
        childAnims={moduleAnims}
        {...backgroundImageSizes}
      />
    </ModuleBase>
  );
};

export default BannerFullBleedModule;
