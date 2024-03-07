import { FC } from "react";
import { Card, ModuleBase } from "../../components";
import { RichTextAndTwoMediaStackedModuleProps } from "./RichTextAndTwoMediaStackedModule.types";
import { richTextAndTwoMedia } from "./RichTextAndTwoMediaStackedModule.styles";

const RichTextAndTwoMediaStackedModule: FC<
  RichTextAndTwoMediaStackedModuleProps
> = ({ data, moduleAnims, imageSizes, smallImageSizes, ...props }) => {
  return (
    <ModuleBase
      {...richTextAndTwoMedia(data, props)}
      data={data}
      {...moduleAnims?.module}
    >
      <Card
        data={data}
        variant="richTextAndTwoMediaStacked"
        childAnims={moduleAnims}
        {...imageSizes}
      />
    </ModuleBase>
  );
};

export default RichTextAndTwoMediaStackedModule;
