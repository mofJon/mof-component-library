import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../../components";
import Header from "./";
import data from "./__mockData__.json";
// @ts-ignore
import Arrow from "../../assets/icons/chevron.svg";

const IconHolder = (
  <Box variant="block">
    <Arrow />
  </Box>
);

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderWithNav: Story = {
  args: {
    data,
    persistOn: "hover",
    // direction: "row",
    itemIcons: {
      iconPost: IconHolder,
    },
  },
};
