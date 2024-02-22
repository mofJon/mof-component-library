import { FC } from "react";
import { Card, ModuleBase } from "../../components";
import { RichTextAndOneMediaModuleProps } from "./RichTextAndOneMediaModule.types";
import { RichTextAndOneMedia } from "./RichTextAndOneMediaModule.styles";

const RichTextAndOneMediaModule: FC<RichTextAndOneMediaModuleProps> = ({
  data,
  moduleAnims,
  imageSizes,
  ...props
}) => {
  return (
    <ModuleBase
      {...RichTextAndOneMedia(data, props.className)}
      data={data}
      {...moduleAnims?.module}
    >
      <Card
        data={data}
        contentVariant="richTextAndOneMedia"
        childAnims={moduleAnims}
        {...imageSizes}
      />
    </ModuleBase>
  );
};

export default RichTextAndOneMediaModule;
