import React, { AriaAttributes } from "react";
import { StyledCard } from "./Card.styles";

export type CardProps = AriaAttributes & {
  title?: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, children, ...props }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
