import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registeredUser:string | null | undefined;
  isAdmin: boolean= false;

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let username = this.route.snapshot.queryParamMap.get('username');//
    console.log("username:: username:"+username);
    this.registeredUser = username;

    this.isAdmin = this.route.snapshot.queryParamMap.get('isAdmin') as unknown as boolean;

  }

  redirectToLogin() {
    console.log("this.isAdmin"+this.isAdmin);   
    if(this.isAdmin === true) {
      this.router.navigate(['/login-admin']);
    }else {
      this.router.navigate(['/login']);
    }

  }

}
