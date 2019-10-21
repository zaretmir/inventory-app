import { User } from '../../models/user';
import { AuthActions, AuthActionTypes } from './auth.actions';
import { tassign } from 'tassign';
import { UserProfile } from '../../models/user-profile';

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  userProfile: UserProfile | null;
  error: string | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  userProfile: null,
  error: null,
};

export function authReducer(state: AuthState = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:
      return tassign(state,
        {
        isAuthenticated: true,
        user: action.user,
        error: null
      });
    case AuthActionTypes.LOAD_PROFILE_SUCCESS:
      return tassign(state,
        {
          userProfile: action.profile
        });
    case AuthActionTypes.UPDATE_PROFILE_SUCCESS:
      return tassign(state,
        {
          userProfile: action.data
        });
    default:
      return state;
  }

}
