import { Subscription } from 'rxjs/Subscription';
import { FetchdataService } from './../../service/fetchdata.service';
import { UserService } from './../../service/user.service';
import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [FetchdataService]
})
export class NavbarComponent implements OnInit,OnDestroy {
  fixedTopNav:boolean = false;
  isLogin:boolean = false;
  subscription:Subscription;
  constructor(public userService:UserService,private petchdata:FetchdataService) { 
    this.isLogin = userService.getUserFromCookie();
    this.subscription = this.userService.login$.subscribe(
      login => {this.isLogin = login;});
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    if(window.pageYOffset>1){
      this.fixedTopNav = true;
    }else{
      this.fixedTopNav = false;
    }
  }
  ngOnInit() {
  }
  logout(){
    this.userService.logout();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
