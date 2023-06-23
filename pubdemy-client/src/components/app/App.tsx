import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "../error/error.component";
import Login from "../login/login.component";
import Dashboard from "../dashboard/dashboard.component";
import ProtectedRoute from "../protectedroute/protectedroute";
import SignUp from "../signup/signup";
import ListOfCourses from "../listofcourses/listofcourses.component";
import Header from "../header/header.component";
import Footer from "../footer/footer.component";
import CourseDetail from "../coursedetails/courseDetail.component";
import Cart from "../cart/cart.component";
import Checkout from "../checkout/checkout.component";
import OrderCompleteSuccess from "../ordercomplete/ordercomplete.component";

export default function App() {
  return (
    <>
      {/* <AuthProvider> */}
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            >
              <Route index path="" element={<ListOfCourses />} />
              <Route path="coursedetails/:id" element={<CourseDetail />} /> 
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="ordercomplete" element={<OrderCompleteSuccess />} />
            </Route>

            {/* Wild card route handler - 404 */}
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
        <Footer/>
      {/* </AuthProvider> */}
    </>
  );
}
