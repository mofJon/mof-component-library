import { FC } from "react";
import { Card, ModuleBase } from "../../components";
import { RichTextModuleProps } from "./RichTextModule.types";
import { richText } from "./RichTextModule.styles";

const RichTextModule: FC<RichTextModuleProps> = ({
  data,
  moduleAnims,
  imageSizes,
  ...props
}) => {
  return (
    <ModuleBase {...richText(props)} data={data} {...moduleAnims?.module}>
      <Card
        data={data}
        variant="richText"
        childAnims={moduleAnims?.card}
        {...imageSizes}
      />
    </ModuleBase>
  );
};

export default RichTextModule;
