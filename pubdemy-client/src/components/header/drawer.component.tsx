import React from "react";
import { UserModel } from "../../models/user.model";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/reducers/login.reducer";
import getInitials from "../../utils/utils";

interface DrawerProps {
  user: UserModel | null;
  toggleDrawer: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ user, toggleDrawer }) => {
  const dispatch = useDispatch();
  const name = user ? user.name : "";
  const email = user ? user.email : "";

  const handleLogout = () => {
    toggleDrawer();
    dispatch(logoutUser());
  };

  return (
    <div className="drawer" style={{ position: "absolute", top: "100%", zIndex: 100 }}>
      <div className="card shadow">
        <div className="card-body p-3">
          <div className="drawer-header d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-dark rounded-circle" onClick={toggleDrawer}>
              {getInitials(name)}
            </button>
            <div className="drawer-title ms-2">
              <h5>{name}</h5>
              <p>{email}</p>
            </div>
          </div>
          <hr />
          <div className="drawer-options">
            <ul className="list-unstyled">
              <li className="mb-2 ms-2">My Cart</li>
              <li className="mb-2 ms-2">Help</li>
              <li className="mb-2 ms-2">My Learning</li>
              <li>
                <button type="button" className="btn rounded-0 btn-sm" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
