import Routes from "./routes/Routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import ServicesProvider from "./common/context/ServicesContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "./modules/auth/context/AuthContext";

import "react-datepicker/dist/react-datepicker.css";
import { theme } from "./styles/Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles />
      <ServicesProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <ThemeProvider theme={theme}>
              <Routes />
            </ThemeProvider>
          </QueryClientProvider>
        </AuthProvider>
      </ServicesProvider>
    </>
  );
};

export default App;
