import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator, passwordStrengthValidator } from '../../passwordValidator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  /*   USING FORM GROUP & FORM CONTROLS:-
    sampleForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
    }),
  }); */


  // Shortcut to create group & controls.
  sampleForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(7)]],
    password: ['', [passwordStrengthValidator]],    //custom validation
    confirmPassword: ['', [Validators.required, Validators.minLength(7)]],
    address: this.fb.group({
      state: [''],
      city: ['', Validators.required]
    })
  }, {validator: confirmPasswordValidator})

  setFormValues() {
    // can use patchValues if setting only few properties
    this.sampleForm.setValue({
      name: 'Bhavesh',
      password: 'testpass',
      confirmPassword: 'testpas',
      address: {
        city: 'Nellore',
        state: 'AP',
      },
    });
  }

  getName(){
    return this.sampleForm.get('name');
  }

  getConfirmPassword(){
    return this.sampleForm.get('confirmPassword');
  }

  getPassword(){
    return this.sampleForm.get('password');
  }

  getCity(){
    return this.sampleForm.get('address')?.get('city');
  }

  submit() {
    console.log(this.sampleForm.value);
  }
}
