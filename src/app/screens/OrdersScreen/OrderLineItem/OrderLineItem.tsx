import type { FC, MouseEvent } from "react";
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
import { MapDialog } from "./MapDialog";
interface Props {
  order: ORDER;
}

const mapOrderStatus = {
  delivered: BADGES.SUCCES,
  "in-progress": BADGES.SECONDARY,
  pending: BADGES.PRIMARY,
} as const;

const fallBackImage = "https://source.unsplash.com/random/50×50/?container";

const OrderLineItem: FC<Props> = ({
  order: {
    status,
    photo,
    type,
    customer,
    created,
    condition,
    sku,
    size,
    origin_address,
    shipping_address,
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.stopPropagation();
    setIsModalOpen((prevState) => !prevState);
  };

  const handleSetIsOpen = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <Accordion
        data-testid="line-item"
        hasBorderBottom
        isOpen={isOpen}
        setIsOpen={handleSetIsOpen}
      >
        <AccordionHeader>
          <Columns>
            <Column columnWidth={COLUMNS.ONE}>
              <Image src={photo} fallback={fallBackImage} />
            </Column>
            <Column className={styles.title}>
              <Text isMarginless isBold type={TEXTS.H2}>
                {customer}
              </Text>
              <Text type={TEXTS.FOOTNOTE}>
                Ordered: {new Date(created).toLocaleDateString()}
              </Text>
              <Badge
                name={status}
                className={styles.orderStatus}
                theme={mapOrderStatus[status]}
              >
                {status}
              </Badge>
              <Columns isMarginless className={styles.buttonContainer}>
                <Column className="pl-0 pb-0" columnWidth={COLUMNS.SMALL}>
                  <Button onClick={handleOpenModal}>View Map</Button>
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
              <Text data-testid="condition" className="ml-4">
                {condition}
              </Text>
            </Column>
            <Column className={styles.textContainer}>
              <Text isBold type="h5">
                Type:
              </Text>
              <Text data-testid="type" className="ml-4">
                {type}
              </Text>
            </Column>
          </Columns>
          <Columns isMarginless>
            <Column className={styles.textContainer}>
              <Text isBold type="h5">
                SKU:
              </Text>
              <Text className="ml-4">{sku}</Text>
            </Column>
            <Column className={styles.textContainer}>
              <Text isBold type="h5">
                Size:
              </Text>
              <Text data-testid="size" className="ml-4">
                {size}
              </Text>
            </Column>
          </Columns>
        </AccordionContent>
      </Accordion>
      <MapDialog
        originAddress={origin_address}
        shippingAddress={shipping_address}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export { OrderLineItem };
