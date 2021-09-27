import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import {Router, ActivatedRoute, Route, NavigationExtras} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CustomerService } from 'src/app/services/customer.service';
import { AuthService } from 'src/app/services/auth.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  errorMessage: string | undefined;
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private customerService: CustomerService,
              private authService: AuthService,
              private dataSharingService: DataSharingService,
              private router:Router) {

  }

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

  register(submittedForm: FormGroup) {
    this.customer.password = submittedForm.value.password;
    this.customer.username = submittedForm.value.username;
        this.customerService.registerCustomer(this.customer).subscribe(data => {
          let navigationExtras: NavigationExtras = {
            queryParams: {
                "username": this.customer.username ,
                "isAdmin": false
            }
        };
      
        this.router.navigate(['/home'], navigationExtras);
        //this.router.navigate(['/profile'], navigationExtras);


         // this.router.navigate(['/profile']);
          //   this.authService.authenticate(this.customer, (e:any) => {
          //     let resp: any;
          //     resp = e.principal;
          //     if (resp) {
          //       localStorage.setItem('currentUser', JSON.stringify(resp));
          //       this.dataSharingService.isUserLoggedIn.next(true);
          //       this.router.navigate(['/profile']);
          //     }
          //   });
          // }, err => {
          //   console.log(err);
          //   this.errorMessage = 'username already exist';
          //  }
        //);
    },  err => {
      console.log(err.errorMessage);
      this.errorMessage = "User Already Exists";
    });
  }
}



