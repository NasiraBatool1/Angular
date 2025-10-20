

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { Auth } from '@angular/fire/auth';

export const dashboardAuthGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const auth : Auth = inject(Auth)

  console.log("User : " + auth)
  const res = await auth.authStateReady()
  const identity = auth.currentUser != null ? true : false
  if(identity){
    return identity
  }
  router.navigate(["/dashboard/auth"])
  return identity;

};
