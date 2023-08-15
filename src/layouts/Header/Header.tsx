import React from "react";
import { AppLogo, StyledHeader } from "./Header.styles";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <AppLogo>job trackr</AppLogo>
    </StyledHeader>
  );
};

export default Header;
