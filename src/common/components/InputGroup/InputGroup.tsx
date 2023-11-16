import React, { PropsWithChildren } from "react";
import { Box } from "@mui/material";

const InputGroup: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      marginBottom="20px"
    >
      {children}
    </Box>
  );
};

export default InputGroup;
