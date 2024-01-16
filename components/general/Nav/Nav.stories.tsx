import type { Meta, StoryObj } from "@storybook/react";
import { Box, Nav } from "@/components";
import NavItem from "./chunks/NavItem";
import data from './__mock__.json';
// @ts-ignore
import Arrow from '@/assets/icons/chevron.svg';

const buttonHover = {
  variants: {
    inactive: {
      x: 0
    },
    hovered: {
      x: 10
    }
  }
}

const IconHolder = (<Box {...buttonHover}>
  <Arrow />
</Box>);

const meta: Meta<typeof Nav> = {
  component: Nav,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    mode: "dark",
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Nav>;
type ItemStory = StoryObj<typeof NavItem>;

export const HorizontalNav: Story = {
  args: {
    data,
    isActive: true,
    itemIcons: {
      iconPost: IconHolder
    }
  },
};



export const NavigationItem = () => {

  return (
    <NavItem
      data={data[0]}
      iconPost={IconHolder}
      variant="nav"
    />
  );
};

