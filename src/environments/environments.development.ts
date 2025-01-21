export const environment = {
  production: false,
  ApiEndpoint: {
    Auth: {
      Register: 'https://localhost:44305/api/v1/auth',
      Login: 'https://localhost:44305/api/v1/auth/login',
      RefreshToken: 'https://localhost:44305/api/v1/auth/refresh-token',
    },
  },
  LocalStorage: {
    token: 'USER_TOKEN',
    refreshToken: 'USER_REFRESH_TOKEN',
  },
};
