import type { FC, HTMLProps, ReactNode } from "react";
import classnames from "classnames";
import { useDropdownContext } from "@/app/components/Dropdown/useDropdownContext";
import styles from "./DropdownLabel.module.scss";

interface Props extends Pick<HTMLProps<HTMLDivElement>, "className"> {
  children: ReactNode;
  isDisabled?: boolean;
}

const DropdownLabel: FC<Props> = ({ children, isDisabled, className }) => {
  const { toggleIsOpen } = useDropdownContext();
  const css = classnames(styles.root, isDisabled && styles.disabled, className);

  return (
    <div onClick={toggleIsOpen} onKeyDown={toggleIsOpen} className={css}>
      {children}
    </div>
  );
};

export { DropdownLabel };
