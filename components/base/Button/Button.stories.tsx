import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "@/components";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    iconPre: {
      table: {
        display: false,
      },
    },
    iconPost: {
      table: {
        display: false,
      },
    },
  },
  args: {
    size: "lg",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    text: "Primary Button",
    onClick: action("primary clicked"),
    style: {
      margin: "auto",
    },
  },
};

export const Secondary: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    variant: "secondary",
    text: "Secondary Button",
    onClick: action("secondary clicked"),
  },
};

export const PrimaryCircle: Story = {
  args: {
    variant: "primaryCircle",
    text: "Primary Circle Button",
    onClick: action("primary circle clicked"),
  },
};

export const SecondaryCircle: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    variant: "secondaryCircle",
    text: "Secondary Circle Button",
    onClick: action("secondary circle clicked"),
  },
};
