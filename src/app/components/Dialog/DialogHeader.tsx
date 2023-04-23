import type { FC, ReactNode } from "react";
import type { ColumnProps } from "@/app/components/Column";
import { ColumnsProps } from "@/app/components/Columns";
import { Button } from "@/app/components/Button";
import { Column } from "@/app/components/Column";
import { Columns } from "@/app/components/Columns";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Dialog.module.scss";

interface Props
  extends Pick<ColumnsProps, "isMarginless">,
    Pick<ColumnProps, "isPaddingless"> {
  children: ReactNode;
  onClose: () => void;
}

const DialogHeader: FC<Props> = ({
  children,
  onClose,
  isPaddingless,
  isMarginless,
}) => (
  <Columns
    isStackingOnMobile={false}
    isMarginless={isMarginless}
    className="items-center"
  >
    <Column isPaddingless={isPaddingless} columnWidth="one">
      {children}
    </Column>
    <Column isPaddingless={isPaddingless} columnWidth="small">
      <Button aria-label="close dialog" onClick={onClose}>
        <FontAwesomeIcon className={styles.icon} icon={faTimes} />
      </Button>
    </Column>
  </Columns>
);

DialogHeader.defaultProps = {
  isPaddingless: false,
  isMarginless: false,
};

export { DialogHeader };
