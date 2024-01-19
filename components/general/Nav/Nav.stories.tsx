import type { Meta, StoryObj } from "@storybook/react";
import { Box, Nav } from "@/components";
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
  component: Nav as any,
  tags: ["autodocs"],
  parameters: {
    mode: "dark",
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {
    direction: {
      options: ["row", "column"],
      control: {
        type: "select",
      },
    },
    persistOn: {
      options: ["all", "hover", "click"],
      control: {
        type: "select",
      },
    },
    attach: {
      options: ["bottom", "right", null],
      control: {
        type: "select",
      },
    },
  },
  args: {
    direction: "row",
  },
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const HorizontalDropdownNav: Story = {
  args: {
    data,
    persistOn: "hover",
    direction: "row",
    itemIcons: {
      iconPost: IconHolder,
    },
  },
};

export const HorizontalMegaNavWithColumns: Story = {
  args: {
    data,
    persistOn: "hover",
    direction: "row",
    attach: "bottom",
    itemsPerColumn: 4,
    itemIcons: {
      iconPost: IconHolder,
    },
  },
};

export const AccordionNav: Story = {
  args: {
    data,
    persistOn: "click",
    direction: "column",
    itemIcons: {
      iconPost: IconHolder,
    },
    className: "w-[30rem]",
  },
};

export const FlyoutNav: Story = {
  args: {
    data,
    persistOn: "hover",
    direction: "column",
    attach: "right",
    itemIcons: {
      iconPost: IconHolder,
    },
    className: "w-[30rem]",
  },
};
