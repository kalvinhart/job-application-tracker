import axios, { Axios } from "axios";
import { HttpService } from "./HttpService";

export class AxiosHttpService extends HttpService {
  axios: Axios;

  constructor() {
    super();
    this.axios = axios;
  }

  setAuthToken(token: string | null): void {
    this.axios.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  }

  async get<TResponse>(url: string): Promise<TResponse> {
    const { data } = await this.axios.get<TResponse>(url);
    return data;
  }

  async post<TResponse, TData>(url: string, postData: TData): Promise<TResponse> {
    const { data } = await this.axios.post<TResponse>(url, postData);
    return data;
  }

  async put<TResponse, TData>(url: string, putData: TData): Promise<TResponse> {
    const { data } = await this.axios.put<TResponse>(url, putData);
    return data;
  }

  async delete(url: string): Promise<void> {
    await this.axios.delete(url);
  }
}
