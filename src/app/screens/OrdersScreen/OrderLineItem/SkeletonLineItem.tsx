import type { FC } from "react";
import {
  Accordion,
  AccordionHeader,
  Column,
  Columns,
  Skeleton,
} from "@/app/components";

import { COLUMNS } from "@/app/shared/constant";
import styles from "./OrderLineItem.module.scss";

const SkeletonOrderLineItem: FC = () => {
  return (
    <Accordion hasBorderBottom isOpen={false} setIsOpen={() => null}>
      <AccordionHeader>
        <Columns>
          <Column columnWidth={COLUMNS.ONE}>
            <div className="h-48 w-full">
              <Skeleton width="full" height="full" />
            </div>
          </Column>
          <Column className={styles.title}>
            <Skeleton width="small" height="medium" />
            <Skeleton width="small" height="small" />
            <Skeleton
              className={styles.orderStatus}
              width="small"
              height="small"
            />
          </Column>
        </Columns>
      </AccordionHeader>
    </Accordion>
  );
};

export { SkeletonOrderLineItem };
