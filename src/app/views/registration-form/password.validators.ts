import { AbstractControl, ValidationErrors, FormGroup, ValidatorFn, Form, FormControl } from '@angular/forms';

export class PasswordValidators {


  /*
  static security(control: FormControl): ValidationErrors | null {
    const
    if (pass1.value === pass2.value) {
      console.log('mismatch');
      return { missmatch: true };
    }
    return null;
  }
  */


      // https://stackoverflow.com/questions/52440811/angular-6-reactive-forms-synchronous-cross-field-validation
      // https://stackoverflow.com/questions/32782922/what-do-multiple-arrow-functions-mean-in-javascript

  static shouldMatch = (controlName: string, confirmControlName: string): ValidatorFn => {
    return (group: FormGroup): ValidationErrors | null => {
      const value = group.get(controlName).value;
      const confirmValue = group.get(confirmControlName).value;

      return (value !== confirmValue) ? { mismatch: true } : null;
    };
  }

  static safetyLevel(control: FormControl): ValidationErrors | null {
    const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
    const password = control.value;

    return strongRegex.test(password) ? null : { unsafe: true };
  }

}
