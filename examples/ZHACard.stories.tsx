import { FC } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@/components";
import zha1 from "@/assets/images/zhaCarousel1.jpg";
import { childAnims, zhaCardAnim } from "./animations";

const data = {
  media: zha1.src,
  preHeading: "Transport",
  headingTitle: "BMW Central Building",
  info: "<span>Leipzig, Germany</span><span>2001-2005</span><span>BMW AG</span>",
  description:
    "Description goes here lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. Morbi cursus mauris id bibendum commodo.",
  primaryCta: "View article",
  variant: "overlay",
};

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    mode: "dark",
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
    variant: "overlay",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const ZHACard: FC = () => {
  // only relevant for Storybook
  styleViewport();

  const args: any = {
    data,
    size: "full",
    variant: "overlay",
    className: "custom-zha",
  };

  return <Card {...args} {...zhaCardAnim} childAnims={childAnims} />;
};

const styleViewport = () => {
  // @ts-ignore
  const viewport = document && document.getElementById("storybook-root");

  if (viewport) {
    viewport.style.height = "100vh";
    viewport.style.padding = "5rem";
    viewport.style.background = "black";
  }
};
