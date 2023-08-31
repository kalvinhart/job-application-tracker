import Routes from "./routes/Routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import ServicesProvider from "./common/context/ServicesContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "./modules/auth/context/AuthContext";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <ServicesProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <Routes />
          </QueryClientProvider>
        </AuthProvider>
      </ServicesProvider>
    </>
  );
};

export default App;
