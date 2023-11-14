import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Main = styled.main`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

export const CenteredDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkDefault = styled(Link)`
  text-decoration: none;
`;

export const LinkPrimary = styled(LinkDefault)`
  color: var(--clr-primary);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;
