import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@/components";
import { CardProps } from "./Card.types";
import mockImg from "@/assets/images/mockImage1.webp";
import zha from "@/assets/images/zhaCarousel1.jpg";

const data: CardProps["data"] = {
  media: mockImg.src,
  preHeading: "Editorial",
  headingTitle: "Blog Article Title",
  subHeading: "07.07.2023 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 15 minutes",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. ",
  primaryCta: "View article",
  variant: "primary",
};

const zhaData: CardProps["data"] = {
  media: zha.src,
  preHeading: "Transport",
  headingTitle: "BMW Central Building",
  info: "<span>Leipzig, Germany</span><span>2001-2005</span><span>BMW AG</span>",
  description:
    "Description goes here lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. Morbi cursus mauris id bibendum commodo.",
  primaryCta: "View article",
  variant: "primary",
};

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    mode: "dark",
  },
  argTypes: {
    size: {
      option: ["sm", "md", "lg"],
    },
    variant: {
      options: ["primary", "overlay"],
    },
  },
  args: {
    size: "lg",
    variant: "primary",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const CardGeneric: Story = {
  args: {
    data,
  },
};
