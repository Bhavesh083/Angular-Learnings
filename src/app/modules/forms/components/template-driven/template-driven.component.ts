import { Component, OnInit } from '@angular/core';
import { employee_ } from 'src/app/models/employee';
import { Employee } from 'src/app/models/employee-class';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  genders: string[] = ['male', 'female', 'other'];

  employee = new Employee(83, 'Bhavesh', 999999, 22, '');

  constructor() { }

  ngOnInit(): void {
  }

  submit(value: any){
    console.log(value.form.status);
    console.log(this.employee);
  }
}
