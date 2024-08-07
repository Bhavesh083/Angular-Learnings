import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  /* class bindings variables */
  status : string = 'danger';
  isCorrect : boolean = true;
  dangerClasses : string = 'danger danger-size';
  correctObject = {
    'correct-size' : this.isCorrect,
    'correct' : this.isCorrect
  };
  correctArray = ['correct-size', 'correct'];

  /* style bindings variables */
  pMargin : string = '10px';
  pStyles : string = 'margin:15px ; font-family: Impact';
  pStylesObject = {
    'margin' : '20px',
    'font-family' : 'verdana'
  };
   
  /*Event Binding*/
  pCount : number = 0;
  counter(){
    this.pCount = this.pCount+1;
    console.log();
  }
  getEvent(event : Event){
    console.log(event)
  }


  /*Template Reference Variable */
  showVariable(value : any){
    console.log(value);
  }


  /* Two way binding*/
  pTwoWayValue : string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
