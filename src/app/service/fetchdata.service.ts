import { GlobalVariable } from './global.service';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FetchdataService {

  constructor(private http:HttpClient) { }

  fetchDataMethodPost(url:string,body:any):Observable<Object>{
    return this.http.post(GlobalVariable.BASE_API_URL+url, body);
  }
  fetchDataMethodPostWithAuth(url:string,body:any,token:string):Observable<Object>{
    return this.http.post(GlobalVariable.BASE_API_URL+url, body,{
      headers: new HttpHeaders().set('Authorization',['Bearer '+token])
    });
  }
  fetchDataMethodGet(url:string):Observable<Object>{
    return this.http.get(GlobalVariable.BASE_API_URL+url);
  }
  fetchDataMethodGetWithAuth(url:string,token:string):Observable<Object>{
    return this.http.get(GlobalVariable.BASE_API_URL+url,{
      headers: new HttpHeaders().set('Authorization',['Bearer '+token])
    });
  }
  methodDeleteWithAuth(url:string,token:string):Observable<Object>{
    return this.http.delete(GlobalVariable.BASE_API_URL+url,{
      headers: new HttpHeaders().set('Authorization',['Bearer '+token])
    });
  }
  methodPatchWithAuth(url:string,body:any,token:string):Observable<Object>{
    return this.http.patch(GlobalVariable.BASE_API_URL+url,body,{
      headers: new HttpHeaders().set('Authorization',['Bearer '+token])
    });
  }
}
