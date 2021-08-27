import { map, take, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private authService: AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot, 
    router: RouterStateSnapshot): boolean | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
      if(router.url === '/recipes'){
        return this.authService.user.pipe(take(1), map(user => {
          const isAuth = !!user
          if (isAuth) {
            return true
          }
          return this.router.createUrlTree(['/auth']);
        }));
      }else
        if (router.url === '/auth'){
        return this.authService.user.pipe(take(1), map(user => {
          const isAuth = !!user
          if (!isAuth) {
            return true
          }
          return this.router.createUrlTree(['/recipes']);
        }));
      }  
  }
}