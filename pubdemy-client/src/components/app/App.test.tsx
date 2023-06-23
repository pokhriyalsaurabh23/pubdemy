import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "../login/login.component";
import SignUp from "../signup/signup";
import ListOfCourses from "../listofcourses/listofcourses.component";
import CourseDetail from "../coursedetails/courseDetail.component";
import Cart from "../cart/cart.component";
import Checkout from "../checkout/checkout.component";
import OrderCompleteSuccess from "../ordercomplete/ordercomplete.component";
import ProtectedRoute from "../protectedroute/protectedroute";
import Dashboard from "../dashboard/dashboard.component";
import Error from "../error/error.component";

describe("App", () => {
  test("renders Login component when the path is /", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            ></Route>
             <Route index path="" element={<ListOfCourses />} />
              <Route path="coursedetails/:id" element={<CourseDetail />} /> 
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="ordercomplete" element={<OrderCompleteSuccess />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByTestId("login-component")).toBeInTheDocument();
  });

  test("renders ListOfCourses component when the path is /dashboard", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            ></Route>
             <Route index path="" element={<ListOfCourses />} />
              <Route path="coursedetails/:id" element={<CourseDetail />} /> 
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="ordercomplete" element={<OrderCompleteSuccess />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByTestId("list-of-courses-component")).toBeInTheDocument();
  });

  // Add more tests for other routes

  test("renders Error component when the path is not found", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<SignUp />} />
          <Route index path="" element={<ListOfCourses />} />
              <Route path="coursedetails/:id" element={<CourseDetail />} /> 
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="ordercomplete" element={<OrderCompleteSuccess />} />
              <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByTestId("error-component")).toBeInTheDocument();
  });
});

test("renders App component and matches snapshot", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.getByTestId("app-component")).toMatchSnapshot();
});
