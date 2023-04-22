import type { Dispatch } from "react";
import type { DropdownProps } from "./Dropdown";
import type { FloatProps } from "@headlessui-float/react";
import { createContext } from "react";

interface DropdownContext extends Partial<DropdownProps> {
  placement: FloatProps["placement"];
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  setSelected: (value: string) => void;
  selected: string;
  toggleIsOpen: () => void;
}

const DropdownContext = createContext<DropdownContext | undefined>(undefined);

DropdownContext.displayName = "DropdownContext";

export { DropdownContext };
