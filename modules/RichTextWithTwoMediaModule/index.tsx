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
  moduleAnims,
  textStyles,
  ...props
}) => {
  return (
    <ModuleBase data={data} {...richTextWithMedia(props)} {...props}>
      <Stack {...moduleAnims?.controller}>
        <Media
          responsive
          data={data.image}
          {...imageSizes}
          {...moduleAnims?.media}
        />
        <Stack {...moduleAnims?.contentWrapper}>
          <Text
            text={data.headingTitle.heading}
            textStyle={textStyles?.heading || "h2"}
            htag={data.headingTitle.htag}
            {...moduleAnims?.heading}
          />
          <Text
            text={data.content}
            textStyle={textStyles?.content || "p"}
            {...richTextContent}
            {...moduleAnims?.content}
          />
        </Stack>
      </Stack>
    </ModuleBase>
  );
};

export default RichTextWithTwoMediaModule;
