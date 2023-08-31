import React from "react";
import { Routes as RoutesList, Route, BrowserRouter } from "react-router-dom";
import { LoginPage } from "../modules/auth/components/LoginPage";
import { PageLayout } from "../layouts/PageLayout";
import { Dashboard } from "../modules/dashboard/components/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import { LoginPanel } from "../modules/auth/components/LoginPanel";
import { RegisterPanel } from "../modules/auth/components/RegisterPanel";
import { MyJobsPage } from "../modules/jobs/components/MyJobsPage";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
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
              Component={MyJobsPage}
            />

            <Route
              path="/"
              Component={Dashboard}
            />
          </Route>
        </Route>
      </RoutesList>
    </BrowserRouter>
  );
};

export default Routes;
