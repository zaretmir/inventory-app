import { FormControl, ValidationErrors, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { RegistrationService } from 'src/app/core/services/auth/registration.service';

export class UsernameValidators {

  static validPattern(control: FormControl): ValidationErrors | null {
    const invalidRegex = new RegExp('(?=\\s)');
    const username = control.value;

    return invalidRegex.test(username) ? { invalidPattern: true } : null;
  }


  static mustBeUnique(registrationService: RegistrationService): AsyncValidatorFn {
    return (control: FormControl): Promise<ValidationErrors|null> => {
      const username = control.value;
      return new Promise( (resolve, reject) => {
        registrationService.isUser(username).subscribe(
          response => {
            if (response) {
              console.log(response);
              resolve({ notUnique: true});
            } else {
              resolve(null);
            }
          });
      });
    };
  }

}
