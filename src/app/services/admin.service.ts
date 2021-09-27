import { Injectable } from '@angular/core';
import { Admin } from '../admin/models/admin.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  static API_URL = 'http://localhost:8080';

  constructor(public http: HttpClient) { }

  registerAdmin(user: Admin) {
    return this.http.post(AdminService.API_URL + '/user/register', user);
  }
  

  updateAdmin(user: Admin) {
    return this.http.post(AdminService.API_URL + '/user/update-profile', user);
  }

  loginAdmin(user: Admin) {
    return this.http.post(AdminService.API_URL + '/user/login', user);
  }

}
