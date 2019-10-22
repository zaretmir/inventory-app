import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from './router.reducer';
import { RouterReducerState, getSelectors } from '@ngrx/router-store';
import { RootState } from '..';

export const selectRouterState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
  >('router');

export const selectRouter = createSelector(
  selectRouterState,
  (state: RouterReducerState<RouterStateUrl>) => state.state
);

export const selectUrl = getSelectors(selectRouterState).selectUrl;

export const selectParamHangarId = createSelector(
  selectRouterState,
  (state: RouterReducerState<RouterStateUrl>) => state && state.state.params.hangarId
);

export const selectParamProductId = createSelector(
  selectRouterState,
  (state: RouterReducerState<RouterStateUrl>) => state && state.state.params.productId
);

