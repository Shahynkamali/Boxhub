import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { renderWithProviders } from "utilities";
import { App } from "./App/App";

describe("App", () => {
  test("renders", () => {
    renderWithProviders(<App />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
