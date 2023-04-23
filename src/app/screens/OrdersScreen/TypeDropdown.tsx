import type { FC } from "react";
import type { DropdownProps } from "@/app/components/Dropdown/Dropdown";
import type { DropdownItemProps } from "@/app/components/Dropdown/DropdownItem";
import {
  Dropdown,
  DropdownButton,
  DropdownContent,
  DropdownItem,
  DropdownItems,
  DropdownLabel,
} from "components";

type Props = Pick<DropdownProps, "value"> & Pick<DropdownItemProps, "onClick">;

const TypeDropdown: FC<Props> = ({ value, onClick }) => {
  return (
    <Dropdown value={value}>
      <DropdownLabel>Type</DropdownLabel>
      <DropdownContent>
        <DropdownButton>{value}</DropdownButton>
        <DropdownItems>
          <DropdownItem name="type" onClick={onClick} value="all" />
          <DropdownItem name="type" onClick={onClick} value="standard" />
          <DropdownItem name="type" onClick={onClick} value="high-cube" />
        </DropdownItems>
      </DropdownContent>
    </Dropdown>
  );
};

export { TypeDropdown };
