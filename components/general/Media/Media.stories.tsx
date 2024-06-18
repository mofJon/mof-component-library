import type { Meta, StoryObj } from "@storybook/react";
import { Box, Media } from "../../../components";

const videoProps = {
  coverImage: {
    imageUrl: "https://qa.zaha-hadid.com/media/nyvcuels/image-17581.png",
    mediaId: 1600,
    caption: "",
    imageAlt: "",
    imageCredit: "",
    photographer: "",
    isSvg: false,
    isVideo: false,
  },
  videoFromGallery: null,
  vimeoId: "935427678",
  youtubeId: "",
  autoPlay: true,
  loop: true,
  allowFullScreen: false,
};

const videoPropsFullscreen = {
  ...videoProps,
  allowFullScreen: true,
  allowControls: true,
};

/**  This is the media component */
const meta: Meta<typeof Media> = {
  component: Media,
  // tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      toc: true,
      controls: { exclude: ["style"] },
      story: {
        iframeHeight: 400,
      },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Media>;

export const MediaImage: Story = {
  decorators: [
    (Story) => {
      return (
        <Box className="w-[calc(100vw/2)] h-[calc(100vh/2)] bg-gray-500 [&>*:first-child]:w-full relative">
          <Story />
        </Box>
      );
    },
  ],
  args: {
    data: videoProps?.coverImage,
    responsive: true,
    imageSizes: "50vw",
  },
};

export const MediaVideoInline: Story = {
  decorators: [
    (Story) => {
      return (
        <Box className="w-[calc(100vw/2)] h-[calc(100vh/2)] bg-gray-500 [&>*:first-child]:w-full relative">
          <Story />
        </Box>
      );
    },
  ],
  args: {
    data: videoProps,
  },
};

export const MediaVideoFullscreen: Story = {
  decorators: [
    (Story) => {
      return (
        <Box className="w-[calc(100vw/2)] h-[calc(100vh/2)] bg-gray-500 [&>*:first-child]:w-full relative">
          <Story />
        </Box>
      );
    },
  ],
  args: {
    data: videoPropsFullscreen,
  },
};
