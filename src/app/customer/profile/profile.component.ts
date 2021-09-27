import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isUpdated: boolean = false;

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("ProfileComponent is called");
    let isProfileUpdate = this.route.snapshot.queryParamMap.get('isProfileUpdate');
    if(isProfileUpdate) {
      this.isUpdated = true;
    }
    
  }

  updateProfile() {
    let username = this.route.snapshot.queryParamMap.get('username');
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "username": username ,
      }
    };
    this.router.navigate(['/update-profile'], navigationExtras);
  }

}
