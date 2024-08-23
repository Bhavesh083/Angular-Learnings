import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { AllCRUDComponent } from './components/all-crud/all-crud.component';
import { AuthServiceGuard } from 'src/app/auth-service.guard';
import { GetEmployeesComponent } from './components/get-employees/get-employees.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';

// changed path to empty '' because we already defined 'crud' path in app-routing file.
// rather than attaching canActivate to all child paths, just attach canActivateChild to parent path.

const routes: Routes = [
    { path : '', component : AllCRUDComponent, canActivateChild : [AuthServiceGuard] ,children : [
        { path : 'addEmployee', component : AddEmployeeComponent},
        { path : 'deleteEmployee', component : DeleteEmployeeComponent},
        { path : 'getEmployees', component : GetEmployeesComponent},
        { path : 'editEmployee', component : EditEmployeeComponent}
    ], canDeactivate : [AuthServiceGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { } 
