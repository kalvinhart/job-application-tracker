import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { LoginForm } from "../LoginForm";

const LoginPanel: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="50%"
      height="100vh"
      padding="40px"
    >
      <Typography
        component="span"
        fontSize={22}
        marginBottom="20px"
      >
        Welcome back! Sign in to your account
      </Typography>

      <LoginForm />

      <Typography component="span">
        Don't have an account? <Link to="/auth/register">Register here</Link>
      </Typography>
    </Box>
  );
};

export default LoginPanel;
