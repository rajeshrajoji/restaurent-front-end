import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../customer/models/customer.model';

@Injectable()
export class AuthService {
  private router: Router | undefined;
  constructor(public http: HttpClient) { }
  public errorMessage = '';
  static API_URL = 'http://localhost:8080';
  authenticated = false;
  authenticate(credentials: any, callback: any) {
    console.log("username"+credentials.username);
    console.log("password:e"+credentials.password);
    const headers = new HttpHeaders(credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});
    console.log("before calling api**"+headers);
    this.http.get(AuthService.API_URL + '/user/login', {headers: headers})
    .subscribe((response: any) => {
        console.log("response:"+response);
        let data: any ;
        data = response;
        const u = data.principal;
        if (response['fullName']) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        return callback && callback(data);
    }, err => {
      console.log("err:"+err);
      return callback(null);
    });

}
  public logIn(user: Customer) {
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    // creating base64 encoded String from user name and password
    const base64Credential: string = btoa( user.username + ':' + user.password);
    localStorage.setItem('headers', JSON.stringify(headers));
    return this.http.get(AuthService.API_URL + '/user/login', {headers: headers});
  }

}
