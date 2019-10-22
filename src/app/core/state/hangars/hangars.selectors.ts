import { HangarsState } from './hangars.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Hangar } from '../../models/hangar';
import * as fromRouter from '../router/router.selectors';

export const selectHangarsState = createFeatureSelector<HangarsState>('hangars');

export const selectPreselectedHangarId = createSelector(
  selectHangarsState,
  (state: HangarsState) => state.preselectedHangarId
);

export const selectAllHangars = createSelector(
  selectHangarsState,
  (state: HangarsState) => state.hangars
);

export const selectCurrentHangarsPage = createSelector(
  selectHangarsState,
  (state: HangarsState) => state.currentHangarPage
);

export const selectPreselectedHangar = createSelector(
  selectAllHangars,
  selectPreselectedHangarId,
  (allHangars: Hangar[], hangarId: number): Hangar => {
    return hangarId && allHangars.find(hangar => hangar.id === hangarId);
  }
);

export const selectCurrentHangar = createSelector(
  selectAllHangars,
  fromRouter.selectParamHangarId,
  (allHangars: Hangar[], hangarId: string): Hangar => {
    return hangarId && allHangars.find(hangar => hangar.id === +hangarId);
  }
);

export const selectError = createSelector(
  selectHangarsState,
  (state: HangarsState) => state.error
);
