import { HttpService } from "../../common/services/Http/HttpService";
import { appConfig } from "../../config/config";
import { SignInResponse } from "./types/SignInResponse";
import { UserCredentials } from "./types/UserCredentials";

export class AuthService {
  private _httpService: HttpService;
  private _apiRoot = `${appConfig.apiUrl}/auth`;

  constructor(httpService: HttpService) {
    this._httpService = httpService;
  }

  async signIn(userCredentials: UserCredentials): Promise<SignInResponse> {
    return await this._httpService.post<SignInResponse, UserCredentials>(`${this._apiRoot}/login`, userCredentials);
  }
}
