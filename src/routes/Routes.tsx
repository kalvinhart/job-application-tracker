import React from "react";
import { Routes as RoutesList, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { PageLayout } from "../layouts/PageLayout";
import { Dashboard } from "../pages/Dashboard";
import { MyJobs } from "../pages/MyJobs";

const Routes: React.FC = () => {
  return (
    <RoutesList>
      <Route
        path="/login"
        Component={LoginPage}
      />

      <Route Component={PageLayout}>
        <Route
          path="/jobs"
          Component={MyJobs}
        />

        <Route
          path="/"
          Component={Dashboard}
        />
      </Route>
    </RoutesList>
  );
};

export default Routes;
