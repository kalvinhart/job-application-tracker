import React, { LabelHTMLAttributes } from "react";
import { StyledLabel } from "./Label.styles";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  labelText: string;
};

const Label: React.FC<LabelProps> = ({ labelText, ...props }) => {
  return <StyledLabel {...props}>{labelText}</StyledLabel>;
};

export default Label;
