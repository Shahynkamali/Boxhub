import type { FC, HTMLProps, MouseEvent, ReactNode, Ref } from "react";
import type { BUTTONS_TYPES } from "constant";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BUTTONS } from "constant";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { forwardRef } from "react";
import classnames from "classnames";
import styles from "./Button.module.scss";

export type ButtonSizes = "small" | "medium";
type ButtonType = "button" | "submit" | "reset" | undefined;

interface ButtonProps<T = HTMLButtonElement> extends HTMLProps<T> {
  theme: BUTTONS_TYPES;
  isLoading: boolean;
  isDisabled: boolean;
  icon: IconDefinition;
  isOutlined: boolean;
  isFullWidth: boolean;
}
interface Props
  extends Partial<
    Omit<
      ButtonProps<HTMLButtonElement | HTMLAnchorElement>,
      "size" | "type" | "ref"
    >
  > {
  children: ReactNode;
  type?: ButtonType;
  size?: ButtonSizes;
  ref?: Ref<HTMLButtonElement>;
}

const Button: FC<Props> = forwardRef(
  (
    {
      isLoading,
      isDisabled,
      theme = BUTTONS.PRIMARY,
      icon,
      size = "medium",
      children,
      isOutlined,
      isFullWidth,
      className,
      type,
      href,
      "aria-label": ariaLabel,
      onClick,
      ...rest
    },
    ref
  ) => {
    const buttonStyles = isDisabled
      ? classnames(styles.disabled, isOutlined && styles.outlined)
      : classnames(styles[theme], isOutlined && styles.outlined);

    const css = classnames(
      styles.root,
      isFullWidth && styles.fullWidth,
      !!children && styles.hasChildren,
      buttonStyles,
      styles[size],
      className
    );

    const getDisabledProps = () => {
      if (isLoading) {
        return {
          disabled: isLoading,
        };
      }
      return {
        "aria-disabled": isDisabled,
      };
    };

    const handleClick = (
      e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
    ) => {
      return onClick?.(e);
    };

    if (href) {
      const linkProps = isDisabled
        ? { role: "link", "aria-disabled": true, tabIndex: 0 }
        : { href, ...(rest as HTMLProps<HTMLAnchorElement>) };

      return (
        <a {...linkProps} aria-label={ariaLabel} className={css}>
          {children}
        </a>
      );
    }

    return (
      <button
        {...(rest as HTMLProps<HTMLButtonElement>)}
        aria-label={ariaLabel}
        type={type}
        onClick={handleClick}
        ref={ref}
        {...getDisabledProps()}
        className={css}
      >
        <span className={classnames(isLoading ? "opacity-0" : styles.button)}>
          {!!icon && (
            <FontAwesomeIcon
              title={icon.iconName}
              className={styles.icon}
              icon={icon}
            />
          )}
          {children}
        </span>
        <div
          role="status"
          className={classnames(isLoading ? styles.spinner : "hidden")}
        >
          <FontAwesomeIcon icon={faSpinner} spin />
          <span aria-hidden={!isLoading} className="sr-only">
            loading
          </span>
        </div>
      </button>
    );
  }
);

Button.displayName = "Button";

Button.defaultProps = {
  size: "medium",
  theme: BUTTONS.PRIMARY,
  type: "button",
};

export { Button };
export type { Props as ButtonProps };
