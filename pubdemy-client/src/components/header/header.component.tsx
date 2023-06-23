import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartItemsCount from "../cartitemscount/cartitemscount";
import { useGetAuthenticateUserStatus } from "../../hooks/authHook";
import { UserModel } from "../../models/user.model";
import SearchBar from "./searchbar";
import getInitials from "../../utils/utils";
import Drawer from "./drawer.component";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  let userStatus = useGetAuthenticateUserStatus();
  const storedUser = localStorage.getItem("user");
  const user: UserModel | null = storedUser ? JSON.parse(storedUser) : null;
  const name = user ? user.name : "";

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-3">
      <div className="row g-3 flex-wrap justify-content-start">
        <div className="col-sm-1 ms-4 me-4">
          <Link className="navbar-brand fw-bold fs-3" to="/dashboard">
            Pubdemy
          </Link>
        </div>
        <div className="col-sm-7 me-4">
          <SearchBar token={localStorage["auth-token"]} />
        </div>
        {!userStatus ? (
          <div className="col-sm ms-4 justify-content-end">
            <i className="fas fa-shopping-cart me-4"></i>
            <Link to="/">
              <button type="button" className="btn btn-outline-dark rounded-0 me-2">
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button type="button" className="btn btn-dark rounded-0 me-2">
                Sign Up
              </button>
            </Link>
            <button type="button" className="btn btn-outline-dark rounded-0">
              <i className="fa fa-globe"></i>
            </button>
          </div>
        ) : (
          <div className="col-sm-3 d-flex align-items-center justify-content-end">
            <div className="d-flex align-items-center">
              <p className="mt-2 text-secondary me-2">My Learning</p>
              <CartItemsCount />
              <i className="far fa-bell me-2"></i>
              <button
                type="button"
                className="btn btn-dark rounded-circle"
                onClick={toggleDrawer}
              >
                {getInitials(name)}
              </button>
            </div>
            {isDrawerOpen && (
              <Drawer user={user} toggleDrawer={toggleDrawer} />
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
