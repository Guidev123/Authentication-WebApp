import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, LoginRequest, RefreshTokenRequest, RegisterRequest, UserTokens } from '../models/common.model';
import { ApiEndpoint } from '../constants/constants';

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
    return this._http.post<ApiResponse<RefreshTokenRequest>>(`${ApiEndpoint.Auth.RefreshToken}`, request);
  }
}
