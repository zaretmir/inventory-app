import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { HangarsActionTypes, LoadHangarsPage, HangarsPageLoaded, AddHangar, HangarAdded, LoadHangar } from './hangars.actions';
import { HangarApiService } from '../../services/hangar-api.service';
import { map, switchMap } from 'rxjs/operators';
import { Hangar } from '../../models/hangar';
import { HangarPage } from '../../models/hangarPage';

@Injectable()
export class HangarsEffects {
  @Effect() loadHangar$: Observable<Action>
    = this.actions$.pipe(
      ofType(HangarsActionTypes.LOAD_HANGAR),
      switchMap((action: LoadHangar) =>
        this.hangarService
          .getHangarById(action.hangarId)
          .pipe(
            map((response: Hangar) => new HangarAdded(response)) // No necesito pasar por el reducer?
          ))
    );

  @Effect() loadHangarsPage$: Observable<Action>
    = this.actions$.pipe(
        ofType(HangarsActionTypes.LOAD_HANGARS_PAGE),
        switchMap((action: LoadHangarsPage) =>
          this.hangarService
            .getHangarPage(action.page, action.items)
            .pipe(
              map((response: HangarPage) => new HangarsPageLoaded(response))
            ))
      );

  @Effect() addHangar$: Observable<Action>
    = this.actions$.pipe(
        ofType(HangarsActionTypes.ADD_HANGAR),
        switchMap((action: AddHangar) =>
          this.hangarService
            .postHangar(action.hangar)
            .pipe(
              map((response: Hangar) => new HangarAdded(response))
            ))
      );

  @Effect() updateHangar$: Observable<Action>
    = this.actions$.pipe(
        ofType(HangarsActionTypes.ADD_HANGAR),
        switchMap((action: AddHangar) =>
          this.hangarService
            .editHangar(action.hangar)
            .pipe(
              map((response: Hangar) => new HangarAdded(response))
            ))
      );


  constructor(private hangarService: HangarApiService,
              private actions$: Actions) { }

}
