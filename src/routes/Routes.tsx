import React from "react";
import { Routes as RoutesList, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { PageLayout } from "../layouts/PageLayout";

const Routes: React.FC = () => {
  return (
    <RoutesList>
      <Route Component={PageLayout}>
        <Route
          path="/login"
          Component={LoginPage}
        />
      </Route>
    </RoutesList>
  );
};

export default Routes;
