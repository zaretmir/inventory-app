import { StockEntry } from '../../models/stock-entry';
import { StockAction, StockActionTypes } from './stock.actions';
import { tassign } from 'tassign';

export interface StockState {
  selectedHangarId: number;
  selectedProductId: number;
  selectedStockId: { hangarPk: number, productPk: number};
  stockEntries: StockEntry[];
}

export const initialState: StockState = {
  selectedHangarId: null,
  selectedProductId: null,
  selectedStockId: null,
  stockEntries: null
};

export function stockReducer(state: StockState = initialState, action: StockAction): StockState {
    switch (action.type) {
      case (StockActionTypes.SELECT_PRODUCT):
        return tassign(state, { selectedProductId: action.productId });
      case (StockActionTypes.SELECT_HANGAR):
          return tassign(state, { selectedProductId: action.hangarId });
      case (StockActionTypes.PRODUCT_STOCK_ENTRIES_LOADED):
        return tassign(state, { stockEntries: action.stockEntries} );
      case (StockActionTypes.HANGAR_STOCK_ENTRIES_LOADED):
          return tassign(state, { stockEntries: action.stockEntries} );
      default:
        return state;
    }
  }
