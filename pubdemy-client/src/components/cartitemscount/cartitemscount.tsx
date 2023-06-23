import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

export default function CartItemsCount() {
    const cart = useSelector((store: RootState) => store.cart);

    return (
        <Link to="/dashboard/cart" className="text-decoration-none text-dark">
        <button className="btn btn-sm border-dark rounded-0 p-2 me-2">
            <i className="fas fa-shopping-cart me-2"></i>
                {cart.length}
        </button>
        </Link>
    );
}
