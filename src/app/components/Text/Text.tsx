import type { FC, ReactNode, HTMLProps } from "react";
import type { TEXTS_TYPES } from "constant";
import { createElement } from "react";
import { TEXTS } from "constant";
import classnames from "classnames";
import styles from "./Text.module.scss";

interface Props extends HTMLProps<HTMLElement> {
  type?: TEXTS_TYPES;
  isError?: boolean;
  isBold?: boolean;
  isMarginless?: boolean;
  isTruncated?: boolean;
  isSecondaryColour?: boolean;
  children?: ReactNode | ReactNode[];
}

const Text: FC<Props> = ({
  isTruncated,
  isMarginless,
  isBold,
  type = TEXTS.PARAGRAPH,
  children,
  isSecondaryColour,
  className,
  ...rest
}) => {
  const element = type === "footnote" ? "p" : type ?? "p";

  const props = {
    ...rest,
    className: classnames(
      styles.root,
      styles[type],
      isMarginless ? styles.noMargin : styles.marginBottom,
      isBold && styles.bold,
      isTruncated && "truncate",
      isSecondaryColour && styles.secondaryColour,
      className
    ),
  };
  return createElement(element, props, children);
};

Text.defaultProps = {
  isSecondaryColour: false,
  type: TEXTS.PARAGRAPH,
  isBold: false,
  isMarginless: false,
  isTruncated: false,
};

export { Text };
