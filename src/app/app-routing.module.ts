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

const routes: Routes = [
  { path : '', redirectTo : '/services', pathMatch: 'full'},
  { path : 'services', component: EmployeeComponent, children : [{path: 'child1', component: PipesComponentComponent}]},
  { path : 'services/:id', component: EmployeeComponent},
  { path : 'componentsInteraction', component : ChildOneComponent},
  { path : 'customDirectives', component: ComponentCustomDirectiveComponent},
  { path : 'pipes', component : PipesComponentComponent},
  { path : 'structuralDirectives', component: StructuralDirectivesComponent},
  { path : 'bindings', component : BindingsComponent},
  { path : '**', component : BindingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
