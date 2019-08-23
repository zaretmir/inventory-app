import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/core/services/auth/registration.service';

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
      Validators.required
    ),
    passwords: new FormGroup({
      password: new FormControl(
        '',
        [Validators.required]
      ),
      confirmPass: new FormControl(
        '',
        Validators.required
      )
    }, { validators: this.validatePassword }
    )
  });

  constructor( private registrationService: RegistrationService,
               private router: Router ) { }

  ngOnInit() {
  }

  registerUser() {
    this.user = new User();
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

  // Password validation
  validatePassword(group: FormGroup) {
    const pass = group.get('password');
    const confirmPass = group.get('confirmPass');

    return pass.value === confirmPass.value ? null : { notSame: true };
  }

}
