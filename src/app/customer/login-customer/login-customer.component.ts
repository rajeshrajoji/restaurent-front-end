import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { AuthService } from 'src/app/services/auth.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  errorMessage: string | undefined;
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private authService: AuthService,
    private dataSharingService: DataSharingService,
    private router:Router) { }

  ngOnInit() {
    console.log("ng on init***");
    this.buildLoginForm()
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(50)]],
    })
  }

  login(submittedForm: FormGroup) {
    this.customer.password = submittedForm.value.password;
    this.customer.username = submittedForm.value.username;
        this.customerService.loginCustomer(this.customer).subscribe(data => {
          let customerResult = data as Customer;
          
          let navigationExtras: NavigationExtras = {
            queryParams: {
                "username": customerResult.username ,
                "isAdmin": false
            }
        };
        localStorage.setItem('currentUser', JSON.stringify(customerResult));
        this.dataSharingService.isUserLoggedIn.next(true);
        this.router.navigate(['/profile'], navigationExtras);
        //this.router.navigate(['/profile'], navigationExtras);
  },  err => {
    console.log(err);
    this.errorMessage = 'user does not exist';
  });

}

  

}
