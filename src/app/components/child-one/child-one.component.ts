import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  name: string = 'Bhavesh';
  age: number = 22;
  office: string = 'eurofins';
  points: number = 0;
  buttonMessage : any = "send to parent";

  giveHike(){
    this.points = this.points+1;
  }

  /*component interaction*/
  pSendToChild : string = 'Hi, I came from parent component';
  pGetFromChild : string = '';
 
  constructor() { }

  ngOnInit(): void {
  }

}
