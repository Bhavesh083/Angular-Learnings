import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TemplateDrivenComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormTypesModule { }