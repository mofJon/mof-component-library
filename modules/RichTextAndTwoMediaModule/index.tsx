import { FC } from "react";
import { Media, ModuleBase, Card } from "../../components";
import { RichTextAndTwoMediaModuleProps } from "./RichTextAndTwoMediaModule.types";
import { richTextWithMedia } from "./RichTextAndTwoMediaModule.styles";

const RichTextAndTwoMediaModule: FC<RichTextAndTwoMediaModuleProps> = ({
  data,
  imageSizes,
  moduleAnims,
  ...props
}) => {
  return (
    <ModuleBase
      data={data}
      {...richTextWithMedia(props)}
      {...props}
      {...moduleAnims?.module}
    >
      <Card
        variant="richTextAndTwoMedia"
        data={data}
        childAnims={moduleAnims?.card}
      />
      <Media
        responsive
        data={data?.smallImage || data?.image}
        {...imageSizes}
        {...moduleAnims?.media}
      />
    </ModuleBase>
  );
};

export default RichTextAndTwoMediaModule;
