import { Provider } from "react-redux";
import type { Meta, StoryObj } from "@storybook/react";
import Component from ".";
import { wrapper } from "@/existing/store";

const image = {
  imageUrl:
    "https://base.matterofform.com/media/1gzl5kwa/420d532b02bcbb6b7b40401e9c74cefa.jpg?width=696&height=464&format=webp",
};

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      const { store } = wrapper.useWrappedStore({});

      return (
        <Provider store={store}>
          <Story />
        </Provider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const ModuleBase: Story = {
  args: {
    data: { 
      anchor: 'id',
      paddingTop: 'medium',
      paddingBottom: 'medium',
      backgroundColour:'#000'
    },
    children: <p className="color-from-bg">Text</p>,
  },
};
