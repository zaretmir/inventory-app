import { User } from '../../models/user';
import { AuthActions, AuthActionTypes } from './auth.actions';
import { tassign } from 'tassign';

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null,
};

export function authReducer(state: AuthState = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:
      return tassign(state,
        {
        isAuthenticated: true,
        user: action.user,
        errorMessage: null
      });
    default:
      return state;
  }

}
