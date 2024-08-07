import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employees: EmployeeService) {  } 

  ngOnInit(): void {  }

  employeeList : employee[] = [{ id : 1, name : 'dhoni' },{id : 2, name : 'raina' }];

  // can push elements using concat or spread operator or foreach
  getFromService(){
    // this.employee = this.employee.concat(this.employees.employee);
    //this.employeeList = [...this.employeeList,...this.employees.employee
    
    this.employees.employee.forEach( x => {
      if(!this.employeeList.includes(x,0)){
        this.employeeList.push(x);
      }
    })
  } 

  getFromHttpCall(){
    // GET FROM HTTP CALL 
    this.employees.fetchData().subscribe(data => this.employeeList = data);
  }

  

}
