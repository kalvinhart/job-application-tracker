import { styled } from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 0 20px;
  height: var(--header-height);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid var(--clr-light);
  box-shadow: var(--box-shadow);
`;

export const AppLogo = styled.span`
  font-size: 24px;
  color: var(--clr-primary);
`;
