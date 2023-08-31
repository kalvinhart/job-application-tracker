import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../modules/auth/context/AuthContext";

const ProtectedRoute: React.FC = () => {
  const { authState } = useAuth();

  return authState.user ? (
    <Outlet />
  ) : (
    <Navigate
      to="/auth/login"
      replace
    />
  );
};

export default ProtectedRoute;
