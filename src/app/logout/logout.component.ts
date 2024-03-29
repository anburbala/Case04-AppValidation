import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-logout',
   templateUrl: './logout.component.html',
   styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
   isLogout = false;

   constructor(private authService : AuthService, private router: Router) { }

   ngOnInit() {
      this.authService.logoutUser();
      this.isLogout=false;
      this.router.navigate(['/login-component']);
   }

}