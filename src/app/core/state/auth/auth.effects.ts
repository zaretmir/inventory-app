import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { AuthActionTypes, LogInSuccess, LogIn, LoadProfile, LoadProfileSuccess, AuthRequestFail } from './auth.actions';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserManagementService } from '../../services/auth/user-management.service';
import { UserProfile } from '../../models/user-profile';

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

  @Effect({dispatch: false}) logInSuccess$: Observable<Action>
    = this.actions$.pipe(
      ofType(AuthActionTypes.LOGIN_SUCCESS),
      tap((action: LogInSuccess) => {
        sessionStorage.setItem('username', action.user.username);
        sessionStorage.setItem('token', `Bearer ${ action.user.token }`);

        this.router.navigateByUrl('/home');
        return null;
      })
    );

  @Effect() loadProfile$: Observable<Action>
    = this.actions$.pipe(
      ofType(AuthActionTypes.LOAD_PROFILE),
      switchMap(() =>
        this.userService.getLoggedUserProfile().pipe(
          map((profile: UserProfile) => new LoadProfileSuccess(profile)),
          catchError((error) => of(new AuthRequestFail(error)))
        ))
    );

  constructor(
    private authService: AuthenticationService,
    private userService: UserManagementService,
    private actions$: Actions,
    private router: Router) { }
}
