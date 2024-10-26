import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeColor, resetColor } from 'src/app/state/bannerColor/color.action';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css']
})
export class NgrxComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  setColor(color: string){
    this.store.dispatch(changeColor({color}));
  }

  reset(){
    this.store.dispatch(resetColor());
  }
  
}
