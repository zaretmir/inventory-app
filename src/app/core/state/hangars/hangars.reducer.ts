import { HangarsActionTypes, HangarsAction, SelectHangar } from './hangars.actions';
import { Hangar } from '../../models/hangar';
import { tassign } from 'tassign';
import { HangarPage } from '../../models/hangarPage';


const addHangar = (hangars: Hangar[], newHangar: Hangar) => [...hangars, newHangar];
const addHangars = (hangars: Hangar[], newHangars: Hangar[]) => [...hangars, ...newHangars];
const updatedHangars = (hangars: Hangar[], hangar: Hangar) =>
  hangars.map(h => h.id === hangar.id ? hangar : h);

export interface HangarsState {
  selectedHangarId: number;
  currentHangarPage: HangarPage;
  hangars: Hangar[];
}

export const initialState: HangarsState = {
  selectedHangarId: null,
  currentHangarPage: null,
  hangars: []
};

export function hangarsReducer(
  state: HangarsState = initialState, action: HangarsAction): HangarsState {
    switch (action.type) {
      case HangarsActionTypes.SELECT_HANGAR:
        return tassign(state, { selectedHangarId: action.hangarId });
      case HangarsActionTypes.LOAD_HANGARS_SUCCESS:
        return tassign(state,
          { hangars: action.hangars });
      case HangarsActionTypes.LOAD_HANGARS_PAGE_SUCCESS:
        return tassign(state,
          {
            currentHangarPage: action.hangarPage,
            hangars: addHangars(state.hangars, action.hangarPage.content)
           });
      case HangarsActionTypes.ADD_HANGAR_SUCCESS:
        return tassign(state,
          { hangars: addHangar(this.hangars, action.hangar)});
      case HangarsActionTypes.UPDATE_HANGAR_SUCCESS:
          return tassign(state,
            { hangars: updatedHangars(this.hangars, action.hangar)});
      case HangarsActionTypes.DELETE_HANGAR_SUCCESS: // TODO
        return state;
      default:
        return state;
    }
  }
