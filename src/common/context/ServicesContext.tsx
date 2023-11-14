import { PropsWithChildren, createContext, useContext } from "react";
import { AuthService } from "../../modules/auth/AuthService";
import { StorageService } from "../services/Storage/StorageService";
import { JobService } from "../../modules/jobs/JobService";
import { AxiosHttpService } from "../services/Http/AxiosHttpService";
import { LocalStorageService } from "../services/Storage/LocalStorageService";
import { HttpService } from "../services/Http/HttpService";
import { DateService } from "../services/Date/DateService";

export type ServicesState = {
  httpService: HttpService;
  authService: AuthService;
  storageService: StorageService;
  jobService: JobService;
  dateService: DateService;
};

const initialState: ServicesState = {
  httpService: new AxiosHttpService(),
  authService: new AuthService(new AxiosHttpService()),
  storageService: new LocalStorageService(),
  jobService: new JobService(new AxiosHttpService()),
  dateService: new DateService(),
};

export const ServicesContext = createContext<ServicesState>(initialState);

export const useServices = (): ServicesState => {
  return useContext(ServicesContext);
};

const ServicesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const httpService = new AxiosHttpService();
  const authService = new AuthService(httpService);
  const storageService = new LocalStorageService();
  const jobService = new JobService(httpService);
  const dateService = new DateService();

  return (
    <ServicesContext.Provider value={{ httpService, authService, storageService, jobService, dateService }}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
