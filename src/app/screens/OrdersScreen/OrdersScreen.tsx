import type { FC } from "react";
import { useOrdersQuery } from "./useOrdersQuery";
import { Box, Container, Text } from "@/app/components";
import { TEXTS } from "@/app/shared/constant";
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
      <Text type={TEXTS.H1}>Orders</Text>
      <Box>{renderOrders()}</Box>
    </Container>
  );
};

export { OrdersScreen };
