import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { trackColor } from 'src/app/models/trackColor';
import { mainState } from 'src/app/state/bannerColor/color.reducer';
import { getColorState, getEntireState } from 'src/app/state/bannerColor/color.selector';

@Component({
  selector: 'app-navsfor-routing',
  templateUrl: './navsfor-routing.component.html',
  styleUrls: ['./navsfor-routing.component.css']
})
export class NavsforRoutingComponent implements OnInit {

  constructor(private store: Store<mainState>) {
  }

  ngOnInit(): void {
    this.store.select<mainState>(getEntireState).subscribe(c => {
      console.log(c);
    });
  }

  fontColor = "brown";

}



/*
ngOnInit(): void {
    this.store.select(getEntireState).subscribe(c => {
      console.log(c);
    });
  }
*/