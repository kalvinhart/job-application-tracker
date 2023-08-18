import { PropsWithChildren, createContext, useContext } from "react";
import { AuthService } from "../../modules/auth/AuthService";
import { HttpService } from "../services/Http/HttpService";
import { StorageService } from "../services/Storage/StorageService";

export type ServicesState = {
  authService: AuthService;
  storageService: StorageService;
};

const initialState: ServicesState = {
  authService: new AuthService(new HttpService()),
  storageService: new StorageService(),
};

export const ServicesContext = createContext<ServicesState>(initialState);

export const useServices = (): ServicesState => {
  return useContext(ServicesContext);
};

const ServicesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const httpService = new HttpService();
  const authService = new AuthService(httpService);
  const storageService = new StorageService();

  return <ServicesContext.Provider value={{ authService, storageService }}>{children}</ServicesContext.Provider>;
};

export default ServicesProvider;
