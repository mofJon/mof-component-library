import type { Meta, StoryObj } from '@storybook/react';
import Arrow from '@/assets/icons/zhaArrow.svg';
import Component from ".";

const data: any = {
  tag:  "Research & Technology",
  headingTitle: {
    heading: "<p>How we stay ahead of the curve</p>",
    htag: '',
  },
  description:"<p>Description goes here lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. Morbi cursus mauris id bibendum commodo.</p>",
  primaryCta: {
    text: "People",
    href: "https://qa-api.zaha-hadid.com/people",
    linkType: "Content",
    target: "",
    iconPost: <Arrow />, // It does not come from the BE
    size: 'sm' // It does not come from the BE
  },
  secondaryCta: {
    text: "Projects",
    href: "https://qa-api.zaha-hadid.com/projects",
    linkType: "Content",
    target: "",
    variant: "secondary", // It does not come from the BE
    iconPost: <Arrow />, // It does not come from the BE
    size: 'sm' // It does not come from the BE
  },
  mediaAlignment: "Right",
  mediaOrientation: "Portrait",
  // Image for test 
  image: {
    imageUrl: "https://qa-cms.zaha-hadid.com/media/wotgyell/adrian-cuj-o_9ymcy0bag-unsplash.jpg",
    title: "",
    description: "",
    imageAlt: "",
    mediaId: 1229,
    isSvg: false,
    isVideo: false
  },
  // The real data could contain video and looks like this:
  /*
  media: {
    coverImage: {
      imageUrl: "/media/abmfbuse/zha_4.jpg",
      title: "Duis aute irure dolor in reprehenderit in voluptate velit 45",
      description: "",
      imageAlt: "",
      mediaId: 1252,
      isSvg: false,
      isVideo: false
    },
    videoFromGallery: null,
    vimeoId: "865912138",
    youtubeId: "",
    autoPlay: true,
    loop: true,
    allowFullScreen: false
  },
  */
  anchor: '',
  anchorDisplayName: '',
  paddingTop: '',
  paddingBottom: '',
};

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const RichTextAndOneMediaModule: Story = {
  args: {
    data,
  },
  
};