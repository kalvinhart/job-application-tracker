import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthPage } from "../modules/auth/components/AuthPage";
import { PageLayout } from "../layouts/PageLayout";
import { Dashboard } from "../modules/dashboard/components/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import { LoginPanel } from "../modules/auth/components/LoginPanel";
import { RegisterPanel } from "../modules/auth/components/RegisterPanel";
import { MyJobsPage } from "../modules/jobs/components/MyJobsPage";
import { JobDetailsPage } from "../modules/job-details/components/JobDetailsPage";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage />,
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
          {
            path: "/job/:id",
            element: <JobDetailsPage />,
          },
        ],
      },
    ],
  },
]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
