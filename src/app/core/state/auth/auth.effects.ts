import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { AuthActionTypes, AuthActions, LogInSuccess, LogIn } from './auth.actions';
import { switchMap, map, tap } from 'rxjs/operators';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  @Effect() logIn$: Observable<Action>
    = this.actions$.pipe(
      ofType(AuthActionTypes.LOGIN),
      switchMap((action: LogIn) =>
          this.authService
            .authenticate(action.payload.username, action.payload.password)
            .pipe(
              map((response: any) => {
                let user: User;
                user = response.user;
                user.token = response.jwttoken;
                user.roles = response.user.roles.map(role => role.rolename);
                console.log(response);
                console.log(user);
                return new LogInSuccess(user);
              }
                )
            )
      )
    );

  @Effect({dispatch: false}) logInSuccess: Observable<Action>
    = this.actions$.pipe(
      ofType(AuthActionTypes.LOGIN_SUCCESS),
      tap((action: LogInSuccess) => {
        sessionStorage.setItem('username', action.user.username);
        sessionStorage.setItem('token', `Bearer ${ action.user.token }`);

        this.router.navigateByUrl('/home');
        return null;
      })
    );


  constructor(
    private authService: AuthenticationService,
    private actions$: Actions,
    private router: Router) { }
}
