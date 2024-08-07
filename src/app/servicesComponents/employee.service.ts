import { Injectable } from '@angular/core';
import { employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee : employee[] = [
                         { id : 3, name : 'yuvraj'},
                         { id : 4, name : 'rohit' },
                         { id : 5, name : 'virat'},
                         { id : 6, name : 'dhawan' },
                         { id : 7, name : 'gambhir' }
                        ];

  constructor() { }
}
