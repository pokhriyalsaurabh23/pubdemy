import React from "react";
import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import Cart from "./cart.component";

jest.mock("react-redux");

describe("Cart", () => {
  test("renders empty cart message when cart is empty", () => {
    (useSelector as jest.Mock).mockImplementation(() => []);

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
  });

  test("renders cart items when cart is not empty", () => {
    const cartItems = [
      { id: 1, title: "Course 1", price: 10 },
      { id: 2, title: "Course 2", price: 20 },
    ];
    (useSelector as jest.Mock).mockImplementation(() => cartItems);

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(screen.getByText("2 Courses in cart")).toBeInTheDocument();
    expect(screen.getByText("Course 1")).toBeInTheDocument();
    expect(screen.getByText("Course 2")).toBeInTheDocument();
  });
});
