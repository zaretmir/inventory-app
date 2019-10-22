import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import {
  StockActionTypes,
  LoadProductStock, ProductStockLoaded,
  LoadHangarStock, HangarStockLoaded,
  UpdateStockEntry, StockEntryUpdated, LoadSelectedHangarStock, LoadSelectedProductStock } from './stock.actions';
import { ProductHangarApiService } from '../../services/stock-api.service';
import { StockEntry } from '../../models/stock-entry';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { RootState } from '..';
import { selectParamHangarId, selectParamProductId } from '../router/router.selectors';

@Injectable()
export class StockEffects {
  @Effect() loadProductStock$: Observable<Action>
    = this.actions$.pipe(
      ofType(StockActionTypes.LOAD_PRODUCT_STOCK_ENTRIES),
      switchMap((action: LoadProductStock) =>
        this.stockService
        .getStockByProduct(action.productId.toString())
        .pipe(
          map((response: StockEntry[]) => new ProductStockLoaded(response))
        ))
    );

  @Effect() loadSelectedProductStock$: Observable<Action>
  = this.actions$.pipe(
    ofType(StockActionTypes.LOAD_SELECTED_PRODUCT_STOCK_ENTRIES),
    withLatestFrom(this.store.select(selectParamProductId)),
    switchMap(([action, productId]: [LoadSelectedProductStock, string]) =>
      this.stockService
      .getStockByProduct(productId)
      .pipe(
        map((response: StockEntry[]) => new ProductStockLoaded(response))
      ))
  );

  @Effect() loadHangarStock$: Observable<Action>
    = this.actions$.pipe(
      ofType(StockActionTypes.LOAD_HANGAR_STOCK_ENTRIES),
      switchMap((action: LoadHangarStock) =>
        this.stockService
        .getStockInHangar(action.hangarId)
        .pipe(
          map((response: StockEntry[]) => new HangarStockLoaded(response))
        ))
    );

    @Effect() loadSelectedHangarStock$: Observable<Action>
    = this.actions$.pipe(
      ofType(StockActionTypes.LOAD_SELECTED_HANGAR_STOCK_ENTRIES),
      withLatestFrom(this.store.select(selectParamHangarId)),
      switchMap(([action, hangarId]: [LoadSelectedHangarStock, string]) =>
        this.stockService
        .getStockInHangar(+hangarId)
        .pipe(
          map((response: StockEntry[]) => new HangarStockLoaded(response))
        ))
    );

  @Effect() updateStock$: Observable<Action>
    = this.actions$.pipe(
      ofType(StockActionTypes.UPDATE_STOCK),
      switchMap((action: UpdateStockEntry) =>
        this.stockService
          .updateStock(action.stockEntry)
          .pipe(
            map((response: StockEntry) => new StockEntryUpdated(response))
          )
      )
    );

  constructor(
    private actions$: Actions,
    private stockService: ProductHangarApiService,
    private store: Store<RootState>
  ) {}
}
