import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments.development';
import { LoginRequest, RefreshTokenRequest, RegisterRequest, UserTokens } from '../models/auth.model';
import { ApiResponse } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.ApiEndpoint.Auth;

  constructor(private _http: HttpClient) {}

  register(request: RegisterRequest) {
    return this._http.post<ApiResponse<UserTokens>>(`${this.apiUrl.Register}`, request);
  }

  login(request: LoginRequest) {
    return this._http.post<ApiResponse<UserTokens>>(`${this.apiUrl.Login}`, request);
  }

  refreshToken(request: RefreshTokenRequest) {
    return this._http.post<ApiResponse<UserTokens>>(`${this.apiUrl.RefreshToken}`, request);
  }
}
