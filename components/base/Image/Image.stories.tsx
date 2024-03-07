import type { Meta, StoryObj } from "@storybook/react";
import { Box, Image, Stack, Text } from "../../../components";
import localImage from "../../../assets/images/zhaCarousel1.jpg";

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

export const ExplicitWidthAndHeight: Story = {
  args: {
    src: imageUrlWithoutQuery,
    width: 800,
    height: 600,
    priority: true,
    blurDataURL: `${imageUrlWithoutQuery}?width=80&height=60`,
    placeholder: "blur",
  },
};

export const FillContainer: Story = {
  decorators: [
    (Story) => {
      return (
        <Stack direction="column" gap={5}>
          <Text
            text="Responsive in container, set as relative. (400 x 400)"
            textStyle="h6"
          />
          <Box className="w-[400px] h-[400px] bg-gray-200 relative">
            <Story />
          </Box>
        </Stack>
      );
    },
  ],
  args: {
    src: imageUrlWithoutQuery,
    responsive: true,
  },
};

export const Responsive: Story = {
  args: {
    src: imageUrlWithQuery,
    priority: true,
    responsive: true,
  },
};

export const StaticallyImportedImage: Story = {
  args: {
    src: localImage.src,
    width: localImage.width,
    height: localImage.height,
    sizes: "(min-width: 808px) 50vw, 100vw",
  },
};
