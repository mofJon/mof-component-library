import { FC } from "react";
import { Media, ModuleBase, Card } from "../../components";
import { RichTextAndTwoMediaModuleProps } from "./RichTextAndTwoMediaModule.types";
import { richTextWithMedia } from "./RichTextAndTwoMediaModule.styles";

const RichTextAndTwoMediaModule: FC<RichTextAndTwoMediaModuleProps> = ({
  data,
  imageSizes,
  moduleAnims,
  variant = "richTextAndTwoMedia",
  ...props
}) => {
  const newData = Object.assign(data, {
    image: data.smallMedia,
    backgroundImage: data.largeMedia,
  });

  return (
    <ModuleBase
      data={newData}
      {...richTextWithMedia(props)}
      {...props}
      {...moduleAnims?.module}
    >
      <Card variant={variant} data={data} childAnims={moduleAnims?.card} />
    </ModuleBase>
  );
};

export default RichTextAndTwoMediaModule;
