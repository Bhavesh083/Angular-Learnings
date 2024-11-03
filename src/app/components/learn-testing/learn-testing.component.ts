import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-learn-testing',
  templateUrl: './learn-testing.component.html',
  styleUrls: ['./learn-testing.component.css']
})
export class LearnTestingComponent implements OnInit {
  //with no dependencies:-

  constructor() { }
  ngOnInit(): void {  }

  add(){
    return 4 + 6;
  }
  multiply(){
    return 4 * 6;
  }
}

@Component({
  selector: 'app-learn-testing2',
  templateUrl: './learn-testing.component.html',
  styleUrls: ['./learn-testing.component.css']
})
export class LearnTestingComponent2 implements OnInit {
  //with dependencies:-

  constructor(private auth: AuthServiceService) { }
  
  ngOnInit(): void {  }

  isLoggedIn(){
    const loggedIn = this.auth.checkLogin();
    return loggedIn;
  }
}