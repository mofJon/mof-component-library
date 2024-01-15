import { FC } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card, Carousel } from "#mof-components";
import Arrow from "#mof-assets/icons/zhaArrow.svg";
import zha1 from "#mof-assets/images/zhaCarousel1.jpg";
import zha2 from "#mof-assets/images/zhaCarousel2.jpg";
import zha3 from "#mof-assets/images/zhaCarousel3.jpg";
import { childAnims, zhaCardAnim } from "./animations";

const zhaData: any = [
  {
    media: zha1.src,
    preHeading: "Transport",
    headingTitle: "BMW Central Building",
    info: "<span>Leipzig, Germany</span><span>2001-2005</span><span>BMW AG</span>",
    description:
      "Description goes here lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. Morbi cursus mauris id bibendum commodo.",
    primaryCta: "View article",
    variant: "primary",
  },
  {
    media: zha2.src,
    preHeading: "Transport",
    headingTitle: "BMW Central Building",
    info: "<span>Leipzig, Germany</span><span>2001-2005</span><span>BMW AG</span>",
    description:
      "Description goes here lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. Morbi cursus mauris id bibendum commodo.",
    primaryCta: "View article",
    variant: "primary",
  },
  {
    media: zha3.src,
    preHeading: "Transport",
    headingTitle: "BMW Central Building",
    info: "<span>Leipzig, Germany</span><span>2001-2005</span><span>BMW AG</span>",
    description:
      "Description goes here lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. Morbi cursus mauris id bibendum commodo.",
    primaryCta: "View article",
    variant: "primary",
  },
];

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
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

const items = zhaData.map((val: any, i: number) => {
  return (
    <Card
      key={`zahaCard${i}`}
      data={val}
      variant="overlay"
      className="custom-zha"
      childAnims={childAnims}
      size="full"
      {...zhaCardAnim}
    />
  );
});

export const ZHACarousel: FC = () => {
  styleViewport();
  // @ts-ignore
  const width = window ? window.innerWidth * 0.8 : 800;
  const height = width / 1.7777; //aspect ratio

  const args: any = {
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
    width,
    height,
    className: "custom-zha",
  };

  return <Carousel {...args} />;
};

const styleViewport = () => {
  // @ts-ignore
  const viewport = document && document.getElementById("storybook-root");

  if (viewport) {
    viewport.style.width = "100vw";
    viewport.style.height = "100vh";
    viewport.style.background = "black";
    viewport.style.display = "flex";
    viewport.style.justifyContent = "center";
    viewport.style.alignItems = "center";
  }
};
