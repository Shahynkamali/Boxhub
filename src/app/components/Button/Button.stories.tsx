import type { Meta, StoryFn } from "@storybook/react";
import { Button } from "./Button";
import { BUTTONS } from "constant";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    isLoading: false,
    isOutlined: false,
    isDisabled: false,
    theme: BUTTONS.PRIMARY,
    size: "medium",
  },
  argTypes: {
    colour: { control: "color" },
    theme: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
    isOutlined: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
    },
    isDisabled: {
      control: "boolean",
    },
    onClick: {
      action: "click",
    },
    icon: {
      control: false,
    },
    children: {
      control: false,
    },
    className: {
      control: false,
    },
  },
} as Meta<typeof Button>;

export const Primary: StoryFn<typeof Button> = (args) => (
  <div>
    <Button {...args} theme={BUTTONS.PRIMARY}>
      primary
    </Button>
  </div>
);

export const Secondary: StoryFn<typeof Button> = (args) => (
  <div>
    <Button {...args} theme={BUTTONS.SECONDARY}>
      primary
    </Button>
  </div>
);
