import React from "react";
import { render } from "@testing-library/react";
import Title from "./title.component";

describe("Title", () => {
  test("renders the title correctly", () => {
    const titleText = "Hello, Jest!";
    const { getByText } = render(<Title>{titleText}</Title>);
    const titleElement = getByText(titleText);
    expect(titleElement).toBeInTheDocument();
  });
});
