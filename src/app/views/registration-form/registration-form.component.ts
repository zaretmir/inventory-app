import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';
import { RegistrationService } from 'src/app/core/services/registration.service';
import { Router } from '@angular/router';

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
    password: new FormControl(
      '',
      [Validators.required]
    ),
    passwordR: new FormControl(
      '',
      Validators.required
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
    return this.registrationForm.get('password');
  }

}
