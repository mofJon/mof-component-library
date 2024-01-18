import type { Meta, StoryObj } from "@storybook/react";
import { Box, Nav } from "@/components";
import NavItem from "./chunks/NavItem";
import NavPanel from "./chunks/NavItem";
import data from "./__mock__.json";
// @ts-ignore
import Arrow from "@/assets/icons/chevron.svg";

const buttonHover = {
  variants: {
    inactive: {
      x: 0,
    },
    hovered: {
      x: 10,
    },
  },
};

const IconHolder = (
  <Box variant="block" {...buttonHover}>
    <Arrow />
  </Box>
);

const meta: Meta<typeof Nav> = {
  component: Nav,
  tags: ["autodocs"],
  parameters: {
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
    persistOn: "hover",
    direction: "row",
    itemIcons: {
      iconPost: IconHolder,
    },
  },
  argTypes: {
    direction: {
      options: ["row", "column"],
      control: {
        type: "select",
      },
    },
  },
};

export const HorizontalNavWidthPanelColumns: Story = {
  args: {
    data,
    isActive: true,
    persistOn: "hover",
    direction: "row",
    attach: "bottom",
    itemsPerColumn: 4,
    itemIcons: {
      iconPost: IconHolder,
    },
  },
  argTypes: {
    direction: {
      options: ["row", "column"],
      control: {
        type: "select",
      },
    },
  },
};

export const VerticalNav: Story = {
  args: {
    data,
    isActive: true,
    persistOn: "hover",
    direction: "column",
    itemIcons: {
      iconPost: IconHolder,
    },
  },
  argTypes: {
    direction: {
      options: ["row", "column"],
      control: {
        type: "select",
      },
    },
  },
};
