import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./Button.styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
  return (
    <StyledButton
      variant={variant}
      {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
