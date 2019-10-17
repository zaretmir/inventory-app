import { StockState } from './stock.reducer';
import { Store } from '@ngrx/store';
import { LoadHangarStock, LoadProductStock, SelectProduct } from './stock.actions';
import { HangarsState } from '../hangars/hangars.reducer';
import { Observable } from 'rxjs';
import { StockEntry } from '../../models/stock-entry';
import { selectStockEntries, selectStockEntriesOfHangar, selectStockEntriesOfProduct } from './stock.selectors';
import { Injectable } from '@angular/core';

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
    this.store.dispatch(new SelectProduct(hangarId));
  }

  loadHangarStock(hangarId: number) {
    this.store.dispatch(new LoadHangarStock(hangarId));
  }

  loadProductStock(productId: number) {
    this.store.dispatch(new LoadProductStock(productId));
  }
}
