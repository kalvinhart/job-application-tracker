import React, { PropsWithChildren } from "react";
import { Box } from "@mui/material";

type AuthFormProps = {
  onSubmit: () => void;
};
const AuthForm: React.FC<PropsWithChildren<AuthFormProps>> = ({ onSubmit, children }) => {
  return (
    <Box width={500}>
      <Box
        component="form"
        width="100%"
        marginBottom="40px"
        display="flex"
        flexDirection="column"
        onSubmit={onSubmit}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AuthForm;
