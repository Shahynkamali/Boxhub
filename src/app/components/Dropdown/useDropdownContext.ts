import { useContextFallback } from "hooks";
import { DropdownContext } from "./DropdownContext";

const useDropdownContext = () =>
  useContextFallback<DropdownContext>(DropdownContext);

export { useDropdownContext };
