import type { FilterOptions } from "@/app/screens/OrdersScreen/useOrdersQuery";
import { context, createResponseComposition } from "msw";
import { ORDERS } from "./fixtures";

export const delayedResponse = createResponseComposition(
  undefined,
  process.env.NODE_ENV !== "test" ? [context.delay(500)] : []
);

export type Filter = string | "all" | undefined;

export const filterOrders = (filters: FilterOptions) =>
  ORDERS.filter(
    ({ status, size, condition, type }) =>
      matchesFilter(filters.status, status) &&
      matchesFilter(filters.size, size) &&
      matchesFilter(filters.condition, condition) &&
      matchesFilter(filters.type, type)
  );

export const matchesFilter = (filter: Filter, value: string) =>
  filter === "all" || !filter || filter === value;

interface CreatedType<T> {
  created: string;
}

export const sortByCreationDate = <T extends CreatedType<T>>(
  values: CreatedType<T>[]
) =>
  values.sort(
    (a, b) => Number(new Date(a.created)) - Number(new Date(b.created))
  );
