import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { CourseModel } from "../../models/course.model";
import CartItem from "./checkoutcartitem.component";
import { Link } from "react-router-dom";
import CheckoutBillingAddress from "./checkoutbilling.component";
import CheckoutPaymentMethod from "./checkoutpayment.component";
import OrderSummary from "./orderSummary.component";

const Checkout: React.FC = () => {
  const cart = useSelector((store: RootState) => store.cart);
  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "India"
  ];

  const states = [
    "California",
    "New York",
    "Texas",
    "Florida",
    "Illinois",
    "Delhi",
    "Bangalore"
  ];

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Checkout</h1>
      <div className="row">
        <div className="col-md-6">
          <CheckoutBillingAddress countries={countries} states={states} />
          <CheckoutPaymentMethod />
          <h3>Order</h3>
          {cart.length > 0 ? (
            cart.map((item: CourseModel) => (
              <CartItem item={item} key={item.id} />
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="col-md-6 bg-light">
          <OrderSummary cart={cart} />
          <Link to="/dashboard/ordercomplete">
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: "#8b3dff", color: "white" }}
            >
              Complete Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
