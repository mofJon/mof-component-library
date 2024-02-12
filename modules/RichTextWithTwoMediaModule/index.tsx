import { FC } from "react";
import { Media, ModuleBase, Stack, Text } from "../../components";
import { RichTextWithTwoMediaModuleProps } from "./RichTextWithTwoMediaModule.types";
import {
  richTextWithMedia,
  richTextContent,
} from "./RichTextWithTwoMediaModule.styles";

const RichTextWithTwoMediaModule: FC<RichTextWithTwoMediaModuleProps> = ({
  data,
  imageSizes,
  ...props
}) => {
  return (
    <ModuleBase data={data} {...richTextWithMedia(props)} {...props}>
      <Stack>
        <Media responsive data={data.image} {...imageSizes} />
        <Stack>
          <Text
            text={data.headingTitle.heading}
            textStyle={data.headingTitle.htag}
          />
          <Text text={data.content} {...richTextContent} />
        </Stack>
      </Stack>
    </ModuleBase>
  );
};

export default RichTextWithTwoMediaModule;
