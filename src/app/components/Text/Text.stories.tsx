import type { Meta, StoryFn } from "@storybook/react";
import { TEXTS } from "constant";
import { Text } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    type: "h1",
    isMarginless: false,
    isBold: false,
    isTruncated: false,
    isSecondaryText: false,
  },
  argTypes: {
    type: {
      control: false,
    },
    isMarginless: {
      control: "boolean",
    },
    isBold: {
      control: "boolean",
    },
    isTruncated: {
      control: "boolean",
    },
    isSecondaryText: {
      control: "boolean",
    },
  },
} as Meta<typeof Text>;

export const Default: StoryFn<typeof Text> = (args) => {
  return (
    <div>
      {Object.values(TEXTS).map((type) => (
        <Text {...args} key={type} type={type}>
          <span className="uppercase">{type}:</span> The quick brown fox jumps
          over the lazy dog
        </Text>
      ))}
    </div>
  );
};
