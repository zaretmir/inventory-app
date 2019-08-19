import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  checkLogin() {
    console.log('Auth: ');
    this.authenticationService.authenticate(this.username.value, this.password.value)
    .subscribe(
      data => {
        this.router.navigate(['']);
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

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }


}
