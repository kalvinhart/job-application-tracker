import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationDrawer = styled.div`
  width: 250px;
  height: calc(100vh - var(--header-height));
  padding: 20px;
  background-color: var(--clr-primary);
  color: var(--clr-light);
`;

export const Nav = styled.nav`
  width: 100%;
`;

export const NavList = styled.ul`
  width: 100%;
  list-style: none;
`;

export const NavListItem = styled.li`
  width: 100%;
`;

export const NavButton = styled(NavLink)`
  display: block;
  width: 100%;
  padding: 10px 20px;
  background-color: var(--clr-primary);
  border-radius: var(--border-radius);

  color: var(--clr-light);
  text-decoration: none;

  transition: background-color 0.3s ease-in-out;

  &:visited,
  &:focus,
  &:active,
  &:hover {
    color: var(--clr-light);
    text-decoration: none;
  }

  &.active {
    background-color: var(--clr-primary-dark);
  }

  &:hover {
    background-color: var(--clr-primary-dark);
  }

  & svg {
    color: var(--clr-light);
  }
`;
