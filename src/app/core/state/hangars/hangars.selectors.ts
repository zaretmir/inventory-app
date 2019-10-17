import { HangarsState } from './hangars.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Hangar } from '../../models/hangar';

export const selectHangarsState = createFeatureSelector<HangarsState>('hangars');

export const selectHangarId = createSelector(
  selectHangarsState,
  (state: HangarsState) => state.selectedHangarId
);

export const selectAllHangars = createSelector(
  selectHangarsState,
  (state: HangarsState) => state.hangars
);

export const selectCurrentHangarsPage = createSelector(
  selectHangarsState,
  (state: HangarsState) => state.currentHangarPage
);

export const selectCurrentHangar = createSelector(
  selectHangarId,
  selectAllHangars,
  (selectedHangarId: number, allHangars: Hangar[]) => {
    if (selectedHangarId && allHangars) {
      return allHangars.find(hangar => hangar.id === selectedHangarId);
    }
  }
);
