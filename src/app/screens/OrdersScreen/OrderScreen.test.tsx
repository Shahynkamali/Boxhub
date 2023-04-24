import type {
  ConditionTypes,
  ContainerType,
  ORDER,
  SizeTypes,
  StatusTypes,
} from "@/api-mocks/fixtures";
import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { rest } from "msw";
import { server } from "mocks/server";
import { getOrders } from "@/api-mocks/handlers/getOrders";
import { renderWithProviders, waitForLoading } from "utilities";
import { OrdersScreen } from "./OrdersScreen";
import { ORDERS } from "@/api-mocks/fixtures";
import { filterOrders, sortByCreationDate } from "mocks/utils";

const renderOrders = async () => {
  renderWithProviders(<OrdersScreen />);

  await waitForLoading();
};

describe("OrdersScreen", () => {
  test("renders", async () => {
    await renderOrders();

    expect(screen.getByText("Orders")).toBeInTheDocument();
  });

  describe("Renders all orders", () => {
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

    test.each(sortByCreationDate<ORDER>([...ORDERS]))(
      "should render the list sorted by date",
      async ({ customer }) => {
        await renderOrders();

        screen
          .getAllByRole("heading", { name: customer })
          .forEach((name) => expect(name).toHaveTextContent(customer));
      }
    );
  });

  describe("Filters orders by status", () => {
    test.each(["pending", "delivered", "in-progress", "pending"])(
      "should sort the list based on %s",
      async (status) => {
        server.use(
          rest.get(getOrders.info.path, (_, response, { json }) => {
            return response(
              json(
                sortByCreationDate<ORDER>([
                  ...filterOrders({
                    status: status as StatusTypes,
                    condition: "all",
                    size: "all",
                    type: "all",
                  }),
                ])
              )
            );
          })
        );
        await renderOrders();

        screen
          .getAllByRole("status", { name: status })
          .forEach((name) => expect(name).toHaveTextContent(status));
      }
    );
  });

  describe("Filters orders by status", () => {
    test.each(["pending", "delivered", "in-progress", "pending"])(
      "should render the list based on %s",
      async (status) => {
        server.use(
          rest.get(getOrders.info.path, (_, response, { json }) => {
            return response(
              json(
                sortByCreationDate<ORDER>([
                  ...filterOrders({
                    status: status as StatusTypes,
                    condition: "all",
                    size: "all",
                    type: "all",
                  }),
                ])
              )
            );
          })
        );

        await renderOrders();

        screen
          .getAllByRole("status", { name: status })
          .forEach((name) => expect(name).toHaveTextContent(status));
      }
    );
  });

  describe("Filters orders by size", () => {
    test.each(["20ft", "40ft", "45ft"])(
      "should render the list based on %s",
      async (size) => {
        server.use(
          rest.get(getOrders.info.path, (_, response, { json }) => {
            return response(
              json(
                sortByCreationDate<ORDER>([
                  ...filterOrders({
                    status: "all",
                    condition: "all",
                    size: size as SizeTypes,
                    type: "all",
                  }),
                ])
              )
            );
          })
        );

        await renderOrders();

        screen
          .getAllByTestId("size")
          .forEach((element) => expect(element).toHaveTextContent(size));
      }
    );
  });

  describe("Filters orders by Condition", () => {
    test.each(["new", "cargo-worthy", "wind-watertight"])(
      "should render the list based on %s",
      async (condition) => {
        server.use(
          rest.get(getOrders.info.path, (_, response, { json }) => {
            return response(
              json(
                sortByCreationDate<ORDER>([
                  ...filterOrders({
                    status: "all",
                    condition: condition as ConditionTypes,
                    size: "all",
                    type: "all",
                  }),
                ])
              )
            );
          })
        );

        await renderOrders();

        screen
          .getAllByTestId("condition")
          .forEach((element) => expect(element).toHaveTextContent(condition));
      }
    );
  });

  describe("Filters orders by Type", () => {
    test.each(["standard", "high-cube"])(
      "should render the list based on %s",
      async (type) => {
        server.use(
          rest.get(getOrders.info.path, (_, response, { json }) => {
            return response(
              json(
                sortByCreationDate<ORDER>([
                  ...filterOrders({
                    status: "all",
                    condition: "all",
                    size: "all",
                    type: type as ContainerType,
                  }),
                ])
              )
            );
          })
        );

        await renderOrders();

        screen
          .getAllByTestId("type")
          .forEach((element) => expect(element).toHaveTextContent(type));
      }
    );
  });
});
