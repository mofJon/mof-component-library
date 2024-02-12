import { FC } from "react";
import { Card, ModuleBase } from "../../components";
import { RichTextAndOneMediaModuleProps } from "./RichTextAndOneMediaModule.types";
import { RichTextAndOneMedia } from "./RichTextAndOneMediaModule.styles";

const RichTextAndOneMediaModule: FC<RichTextAndOneMediaModuleProps> = ({
  data,
  childAnims,
  imageSizes,
  ...props
}) => {
  return (
    <ModuleBase
      {...RichTextAndOneMedia(data.mediaAlignment, props.className)}
      data={data}
      {...props}
    >
      <Card
        data={data}
        contentVariant="richTextAndOneMedia"
        {...childAnims}
        {...imageSizes}
      />
    </ModuleBase>
  );
};

export default RichTextAndOneMediaModule;
