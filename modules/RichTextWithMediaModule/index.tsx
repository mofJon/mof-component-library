import { FC } from "react";
import { Media, ModuleBase, Stack, Text } from "../../components";
import { RichTextWithMediaModuleProps } from "./RichTextWithMediaModule.types";
import {
  richTextWithMedia,
  richTextContent,
} from "./RichTextWithMediaModule.styles";

const RichTextWithMediaModule: FC<RichTextWithMediaModuleProps> = ({
  data,
  imageSizes,
  moduleAnims,
  textStyles,
  ...props
}) => {
  return (
    <ModuleBase
      data={data}
      {...richTextWithMedia(props)}
      {...moduleAnims?.module}
    >
      <Stack {...moduleAnims?.content}>
        <Media
          responsive
          data={data.image}
          {...imageSizes}
          {...moduleAnims?.media}
        />
        <Stack {...moduleAnims?.textWrapper}>
          <Text
            text={data.headingTitle.heading}
            textStyle={textStyles?.heading || "h2"}
            htag={data.headingTitle.htag}
            {...moduleAnims?.heading}
          />
          <Text
            text={data.content}
            textStyle={textStyles?.heading || "p"}
            {...richTextContent}
            {...moduleAnims?.content}
          />
        </Stack>
      </Stack>
    </ModuleBase>
  );
};

export default RichTextWithMediaModule;
