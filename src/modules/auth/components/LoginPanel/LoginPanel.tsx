import React from "react";
import { Link } from "react-router-dom";
import { LoginPanelSection } from "./LoginPanel.styles";
import { H2, Span } from "../../../../styles/TypographyStyles";
import { LoginForm } from "../LoginForm";

const LoginPanel: React.FC = () => {
  return (
    <LoginPanelSection>
      <H2>Welcome back! Sign in to your account</H2>

      <LoginForm />

      <Span>
        Don't have an account? <Link to="/auth/register">Register here</Link>
      </Span>
    </LoginPanelSection>
  );
};

export default LoginPanel;
