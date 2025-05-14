import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const newReq = req.clone({
    headers: req.headers.append('X-Authentication-Token', "User_Access_Token"),
  });
  return next(newReq);
};
