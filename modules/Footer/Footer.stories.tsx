import type { Meta, StoryObj } from "@storybook/react";
import Facebook from "@/assets/icons/facebook.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Twitter from "@/assets/icons/twitter.svg";
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

export const Footer: Story = {
  args: {
    data,
    socialIcons: {
      instagram: <Instagram />,
      facebook: <Facebook />,
      x: <Twitter />,
    },
  },
};
