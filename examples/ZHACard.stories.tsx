import type { Meta, StoryObj } from "@storybook/react";
import { Box, Card } from "../components";
import { cardChildAnims, zhaCardAnim } from "./animations";

const data: any = {
  image: {
    imageUrl:
      "https://zhweb-qa-f-app.azurewebsites.net/media/wotgyell/adrian-cuj-o_9ymcy0bag-unsplash.jpg",
    alt: "zaha",
  },
  preHeading: "Transport",
  headingTitle: "BMW Central Building",
  infoTags: ["Leipzig, Germany", "2001-2005", "BMW AG"],
  description:
    "Description goes here lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. Morbi cursus mauris id bibendum commodo.",
  primaryCta: "View article",
};

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {
    size: {
      option: ["sm", "md", "lg"],
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    size: "full",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const ZHACard: Story = {
  decorators: [
    (Story) => {
      return (
        <Box className="w-screen h-screen" style={{ padding: "4rem" }}>
          <Story />
        </Box>
      );
    },
  ],
  args: {
    data,
    size: "full",
    variant: "overlay",
    className: "custom-zha",
    childAnims: cardChildAnims,
    ...zhaCardAnim,
  },
};
