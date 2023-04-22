import type { Meta, StoryFn } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import { SKELETONS } from "constant";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  args: {
    width: "small",
    height: "small",
  },
  argTypes: {
    width: {
      control: { type: "select" },
      default: "small",
      options: Object.values(SKELETONS),
    },
    height: {
      control: { type: "select" },
      default: "small",
      options: Object.values(SKELETONS),
    },
  },
} as Meta<typeof Skeleton>;

export const Default: StoryFn<typeof Skeleton> = ({ ...args }) => {
  return (
    <div className="w-full flex justify-center items-start h-96 flex-col">
      <Skeleton {...args} />
    </div>
  );
};
