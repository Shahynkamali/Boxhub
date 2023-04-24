import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { rest } from "msw";
import { server } from "mocks/server";
import { getOrders } from "@/api-mocks/handlers/getOrders";
import { renderWithProviders, waitForLoading } from "utilities";
import { OrdersScreen } from "./OrdersScreen";
import { ORDER, ORDERS } from "@/api-mocks/fixtures";
import { delayedResponse, filterOrders, sortByCreationDate } from "mocks/utils";

const renderOrders = async () => {
  renderWithProviders(<OrdersScreen />);

  await waitForLoading();
};

describe("OrdersScreen", () => {
  test("renders", async () => {
    await renderOrders();

    expect(screen.getByText("Orders")).toBeInTheDocument();
  });

  test("handles an error response", async () => {
    server.use(
      rest.get(getOrders.info.path, (_, { networkError }) =>
        networkError("Failure")
      )
    );

    await renderOrders();

    expect(
      screen.getByRole("heading", {
        name: "Something went wrong!",
      })
    ).toBeInTheDocument();
  });

  test("displays an empty state", async () => {
    server.use(
      rest.get(getOrders.info.path, (_, response, { json }) => {
        return response(json([]));
      })
    );

    await renderOrders();

    expect(screen.getByText("No Results")).toBeInTheDocument();
  });

  test("should display all orders by default", async () => {
    await renderOrders();

    expect(screen.getAllByTestId("line-item")).toHaveLength(ORDERS.length);
  });

  // test.each(sortByCreationDate<ORDER>([...ORDERS]))(
  //   "should sort them from first to last by date",
  //   async ({ customer }) => {
  //     await renderOrders();
  //     const lineItsms = screen.getAllByTestId("line-item");
  //   }
  // );
});
