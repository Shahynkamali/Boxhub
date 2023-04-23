import type { FC } from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  Badge,
  Column,
  Columns,
  Text,
  Image,
  Button,
} from "@/app/components";
import { ORDER } from "@/api-mocks/fixtures";
import { BADGES, COLUMNS, TEXTS } from "@/app/shared/constant";
import styles from "./OrderLineItem.module.scss";
interface Props {
  order: ORDER;
  hasBorderBottom?: boolean;
}

const mapOrderStatus = {
  delivered: BADGES.SUCCES,
  "in-progress": BADGES.SECONDARY,
  pending: BADGES.PRIMARY,
} as const;

const fallBackImage = "https://source.unsplash.com/random/50×50/?container";

const OrderLineItem: FC<Props> = ({ order, hasBorderBottom }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetIsOpen = () => setIsOpen((prevState) => !prevState);

  return (
    <Accordion
      hasBorderBottom={!hasBorderBottom}
      isOpen={isOpen}
      setIsOpen={handleSetIsOpen}
    >
      <AccordionHeader>
        <Columns>
          <Column columnWidth={COLUMNS.ONE}>
            <Image src={order.photo} fallback={fallBackImage} />
          </Column>
          <Column className={styles.title}>
            <Text isMarginless isBold type={TEXTS.H2}>
              {order.customer}
            </Text>
            <Text type={TEXTS.FOOTNOTE}>
              Ordered: {new Date(order.created).toLocaleDateString()}
            </Text>
            <Badge
              className={styles.orderStatus}
              theme={mapOrderStatus[order.status]}
            >
              {order.status}
            </Badge>
            <Columns isMarginless className={styles.buttonContainer}>
              <Column className="pl-0 pb-0" columnWidth={COLUMNS.SMALL}>
                <Button>View Map</Button>
              </Column>
            </Columns>
          </Column>
        </Columns>
      </AccordionHeader>
      <AccordionContent>
        <Columns isMarginless>
          <Column className={styles.textContainer}>
            <Text isBold type="h5">
              Condition:
            </Text>
            <Text className="ml-4">{order.condition}</Text>
          </Column>
          <Column className={styles.textContainer}>
            <Text isBold type="h5">
              Type:
            </Text>
            <Text className="ml-4">{order.type}</Text>
          </Column>
        </Columns>
        <Columns isMarginless>
          <Column className={styles.textContainer}>
            <Text isBold type="h5">
              SKU:
            </Text>
            <Text className="ml-4">{order.sku}</Text>
          </Column>
          <Column className={styles.textContainer}>
            <Text isBold type="h5">
              Size:
            </Text>
            <Text className="ml-4">{order.size}</Text>
          </Column>
        </Columns>
      </AccordionContent>
    </Accordion>
  );
};

export { OrderLineItem };
