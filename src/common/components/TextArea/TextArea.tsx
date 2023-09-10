import React, { TextareaHTMLAttributes, forwardRef } from "react";
import { StyledTextArea } from "./TextArea.styles";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {};

const TextArea: React.FC<TextAreaProps> = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  return (
    <StyledTextArea
      ref={ref}
      {...props}
    />
  );
});

export default TextArea;
