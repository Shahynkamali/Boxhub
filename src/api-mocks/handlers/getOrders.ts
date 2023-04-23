import { rest } from "msw";
import { API_RESOURCE } from "constant";
import { delayedResponse } from "mocks/utils";
import {
  ConditionTypes,
  ContainerType,
  ORDER,
  ORDERS,
  SizeTypes,
  StatusTypes,
} from "mocks/fixtures";
import { sortByCreationDate } from "@/app/shared/utilities/sortByCreationDate";
import { FilterOptions } from "@/app/screens/OrdersScreen/useOrdersQuery";

const BASE_URL_ORDERS = `/mock-api/${API_RESOURCE.ORDERS}*`;

const filterBoxes = (filters: FilterOptions) => {
  return ORDERS.filter(({ status, size, condition, type }) => {
    return (
      matchesFilter(filters.status, status) &&
      matchesFilter(filters.size, size) &&
      matchesFilter(filters.condition, condition) &&
      matchesFilter(filters.type, type)
    );
  });
};

function matchesFilter(filter: string | "all" | undefined, value: string) {
  return filter === "all" || !filter || filter === value;
}

const getOrders = rest.get(
  BASE_URL_ORDERS,
  ({ url }, _resolver, { status, json }) => {
    const statusParam = url.searchParams.get("status") as StatusTypes;
    const conditionParam = url.searchParams.get("condition") as ConditionTypes;
    const typeParam = url.searchParams.get("type") as ContainerType;
    const sizeParam = url.searchParams.get("size") as SizeTypes;

    return delayedResponse(
      status(200),
      json({
        data: sortByCreationDate<ORDER>([
          ...filterBoxes({
            status: statusParam,
            condition: conditionParam,
            size: sizeParam,
            type: typeParam,
          }),
        ]),
      })
    );
  }
);

export { getOrders };
