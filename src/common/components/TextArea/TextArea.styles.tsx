import { styled } from "styled-components";

export const StyledTextArea = styled.textarea`
  padding: 10px 20px;
  border: 1px solid var(--clr-outline);
  border-radius: var(--border-radius);
  resize: vertical;
  outline: none;
  transition: border 0.2s ease-in-out;

  &:focus {
    border: 1px solid var(--clr-primary);
  }
`;
