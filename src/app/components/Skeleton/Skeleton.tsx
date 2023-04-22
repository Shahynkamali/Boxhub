import type { FC, HTMLProps } from "react";
import type { SKELETONS_TYPES } from "constant";
import { SKELETONS } from "constant";
import classNames from "classnames";
import styles from "./Skeleton.module.scss";

interface Props extends HTMLProps<HTMLDivElement> {
  width: SKELETONS_TYPES;
  height: SKELETONS_TYPES;
  isFullyRounded: boolean;
  isMarginless: boolean;
}

const Skeleton: FC<Partial<Props>> = ({
  width = "small",
  height = "small",
  isFullyRounded,
  isMarginless,
  className,
  ...rest
}) => {
  const widthStyles = classNames(
    styles.width,
    styles[`width--${width}`],
    styles.height,
    styles[`height--${height}`]
  );
  const roundedStyles = classNames(styles.rounded, styles[`rounded--${width}`]);
  const css = classNames(
    styles.root,
    !isMarginless && styles.margin,
    isFullyRounded ? roundedStyles : widthStyles,
    className
  );

  return <div data-testid="skeleton" className={css} {...rest} />;
};

Skeleton.defaultProps = {
  width: SKELETONS.SMALL,
  height: SKELETONS.SMALL,
};

export { Skeleton };
