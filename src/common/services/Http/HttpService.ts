export abstract class HttpService {
  abstract get<TResponse>(url: string): Promise<TResponse>;
  abstract post<TResponse, TData>(url: string, postData: TData): Promise<TResponse>;
  abstract put<TResponse, TData>(url: string, putData: TData): Promise<TResponse>;
  abstract delete(url: string): Promise<void>;
}
