import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = localStorage.getItem('token'); //simulate token
  if (isLoggedIn) {
    return true;
  } else {
    alert('can not access this route');
  //forward
    return false;
  }
};
