import type { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  Badge,
  Column,
  Columns,
  Text,
} from "@/app/components";
import { useState } from "react";
import { ORDER } from "@/api-mocks/fixtures";
import { BADGES, COLUMNS, TEXTS } from "@/app/shared/constant";

interface Props {
  order: ORDER;
}

const mapOrderStatus = {
  delivered: BADGES.SUCCES,
  "in-progress": BADGES.SECONDARY,
  pending: BADGES.PRIMARY,
} as const;

const OrderLineItem: FC<Props> = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetIsOpen = () => setIsOpen((prevState) => !prevState);

  return (
    <Accordion hasBorderBottom isOpen={isOpen} setIsOpen={handleSetIsOpen}>
      <AccordionHeader>
        <Columns>
          <Column className="mt-3 relative">
            <Text isMarginless isBold type={TEXTS.H2}>
              {order.customer}
            </Text>
            <Text type={TEXTS.H4}>{order.type}</Text>
            <Text type={TEXTS.FOOTNOTE}>SKU: {order.sku}</Text>
            <Badge
              className="absolute top-1/2 transform -translate-y-1/2 transition-all right-8"
              theme={mapOrderStatus[order.status]}
            >
              {order.status}
            </Badge>
          </Column>
        </Columns>
      </AccordionHeader>
      <AccordionContent>
        <Columns>
          <Column columnWidth={COLUMNS.SMALL}>
            <Text isBold type={TEXTS.H5}>
              Date of order creation
            </Text>
            <Text isBold type={TEXTS.H5}>
              Size
            </Text>
            <Text>{order.size}</Text>
            <Text>{order.created}</Text>
            <Text isBold type={TEXTS.H5}>
              Condition
            </Text>
            <Text>{order.condition}</Text>
          </Column>
        </Columns>
      </AccordionContent>
    </Accordion>
  );
};

export { OrderLineItem };
