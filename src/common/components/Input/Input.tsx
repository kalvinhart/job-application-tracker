import { InputHTMLAttributes, forwardRef } from "react";
import { StyledInput } from "./Input.styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

const Input = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  return (
    <StyledInput
      ref={forwardedRef}
      {...props}
    />
  );
});

export default Input;
