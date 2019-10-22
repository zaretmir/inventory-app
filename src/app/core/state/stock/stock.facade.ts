import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StockEntry } from '../../models/stock-entry';
import { StockState } from './stock.reducer';
import {
  selectStockEntries,
  selectStockEntriesOfHangar,
  selectStockEntriesOfProduct
} from './stock.selectors';
import {
  LoadHangarStock,
  LoadProductStock,
  SelectProduct,
  SelectHangar,
  LoadSelectedHangarStock,
  LoadSelectedProductStock
} from './stock.actions';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class StockFacade {

  stockEntries$: Observable<StockEntry[]>;
  stockEntriesOfProduct$: Observable<StockEntry[]>;
  stockEntriesOfHangar$: Observable<StockEntry[]>;

  constructor(
    private store: Store<StockState>) {
      this.stockEntries$ = this.store.select(selectStockEntries);
      this.stockEntriesOfProduct$ = this.store.select(selectStockEntriesOfProduct);
      this.stockEntriesOfHangar$ = this.store.select(selectStockEntriesOfHangar);
    }

  // Temporary?
  setSelectedProduct(productId: number) {
    this.store.dispatch(new SelectProduct(productId));
  }

  setSelectedHangar(hangarId: number) {
    this.store.dispatch(new SelectHangar(hangarId));
  }

  loadHangarStock(hangarId: number) {
    this.store.dispatch(new LoadHangarStock(hangarId));
  }

  loadProductStock(productId: number) {
    this.store.dispatch(new LoadProductStock(productId));
  }

  loadHangarStockByRouteParam() {
    this.store.dispatch(new LoadSelectedHangarStock());
  }

  loadProductStockByRouteParam() {
    this.store.dispatch(new LoadSelectedProductStock());
  }
}
