import type { FC, ReactNode } from "react";
import type { ModalProps } from "@/app/components/Modal";
import type { DIALOGS_TYPES } from "constant";

import { Dialog as HeadlessUIDialog } from "@headlessui/react";
import { Box } from "@/app/components/Box";
import { Modal } from "@/app/components/Modal";
import classNames from "classnames";
import { useTailwindBreakpoints } from "hooks";
import { DIALOGS } from "constant";
import styles from "./Dialog.module.scss";

interface Props extends Omit<ModalProps, "onClose"> {
  children: ReactNode;
  onClose: () => void;
  isOverflowVisible?: boolean;
  size?: DIALOGS_TYPES;
}

const Dialog: FC<Props> = ({
  isOpen,
  onClose,
  isOverflowVisible,
  children,
  isOpaque,
  size = DIALOGS.MEDIUM,
}) => {
  const { medium } = useTailwindBreakpoints();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isOpaque={isOpaque}>
      <div className={styles.root}>
        <HeadlessUIDialog.Panel
          className={classNames(styles.dialogPanel, styles[size])}
        >
          <Box
            isMarginless
            isFullscreen={medium.lessThan}
            isOverflowVisible={isOverflowVisible}
          >
            {children}
          </Box>
        </HeadlessUIDialog.Panel>
      </div>
    </Modal>
  );
};

Dialog.defaultProps = {
  size: DIALOGS.MEDIUM,
  isOverflowVisible: false,
  isOpaque: true,
};

export { Dialog };
