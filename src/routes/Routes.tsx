import React from "react";
import { Routes as RoutesList, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";

const Routes: React.FC = () => {
  return (
    <RoutesList>
      <Route
        path="/login"
        Component={LoginPage}
      />
    </RoutesList>
  );
};

export default Routes;
