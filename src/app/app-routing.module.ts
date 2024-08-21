import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './servicesComponents/employee/employee.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { BindingsComponent } from './bindings/bindings.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PipesComponentComponent } from './pipes/pipes-component/pipes-component.component';
import { CustomStructuralDirective } from './customDirectives/custom-structural.directive';
import { ComponentCustomDirectiveComponent } from './customDirectives/component-custom-directive/component-custom-directive.component';
import { NavsforRoutingComponent } from './navsfor-routing/navsfor-routing.component';
import { AppComponent } from './app.component';
import { LifecycleTestComponent } from './lifecycle-test/lifecycle-test.component';
import { LoginEmployeeComponent } from './modules/login/components/login-employee/login-employee.component';
import { AddEmployeeComponent } from './modules/crud/components/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './modules/crud/components/delete-employee/delete-employee.component';
import { AllCRUDComponent } from './modules/crud/components/all-crud/all-crud.component';
import { CrudRoutingModule } from './modules/crud/crud-routing.module';

const routes: Routes = [
  { path : '', redirectTo : '/services', pathMatch: 'full'},
  { path : 'services', component: EmployeeComponent, children : [{path: 'child1', component: PipesComponentComponent}]},
  { path : 'services/:id', component: EmployeeComponent},
  { path : 'componentsInteraction', component : ChildOneComponent},
  { path : 'customDirectives', component: ComponentCustomDirectiveComponent},
  { path : 'pipes', component : PipesComponentComponent},
  { path : 'structuralDirectives', component: StructuralDirectivesComponent},
  { path : 'bindings', component : BindingsComponent},
  { path : 'lifeCycle', component : LifecycleTestComponent},
  { path : 'login', component : LoginEmployeeComponent},
  { path : '**', component : BindingsComponent}
  //check crud module for few more routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
