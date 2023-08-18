import React, { PropsWithChildren } from "react";
import { StyledInputErrorText } from "./InputErrorText.styles";

const InputErrorText: React.FC<PropsWithChildren> = ({ children }) => {
  return <StyledInputErrorText>{children}</StyledInputErrorText>;
};

export default InputErrorText;
