import React from "react";
import { AuthMain } from "./AuthPage.styles";
import { WelcomePanel } from "../WelcomePanel";
import { Outlet } from "react-router-dom";

const AuthPage: React.FC = () => {
  return (
    <AuthMain>
      <WelcomePanel />
      <Outlet />
    </AuthMain>
  );
};

export default AuthPage;
