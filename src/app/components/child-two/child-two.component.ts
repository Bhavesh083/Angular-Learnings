import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  /*component interaction*/
  @Input() pGetFromParent : string = '';
  @Output() pSendToParent = new EventEmitter();

  /* @input properties  ---> actually tried putting properties in input argments, but didnt Work */
  @Input('buttonMessage') bm : any;

  sendToParent(){
    this.pSendToParent.emit("I came from Child Component");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
 