import styled, { RuleSet, css } from "styled-components";
import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  border-radius: var(--border-radius);
  outline: none;
  border: none;
  color: var(--text-color-light);
  cursor: pointer;

  ${({ variant }): RuleSet<object> => {
    switch (variant) {
      case "primary":
        return css`
          background-color: var(--clr-primary);

          &:disabled {
            background-color: var(--clr-primary-light);
          }
        `;
      case "secondary":
        return css`
          background-color: var(--clr-secondary);

          &:disabled {
            background-color: var(--clr-secondary-light);
          }
        `;
    }
  }};

  &:disabled {
    cursor: not-allowed;
  }
`;
