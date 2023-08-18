import React from "react";
import { useAuthState } from "../common/hooks/useAuthState";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const { user } = useAuthState();
  console.log(user);

  return user ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      replace
    />
  );
};

export default ProtectedRoute;
