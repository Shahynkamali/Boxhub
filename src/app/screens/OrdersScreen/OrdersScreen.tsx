import type { FC, MouseEvent } from "react";
import type { ORDER } from "@/api-mocks/fixtures";
import type { FilterOptions } from "./useOrdersQuery";
import { useState } from "react";
import { useOrdersQuery } from "./useOrdersQuery";
import { Box, Column, Columns, Container, Text } from "components";
import { COLUMNS, TEXTS } from "@/app/shared/constant";
import { OrderLineItem } from "./OrderLineItem";
import { StatusDropdown } from "./StatusDropdown";
import { SizeDropdown } from "./SizeDropdown";
import { ConditionDropdown } from "./ConditionDropdown";
import { TypeDropdown } from "./TypeDropdown";

const OrdersScreen: FC = () => {
  const [filterBy, setFilterBy] = useState<FilterOptions>({
    size: "all",
    status: "all",
    condition: "all",
    type: "all",
  });

  const { data, isLoading, error } = useOrdersQuery({ filterBy });

  if (isLoading) return <div>loading...</div>;
  if (!!error) return <div>oeps!</div>;

  const renderOrder = (order: ORDER) => (
    <OrderLineItem order={order} key={order.id} />
  );
  const renderOrders = () => data?.data.map(renderOrder);

  const handleClick = ({ target }: MouseEvent<HTMLButtonElement>) => {
    const { value, name } = target as HTMLButtonElement;

    setFilterBy((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container>
      <Columns>
        <Column columnWidth={COLUMNS.SIX}>
          <Text className="text-center" type={TEXTS.H1}>
            Orders
          </Text>
        </Column>
      </Columns>
      <Columns>
        <Column columnWidth={COLUMNS.SMALL}>
          <StatusDropdown
            value={filterBy.status as string}
            onClick={handleClick}
          />
        </Column>
        <Column columnWidth={COLUMNS.SMALL}>
          <SizeDropdown value={filterBy.size as string} onClick={handleClick} />
        </Column>
        <Column columnWidth={COLUMNS.SMALL}>
          <ConditionDropdown
            value={filterBy.condition as string}
            onClick={handleClick}
          />
        </Column>
        <Column columnWidth={COLUMNS.SMALL}>
          <TypeDropdown value={filterBy.type as string} onClick={handleClick} />
        </Column>
      </Columns>
      <Box>{renderOrders()}</Box>
    </Container>
  );
};

export { OrdersScreen };
