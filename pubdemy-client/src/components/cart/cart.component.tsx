import CartItem from "../cartitem/cartitem.component";
import { CourseModel } from "../../models/course.model";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((store: RootState) => store.cart);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const totalDiscounted = cart.reduce((sum, item) => sum + item.discountedPrice, 0);
  const percentageOff = ((total - totalDiscounted) / total) * 100;

  return (
    <div>
      <div className="ms-5">
        <h2 className="mt-4">Shopping Cart</h2>
      </div>
      <div className="d-flex">
        <div>
          {cart.length > 0 ? (
            <div className="d-flex flex-column ms-5">
              <p>{cart.length} Courses in cart</p>
              {cart.map((item: CourseModel) => (
                <CartItem item={item} key={item.id} />
              ))}
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="ms-4">
          <p className="text-secondary m-0" style={{ fontSize: "1.5rem" }}>Total : </p>
          <p className="fw-bold m-0" style={{fontSize:"2rem"}}>₹. {totalDiscounted.toFixed(2)}</p>
          <p className="card-text text-secondary text-decoration-line-through m-0">₹. {total.toFixed(2)}</p>
          <p className="card-text text-secondary">{percentageOff.toFixed(2)} % off</p>
          <Link to="/dashboard/checkout" className="text-decoration-none text-dark">
            <button
              type="button"
              className="btn btn-primary rounded-0"
              style={{ backgroundColor: "#8b3dff", width: "205px" }}
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
