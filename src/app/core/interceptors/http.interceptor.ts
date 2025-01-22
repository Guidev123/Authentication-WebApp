import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environments.development';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if(authService.isLoggedIn()){
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getUserToken()}`,
      },
    });
  }
  return next(req).pipe(
    catchError((e: HttpErrorResponse) => {
      if(e.status === 401 && authService.getUserToken() !== null){
        authService.refreshToken(authService.getUserRefreshToken() ?? '');
      }

      if(e.status === 401){
        localStorage.removeItem(environment.LocalStorage.token);
        localStorage.removeItem(environment.LocalStorage.refreshToken);
        router.navigate(['']);
      }

      const error = e.error.message || e.statusText;
      return throwError(() => error);
    })
  );
};
