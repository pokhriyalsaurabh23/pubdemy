import React from "react";
import { CourseModel } from "../../models/course.model";
import CartItem from "./checkoutcartitem.component";

const OrderSummary: React.FC<{ cart: CourseModel[] }> = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const totalDiscounted = cart.reduce(
    (sum, item) => sum + item.discountedPrice,
    0
  );
  const discount = total - totalDiscounted;

  const renderCartItems = () => {
    return cart.map((item: CourseModel) => (
      <CartItem item={item} key={item.id} />
    ));
  };

  return (
    <div className="mb-4">
      <h2>Summary</h2>
      <p>Original Price: ₹{total}</p>
      <p>Discounts: -₹{discount}</p>
      <hr style={{ width: "200px" }} />
      <p>Total: ₹ {totalDiscounted}</p>
      <p className="text-secondary mt-2 ms-2" style={{ fontSize: "0.8rem" }}>
        By completing your purchase you agree to these{" "}
        <a className="fw-bold ms-1" style={{ color: "#8b3dff" }}>
          Terms of Service
        </a>
      </p>
    </div>
  );
};

export default OrderSummary;
