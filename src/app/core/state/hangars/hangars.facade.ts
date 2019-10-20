import { HangarsState } from './hangars.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hangar } from '../../models/hangar';
import * as HangarsActions from './hangars.actions';
import { Injectable } from '@angular/core';
import { HangarPage } from '../../models/hangarPage';
import {
  selectCurrentHangarsPage,
  selectAllHangars,
  selectCurrentHangar,
  selectPreselectedHangar,
  selectPreselectedHangarId
} from './hangars.selectors';

@Injectable({providedIn: 'root'})
export class HangarsFacade {

  hangarsPage$: Observable<HangarPage>;
  hangars$: Observable<Hangar[]>;
  selectedHangar$: Observable<Hangar>;
  preselectedHangar$: Observable<Hangar>;
  preselectedHangarId$: Observable<number>;

  constructor(private store: Store<HangarsState>) {
    this.hangarsPage$ = this.store.select(selectCurrentHangarsPage);
    this.hangars$ = this.store.select(selectAllHangars);
    this.selectedHangar$ = this.store.select(selectCurrentHangar);
    this.preselectedHangar$ = this.store.select(selectPreselectedHangar);
    this.preselectedHangarId$ = this.store.select(selectPreselectedHangarId);
  }

  setPreselectedHangar(id: number) {
    this.store.dispatch(new HangarsActions.PreselectHangar(id));
  }

  loadHangar(id: number) {
    this.store.dispatch(new HangarsActions.LoadHangar(id));
  }

  loadHangarsPage(page: number, items: number) {
    this.store.dispatch(new HangarsActions.LoadHangarsPage(page, items));
  }

  submitHangarData(hangar: Hangar) {
    console.log('in facade');
    this.store.dispatch(new HangarsActions.SubmitHangar(hangar));
  }

  /*
  addHangar(hangar: Hangar) {
    this.store.dispatch(new HangarsActions.AddHangar(hangar));
  }

  updateHangar(hangar: Hangar) {
    this.store.dispatch(new HangarsActions.UpdateHangar(hangar));
  }
  */
}
