import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-test',
  templateUrl: './lifecycle-test.component.html',
  styleUrls: ['./lifecycle-test.component.css']
})
export class LifecycleTestComponent implements OnInit, OnChanges {

  track : number = 0;

  constructor() {
    console.log(++this.track + ". Constrctor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Add '${implements OnChanges}' to the class.
    //onChange is executed when any data-bound input property changes.
    let x = changes['track'];
    console.log(x);
    console.log(++this.track + ". OnChange");
  
  }

  ngOnInit(): void {
    console.log(++this.track + ". OnInit");
    console.log("onChange didnt execute because there is no input properties here");
    console.log("go to different page to destroy this component");
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log(++this.track + ". OnDestroy");
  }

}
