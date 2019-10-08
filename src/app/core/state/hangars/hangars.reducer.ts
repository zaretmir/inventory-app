import { HangarsActionTypes, HangarsAction } from './hangars.actions';
import { Hangar } from '../../interfaces/hangar';
import { tassign } from 'tassign';
import { HangarPage } from '../../interfaces/hangarPage';


const addHangars = (hangars: Hangar[], newHangars: Hangar[]) => [...hangars, ...newHangars];

export interface HangarsState {
  currentHangarPage: HangarPage;
  hangars: Hangar[];
}

export const initialState: HangarsState = {
  currentHangarPage: null,
  hangars: []
};

export function hangarsReducer(
  state: HangarsState = initialState, action: HangarsAction): HangarsState {
    switch (action.type) {
      case HangarsActionTypes.HangarsLoaded:
        return tassign(state,
          { hangars: action.hangars });
      case HangarsActionTypes.HangarsPageLoaded:
        console.log(action.hangarPage);
        return tassign(state,
          { currentHangarPage: action.hangarPage });
      default:
        return state;
    }
}
