import type { Meta, StoryFn } from "@storybook/react";
import type { MouseEvent } from "react";

import { useState } from "react";

import { Dropdown } from "./Dropdown";
import { DropdownButton } from "./DropdownButton";
import { DropdownItems } from "./DropdownItems";
import { DropdownItem } from "./DropdownItem";
import { DropdownHeader } from "./DropdownHeader";
import { DropdownDivider } from "./DropdownDivider";
import { DropdownLabel } from "./DropdownLabel";
import { DropdownContent } from "./DropdownContent";
import { Text } from "@/app/components/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faLink,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { BUTTONS } from "@/app/shared/constant";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  args: {
    isOutlined: false,
    isDisabled: false,
    isPreventingCloseOnOutsideClick: false,
    isOpenByDefault: false,
    isSecondary: false,
    position: "left",
  },
  argTypes: {
    isClean: {
      control: "boolean",
    },
    isOutlined: {
      control: "boolean",
    },
    isDisabled: {
      control: "boolean",
    },
    isPreventingCloseOnOutsideClick: {
      control: "boolean",
    },
    isOpenByDefault: {
      control: "boolean",
    },
    placement: {
      options: ["left", "right", "center"],
      control: { type: "radio" },
    },
    value: {
      control: false,
    },
    label: {
      control: "text",
    },
    isLabelVisible: {
      control: "boolean",
    },
  },
} as Meta<typeof Dropdown>;

export const Primary: StoryFn<typeof Dropdown> = ({
  isDisabled,
  isOutlined,
  placement,
  isPreventingCloseOnOutsideClick,
  isOpenByDefault,
}) => {
  const [value, setValue] = useState("one");

  const handleClick = ({ target }: MouseEvent<HTMLButtonElement>) => {
    const { value } = target as HTMLButtonElement;
    setValue(value);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <Dropdown
        isOpenByDefault={isOpenByDefault}
        isPreventingCloseOnOutsideClick={isPreventingCloseOnOutsideClick}
        isDisabled={isDisabled}
        isOutlined={isOutlined}
        value={value}
        placement={placement}
        aria-label="label"
      >
        <DropdownContent>
          <DropdownButton>{value}</DropdownButton>
          <DropdownItems>
            <DropdownItem onClick={handleClick} value="one" />
            <DropdownItem onClick={handleClick} value="two">
              two
            </DropdownItem>
          </DropdownItems>
        </DropdownContent>
      </Dropdown>
    </div>
  );
};

export const Secondary: StoryFn<typeof Dropdown> = ({
  isDisabled,
  isOutlined,
  placement,
  isPreventingCloseOnOutsideClick,
  isOpenByDefault,
}) => {
  const [value, setValue] = useState("one");

  const handleClick = ({ target }: MouseEvent<HTMLButtonElement>) => {
    const { value } = target as HTMLButtonElement;
    setValue(value);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <Dropdown
        theme={BUTTONS.SECONDARY}
        isOpenByDefault={isOpenByDefault}
        isPreventingCloseOnOutsideClick={isPreventingCloseOnOutsideClick}
        isDisabled={isDisabled}
        isOutlined={isOutlined}
        value={value}
        placement={placement}
        aria-label="label"
      >
        <DropdownContent>
          <DropdownButton>{value}</DropdownButton>
          <DropdownItems>
            <DropdownItem onClick={handleClick} value="one" />
            <DropdownItem onClick={handleClick} value="two">
              two
            </DropdownItem>
          </DropdownItems>
        </DropdownContent>
      </Dropdown>
    </div>
  );
};

export const WithLabelAndDividerAndHeader: StoryFn<typeof Dropdown> = ({
  isDisabled,
  isOutlined,
  placement,
  isPreventingCloseOnOutsideClick,
  isOpenByDefault,
}) => {
  const [value, setValue] = useState("one");

  const handleClick = ({ target }: MouseEvent<HTMLButtonElement>) => {
    const { value } = target as HTMLButtonElement;
    setValue(value);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <Dropdown
        theme={BUTTONS.SECONDARY}
        isOpenByDefault={isOpenByDefault}
        isPreventingCloseOnOutsideClick={isPreventingCloseOnOutsideClick}
        isDisabled={isDisabled}
        isOutlined={isOutlined}
        value={value}
        placement={placement}
        aria-label="label"
      >
        <DropdownLabel>Select</DropdownLabel>
        <DropdownContent>
          <DropdownButton>{value}</DropdownButton>
          <DropdownItems>
            <DropdownHeader>
              <Text isBold type="h4" isMarginless>
                pick a value
              </Text>
            </DropdownHeader>
            <DropdownItem onClick={handleClick} value="one" />
            <DropdownItem onClick={handleClick} value="two">
              two
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem onClick={handleClick} value="three" />
            <DropdownItem onClick={handleClick} value="four" />
          </DropdownItems>
        </DropdownContent>
      </Dropdown>
    </div>
  );
};
