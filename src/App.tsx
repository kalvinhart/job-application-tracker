import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import ServicesProvider from "./common/context/ServicesContext";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <ServicesProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      </ServicesProvider>
    </>
  );
};

export default App;
