import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { BindingsComponent } from './bindings/bindings.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { CustomPipe1, CustomPipe2 } from './pipes/custom-pipe.pipe';
import { PipesComponentComponent } from './pipes/pipes-component/pipes-component.component';
import { CustomAttributeDirectiveDirective } from './customDirectives/custom-attribute-directive.directive';
import { ComponentCustomDirectiveComponent } from './customDirectives/component-custom-directive/component-custom-directive.component';
import { CustomStructuralDirective } from './customDirectives/custom-structural.directive';
import { EmployeeComponent } from './servicesComponents/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    ChildTwoComponent,
    BindingsComponent,
    StructuralDirectivesComponent,
    CustomPipe1, CustomPipe2,
    PipesComponentComponent,
    CustomAttributeDirectiveDirective,
    ComponentCustomDirectiveComponent,
    CustomStructuralDirective,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
