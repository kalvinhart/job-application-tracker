import React from "react";
import { Box } from "@mui/material";
import { WelcomePanel } from "../WelcomePanel";
import { Outlet } from "react-router-dom";

const AuthPage: React.FC = () => {
  return (
    <Box
      component="main"
      display="flex"
    >
      <WelcomePanel />
      <Outlet />
    </Box>
  );
};

export default AuthPage;
