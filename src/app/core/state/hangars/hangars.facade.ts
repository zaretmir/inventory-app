import { HangarsState } from './hangars.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hangar } from '../../models/hangar';
import * as HangarsActions from './hangars.actions';
import { Injectable } from '@angular/core';
import { HangarPage } from '../../models/hangarPage';
import { selectCurrentHangarsPage, selectAllHangars, selectHangarId, selectCurrentHangar  } from './hangars.selectors';

@Injectable({providedIn: 'root'})
export class HangarsFacade {

  hangarsPage$: Observable<HangarPage>;
  hangars$: Observable<Hangar[]>;
  selectedHangar$: Observable<Hangar>;
  selectedHangarId$: Observable<number>;

  constructor(private store: Store<HangarsState>) {
    this.hangarsPage$ = this.store.select(selectCurrentHangarsPage);
    this.hangars$ = this.store.select(selectAllHangars);
    this.selectedHangarId$ = this.store.select(selectHangarId);
    this.selectedHangar$ = this.store.select(selectCurrentHangar);
  }

  setSelectedHangar(id: number) {
    this.store.dispatch(new HangarsActions.SelectHangar(id));
  }

  loadHangar(id: number) {
    this.store.dispatch(new HangarsActions.LoadHangar(id));
  }

  loadHangarsPage(page: number, items: number) {
    this.store.dispatch(new HangarsActions.LoadHangarsPage(page, items));
  }

  addHangar(hangar: Hangar) {
    this.store.dispatch(new HangarsActions.AddHangar(hangar));
  }

  updateHangar(hangar: Hangar) {
    this.store.dispatch(new HangarsActions.UpdateHangar(hangar));
  }
}
