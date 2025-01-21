export interface UserTokens{
  accessToken: string;
  refreshToken: string;
}


export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  cpf: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RefreshTokenRequest{
  refreshToken: string;
}
