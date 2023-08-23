import React from "react";
import { Routes as RoutesList, Route } from "react-router-dom";
import { LoginPage } from "../modules/auth/components/LoginPage";
import { PageLayout } from "../layouts/PageLayout";
import { Dashboard } from "../modules/dashboard/components/Dashboard";
import { MyJobs } from "../modules/jobs/components/MyJobs";
import ProtectedRoute from "./ProtectedRoute";
import { LoginPanel } from "../modules/auth/components/LoginPanel";
import { RegisterPanel } from "../modules/auth/components/RegisterPanel";

const Routes: React.FC = () => {
  return (
    <RoutesList>
      <Route
        path="/auth"
        Component={LoginPage}>
        <Route
          path="/auth/login"
          Component={LoginPanel}
        />
        <Route
          path="/auth/register"
          Component={RegisterPanel}
        />
      </Route>

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
