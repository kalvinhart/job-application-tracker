import React from "react";
import { useAuthState } from "../common/hooks/useAuthState";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const { user } = useAuthState();

  return user ? (
    <Outlet />
  ) : (
    <Navigate
      to="/auth/login"
      replace
    />
  );
};

export default ProtectedRoute;
