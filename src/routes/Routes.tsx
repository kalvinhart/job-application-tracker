import React from "react";
import { Routes as RoutesList, Route } from "react-router-dom";
import { LoginPage } from "../modules/auth/components/LoginPage";
import { PageLayout } from "../layouts/PageLayout";
import { Dashboard } from "../modules/dashboard/components/Dashboard";
import { MyJobs } from "../modules/jobs/components/MyJobs";
import ProtectedRoute from "./ProtectedRoute";

const Routes: React.FC = () => {
  return (
    <RoutesList>
      <Route
        path="/login"
        Component={LoginPage}
      />

      <Route Component={ProtectedRoute}>
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
      </Route>
    </RoutesList>
  );
};

export default Routes;
