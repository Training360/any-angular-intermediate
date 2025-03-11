import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  if (auth.token()) {
    const modifiedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${auth.token()}`,
      },
    });

    return next(modifiedRequest);
  }

  return next(req);
};
