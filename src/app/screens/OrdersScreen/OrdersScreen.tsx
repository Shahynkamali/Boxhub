import type { FC, MouseEvent } from "react";
import type { ORDER } from "@/api-mocks/fixtures";
import type { FilterOptions } from "./useOrdersQuery";
import { useState } from "react";
import { useOrdersQuery } from "./useOrdersQuery";
import { Box, Column, Columns, Container, Text } from "components";
import { COLUMNS, TEXTS } from "constant";
import { OrderLineItem } from "./OrderLineItem";
import { StatusDropdown } from "./StatusDropdown";
import { SizeDropdown } from "./SizeDropdown";
import { ConditionDropdown } from "./ConditionDropdown";
import { TypeDropdown } from "./TypeDropdown";
import { SkeletonOrderLineItem } from "./OrderLineItem/SkeletonLineItem";

const OrdersScreen: FC = () => {
  const [filterBy, setFilterBy] = useState<FilterOptions>({
    size: "all",
    status: "all",
    condition: "all",
    type: "all",
  });

  const { data, isLoading, error } = useOrdersQuery({ filterBy });

  const handleClick = ({ target }: MouseEvent<HTMLButtonElement>) => {
    const { value, name } = target as HTMLButtonElement;

    setFilterBy((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const renderOrder = (order: ORDER) => (
    <OrderLineItem order={order} key={order.id} />
  );

  const renderOrders = () => data?.map(renderOrder);

  const renderSkeleton = (index: number) => (
    <SkeletonOrderLineItem key={index} />
  );

  const renderSkeletons = () =>
    Array.from(Array(10).keys()).map(renderSkeleton);

  const renderNoResults = () => <Text type="h2">No Results</Text>;

  const renderContent = () => {
    if (isLoading) return renderSkeletons();
    if (!data?.length) return renderNoResults();
    return renderOrders();
  };

  if (!!error) return <Text>Something went wrong!</Text>;

  return (
    <Container>
      <Columns>
        <Column columnWidth={COLUMNS.SIX}>
          <Text className="text-center" type={TEXTS.H1}>
            Orders
          </Text>
        </Column>
      </Columns>
      <Columns className="flex flex-row justify-center">
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
      <Box>{renderContent()}</Box>
    </Container>
  );
};

export { OrdersScreen };
