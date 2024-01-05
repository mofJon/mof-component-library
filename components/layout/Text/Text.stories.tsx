import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@components";

const meta: Meta<typeof Text> = {
  component: Text,
  argTypes: {
    intent: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Heading1: Story = {
  args: {
    textStyle: "h1",
    text: "Heading 1",
  },
};

export const Heading2: Story = {
  args: {
    textStyle: "h2",
    text: "Heading 2",
  },
};

export const Heading3: Story = {
  args: {
    textStyle: "h3",
    text: "Heading 3",
  },
};

export const Heading4: Story = {
  args: {
    textStyle: "h4",
    text: "Heading 4",
  },
};

export const Heading5: Story = {
  args: {
    textStyle: "h5",
    text: "Heading 5",
  },
};

export const Heading6: Story = {
  args: {
    textStyle: "h6",
    text: "Heading 6",
  },
};

export const Copy: Story = {
  args: {
    textStyle: "copy",
    text: "Lorem ipsum lamat salmat, etc...",
  },
};
