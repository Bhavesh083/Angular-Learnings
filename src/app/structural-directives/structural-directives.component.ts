import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  //ngIf
  pShowIf : boolean = true;

  //ngFor
  pItemsFor : string[] = ['a', 'b', 'c', 'd'];

  pItemsTrackBy : string[] = ['a', 'b', 'c', 'd'];

  refresh(i:number, item : string) : string{
    return item;
  }

  changeList(){
    this.pItemsTrackBy = ['b', 'e', 'c', 'd'];
  }

  //ngSwitch 
  pColorSwitch : string = 'bluey';

  constructor() { }

  ngOnInit(): void { 
  }

}
