import type { FC, ReactNode, HTMLProps } from "react";
import type { AnimationControls } from "framer-motion";
import classNames from "classnames";
import { motion } from "framer-motion";
import styles from "./AccordionContent.module.scss";

interface Props extends Pick<HTMLProps<HTMLDivElement>, "className"> {
  controls?: AnimationControls;
  children: ReactNode;
}

const variants = {
  expanded: { opacity: 1, height: "auto" },
  collapsed: { opacity: 0, height: 0 },
};

const AccordionContent: FC<Props> = ({ controls, children, className }) => {
  return (
    <motion.div
      initial="collapsed"
      className={classNames(styles.content, className)}
      animate={controls}
      transition={{ duration: 0.3 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export { AccordionContent };
