import { Provider } from "react-redux";
import type { Meta, StoryObj } from "@storybook/react";
import Component from ".";
import { wrapper } from "@/existing/store";

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

export const CMSModule: Story = {
  args: {
    module: {
      moduleId: "id",
    }
  },
};
