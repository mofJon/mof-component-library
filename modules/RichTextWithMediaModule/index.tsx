import { FC } from "react";
import { Media, ModuleBase, Stack, Text } from "../../components";
import { RichTextWithMediaModuleProps } from "./RichTextWithMediaModule.types";
import {
  richTextWithMedia,
  richTextContent,
} from "./RichTextWithMediaModule.styles";

const RichTextWithMediaModule: FC<RichTextWithMediaModuleProps> = ({
  data,
  ...props
}) => {
  return (
    <ModuleBase data={data} {...richTextWithMedia(props.className)} {...props}>
      <Stack>
        <Media responsive data={data.image} />
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

export default RichTextWithMediaModule;