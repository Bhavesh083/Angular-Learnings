import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-component',
  templateUrl: './pipes-component.component.html',
  styleUrls: ['./pipes-component.component.css']
})
export class PipesComponentComponent implements OnInit {

  pName : string = 'Angular Framework';
  pAmount : number = 99;
  pObj : object = {
    id : 10, name : 'angular'
  };
  pNumbers : number[] = [1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }

}
