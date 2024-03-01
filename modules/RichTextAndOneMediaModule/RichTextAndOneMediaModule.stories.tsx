import type { Meta, StoryObj } from "@storybook/react";
import Component from ".";
import data from "./__mockData__.json";
import dataYT from "./__mockDataYouTube__.json";
import dataSrc from "./__mockDataSrc__.json";

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

export const RichTextAndOneMediaVimeo: Story = {
  args: {
    data,
  },
};

export const RichTextAndOneMediaYoutube: Story = {
  args: {
    data: dataYT,
  },
};

export const RichTextAndOneMediaSrc: Story = {
  args: {
    data: dataSrc,
  },
};
