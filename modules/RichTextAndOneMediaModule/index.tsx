import { FC } from "react";
import { Card, ModuleBase } from "../../components";
import { RichTextAndOneMediaModuleProps } from "./RichTextAndOneMediaModule.types";
import { RichTextAndOneMedia } from "./RichTextAndOneMediaModule.styles";

const RichTextAndOneMediaModule: FC<RichTextAndOneMediaModuleProps> = ({
  data,
  moduleAnims,
  imageSizes,
  imageQuality,
  ...props
}) => {
  return (
    <ModuleBase
      {...RichTextAndOneMedia(data, props)}
      data={data}
      {...moduleAnims?.module}
    >
      <Card
        data={data}
        variant="richTextAndOneMedia"
        childAnims={moduleAnims}
        imageSizes={imageSizes}
        imageQuality={imageQuality}
      />
    </ModuleBase>
  );
};

export default RichTextAndOneMediaModule;
