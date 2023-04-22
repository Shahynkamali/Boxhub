import type { FC, HTMLProps } from "react";
import classNames from "classnames";
import styles from "./ProgressBar.module.scss";

interface Props extends HTMLProps<HTMLDivElement> {
  completion: number;
}
const ProgressBar: FC<Props> = ({ completion, className, ...rest }) => {
  return (
    <div
      role="progressbar"
      {...rest}
      className={classNames(styles.root, className)}
    >
      <div
        className={styles.bar}
        style={{
          width: `${completion}%`,
        }}
      >
        <span className="sr-only">completed: {completion}%</span>
      </div>
    </div>
  );
};

ProgressBar.defaultProps = {
  completion: 0,
};

export { ProgressBar };
