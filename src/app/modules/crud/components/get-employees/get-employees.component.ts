import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { employee_ } from 'src/app/models/employee';
import { HttpCallsService } from 'src/app/services/http-calls.service';

@Component({
  selector: 'app-get-employees',
  templateUrl: './get-employees.component.html',
  styleUrls: ['./get-employees.component.css'],
})
export class GetEmployeesComponent implements OnInit {
  employees: employee_[] = [];

  singleEmployee: employee_ = {
    employee_age: 61,
    employee_name: 'Brielle Williamson',
    employee_salary: 372000,
    employee_id: -2,
    profile_image: '',
  };

  errorMessage: string = '';

  constructor(private http: HttpCallsService) {}

  ngOnInit(): void {}

  getAll() {
    this.http.getAll().subscribe({
      next: (d) => {
        // response is coming as object which has key & values, so use below techniques
        // this.employees = Object.keys(d).map( (k:any) => { return d[k]})[1];    OR
        // this.employees = Object.values(d)[1];
        // this.errorMessage = '';
        this.employees = d;
      },
      error: (err) => {
        if (err.status == 429) {
          this.errorMessage = 'Too many requests! wait for a minute';
        } else this.errorMessage = err.message;
      },
      complete: () => {
        console.log('GET call over');
      },
    });
  }

  getEmployeeByID(id: number) {

    this.http.getByID(id).subscribe({
      next: (data) => {
        // if (Object.values(data)[1] != null) {
        //   this.singleEmployee = Object.values(data)[1];
        //   this.errorMessage = '';
        // } else this.errorMessage = 'ID Not Found';
        console.log(data);
        this.singleEmployee = data;
      },
      error: (err) => {
        if (err.status == 429) {
          this.errorMessage = 'Too many requests! wait for a minute';
        } else if (err.status == 402) {
          this.errorMessage = 'ID Not Found';
        } else this.errorMessage = err.message;
      },
      complete: () => {
        console.log('GET call over');
      },
    });
  }
}
