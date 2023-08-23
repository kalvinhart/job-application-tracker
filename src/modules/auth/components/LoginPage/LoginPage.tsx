import React from "react";
import { LoginMain } from "./LoginPage.styles";
import { WelcomePanel } from "../WelcomePanel";
import { Outlet } from "react-router-dom";

const LoginPage: React.FC = () => {
  return (
    <LoginMain>
      <WelcomePanel />
      <Outlet />
    </LoginMain>
  );
};

export default LoginPage;
