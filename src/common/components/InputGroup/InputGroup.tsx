import React, { PropsWithChildren } from "react";
import { StyledInputGroup } from "./InputGroup.styles";

const InputGroup: React.FC<PropsWithChildren> = ({ children }) => {
  return <StyledInputGroup>{children}</StyledInputGroup>;
};

export default InputGroup;
