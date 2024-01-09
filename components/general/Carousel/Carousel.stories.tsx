import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "@components";
import mockImg1 from "@assets/images/mockImage1.jpg";
import mockImg2 from "@assets/images/mockImage2.jpg";
import mockImg3 from "@assets/images/mockImage3.jpg";
import Arrow from "@assets/icons/chevron.svg";

const items: any = [
  {
    media: mockImg1,
    key: "item1",
  },
  {
    media: mockImg2,
    key: "item2",
  },
  {
    media: mockImg3,
    key: "item3",
  },
];
const meta: Meta<typeof Carousel> = {
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
    variant: {
      options: ["primary", "focus"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const DefaultCarousel: Story = {
  args: {
    items,
    controls: {
      show: true,
      svg: Arrow,
    },
    showPagination: true,
    crop: true,
    gap: 0,
  },
};

export const UncroppedCarousel: Story = {
  args: {
    items,
    controls: {
      show: true,
      svg: Arrow,
    },
    showPagination: true,
    crop: false,
    gap: 100,
  },
};

export const FocusCarousel: Story = {
  args: {
    items,
    controls: {
      show: true,
      svg: Arrow,
    },
    showPagination: true,
    crop: false,
    gap: 0,
    variant: "focus",
  },
};
