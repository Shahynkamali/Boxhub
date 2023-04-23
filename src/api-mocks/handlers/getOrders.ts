import type {
  ConditionTypes,
  ContainerType,
  ORDER,
  SizeTypes,
  StatusTypes,
} from "mocks/fixtures";
import { rest } from "msw";
import { API_RESOURCE } from "constant";
import { delayedResponse, filterOrders, sortByCreationDate } from "mocks/utils";

const BASE_URL_ORDERS = `/mock-api/${API_RESOURCE.ORDERS}*`;

const getOrders = rest.get(
  BASE_URL_ORDERS,
  ({ url }, _, { status: returnStatus, json }) => {
    const status = url.searchParams.get("status") as StatusTypes;
    const condition = url.searchParams.get("condition") as ConditionTypes;
    const size = url.searchParams.get("size") as SizeTypes;
    const type = url.searchParams.get("type") as ContainerType;

    return delayedResponse(
      returnStatus(200),
      json(
        sortByCreationDate<ORDER>([
          ...filterOrders({
            status,
            condition,
            size,
            type,
          }),
        ])
      )
    );
  }
);

export { getOrders };
