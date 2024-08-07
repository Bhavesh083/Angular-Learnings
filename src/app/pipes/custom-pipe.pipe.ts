import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getSize',
  pure: true
})
export class CustomPipe1 implements PipeTransform {

  transform(value: number[]): number {
    return value.length;
  }
  
}

@Pipe({
  name: 'multiplyEach',
  pure: true
})
export class CustomPipe2 implements PipeTransform {

  newArray : number[] = [];

  transform(value: number[], x : number = 5, y : number = 10): number[] {
    if(value.length==0){
      return [];
    }
    this.newArray = value.filter(e => (e>=x && e<=y));
    return this.newArray;
  }
  
}