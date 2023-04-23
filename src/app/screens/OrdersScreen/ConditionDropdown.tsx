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

const ConditionDropdown: FC<Props> = ({ value, onClick }) => {
  return (
    <Dropdown value={value}>
      <DropdownLabel>Condition</DropdownLabel>
      <DropdownContent>
        <DropdownButton>{value}</DropdownButton>
        <DropdownItems>
          <DropdownItem name="condition" onClick={onClick} value="all" />
          <DropdownItem name="condition" onClick={onClick} value="new" />
          <DropdownItem
            name="condition"
            onClick={onClick}
            value="cargo-worthy"
          />
          <DropdownItem
            name="condition"
            onClick={onClick}
            value="wind-watertight"
          />
        </DropdownItems>
      </DropdownContent>
    </Dropdown>
  );
};

export { ConditionDropdown };
