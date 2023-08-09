import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { GlobalStyles } from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
