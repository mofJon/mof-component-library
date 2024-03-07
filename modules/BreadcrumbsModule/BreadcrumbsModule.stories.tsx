import type { Meta, StoryObj } from "@storybook/react";
import data from "./__mockdata__.json";

import Component from ".";

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const BreadcrumbsModule: Story = {
  args: {
    data,
  },
};
