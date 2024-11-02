import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { 
  }

  addItem(key : string, value : string){
    localStorage.setItem(key, value);
  }

  removeItem(key : string){
    localStorage.removeItem(key);
  }

  getItem(key : string){
    return localStorage.getItem(key);
  }

  clearAll(){
    localStorage.clear();
  }

}
