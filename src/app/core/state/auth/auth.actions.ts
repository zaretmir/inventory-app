import { Action } from '@ngrx/store';
import { User } from '../../models/user';
import { UserProfile } from '../../models/user-profile';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login success',
  AUTH_REQUEST_FAIL = '[Auth] Request fail',
  LOAD_PROFILE = '[Auth] Load logged user profile',
  LOAD_PROFILE_SUCCESS = '[Auth] User profile load success',
  UPDATE_PROFILE = '[Auth] Update logged user profile',
  UPDATE_PROFILE_SUCCESS = '[Auth] Logged user profile update success'
}

export class LogIn implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: User) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public user: User) {}
}

export class AuthRequestFail implements Action {
  readonly type = AuthActionTypes.AUTH_REQUEST_FAIL;
  constructor(public payload: any) {}
}

export class LoadProfile implements Action {
  readonly type = AuthActionTypes.LOAD_PROFILE;
  constructor() {}
}

export class LoadProfileSuccess implements Action {
  readonly type = AuthActionTypes.LOAD_PROFILE_SUCCESS;
  constructor(public profile: UserProfile) {}
}

export class UpdateProfile implements Action {
  readonly type = AuthActionTypes.UPDATE_PROFILE;
  constructor(public data: UserProfile) {}
}

export class UpdateProfileSuccess implements Action {
  readonly type = AuthActionTypes.UPDATE_PROFILE_SUCCESS;
  constructor(public data: UserProfile) {}
}

export type AuthActions = LogIn
  | LogInSuccess
  | AuthRequestFail
  | LoadProfile
  | LoadProfileSuccess
  | UpdateProfile
  | UpdateProfileSuccess;

