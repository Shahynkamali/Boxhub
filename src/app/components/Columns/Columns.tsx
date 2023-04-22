import type { HTMLProps, ReactNode, FC } from "react";
import classNames from "classnames";
import styles from "./Columns.module.scss";

interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  isMarginless?: boolean;
  isWrapping?: boolean;
  isWrappingReverse?: boolean;
  isStackingOnMobile?: boolean;
  isMarginPreserved?: boolean;
}

const Columns: FC<Props> = ({
  children,
  isMarginless,
  isWrapping,
  isWrappingReverse,
  isStackingOnMobile,
  isMarginPreserved,
  className,
  ...rest
}) => {
  const columnsStyles = classNames(
    styles.root,
    !isMarginPreserved && styles.lastOfTypeMargin,
    styles.rows,
    isWrappingReverse && styles.reverseWrap,
    isStackingOnMobile ? styles.rows : styles.rowOnMobile,
    isMarginless && styles.isMarginless,
    isWrapping && styles.wrap,
    className
  );

  return (
    <div {...rest} className={columnsStyles}>
      {children}
    </div>
  );
};

Columns.defaultProps = {
  isMarginPreserved: false,
  isStackingOnMobile: true,
  isMarginless: false,
  isWrapping: false,
  isWrappingReverse: false,
};

export { Columns };
export type { Props as ColumnsProps };
