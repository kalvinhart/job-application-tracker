import React from "react";
import { LoginMain } from "./LoginPage.styles";
import { WelcomePanel } from "../WelcomePanel";
import { LoginPanel } from "../LoginPanel";

const LoginPage: React.FC = () => {
  return (
    <LoginMain>
      <WelcomePanel />
      <LoginPanel />
    </LoginMain>
  );
};

export default LoginPage;
