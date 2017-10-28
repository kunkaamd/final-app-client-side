import { UserService } from 'app/service/user.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuardService {

  constructor(private userService:UserService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
      if(this.userService.isLoggedIn)return false;
      return true;
  }

}
