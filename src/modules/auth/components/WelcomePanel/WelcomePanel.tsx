import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const WelcomePanel: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="50%"
      height="100vh"
      padding="40px"
      bgcolor={theme.palette.primary.main}
    >
      <Typography
        variant="h1"
        color={theme.palette.common.white}
      >
        Job Application Tracker
      </Typography>
      <Typography sx={{ fontSize: "20px", color: theme.palette.common.white }}>
        Track your job applications from one single location
      </Typography>
    </Box>
  );
};

export default WelcomePanel;
