import { Provider } from "react-redux";
import type { Meta, StoryObj } from "@storybook/react";
import Component from ".";
import { wrapper } from "@/existing/store";
import { text } from "stream/consumers";

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

export const Link: Story = {
  args: {
      link: {
        href: "https://www.google.com",
        target: "_blank",
        text: "Link text",
      },
      children: <p>Link children</p>,
  },
};
