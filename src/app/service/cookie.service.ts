import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

  constructor() { }
  setCookie(cname, cvalue, exhour) {
      let d = new Date();
      d.setTime(d.getTime() + (exhour*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + "; " + expires;
  }
  getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }
  deleteCookie(cname){
    document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
  checkCookie(cname):boolean {
    let username=this.getCookie(cname);
    if (username!="") {// co cookie
        return true;
    } else {
        return false;
    }
  }

}
