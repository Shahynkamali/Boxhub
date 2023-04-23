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

const SizeDropdown: FC<Props> = ({ value, onClick }) => {
  return (
    <Dropdown value={value}>
      <DropdownLabel>Size</DropdownLabel>
      <DropdownContent>
        <DropdownButton>{value}</DropdownButton>
        <DropdownItems>
          <DropdownItem name="size" onClick={onClick} value="all" />
          <DropdownItem name="size" onClick={onClick} value="20ft" />
          <DropdownItem name="size" onClick={onClick} value="40ft" />
          <DropdownItem name="size" onClick={onClick} value="45ft" />
        </DropdownItems>
      </DropdownContent>
    </Dropdown>
  );
};

export { SizeDropdown };
