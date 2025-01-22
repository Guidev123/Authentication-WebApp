import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environments.development';
import { LoginRequest, RegisterRequest, UserTokens } from '../models/auth.model';
import { ApiResponse } from '../models/common.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.ApiEndpoint.Auth;
  isLoggedIn = signal<boolean>(false);

  constructor(private router: Router, private _http: HttpClient) {
    if(this.getUserToken()){
      this.isLoggedIn.update(() => true);
    }
  }

  private handleTokens(response: ApiResponse<UserTokens>): ApiResponse<UserTokens> {
    const token = response.data?.accessToken;
    const refreshToken = response.data?.refreshToken;
    if (token && refreshToken) {
      this.storeTokens(token, refreshToken);
      this.isLoggedIn.update(() => true);
      this.router.navigate(['']);
    }
    return response;
  }

  private storeTokens(token: string, refreshToken: string): void {
    localStorage.setItem(environment.LocalStorage.token, token);
    localStorage.setItem(environment.LocalStorage.refreshToken, refreshToken);
  }

  private removeTokens(): void {
    localStorage.removeItem(environment.LocalStorage.token);
    localStorage.removeItem(environment.LocalStorage.refreshToken);
  }

  register(request: RegisterRequest) {
    return this._http.post<ApiResponse<UserTokens>>(`${this.apiUrl.Register}`, request).pipe(
      map(this.handleTokens.bind(this))
    );
  }

  login(request: LoginRequest) {
    return this._http.post<ApiResponse<UserTokens>>(`${this.apiUrl.Login}`, request).pipe(
      map(this.handleTokens.bind(this))
    );
  }

  refreshToken(refreshToken: string) {
    return this._http.post<ApiResponse<UserTokens>>(`${this.apiUrl.RefreshToken}?refreshToken=${refreshToken}`, {}).pipe(
      map(this.handleTokens.bind(this))
    );
  }

  getUserToken(){
    return localStorage.getItem(environment.LocalStorage.token);
  }

  getUserRefreshToken(): string | null {
    return localStorage.getItem(environment.LocalStorage.refreshToken);
  }

  logout(): void {
    this.removeTokens();
    this.isLoggedIn.update(() => false);
    this.router.navigate(['login']);
  }
}
