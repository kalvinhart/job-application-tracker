import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#018989",
      light: "#34a1a1",
      dark: "#016e6e",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#18a1e0",
      light: "#46b4e6",
      dark: "#1381b3",
      contrastText: "#ffffff",
    },
    error: {
      main: "#cc0000",
    },
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontSize: "64px",
      marginBottom: "20px",
    },
  },
});
