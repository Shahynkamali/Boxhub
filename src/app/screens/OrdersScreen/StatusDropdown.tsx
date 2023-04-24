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

const StatusDropdown: FC<Props> = ({ value, onClick }) => {
  return (
    <Dropdown value={value}>
      <DropdownLabel>Status</DropdownLabel>
      <DropdownContent>
        <DropdownButton name="Status">{value}</DropdownButton>
        <DropdownItems>
          <DropdownItem name="status" onClick={onClick} value="all" />
          <DropdownItem name="status" onClick={onClick} value="delivered" />
          <DropdownItem name="status" onClick={onClick} value="in-progress" />
          <DropdownItem name="status" onClick={onClick} value="pending" />
        </DropdownItems>
      </DropdownContent>
    </Dropdown>
  );
};

export { StatusDropdown };
