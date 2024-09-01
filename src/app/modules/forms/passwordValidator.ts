import { AbstractControl } from "@angular/forms";

export function passwordStrengthValidator(control : AbstractControl) : {[key:string]: any} | null
{
    var passwordLength = (control.value).length;
    return (passwordLength>7)? null : { 'passwordStrengthValidator': 'weak'};
}

export function confirmPasswordValidator(control : AbstractControl) : {[key:string]: boolean} | null
{
    var password = control.get('password')?.value;
    var confirmPassword = control.get('confirmPassword')?.value;
    return (password==confirmPassword)? null : { 'passwordsMatch': false};
}