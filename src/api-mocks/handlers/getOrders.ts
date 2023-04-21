import { rest } from "msw";
import { API_RESOURCE } from "constant";
import { delayedResponse } from "mocks/utils";
import { ORDERS } from "mocks/fixtures";

const BASE_URL_ORDERS = `/mock-api/${API_RESOURCE.ORDERS}*`;

const getOrders = rest.get(
  BASE_URL_ORDERS,
  (_path, _resolver, { status, json }) => {
    return delayedResponse(
      status(200),
      json({
        data: ORDERS,
      })
    );
  }
);

export { getOrders };
