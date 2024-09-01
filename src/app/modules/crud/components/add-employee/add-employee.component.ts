import { Component, OnInit } from '@angular/core';
import { employee_ } from 'src/app/models/employee';
import { HttpCallsService } from 'src/app/services/http-calls.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  constructor(private http: HttpCallsService) {}

  new_employee: employee_ = {
    employee_age: 0,
    employee_name: '',
    employee_salary: 0,
    employee_id: -1,
    profile_image: '',
  };

  ngOnInit(): void {}

  add(name: string, age: number, salary: number) {
    this.new_employee.employee_age = age;
    this.new_employee.employee_name = name;
    this.new_employee.employee_salary = salary;

    if (this.new_employee.employee_name != '') {
      this.http.add(this.new_employee).subscribe({
        next: (d) => {
          window.alert('added ' + JSON.stringify(d));
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
