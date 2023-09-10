import styled, { RuleSet, css } from "styled-components";
import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  outline: none;
  border: none;
  color: var(--text-color-light);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  ${({ $variant }): RuleSet<object> => {
    switch ($variant) {
      case "primary":
        return css`
          background-color: var(--clr-primary);

          &:hover {
            background-color: var(--clr-primary-dark);
          }

          &:disabled {
            background-color: var(--clr-primary-light);
          }
        `;
      case "secondary":
        return css`
          background-color: var(--clr-secondary);

          &:hover {
            background-color: var(--clr-secondary-dark);
          }

          &:disabled {
            background-color: var(--clr-secondary-light);
          }
        `;
    }
  }};

  &:disabled {
    cursor: not-allowed;
  }

  & svg {
    margin-right: 5px;
  }
`;
