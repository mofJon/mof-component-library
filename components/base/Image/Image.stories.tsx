import { useRef, useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Image, Stack, Text } from "@/components";

const imageUrlWithQuery =
  "https://base.matterofform.com/media/1gzl5kwa/420d532b02bcbb6b7b40401e9c74cefa.jpg?width=696&height=464&format=webp";
const imageUrlWithoutQuery =
  "https://base.matterofform.com/media/1gzl5kwa/420d532b02bcbb6b7b40401e9c74cefa.jpg";

const meta: Meta<typeof Image> = {
  component: Image,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Image>;

export const DimensionsFromQueryString: Story = {
  args: {
    src: imageUrlWithQuery,
    priority: true,
  },
};

export const DimensionsFromExplicitValues: Story = {
  args: {
    src: imageUrlWithoutQuery,
    width: 800,
    height: 600,
    priority: true,
    quality: 200,
  },
};

export const ResponsiveFallback = () => {
  const responsiveImageRef = useRef();
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (responsiveImageRef.current) {
      const imageEl: any = responsiveImageRef.current;
      setImageSrc(imageEl.src);
      console.log(responsiveImageRef, "responsive", imageEl.src);
    }
  }, [responsiveImageRef]);

  return (
    <Stack direction="column" gap={5}>
      <Text
        text="Image dimensions set by container.<br/>Here, 400 x 400"
        textStyle="h6"
      />
      <Box className="w-[400px] h-[400px] bg-gray-200">
        <Image responsive ref={responsiveImageRef} src={imageUrlWithoutQuery} />
      </Box>
      <Text text={imageSrc} textStyle="copy" />
    </Stack>
  );
};
