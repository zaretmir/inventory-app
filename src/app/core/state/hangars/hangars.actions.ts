import { Action } from '@ngrx/store';
import { Hangar } from '../../models/hangar';
import { HangarPage } from '../../models/hangarPage';

export enum HangarsActionTypes {
  PRESELECT_HANGAR = '[Hangars] Set preselected hangar id',
  LOAD_HANGAR = '[Hangars] Load hangar data',
  LOAD_HANGAR_SUCCESS = '[Hangars] Hangar data loaded',
  LOAD_HANGARS = '[Hangars] Load all hangars data',
  LOAD_HANGARS_SUCCESS = '[Hangars] All hangars data loaded',
  LOAD_HANGARS_PAGE = '[Hangars] Load hangars data page',
  LOAD_HANGARS_PAGE_SUCCESS = '[Hangars] hangars data page loaded',
  SUBMIT_HANGAR = '[Hangars] Hangar data submitted',
  ADD_HANGAR = '[Hangars] Add data',
  ADD_HANGAR_SUCCESS = '[Hangars] Data added',
  UPDATE_HANGAR = '[Hangars] Update data',
  UPDATE_HANGAR_SUCCESS = '[Hangars] Data updated',
  DELETE_HANGAR = '[Hangars] Delete data',
  DELETE_HANGAR_SUCCESS = '[Hangars] Data deleted',
  HANGAR_REQUEST_FAIL = '[Hangars] Request failed',
}

export class PreselectHangar implements Action {
  readonly type = HangarsActionTypes.PRESELECT_HANGAR;
  constructor(public hangarId: number) {}
}
export class LoadHangar implements Action {
  readonly type = HangarsActionTypes.LOAD_HANGAR;
  constructor(public hangarId: number) {}
}

export class LoadHangarSuccess implements Action {
  readonly type = HangarsActionTypes.LOAD_HANGAR_SUCCESS;
  constructor(public hangar: Hangar) {}
}

export class LoadHangars implements Action {
  readonly type = HangarsActionTypes.LOAD_HANGARS;
}

export class LoadHangarsSuccess implements Action {
  readonly type = HangarsActionTypes.LOAD_HANGARS_SUCCESS;
  constructor(public hangars: Hangar[]) {}
}

export class LoadHangarsPage implements Action {
  readonly type = HangarsActionTypes.LOAD_HANGARS_PAGE;
    constructor(
      public page: number,
      public items: number) {}
}

export class LoadHangarsPageSuccess implements Action {
  readonly type = HangarsActionTypes.LOAD_HANGARS_PAGE_SUCCESS;
  constructor(public hangarPage: HangarPage) {}
}

export class SubmitHangar implements Action {
  readonly type = HangarsActionTypes.SUBMIT_HANGAR;
  constructor(public hangar: Hangar) {}
}

export class AddHangar implements Action {
  readonly type = HangarsActionTypes.ADD_HANGAR;
  constructor(public hangar: Hangar) {}
}

export class AddHangarSuccess implements Action {
  readonly type = HangarsActionTypes.ADD_HANGAR_SUCCESS;
  constructor(public hangar: Hangar) {}
}


export class UpdateHangar implements Action {
  readonly type = HangarsActionTypes.UPDATE_HANGAR;
  constructor(public hangar: Hangar) {}
}

export class UpdateHangarSuccess implements Action {
  readonly type = HangarsActionTypes.UPDATE_HANGAR_SUCCESS;
  constructor(public hangar: Hangar) {}
}

export class DeleteHangar implements Action {
  readonly type = HangarsActionTypes.DELETE_HANGAR;
  constructor(public hangar: Hangar) {}
}

export class HangarDeleted implements Action {
  readonly type = HangarsActionTypes.DELETE_HANGAR_SUCCESS;
  constructor(public hangar: Hangar) {}
}

export class HangarRequestFail implements Action {
  readonly type = HangarsActionTypes.HANGAR_REQUEST_FAIL;
  constructor(public payload: any) {}
}

export type HangarsAction = PreselectHangar
  | LoadHangars
  | LoadHangarsSuccess
  | LoadHangarsPage
  | LoadHangarsPageSuccess
  | LoadHangar
  | LoadHangarSuccess
  | SubmitHangar
  | AddHangar
  | AddHangarSuccess
  | HangarRequestFail
  | UpdateHangar
  | UpdateHangarSuccess
  | DeleteHangar
  | HangarDeleted;
