import type { Meta, StoryFn } from "@storybook/react";
import type { ButtonSizes } from "./Button";
import type { THEME_TYPES } from "constant";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { ReactNode } from "react";
import { Button } from "./Button";
import { THEMES } from "constant";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    isLoading: false,
    isOutlined: false,
    isDisabled: false,
    theme: THEMES.PRIMARY,
    size: "medium",
  },
  argTypes: {
    colour: { control: "color" },
    theme: {
      options: ["primary", "info", "error", "secondary", "light"],
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

const buttomSizes = ["small", "medium"] as unknown as ButtonSizes[];
const themes = Object.keys(THEMES) as unknown as THEME_TYPES[];
const icons = ["clock", "dollar", "heart"] as unknown as IconDefinition[];

export const Default: StoryFn<typeof Button> = (args) => (
  <>
    <div className="w-full my-4">
      {buttomSizes.map((size) => (
        <Button
          {...args}
          key={size}
          className="mr-2"
          theme={args.theme}
          size={size}
        >
          {size}
        </Button>
      ))}
    </div>
    <div className="flex w-full my-4">
      {themes.map((theme) => (
        <Button key={theme} className="mr-2" {...args} theme={theme}>
          {args.label ? args.label : theme}
        </Button>
      ))}
    </div>
    <div className="flex w-full my-4">
      {themes.map((theme) => (
        <Button {...args} isOutlined key={theme} className="mr-2" theme={theme}>
          {args.label ? args.label : theme}
        </Button>
      ))}
    </div>
    <div className="flex w-full my-4">
      {themes.map((theme) => (
        <Button {...args} key={theme} className="mr-2" theme={theme}>
          {args.label ? args.label : theme}
        </Button>
      ))}
    </div>
    <div className="flex w-full my-4">
      {themes.map((theme) => (
        <Button {...args} isLoading key={theme} className="mr-2" theme={theme}>
          {args.label ? args.label : theme}
        </Button>
      ))}
    </div>
    <div className="w-full my-4">
      {icons.map((icon, index) => (
        <Button
          {...args}
          key={index}
          className="mr-2"
          theme={args.theme}
          icon={icon}
        >
          {icon as unknown as ReactNode}
        </Button>
      ))}
    </div>
    <div className="w-full my-4">
      {themes.map((icon) => (
        <Button
          key={icon}
          className="mr-2"
          {...args}
          theme={icon}
          href="www.google.com"
          rel="noreferrer"
          target="_blank"
        >
          Link (A Tag)
        </Button>
      ))}
    </div>
  </>
);
