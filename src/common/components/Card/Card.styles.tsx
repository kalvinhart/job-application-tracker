import styled from "styled-components";
import { CardProps } from "./Card";

export const StyledCard = styled.div<CardProps>`
  padding: 20px;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;
