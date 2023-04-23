import { rest } from "msw";
import { API_RESOURCE } from "constant";
import { delayedResponse } from "mocks/utils";
import { ORDER, ORDERS } from "mocks/fixtures";
import { sortByCreationDate } from "@/app/shared/utilities/sortByCreationDate";

const BASE_URL_ORDERS = `/mock-api/${API_RESOURCE.ORDERS}*`;

const getOrders = rest.get(
  BASE_URL_ORDERS,
  (_path, _resolver, { status, json }) => {
    return delayedResponse(
      status(200),
      json({
        data: sortByCreationDate<ORDER>([...ORDERS]),
      })
    );
  }
);

export { getOrders };
