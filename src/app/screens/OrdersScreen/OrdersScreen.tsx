import type { FC } from "react";
import { useOrdersQuery } from "./useOrdersQuery";
import { Badge, Box, Column, Columns, Container, Text } from "@/app/components";
import { TEXTS } from "@/app/shared/constant";

const OrdersScreen: FC = () => {
  const { data, isLoading, error } = useOrdersQuery();

  if (isLoading) return <div>loading...</div>;
  if (!!error) return <div>oeps!</div>;

  return (
    <Container>
      <Text type={TEXTS.H1}>Orders</Text>
      {data?.data?.map((order) => (
        <Box key={order.id}>
          <Columns>
            <Column columnWidth="small">
              <div className="w-12 h-12 bg-red-400">
                <img src={order.photo} alt="" />
              </div>
            </Column>
            <Column>
              <Text isBold type={TEXTS.H2}>
                {order.customer}
              </Text>
              <Text type={TEXTS.H3}>{order.type}</Text>
              <Text type={TEXTS.H4}>{order.condition}</Text>
            </Column>
            <Column>
              <Badge>{order.status}</Badge>
            </Column>
          </Columns>
        </Box>
      ))}
    </Container>
  );
};

export { OrdersScreen };
