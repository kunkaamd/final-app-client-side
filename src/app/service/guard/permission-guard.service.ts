import { UserService } from 'app/service/user.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class PermissionGuardService {

  constructor(private userService:UserService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
      let list = this.userService.permission;
      let permission = route.data["permission"];
      if(!list)return false;
      if(list.indexOf(permission)!=-1)return true;
      return false;
  }
}
