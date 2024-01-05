import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@components";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    intent: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    text: "Button",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
  },
};
