import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { 
    console.log("constructor called")
  }

  isLoggedIn : boolean = true;

  checkLogin(){
    console.log("checkLogin called");
    return this.isLoggedIn;
  }

  logout(){
    this.isLoggedIn  = true;
    return this.isLoggedIn;
  }
}
