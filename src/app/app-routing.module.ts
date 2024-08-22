import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './servicesComponents/employee/employee.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { BindingsComponent } from './bindings/bindings.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PipesComponentComponent } from './pipes/pipes-component/pipes-component.component';
import { ComponentCustomDirectiveComponent } from './customDirectives/component-custom-directive/component-custom-directive.component';
import { LifecycleTestComponent } from './lifecycle-test/lifecycle-test.component';

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
  { path : 'login', loadChildren : () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path : 'crud', loadChildren : () => import('./modules/crud/crud.module').then(m => m.CrudModule) },
  { path : '**', component : BindingsComponent}
  //check crud & login modules for more routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
