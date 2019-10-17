import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StockState } from './stock.reducer';
import { StockEntry } from '../../models/stock-entry';

export const selectStockState = createFeatureSelector('stock');

export const selectHangarId = createSelector(
  selectStockState,
  (state: StockState) => state.selectedHangarId
);

export const selectProductId = createSelector(
  selectStockState,
  (state: StockState) => state.selectedProductId
);

export const selectStockId = createSelector(
  selectStockState,
  (state: StockState) => state.selectedStockId
);

export const selectStockEntries = createSelector(
  selectStockState,
  (state: StockState) => state.stockEntries
);

export const selectCurrentStockEntry = createSelector(
  selectStockId,
  selectStockEntries,
  (stockId: {hangarPk: number, productPk: number}, allEntries: StockEntry[]) => {
    if (stockId && allEntries) {
      return allEntries.find(entry => entry.id === stockId);
    }
  }
);

export const selectStockEntriesOfProduct = createSelector(
  selectProductId,
  selectStockEntries,
  (productId: number, allEntries: StockEntry[]) => {
    if (productId && allEntries) {
      return allEntries.filter(entry => entry.id.productPk === productId);
    }
  }
);

export const selectStockEntriesOfHangar = createSelector(
  selectHangarId,
  selectStockEntries,
  (hangarId: number, allEntries: StockEntry[]) => {
    if (hangarId && allEntries) {
      return allEntries.filter(entry => entry.id.hangarPk === hangarId);
    }
  }
);



