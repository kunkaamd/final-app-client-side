import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import {Router, RouterStateSnapshot,  ActivatedRouteSnapshot,   CanActivate} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private userService:UserService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
      if(this.userService.isLoggedIn)return true;
      this.router.navigate(['/signin']);
      return false;
  }
}
