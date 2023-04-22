import type { FC, HTMLProps, MouseEvent, ReactNode } from "react";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Menu } from "@headlessui/react";
import {
  faExclamationCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Text } from "@/app/components/Text";
import { useDropdownContext } from "@/app/components/Dropdown/useDropdownContext";
import classnames from "classnames";
import styles from "./DropdownItem.module.scss";

interface DropdownItemProps<T = HTMLProps<HTMLAnchorElement>>
  extends HTMLProps<T> {
  value?: string;
  icon?: IconDefinition;
  isDisabled?: boolean;
  children?: ReactNode;
  isError?: boolean;
}

type Props = Omit<
  DropdownItemProps<HTMLButtonElement | HTMLAnchorElement>,
  "ref"
>;

const DropdownItem: FC<Props> = ({
  children,
  onClick,
  value,
  icon,
  href,
  isDisabled,
  className,
  isError,
  ...rest
}) => {
  const { selected, setSelected, toggleIsOpen } = useDropdownContext();
  const isSelected = value === selected;

  const getCSS = (active: boolean) =>
    classnames(
      styles.root,
      active && styles.active,
      isError && styles.error,
      isDisabled && styles.disabled,
      className
    );

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (value) {
      setSelected(value);
      onClick?.(e);
    } else {
      onClick?.(e);
    }
    toggleIsOpen();
  };

  const renderIcon = () => {
    if (icon)
      return (
        <FontAwesomeIcon
          aria-hidden="true"
          className={styles.icon}
          icon={icon}
        />
      );
    if (isError)
      return (
        <>
          <span className="sr-only">{value} has one or more errors.</span>
          <FontAwesomeIcon
            aria-hidden="true"
            className={styles.icon}
            icon={faExclamationCircle}
          />
        </>
      );

    return null;
  };

  const renderCheckmark = () => {
    if (isSelected)
      return (
        <FontAwesomeIcon
          aria-hidden="true"
          className={styles.icon}
          icon={faCheck}
        />
      );
    return null;
  };

  const renderButton = (active: boolean) => {
    return (
      <button
        {...rest}
        type="button"
        className={getCSS(active)}
        onClick={handleClick}
        value={value}
      >
        <Text
          role="option"
          aria-selected={isSelected}
          className={styles.center}
          isMarginless
        >
          {children ? children : value}
          {renderIcon()}
        </Text>
        {renderCheckmark()}
      </button>
    );
  };

  const renderContent = (active: boolean) => {
    if (onClick) return renderButton(active);

    return (
      <a {...rest} href={href} className={getCSS(active)}>
        <Text className={styles.center} isMarginless>
          {children}
          {renderIcon()}
        </Text>
      </a>
    );
  };

  return (
    <Menu.Item disabled={isDisabled}>
      {({ active }) => renderContent(active)}
    </Menu.Item>
  );
};

export { DropdownItem };
