import { Injectable } from '@angular/core';
import { Customer } from '../customer/models/customer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  static API_URL = 'http://localhost:8080';

  constructor(public http: HttpClient) { }

  registerCustomer(user: Customer) {
    return this.http.post(CustomerService.API_URL + '/user/register', user);
  }
  

  updateCustomer(user: Customer) {
    return this.http.post(CustomerService.API_URL + '/user/update-profile', user);
  }

  loginCustomer(user: Customer) {
    return this.http.post(CustomerService.API_URL + '/user/login', user);
  }

}
