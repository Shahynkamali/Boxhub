import type { ReactNode, FC, ComponentPropsWithRef } from "react";
import { forwardRef } from "react";
import classnames from "classnames";
import { Menu } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDropdownContext } from "@/app/components/Dropdown/useDropdownContext";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./DropdownButton.module.scss";

type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;

interface DropdownButtonProps extends ComponentPropsWithRef<"button"> {
  children: ReactNode;
  isIconVisible?: boolean;
  icon?: IconDefinition;
}

type Props = AtLeast<DropdownButtonProps, "children">;

const DropdownButton: FC<Props> = forwardRef(
  ({ children, isIconVisible, icon, className, ...rest }, ref) => {
    const { isDisabled, toggleIsOpen, theme, isFullWidth, isOutlined } =
      useDropdownContext();

    const css = classnames(
      styles.root,
      styles[theme!],
      !!children ? styles.padding : styles.paddingNoChildren,
      isOutlined && styles.outlined,
      isDisabled && styles.disabled,
      isFullWidth && styles.fullWidth,
      className
    );

    const renderIcon = () =>
      isIconVisible ? (
        <FontAwesomeIcon className={styles.icon} icon={icon ?? faChevronDown} />
      ) : null;

    return (
      <Menu.Button
        {...rest}
        ref={ref}
        type="button"
        tabIndex={0}
        onKeyDown={toggleIsOpen}
        onClick={toggleIsOpen}
        disabled={isDisabled}
        className={css}
      >
        <span className="truncate">{children}</span>
        {renderIcon()}
      </Menu.Button>
    );
  }
);

DropdownButton.displayName = "DropdownButton";

DropdownButton.defaultProps = {
  isIconVisible: true,
};

export { DropdownButton };
