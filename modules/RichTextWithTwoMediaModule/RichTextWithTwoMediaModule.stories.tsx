import type { Meta, StoryObj } from '@storybook/react';
import Component from '.';

const data: any = {
  headingTitle: {
    heading: '<p>Rich Text1</p>',
    htag: 'h2',
  },
  content:
    '<p>Body text duis tincidunt dui cubilia aptent parturient torquent turpis elementum consectetur porttitor duis a conubia integer ultricies sed ac ultrices sodales hac suscipit a tempus eros hac erat. Vel a himenaeos a parturient dapibus class donec a vestibulum conubia lacus volutpat vestibulum class vehicula orci gravida a arcu curae cubilia consectetur venenatis eu etiam tempor. Ac vestibulum condimentum a senectus vestibulum ad maecenas hac.</p>\n<p><br>Vestibulum adipiscing ullamcorper id elit scelerisque viverra netus vestibulum per tempor dolor vestibulum cursus hac imperdiet cum. Duis eros ullamcorper a adipiscing parturient mi himenaeos commodo consectetur non adipiscing convallis condimentum rhoncus senectus dui parturient. Maecenas faucibus taciti congue penatibus vestibulum vestibulum a amet habitant tincidunt varius iaculis egestas suscipit.</p>\n<p><br>Commodo eleifend purus urna scelerisque at adipiscing magnis dapibus aenean vestibulum eu quisque id risus primis. Suspendisse in condimentum cras adipiscing eleifend suspendisse nulla condimentum lacinia mus cubilia luctus nec a et non donec parturient class mi porta mus varius parturient a molestie dui. Malesuada elementum curabitur est cras parturient.</p>\n<p> </p>\n<p><a href="#" title="Homepage">Homepage</a></p>',
  image: {
    imageUrl:
      'https://qa-cms.zaha-hadid.com/media/wotgyell/adrian-cuj-o_9ymcy0bag-unsplash.jpg',
    title: '',
    description: '',
    imageAlt: '',
    mediaId: 1229,
    isSvg: false,
    isVideo: false,
  },
  anchor: '',
  anchorDisplayName: '',
  paddingTop: 'Small',
  paddingBottom: 'Small',
};

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const RichTextWithMediaModule: Story = {
  args: {
    data,
  },
};
