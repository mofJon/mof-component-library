import { FC } from "react";
import { Card, ModuleBase } from "../../components";
import { RichTextAndTwoPortraitStackedModuleProps } from "./RichTextAndTwoPortraitStackedModule.types";
import { richTextAndTwoMedia } from "./RichTextAndTwoPortraitStackedModule.styles";
import { Media } from "../../components";

const RichTextAndTwoPortraitStackedModule: FC<
  RichTextAndTwoPortraitStackedModuleProps
> = ({
  data,
  childAnims,
  mediaAnims,
  imageSizes,
  smallImageSizes,
  ...props
}) => {
  return (
    <ModuleBase
      {...richTextAndTwoMedia(data.mediaAlignment, props)}
      data={data}
      {...props}
    >
      <Card
        data={data}
        contentVariant="richTextAndTwoMedia"
        {...childAnims}
        {...imageSizes}
      />
      <Media
        data={data.smallMedia}
        orientation={data.mediaOrientation}
        align={data.mediaAlignment}
        {...mediaAnims}
        imageSizes={smallImageSizes}
      />
    </ModuleBase>
  );
};

export default RichTextAndTwoPortraitStackedModule;
