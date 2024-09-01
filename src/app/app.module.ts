import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';
import { BindingsComponent } from './components/bindings/bindings.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { PipesComponentComponent } from './components/pipes-component/pipes-component.component';
import { ComponentCustomDirectiveComponent } from './components/component-for-custom-directives/component-custom-directive.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NavsforRoutingComponent } from './components/navsfor-routing/navsfor-routing.component';
import { LocalstorageTestComponent } from './components/localstorage-test/localstorage-test.component';
import { LifecycleTestComponent } from './components/lifecycle-test/lifecycle-test.component';
import { CustomStructuralDirective } from './customDirectives/custom-structural.directive';
import { CustomAttributeDirectiveDirective } from './customDirectives/custom-attribute-directive.directive';
import { CustomPipe1, CustomPipe2 } from './pipes/custom-pipe.pipe';
import { LoggerInterceptor } from './logger.interceptor';
import { LoggingComponent } from './components/logging/logging.component';
import { FormTypesModule } from './modules/forms/forms.module';

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
    EmployeeComponent,
    NavsforRoutingComponent,
    LocalstorageTestComponent,
    LifecycleTestComponent,
    LoggingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormTypesModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule, {provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
