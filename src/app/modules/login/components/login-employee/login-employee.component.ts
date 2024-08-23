import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.css']
})
export class LoginEmployeeComponent implements OnInit {

  constructor(private auth : AuthServiceService) { }

  ngOnInit(): void {
  }

  isLoggedIn(){
    return this.auth.isLoggedIn;
  }

  login(){
    this.auth.isLoggedIn = true;
  }

  logout(){
    this.auth.isLoggedIn = false;
  }

}
