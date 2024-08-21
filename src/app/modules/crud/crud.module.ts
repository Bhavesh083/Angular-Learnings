import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { AllCRUDComponent } from './components/all-crud/all-crud.component';
import { RouterModule } from '@angular/router';
import { CrudRoutingModule } from './crud-routing.module';



@NgModule({
  declarations: [
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    AllCRUDComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule
  ]
})
export class CrudModule { }
