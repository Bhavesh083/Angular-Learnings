import { Component, OnInit } from '@angular/core';
import { employee_ } from 'src/app/models/employee';
import { HttpCallsService } from 'src/app/services/http-calls.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  constructor(private http: HttpCallsService) {}

  ngOnInit(): void {}

  edit_employee: employee_ = {
    employee_age: 0,
    employee_name: '',
    employee_salary: 0,
    employee_id: -1,
    profile_image: '',
  };

  edit(id: number, name: string, age: number, salary: number) {
    this.edit_employee.employee_id = id;
    this.edit_employee.employee_age = age;
    this.edit_employee.employee_name = name;
    this.edit_employee.employee_salary = salary;

    if (this.edit_employee.employee_name != '') {
      this.http.edit(this.edit_employee).subscribe({
        next: (d) => {
          window.alert('updated ' + JSON.stringify(d));
          console.log(d);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('POST call over');
        },
      });
    }
  }
}
