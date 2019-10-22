import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import {
  HangarsActionTypes,
  LoadHangarsPage,
  LoadHangarsPageSuccess,
  AddHangar,
  AddHangarSuccess,
  LoadHangar,
  SubmitHangar,
  UpdateHangar,
  UpdateHangarSuccess,
  HangarRequestFail
} from './hangars.actions';
import { HangarApiService } from '../../services/hangar-api.service';
import { map, switchMap, tap, withLatestFrom, catchError } from 'rxjs/operators';
import { Hangar } from '../../models/hangar';
import { HangarPage } from '../../models/hangarPage';
import { Router } from '@angular/router';
import { RootState } from '..';
import { selectUrl } from '../router/router.selectors';

@Injectable()
export class HangarsEffects {
  @Effect() loadHangar$: Observable<Action>
    = this.actions$.pipe(
      ofType(HangarsActionTypes.LOAD_HANGAR),
      switchMap((action: LoadHangar) =>
        this.hangarService
          .getHangarById(action.hangarId)
          .pipe(
            map((response: Hangar) => new AddHangarSuccess(response)), // No necesito pasar por el reducer?
            catchError((error) => of(new HangarRequestFail(error)))
          ))
    );

  @Effect() loadHangarsPage$: Observable<Action>
    = this.actions$.pipe(
        ofType(HangarsActionTypes.LOAD_HANGARS_PAGE),
        switchMap((action: LoadHangarsPage) =>
          this.hangarService
            .getHangarPage(action.page, action.items)
            .pipe(
              map((response: HangarPage) => new LoadHangarsPageSuccess(response)),
              catchError((error) => of(new HangarRequestFail(error)))
            ))
      );

  @Effect() addHangar$: Observable<Action>
    = this.actions$.pipe(
        ofType(HangarsActionTypes.ADD_HANGAR),
        switchMap((action: AddHangar) =>
          this.hangarService
            .postHangar(action.hangar)
            .pipe(
              map((response: Hangar) => new AddHangarSuccess(response)),
              catchError((error) => of(new HangarRequestFail(error)))
            ))
      );

  @Effect() submitHangar$: Observable<Action>
    = this.actions$.pipe(
      ofType(HangarsActionTypes.SUBMIT_HANGAR),
      withLatestFrom(this.store.select(selectUrl)),
      map(([action, url]: [SubmitHangar, string]) => {
        console.log('inside effect');
        console.log(url);

        if (url.includes('edit')) {
          console.log('isEdit');
          return new UpdateHangar(action.hangar);
        }

        if (url.includes('add')) {
          console.log('isAdd');
          return new AddHangar(action.hangar);
        }
      })
    );


  @Effect() updateHangar$: Observable<Action>
    = this.actions$.pipe(
        ofType(HangarsActionTypes.UPDATE_HANGAR),
        switchMap((action: UpdateHangar) =>
          this.hangarService
            .editHangar(action.hangar)
            .pipe(
              map((response: Hangar) => new UpdateHangarSuccess(response)),
              catchError((error) => of(new HangarRequestFail(error)))
            ))
      );

  @Effect({dispatch: false}) hangarUpdateSuccess$: Observable<Action>
    = this.actions$.pipe(
        ofType(HangarsActionTypes.UPDATE_HANGAR_SUCCESS),
        tap(() => this.router.navigateByUrl('/home'))
    );


  constructor(private hangarService: HangarApiService,
              private actions$: Actions,
              private store: Store<RootState>,
              private router: Router) { }

}
