import React from "react";
import { AppLogo, StyledHeader } from "./Header.styles";
import { useAuth } from "../../modules/auth/context/AuthContext";
import { Button } from "../../common/components/Button";
import { AuthActionTypes } from "../../modules/auth/reducers/authReducer";
import { useServices } from "../../common/context/ServicesContext";

const Header: React.FC = () => {
  const { authService } = useServices();
  const { authState, authDispatch } = useAuth();

  const signOut = async (): Promise<void> => {
    try {
      await authService.signOut();
      authDispatch({ type: AuthActionTypes.SIGN_OUT });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledHeader>
      <AppLogo>job trackr</AppLogo>

      {authState.user && (
        <Button
          $variant="primary"
          onClick={signOut}
        >
          Sign Out
        </Button>
      )}
    </StyledHeader>
  );
};

export default Header;
