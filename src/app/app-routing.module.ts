import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { PipesComponentComponent } from './components/pipes-component/pipes-component.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { BindingsComponent } from './components/bindings/bindings.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { ComponentCustomDirectiveComponent } from './components/component-for-custom-directives/component-custom-directive.component';
import { LifecycleTestComponent } from './components/lifecycle-test/lifecycle-test.component';
import { LocalstorageTestComponent } from './components/localstorage-test/localstorage-test.component';
import { LoggingComponent } from './components/logging/logging.component';
import { TemplateDrivenComponent } from './modules/forms/components/template-driven/template-driven.component';
import { ReactiveFormComponent } from './modules/forms/components/reactive-form/reactive-form.component';

const routes: Routes = [
  { path : '', redirectTo : '/services', pathMatch: 'full'},
  { path : 'services', component: EmployeeComponent, children : [{path: 'child1', component: PipesComponentComponent}]},
  { path : 'services/:id', component: EmployeeComponent, children : [{path: 'child1', component: PipesComponentComponent}]},
  { path : 'componentsInteraction', component : ChildOneComponent},
  { path : 'customDirectives', component: ComponentCustomDirectiveComponent},
  { path : 'pipes', component : PipesComponentComponent},
  { path : 'structuralDirectives', component: StructuralDirectivesComponent},
  { path : 'bindings', component : BindingsComponent},
  { path : 'lifeCycle', component : LifecycleTestComponent},
  { path : 'localStorage', component : LocalstorageTestComponent},
  { path : 'log', component : LoggingComponent},
  { path : 'tdf', component : TemplateDrivenComponent},
  { path : 'reactiveForms', component : ReactiveFormComponent},
  
  // lazy loading modules
  { path : 'login', loadChildren : () => import('./modules/login/login.module').then(m => m.LoginModule)},
  { path : 'crud', loadChildren : () => import('./modules/crud/crud.module').then(m => m.CrudModule)},
  { path : '**', component : BindingsComponent}
  
  //check crud & login modules for more routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
