import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUsername = createSelector(
  selectAuthState,
  (state: AuthState) => state.user.username
);

export const selectUserProfile = createSelector(
  selectAuthState,
  (state: AuthState) => state.userProfile
);

