import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./index";

describe("Button component", () => {
  it("renders with text prop", () => {
    const text = "Click me";
    const { getByText } = render(<Button>{text}</Button>);

    expect(getByText(text)).toBeInTheDocument();
  });

  it("calls onClick prop function when clicked", () => {
    const text = "Click me";
    const onClickMock = jest.fn();
    const { getByText } = render(<Button onClick={onClickMock}>{text}</Button>);

    const button = getByText(text);

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });
});
