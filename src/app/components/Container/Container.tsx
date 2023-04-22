import type { HTMLProps, FC } from "react";
import { CONTAINERS, CONTAINERS_TYPES } from "@/app/shared/constant";
import styles from "./Container.module.scss";
import classNames from "classnames";

interface Props extends HTMLProps<HTMLDivElement> {
  isPaddingless?: boolean;
  containerWidth?: CONTAINERS_TYPES;
}

const Container: FC<Props> = ({
  children,
  containerWidth = CONTAINERS.SMALL,
}) => {
  return (
    <section className={classNames(styles.root, styles[containerWidth])}>
      {children}
    </section>
  );
};

export { Container };
