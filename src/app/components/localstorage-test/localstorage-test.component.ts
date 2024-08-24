import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-localstorage-test',
  templateUrl: './localstorage-test.component.html',
  styleUrls: ['./localstorage-test.component.css']
})
export class LocalstorageTestComponent implements OnInit {

  constructor(private localstore : LocalStorageService) {
  }

  ngOnInit(): void {
  }

  key : string = '';

  value : string = '';

  addItem(key : string, value : string){
    this.localstore.addItem(key, value);
  }

  getItem(key : string) {
    console.log(this.localstore.getItem(key));
  }

  clearAll(){
    this.localstore.clearAll();
  }

  removeItem(key : string){
    this.localstore.removeItem(key);
  }

}
