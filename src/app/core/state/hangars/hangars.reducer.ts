import { HangarsActionTypes, HangarsAction } from './hangars.actions';
import { Hangar } from '../../models/hangar';
import { tassign } from 'tassign';
import { HangarPage } from '../../models/hangarPage';
import { adaptError } from '../utils/store.utils';


const addHangar = (hangars: Hangar[], newHangar: Hangar) => [...hangars, newHangar];
const addHangars = (hangars: Hangar[], newHangars: Hangar[]) => [...hangars, ...newHangars];
const updatedHangars = (hangars: Hangar[], hangar: Hangar) =>
  hangars.map(h => h.id === hangar.id ? hangar : h);

export interface HangarsState {
  preselectedHangarId: number;
  currentHangarPage: HangarPage;
  hangars: Hangar[];
  error: any;
}

export const initialState: HangarsState = {
  preselectedHangarId: null,
  currentHangarPage: null,
  hangars: [],
  error: null
};

export function hangarsReducer(
  state: HangarsState = initialState, action: HangarsAction): HangarsState {
    switch (action.type) {
      case HangarsActionTypes.PRESELECT_HANGAR:
        return tassign(state,
          {
            preselectedHangarId: action.hangarId,
            error: null
          });
      case HangarsActionTypes.LOAD_HANGARS_SUCCESS:
        return tassign(state,
          {
            hangars: action.hangars,
            error: null
          });
      case HangarsActionTypes.LOAD_HANGARS_PAGE_SUCCESS:
        return tassign(state,
          {
            currentHangarPage: action.hangarPage,
            hangars: addHangars(state.hangars, action.hangarPage.content),
            error: null
          });
      case HangarsActionTypes.ADD_HANGAR_SUCCESS:
        return tassign(state,
          {
            hangars: addHangar(state.hangars, action.hangar),
            error: null
          });
      case HangarsActionTypes.UPDATE_HANGAR_SUCCESS:
        return tassign(state,
          {
            hangars: updatedHangars(state.hangars, action.hangar),
            error: null
          });
      case HangarsActionTypes.DELETE_HANGAR_SUCCESS: // TODO
       return state;
      case HangarsActionTypes.HANGAR_REQUEST_FAIL:
        return tassign(state, { error: adaptError(action.payload) });
      default:
        return state;
    }
  }
