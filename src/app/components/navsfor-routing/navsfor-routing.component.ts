import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/state/bannerColor/color.reducer';
import { getColorState, getEntireState } from 'src/app/state/bannerColor/color.selector';

@Component({
  selector: 'app-navsfor-routing',
  templateUrl: './navsfor-routing.component.html',
  styleUrls: ['./navsfor-routing.component.css']
})
export class NavsforRoutingComponent implements OnInit {

  constructor(private store: Store<appState>) {
  }

  fontColor = "brown";

  ngOnInit(): void {
    this.store.select(getColorState).subscribe(c => {
      this.fontColor = c.curColor
    });
  }

}