import styled from "styled-components";
import { InputProps } from "./Input";

export const StyledInput = styled.input<InputProps>`
  padding: 10px 20px;
  border: 1px solid var(--clr-outline);
  border-radius: var(--border-radius);
  outline: none;
  transition: border 0.2s ease-in-out;

  &:focus {
    border: 1px solid var(--clr-primary);
  }
`;
