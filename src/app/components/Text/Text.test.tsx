import type { TEXTS_TYPES } from "constant";
import { TEXTS } from "constant";
import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("<Text/>", () => {
  let mockIsTruncated: boolean;
  let mockType: TEXTS_TYPES;
  let textValue: string;

  beforeEach(() => {
    mockIsTruncated = false;

    mockType = TEXTS.H1;
    textValue = "If you like pina coladas";
  });

  const renderScreen = () =>
    render(
      <Text isTruncated={mockIsTruncated} type={mockType}>
        {textValue}
      </Text>
    );

  it.each(Object.values(TEXTS))(
    "should create the correct HTML %s element when the prop type has the prop value",
    (type) => {
      const element = type === "footnote" ? "p" : type;
      mockType = type;

      renderScreen();

      const { tagName } = screen.getByText(textValue);

      expect(tagName.toLowerCase()).toBe(element);
    }
  );

  it("should truncate text element when the isTruncated prop is true", () => {
    mockIsTruncated = true;

    renderScreen();

    expect(screen.getByRole("heading", { name: textValue })).toHaveClass(
      "truncate",
      { exact: false }
    );
  });
});
