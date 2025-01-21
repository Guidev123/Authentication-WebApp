import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpoint } from '../constants/constants';
import { LoginRequest, RefreshTokenRequest, RegisterRequest, UserTokens } from '../models/auth.model';
import { ApiResponse } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  register(request: RegisterRequest){
    return this._http.post<ApiResponse<UserTokens>>(`${ApiEndpoint.Auth.Register}`, request);
  }

  login(request: LoginRequest){
    return this._http.post<ApiResponse<UserTokens>>(`${ApiEndpoint.Auth.Login}`, request);
  }

  refreshToken(request: RefreshTokenRequest){
    return this._http.post<ApiResponse<UserTokens>>(`${ApiEndpoint.Auth.RefreshToken}`, request);
  }
}
