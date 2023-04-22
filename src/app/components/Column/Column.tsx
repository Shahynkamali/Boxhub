import type { HTMLProps, ReactNode, FC } from "react";
import type { COLUMNS_TYPES } from "constant";
import { COLUMNS } from "constant";
import classNames from "classnames";
import styles from "./Column.module.scss";

interface Props extends HTMLProps<HTMLDivElement> {
  isPaddingless?: boolean;
  columnWidth?: COLUMNS_TYPES;
  children?: ReactNode;
}

const Column: FC<Props> = ({
  children,
  isPaddingless,
  columnWidth = "three",
  className,
  ...rest
}) => {
  const css = classNames(
    styles.root,
    styles[columnWidth],
    isPaddingless && styles.isPaddingless,
    className
  );

  return (
    <div {...rest} className={css}>
      {children}
    </div>
  );
};

Column.defaultProps = {
  columnWidth: COLUMNS.THREE,
  isPaddingless: false,
};

export { Column };
export type { Props as ColumnProps };
