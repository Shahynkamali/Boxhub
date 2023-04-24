import type { FC, HTMLProps, ReactNode } from "react";
import type { BADGES_TYPES } from "constant";
import { BADGES } from "constant";
import classNames from "classnames";
import styles from "./Badge.module.scss";

interface Props extends HTMLProps<HTMLSpanElement> {
  children: ReactNode;
  theme?: BADGES_TYPES;
  invertTheme?: boolean;
}

const Badge: FC<Props> = ({
  theme = BADGES.PRIMARY,
  invertTheme,
  children,
  className,
  name,
  ...rest
}) => {
  const css = classNames(
    styles.root,
    styles[theme],
    invertTheme && styles.inverted,
    className
  );

  return (
    <span aria-label={name} role="status" {...rest} className={css}>
      {children}
    </span>
  );
};

Badge.defaultProps = {
  theme: BADGES.PRIMARY,
  invertTheme: false,
};

export { Badge };
