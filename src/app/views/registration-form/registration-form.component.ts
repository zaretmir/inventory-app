import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/core/services/auth/registration.service';
import { PasswordValidators } from './password.validators';
import { UsernameValidators } from './username.validators';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  private user: User;

  registrationForm = new FormGroup({
    username: new FormControl(
      '',
      [ Validators.required,
        UsernameValidators.validPattern ],
      UsernameValidators.mustBeUnique(this.registrationService)
    ),
    passwords: new FormGroup({
      password: new FormControl(
        '',
        [ Validators.required,
          PasswordValidators.safetyLevel ]
      ),
      confirmPass: new FormControl(
        '',
        Validators.required
      )
    }, { validators: PasswordValidators.shouldMatch('password', 'confirmPass') }
    )
  });

  constructor( private registrationService: RegistrationService,
               private router: Router,
               private fb: FormBuilder) { }

  ngOnInit() {

  }

  registerUser() {
    this.user.username = this.username.value;
    this.user.password = this.password.value;

    return this.registrationService.register( this.user ).subscribe(
      data => {
        console.log(data);
        return this.router.navigateByUrl('login');
      }
    );
  }

  get username() {
    return this.registrationForm.get('username');
  }

  get password() {
    return this.registrationForm.get('passwords').get('password');
  }

  get confirmPass() {
    return this.registrationForm.get('passwords').get('confirmPass');
  }

  get passwords() {
    return this.registrationForm.get('passwords');
  }

}
