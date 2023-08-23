import React, { PropsWithChildren } from "react";
import { AuthFormContainer, StyledAuthForm } from "./AuthForm.styles";

type AuthFormProps = {
  onSubmit: () => void;
};
const AuthForm: React.FC<PropsWithChildren<AuthFormProps>> = ({ onSubmit, children }) => {
  return (
    <AuthFormContainer>
      <StyledAuthForm onSubmit={onSubmit}>{children}</StyledAuthForm>
    </AuthFormContainer>
  );
};

export default AuthForm;
