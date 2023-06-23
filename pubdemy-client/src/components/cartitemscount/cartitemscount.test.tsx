import React from "react";
import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import CartItemsCount from "./cartitemscount";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("CartItemsCount", () => {
  it("renders the cart items count correctly", () => {
    const cartLength = 5;
    (useSelector as jest.Mock).mockImplementation((selector: (state: RootState) => any) =>
      selector({ cart: Array(cartLength), courses: [], login: { isUserAuthenticated: false, user: null } })
    );

    render(
      <Router>
        <CartItemsCount />
      </Router>
    );

    const cartButton = screen.getByRole("button");
    expect(cartButton).toBeInTheDocument();
    expect(cartButton).toHaveTextContent(cartLength.toString());
  });

  it("renders 0 when cart is empty", () => {
    (useSelector as jest.Mock).mockImplementation((selector: (state: RootState) => any) =>
      selector({ cart: [], courses: [], login: { isUserAuthenticated: false, user: null } })
    );

    render(
      <Router>
        <CartItemsCount />
      </Router>
    );

    const cartButton = screen.getByRole("button");
    expect(cartButton).toBeInTheDocument();
    expect(cartButton).toHaveTextContent("0");
  });
});
