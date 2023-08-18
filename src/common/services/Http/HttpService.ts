import axios, { Axios } from "axios";

export class HttpService {
  private httpClient: Axios;

  constructor() {
    this.httpClient = axios;
  }

  async get<TResponse>(url: string): Promise<TResponse> {
    const { data } = await this.httpClient.get<TResponse>(url);
    return data;
  }

  async post<TResponse, TData>(url: string, postData: TData): Promise<TResponse> {
    const { data } = await this.httpClient.post<TResponse>(url, postData);
    return data;
  }

  async put<TResponse, TData>(url: string, putData: TData): Promise<TResponse> {
    const { data } = await this.httpClient.put<TResponse>(url, putData);
    return data;
  }
}
