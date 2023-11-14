import React from "react";
import { Link } from "react-router-dom";
import { H2, Span } from "../../../../styles/TypographyStyles";
import { RegisterPanelSection } from "./RegisterPanel.styles";
import { RegisterForm } from "../RegisterForm";

const RegisterPanel: React.FC = () => {
  return (
    <RegisterPanelSection>
      <H2>Welcome back! Sign in to your account</H2>

      <RegisterForm />

      <Span>
        Already have an account? <Link to="/auth/login">Sign in here</Link>
      </Span>
    </RegisterPanelSection>
  );
};

export default RegisterPanel;
