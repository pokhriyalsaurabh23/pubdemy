import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
