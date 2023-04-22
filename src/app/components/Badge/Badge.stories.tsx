import type { Meta, StoryFn } from "@storybook/react";
import type { BADGES_TYPES } from "@/app/shared/constant";
import { BADGES } from "constant";
import { Badge } from "./Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Components/Badge",
  component: Badge,
  args: {
    invertTheme: false,
  },
  argTypes: {
    invertTheme: {
      control: "boolean",
    },
  },
} as Meta<typeof Badge>;

const themes = Object.values(BADGES) as unknown as BADGES_TYPES[];

export const Default: StoryFn<typeof Badge> = (args) => (
  <div className="w-full flex">
    {themes.map((theme) => (
      <Badge {...args} key={theme} theme={theme} className="mr-4">
        <FontAwesomeIcon icon={faPiggyBank} className="mr-2" />
        <span>Themed badge</span>
      </Badge>
    ))}
  </div>
);

export const Inverted: StoryFn<typeof Badge> = (args) => (
  <div className="w-full flex">
    {themes.map((theme) => (
      <Badge {...args} key={theme} theme={theme} invertTheme className="mr-4">
        <FontAwesomeIcon icon={faPiggyBank} className="mr-2" />
        <span>Inverted theme badge</span>
      </Badge>
    ))}
  </div>
);
