import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@components";

const meta: Meta<typeof Box> = {
  component: Box,
  argTypes: {
    intent: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const PlainBox: Story = {
  args: {
    className: "rounded-3xl w-40 h-40 bg-blue-500",
  },
};

export const AnimatedBox: Story = {
  args: {
    className: "rounded-3xl w-40 h-40 bg-blue-500",
    // animation props
    initial: "inactive",
    animate: "active",
    variants: {
      inactive: {
        x: 0,
      },
      active: {
        x: 400,
        transition: {
          repeat: Infinity,
          repeatType: "mirror",
          type: "spring",
          damping: 20,
          stiffness: 400,
        },
      },
    },
  },
};
