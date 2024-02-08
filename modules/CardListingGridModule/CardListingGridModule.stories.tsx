import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import CardListingGridModule from "./";

import data from "./__mockdata__.json";
import dataAlt from "./__mockdataAlt__ .json";

const datas = [data, dataAlt];
let dataIndex = 0;

const meta: Meta<typeof CardListingGridModule> = {
  component: CardListingGridModule,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [
    (Story) => {
      const [count, setCount] = useState(0);
      const toggleFilter = () => {
        dataIndex = dataIndex === 0 ? 1 : 0;
        setCount(count + 1);
      };

      return (
        <>
          <button
            onClick={toggleFilter}
            style={{
              padding: "0.5rem 1rem",
              color: "black",
              background: "grey",
              textTransform: "uppercase",
              margin: "1rem",
            }}
          >
            Filter
          </button>
          <Story />
        </>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof CardListingGridModule>;

export const CardListingGrid = () => {
  return <CardListingGridModule data={datas[dataIndex]} />;
};
