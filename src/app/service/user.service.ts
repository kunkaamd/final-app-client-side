import { Subject } from 'rxjs/Subject';
import { CookieService } from './cookie.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
	private _id:string;
	private _email:string;
	private _name:string;
	private _token:string;
	private _avatar:string;
	private _isLoggedIn:boolean = false;
	private cookieService: CookieService;

	private loginSource = new Subject<boolean>();
	login$ = this.loginSource.asObservable();


	public get avatar(): string {
		return this._avatar;
	}

	public set avatar(value: string) {
		this._avatar = value;
	}
	
	public get id(): string {
		return this._id;
	}

	public set id(value: string) {
		this._id = value;
	}
	
	public get isLoggedIn(): boolean  {
		return this._isLoggedIn;
	}

	public set isLoggedIn(value: boolean ) {
		this.cookieService.setCookie('id',this._id,1);
		this.cookieService.setCookie('email',this._email,1);
		this.cookieService.setCookie('name',this._name,1);
		this.cookieService.setCookie('token',this._token,1);
		this.cookieService.setCookie('avatar',this._avatar,1);
		this.loginSource.next(true);
		this._isLoggedIn = value;
	}
  
	public get token(): string {
		return this._token;
	}

	public set token(value: string) {
		this._token = value;
	}

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}
	

	public get email(): string {
		return this._email;
	}

	public set email(value: string) {
		this._email = value;
	}
  	constructor() { 
		this.cookieService = new CookieService();
	}
	public logout(){
		this.cookieService.deleteCookie('id');
		this.cookieService.deleteCookie('email');
		this.cookieService.deleteCookie('name');
		this.cookieService.deleteCookie('token');
		this.cookieService.deleteCookie('avatar');
		this._isLoggedIn = false;
		this.loginSource.next(false);
	}
	public getUserFromCookie():boolean{
		if(this.cookieService.checkCookie('id')){//co cookie
			this._id = this.cookieService.getCookie('id');
			this._email = this.cookieService.getCookie('email');
			this._name = this.cookieService.getCookie('name');
			this._token = this.cookieService.getCookie('token');
			this._avatar = this.cookieService.getCookie('avatar');
			this._isLoggedIn = true;
			return true;
		}else{
			return false;
		}
	}
}
