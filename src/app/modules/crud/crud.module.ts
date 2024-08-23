import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { AllCRUDComponent } from './components/all-crud/all-crud.component';
import { CrudRoutingModule } from './crud-routing.module';
import { GetEmployeesComponent } from './components/get-employees/get-employees.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';



@NgModule({
  declarations: [
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    AllCRUDComponent,
    GetEmployeesComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule
  ]
})
export class CrudModule { }
