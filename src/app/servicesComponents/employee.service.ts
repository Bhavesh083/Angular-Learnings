import { Injectable } from '@angular/core';
import { employee } from '../models/employee';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, observable, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
    this.fetchData();
  }

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

  /* Error Handling */
  fetchData2() : Observable<employee[]>{
    return this.http.get<employee[]>(this.url+'q')
                    .pipe( catchError( x => {
                      return throwError(x); 
                    }
          ))
  }  
}
