import type { Meta, StoryObj } from "@storybook/react";
import { Card, Image } from "@components";
import { CardProps } from "./Card.types";
import mockImg from "@assets/images/mockImage1.webp";

const media = <Image src={mockImg.src} alt="mock image" className="w-full" />;

const data: CardProps["data"] = {
  media,
  preHeading: "Editorial",
  headingTitle: "Blog Article Title",
  subHeading: "07.07.2023 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 15 minutes",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. ",
  primaryCta: "View article",
  variant: "generic",
};

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    mode: "dark",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const CardGeneric: Story = {
  args: {
    data,
  },
};
