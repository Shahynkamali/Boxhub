import type { FC, HTMLProps, ReactNode } from "react";
import type { FloatProps } from "@headlessui-float/react";
import type { BUTTONS_TYPES } from "constant";
import { BUTTONS } from "constant";
import { Menu } from "@headlessui/react";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useOnClickOutside } from "hooks";
import { DropdownContext } from "./DropdownContext";
import styles from "./Dropdown.module.scss";

type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;
type ErrorType = string[] | null | undefined;

interface DropdownProps {
  theme?: BUTTONS_TYPES;
  value: string;
  isFullWidth: boolean;
  isDisabled: boolean;
  placement: FloatProps["placement"];
  isOpenByDefault: boolean;
  isPreventingCloseOnOutsideClick: boolean;
  errors: ErrorType;
  isMarginless: boolean;
  isOutlined: boolean;
  isResponsive: boolean;
  isAutoPlacement: boolean;
  children: ReactNode;
}

type Props = Omit<HTMLProps<HTMLElement>, "as" | "ref" | "value"> &
  AtLeast<DropdownProps, "value" | "children" | "theme">;

const Dropdown: FC<Props> = ({
  isFullWidth,
  theme = BUTTONS.PRIMARY,
  children,
  value,
  isDisabled,
  placement,
  isOutlined,
  isOpenByDefault = false,
  isPreventingCloseOnOutsideClick,
  isMarginless,
  isResponsive,
  isAutoPlacement,
  ...rest
}) => {
  const [selected, setSelected] = useState(value);
  const [isOpen, setIsOpen] = useState(isOpenByDefault);
  const [ref, setDropdownRef] = useState<Omit<HTMLDivElement, "align"> | null>(
    null
  );

  useEffect(() => setSelected(value), [value]);

  const onClickOutside = () => {
    if (isOpen && !isPreventingCloseOnOutsideClick) {
      setIsOpen(false);
    }
  };

  useOnClickOutside<HTMLDivElement>({
    ref: ref as HTMLDivElement,
    onClickOutside,
  });

  const toggleIsOpen = () => {
    console.log("hah");
    return setIsOpen((prevState) => !prevState);
  };

  return (
    <DropdownContext.Provider
      value={{
        selected,
        setSelected,
        placement,
        isOpen,
        setIsOpen,
        toggleIsOpen,
        isFullWidth,
        isResponsive,
        isAutoPlacement,
        isOutlined,
        theme,
      }}
    >
      <Menu
        as="div"
        ref={setDropdownRef}
        className={classNames(
          styles.root,
          isFullWidth && styles.fullWidth,
          !isMarginless && styles.marginBottom
        )}
        {...rest}
      >
        {children}
      </Menu>
    </DropdownContext.Provider>
  );
};

Dropdown.defaultProps = {
  value: "",
  placement: "bottom",
  isOpenByDefault: false,
  isFullWidth: false,
  isPreventingCloseOnOutsideClick: false,
  isResponsive: true,
  isAutoPlacement: false,
};

export { Dropdown };

export type { DropdownProps };
