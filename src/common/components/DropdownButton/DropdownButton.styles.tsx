import { styled } from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const StyledDropdownButton = styled.button`
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: var(--border-radius);
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--clr-mid);
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: "flex";
  padding: 10px 0;
  width: 150px;
  background-color: white;
  box-shadow: var(--box-shadow);
`;

export const DropdownOptionButton = styled.button`
  padding: 10px 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--clr-mid);
  }

  & svg {
    margin-right: 5px;
  }
`;
