import { styled } from "styled-components";

export const Dialog = styled.dialog`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  max-width: 400px;
  padding: 20px;
  border: 0;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);

  ::backdrop {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const DialogCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
  background-color: transparent;
  border: none;
  border-radius: var(--border-radius);
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--clr-mid);
  }
`;

export const StyledModalHeader = styled.header`
  padding: 20px;
  width: 100%;
`;

export const StyledModalBody = styled.div`
  padding: 20px;
  width: 100%;
`;
