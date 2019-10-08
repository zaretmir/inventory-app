import { Action } from '@ngrx/store';
import { Hangar } from '../../interfaces/hangar';
import { HangarPage } from '../../interfaces/hangarPage';

export enum HangarsActionTypes {
  SelectedHangar = '[Hangars] Selected',
  LoadHangars = '[Hangars] Load all hangars data',
  HangarsLoaded = '[Hangars] All hangars data loaded',
  LoadHangarsPage = '[Hangars] Load hangars data page',
  HangarsPageLoaded = '[Hangars] hangars data page loaded',
  AddHangar = '[Hangars] Add data',
  UpdateHangar = '[Hangars] Update data',
  DeleteHangar = '[Hangars] Delete data'
}

export class SelectedHangar implements Action {
  readonly type = HangarsActionTypes.SelectedHangar;
  constructor(public payload: number) {}
}

export class LoadHangars implements Action {
  readonly type = HangarsActionTypes.LoadHangars;
}

export class HangarsLoaded implements Action {
  readonly type = HangarsActionTypes.HangarsLoaded;
  constructor(public hangars: Hangar[]) {}
}

export class LoadHangarsPage implements Action {
  readonly type = HangarsActionTypes.LoadHangarsPage;
    constructor(
      public page: number,
      public items: number) {}
}

export class HangarsPageLoaded implements Action {
  readonly type = HangarsActionTypes.HangarsPageLoaded;
  constructor(public hangarPage: HangarPage) {}
}

export class AddHangar implements Action {
  readonly type = HangarsActionTypes.AddHangar;
  constructor(public payload: number) {}
}

export class UpdateHangar implements Action {
  readonly type = HangarsActionTypes.UpdateHangar;
  constructor(public payload: number) {}
}

export class DeleteHangar implements Action {
  readonly type = HangarsActionTypes.DeleteHangar;
  constructor(public payload: number) {}
}

export type HangarsAction = SelectedHangar
  | LoadHangars
  | HangarsLoaded
  | LoadHangarsPage
  | HangarsPageLoaded
  | AddHangar
  | UpdateHangar
  | DeleteHangar;
