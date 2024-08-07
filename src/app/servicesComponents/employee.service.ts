import { Injectable } from '@angular/core';
import { employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  url : string = "/assets/data/employeeData.json";

  fetchData() : Observable<employee[]>{
    return this.http.get<employee[]>(this.url);
  }

  constructor(private http: HttpClient) {
    this.fetchData();
  }
}
