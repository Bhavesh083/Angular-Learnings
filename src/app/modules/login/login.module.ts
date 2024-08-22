import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginEmployeeComponent } from './components/login-employee/login-employee.component';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [
    LoginEmployeeComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
