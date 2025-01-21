const apiUrl = 'https://localhost:44305/api/v1/auth';

export const ApiEndpoint ={
  Auth:{
    Register: `${apiUrl}`,
    Login: `${apiUrl}/login`,
    RefreshToken: `${apiUrl}/refresh-token`
  }
}

export const LocalStorage ={
  token:'USER_TOKEN',
  refreshToken: 'USER_REFRESH_TOKEN'
}
