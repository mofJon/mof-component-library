import type { Meta, StoryObj } from "@storybook/react";
import Component from ".";
import data from "./__mockData__.json";

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const RichTextAndOneMediaModule: Story = {
  args: {
    data,
  },
};
