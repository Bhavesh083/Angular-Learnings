import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { AllCRUDComponent } from './components/all-crud/all-crud.component';

const routes: Routes = [
    { path : 'crud', component : AllCRUDComponent, children : [
        { path : 'addEmployeee', component : AddEmployeeComponent},
        { path : 'deleteEmployeee', component : DeleteEmployeeComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { } 
