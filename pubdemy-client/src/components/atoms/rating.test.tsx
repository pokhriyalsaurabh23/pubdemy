import React from "react";
import { render } from "@testing-library/react";

import Rating from "./rating.component";

describe("Rating", () => {
  test("renders the correct number of icons", () => {
    const maxCount = 5;
    const iconClasses = "fa fa-star";
    const { container } = render(
      <Rating maxCount={maxCount} iconClasses={iconClasses} />
    );

    const icons = container.querySelectorAll(".fa.fa-star");
    expect(icons.length).toBe(maxCount);
  });

  test("renders with the specified color", () => {
    const maxCount = 3;
    const iconClasses = "fa fa-heart";
    const color = "red";
    const { container } = render(
      <Rating maxCount={maxCount} iconClasses={iconClasses} color={color} />
    );

    const icons = container.querySelectorAll(".fa.fa-heart");
    expect(icons.length).toBe(maxCount);

    icons.forEach((icon) => {
      const computedStyle = getComputedStyle(icon);
      expect(computedStyle.color).toBe(color);
    });
  });
});
