import React from "react";
import { Routes as RoutesList, Route, BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../modules/auth/components/LoginPage";
import { PageLayout } from "../layouts/PageLayout";
import { Dashboard } from "../modules/dashboard/components/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import { LoginPanel } from "../modules/auth/components/LoginPanel";
import { RegisterPanel } from "../modules/auth/components/RegisterPanel";
import { MyJobsPage } from "../modules/jobs/components/MyJobsPage";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <LoginPage />,
    children: [
      {
        path: "/auth/login",
        element: <LoginPanel />,
      },
      {
        path: "/auth/register",
        element: <RegisterPanel />,
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <PageLayout />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/jobs",
            element: <MyJobsPage />,
          },
        ],
      },
    ],
  },
]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;

  return (
    <BrowserRouter>
      <RoutesList>
        <Route
          path="/auth"
          Component={LoginPage}
        >
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
