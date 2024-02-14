import { FC } from "react";
import { Card, ModuleBase } from "../../components";
import { RichTextAndTwoMediaStackedModuleProps } from "./RichTextAndTwoMediaStackedModule.types";
import { richTextAndTwoMedia } from "./RichTextAndTwoMediaStackedModule.styles";
import { Media } from "../../components";

const RichTextAndTwoMediaStackedModule: FC<
  RichTextAndTwoMediaStackedModuleProps
> = ({ data, moduleAnims, imageSizes, smallImageSizes, ...props }) => {
  return (
    <ModuleBase
      {...richTextAndTwoMedia(data.mediaAlignment, props)}
      data={data}
      {...props}
    >
      <Card
        data={data}
        variant="richTextAndTwoMedia"
        childAnims={moduleAnims?.card}
        {...imageSizes}
      />
      <Media
        data={data.smallMedia}
        orientation={data.mediaOrientation}
        align={data.mediaAlignment}
        {...moduleAnims?.media}
        imageSizes={smallImageSizes}
      />
    </ModuleBase>
  );
};

export default RichTextAndTwoMediaStackedModule;