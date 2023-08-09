import React, { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = () => {
  return <div></div>;
};

export default Button;
