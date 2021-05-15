import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isUserLoggedIn = false;
  isLogOut = false;
  constructor (private authService:AuthService, 
    private router:Router) {
}

ngOnInit() {
  if(!this.authService.isUserLoggedIn())
  {
    this.isUserLoggedIn = false;
    this.router.navigate(['login-component']);
  }
  else
{

     this.isUserLoggedIn = true;
     this.isLogOut=true;
     this.router.navigate(['logout-component']);
}
}
  title = 'Case04-AppValidation';
  
}

