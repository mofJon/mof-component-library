import type { Meta, StoryObj } from "@storybook/react";
import CardListingGridModule from "./";

import data from "./__mockdata__.json";

const meta: Meta<typeof CardListingGridModule> = {
  component: CardListingGridModule,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardListingGridModule>;

export const CardCarouselFocus: Story = {
  args: {
    data,
  },
};
