import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router, private authService: AuthService ) {
 
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    
      if (!this.authService.isUserLoggedIn)  {
        alert('You are not allowed to view this page');
        
        //redirect to login/home page etc
        //return false to cancel the navigation
        return false;
      }
    else  
    {
      return true;
    }
  }
  
}
