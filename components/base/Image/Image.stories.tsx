import { useRef, useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Image, Stack, Text } from "@/components";
import { Provider } from "react-redux";
import ResponsiveImage from "@/existing/components/general/ResponsiveImage";
import { wrapper } from "@/existing/store";

const imageUrlWithQuery =
  "https://media.idorchester.com/api/v1/media/ox4khfi1/le-meurice-facade-5.jpg?width=696&height=464&format=webp";
const imageUrlWithoutQuery =
  "https://media.idorchester.com/api/v1/media/ox4khfi1/le-meurice-facade-5.jpg";

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
    blurDataURL: `${imageUrlWithoutQuery}?width=80&height=60`,
    placeholder: "blur",
  },
};

export const ResponsiveFallback: Story = {
  decorators: [
    (Story) => {
      const { store } = wrapper.useWrappedStore({});
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
            <Story ref={responsiveImageRef} />
          </Box>
          <Text text={imageSrc} textStyle="copy" />
        </Stack>
      );
    },
  ],
  args: {
    src: imageUrlWithoutQuery,
  },
};

export const ComparisonBetweenImageComponents: Story = {
  parameters: {
    layout: "padded",
  },
  args: {
    src: imageUrlWithoutQuery,
    sizes: "(min-width: 808px) 50vw, 100vw",
  },
  decorators: [
    (Story) => {
      const { store } = wrapper.useWrappedStore({});

      return (
        <Provider store={store}>
          <Stack direction="column" gap={5} className="mb-10">
            <Stack direction="column" className="w-full max-w-[1000px]">
              <Text text="Existing" textStyle="h6" />
              <ResponsiveImage
                image={{ imageUrl: `${imageUrlWithoutQuery}?version=e` }}
                widths={{ xs: 327, md: 688, lg: 936 }}
                heights={{ xs: 218, md: 439, lg: 599 }}
                cdnProps={{}}
                imgProps={{}}
                className="w-full h-auto"
              />
            </Stack>
            <Stack
              direction="column"
              className="w-full max-w-[1000px] h-[70vw]"
            >
              <Text text="Proposed" textStyle="h6" />
              <Story />
            </Stack>
          </Stack>
        </Provider>
      );
    },
  ],
};

export const Full: Story = {
  args: {
    src: imageUrlWithQuery,
    priority: true,
    responsive: true,
  },
};
