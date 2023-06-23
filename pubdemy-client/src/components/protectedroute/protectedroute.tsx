import React from "react";
import { useGetAuthenticateUserStatus } from "../../hooks/authHook";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: any) {
  let userStatus = useGetAuthenticateUserStatus();
  const token = localStorage.getItem("auth-token");

  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
}
