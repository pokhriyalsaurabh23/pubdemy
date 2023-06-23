import React from "react";
import { render, screen } from "@testing-library/react";
import CartItem from "./cartitem.component";

describe("CartItem", () => {
  const mockItem = {
    id: 1,
    title: "Course Title",
    imageUrl: "course-image.jpg",
    trainerName: "John Doe",
    price: 100,
    discountedPrice: 80,
    rating: 4.5,
    studentsEnrolled: 500,
    likes: 10,
    avatarUrl: "avatar.jpg",
    description: "Course description",
  };

  test("renders course title and trainer name", () => {
    render(<CartItem item={mockItem} />);
    expect(screen.getByText("Course Title")).toBeInTheDocument();
    expect(screen.getByText("By John Doe")).toBeInTheDocument();
  });

  test("renders course price and discounted price", () => {
    render(<CartItem item={mockItem} />);
    expect(screen.getByText("₹.80")).toBeInTheDocument();
    expect(screen.getByText("₹.100")).toBeInTheDocument();
  });

  test("renders course image", () => {
    render(<CartItem item={mockItem} />);
    const courseImage = screen.getByAltText("Course Title");
    expect(courseImage).toBeInTheDocument();
    expect(courseImage).toHaveAttribute("src", "course-image.jpg");
  });

  test("renders course rating and students enrolled", () => {
    render(<CartItem item={mockItem} />);
    expect(screen.getByText("4.5")).toBeInTheDocument();
    expect(screen.getByText("(500 ratings)")).toBeInTheDocument();
  });
});
