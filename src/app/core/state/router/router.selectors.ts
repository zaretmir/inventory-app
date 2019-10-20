import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from './router.reducer';
import { RouterReducerState } from '@ngrx/router-store';

export const selectRouterState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
  >('router');

export const selectStateUrl = createSelector(
  selectRouterState,
  (state: RouterReducerState<RouterStateUrl>) => state.state.url
);
