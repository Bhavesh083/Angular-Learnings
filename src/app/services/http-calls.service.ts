import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { employee_ } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class HttpCallsService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    // not using headers for now
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http
      .get<any[]>('https://localhost:7269/api/Employees', {
        responseType: 'json',
        observe: 'body',
      })
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  getByID(id: number): Observable<employee_> {
    // not using this because we just need to pass value & not key & value
    const params = new HttpParams().set('id', id);

    // not using headers for now
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http
      .get<employee_>('https://localhost:7269/api/Employees/'+id)
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  add(emp: employee_): Observable<employee_> {
    //const headers = {'content-type': 'application/json'}
    //const body = JSON.stringify(emp);

    return this.http
      .post<employee_>('https://localhost:7269/api/Employees', emp)
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  delete(id: number) {
    return this.http
      .delete<employee_>('https://localhost:7269/api/Employees/' + id)
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  edit(emp: employee_): Observable<employee_> {
    return this.http
      .put<employee_>('https://localhost:7269/api/Employees/' + emp.employee_id, emp)
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  logErrors : string[] = [];
  logRequests : any[] = [];
  logResponse : any[] = [];
}
