import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { renderWithProviders, waitForLoading } from "utilities";
import { App } from "./App";

describe("App", () => {
  test("renders", async () => {
    renderWithProviders(<App />);

    await waitForLoading();

    expect(screen.getByText("Orders")).toBeInTheDocument();
  });
});
