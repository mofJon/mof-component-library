import { FC } from "react";
import { Card, ModuleBase } from "../../components";
import { BannerFullBleedModuleProps } from "./BannerFullBleedModule.types";
import { BannerFullBleedMedia } from "./BannerFullBleedModule.styles";

const BannerFullBleedModule: FC<BannerFullBleedModuleProps> = ({
  data,
  backgroundImageSizes,
  childAnims,
  ...props
}) => {
  return (
    <ModuleBase
      {...BannerFullBleedMedia(props.className)}
      data={data}
      {...props}
    >
      <Card
        variant="overlay"
        data={data}
        size="full"
        contentVariant="bannerFullBleed"
        {...childAnims}
        {...backgroundImageSizes}
      />
    </ModuleBase>
  );
};

export default BannerFullBleedModule;
