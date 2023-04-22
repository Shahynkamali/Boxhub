import type { FC } from "react";
import { useOrdersQuery } from "./useOrdersQuery";
import { Box, Column, Columns, Container, Text } from "@/app/components";
import { COLUMNS, TEXTS } from "@/app/shared/constant";
import { OrderLineItem } from "./OrderLineItem";
import { ORDER } from "@/api-mocks/fixtures";

const OrdersScreen: FC = () => {
  const { data, isLoading, error } = useOrdersQuery();

  if (isLoading) return <div>loading...</div>;
  if (!!error) return <div>oeps!</div>;

  const renderOrder = (order: ORDER) => (
    <OrderLineItem order={order} key={order.id} />
  );
  const renderOrders = () => data?.data.map(renderOrder);

  return (
    <Container>
      <Columns>
        <Column columnWidth={COLUMNS.SIX}>
          <Text className="text-center" type={TEXTS.H1}>
            Orders
          </Text>
        </Column>
      </Columns>
      <Box>{renderOrders()}</Box>
    </Container>
  );
};

export { OrdersScreen };
