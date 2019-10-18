import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/auth/authentication.service';
import { Router } from '@angular/router';
import { AuthFacade } from 'src/app/core/state/auth/auth.facade';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthFacade]
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(
      '',
      Validators.required),
    password: new FormControl(
      '',
      Validators.required)
  });

  invalidLogin = true;

  constructor(
    private authFacade: AuthFacade,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  authenticate() {
    const user: User = this.loginForm.value;
    this.authFacade.authenticate(user);
  }

  /*
  checkLogin() {
    console.log('Auth: ');
    this.authenticationService.authenticate(this.username.value, this.password.value)
    .subscribe(
      data => {
        this.router.navigateByUrl('/home');
        console.log('data');
        console.log(data);
        this.invalidLogin = false;
      },
      error => {
        console.log('error');
        console.log(error);
        this.invalidLogin = true;
      }
    );
  }
  */

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }


}
