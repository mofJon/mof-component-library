import type { Meta, StoryObj } from "@storybook/react";
import { Card, Carousel } from "@/components";
// @ts-ignore
import Arrow from "@/assets/icons/zhaArrow.svg";
import { cardChildAnims, zhaCardAnim } from "./animations";
import data from "./__mockdata__.json";

declare const window: {
  innerWidth: number;
  addEventListener: any;
  removeEventListener: any;
};

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {
    align: {
      table: {
        disable: true,
      },
    },
    size: {
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
    animationStyle: "default",
    variant: "primary",
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const items = data.map((val: any, i: number) => {
  return (
    <Card
      key={`zahaCard${i}`}
      data={val}
      variant="overlay"
      className="custom-zha"
      childAnims={cardChildAnims}
      priority
      size="full"
      {...zhaCardAnim}
    />
  );
});

export const ZHACarousel: Story = {
  args: {
    items,
    controls: {
      show: true,
      directionComponent: <Arrow />,
    },
    showPagination: true,
    crop: false,
    loop: true,
    variant: "primary",
    gap: 5,
    width: window.innerWidth * 0.8,
    height: (window.innerWidth * 0.8) / 1.7777,
    className: "custom-zha",
  },
};
